import { ref, Ref } from 'vue'

type Callback = (...args: any[]) => void

type ComfyPluginFrameOptions = {
  overlay: boolean
  width: number
  height: number
}

const generateRandomHash = () => {
  return Math.random().toString(36).substring(2, 18)
}

class ComfyPluginFrame {
  public iframe: Ref<HTMLIFrameElement | null> = ref(null)
  public overlay: Ref<boolean> = ref(false)
  public width: Ref<number> = ref(0)
  public height: Ref<number> = ref(0)

  private eventListeners: { [key: string]: Callback[] } = {}

  init() {
    const iframe = document.createElement('iframe')

    /* 'allow-same-origin' should only be set for certified plugins */

    iframe.sandbox.add(
      'allow-same-origin',
      'allow-scripts',
      'allow-popups',
      'allow-forms',
      'allow-modals'
    )

    iframe.allow = 'camera; microphone; geolocation'
    iframe.style.overflowX = 'hidden'
    iframe.style.overflowY = 'auto'
    iframe.style.border = 'none'
    iframe.style.width = '100%'
    iframe.style.height = '100%'

    this.iframe.value = iframe

    window.removeEventListener('message', this.handleMessage.bind(this))
    window.addEventListener('message', this.handleMessage.bind(this))

    console.log('ComfyHost::init')
  }

  setOptions(options: ComfyPluginFrameOptions) {
    console.log('ComfyHost::setOptions', options)
    this.overlay.value = options.overlay === true ? true : false
    this.width.value = options.width || 450
    this.height.value = options.height || 760
  }

  setOverlay(overlay: boolean) {
    this.overlay.value = overlay
  }

  loadUrl(url: string) {
    if (this.iframe.value) {
      const urlObject = new URL(url)
      const hashParams = new URLSearchParams()
      hashParams.append('host', 'comfyEngine')
      hashParams.append('version', '2.3.2')
      hashParams.append('hash', generateRandomHash())
      urlObject.hash = hashParams.toString()
      this.iframe.value.src = urlObject.toString()
      console.log('ComfyHost::loadUrl', urlObject.toString())
    }
  }

  reload() {
    if (this.iframe.value) {
      const currentSrc = this.iframe.value.src
      console.log('ComfyHost::reload', currentSrc)
      this.iframe.value.src = 'about:blank'
      // Force DOM redraw
      this.iframe.value.offsetHeight

      setTimeout(() => {
        this.loadUrl(currentSrc)
      }, 10)
    }
  }

  private handleMessage(event: MessageEvent) {
    if (
      !this.iframe.value?.src ||
      event.origin !== new URL(this.iframe.value?.src || '').origin
    ) {
      return
    }

    console.log('ComfyHost::handleMessage', event.data)

    const { action, payload } = event.data
    this.emit(action, payload)
  }

  on(event: string, callback: Callback) {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = []
    }
    this.eventListeners[event].push(callback)
  }

  off(event: string, callback?: Callback) {
    if (!this.eventListeners[event]) return

    if (callback) {
      this.eventListeners[event] = this.eventListeners[event].filter(
        (cb) => cb !== callback
      )
    } else {
      delete this.eventListeners[event]
    }
  }

  once(event: string, callback: Callback) {
    const onceCallback = (...args: any[]) => {
      this.off(event, onceCallback)
      callback(...args)
    }
    this.on(event, onceCallback)
  }

  private emit(event: string, ...args: any[]) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].forEach((callback) => callback(...args))
    }
  }

  destroy() {
    console.log('ComfyHost::destroy', this)
    if (!this.iframe.value) return

    this.sendMessage({
      action: 'destroy',
      payload: {}
    })

    /* wait a little bit before destroying the iframe */
    setTimeout(() => {
      window.removeEventListener('message', this.handleMessage.bind(this))
      this.eventListeners = {}

      if (this.iframe.value && this.iframe.value.parentNode) {
        this.iframe.value.parentNode.removeChild(this.iframe.value)
      }

      this.iframe.value = null
    }, 100)
  }

  resize(width: string, height: string) {
    if (this.iframe.value) {
      console.log('ComfyHost::resize iframe', width, height)
      this.iframe.value.style.width = width
      this.iframe.value.style.height = height
    }
  }

  sendMessage(message: any) {
    if (this.iframe.value && this.iframe.value.contentWindow) {
      console.log('ComfyHost::sendMessage', message)
      this.iframe.value.contentWindow.postMessage(message, '*')
    }
  }
}

export default ComfyPluginFrame
