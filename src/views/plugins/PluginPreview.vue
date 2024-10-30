<template>
  <teleport to="body">
    <div class="PluginPreview">
      <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0"
      >
        <div
          v-if="plugin"
          @click="$emit('close')"
          class="fixed inset-0 backdrop-blur-sm bg-purple-950/60 z-[5000]"
        ></div>
      </transition>

      <transition
        enter-active-class="transition ease-in-out duration-300"
        enter-from-class="transform translate-y-full"
        enter-to-class="transform translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform translate-y-0"
        leave-to-class="transform translate-y-full"
      >
        <div
          v-if="plugin"
          class="absolute left-1/2 -translate-x-1/2 top-20 flex items-center justify-center z-[5000]"
        >
          <div class="relative w-96 bg-zinc-950/90 rounded-lg">
            <article
              class="relative bg-zinc-900 p-0 border-2 border-zinc-950 rounded-xl overflow-hidden"
            >
              <img
                :src="plugin.cover"
                class="w-full h-60 object-cover overflow-hidden rounded-t-md"
              />
              <div class="p-4">
                <div class="text-lg font-semibold">{{ plugin.name }}</div>
                <div
                  class="text-base text-zinc-400 line-clamp-3 leading-6 mt-1"
                >
                  {{ plugin.description }}
                </div>

                <div
                  class="mt-4 text-sm text-zinc-400 leading-6 divide-y divide-zinc-950"
                >
                  <dt class="flex items-center justify-between py-1">
                    <span class="text-white w-32">Author</span>
                    <span class="truncate">
                      <a
                        :href="plugin.author_url"
                        target="_blank"
                        class="underline"
                        >{{ plugin.author }}</a
                      >
                    </span>
                  </dt>
                  <dt class="flex items-center justify-between py-1">
                    <span class="text-white w-32">URL</span>
                    <span class="truncate">{{ plugin.url }}</span>
                  </dt>
                  <dt class="flex items-center justify-between py-1">
                    <span class="text-white w-32">Version</span>
                    <span class="truncate">{{ plugin.version }}</span>
                  </dt>
                  <dt class="flex items-center justify-between py-1">
                    <span class="text-white w-32">ID</span>
                    <span class="truncate">{{ plugin.id }}</span>
                  </dt>
                  <dt class="flex items-center justify-between py-1">
                    <span class="text-white w-32">Verified</span>
                    <span class="truncate">
                      <i-material-symbols-verified
                        v-if="plugin.verified"
                        class="w-4 h-4 text-green-500"
                      />
                      <i-material-symbols-verified-outline
                        v-else
                        class="w-4 h-4 text-red-500"
                      />
                    </span>
                  </dt>
                </div>

                <div class="flex space-x-2 mt-4">
                  <button @click="$emit('install')" class="cm-button lg w-full">
                    Install Now
                  </button>
                </div>
              </div>
            </article>
            <button
              @click="$emit('close')"
              class="cursor-pointer absolute -top-4 -right-4 w-12 h-12 rounded-full bg-zinc-950 flex-shrink-0 flex items-center justify-center"
            >
              <i-material-symbols-close-rounded class="w-6 h-6" />
            </button>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePluginStore, type ComfyPlugin } from '@/stores/pluginStore'

const emit = defineEmits(['close', 'install'])

const props = defineProps({
  plugin: { type: Object as PropType<ComfyPlugin>, required: false }
})
</script>
