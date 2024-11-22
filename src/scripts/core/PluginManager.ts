import ComfyPluginFrame from './ComfyPluginFrame'

export type ComfyPlugin = {
  id: string
  name: string
  url: string
  cover?: string
  description?: string
  author?: string
  author_url?: string
  version?: string
  verified?: boolean
  headless?: boolean
  transparent?: boolean
}

export class PluginManager extends EventTarget {
  private plugins: Map<string, ComfyPlugin> = new Map()
  private instances: Map<string, ComfyPluginFrame> = new Map()
  private installedPluginIds: Set<string> = new Set()

  constructor() {
    super()
    this.getLocalState()
  }

  private getLocalState() {
    const savedPlugins = localStorage.getItem('pluginMap')
    const savedInstalledIds = localStorage.getItem('installedPluginIds')
    
    if (savedPlugins) {
      const pluginMap = JSON.parse(savedPlugins)
      Object.values(pluginMap).forEach((plugin: ComfyPlugin) => {
        this.plugins.set(plugin.id, plugin)
      })
    }
    
    if (savedInstalledIds) {
      this.installedPluginIds = new Set(JSON.parse(savedInstalledIds))
    }
  }

  private saveLocalState() {
    const pluginMap = Object.fromEntries(this.plugins.entries())
    const installedIds = Array.from(this.installedPluginIds)
    
    localStorage.setItem('pluginMap', JSON.stringify(pluginMap))
    localStorage.setItem('installedPluginIds', JSON.stringify(installedIds))
  }

  async fetchAvailablePlugins() {
    // Mock API call - replace with real API call later
    const pluginList: Record<string, ComfyPlugin> = {
      'cmf-Kx12g5k9': {
        id: 'cmf-Kx12g5k9',
        name: 'Example Plugin 1',
        cover: 'https://placehold.co/700x400',
        url: 'http://localhost:5180/plugin1',
        description: 'This is an example plugin that demonstrates how to create a new plugin.',
        author: 'ComfyUI',
        author_url: 'https://comfyui.com',
        version: '0.1.13',
        verified: true
      },
      'cmf-15e96d46': {
        id: 'cmf-15e96d46',
        name: 'Example Plugin 2',
        cover: 'https://placehold.co/700x400',
        url: 'http://localhost:5180/plugin2',
        description: 'This is an example plugin that demonstrates how to create a new plugin.',
        author: 'ComfyUI',
        author_url: 'https://comfyui.com',
        version: '0.2.13',
        verified: false
      }
    }

    Object.values(pluginList).forEach(plugin => {
      this.plugins.set(plugin.id, plugin)
    })

    this.saveLocalState()
    return this.getAvailablePlugins()
  }

  getAvailablePlugins(): ComfyPlugin[] {
    return Array.from(this.plugins.values()).filter(
      plugin => !this.installedPluginIds.has(plugin.id)
    )
  }

  getInstalledPlugins(): ComfyPlugin[] {
    return Array.from(this.installedPluginIds)
      .map(pluginId => this.plugins.get(pluginId))
      .filter((plugin): plugin is ComfyPlugin => plugin !== undefined)
  }

  installPlugin(pluginId: string) {
    const plugin = this.plugins.get(pluginId)
    if (plugin) {
      this.installedPluginIds.add(pluginId)
      this.saveLocalState()
      this.registerPlugin(plugin)
      this.dispatchEvent(new CustomEvent('pluginsChanged'))
    }
  }

  uninstallPlugin(pluginId: string) {
    this.destroyInstance(pluginId)
    this.installedPluginIds.delete(pluginId)
    this.saveLocalState()
    this.dispatchEvent(new CustomEvent('pluginsChanged'))
  }

  setPluginVisibility(pluginId: string, visible: boolean) {
    const instance = this.getInstance(pluginId)
    if (instance) {
      console.log('PluginManager: Setting visibility for', pluginId, 'to', visible, 'current:', instance.visible.value)
      instance.setVisibility(visible)
      this.dispatchEvent(new CustomEvent('pluginVisibilityChanged', {
        detail: { pluginId, visible }
      }))
    }
  }

  /**
   * Register a new plugin and create an instance
   * @param plugin - The plugin configuration
   */
  registerPlugin(plugin: ComfyPlugin) {
    this.plugins.set(plugin.id, plugin)
    this.createInstance(plugin)
  }

  /**
   * Create a new plugin instance (iframe) if one doesn't exist
   * @param plugin - The plugin configuration
   * @returns The plugin instance
   */
  createInstance(plugin: ComfyPlugin): ComfyPluginFrame {
    const existingInstance = this.instances.get(plugin.id)
    if (existingInstance?.iframe?.value) {
      existingInstance.setVisibility(false)
      return existingInstance
    }

    const instance = new ComfyPluginFrame(plugin.id)
    this.instances.set(plugin.id, instance)
    
    instance.setVisibility(false)
    
    return instance
  }

  /**
   * Get an existing plugin instance by ID
   * @param pluginId - The plugin ID
   * @returns The plugin instance or undefined if not found
   */
  getInstance(pluginId: string): ComfyPluginFrame | undefined {
    return this.instances.get(pluginId)
  }

  /**
   * Attach a plugin instance to the instances map
   * @param pluginId - The plugin ID
   * @param instance - The plugin instance
   */
  private attachInstance(pluginId: string, instance: ComfyPluginFrame) {
    this.instances.set(pluginId, instance)
  }

  private detachInstance(pluginId: string) {
    this.instances.delete(pluginId)
  }

  /**
   * Destroy a plugin instance and remove it from the instances map
   * @param pluginId - The plugin ID
   */
  destroyInstance(pluginId: string) {
    const instance = this.getInstance(pluginId)
    if (instance && typeof instance.destroy === 'function') {
      instance.destroy()
    }
    this.detachInstance(pluginId)
  }
}

export const pluginManager = new PluginManager()
