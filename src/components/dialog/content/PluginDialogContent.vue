<template>
  <div class="PluginDialogContent w-[80vw] h-[70vh] flex flex-col">
    <header class="mt-4 flex justify-between">
      <h2 class="w-2/5 text-base font-semibold">Available</h2>
      <h2 class="w-3/5 text-base font-semibold">Installed</h2>
    </header>
    <main class="mt-4 flex-1 flex space-x-4 overflow-hidden">
      <section
        class="w-2/5 bg-zinc-950/50 p-3 rounded-lg overflow-x-hidden scrollable"
      >
        <ul
          v-if="availablePluginList.length > 0"
          class="list-none p-0 m-0 grid grid-cols-1 lg:grid-cols-2 gap-3"
        >
          <li
            v-for="plugin in availablePluginList"
            :key="plugin.id"
            class="relative bg-zinc-900 border-2 border-zinc-800 overflow-hidden rounded-lg"
          >
            <img
              :src="plugin.cover"
              class="w-full h-32 object-cover overflow-hidden"
            />
            <div class="p-2">
              <div class="text-sm font-semibold">{{ plugin.name }}</div>
              <div class="text-xs text-zinc-400 line-clamp-2 leading-4 mt-1">
                {{ plugin.description }}
              </div>
              <div class="flex md:space-x-2 mt-2">
                <button
                  @click="previewPlugin(plugin)"
                  class="cm-button gray sm hidden md:block"
                >
                  <i-material-symbols-visibility-rounded class="w-4 h-4" />
                </button>
                <button @click="installPlugin(plugin)" class="cm-button w-full">
                  Install Now
                </button>
              </div>
            </div>
          </li>
        </ul>
        <NoResultsPlaceholder
          v-else
          :title="$t('noResultsFound')"
          message="There is nothing available in the plugin store"
        />
      </section>
      <section
        class="w-3/5 bg-zinc-950/50 p-2 rounded-lg overflow-x-hidden scrollable"
      >
        <ul
          v-if="installedPluginList.length > 0"
          class="list-none p-0 m-0 space-y-3"
        >
          <li
            v-for="plugin in installedPluginList"
            :key="plugin.id"
            class="relative bg-zinc-950 border border-zinc-800 rounded-lg w-full flex justify-between space-x-3"
          >
            <img
              :src="plugin.cover"
              class="w-40 h-24 flex-shrink-0 object-cover rounded-l-lg"
            />
            <div class="flex-1 py-3 min-h-[5rem] flex flex-col justify-center">
              <div class="text-base font-semibold">{{ plugin.name }}</div>
              <div
                class="text-sm text-zinc-400 line-clamp-2 leading-5 mt-1 max-w-[18rem]"
              >
                {{ plugin.description }}
              </div>
            </div>
            <div class="flex space-x-3 p-3">
              <button
                @click="openPluginModal(plugin)"
                class="cm-button flex items-center space-x-1"
              >
                <i-material-symbols-light-open-in-new
                  class="w-6 h-6 opacity-35"
                />
                <span>Open</span>
              </button>
              <button
                @click="uninstallPlugin(plugin)"
                class="cm-button danger flex items-center space-x-2"
              >
                <i-ic-twotone-remove-from-queue class="w-6 h-6 opacity-35" />
                <span>Uninstall</span>
              </button>
            </div>
          </li>
        </ul>
        <NoResultsPlaceholder
          v-else
          title="No Installed Plugins"
          message="Please browse the plugin store to install plugins"
        />
      </section>
    </main>
    <footer class="flex justify-end mt-4 border-t border-zinc-800 pt-4">
      <button @click="closeModal()" class="cm-button">Close</button>
    </footer>

    <PluginPreview
      :plugin="currentPlugin"
      @close="currentPlugin = null"
      @install="installPlugin(currentPlugin)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useDialogStore } from '@/stores/dialogStore'
import { pluginManager, type ComfyPlugin } from '@/scripts/core/PluginManager'
import PluginPreview from '@/views/plugins/PluginPreview.vue'

const dialogStore = useDialogStore()
const currentPlugin = ref<ComfyPlugin | null>(null)
const installedPluginList = ref<ComfyPlugin[]>([])
const availablePluginList = ref<ComfyPlugin[]>([])

const updateLists = () => {
  installedPluginList.value = pluginManager.getInstalledPlugins()
  availablePluginList.value = pluginManager.getAvailablePlugins()
}

const installPlugin = (plugin: ComfyPlugin) => {
  pluginManager.installPlugin(plugin.id)
  currentPlugin.value = null
  updateLists()
}

const uninstallPlugin = (plugin: ComfyPlugin) => {
  pluginManager.uninstallPlugin(plugin.id)
  currentPlugin.value = null
  updateLists()
}

const previewPlugin = (plugin: ComfyPlugin) => {
  currentPlugin.value = plugin
}

const openPluginModal = (plugin: ComfyPlugin) => {
  pluginManager.setPluginVisibility(plugin.id, true)
}

const closeModal = () => {
  dialogStore.closeDialog()
}

onMounted(async () => {
  await pluginManager.fetchAvailablePlugins()
  updateLists()
  pluginManager.addEventListener('pluginsChanged', updateLists)
})

onBeforeUnmount(() => {
  pluginManager.removeEventListener('pluginsChanged', updateLists)
})
</script>
