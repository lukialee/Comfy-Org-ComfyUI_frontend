import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export type ComfyPlugin = {
  id: string
  name: string
  url: string
  cover?: string
  description: string
  author: string
  author_url: string
  version: string
  verified: boolean
  enabled?: boolean
  visible?: boolean
}

export const usePluginStore = defineStore('pluginStore', {
  state: () => ({
    pluginMap: useStorage('pluginMap', {} as Record<string, ComfyPlugin>),
    installedPluginIdList: useStorage(
      'installedPluginIdList',
      [] as ComfyPlugin[]
    )
  }),

  actions: {
    reset() {
      this.pluginMap = {}
    },

    // todo: fetch plugin map from plugin repository (backend)
    async fetchPlugins() {
      const map: Record<string, ComfyPlugin> = {
        'cmf-Kx12g5k9': {
          id: 'cmf-Kx12g5k9',
          name: 'Example Plugin 1',
          cover:
            'https://i.ytimg.com/vi/E_GnupiwAeY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCXrr0sTYOQlixFDX6OcQ9JgCfePA',
          url: 'http://192.168.0.218:5180/plugin1',
          description:
            'This is an example plugin that demonstrates how to create a new plugin.',
          author: 'ComfyUI',
          author_url: 'https://comfyui.com',
          version: '0.1.13',
          verified: true
        }
      }

      const k = Object.keys(map)
      k.forEach((pluginId: string) => {
        const plugin = map[pluginId]
        this.pluginMap[plugin.id] = {
          ...plugin,
          enabled: this.pluginMap[plugin.id].enabled,
          visible: this.pluginMap[plugin.id].visible
        }
      })

      return map
    },

    getAvailablePluginList(): ComfyPlugin[] {
      return Object.keys(this.pluginMap).map((id) => this.pluginMap[id])
    },

    getInstalledPluginList(): ComfyPlugin[] {
      const list = this.installedPluginIdList.map((id) => this.pluginMap[id])
      return list
    },

    addToInstalledPluginList(pluginId: string) {
      const index = this.installedPluginIdList.indexOf(pluginId)

      if (index === -1) {
        this.installedPluginIdList.push(pluginId)
      }
    },

    removeFromInstalledPluginList(pluginId: string) {
      const index = this.installedPluginIdList.indexOf(pluginId)
      if (index !== -1) {
        this.installedPluginIdList.splice(index, 1)
      }
    },

    setPluginVisibility(id: string, visible: boolean) {
      if (!this.pluginMap[id]) return
      this.pluginMap[id].visible = visible
    },

    enablePlugin(id: string, enabled: boolean) {
      if (!this.pluginMap[id]) return
      this.pluginMap[id].enabled = enabled

      if (!enabled) {
        this.setPluginVisibility(id, false)
      }
    },

    getPluginById(id: string): ComfyPlugin | undefined {
      return this.pluginMap[id]
    }
  }
})
