<template>
  <button
    @click="showPluginModal"
    v-tooltip="{ value: 'Plugins', showDelay: 300, hideDelay: 300 }"
    class="w-full aspect-square rounded-none p-button p-component p-button-icon-only p-button-text side-bar-button p-button-secondary"
  >
    <i-material-symbols:menu-book class="w-6 h-6 opacity-50" />
  </button>
</template>

<script setup lang="ts">
import { useDialogStore } from '@/stores/dialogStore'
import PluginDialogContent from '@/components/dialog/content/PluginDialogContent.vue'
import PluginDialogHeader from '@/components/dialog/header/PluginDialogHeader.vue'

const dialogStore = useDialogStore()
const showPluginModal = () => {
  dialogStore.showDialog({
    headerComponent: PluginDialogHeader,
    component: PluginDialogContent
  })
}
</script>
