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
      v-if="plugin.visible && pluginInstance?.overlay"
      class="ComfyPluginOverlay fixed z-[5000] inset-0 backdrop-blur-sm bg-purple-950/60"
      @click="close()"
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
      v-show="plugin.visible"
      ref="ComfyPluginWrapper"
      :style="{ width: plugin.width + 'px', height: plugin.height + 'px' }"
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
            @click="close()"
            class="cursor-pointer bg-zinc-300 rounded-md outline-none border-none flex items-center justify-center text-zinc-500 px-3 py-1 hover:text-blue-100 hover:bg-blue-500 focus:outline-none"
          >
            <i-material-symbols-close-rounded class="w-6 h-6" />
          </button>
        </div>
      </header>

      <main
        ref="iframeWrapperRef"
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
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import ComfyPluginFrame from './host/ComfyPluginFrame'
import SpinLoader from './SpinLoader.vue'
import { usePluginStore } from '@/stores/pluginStore'

const emit = defineEmits(['close'])

const props = defineProps({
  plugin: <any>{
    id: { type: String, required: true },
    name: { type: String, default: '' },
    url: { type: String, required: true },
    enabled: { type: Boolean, default: true },
    visible: { type: Boolean, default: false }
  }
})

const loaded = ref(false)
const overlayVisible = ref(false)
const pluginStore = usePluginStore()
const pluginInstance = new ComfyPluginFrame()
const iframeWrapperRef = ref<HTMLElement | null>(null)
const ComfyPluginWrapper = ref<HTMLElement | null>(null)

const close = () => {
  pluginStore.setPluginVisibility(props.plugin.id, false)
  emit('close', props.plugin)
}

watch(
  () => props.plugin.url,
  (newUrl) => {
    if (newUrl) {
      console.log('New Plugin URL', newUrl)
    }
  }
)

const resize = (width: number, height: number) => {
  console.log('Resize', width, height)
  //pluginInstance.resize(width+'px', height+'px')

  if (ComfyPluginWrapper.value) {
    ComfyPluginWrapper.value.style.width = `${width}px`
    ComfyPluginWrapper.value.style.height = `${height}px`
  }
}

const reload = () => {
  loaded.value = false
  pluginInstance.reload()
}

onMounted(() => {
  const pluginUrl = props.plugin.url

  pluginInstance.init()

  if (iframeWrapperRef.value && pluginInstance.iframe.value) {
    iframeWrapperRef.value.appendChild(pluginInstance.iframe.value)
    pluginInstance.loadUrl(pluginUrl)
    pluginInstance.iframe.value.style.fontSize = '0.75rem'

    pluginInstance.iframe.value.addEventListener('load', () => {
      loaded.value = true

      pluginInstance.sendMessage({
        action: 'installed',
        payload: {}
      })

      console.log('Plugin Loaded')
    })

    resize(450, 760)
  }

  pluginInstance.on('close', close)

  pluginInstance.on('resize', (e: any) => {
    resize(e.width, e.height)
  })

  pluginInstance.on('handshake', (e: any) => {
    const { overlay, width, height } = e
    pluginInstance.setOptions({ overlay, width, height })
  })
})

onBeforeUnmount(() => {
  pluginInstance.destroy()
})
</script>
