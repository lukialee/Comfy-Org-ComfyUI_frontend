<template>
  <teleport to="#comfy-plugins">
    <article
      v-for="plugin in installedPlugins"
      :key="plugin.id"
      :class="['ComfyPlugin', plugin.id]"
      :aria-label="plugin.name"
    >
      <PluginComponent
        :plugin="plugin"
        :key="plugin.id"
        @close="closePluginModal"
      />
    </article>
  </teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { pluginManager, type ComfyPlugin } from '@/scripts/core/PluginManager'
import PluginComponent from './PluginComponent.vue'

const installedPlugins = ref<ComfyPlugin[]>([])

const updatePlugins = () => {
  installedPlugins.value = pluginManager.getInstalledPlugins()
}

const closePluginModal = (plugin: ComfyPlugin) => {
  console.log('PluginManager: Closing plugin:', plugin.id)
  pluginManager.setPluginVisibility(plugin.id, false)
}

onMounted(async () => {
  await pluginManager.fetchAvailablePlugins()
  updatePlugins()
  pluginManager.addEventListener('pluginsChanged', updatePlugins)
  pluginManager.addEventListener('pluginVisibilityChanged', (event: CustomEvent) => {
    console.log('Plugin visibility changed event:', event.detail)
  })
})

onBeforeUnmount(() => {
  pluginManager.removeEventListener('pluginsChanged', updatePlugins)
  pluginManager.removeEventListener('pluginVisibilityChanged', () => {})
})
</script>
