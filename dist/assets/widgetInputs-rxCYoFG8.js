var t = Object.defineProperty,
  e = (e, i) => t(e, 'name', { value: i, configurable: !0 })
import {
  b as i,
  a as n,
  br as o,
  bq as s,
  bt as r,
  c as l
} from './index-CXhECVBD.js'
const u = 'converted-widget',
  c = ['STRING', 'combo', 'number', 'toggle', 'BOOLEAN', 'text', 'string'],
  a = Symbol(),
  d = Symbol(),
  g = Symbol(),
  p = 'Run widget replace on values'
class h extends i {
  static {
    e(this, 'PrimitiveNode')
  }
  controlValues
  lastType
  static category
  constructor(t) {
    super(t),
      this.addOutput('connect to widget input', '*'),
      (this.serialize_widgets = !0),
      (this.isVirtualNode = !0),
      (this.properties && p in this.properties) ||
        this.addProperty(p, !1, 'boolean')
  }
  applyToGraph(t = []) {
    if (!this.outputs[0].links?.length) return
    function i(t) {
      let e = []
      for (const o of t.outputs[0].links) {
        const s = n.graph.links[o],
          r = t.graph.getNodeById(s.target_id)
        'Reroute' == r.type ? (e = e.concat(i(r))) : e.push(o)
      }
      return e
    }
    e(i, 'get_links')
    let s = [...i(this).map((t) => n.graph.links[t]), ...t],
      r = this.widgets?.[0].value
    r && this.properties[p] && (r = o(n, r))
    for (const e of s) {
      const t = this.graph.getNodeById(e.target_id),
        i = t.inputs[e.target_slot]
      let o
      if (i.widget[g]) o = i.widget[g]
      else {
        const e = i.widget.name
        e && (o = t.widgets.find((t) => t.name === e))
      }
      o &&
        ((o.value = r),
        o.callback &&
          o.callback(o.value, n.canvas, t, n.canvas.graph_mouse, {}))
    }
  }
  refreshComboInNode() {
    const t = this.widgets?.[0]
    'combo' === t?.type &&
      ((t.options.values = this.outputs[0].widget[d]()[0]),
      t.options.values.includes(t.value) ||
        ((t.value = t.options.values[0]), t.callback(t.value)))
  }
  onAfterGraphConfigured() {
    if (this.outputs[0].links?.length && !this.widgets?.length) {
      if (!this.#t()) return
      if (this.widgets)
        for (let t = 0; t < this.widgets_values.length; t++) {
          const e = this.widgets[t]
          e && (e.value = this.widgets_values[t])
        }
      this.#e()
    }
  }
  onConnectionsChange(t, e, i) {
    if (n.configuringGraph) return
    const o = this.outputs[0].links
    i
      ? o?.length && !this.widgets?.length && this.#t()
      : (this.#e(), o?.length || this.onLastDisconnect())
  }
  onConnectOutput(t, e, i, n, o) {
    if (!i.widget && !(i.type in s)) return !1
    if (this.outputs[t].links?.length) {
      const t = this.#i(i)
      return t && this.applyToGraph([{ target_id: n.id, target_slot: o }]), t
    }
  }
  #t(t) {
    if (!this.outputs[0].links) return void this.onLastDisconnect()
    const e = this.outputs[0].links[0],
      i = this.graph.links[e]
    if (!i) return
    const n = this.graph.getNodeById(i.target_id)
    if (!n || !n.inputs) return
    const o = n.inputs[i.target_slot]
    if (!o) return
    let r
    if (o.widget) r = o.widget
    else {
      if (!(o.type in s)) return
      r = { name: o.name, [d]: () => [o.type, {}] }
    }
    const l = r[d]?.()
    if (!l) return
    const { type: u } = b(l)
    ;(this.outputs[0].type = u),
      (this.outputs[0].name = u),
      (this.outputs[0].widget = r),
      this.#n(r[a] ?? l, n, r.name, t, r[g])
  }
  #n(t, e, i, o, l) {
    let u = t[0]
    u instanceof Array && (u = 'COMBO')
    const [c, a] = this.size
    let d
    if (
      ((d =
        u in s
          ? (s[u](this, 'value', t, n) || {}).widget
          : this.addWidget(u, 'value', null, () => {}, {})),
      l)
    )
      d.value = l.value
    else if (e?.widgets && d) {
      const t = e.widgets.find((t) => t.name === i)
      t && (d.value = t.value)
    }
    if (
      !t?.[1]?.control_after_generate &&
      ('number' === d.type || 'combo' === d.type)
    ) {
      let e = this.widgets_values?.[1]
      e || (e = 'fixed'), r(this, d, e, void 0, t)
      let i = this.widgets_values?.[2]
      i && 3 === this.widgets.length && (this.widgets[2].value = i)
    }
    const g = this.controlValues
    if (
      this.lastType === this.widgets[0].type &&
      g?.length === this.widgets.length - 1
    )
      for (let n = 0; n < g.length; n++) this.widgets[n + 1].value = g[n]
    const p = d.callback,
      h = this
    if (
      ((d.callback = function () {
        const t = p ? p.apply(this, arguments) : void 0
        return h.applyToGraph(), t
      }),
      (this.size = [Math.max(this.size[0], c), Math.max(this.size[1], a)]),
      !o)
    ) {
      const t = this.computeSize()
      this.size[0] < t[0] && (this.size[0] = t[0]),
        this.size[1] < t[1] && (this.size[1] = t[1]),
        requestAnimationFrame(() => {
          this.onResize && this.onResize(this.size)
        })
    }
  }
  recreateWidget() {
    const t = this.widgets?.map((t) => t.value)
    if ((this.#o(), this.#t(!0), t?.length))
      for (let e = 0; e < this.widgets?.length; e++)
        this.widgets[e].value = t[e]
    return this.widgets?.[0]
  }
  #e() {
    const t = this.outputs[0],
      e = t.links,
      i = !!t.widget[a]
    if ((i && delete t.widget[a], e?.length < 2 && i))
      return void (e.length && this.recreateWidget())
    const o = t.widget[d]()
    if ('INT' === o[0] || 'FLOAT' === o[0])
      for (const s of e) {
        const t = n.graph.links[s]
        if (!t) continue
        const e = n.graph.getNodeById(t.target_id).inputs[t.target_slot]
        this.#i(e, i)
      }
  }
  isValidWidgetLink(t, e, i) {
    const n = m.call(e, i.name) ?? [i.type, i.options || {}]
    if (!w(i, n)) return !1
    const o = this.outputs[t]
    return !(o.widget?.[a] ?? o.widget?.[d]()) || !!T.call(this, o, n)
  }
  #i(t, e) {
    const i = this.outputs[0],
      n = t.widget[d]()
    return !!T.call(this, i, n, e, this.recreateWidget)
  }
  #o() {
    if (this.widgets) {
      for (const t of this.widgets) t.onRemove && t.onRemove()
      ;(this.controlValues = []), (this.lastType = this.widgets[0]?.type)
      for (let t = 1; t < this.widgets.length; t++)
        this.controlValues.push(this.widgets[t].value)
      setTimeout(() => {
        delete this.lastType, delete this.controlValues
      }, 15),
        (this.widgets.length = 0)
    }
  }
  onLastDisconnect() {
    ;(this.outputs[0].type = '*'),
      (this.outputs[0].name = 'connect to widget input'),
      delete this.outputs[0].widget,
      this.#o()
  }
}
function f(t) {
  return t.widget[a] ?? t.widget[d]?.() ?? ['*', {}]
}
function m(t) {
  const { nodeData: e } = this.constructor
  return e?.input?.required?.[t] ?? e?.input?.optional?.[t]
}
function w(t, e) {
  return (c.includes(t.type) || c.includes(e[0])) && !t.options?.forceInput
}
function y(t, e, i = '') {
  if (
    !e.type?.startsWith(u) &&
    ((e.origType = e.type),
    (e.origComputeSize = e.computeSize),
    (e.origSerializeValue = e.serializeValue),
    (e.computeSize = () => [0, -4]),
    (e.type = u + i),
    (e.serializeValue = () => {
      if (!t.inputs) return
      let i = t.inputs.find((t) => t.widget?.name === e.name)
      return i && i.link
        ? e.origSerializeValue
          ? e.origSerializeValue()
          : e.value
        : void 0
    }),
    e.linkedWidgets)
  )
    for (const n of e.linkedWidgets) y(t, n, ':' + e.name)
}
function v(t) {
  if (
    ((t.type = t.origType),
    (t.computeSize = t.origComputeSize),
    (t.serializeValue = t.origSerializeValue),
    delete t.origType,
    delete t.origComputeSize,
    delete t.origSerializeValue,
    t.linkedWidgets)
  )
    for (const e of t.linkedWidgets) v(e)
}
function C(t, e, i) {
  y(t, e)
  const { type: n } = b(i),
    [o, s] = t.size,
    r = !!e.options?.inputIsOptional,
    u = t.addInput(e.name, n, {
      widget: { name: e.name, [d]: () => i },
      ...(r ? { shape: l.SlotShape.HollowCircle } : {})
    })
  for (const c of t.widgets) c.last_y += l.NODE_SLOT_HEIGHT
  return t.setSize([Math.max(o, t.size[0]), Math.max(s, t.size[1])]), u
}
function I(t, e) {
  v(e)
  const [i, n] = t.size
  t.removeInput(t.inputs.findIndex((t) => t.widget?.name === e.name))
  for (const o of t.widgets) o.last_y -= l.NODE_SLOT_HEIGHT
  t.setSize([Math.max(i, t.size[0]), Math.max(n, t.size[1])])
}
function b(t) {
  let e = t[0]
  return e instanceof Array && (e = 'COMBO'), { type: e }
}
function k(t, e) {
  return e instanceof Array
    ? t.length !== e.length
      ? (console.log('connection rejected: combo lists dont match'), !1)
      : !t.find((t, i) => e[i] !== t) ||
        (console.log('connection rejected: combo lists dont match'), !1)
    : (console.log(`connection rejected: tried to connect combo to ${e}`), !1)
}
function z(t) {
  return 'PrimitiveNode' === t.type
}
function W(t, e, i) {
  if (
    t.widget &&
    (e ? ((t.widget[d] = () => e), (t.widget[g] = i)) : delete t.widget, t.link)
  ) {
    const i = n.graph.links[t.link]
    if (i) {
      const t = n.graph.getNodeById(i.origin_id)
      z(t) &&
        (e
          ? t.recreateWidget()
          : n.configuringGraph || (t.disconnectOutput(0), t.onLastDisconnect()))
    }
  }
}
function T(t, i, n, o, s) {
  if ((s || (s = f(t)), s[0] instanceof Array)) {
    if (!k(s[0], i[0])) return
  } else if (s[0] !== i[0])
    return void console.log('connection rejected: types dont match', s[0], i[0])
  const r = new Set([...Object.keys(s[1] ?? {}), ...Object.keys(i[1] ?? {})])
  let l
  const u = e(
      () => (
        l ||
          (l =
            'undefined' == typeof structuredClone
              ? JSON.parse(JSON.stringify(s[1] ?? {}))
              : structuredClone(s[1] ?? {})),
        l
      ),
      'getCustomConfig'
    ),
    c = 'INT' === s[0] || 'FLOAT' === s[0]
  for (const e of r.values())
    if (
      'default' !== e &&
      'forceInput' !== e &&
      'defaultInput' !== e &&
      'control_after_generate' !== e &&
      'multiline' !== e &&
      'tooltip' !== e
    ) {
      let t = s[1][e],
        n = i[1]?.[e]
      if (t === n || (!t && !n)) continue
      if (c) {
        if ('min' === e) {
          const o = i[1]?.max
          if (null != o && t > o)
            return void console.log('connection rejected: min > max', t, o)
          u()[e] = null == t ? n : null == n ? t : Math.max(t, n)
          continue
        }
        if ('max' === e) {
          const o = i[1]?.min
          if (null != o && t < o)
            return void console.log('connection rejected: max < min', t, o)
          u()[e] = null == t ? n : null == n ? t : Math.min(t, n)
          continue
        }
        if ('step' === e) {
          let i
          if (null == t) i = n
          else if (null == n) i = t
          else {
            if (t < n) {
              const e = n
              ;(n = t), (t = e)
            }
            if (t % n)
              return void console.log(
                'connection rejected: steps not divisible',
                'current:',
                t,
                'new:',
                n
              )
            i = t
          }
          u()[e] = i
          continue
        }
      }
      return void console.log(
        `connection rejected: config ${e} values dont match`,
        t,
        n
      )
    }
  if (l || n) {
    l && (t.widget[a] = [s[0], l])
    const e = o?.call(this)
    if (e) {
      const t = e.options.min,
        i = e.options.max
      null != t && e.value < t && (e.value = t),
        null != i && e.value > i && (e.value = i),
        e.callback(e.value)
    }
  }
  return { customConfig: l }
}
let N
e(f, 'getWidgetConfig'),
  e(m, 'getConfig'),
  e(w, 'isConvertibleWidget'),
  e(y, 'hideWidget'),
  e(v, 'showWidget'),
  e(C, 'convertToInput'),
  e(I, 'convertToWidget'),
  e(b, 'getWidgetType'),
  e(k, 'isValidCombo'),
  e(z, 'isPrimitiveNode'),
  e(W, 'setWidgetConfig'),
  e(T, 'mergeIfValid'),
  n.registerExtension({
    name: 'Comfy.WidgetInputs',
    init() {
      N = n.ui.settings.addSetting({
        id: 'Comfy.NodeInputConversionSubmenus',
        name: 'In the node context menu, place the entries that convert between input/widget in sub-menus.',
        type: 'boolean',
        defaultValue: !0
      })
    },
    async beforeRegisterNodeDef(t, i, n) {
      const o = t.prototype.getExtraMenuOptions
      ;(t.prototype.convertWidgetToInput = function (t) {
        const e = m.call(this, t.name) ?? [t.type, t.options || {}]
        return !!w(t, e) && !t.type?.startsWith(u) && (C(this, t, e), !0)
      }),
        (t.prototype.getExtraMenuOptions = function (t, i) {
          const n = o ? o.apply(this, arguments) : void 0
          if (this.widgets) {
            let t = [],
              n = []
            for (const i of this.widgets)
              if (!i.options?.forceInput)
                if (i.type === u)
                  n.push({
                    content: `Convert ${i.name} to widget`,
                    callback: e(() => I(this, i), 'callback')
                  })
                else {
                  const n = m.call(this, i.name) ?? [i.type, i.options || {}]
                  w(i, n) &&
                    t.push({
                      content: `Convert ${i.name} to input`,
                      callback: e(() => C(this, i, n), 'callback')
                    })
                }
            t.length &&
              (N.value
                ? i.push({
                    content: 'Convert Widget to Input',
                    submenu: { options: t }
                  })
                : i.push(...t, null)),
              n.length &&
                (N.value
                  ? i.push({
                      content: 'Convert Input to Widget',
                      submenu: { options: n }
                    })
                  : i.push(...n, null))
          }
          return n
        }),
        (t.prototype.onGraphConfigured = function () {
          if (this.inputs) {
            this.widgets ??= []
            for (const t of this.inputs)
              if (t.widget) {
                if (
                  (t.widget[d] ||
                    (t.widget[d] = () => m.call(this, t.widget.name)),
                  t.widget.config)
                ) {
                  if (t.widget.config[0] instanceof Array) {
                    t.type = 'COMBO'
                    const e = n.graph.links[t.link]
                    e && (e.type = t.type)
                  }
                  delete t.widget.config
                }
                const e = this.widgets.find((e) => e.name === t.widget.name)
                e ? y(this, e) : I(this, t)
              }
          }
        })
      const r = t.prototype.onNodeCreated
      t.prototype.onNodeCreated = function () {
        const t = r ? r.apply(this) : void 0
        if (!n.configuringGraph && this.widgets)
          for (const e of this.widgets)
            if (e?.options?.forceInput || e?.options?.defaultInput) {
              C(this, e, m.call(this, e.name) ?? [e.type, e.options || {}])
            }
        return t
      }
      const c = t.prototype.onConfigure
      function a(t) {
        for (const e of n.graph.nodes)
          if (e.pos[0] === t[0] && e.pos[1] === t[1]) return !0
        return !1
      }
      ;(t.prototype.onConfigure = function () {
        const t = c ? c.apply(this, arguments) : void 0
        if (!n.configuringGraph && this.inputs)
          for (const e of this.inputs)
            if (e.widget && !e.widget[d]) {
              e.widget[d] = () => m.call(this, e.widget.name)
              const t = this.widgets.find((t) => t.name === e.widget.name)
              t && y(this, t)
            }
        return t
      }),
        e(a, 'isNodeAtPos')
      const g = t.prototype.onInputDblClick,
        p = Symbol()
      t.prototype.onInputDblClick = function (t) {
        const e = g ? g.apply(this, arguments) : void 0,
          i = this.inputs[t]
        if (
          !(
            (i.widget && i[p]) ||
            i.type in s ||
            i.widget?.[d]?.()?.[0] instanceof Array
          )
        )
          return e
        const o = l.createNode('PrimitiveNode')
        n.graph.add(o)
        const r = [this.pos[0] - o.size[0] - 30, this.pos[1]]
        for (; a(r); ) r[1] += l.NODE_TITLE_HEIGHT
        return (
          (o.pos = r),
          o.connect(0, this, t),
          (o.title = i.name),
          (i[p] = !0),
          setTimeout(() => {
            delete i[p]
          }, 300),
          e
        )
      }
      const h = t.prototype.onConnectInput
      t.prototype.onConnectInput = function (t, e, i, n, o) {
        const s = h?.(this, arguments)
        if ('COMBO' !== e) return s
        if (n.outputs[o].widget) return s
        const r = this.inputs[t].widget?.[d]?.()?.[0]
        if (!(r && r instanceof Array)) return s
        const l = n.constructor?.nodeData?.output?.[o]
        return !(!l || !k(r, l)) && s
      }
    },
    registerCustomNodes() {
      l.registerNodeType(
        'PrimitiveNode',
        Object.assign(h, { title: 'Primitive' })
      ),
        (h.category = 'utils')
    }
  }),
  (window.comfyAPI = window.comfyAPI || {}),
  (window.comfyAPI.widgetInputs = window.comfyAPI.widgetInputs || {}),
  (window.comfyAPI.widgetInputs.getWidgetConfig = f),
  (window.comfyAPI.widgetInputs.convertToInput = C),
  (window.comfyAPI.widgetInputs.setWidgetConfig = W),
  (window.comfyAPI.widgetInputs.mergeIfValid = T)
export {
  C as convertToInput,
  f as getWidgetConfig,
  T as mergeIfValid,
  W as setWidgetConfig
}
