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

export const instances: Record<string, any> = {}

export const usePluginStore = defineStore('pluginStore', {
  state: () => ({
    pluginMap: useStorage('pluginMap', {} as Record<string, ComfyPlugin>),
    installedPluginIdList: useStorage('installedPluginIdList', [] as string[])
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
          cover: 'https://placehold.co/700x400',
          url: 'http://192.168.0.218:5180/plugin1',
          description:
            'This is an example plugin that demonstrates how to create a new plugin.',
          author: 'ComfyUI',
          author_url: 'https://comfyui.com',
          version: '0.1.13',
          verified: true
        },
        'cmf-15e96d46': {
          id: 'cmf-15e96d46',
          name: 'Example Plugin 2',
          cover: 'https://placehold.co/700x400',
          url: 'http://192.168.0.218:5180/plugin2',
          description:
            'This is an example plugin that demonstrates how to create a new plugin.',
          author: 'ComfyUI',
          author_url: 'https://comfyui.com',
          version: '0.2.13',
          verified: false
        }
      }

      const k = Object.keys(map)

      k.forEach((pluginId: string) => {
        const plugin = map[pluginId]

        if (!this.pluginMap[plugin.id]) {
          this.pluginMap[plugin.id] = plugin
        }

        const p = this.pluginMap[plugin.id]
        const enabled = p.enabled
        const visible = p.visible

        // update plugin with enabled and visible
        this.pluginMap[plugin.id] = {
          ...plugin,
          enabled,
          visible
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
      const instance = this.getInstance(pluginId)
      if (instance) {
        instance.destroy()
      }

      setTimeout(() => {
        const index = this.installedPluginIdList.indexOf(pluginId)
        if (index !== -1) {
          this.installedPluginIdList.splice(index, 1)
        }
      }, 100)
    },

    getInstance(pluginId: string): any | undefined {
      return instances[pluginId]
    },

    attachInstance(pluginId: string, instance: any) {
      instances[pluginId] = instance
    },

    detachInstance(pluginId: string) {
      delete instances[pluginId]
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
