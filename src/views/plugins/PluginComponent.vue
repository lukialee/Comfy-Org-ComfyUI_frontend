<template>
  <transition
    enter-active-class="transition ease-in-out duration-300"
    enter-from-class="transform -translate-y-full"
    enter-to-class="transform translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="transform translate-y-0"
    leave-to-class="transform -translate-y-full"
  >
    <dt
      v-if="pluginInstance?.visible.value && pluginInstance?.overlay.value"
      class="ComfyPluginOverlay fixed z-[5000] inset-0 backdrop-blur-sm bg-purple-950/60"
      @click="closePluginModal()"
    ></dt>
  </transition>

  <transition
    enter-active-class="transition ease-in-out duration-300"
    enter-from-class="transform translate-y-full"
    enter-to-class="transform translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="transform translate-y-0"
    leave-to-class="transform translate-y-full"
  >
    <section
      v-show="pluginInstance?.visible.value"
      ref="pluginModalRef"
      :style="{ 
        width: pluginInstance?.width.value + 'px', 
        height: pluginInstance?.height.value + 'px' 
      }"
      :class="[
        plugin.transparent ? 'bg-transparent' : 'bg-white dark:bg-zinc-950'
      ]"
      class="absolute scale-[0.80] origin-top left-1/2 -translate-x-1/2 top-20 transition-all ease-in-out duration-100 flex flex-col rounded-lg shadow-xl overflow-hidden z-[5000]"
    >
      <header
        v-if="!plugin.headless"
        class="ComfyPluginHeader flex justify-between items-center px-4 py-3 bg-gray-100"
      >
        <h2 class="text-lg font-semibold text-gray-800">{{ plugin.name }}</h2>
        <div class="flex items-center space-x-2">
          <button
            @click="reload()"
            class="cursor-pointer bg-zinc-300 rounded-md outline-none border-none flex items-center justify-center text-zinc-500 px-3 py-1 hover:text-blue-100 hover:bg-blue-500 focus:outline-none"
          >
            <i-material-symbols-refresh-rounded class="w-6 h-6" />
          </button>
          <button
            @click="closePluginModal()"
            class="cursor-pointer bg-zinc-300 rounded-md outline-none border-none flex items-center justify-center text-zinc-500 px-3 py-1 hover:text-blue-100 hover:bg-blue-500 focus:outline-none"
          >
            <i-material-symbols-close-rounded class="w-6 h-6" />
          </button>
        </div>
      </header>

      <main
        ref="iframeParentRef"
        class="ComfyPluginBody relative w-full h-[calc(100%-3rem)] overflow-hidden"
      >
        <div
          v-if="!loaded"
          class="absolute inset-0 bg-zinc-950/90 flex items-center justify-center"
        >
          <SpinLoader class="w-8 h-8 text-zinc-300" />
        </div>
      </main>
    </section>
  </transition>
</template>

<script setup lang="ts">
import { app } from '@/scripts/app'
import { ref, shallowRef, computed, onMounted, onBeforeUnmount, PropType, watch } from 'vue'
import ComfyPluginFrame from '@/scripts/core/ComfyPluginFrame'
import SpinLoader from './SpinLoader.vue'
import { pluginManager, type ComfyPlugin } from '@/scripts/core/PluginManager'

const emit = defineEmits(['close'])

const props = defineProps({
  plugin: {
    type: Object as PropType<ComfyPlugin>,
    required: true
  }
})

const loaded = ref(false)
const pluginInstance = shallowRef<ComfyPluginFrame | null>(null)
const iframeParentRef = ref<HTMLElement | null>(null)
const pluginModalRef = ref<HTMLElement | null>(null)

const closePluginModal = () => {
  if (!pluginInstance.value) return
  
  console.log('PluginComponent: Closing plugin:', props.plugin.id)
  pluginInstance.value.setVisibility(false)
  emit('close', props.plugin)
}

const reload = () => {
  loaded.value = false
  pluginInstance.value?.reload()
}

const start = () => {
  console.log('_______ MOUNTED PluginComponent _______', props.plugin.id)

  pluginInstance.value = pluginManager.createInstance(props.plugin)
  
  pluginInstance.value?.init(
    pluginModalRef,
    iframeParentRef,
    props.plugin.url
  )

  setupListeners()
}

const setupListeners = () => {
  if (!pluginInstance.value) return

  pluginInstance.value.on('loaded', () => {
    loaded.value = true
  })

  pluginInstance.value.on('close', closePluginModal)

  pluginInstance.value.on('resize', (e: any) => {
    // Handle resize if needed
  })

  /*
   * notify the plugin that the app and litegraph are ready
   */
  if (app.ready) {
    pluginInstance.value.sendMessage({
      action: 'ready',
      payload: {}
    })
  } else {
    app.addEventListener('ready', () => {
      pluginInstance.value?.sendMessage({
        action: 'ready',
        payload: {}
      })
    })
  }

  pluginInstance.value.on('visibilityChanged', (visible: boolean) => {
    console.log('Plugin visibility changed in component:', props.plugin.id, visible)
  })
}

onMounted(() => {
  start()
})

onBeforeUnmount(() => {
  console.log('**** PluginComponent::onBeforeUnmount', props.plugin.id)
  pluginManager.destroyInstance(props.plugin.id)
})
</script>
