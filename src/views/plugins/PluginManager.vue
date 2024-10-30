<template>
  <teleport to="#comfy-plugins">
    <article
      v-for="plugin in userPluginList"
      :key="plugin.id"
      :class="['ComfyPlugin', plugin.id]"
      :disabled="!plugin.enabled"
      :aria-label="plugin.name"
    >
      <PluginComponent
        v-if="plugin.enabled"
        :plugin="plugin"
        :key="plugin.id"
        @close="closePlugin"
      />
    </article>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePluginStore, type ComfyPlugin } from '@/stores/pluginStore'
import PluginComponent from './PluginComponent.vue'

const pluginStore = usePluginStore()
const userPluginList = computed(() => pluginStore.getInstalledPluginList())

const closePlugin = (plugin: ComfyPlugin) => {
  console.log('*** closePlugin', plugin)
}

onMounted(async () => {
  await pluginStore.fetchPlugins()
})
</script>
