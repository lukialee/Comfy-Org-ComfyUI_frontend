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

const DEFAULT_WIDTH = 450
const DEFAULT_HEIGHT = 760

class ComfyPluginFrame {
  public id: string | null = null
  public hash: string | null = null
  public iframe: Ref<HTMLIFrameElement | null> = ref(null)
  public modalElement: Ref<HTMLElement | null> = ref(null)
  public parentElement: Ref<HTMLElement | null> = ref(null)
  public width: Ref<number> = ref(DEFAULT_WIDTH)
  public height: Ref<number> = ref(DEFAULT_HEIGHT)
  public overlay: Ref<boolean> = ref(true)
  public visible: Ref<boolean> = ref(false)

  private eventListeners: { [key: string]: Callback[] } = {}
  private messageHandler: ((event: MessageEvent) => void) | null = null

  constructor(id: string) {
    this.id = id
    this.visible.value = false
    console.log('ComfyHost::constructor', this.id, 'visible:', this.visible.value)
  }

  init(modalElement: Ref<HTMLElement>, parentElement: Ref<HTMLElement>, url: string) {
    if (!modalElement?.value || !parentElement?.value) {
      console.error('ComfyHost::init() - missing plugin wrapper', this.id)
      return
    }

    if (!url) {
      console.error('ComfyHost::init() - missing plugin url', this.id)
      return
    }

    // Add check to prevent multiple initializations
    if (this.iframe.value) {
      console.error('ComfyHost::init() - iframe already exists', this.id)
      return
    }

    console.log('.... ComfyHost::initializing plugin', this.id, url)

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
    this.modalElement = modalElement
    this.parentElement = parentElement
    parentElement.value.appendChild(this.iframe.value)

    this.removeListeners()
    this.messageHandler = this.handleMessage.bind(this)
    window.addEventListener('message', this.messageHandler)

    this.loadUrl(url)
    this.resize(this.width.value, this.height.value)
    this.visible.value = false
  }

  removeListeners() {
    this.eventListeners = {}
    // Only remove the specific handler for this instance
    if (this.messageHandler) {
      window.removeEventListener('message', this.messageHandler)
      this.messageHandler = null
    }
  }

  setOptions(options: ComfyPluginFrameOptions) {
    // console.log('.... ComfyHost::setOptions', this.id, options)
    this.overlay.value = options.overlay === false ? false : true
    this.width.value = options.width || DEFAULT_WIDTH
    this.height.value = options.height || DEFAULT_HEIGHT
    this.resize(this.width.value, this.height.value)
  }

  resize(width: number, height: number) {
    if (!this.iframe.value || !this.modalElement.value) {
      console.error('ComfyHost::resize() - iframe not found', this.id)
      return
    }

    this.width.value = width
    this.height.value = height

    if (this.modalElement.value) {
      this.modalElement.value.style.width = `${width}px`
      this.modalElement.value.style.height = `${height}px`
    }

    // console.log('.... ComfyHost::resizing wrapper', this.id, width, height)
  }

  loadUrl(url: string) {
    if (this.iframe.value) {
      this.hash = generateRandomHash()
      const urlObject = new URL(url)
      const hashParams = new URLSearchParams()
      hashParams.append('host', 'comfyEngine')
      hashParams.append('version', '2.3.2')
      hashParams.append('hash', this.hash)
      urlObject.hash = hashParams.toString()
      this.iframe.value.src = urlObject.toString()
      console.log('.... ComfyHost::loadUrl', this.id, urlObject.toString())

      this.iframe.value.addEventListener('load', () => {
        console.log('.... ComfyHost::iframe loaded', this.id)
        this.emit('loaded')
      })
    }
  }

  reload() {
    if (this.iframe.value) {
      const currentSrc = this.iframe.value.src
      console.log('.... ComfyHost::reload', this.id, currentSrc)
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

    const { action, payload } = event.data
    console.log('<<<< ComfyHost::handleMessage', this.id, action, payload)

    this.processMessage(action, payload)
    this.emit(action, payload)
  }

  private processMessage(action: string, payload: any) {
    switch (action) {
      case 'handshake':
        this.setOptions({
          overlay: payload.overlay,
          width: payload.width,
          height: payload.height
        })
    
        this.sendMessage({
          action: 'loaded',
          payload: {
            id: this.id,
            hash: this.hash
          }
        })
        break

      case 'resize':
        this.resize(payload.width, payload.height)
        break

      case 'destroy':
        this.destroy()
        break
    }
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
    if (!this.iframe.value || !this.parentElement.value) {
      console.error('ComfyHost::sendMessage() - iframe not found', this.id)
      return
    }
    
    console.log('.... ComfyHost::destroy', this.id)

    this.sendMessage({
      action: 'destroy',
      payload: {}
    })

    /* wait a little bit before destroying the iframe */
    setTimeout(() => {
      this.removeListeners()

      if (this.iframe.value && this.parentElement.value) {
        this.parentElement.value.removeChild(this.iframe.value)
      }

      this.iframe.value = null
    }, 100)
    this.visible.value = false
  }

  sendMessage(message: any) {
    if (!this.iframe.value || !this.parentElement.value) {
      console.error('ComfyHost::sendMessage() - iframe not found', this.id)
      return
    }

    if (this.iframe.value && this.iframe.value.contentWindow) {
      message.payload.id = this.id
      message.payload.hash = this.hash
      console.log('>>>> ComfyHost::sendMessage', this.id, message.action, message.payload)
      this.iframe.value.contentWindow.postMessage(message, '*')
    }
  }

  setOverlay(overlay: boolean) {
    this.overlay.value = overlay
  }

  setVisibility(isVisible: boolean) {
    console.log('ComfyPluginFrame: Setting visibility for', this.id, 'to', isVisible, 'current:', this.visible.value)
    this.visible.value = isVisible
    this.emit('visibilityChanged', isVisible)
  }
}

export default ComfyPluginFrame
