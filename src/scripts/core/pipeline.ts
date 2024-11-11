/**
 * Public methods for SDK
 * Methods we want to expose to the SDK should be defined / moved here
 */

import { api } from '../api'
import { useToastStore } from '@/stores/toastStore'
import type { ComfyApp } from '../app'
import type { IWidget, LGraphNode } from '@comfyorg/litegraph'

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
  }
}

export default pipeline
