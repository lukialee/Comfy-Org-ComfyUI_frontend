/**
 * Public methods for SDK
 * Methods we want to expose to the SDK should be defined / moved here
 */

import { api } from '../api'
import { useToastStore } from '@/stores/toastStore'
import type { ComfyApp } from '../app'
import type { IWidget, LGraphNode } from '@comfyorg/litegraph'

type WidgetValue = string | number | boolean | object

const pipeline = {
  /**
   * Get the URL of an image
   * @param app - The ComfyApp instance
   * @param filename - The filename of the image
   * @param subfolder - The subfolder of the image
   */
  getImageURL: (app: ComfyApp, filename: string, subfolder: string) => {
    return api.apiURL(
      `/view?filename=${encodeURIComponent(filename)}&type=input&subfolder=${subfolder}${app.getPreviewFormatParam()}${app.getRandParam()}`
    )
  },

  /**
   * Update an image in a node (i.e: after an image upload)
   * @param app - The ComfyApp instance
   * @param node - The LiteGraph node to update
   * @param filename - The filename of the image to update
   */
  updateNodeImage(app: ComfyApp, node: LGraphNode, filename: string) {
    const imageWidget = node.widgets.find((w) => w.name === 'image')
    if (!imageWidget) return

    console.log('Pipeline: updateNodeImage', filename)
    const img = new Image()
    img.onload = () => {
      // @ts-expect-error
      node.imgs = [img]
      app.graph.setDirtyCanvas(true)
    }

    let folder_separator = filename.lastIndexOf('/')
    let subfolder = ''

    if (folder_separator > -1) {
      subfolder = filename.substring(0, folder_separator)
      filename = filename.substring(folder_separator + 1)
    }

    img.src = this.getImageURL(app, filename, subfolder)
    // @ts-expect-error
    node.setSizeForImage?.()

    app.triggerWidgetUpdateEvent(
      node,
      'image',
      String(filename),
      imageWidget.options.values
    )
  },

  /**
   * Upload a file to the server and update the node image
   * @param app - The ComfyApp instance
   * @param node - The LiteGraph node to update
   * @param imageWidget - The image widget to update
   * @param file - The file to upload
   * @param needUpdate - Whether to update the node image
   * @param isPasted - Whether the file was pasted
   */
  async uploadImageToNode(
    app: ComfyApp,
    node: LGraphNode,
    file: File,
    needUpdate: boolean,
    isPasted: boolean = false
  ) {
    const imageWidget = node.widgets.find((w) => w.name === 'image')
    if (!imageWidget) return

    try {
      // Wrap file in formdata so it includes filename
      const body = new FormData()
      body.append('image', file)
      if (isPasted) body.append('subfolder', 'pasted')
      const resp = await api.fetchApi('/upload/image', {
        method: 'POST',
        body
      })

      if (resp.status === 200) {
        const data = await resp.json()
        // Add the file to the dropdown list and update the widget value
        let path = data.name
        if (data.subfolder) path = data.subfolder + '/' + path

        if (!imageWidget.options.values.includes(path)) {
          imageWidget.options.values.push(path)
        }

        if (needUpdate) {
          imageWidget.value = path
          this.updateNodeImage(app, node, String(imageWidget.value))
        }
      } else {
        useToastStore().addAlert(resp.status + ' - ' + resp.statusText)
      }
    } catch (error) {
      useToastStore().addAlert(error)
    }
  },

  /**
   * Update a widget by its widget name
   * @param app - The ComfyApp instance
   * @param node - The LiteGraph node to update
   * @param widgetName - The name of the widget to update
   * @param value - The value to update the widget to
   */
  updateNodeWidgetByName(
    app: ComfyApp,
    node: LGraphNode,
    widgetName: string,
    value: WidgetValue
  ) {
    if (node && node.widgets) {
      const widgetIdx = node.widgets.findIndex((w) => w.name === widgetName)

      if (widgetIdx > -1) {
        console.log(
          'pipeline: update widget',
          widgetName,
          'on node',
          node.id,
          'with value',
          value
        )

        const widget = node.widgets[widgetIdx]
        if (widget) {
          widget.value = value
        }

        if (node.widgets_values && node.widgets_values[widgetIdx]) {
          node.widgets_values[widgetIdx] = value
        }

        if (widget.type === 'combo' && widget.name === 'image') {
          this.updateNodeImage(app, node, String(value))
        }
      }
    } else {
      console.error(
        'pipeline: unable to update widget',
        widgetName,
        'on node',
        node.id
      )
    }

    app.graph.setDirtyCanvas(true)
  },

  /**
   * Update multiple widgets at the same time on a node
   * @param app - The ComfyApp instance
   * @param node - The LiteGraph node to update
   * @param widgetIdxs - The indices of the widgets to update
   * @param values - The values to update the widgets to
   */
  updateNodeWidgets(
    app: ComfyApp,
    node: LGraphNode,
    widgetIdxs: number[],
    values: WidgetValue[]
  ) {
    if (!app.graph) return

    if (node && node.id && node.widgets) {
      const nodeId = node.id

      console.log(
        `pipeline: update node#${nodeId} widgets [${widgetIdxs}] with values [${values}]`
      )

      for (let i = 0; i < widgetIdxs.length; i++) {
        const widgetIdx = widgetIdxs[i]
        const value = values[i]
        const widget = node.widgets[widgetIdx]

        if (widget) {
          widget.value = value
        }

        if (node.widgets_values && node.widgets_values[widgetIdx]) {
          node.widgets_values[widgetIdx] = value
        }

        if (widget.type === 'combo' && widget.name === 'image') {
          this.updateNodeImage(app, node, String(value))
        }
      }
    }

    app.graph.setDirtyCanvas(true)
  },

  /**
   * Update all widgets of a specific nodeId
   * @param app - The ComfyApp instance
   * @param nodeId - The ID of the LiteGraph node to update the widgets on
   * @param widgetIdxs - The indices of the widgets to update
   * @param values - The values to update the widgets to
   */
  updateNodeWidgetsById(
    app: ComfyApp,
    nodeId: string,
    widgetIdxs: number[],
    values: WidgetValue[]
  ) {
    if (!app.graph) return

    const node = app.graph.getNodeById(nodeId)

    if (node) {
      this.updateNodeWidgets(app, node, widgetIdxs, values)
    }
  },

  /**
   * Get the value of a widget of a specific nodeId
   * @param app - The ComfyApp instance
   * @param nodeId - The ID of the LiteGraph node to get the widget value of
   * @param widgetIdx - The index of the widget to get the value of
   * @param defaultValue - The default value to return if the widget value is not found
   */
  getNodeWidgetValueById(
    app: ComfyApp,
    nodeId: string,
    widgetIdx: number,
    defaultValue?: WidgetValue
  ) {
    let value = defaultValue

    const widgets = this.getNodeWidgetsById(app, nodeId)

    if (widgets && widgets[widgetIdx]) {
      const widget = widgets[widgetIdx]
      value = widget.value
      console.log(
        `pipeline: found value for node #${nodeId} [${widget.name}] ===`,
        value
      )
      return typeof value !== 'undefined' ? value : defaultValue
    }

    console.log(
      `pipeline: value not found for node ${nodeId} widget ${widgetIdx}, fallback to any default value`,
      defaultValue
    )

    return defaultValue
  },

  /**
   * Get the widgets of a specific nodeId
   * @param app - The ComfyApp instance
   * @param nodeId - The ID of the LiteGraph node to get the widgets of
   */
  getNodeWidgetsById(app: ComfyApp, nodeId: string) {
    const node = app.graph ? app.graph.getNodeById(nodeId) : null
    return node ? node.widgets : null
  },

  /**
   * Get the selector options of a widget of a specific nodeId
   * @param app - The ComfyApp instance
   * @param nodeId - The ID of the LiteGraph node to get the widget selector options of
   * @param widgetIdx - The index of the widget to get the selector options of
   */
  getNodeWidgetSelectorOptionsById(
    app: ComfyApp,
    nodeId: string,
    widgetIdx: number
  ) {
    const widgets = this.getNodeWidgetsById(app, nodeId)
    return widgets && widgets[widgetIdx] ? widgets[widgetIdx].options : null
  },

  /**
   * Execute any callback of certain widgets of a specific nodeId
   * @param app - The ComfyApp instance
   * @param nodeId - The ID of the LiteGraph node to call the widget callback on
   * @param widgetIdxs - The indices of the widgets to call the callback on
   * @param values - The values to pass to the callback
   */
  callNodeWidgetsById(
    app: ComfyApp,
    nodeId: string,
    widgetIdxs: number[],
    values: WidgetValue[]
  ) {
    if (!app.graph) return

    const node = app.graph.getNodeById(nodeId)

    if (node && node.widgets) {
      for (let i = 0; i < widgetIdxs.length; i++) {
        const widgetIdx = widgetIdxs[i]
        const value = values[i]
        const widget = node.widgets[widgetIdx]
        widget?.callback?.(value)
      }
    }
  }
}

export default pipeline
