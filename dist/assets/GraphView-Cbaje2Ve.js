var e = Object.defineProperty,
  t = (t, n) => e(t, 'name', { value: n, configurable: !0 })
import {
  d as n,
  u as o,
  L as i,
  a,
  b as r,
  E as s,
  c as l,
  _ as u,
  B as c,
  s as d,
  e as p,
  f as m,
  g as f,
  S as h,
  h as b,
  i as v,
  j as g,
  k as y,
  l as V,
  m as I,
  n as k,
  o as w,
  p as x,
  q as C,
  r as S,
  t as P,
  v as B,
  w as E,
  R as L,
  x as O,
  y as T,
  z as M,
  A as N,
  C as $,
  D as A,
  F as D,
  G as z,
  H as K,
  I as F,
  U as R,
  Z as G,
  J as U,
  O as j,
  K as H,
  M as W,
  N as q,
  P as Z,
  Q,
  T as X,
  V as Y,
  W as J,
  X as ee,
  Y as te,
  $ as ne,
  a0 as oe,
  a1 as ie,
  a2 as ae,
  a3 as re,
  a4 as se,
  a5 as le,
  a6 as ue,
  a7 as ce,
  a8 as de,
  a9 as pe,
  aa as me,
  ab as fe,
  ac as he,
  ad as be,
  ae as ve,
  af as ge,
  ag as ye,
  ah as Ve,
  ai as Ie,
  aj as ke,
  ak as we,
  al as xe,
  am as Ce,
  an as Se,
  ao as Pe,
  ap as Be,
  aq as Ee,
  ar as Le,
  as as Oe,
  at as Te,
  au as Me,
  av as Ne,
  aw as $e,
  ax as Ae,
  ay as De,
  az as _e,
  aA as ze,
  aB as Ke,
  aC as Fe,
  aD as Re,
  aE as Ge,
  aF as Ue,
  aG as je,
  aH as He,
  aI as We,
  aJ as qe,
  aK as Ze,
  aL as Qe,
  aM as Xe,
  aN as Ye,
  aO as Je,
  aP as et,
  aQ as tt,
  aR as nt,
  aS as ot,
  aT as it,
  aU as at,
  aV as rt,
  aW as st,
  aX as lt,
  aY as ut,
  aZ as ct,
  a_ as dt,
  a$ as pt,
  b0 as mt,
  b1 as ft,
  b2 as ht,
  b3 as bt,
  b4 as vt,
  b5 as gt,
  b6 as yt
} from './index-CXhECVBD.js'
import { s as Vt, a as It } from './index-DcTOE_QK.js'
import { u as kt } from './serverConfigStore-DaXaAdcO.js'
const wt = n('titleEditor', () => ({
    titleEditorTarget: Vue.shallowRef(null)
  })),
  xt = n('canvas', () => ({ canvas: Vue.shallowRef(null) })),
  Ct = u(
    Vue.defineComponent({
      __name: 'TitleEditor',
      setup(e) {
        const n = o(),
          u = Vue.ref(!1),
          c = Vue.ref(''),
          d = Vue.ref({
            position: 'fixed',
            left: '0px',
            top: '0px',
            width: '200px',
            height: '20px',
            fontSize: '12px'
          }),
          p = wt(),
          m = xt(),
          f = Vue.ref(!0),
          h = t((e) => {
            p.titleEditorTarget &&
              '' !== e.trim() &&
              ((p.titleEditorTarget.title = e.trim()),
              a.graph.setDirtyCanvas(!0, !0)),
              (u.value = !1),
              (p.titleEditorTarget = null),
              (m.canvas.allow_dragcanvas = f.value)
          }, 'onEdit')
        Vue.watch(
          () => p.titleEditorTarget,
          (e) => {
            if (null !== e)
              if (
                ((c.value = e.title),
                (u.value = !0),
                (f.value = m.canvas.allow_dragcanvas),
                (m.canvas.allow_dragcanvas = !1),
                e instanceof i)
              ) {
                const t = e,
                  [n, o] = t.pos,
                  [i, r] = t.size,
                  [s, l] = a.canvasPosToClientPos([n, o])
                ;(d.value.left = `${s}px`), (d.value.top = `${l}px`)
                const u = i * a.canvas.ds.scale,
                  c = t.titleHeight * a.canvas.ds.scale
                ;(d.value.width = `${u}px`), (d.value.height = `${c}px`)
                const p = t.font_size * a.canvas.ds.scale
                d.value.fontSize = `${p}px`
              } else if (e instanceof r) {
                const t = e,
                  [n, o] = t.getBounding(),
                  i = t.width,
                  r = l.NODE_TITLE_HEIGHT,
                  [s, u] = a.canvasPosToClientPos([n, o])
                ;(d.value.left = `${s}px`), (d.value.top = `${u}px`)
                const c = i * a.canvas.ds.scale,
                  p = r * a.canvas.ds.scale
                ;(d.value.width = `${c}px`), (d.value.height = `${p}px`)
                const m = 12 * a.canvas.ds.scale
                d.value.fontSize = `${m}px`
              }
          }
        )
        const b = t((e) => {
            if (
              n.get('Comfy.Group.DoubleClickTitleToEdit') &&
              'group-double-click' === e.detail.subType
            ) {
              const t = e.detail.group,
                [n, o] = t.pos
              if (e.detail.originalEvent.canvasY - o > t.titleHeight) return
              p.titleEditorTarget = t
            }
          }, 'canvasEventHandler'),
          v = {
            name: 'Comfy.NodeTitleEditor',
            nodeCreated(e) {
              const t = e.onNodeTitleDblClick
              e.onNodeTitleDblClick = function (e, ...o) {
                n.get('Comfy.Node.DoubleClickTitleToEdit') &&
                  ((p.titleEditorTarget = this),
                  'function' == typeof t && t.call(this, e, ...o))
              }
            }
          }
        return (
          Vue.onMounted(() => {
            document.addEventListener('litegraph:canvas', b),
              a.registerExtension(v)
          }),
          Vue.onUnmounted(() => {
            document.removeEventListener('litegraph:canvas', b)
          }),
          (e, t) =>
            u.value
              ? (Vue.openBlock(),
                Vue.createElementBlock(
                  'div',
                  {
                    key: 0,
                    class: 'group-title-editor node-title-editor',
                    style: Vue.normalizeStyle(d.value)
                  },
                  [
                    Vue.createVNode(
                      s,
                      { isEditing: u.value, modelValue: c.value, onEdit: h },
                      null,
                      8,
                      ['isEditing', 'modelValue']
                    )
                  ],
                  4
                ))
              : Vue.createCommentVNode('', !0)
        )
      }
    }),
    [['__scopeId', 'data-v-8a100d5a']]
  )
var St = t(function (e) {
    var t = e.dt
    return '\n.p-overlaybadge {\n    position: relative;\n}\n\n.p-overlaybadge .p-badge {\n    position: absolute;\n    inset-block-start: 0;\n    inset-inline-end: 0;\n    transform: translate(50%, -50%);\n    transform-origin: 100% 0;\n    margin: 0;\n    outline-width: '
      .concat(
        t('overlaybadge.outline.width'),
        ';\n    outline-style: solid;\n    outline-color: '
      )
      .concat(
        t('overlaybadge.outline.color'),
        ';\n}\n\n.p-overlaybadge .p-badge:dir(rtl) {\n    transform: translate(-50%, -50%);\n}\n'
      )
  }, 'theme'),
  Pt = {
    name: 'OverlayBadge',
    extends: {
      name: 'OverlayBadge',
      extends: d,
      style: c.extend({
        name: 'overlaybadge',
        theme: St,
        classes: { root: 'p-overlaybadge' }
      }),
      provide: t(function () {
        return { $pcOverlayBadge: this, $parentInstance: this }
      }, 'provide')
    },
    inheritAttrs: !1,
    components: { Badge: d }
  }
function Bt(e, t, n, o, i, a) {
  var r = Vue.resolveComponent('Badge')
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps({ class: e.cx('root') }, e.ptmi('root')),
      [
        Vue.renderSlot(e.$slots, 'default'),
        Vue.createVNode(
          r,
          Vue.mergeProps(e.$props, { pt: e.ptm('pcBadge') }),
          null,
          16,
          ['pt']
        )
      ],
      16
    )
  )
}
t(Bt, 'render$e'), (Pt.render = Bt)
const Et = u(
    Vue.defineComponent({
      __name: 'SidebarIcon',
      props: {
        icon: String,
        selected: Boolean,
        tooltip: { type: String, default: '' },
        class: { type: String, default: '' },
        iconBadge: { type: [String, Function], default: '' }
      },
      emits: ['click'],
      setup(e, { emit: t }) {
        const n = e,
          o = t,
          i = Vue.computed(() =>
            'function' == typeof n.iconBadge ? n.iconBadge() || '' : n.iconBadge
          ),
          a = Vue.computed(() => !!i.value)
        return (e, t) => {
          const r = Vue.resolveDirective('tooltip')
          return Vue.withDirectives(
            (Vue.openBlock(),
            Vue.createBlock(
              Vue.unref(p),
              {
                class: Vue.normalizeClass(n.class),
                text: '',
                pt: {
                  root: {
                    class:
                      'side-bar-button ' +
                      (n.selected
                        ? 'p-button-primary side-bar-button-selected'
                        : 'p-button-secondary'),
                    'aria-label': n.tooltip
                  }
                },
                onClick: t[0] || (t[0] = (e) => o('click', e))
              },
              {
                icon: Vue.withCtx(() => [
                  a.value
                    ? (Vue.openBlock(),
                      Vue.createBlock(
                        Vue.unref(Pt),
                        { key: 0, value: i.value },
                        {
                          default: Vue.withCtx(() => [
                            Vue.createElementVNode(
                              'i',
                              {
                                class: Vue.normalizeClass(
                                  n.icon + ' side-bar-button-icon'
                                )
                              },
                              null,
                              2
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['value']
                      ))
                    : (Vue.openBlock(),
                      Vue.createElementBlock(
                        'i',
                        {
                          key: 1,
                          class: Vue.normalizeClass(
                            n.icon + ' side-bar-button-icon'
                          )
                        },
                        null,
                        2
                      ))
                ]),
                _: 1
              },
              8,
              ['class', 'pt']
            )),
            [[r, { value: n.tooltip, showDelay: 300, hideDelay: 300 }]]
          )
        }
      }
    }),
    [['__scopeId', 'data-v-caa3ee9c']]
  ),
  Lt = Vue.defineComponent({
    __name: 'SidebarThemeToggleIcon',
    setup(e) {
      const n = o(),
        i = Vue.computed(() => n.get('Comfy.ColorPalette')),
        a = Vue.computed(() =>
          'light' !== i.value ? 'pi pi-moon' : 'pi pi-sun'
        ),
        r = m(),
        s = t(() => {
          r.execute('Comfy.ToggleTheme')
        }, 'toggleTheme')
      return (e, t) => (
        Vue.openBlock(),
        Vue.createBlock(
          Et,
          {
            icon: a.value,
            onClick: s,
            tooltip: e.$t('sideToolbar.themeToggle'),
            class: 'comfy-vue-theme-toggle'
          },
          null,
          8,
          ['icon', 'tooltip']
        )
      )
    }
  }),
  Ot = Vue.defineComponent({
    __name: 'SidebarSettingsToggleIcon',
    setup(e) {
      const n = f(),
        o = t(() => {
          n.showDialog({
            key: 'global-settings',
            headerComponent: h,
            component: b
          })
        }, 'showSetting')
      return (e, t) => (
        Vue.openBlock(),
        Vue.createBlock(
          Et,
          {
            icon: 'pi pi-cog',
            class: 'comfy-settings-btn',
            onClick: o,
            tooltip: e.$t('settings')
          },
          null,
          8,
          ['tooltip']
        )
      )
    }
  }),
  Tt = Vue.defineComponent({
    __name: 'SidebarLogoutIcon',
    setup(e) {
      const { t: n } = VueI18n.useI18n(),
        o = v(),
        i = Vue.computed(
          () => `${n('sideToolbar.logout')} (${o.currentUser?.username})`
        ),
        a = t(() => {
          o.logout(), window.location.reload()
        }, 'logout')
      return (e, t) => (
        Vue.openBlock(),
        Vue.createBlock(
          Et,
          { icon: 'pi pi-sign-out', tooltip: i.value, onClick: a },
          null,
          8,
          ['tooltip']
        )
      )
    }
  }),
  Mt = Vue.defineComponent({
    __name: 'ExtensionSlot',
    props: { extension: {} },
    setup(e) {
      const n = e,
        o = t((e, t) => {
          e.render(t)
        }, 'mountCustomExtension')
      return (
        Vue.onBeforeUnmount(() => {
          'custom' === n.extension.type &&
            n.extension.destroy &&
            n.extension.destroy()
        }),
        (e, i) =>
          'vue' === e.extension.type
            ? (Vue.openBlock(),
              Vue.createBlock(
                Vue.resolveDynamicComponent(e.extension.component),
                { key: 0 }
              ))
            : (Vue.openBlock(),
              Vue.createElementBlock(
                'div',
                {
                  key: 1,
                  ref: t((e) => {
                    e && o(n.extension, e)
                  }, 'ref')
                },
                null,
                512
              ))
      )
    }
  }),
  Nt = { class: 'side-tool-bar-end' },
  $t = {
    key: 0,
    class: 'sidebar-content-container h-full overflow-y-auto overflow-x-hidden'
  },
  At = u(
    Vue.defineComponent({
      __name: 'SideToolbar',
      setup(e) {
        const n = g(),
          i = o(),
          a = v(),
          r = Vue.computed(() =>
            'left' === i.get('Comfy.Sidebar.Location')
              ? '.comfyui-body-left'
              : '.comfyui-body-right'
          ),
          s = Vue.computed(() => 'small' === i.get('Comfy.Sidebar.Size')),
          l = Vue.computed(() => n.getSidebarTabs()),
          u = Vue.computed(() => n.sidebarTab.activeSidebarTab),
          c = t((e) => {
            n.sidebarTab.toggleSidebarTab(e.id)
          }, 'onTabClick'),
          d = y(),
          p = t((e) => {
            const t = d.getKeybindingByCommandId(
              `Workspace.ToggleSidebarTab.${e.id}`
            )
            return t ? ` (${t.combo.toString()})` : ''
          }, 'getTabTooltipSuffix')
        return (e, n) => (
          Vue.openBlock(),
          Vue.createElementBlock(
            Vue.Fragment,
            null,
            [
              (Vue.openBlock(),
              Vue.createBlock(
                Vue.Teleport,
                { to: r.value },
                [
                  Vue.createElementVNode(
                    'nav',
                    {
                      class: Vue.normalizeClass(
                        'side-tool-bar-container' +
                          (s.value ? ' small-sidebar' : '')
                      )
                    },
                    [
                      (Vue.openBlock(!0),
                      Vue.createElementBlock(
                        Vue.Fragment,
                        null,
                        Vue.renderList(
                          l.value,
                          (e) => (
                            Vue.openBlock(),
                            Vue.createBlock(
                              Et,
                              {
                                key: e.id,
                                icon: e.icon,
                                iconBadge: e.iconBadge,
                                tooltip: e.tooltip + p(e),
                                selected: e.id === u.value?.id,
                                class: Vue.normalizeClass(e.id + '-tab-button'),
                                onClick: t((t) => c(e), 'onClick')
                              },
                              null,
                              8,
                              [
                                'icon',
                                'iconBadge',
                                'tooltip',
                                'selected',
                                'class',
                                'onClick'
                              ]
                            )
                          )
                        ),
                        128
                      )),
                      Vue.createElementVNode('div', Nt, [
                        Vue.unref(a).isMultiUserServer
                          ? (Vue.openBlock(), Vue.createBlock(Tt, { key: 0 }))
                          : Vue.createCommentVNode('', !0),
                        Vue.createVNode(Lt),
                        Vue.createVNode(Ot)
                      ])
                    ],
                    2
                  )
                ],
                8,
                ['to']
              )),
              u.value
                ? (Vue.openBlock(),
                  Vue.createElementBlock('div', $t, [
                    Vue.createVNode(Mt, { extension: u.value }, null, 8, [
                      'extension'
                    ])
                  ]))
                : Vue.createCommentVNode('', !0)
            ],
            64
          )
        )
      }
    }),
    [['__scopeId', 'data-v-b2151b83']]
  )
var Dt = {
    root: 'p-tablist',
    content: t(function (e) {
      return [
        'p-tablist-content',
        { 'p-tablist-viewport': e.instance.$pcTabs.scrollable }
      ]
    }, 'content'),
    tabList: 'p-tablist-tab-list',
    activeBar: 'p-tablist-active-bar',
    prevButton: 'p-tablist-prev-button p-tablist-nav-button',
    nextButton: 'p-tablist-next-button p-tablist-nav-button'
  },
  _t = {
    name: 'TabList',
    extends: {
      name: 'BaseTabList',
      extends: V,
      props: {},
      style: c.extend({ name: 'tablist', classes: Dt }),
      provide: t(function () {
        return { $pcTabList: this, $parentInstance: this }
      }, 'provide')
    },
    inheritAttrs: !1,
    inject: ['$pcTabs'],
    data: t(function () {
      return { isPrevButtonEnabled: !1, isNextButtonEnabled: !0 }
    }, 'data'),
    resizeObserver: void 0,
    watch: {
      showNavigators: t(function (e) {
        e ? this.bindResizeObserver() : this.unbindResizeObserver()
      }, 'showNavigators'),
      activeValue: {
        flush: 'post',
        handler: t(function () {
          this.updateInkBar()
        }, 'handler')
      }
    },
    mounted: t(function () {
      var e = this
      this.$nextTick(function () {
        e.updateInkBar()
      }),
        this.showNavigators &&
          (this.updateButtonState(), this.bindResizeObserver())
    }, 'mounted'),
    updated: t(function () {
      this.showNavigators && this.updateButtonState()
    }, 'updated'),
    beforeUnmount: t(function () {
      this.unbindResizeObserver()
    }, 'beforeUnmount'),
    methods: {
      onScroll: t(function (e) {
        this.showNavigators && this.updateButtonState(), e.preventDefault()
      }, 'onScroll'),
      onPrevButtonClick: t(function () {
        var e = this.$refs.content,
          t = I(e),
          n = Math.abs(e.scrollLeft) - t,
          o = n <= 0 ? 0 : n
        e.scrollLeft = k(e) ? -1 * o : o
      }, 'onPrevButtonClick'),
      onNextButtonClick: t(function () {
        var e = this.$refs.content,
          t = I(e) - this.getVisibleButtonWidths(),
          n = t + Math.abs(e.scrollLeft),
          o = e.scrollWidth - t,
          i = n >= o ? o : n
        e.scrollLeft = k(e) ? -1 * i : i
      }, 'onNextButtonClick'),
      bindResizeObserver: t(function () {
        var e = this
        ;(this.resizeObserver = new ResizeObserver(function () {
          return e.updateButtonState()
        })),
          this.resizeObserver.observe(this.$refs.list)
      }, 'bindResizeObserver'),
      unbindResizeObserver: t(function () {
        var e
        null === (e = this.resizeObserver) ||
          void 0 === e ||
          e.unobserve(this.$refs.list),
          (this.resizeObserver = void 0)
      }, 'unbindResizeObserver'),
      updateInkBar: t(function () {
        var e = this.$refs,
          t = e.content,
          n = e.inkbar,
          o = e.tabs,
          i = w(t, '[data-pc-name="tab"][data-p-active="true"]')
        this.$pcTabs.isVertical()
          ? ((n.style.height = x(i) + 'px'),
            (n.style.top = C(i).top - C(o).top + 'px'))
          : ((n.style.width = S(i) + 'px'),
            (n.style.left = C(i).left - C(o).left + 'px'))
      }, 'updateInkBar'),
      updateButtonState: t(function () {
        var e = this.$refs,
          t = e.list,
          n = e.content,
          o = n.scrollTop,
          i = n.scrollWidth,
          a = n.scrollHeight,
          r = n.offsetWidth,
          s = n.offsetHeight,
          l = Math.abs(n.scrollLeft),
          u = [I(n), P(n)],
          c = u[0],
          d = u[1]
        this.$pcTabs.isVertical()
          ? ((this.isPrevButtonEnabled = 0 !== o),
            (this.isNextButtonEnabled =
              t.offsetHeight >= s && parseInt(o) !== a - d))
          : ((this.isPrevButtonEnabled = 0 !== l),
            (this.isNextButtonEnabled =
              t.offsetWidth >= r && parseInt(l) !== i - c))
      }, 'updateButtonState'),
      getVisibleButtonWidths: t(function () {
        var e = this.$refs
        return [e.prevBtn, e.nextBtn].reduce(function (e, t) {
          return t ? e + I(t) : e
        }, 0)
      }, 'getVisibleButtonWidths')
    },
    computed: {
      templates: t(function () {
        return this.$pcTabs.$slots
      }, 'templates'),
      activeValue: t(function () {
        return this.$pcTabs.d_value
      }, 'activeValue'),
      showNavigators: t(function () {
        return this.$pcTabs.scrollable && this.$pcTabs.showNavigators
      }, 'showNavigators'),
      prevButtonAriaLabel: t(function () {
        return this.$primevue.config.locale.aria
          ? this.$primevue.config.locale.aria.previous
          : void 0
      }, 'prevButtonAriaLabel'),
      nextButtonAriaLabel: t(function () {
        return this.$primevue.config.locale.aria
          ? this.$primevue.config.locale.aria.next
          : void 0
      }, 'nextButtonAriaLabel')
    },
    components: { ChevronLeftIcon: B, ChevronRightIcon: E },
    directives: { ripple: L }
  },
  zt = ['aria-label', 'tabindex'],
  Kt = ['aria-orientation'],
  Ft = ['aria-label', 'tabindex']
function Rt(e, t, n, o, i, a) {
  var r = Vue.resolveDirective('ripple')
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps({ ref: 'list', class: e.cx('root') }, e.ptmi('root')),
      [
        a.showNavigators && i.isPrevButtonEnabled
          ? Vue.withDirectives(
              (Vue.openBlock(),
              Vue.createElementBlock(
                'button',
                Vue.mergeProps(
                  {
                    key: 0,
                    ref: 'prevButton',
                    class: e.cx('prevButton'),
                    'aria-label': a.prevButtonAriaLabel,
                    tabindex: a.$pcTabs.tabindex,
                    onClick:
                      t[0] ||
                      (t[0] = function () {
                        return (
                          a.onPrevButtonClick &&
                          a.onPrevButtonClick.apply(a, arguments)
                        )
                      })
                  },
                  e.ptm('prevButton'),
                  { 'data-pc-group-section': 'navigator' }
                ),
                [
                  (Vue.openBlock(),
                  Vue.createBlock(
                    Vue.resolveDynamicComponent(
                      a.templates.previcon || 'ChevronLeftIcon'
                    ),
                    Vue.mergeProps(
                      { 'aria-hidden': 'true' },
                      e.ptm('prevIcon')
                    ),
                    null,
                    16
                  ))
                ],
                16,
                zt
              )),
              [[r]]
            )
          : Vue.createCommentVNode('', !0),
        Vue.createElementVNode(
          'div',
          Vue.mergeProps(
            {
              ref: 'content',
              class: e.cx('content'),
              onScroll:
                t[1] ||
                (t[1] = function () {
                  return a.onScroll && a.onScroll.apply(a, arguments)
                })
            },
            e.ptm('content')
          ),
          [
            Vue.createElementVNode(
              'div',
              Vue.mergeProps(
                {
                  ref: 'tabs',
                  class: e.cx('tabList'),
                  role: 'tablist',
                  'aria-orientation': a.$pcTabs.orientation || 'horizontal'
                },
                e.ptm('tabList')
              ),
              [
                Vue.renderSlot(e.$slots, 'default'),
                Vue.createElementVNode(
                  'span',
                  Vue.mergeProps(
                    {
                      ref: 'inkbar',
                      class: e.cx('activeBar'),
                      role: 'presentation',
                      'aria-hidden': 'true'
                    },
                    e.ptm('activeBar')
                  ),
                  null,
                  16
                )
              ],
              16,
              Kt
            )
          ],
          16
        ),
        a.showNavigators && i.isNextButtonEnabled
          ? Vue.withDirectives(
              (Vue.openBlock(),
              Vue.createElementBlock(
                'button',
                Vue.mergeProps(
                  {
                    key: 1,
                    ref: 'nextButton',
                    class: e.cx('nextButton'),
                    'aria-label': a.nextButtonAriaLabel,
                    tabindex: a.$pcTabs.tabindex,
                    onClick:
                      t[2] ||
                      (t[2] = function () {
                        return (
                          a.onNextButtonClick &&
                          a.onNextButtonClick.apply(a, arguments)
                        )
                      })
                  },
                  e.ptm('nextButton'),
                  { 'data-pc-group-section': 'navigator' }
                ),
                [
                  (Vue.openBlock(),
                  Vue.createBlock(
                    Vue.resolveDynamicComponent(
                      a.templates.nexticon || 'ChevronRightIcon'
                    ),
                    Vue.mergeProps(
                      { 'aria-hidden': 'true' },
                      e.ptm('nextIcon')
                    ),
                    null,
                    16
                  ))
                ],
                16,
                Ft
              )),
              [[r]]
            )
          : Vue.createCommentVNode('', !0)
      ],
      16
    )
  )
}
t(Rt, 'render$d'), (_t.render = Rt)
var Gt = {
    root: t(function (e) {
      var t = e.instance,
        n = e.props
      return ['p-tab', { 'p-tab-active': t.active, 'p-disabled': n.disabled }]
    }, 'root')
  },
  Ut = c.extend({ name: 'tab', classes: Gt }),
  jt = {
    name: 'Tab',
    extends: {
      name: 'BaseTab',
      extends: V,
      props: {
        value: { type: [String, Number], default: void 0 },
        disabled: { type: Boolean, default: !1 },
        as: { type: [String, Object], default: 'BUTTON' },
        asChild: { type: Boolean, default: !1 }
      },
      style: Ut,
      provide: t(function () {
        return { $pcTab: this, $parentInstance: this }
      }, 'provide')
    },
    inheritAttrs: !1,
    inject: ['$pcTabs', '$pcTabList'],
    methods: {
      onFocus: t(function () {
        this.$pcTabs.selectOnFocus && this.changeActiveValue()
      }, 'onFocus'),
      onClick: t(function () {
        this.changeActiveValue()
      }, 'onClick'),
      onKeydown: t(function (e) {
        switch (e.code) {
          case 'ArrowRight':
            this.onArrowRightKey(e)
            break
          case 'ArrowLeft':
            this.onArrowLeftKey(e)
            break
          case 'Home':
            this.onHomeKey(e)
            break
          case 'End':
            this.onEndKey(e)
            break
          case 'PageDown':
            this.onPageDownKey(e)
            break
          case 'PageUp':
            this.onPageUpKey(e)
            break
          case 'Enter':
          case 'NumpadEnter':
          case 'Space':
            this.onEnterKey(e)
        }
      }, 'onKeydown'),
      onArrowRightKey: t(function (e) {
        var t = this.findNextTab(e.currentTarget)
        t ? this.changeFocusedTab(e, t) : this.onHomeKey(e), e.preventDefault()
      }, 'onArrowRightKey'),
      onArrowLeftKey: t(function (e) {
        var t = this.findPrevTab(e.currentTarget)
        t ? this.changeFocusedTab(e, t) : this.onEndKey(e), e.preventDefault()
      }, 'onArrowLeftKey'),
      onHomeKey: t(function (e) {
        var t = this.findFirstTab()
        this.changeFocusedTab(e, t), e.preventDefault()
      }, 'onHomeKey'),
      onEndKey: t(function (e) {
        var t = this.findLastTab()
        this.changeFocusedTab(e, t), e.preventDefault()
      }, 'onEndKey'),
      onPageDownKey: t(function (e) {
        this.scrollInView(this.findLastTab()), e.preventDefault()
      }, 'onPageDownKey'),
      onPageUpKey: t(function (e) {
        this.scrollInView(this.findFirstTab()), e.preventDefault()
      }, 'onPageUpKey'),
      onEnterKey: t(function (e) {
        this.changeActiveValue(), e.preventDefault()
      }, 'onEnterKey'),
      findNextTab: t(function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            ? e
            : e.nextElementSibling
        return t
          ? O(t, 'data-p-disabled') || 'inkbar' === O(t, 'data-pc-section')
            ? this.findNextTab(t)
            : w(t, '[data-pc-name="tab"]')
          : null
      }, 'findNextTab'),
      findPrevTab: t(function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            ? e
            : e.previousElementSibling
        return t
          ? O(t, 'data-p-disabled') || 'inkbar' === O(t, 'data-pc-section')
            ? this.findPrevTab(t)
            : w(t, '[data-pc-name="tab"]')
          : null
      }, 'findPrevTab'),
      findFirstTab: t(function () {
        return this.findNextTab(
          this.$pcTabList.$refs.content.firstElementChild,
          !0
        )
      }, 'findFirstTab'),
      findLastTab: t(function () {
        return this.findPrevTab(
          this.$pcTabList.$refs.content.lastElementChild,
          !0
        )
      }, 'findLastTab'),
      changeActiveValue: t(function () {
        this.$pcTabs.updateValue(this.value)
      }, 'changeActiveValue'),
      changeFocusedTab: t(function (e, t) {
        T(t), this.scrollInView(t)
      }, 'changeFocusedTab'),
      scrollInView: t(function (e) {
        var t
        null == e ||
          null === (t = e.scrollIntoView) ||
          void 0 === t ||
          t.call(e, { block: 'nearest' })
      }, 'scrollInView')
    },
    computed: {
      active: t(function () {
        var e
        return M(
          null === (e = this.$pcTabs) || void 0 === e ? void 0 : e.d_value,
          this.value
        )
      }, 'active'),
      id: t(function () {
        var e
        return ''
          .concat(
            null === (e = this.$pcTabs) || void 0 === e ? void 0 : e.id,
            '_tab_'
          )
          .concat(this.value)
      }, 'id'),
      ariaControls: t(function () {
        var e
        return ''
          .concat(
            null === (e = this.$pcTabs) || void 0 === e ? void 0 : e.id,
            '_tabpanel_'
          )
          .concat(this.value)
      }, 'ariaControls'),
      attrs: t(function () {
        return Vue.mergeProps(
          this.asAttrs,
          this.a11yAttrs,
          this.ptmi('root', this.ptParams)
        )
      }, 'attrs'),
      asAttrs: t(function () {
        return 'BUTTON' === this.as
          ? { type: 'button', disabled: this.disabled }
          : void 0
      }, 'asAttrs'),
      a11yAttrs: t(function () {
        return {
          id: this.id,
          tabindex: this.active ? this.$pcTabs.tabindex : -1,
          role: 'tab',
          'aria-selected': this.active,
          'aria-controls': this.ariaControls,
          'data-pc-name': 'tab',
          'data-p-disabled': this.disabled,
          'data-p-active': this.active,
          onFocus: this.onFocus,
          onKeydown: this.onKeydown
        }
      }, 'a11yAttrs'),
      ptParams: t(function () {
        return { context: { active: this.active } }
      }, 'ptParams')
    },
    directives: { ripple: L }
  }
function Ht(e, t, n, o, i, a) {
  var r = Vue.resolveDirective('ripple')
  return e.asChild
    ? Vue.renderSlot(e.$slots, 'default', {
        key: 1,
        class: Vue.normalizeClass(e.cx('root')),
        active: a.active,
        a11yAttrs: a.a11yAttrs,
        onClick: a.onClick
      })
    : Vue.withDirectives(
        (Vue.openBlock(),
        Vue.createBlock(
          Vue.resolveDynamicComponent(e.as),
          Vue.mergeProps(
            { key: 0, class: e.cx('root'), onClick: a.onClick },
            a.attrs
          ),
          {
            default: Vue.withCtx(function () {
              return [Vue.renderSlot(e.$slots, 'default')]
            }),
            _: 3
          },
          16,
          ['class', 'onClick']
        )),
        [[r]]
      )
}
t(Ht, 'render$c'), (jt.render = Ht)
const Wt = { class: 'flex flex-col h-full' },
  qt = { class: 'w-full flex justify-between' },
  Zt = { class: 'tabs-container' },
  Qt = { class: 'font-bold' },
  Xt = { class: 'flex-grow h-0' },
  Yt = Vue.defineComponent({
    __name: 'BottomPanel',
    setup(e) {
      const t = N()
      return (e, n) => (
        Vue.openBlock(),
        Vue.createElementBlock('div', Wt, [
          Vue.createVNode(
            Vue.unref($),
            {
              value: Vue.unref(t).activeBottomPanelTabId,
              'onUpdate:value':
                n[1] ||
                (n[1] = (e) => (Vue.unref(t).activeBottomPanelTabId = e))
            },
            {
              default: Vue.withCtx(() => [
                Vue.createVNode(
                  Vue.unref(_t),
                  { 'pt:tabList': 'border-none' },
                  {
                    default: Vue.withCtx(() => [
                      Vue.createElementVNode('div', qt, [
                        Vue.createElementVNode('div', Zt, [
                          (Vue.openBlock(!0),
                          Vue.createElementBlock(
                            Vue.Fragment,
                            null,
                            Vue.renderList(
                              Vue.unref(t).bottomPanelTabs,
                              (e) => (
                                Vue.openBlock(),
                                Vue.createBlock(
                                  Vue.unref(jt),
                                  {
                                    key: e.id,
                                    value: e.id,
                                    class: 'p-3 border-none'
                                  },
                                  {
                                    default: Vue.withCtx(() => [
                                      Vue.createElementVNode(
                                        'span',
                                        Qt,
                                        Vue.toDisplayString(
                                          e.title.toUpperCase()
                                        ),
                                        1
                                      )
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ['value']
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        Vue.createVNode(Vue.unref(p), {
                          class: 'justify-self-end',
                          icon: 'pi pi-times',
                          severity: 'secondary',
                          size: 'small',
                          text: '',
                          onClick:
                            n[0] ||
                            (n[0] = (e) =>
                              (Vue.unref(t).bottomPanelVisible = !1))
                        })
                      ])
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            },
            8,
            ['value']
          ),
          Vue.createElementVNode('div', Xt, [
            Vue.unref(t).bottomPanelVisible && Vue.unref(t).activeBottomPanelTab
              ? (Vue.openBlock(),
                Vue.createBlock(
                  Mt,
                  { key: 0, extension: Vue.unref(t).activeBottomPanelTab },
                  null,
                  8,
                  ['extension']
                ))
              : Vue.createCommentVNode('', !0)
          ])
        ])
      )
    }
  })
var Jt = t(function (e) {
    var t = e.dt
    return '\n.p-splitter {\n    display: flex;\n    flex-wrap: nowrap;\n    border: 1px solid '
      .concat(t('splitter.border.color'), ';\n    background: ')
      .concat(t('splitter.background'), ';\n    border-radius: ')
      .concat(t('border.radius.md'), ';\n    color: ')
      .concat(
        t('splitter.color'),
        ';\n}\n\n.p-splitter-vertical {\n    flex-direction: column;\n}\n\n.p-splitter-gutter {\n    flex-grow: 0;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    background: '
      )
      .concat(
        t('splitter.gutter.background'),
        ';\n}\n\n.p-splitter-gutter-handle {\n    border-radius: '
      )
      .concat(t('splitter.handle.border.radius'), ';\n    background: ')
      .concat(
        t('splitter.handle.background'),
        ';\n    transition: outline-color '
      )
      .concat(t('splitter.transition.duration'), ', box-shadow ')
      .concat(
        t('splitter.transition.duration'),
        ';\n    outline-color: transparent;\n}\n\n.p-splitter-gutter-handle:focus-visible {\n    box-shadow: '
      )
      .concat(t('splitter.handle.focus.ring.shadow'), ';\n    outline: ')
      .concat(t('splitter.handle.focus.ring.width'), ' ')
      .concat(t('splitter.handle.focus.ring.style'), ' ')
      .concat(t('splitter.handle.focus.ring.color'), ';\n    outline-offset: ')
      .concat(
        t('splitter.handle.focus.ring.offset'),
        ';\n}\n\n.p-splitter-horizontal.p-splitter-resizing {\n    cursor: col-resize;\n    user-select: none;\n}\n\n.p-splitter-vertical.p-splitter-resizing {\n    cursor: row-resize;\n    user-select: none;\n}\n\n.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {\n    height: '
      )
      .concat(
        t('splitter.handle.size'),
        ';\n    width: 100%;\n}\n\n.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {\n    width: '
      )
      .concat(
        t('splitter.handle.size'),
        ';\n    height: 100%;\n}\n\n.p-splitter-horizontal > .p-splitter-gutter {\n    cursor: col-resize;\n}\n\n.p-splitter-vertical > .p-splitter-gutter {\n    cursor: row-resize;\n}\n\n.p-splitterpanel {\n    flex-grow: 1;\n    overflow: hidden;\n}\n\n.p-splitterpanel-nested {\n    display: flex;\n}\n\n.p-splitterpanel .p-splitter {\n    flex-grow: 1;\n    border: 0 none;\n}\n'
      )
  }, 'theme'),
  en = {
    root: t(function (e) {
      return ['p-splitter p-component', 'p-splitter-' + e.props.layout]
    }, 'root'),
    gutter: 'p-splitter-gutter',
    gutterHandle: 'p-splitter-gutter-handle'
  },
  tn = {
    root: t(function (e) {
      return [
        { display: 'flex', 'flex-wrap': 'nowrap' },
        'vertical' === e.props.layout ? { 'flex-direction': 'column' } : ''
      ]
    }, 'root')
  },
  nn = c.extend({ name: 'splitter', theme: Jt, classes: en, inlineStyles: tn }),
  on = {
    name: 'BaseSplitter',
    extends: V,
    props: {
      layout: { type: String, default: 'horizontal' },
      gutterSize: { type: Number, default: 4 },
      stateKey: { type: String, default: null },
      stateStorage: { type: String, default: 'session' },
      step: { type: Number, default: 5 }
    },
    style: nn,
    provide: t(function () {
      return { $pcSplitter: this, $parentInstance: this }
    }, 'provide')
  }
function an(e) {
  return un(e) || ln(e) || sn(e) || rn()
}
function rn() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}
function sn(e, t) {
  if (e) {
    if ('string' == typeof e) return cn(e, t)
    var n = {}.toString.call(e).slice(8, -1)
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? cn(e, t)
          : void 0
    )
  }
}
function ln(e) {
  if (
    ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e['@@iterator']
  )
    return Array.from(e)
}
function un(e) {
  if (Array.isArray(e)) return cn(e)
}
function cn(e, t) {
  ;(null == t || t > e.length) && (t = e.length)
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n]
  return o
}
t(an, '_toConsumableArray$2'),
  t(rn, '_nonIterableSpread$2'),
  t(sn, '_unsupportedIterableToArray$2'),
  t(ln, '_iterableToArray$2'),
  t(un, '_arrayWithoutHoles$2'),
  t(cn, '_arrayLikeToArray$2')
var dn = {
    name: 'Splitter',
    extends: on,
    inheritAttrs: !1,
    emits: ['resizestart', 'resizeend', 'resize'],
    dragging: !1,
    mouseMoveListener: null,
    mouseUpListener: null,
    touchMoveListener: null,
    touchEndListener: null,
    size: null,
    gutterElement: null,
    startPos: null,
    prevPanelElement: null,
    nextPanelElement: null,
    nextPanelSize: null,
    prevPanelSize: null,
    panelSizes: null,
    prevPanelIndex: null,
    timer: null,
    data: t(function () {
      return { prevSize: null }
    }, 'data'),
    mounted: t(function () {
      this.initializePanels()
    }, 'mounted'),
    beforeUnmount: t(function () {
      this.clear(), this.unbindMouseListeners()
    }, 'beforeUnmount'),
    methods: {
      isSplitterPanel: t(function (e) {
        return 'SplitterPanel' === e.type.name
      }, 'isSplitterPanel'),
      initializePanels: t(function () {
        var e = this
        if (this.panels && this.panels.length) {
          var t = !1
          if ((this.isStateful() && (t = this.restoreState()), !t)) {
            var n = an(this.$el.children).filter(function (e) {
                return 'splitterpanel' === e.getAttribute('data-pc-name')
              }),
              o = []
            this.panels.map(function (t, i) {
              var a =
                (t.props && t.props.size ? t.props.size : null) ||
                100 / e.panels.length
              ;(o[i] = a),
                (n[i].style.flexBasis =
                  'calc(' +
                  a +
                  '% - ' +
                  (e.panels.length - 1) * e.gutterSize +
                  'px)')
            }),
              (this.panelSizes = o),
              (this.prevSize = parseFloat(o[0]).toFixed(4))
          }
        }
      }, 'initializePanels'),
      onResizeStart: t(function (e, t, n) {
        ;(this.gutterElement = e.currentTarget || e.target.parentElement),
          (this.size = this.horizontal ? I(this.$el) : P(this.$el)),
          n ||
            ((this.dragging = !0),
            (this.startPos =
              'horizontal' === this.layout
                ? e.pageX || e.changedTouches[0].pageX
                : e.pageY || e.changedTouches[0].pageY)),
          (this.prevPanelElement = this.gutterElement.previousElementSibling),
          (this.nextPanelElement = this.gutterElement.nextElementSibling),
          n
            ? ((this.prevPanelSize = this.horizontal
                ? S(this.prevPanelElement, !0)
                : x(this.prevPanelElement, !0)),
              (this.nextPanelSize = this.horizontal
                ? S(this.nextPanelElement, !0)
                : x(this.nextPanelElement, !0)))
            : ((this.prevPanelSize =
                (100 *
                  (this.horizontal
                    ? S(this.prevPanelElement, !0)
                    : x(this.prevPanelElement, !0))) /
                this.size),
              (this.nextPanelSize =
                (100 *
                  (this.horizontal
                    ? S(this.nextPanelElement, !0)
                    : x(this.nextPanelElement, !0))) /
                this.size)),
          (this.prevPanelIndex = t),
          this.$emit('resizestart', {
            originalEvent: e,
            sizes: this.panelSizes
          }),
          this.$refs.gutter[t].setAttribute('data-p-gutter-resizing', !0),
          this.$el.setAttribute('data-p-resizing', !0)
      }, 'onResizeStart'),
      onResize: t(function (e, t, n) {
        var o, i, a
        n
          ? this.horizontal
            ? ((i = (100 * (this.prevPanelSize + t)) / this.size),
              (a = (100 * (this.nextPanelSize - t)) / this.size))
            : ((i = (100 * (this.prevPanelSize - t)) / this.size),
              (a = (100 * (this.nextPanelSize + t)) / this.size))
          : ((o = this.horizontal
              ? k(this.$el)
                ? (100 * (this.startPos - e.pageX)) / this.size
                : (100 * (e.pageX - this.startPos)) / this.size
              : (100 * (e.pageY - this.startPos)) / this.size),
            (i = this.prevPanelSize + o),
            (a = this.nextPanelSize - o)),
          this.validateResize(i, a) &&
            ((this.prevPanelElement.style.flexBasis =
              'calc(' +
              i +
              '% - ' +
              (this.panels.length - 1) * this.gutterSize +
              'px)'),
            (this.nextPanelElement.style.flexBasis =
              'calc(' +
              a +
              '% - ' +
              (this.panels.length - 1) * this.gutterSize +
              'px)'),
            (this.panelSizes[this.prevPanelIndex] = i),
            (this.panelSizes[this.prevPanelIndex + 1] = a),
            (this.prevSize = parseFloat(i).toFixed(4))),
          this.$emit('resize', { originalEvent: e, sizes: this.panelSizes })
      }, 'onResize'),
      onResizeEnd: t(function (e) {
        this.isStateful() && this.saveState(),
          this.$emit('resizeend', { originalEvent: e, sizes: this.panelSizes }),
          this.$refs.gutter.forEach(function (e) {
            return e.setAttribute('data-p-gutter-resizing', !1)
          }),
          this.$el.setAttribute('data-p-resizing', !1),
          this.clear()
      }, 'onResizeEnd'),
      repeat: t(function (e, t, n) {
        this.onResizeStart(e, t, !0), this.onResize(e, n, !0)
      }, 'repeat'),
      setTimer: t(function (e, t, n) {
        var o = this
        this.timer ||
          (this.timer = setInterval(function () {
            o.repeat(e, t, n)
          }, 40))
      }, 'setTimer'),
      clearTimer: t(function () {
        this.timer && (clearInterval(this.timer), (this.timer = null))
      }, 'clearTimer'),
      onGutterKeyUp: t(function () {
        this.clearTimer(), this.onResizeEnd()
      }, 'onGutterKeyUp'),
      onGutterKeyDown: t(function (e, t) {
        switch (e.code) {
          case 'ArrowLeft':
            'horizontal' === this.layout && this.setTimer(e, t, -1 * this.step),
              e.preventDefault()
            break
          case 'ArrowRight':
            'horizontal' === this.layout && this.setTimer(e, t, this.step),
              e.preventDefault()
            break
          case 'ArrowDown':
            'vertical' === this.layout && this.setTimer(e, t, -1 * this.step),
              e.preventDefault()
            break
          case 'ArrowUp':
            'vertical' === this.layout && this.setTimer(e, t, this.step),
              e.preventDefault()
        }
      }, 'onGutterKeyDown'),
      onGutterMouseDown: t(function (e, t) {
        this.onResizeStart(e, t), this.bindMouseListeners()
      }, 'onGutterMouseDown'),
      onGutterTouchStart: t(function (e, t) {
        this.onResizeStart(e, t), this.bindTouchListeners(), e.preventDefault()
      }, 'onGutterTouchStart'),
      onGutterTouchMove: t(function (e) {
        this.onResize(e), e.preventDefault()
      }, 'onGutterTouchMove'),
      onGutterTouchEnd: t(function (e) {
        this.onResizeEnd(e), this.unbindTouchListeners(), e.preventDefault()
      }, 'onGutterTouchEnd'),
      bindMouseListeners: t(function () {
        var e = this
        this.mouseMoveListener ||
          ((this.mouseMoveListener = function (t) {
            return e.onResize(t)
          }),
          document.addEventListener('mousemove', this.mouseMoveListener)),
          this.mouseUpListener ||
            ((this.mouseUpListener = function (t) {
              e.onResizeEnd(t), e.unbindMouseListeners()
            }),
            document.addEventListener('mouseup', this.mouseUpListener))
      }, 'bindMouseListeners'),
      bindTouchListeners: t(function () {
        var e = this
        this.touchMoveListener ||
          ((this.touchMoveListener = function (t) {
            return e.onResize(t.changedTouches[0])
          }),
          document.addEventListener('touchmove', this.touchMoveListener)),
          this.touchEndListener ||
            ((this.touchEndListener = function (t) {
              e.resizeEnd(t), e.unbindTouchListeners()
            }),
            document.addEventListener('touchend', this.touchEndListener))
      }, 'bindTouchListeners'),
      validateResize: t(function (e, t) {
        if (e > 100 || e < 0) return !1
        if (t > 100 || t < 0) return !1
        var n = A(this.panels[this.prevPanelIndex], 'minSize')
        if (this.panels[this.prevPanelIndex].props && n && n > e) return !1
        var o = A(this.panels[this.prevPanelIndex + 1], 'minSize')
        return !(this.panels[this.prevPanelIndex + 1].props && o && o > t)
      }, 'validateResize'),
      unbindMouseListeners: t(function () {
        this.mouseMoveListener &&
          (document.removeEventListener('mousemove', this.mouseMoveListener),
          (this.mouseMoveListener = null)),
          this.mouseUpListener &&
            (document.removeEventListener('mouseup', this.mouseUpListener),
            (this.mouseUpListener = null))
      }, 'unbindMouseListeners'),
      unbindTouchListeners: t(function () {
        this.touchMoveListener &&
          (document.removeEventListener('touchmove', this.touchMoveListener),
          (this.touchMoveListener = null)),
          this.touchEndListener &&
            (document.removeEventListener('touchend', this.touchEndListener),
            (this.touchEndListener = null))
      }, 'unbindTouchListeners'),
      clear: t(function () {
        ;(this.dragging = !1),
          (this.size = null),
          (this.startPos = null),
          (this.prevPanelElement = null),
          (this.nextPanelElement = null),
          (this.prevPanelSize = null),
          (this.nextPanelSize = null),
          (this.gutterElement = null),
          (this.prevPanelIndex = null)
      }, 'clear'),
      isStateful: t(function () {
        return null != this.stateKey
      }, 'isStateful'),
      getStorage: t(function () {
        switch (this.stateStorage) {
          case 'local':
            return window.localStorage
          case 'session':
            return window.sessionStorage
          default:
            throw new Error(
              this.stateStorage +
                ' is not a valid value for the state storage, supported values are "local" and "session".'
            )
        }
      }, 'getStorage'),
      saveState: t(function () {
        D(this.panelSizes) &&
          this.getStorage().setItem(
            this.stateKey,
            JSON.stringify(this.panelSizes)
          )
      }, 'saveState'),
      restoreState: t(function () {
        var e = this,
          t = this.getStorage().getItem(this.stateKey)
        return (
          !!t &&
          ((this.panelSizes = JSON.parse(t)),
          an(this.$el.children)
            .filter(function (e) {
              return 'splitterpanel' === e.getAttribute('data-pc-name')
            })
            .forEach(function (t, n) {
              t.style.flexBasis =
                'calc(' +
                e.panelSizes[n] +
                '% - ' +
                (e.panels.length - 1) * e.gutterSize +
                'px)'
            }),
          !0)
        )
      }, 'restoreState'),
      resetState: t(function () {
        this.initializePanels()
      }, 'resetState')
    },
    computed: {
      panels: t(function () {
        var e = this,
          t = []
        return (
          this.$slots.default().forEach(function (n) {
            e.isSplitterPanel(n)
              ? t.push(n)
              : n.children instanceof Array &&
                n.children.forEach(function (n) {
                  e.isSplitterPanel(n) && t.push(n)
                })
          }),
          t
        )
      }, 'panels'),
      gutterStyle: t(function () {
        return this.horizontal
          ? { width: this.gutterSize + 'px' }
          : { height: this.gutterSize + 'px' }
      }, 'gutterStyle'),
      horizontal: t(function () {
        return 'horizontal' === this.layout
      }, 'horizontal'),
      getPTOptions: t(function () {
        var e
        return {
          context: {
            nested:
              null === (e = this.$parentInstance) || void 0 === e
                ? void 0
                : e.nestedState
          }
        }
      }, 'getPTOptions')
    }
  },
  pn = ['onMousedown', 'onTouchstart', 'onTouchmove', 'onTouchend'],
  mn = ['aria-orientation', 'aria-valuenow', 'onKeydown']
function fn(e, n, o, i, a, r) {
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps(
        { class: e.cx('root'), style: e.sx('root'), 'data-p-resizing': !1 },
        e.ptmi('root', r.getPTOptions)
      ),
      [
        (Vue.openBlock(!0),
        Vue.createElementBlock(
          Vue.Fragment,
          null,
          Vue.renderList(r.panels, function (o, i) {
            return (
              Vue.openBlock(),
              Vue.createElementBlock(
                Vue.Fragment,
                { key: i },
                [
                  (Vue.openBlock(),
                  Vue.createBlock(Vue.resolveDynamicComponent(o), {
                    tabindex: '-1'
                  })),
                  i !== r.panels.length - 1
                    ? (Vue.openBlock(),
                      Vue.createElementBlock(
                        'div',
                        Vue.mergeProps(
                          {
                            key: 0,
                            ref_for: !0,
                            ref: 'gutter',
                            class: e.cx('gutter'),
                            role: 'separator',
                            tabindex: '-1',
                            onMousedown: t(function (e) {
                              return r.onGutterMouseDown(e, i)
                            }, 'onMousedown'),
                            onTouchstart: t(function (e) {
                              return r.onGutterTouchStart(e, i)
                            }, 'onTouchstart'),
                            onTouchmove: t(function (e) {
                              return r.onGutterTouchMove(e, i)
                            }, 'onTouchmove'),
                            onTouchend: t(function (e) {
                              return r.onGutterTouchEnd(e, i)
                            }, 'onTouchend'),
                            'data-p-gutter-resizing': !1
                          },
                          e.ptm('gutter')
                        ),
                        [
                          Vue.createElementVNode(
                            'div',
                            Vue.mergeProps(
                              {
                                class: e.cx('gutterHandle'),
                                tabindex: '0',
                                style: [r.gutterStyle],
                                'aria-orientation': e.layout,
                                'aria-valuenow': a.prevSize,
                                onKeyup:
                                  n[0] ||
                                  (n[0] = function () {
                                    return (
                                      r.onGutterKeyUp &&
                                      r.onGutterKeyUp.apply(r, arguments)
                                    )
                                  }),
                                onKeydown: t(function (e) {
                                  return r.onGutterKeyDown(e, i)
                                }, 'onKeydown'),
                                ref_for: !0
                              },
                              e.ptm('gutterHandle')
                            ),
                            null,
                            16,
                            mn
                          )
                        ],
                        16,
                        pn
                      ))
                    : Vue.createCommentVNode('', !0)
                ],
                64
              )
            )
          }),
          128
        ))
      ],
      16
    )
  )
}
t(fn, 'render$b'), (dn.render = fn)
var hn = {
    root: t(function (e) {
      return [
        'p-splitterpanel',
        { 'p-splitterpanel-nested': e.instance.isNested }
      ]
    }, 'root')
  },
  bn = c.extend({ name: 'splitterpanel', classes: hn }),
  vn = {
    name: 'SplitterPanel',
    extends: {
      name: 'BaseSplitterPanel',
      extends: V,
      props: {
        size: { type: Number, default: null },
        minSize: { type: Number, default: null }
      },
      style: bn,
      provide: t(function () {
        return { $pcSplitterPanel: this, $parentInstance: this }
      }, 'provide')
    },
    inheritAttrs: !1,
    data: t(function () {
      return { nestedState: null }
    }, 'data'),
    computed: {
      isNested: t(function () {
        var e = this
        return this.$slots.default().some(function (t) {
          return (
            (e.nestedState = 'Splitter' === t.type.name || null), e.nestedState
          )
        })
      }, 'isNested'),
      getPTOptions: t(function () {
        return { context: { nested: this.isNested } }
      }, 'getPTOptions')
    }
  }
function gn(e, t, n, o, i, a) {
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps(
        { ref: 'container', class: e.cx('root') },
        e.ptmi('root', a.getPTOptions)
      ),
      [Vue.renderSlot(e.$slots, 'default')],
      16
    )
  )
}
t(gn, 'render$a'), (vn.render = gn)
const yn = u(
  Vue.defineComponent({
    __name: 'LiteGraphCanvasSplitterOverlay',
    setup(e) {
      const t = o(),
        n = Vue.computed(() => t.get('Comfy.Sidebar.Location')),
        i = Vue.computed(() => null !== z().activeSidebarTab),
        a = Vue.computed(() => N().bottomPanelVisible)
      return (e, t) => (
        Vue.openBlock(),
        Vue.createBlock(
          Vue.unref(dn),
          {
            class: 'splitter-overlay-root splitter-overlay',
            'pt:gutter': i.value ? '' : 'hidden',
            stateKey: 'sidebar-splitter',
            stateStorage: 'local'
          },
          {
            default: Vue.withCtx(() => [
              'left' === n.value
                ? Vue.withDirectives(
                    (Vue.openBlock(),
                    Vue.createBlock(
                      Vue.unref(vn),
                      {
                        key: 0,
                        class: 'side-bar-panel',
                        minSize: 10,
                        size: 20
                      },
                      {
                        default: Vue.withCtx(() => [
                          Vue.renderSlot(
                            e.$slots,
                            'side-bar-panel',
                            {},
                            void 0,
                            !0
                          )
                        ]),
                        _: 3
                      },
                      512
                    )),
                    [[Vue.vShow, i.value]]
                  )
                : Vue.createCommentVNode('', !0),
              Vue.createVNode(
                Vue.unref(vn),
                { size: 100 },
                {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(
                      Vue.unref(dn),
                      {
                        class: 'splitter-overlay max-w-full',
                        layout: 'vertical',
                        'pt:gutter': a.value ? '' : 'hidden',
                        stateKey: 'bottom-panel-splitter',
                        stateStorage: 'local'
                      },
                      {
                        default: Vue.withCtx(() => [
                          Vue.createVNode(
                            Vue.unref(vn),
                            { class: 'graph-canvas-panel relative' },
                            {
                              default: Vue.withCtx(() => [
                                Vue.renderSlot(
                                  e.$slots,
                                  'graph-canvas-panel',
                                  {},
                                  void 0,
                                  !0
                                )
                              ]),
                              _: 3
                            }
                          ),
                          Vue.withDirectives(
                            Vue.createVNode(
                              Vue.unref(vn),
                              { class: 'bottom-panel' },
                              {
                                default: Vue.withCtx(() => [
                                  Vue.renderSlot(
                                    e.$slots,
                                    'bottom-panel',
                                    {},
                                    void 0,
                                    !0
                                  )
                                ]),
                                _: 3
                              },
                              512
                            ),
                            [[Vue.vShow, a.value]]
                          )
                        ]),
                        _: 3
                      },
                      8,
                      ['pt:gutter']
                    )
                  ]),
                  _: 3
                }
              ),
              'right' === n.value
                ? Vue.withDirectives(
                    (Vue.openBlock(),
                    Vue.createBlock(
                      Vue.unref(vn),
                      {
                        key: 1,
                        class: 'side-bar-panel',
                        minSize: 10,
                        size: 20
                      },
                      {
                        default: Vue.withCtx(() => [
                          Vue.renderSlot(
                            e.$slots,
                            'side-bar-panel',
                            {},
                            void 0,
                            !0
                          )
                        ]),
                        _: 3
                      },
                      512
                    )),
                    [[Vue.vShow, i.value]]
                  )
                : Vue.createCommentVNode('', !0)
            ]),
            _: 3
          },
          8,
          ['pt:gutter']
        )
      )
    }
  }),
  [['__scopeId', 'data-v-7c3279c1']]
)
var Vn = t(function (e) {
    var t = e.dt
    return '\n.p-autocomplete {\n    display: inline-flex;\n}\n\n.p-autocomplete-loader {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    inset-inline-end: '
      .concat(
        t('autocomplete.padding.x'),
        ';\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {\n    inset-inline-end: calc('
      )
      .concat(t('autocomplete.dropdown.width'), ' + ')
      .concat(
        t('autocomplete.padding.x'),
        ');\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n.p-autocomplete-dropdown {\n    cursor: pointer;\n    display: inline-flex;\n    user-select: none;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    width: '
      )
      .concat(
        t('autocomplete.dropdown.width'),
        ';\n    border-start-end-radius: '
      )
      .concat(
        t('autocomplete.dropdown.border.radius'),
        ';\n    border-end-end-radius: '
      )
      .concat(t('autocomplete.dropdown.border.radius'), ';\n    background: ')
      .concat(
        t('autocomplete.dropdown.background'),
        ';\n    border: 1px solid '
      )
      .concat(
        t('autocomplete.dropdown.border.color'),
        ';\n    border-inline-start: 0 none;\n    color: '
      )
      .concat(
        t('autocomplete.dropdown.color'),
        ';\n    transition: background '
      )
      .concat(t('autocomplete.transition.duration'), ', color ')
      .concat(t('autocomplete.transition.duration'), ', border-color ')
      .concat(t('autocomplete.transition.duration'), ', outline-color ')
      .concat(t('autocomplete.transition.duration'), ', box-shadow ')
      .concat(
        t('autocomplete.transition.duration'),
        ';\n    outline-color: transparent;\n}\n\n.p-autocomplete-dropdown:not(:disabled):hover {\n    background: '
      )
      .concat(
        t('autocomplete.dropdown.hover.background'),
        ';\n    border-color: '
      )
      .concat(t('autocomplete.dropdown.hover.border.color'), ';\n    color: ')
      .concat(
        t('autocomplete.dropdown.hover.color'),
        ';\n}\n\n.p-autocomplete-dropdown:not(:disabled):active {\n    background: '
      )
      .concat(
        t('autocomplete.dropdown.active.background'),
        ';\n    border-color: '
      )
      .concat(t('autocomplete.dropdown.active.border.color'), ';\n    color: ')
      .concat(
        t('autocomplete.dropdown.active.color'),
        ';\n}\n\n.p-autocomplete-dropdown:focus-visible {\n    box-shadow: '
      )
      .concat(t('autocomplete.dropdown.focus.ring.shadow'), ';\n    outline: ')
      .concat(t('autocomplete.dropdown.focus.ring.width'), ' ')
      .concat(t('autocomplete.dropdown.focus.ring.style'), ' ')
      .concat(
        t('autocomplete.dropdown.focus.ring.color'),
        ';\n    outline-offset: '
      )
      .concat(
        t('autocomplete.dropdown.focus.ring.offset'),
        ';\n}\n\n.p-autocomplete .p-autocomplete-overlay {\n    min-width: 100%;\n}\n\n.p-autocomplete-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: '
      )
      .concat(t('autocomplete.overlay.background'), ';\n    color: ')
      .concat(t('autocomplete.overlay.color'), ';\n    border: 1px solid ')
      .concat(t('autocomplete.overlay.border.color'), ';\n    border-radius: ')
      .concat(t('autocomplete.overlay.border.radius'), ';\n    box-shadow: ')
      .concat(
        t('autocomplete.overlay.shadow'),
        ';\n}\n\n.p-autocomplete-list-container {\n    overflow: auto;\n}\n\n.p-autocomplete-list {\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: '
      )
      .concat(t('autocomplete.list.gap'), ';\n    padding: ')
      .concat(
        t('autocomplete.list.padding'),
        ';\n}\n\n.p-autocomplete-option {\n    cursor: pointer;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    padding: '
      )
      .concat(
        t('autocomplete.option.padding'),
        ';\n    border: 0 none;\n    color: '
      )
      .concat(
        t('autocomplete.option.color'),
        ';\n    background: transparent;\n    transition: background '
      )
      .concat(t('autocomplete.transition.duration'), ', color ')
      .concat(t('autocomplete.transition.duration'), ', border-color ')
      .concat(t('autocomplete.transition.duration'), ';\n    border-radius: ')
      .concat(
        t('autocomplete.option.border.radius'),
        ';\n}\n\n.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {\n    background: '
      )
      .concat(t('autocomplete.option.focus.background'), ';\n    color: ')
      .concat(
        t('autocomplete.option.focus.color'),
        ';\n}\n\n.p-autocomplete-option-selected {\n    background: '
      )
      .concat(t('autocomplete.option.selected.background'), ';\n    color: ')
      .concat(
        t('autocomplete.option.selected.color'),
        ';\n}\n\n.p-autocomplete-option-selected.p-focus {\n    background: '
      )
      .concat(
        t('autocomplete.option.selected.focus.background'),
        ';\n    color: '
      )
      .concat(
        t('autocomplete.option.selected.focus.color'),
        ';\n}\n\n.p-autocomplete-option-group {\n    margin: 0;\n    padding: '
      )
      .concat(t('autocomplete.option.group.padding'), ';\n    color: ')
      .concat(t('autocomplete.option.group.color'), ';\n    background: ')
      .concat(t('autocomplete.option.group.background'), ';\n    font-weight: ')
      .concat(
        t('autocomplete.option.group.font.weight'),
        ';\n}\n\n.p-autocomplete-input-multiple {\n    margin: 0;\n    list-style-type: none;\n    cursor: text;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: calc('
      )
      .concat(t('autocomplete.padding.y'), ' / 2) ')
      .concat(t('autocomplete.padding.x'), ';\n    gap: calc(')
      .concat(t('autocomplete.padding.y'), ' / 2);\n    color: ')
      .concat(t('autocomplete.color'), ';\n    background: ')
      .concat(t('autocomplete.background'), ';\n    border: 1px solid ')
      .concat(t('autocomplete.border.color'), ';\n    border-radius: ')
      .concat(
        t('autocomplete.border.radius'),
        ';\n    width: 100%;\n    transition: background '
      )
      .concat(t('autocomplete.transition.duration'), ', color ')
      .concat(t('autocomplete.transition.duration'), ', border-color ')
      .concat(t('autocomplete.transition.duration'), ', outline-color ')
      .concat(t('autocomplete.transition.duration'), ', box-shadow ')
      .concat(
        t('autocomplete.transition.duration'),
        ';\n    outline-color: transparent;\n    box-shadow: '
      )
      .concat(
        t('autocomplete.shadow'),
        ';\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {\n    border-color: '
      )
      .concat(
        t('autocomplete.hover.border.color'),
        ';\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {\n    border-color: '
      )
      .concat(t('autocomplete.focus.border.color'), ';\n    box-shadow: ')
      .concat(t('autocomplete.focus.ring.shadow'), ';\n    outline: ')
      .concat(t('autocomplete.focus.ring.width'), ' ')
      .concat(t('autocomplete.focus.ring.style'), ' ')
      .concat(t('autocomplete.focus.ring.color'), ';\n    outline-offset: ')
      .concat(
        t('autocomplete.focus.ring.offset'),
        ';\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-multiple {\n    border-color: '
      )
      .concat(
        t('autocomplete.invalid.border.color'),
        ';\n}\n\n.p-variant-filled.p-autocomplete-input-multiple {\n    background: '
      )
      .concat(
        t('autocomplete.filled.background'),
        ';\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {\n    background: '
      )
      .concat(
        t('autocomplete.filled.hover.background'),
        ';\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {\n    background: '
      )
      .concat(
        t('autocomplete.filled.focus.background'),
        ';\n}\n\n.p-autocomplete.p-disabled .p-autocomplete-input-multiple {\n    opacity: 1;\n    background: '
      )
      .concat(t('autocomplete.disabled.background'), ';\n    color: ')
      .concat(
        t('autocomplete.disabled.color'),
        ';\n}\n\n.p-autocomplete-chip.p-chip {\n    padding-block-start: calc('
      )
      .concat(
        t('autocomplete.padding.y'),
        ' / 2);\n    padding-block-end: calc('
      )
      .concat(t('autocomplete.padding.y'), ' / 2);\n    border-radius: ')
      .concat(
        t('autocomplete.chip.border.radius'),
        ';\n}\n\n.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {\n    padding-inline-start: calc('
      )
      .concat(
        t('autocomplete.padding.y'),
        ' / 2);\n    padding-inline-end: calc('
      )
      .concat(
        t('autocomplete.padding.y'),
        ' / 2);\n}\n\n.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {\n    background: '
      )
      .concat(t('autocomplete.chip.focus.background'), ';\n    color: ')
      .concat(
        t('autocomplete.chip.focus.color'),
        ';\n}\n\n.p-autocomplete-input-chip {\n    flex: 1 1 auto;\n    display: inline-flex;\n    padding-block-start: calc('
      )
      .concat(
        t('autocomplete.padding.y'),
        ' / 2);\n    padding-block-end: calc('
      )
      .concat(
        t('autocomplete.padding.y'),
        ' / 2);\n}\n\n.p-autocomplete-input-chip input {\n    border: 0 none;\n    outline: 0 none;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    border-radius: 0;\n    width: 100%;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: inherit;\n}\n\n.p-autocomplete-input-chip input::placeholder {\n    color: '
      )
      .concat(
        t('autocomplete.placeholder.color'),
        ';\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {\n    color: '
      )
      .concat(
        t('autocomplete.invalid.placeholder.color'),
        ';\n}\n\n.p-autocomplete-empty-message {\n    padding: '
      )
      .concat(
        t('autocomplete.empty.message.padding'),
        ';\n}\n\n.p-autocomplete-fluid {\n    display: flex;\n}\n\n.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n    width: 1%;\n}\n\n.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {\n    width: '
      )
      .concat(
        t('autocomplete.dropdown.sm.width'),
        ';\n}\n\n.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {\n    font-size: '
      )
      .concat(t('form.field.sm.font.size'), ';\n    width: ')
      .concat(t('form.field.sm.font.size'), ';\n    height: ')
      .concat(
        t('form.field.sm.font.size'),
        ';\n}\n\n.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {\n    width: '
      )
      .concat(
        t('autocomplete.dropdown.lg.width'),
        ';\n}\n\n.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {\n    font-size: '
      )
      .concat(t('form.field.lg.font.size'), ';\n    width: ')
      .concat(t('form.field.lg.font.size'), ';\n    height: ')
      .concat(t('form.field.lg.font.size'), ';\n}\n')
  }, 'theme'),
  In = {
    root: t(function (e) {
      var t = e.instance
      return [
        'p-autocomplete p-component p-inputwrapper',
        {
          'p-disabled': e.props.disabled,
          'p-invalid': t.$invalid,
          'p-focus': t.focused,
          'p-inputwrapper-filled': t.$filled || K(t.inputValue),
          'p-inputwrapper-focus': t.focused,
          'p-autocomplete-open': t.overlayVisible,
          'p-autocomplete-fluid': t.$fluid
        }
      ]
    }, 'root'),
    pcInputText: 'p-autocomplete-input',
    inputMultiple: t(function (e) {
      return (
        e.props,
        [
          'p-autocomplete-input-multiple',
          { 'p-variant-filled': 'filled' === e.instance.$variant }
        ]
      )
    }, 'inputMultiple'),
    chipItem: t(function (e) {
      var t = e.instance,
        n = e.i
      return [
        'p-autocomplete-chip-item',
        { 'p-focus': t.focusedMultipleOptionIndex === n }
      ]
    }, 'chipItem'),
    pcChip: 'p-autocomplete-chip',
    chipIcon: 'p-autocomplete-chip-icon',
    inputChip: 'p-autocomplete-input-chip',
    loader: 'p-autocomplete-loader',
    dropdown: 'p-autocomplete-dropdown',
    overlay: 'p-autocomplete-overlay p-component',
    listContainer: 'p-autocomplete-list-container',
    list: 'p-autocomplete-list',
    optionGroup: 'p-autocomplete-option-group',
    option: t(function (e) {
      var t = e.instance,
        n = e.option,
        o = e.i,
        i = e.getItemOptions
      return [
        'p-autocomplete-option',
        {
          'p-autocomplete-option-selected': t.isSelected(n),
          'p-focus': t.focusedOptionIndex === t.getOptionIndex(o, i),
          'p-disabled': t.isOptionDisabled(n)
        }
      ]
    }, 'option'),
    emptyMessage: 'p-autocomplete-empty-message'
  },
  kn = c.extend({
    name: 'autocomplete',
    theme: Vn,
    classes: In,
    inlineStyles: { root: { position: 'relative' } }
  }),
  wn = {
    name: 'BaseAutoComplete',
    extends: F,
    props: {
      suggestions: { type: Array, default: null },
      optionLabel: null,
      optionDisabled: null,
      optionGroupLabel: null,
      optionGroupChildren: null,
      scrollHeight: { type: String, default: '14rem' },
      dropdown: { type: Boolean, default: !1 },
      dropdownMode: { type: String, default: 'blank' },
      multiple: { type: Boolean, default: !1 },
      loading: { type: Boolean, default: !1 },
      placeholder: { type: String, default: null },
      dataKey: { type: String, default: null },
      minLength: { type: Number, default: 1 },
      delay: { type: Number, default: 300 },
      appendTo: { type: [String, Object], default: 'body' },
      forceSelection: { type: Boolean, default: !1 },
      completeOnFocus: { type: Boolean, default: !1 },
      inputId: { type: String, default: null },
      inputStyle: { type: Object, default: null },
      inputClass: { type: [String, Object], default: null },
      panelStyle: { type: Object, default: null },
      panelClass: { type: [String, Object], default: null },
      overlayStyle: { type: Object, default: null },
      overlayClass: { type: [String, Object], default: null },
      dropdownIcon: { type: String, default: null },
      dropdownClass: { type: [String, Object], default: null },
      loader: { type: String, default: null },
      loadingIcon: { type: String, default: null },
      removeTokenIcon: { type: String, default: null },
      chipIcon: { type: String, default: null },
      virtualScrollerOptions: { type: Object, default: null },
      autoOptionFocus: { type: Boolean, default: !1 },
      selectOnFocus: { type: Boolean, default: !1 },
      focusOnHover: { type: Boolean, default: !0 },
      searchLocale: { type: String, default: void 0 },
      searchMessage: { type: String, default: null },
      selectionMessage: { type: String, default: null },
      emptySelectionMessage: { type: String, default: null },
      emptySearchMessage: { type: String, default: null },
      showEmptyMessage: { type: Boolean, default: !0 },
      tabindex: { type: Number, default: 0 },
      typeahead: { type: Boolean, default: !0 },
      ariaLabel: { type: String, default: null },
      ariaLabelledby: { type: String, default: null }
    },
    style: kn,
    provide: t(function () {
      return { $pcAutoComplete: this, $parentInstance: this }
    }, 'provide')
  }
function xn(e) {
  return (xn =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        })(e)
}
function Cn(e) {
  return En(e) || Bn(e) || Pn(e) || Sn()
}
function Sn() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}
function Pn(e, t) {
  if (e) {
    if ('string' == typeof e) return Ln(e, t)
    var n = {}.toString.call(e).slice(8, -1)
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Ln(e, t)
          : void 0
    )
  }
}
function Bn(e) {
  if (
    ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e['@@iterator']
  )
    return Array.from(e)
}
function En(e) {
  if (Array.isArray(e)) return Ln(e)
}
function Ln(e, t) {
  ;(null == t || t > e.length) && (t = e.length)
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n]
  return o
}
t(xn, '_typeof$1$1'),
  t(Cn, '_toConsumableArray$1'),
  t(Sn, '_nonIterableSpread$1'),
  t(Pn, '_unsupportedIterableToArray$1'),
  t(Bn, '_iterableToArray$1'),
  t(En, '_arrayWithoutHoles$1'),
  t(Ln, '_arrayLikeToArray$1')
var On = {
  name: 'AutoComplete',
  extends: wn,
  inheritAttrs: !1,
  emits: [
    'change',
    'focus',
    'blur',
    'item-select',
    'item-unselect',
    'option-select',
    'option-unselect',
    'dropdown-click',
    'clear',
    'complete',
    'before-show',
    'before-hide',
    'show',
    'hide'
  ],
  inject: { $pcFluid: { default: null } },
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  virtualScroller: null,
  searchTimeout: null,
  dirty: !1,
  data: t(function () {
    return {
      id: this.$attrs.id,
      clicked: !1,
      focused: !1,
      focusedOptionIndex: -1,
      focusedMultipleOptionIndex: -1,
      overlayVisible: !1,
      searching: !1
    }
  }, 'data'),
  watch: {
    '$attrs.id': t(function (e) {
      this.id = e || R()
    }, '$attrsId'),
    suggestions: t(function () {
      this.searching &&
        (this.show(),
        (this.focusedOptionIndex =
          this.overlayVisible && this.autoOptionFocus
            ? this.findFirstFocusedOptionIndex()
            : -1),
        (this.searching = !1),
        !this.showEmptyMessage &&
          0 === this.visibleOptions.length &&
          this.hide()),
        this.autoUpdateModel()
    }, 'suggestions')
  },
  mounted: t(function () {
    ;(this.id = this.id || R()), this.autoUpdateModel()
  }, 'mounted'),
  updated: t(function () {
    this.overlayVisible && this.alignOverlay()
  }, 'updated'),
  beforeUnmount: t(function () {
    this.unbindOutsideClickListener(),
      this.unbindResizeListener(),
      this.scrollHandler &&
        (this.scrollHandler.destroy(), (this.scrollHandler = null)),
      this.overlay && (G.clear(this.overlay), (this.overlay = null))
  }, 'beforeUnmount'),
  methods: {
    getOptionIndex: t(function (e, t) {
      return this.virtualScrollerDisabled ? e : t && t(e).index
    }, 'getOptionIndex'),
    getOptionLabel: t(function (e) {
      return this.optionLabel ? U(e, this.optionLabel) : e
    }, 'getOptionLabel'),
    getOptionValue: t(function (e) {
      return e
    }, 'getOptionValue'),
    getOptionRenderKey: t(function (e, t) {
      return (
        (this.dataKey ? U(e, this.dataKey) : this.getOptionLabel(e)) + '_' + t
      )
    }, 'getOptionRenderKey'),
    getPTOptions: t(function (e, t, n, o) {
      return this.ptm(o, {
        context: {
          selected: this.isSelected(e),
          focused: this.focusedOptionIndex === this.getOptionIndex(n, t),
          disabled: this.isOptionDisabled(e)
        }
      })
    }, 'getPTOptions'),
    isOptionDisabled: t(function (e) {
      return !!this.optionDisabled && U(e, this.optionDisabled)
    }, 'isOptionDisabled'),
    isOptionGroup: t(function (e) {
      return this.optionGroupLabel && e.optionGroup && e.group
    }, 'isOptionGroup'),
    getOptionGroupLabel: t(function (e) {
      return U(e, this.optionGroupLabel)
    }, 'getOptionGroupLabel'),
    getOptionGroupChildren: t(function (e) {
      return U(e, this.optionGroupChildren)
    }, 'getOptionGroupChildren'),
    getAriaPosInset: t(function (e) {
      var t = this
      return (
        (this.optionGroupLabel
          ? e -
            this.visibleOptions.slice(0, e).filter(function (e) {
              return t.isOptionGroup(e)
            }).length
          : e) + 1
      )
    }, 'getAriaPosInset'),
    show: t(function (e) {
      this.$emit('before-show'),
        (this.dirty = !0),
        (this.overlayVisible = !0),
        (this.focusedOptionIndex =
          -1 !== this.focusedOptionIndex
            ? this.focusedOptionIndex
            : this.autoOptionFocus
              ? this.findFirstFocusedOptionIndex()
              : -1),
        e &&
          T(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el)
    }, 'show'),
    hide: t(function (e) {
      var n = this,
        o = t(function () {
          var t
          n.$emit('before-hide'),
            (n.dirty = e),
            (n.overlayVisible = !1),
            (n.clicked = !1),
            (n.focusedOptionIndex = -1),
            e &&
              T(
                n.multiple
                  ? n.$refs.focusInput
                  : null === (t = n.$refs.focusInput) || void 0 === t
                    ? void 0
                    : t.$el
              )
        }, '_hide')
      setTimeout(function () {
        o()
      }, 0)
    }, 'hide'),
    onFocus: t(function (e) {
      this.disabled ||
        (!this.dirty &&
          this.completeOnFocus &&
          this.search(e, e.target.value, 'focus'),
        (this.dirty = !0),
        (this.focused = !0),
        this.overlayVisible &&
          ((this.focusedOptionIndex =
            -1 !== this.focusedOptionIndex
              ? this.focusedOptionIndex
              : this.overlayVisible && this.autoOptionFocus
                ? this.findFirstFocusedOptionIndex()
                : -1),
          this.scrollInView(this.focusedOptionIndex)),
        this.$emit('focus', e))
    }, 'onFocus'),
    onBlur: t(function (e) {
      var t, n
      ;(this.dirty = !1),
        (this.focused = !1),
        (this.focusedOptionIndex = -1),
        this.$emit('blur', e),
        null === (t = (n = this.formField).onBlur) || void 0 === t || t.call(n)
    }, 'onBlur'),
    onKeyDown: t(function (e) {
      if (this.disabled) e.preventDefault()
      else {
        switch (e.code) {
          case 'ArrowDown':
            this.onArrowDownKey(e)
            break
          case 'ArrowUp':
            this.onArrowUpKey(e)
            break
          case 'ArrowLeft':
            this.onArrowLeftKey(e)
            break
          case 'ArrowRight':
            this.onArrowRightKey(e)
            break
          case 'Home':
            this.onHomeKey(e)
            break
          case 'End':
            this.onEndKey(e)
            break
          case 'PageDown':
            this.onPageDownKey(e)
            break
          case 'PageUp':
            this.onPageUpKey(e)
            break
          case 'Enter':
          case 'NumpadEnter':
            this.onEnterKey(e)
            break
          case 'Escape':
            this.onEscapeKey(e)
            break
          case 'Tab':
            this.onTabKey(e)
            break
          case 'Backspace':
            this.onBackspaceKey(e)
        }
        this.clicked = !1
      }
    }, 'onKeyDown'),
    onInput: t(function (e) {
      var t = this
      if (this.typeahead) {
        this.searchTimeout && clearTimeout(this.searchTimeout)
        var n = e.target.value
        this.multiple || this.updateModel(e, n),
          0 === n.length
            ? (this.hide(), this.$emit('clear'))
            : n.length >= this.minLength
              ? ((this.focusedOptionIndex = -1),
                (this.searchTimeout = setTimeout(function () {
                  t.search(e, n, 'input')
                }, this.delay)))
              : this.hide()
      }
    }, 'onInput'),
    onChange: t(function (e) {
      var t = this
      if (this.forceSelection) {
        var n = !1
        if (this.visibleOptions && !this.multiple) {
          var o = this.multiple
              ? this.$refs.focusInput.value
              : this.$refs.focusInput.$el.value,
            i = this.visibleOptions.find(function (e) {
              return t.isOptionMatched(e, o || '')
            })
          void 0 !== i &&
            ((n = !0), !this.isSelected(i) && this.onOptionSelect(e, i))
        }
        n ||
          (this.multiple
            ? (this.$refs.focusInput.value = '')
            : (this.$refs.focusInput.$el.value = ''),
          this.$emit('clear'),
          !this.multiple && this.updateModel(e, null))
      }
    }, 'onChange'),
    onMultipleContainerFocus: t(function () {
      this.disabled || (this.focused = !0)
    }, 'onMultipleContainerFocus'),
    onMultipleContainerBlur: t(function () {
      ;(this.focusedMultipleOptionIndex = -1), (this.focused = !1)
    }, 'onMultipleContainerBlur'),
    onMultipleContainerKeyDown: t(function (e) {
      if (this.disabled) e.preventDefault()
      else
        switch (e.code) {
          case 'ArrowLeft':
            this.onArrowLeftKeyOnMultiple(e)
            break
          case 'ArrowRight':
            this.onArrowRightKeyOnMultiple(e)
            break
          case 'Backspace':
            this.onBackspaceKeyOnMultiple(e)
        }
    }, 'onMultipleContainerKeyDown'),
    onContainerClick: t(function (e) {
      ;(this.clicked = !0),
        this.disabled ||
          this.searching ||
          this.loading ||
          this.isDropdownClicked(e) ||
          (this.overlay && this.overlay.contains(e.target)) ||
          T(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el)
    }, 'onContainerClick'),
    onDropdownClick: t(function (e) {
      var t = void 0
      if (this.overlayVisible) this.hide(!0)
      else {
        var n = this.multiple
          ? this.$refs.focusInput
          : this.$refs.focusInput.$el
        T(n),
          (t = n.value),
          'blank' === this.dropdownMode
            ? this.search(e, '', 'dropdown')
            : 'current' === this.dropdownMode && this.search(e, t, 'dropdown')
      }
      this.$emit('dropdown-click', { originalEvent: e, query: t })
    }, 'onDropdownClick'),
    onOptionSelect: t(function (e, t) {
      var n =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        o = this.getOptionValue(t)
      this.multiple
        ? ((this.$refs.focusInput.value = ''),
          this.isSelected(t) ||
            this.updateModel(e, [].concat(Cn(this.d_value || []), [o])))
        : this.updateModel(e, o),
        this.$emit('item-select', { originalEvent: e, value: t }),
        this.$emit('option-select', { originalEvent: e, value: t }),
        n && this.hide(!0)
    }, 'onOptionSelect'),
    onOptionMouseMove: t(function (e, t) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, t)
    }, 'onOptionMouseMove'),
    onOverlayClick: t(function (e) {
      j.emit('overlay-click', { originalEvent: e, target: this.$el })
    }, 'onOverlayClick'),
    onOverlayKeyDown: t(function (e) {
      if ('Escape' === e.code) this.onEscapeKey(e)
    }, 'onOverlayKeyDown'),
    onArrowDownKey: t(function (e) {
      if (this.overlayVisible) {
        var t =
          -1 !== this.focusedOptionIndex
            ? this.findNextOptionIndex(this.focusedOptionIndex)
            : this.clicked
              ? this.findFirstOptionIndex()
              : this.findFirstFocusedOptionIndex()
        this.changeFocusedOptionIndex(e, t), e.preventDefault()
      }
    }, 'onArrowDownKey'),
    onArrowUpKey: t(function (e) {
      if (this.overlayVisible)
        if (e.altKey)
          -1 !== this.focusedOptionIndex &&
            this.onOptionSelect(
              e,
              this.visibleOptions[this.focusedOptionIndex]
            ),
            this.overlayVisible && this.hide(),
            e.preventDefault()
        else {
          var t =
            -1 !== this.focusedOptionIndex
              ? this.findPrevOptionIndex(this.focusedOptionIndex)
              : this.clicked
                ? this.findLastOptionIndex()
                : this.findLastFocusedOptionIndex()
          this.changeFocusedOptionIndex(e, t), e.preventDefault()
        }
    }, 'onArrowUpKey'),
    onArrowLeftKey: t(function (e) {
      var t = e.currentTarget
      ;(this.focusedOptionIndex = -1),
        this.multiple &&
          (H(t.value) && this.$filled
            ? (T(this.$refs.multiContainer),
              (this.focusedMultipleOptionIndex = this.d_value.length))
            : e.stopPropagation())
    }, 'onArrowLeftKey'),
    onArrowRightKey: t(function (e) {
      ;(this.focusedOptionIndex = -1), this.multiple && e.stopPropagation()
    }, 'onArrowRightKey'),
    onHomeKey: t(function (e) {
      var t = e.currentTarget,
        n = t.value.length
      t.setSelectionRange(0, e.shiftKey ? n : 0),
        (this.focusedOptionIndex = -1),
        e.preventDefault()
    }, 'onHomeKey'),
    onEndKey: t(function (e) {
      var t = e.currentTarget,
        n = t.value.length
      t.setSelectionRange(e.shiftKey ? 0 : n, n),
        (this.focusedOptionIndex = -1),
        e.preventDefault()
    }, 'onEndKey'),
    onPageUpKey: t(function (e) {
      this.scrollInView(0), e.preventDefault()
    }, 'onPageUpKey'),
    onPageDownKey: t(function (e) {
      this.scrollInView(this.visibleOptions.length - 1), e.preventDefault()
    }, 'onPageDownKey'),
    onEnterKey: t(function (e) {
      this.typeahead
        ? this.overlayVisible
          ? (-1 !== this.focusedOptionIndex &&
              this.onOptionSelect(
                e,
                this.visibleOptions[this.focusedOptionIndex]
              ),
            this.hide())
          : ((this.focusedOptionIndex = -1), this.onArrowDownKey(e))
        : this.multiple &&
          (this.updateModel(
            e,
            [].concat(Cn(this.d_value || []), [e.target.value])
          ),
          (this.$refs.focusInput.value = '')),
        e.preventDefault()
    }, 'onEnterKey'),
    onEscapeKey: t(function (e) {
      this.overlayVisible && this.hide(!0), e.preventDefault()
    }, 'onEscapeKey'),
    onTabKey: t(function (e) {
      ;-1 !== this.focusedOptionIndex &&
        this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]),
        this.overlayVisible && this.hide()
    }, 'onTabKey'),
    onBackspaceKey: t(function (e) {
      if (this.multiple) {
        if (K(this.d_value) && !this.$refs.focusInput.value) {
          var t = this.d_value[this.d_value.length - 1],
            n = this.d_value.slice(0, -1)
          this.writeValue(n, e),
            this.$emit('item-unselect', { originalEvent: e, value: t }),
            this.$emit('option-unselect', { originalEvent: e, value: t })
        }
        e.stopPropagation()
      }
    }, 'onBackspaceKey'),
    onArrowLeftKeyOnMultiple: t(function () {
      this.focusedMultipleOptionIndex =
        this.focusedMultipleOptionIndex < 1
          ? 0
          : this.focusedMultipleOptionIndex - 1
    }, 'onArrowLeftKeyOnMultiple'),
    onArrowRightKeyOnMultiple: t(function () {
      this.focusedMultipleOptionIndex++,
        this.focusedMultipleOptionIndex > this.d_value.length - 1 &&
          ((this.focusedMultipleOptionIndex = -1), T(this.$refs.focusInput))
    }, 'onArrowRightKeyOnMultiple'),
    onBackspaceKeyOnMultiple: t(function (e) {
      ;-1 !== this.focusedMultipleOptionIndex &&
        this.removeOption(e, this.focusedMultipleOptionIndex)
    }, 'onBackspaceKeyOnMultiple'),
    onOverlayEnter: t(function (e) {
      G.set('overlay', e, this.$primevue.config.zIndex.overlay),
        W(e, { position: 'absolute', top: '0', left: '0' }),
        this.alignOverlay()
    }, 'onOverlayEnter'),
    onOverlayAfterEnter: t(function () {
      this.bindOutsideClickListener(),
        this.bindScrollListener(),
        this.bindResizeListener(),
        this.$emit('show')
    }, 'onOverlayAfterEnter'),
    onOverlayLeave: t(function () {
      this.unbindOutsideClickListener(),
        this.unbindScrollListener(),
        this.unbindResizeListener(),
        this.$emit('hide'),
        (this.overlay = null)
    }, 'onOverlayLeave'),
    onOverlayAfterLeave: t(function (e) {
      G.clear(e)
    }, 'onOverlayAfterLeave'),
    alignOverlay: t(function () {
      var e = this.multiple
        ? this.$refs.multiContainer
        : this.$refs.focusInput.$el
      'self' === this.appendTo
        ? q(this.overlay, e)
        : ((this.overlay.style.minWidth = S(e) + 'px'), Z(this.overlay, e))
    }, 'alignOverlay'),
    bindOutsideClickListener: t(function () {
      var e = this
      this.outsideClickListener ||
        ((this.outsideClickListener = function (t) {
          e.overlayVisible && e.overlay && e.isOutsideClicked(t) && e.hide()
        }),
        document.addEventListener('click', this.outsideClickListener))
    }, 'bindOutsideClickListener'),
    unbindOutsideClickListener: t(function () {
      this.outsideClickListener &&
        (document.removeEventListener('click', this.outsideClickListener),
        (this.outsideClickListener = null))
    }, 'unbindOutsideClickListener'),
    bindScrollListener: t(function () {
      var e = this
      this.scrollHandler ||
        (this.scrollHandler = new Q(this.$refs.container, function () {
          e.overlayVisible && e.hide()
        })),
        this.scrollHandler.bindScrollListener()
    }, 'bindScrollListener'),
    unbindScrollListener: t(function () {
      this.scrollHandler && this.scrollHandler.unbindScrollListener()
    }, 'unbindScrollListener'),
    bindResizeListener: t(function () {
      var e = this
      this.resizeListener ||
        ((this.resizeListener = function () {
          e.overlayVisible && !X() && e.hide()
        }),
        window.addEventListener('resize', this.resizeListener))
    }, 'bindResizeListener'),
    unbindResizeListener: t(function () {
      this.resizeListener &&
        (window.removeEventListener('resize', this.resizeListener),
        (this.resizeListener = null))
    }, 'unbindResizeListener'),
    isOutsideClicked: t(function (e) {
      return (
        !this.overlay.contains(e.target) &&
        !this.isInputClicked(e) &&
        !this.isDropdownClicked(e)
      )
    }, 'isOutsideClicked'),
    isInputClicked: t(function (e) {
      return this.multiple
        ? e.target === this.$refs.multiContainer ||
            this.$refs.multiContainer.contains(e.target)
        : e.target === this.$refs.focusInput.$el
    }, 'isInputClicked'),
    isDropdownClicked: t(function (e) {
      return (
        !!this.$refs.dropdownButton &&
        (e.target === this.$refs.dropdownButton ||
          this.$refs.dropdownButton.contains(e.target))
      )
    }, 'isDropdownClicked'),
    isOptionMatched: t(function (e, t) {
      var n
      return (
        this.isValidOption(e) &&
        (null === (n = this.getOptionLabel(e)) || void 0 === n
          ? void 0
          : n.toLocaleLowerCase(this.searchLocale)) ===
          t.toLocaleLowerCase(this.searchLocale)
      )
    }, 'isOptionMatched'),
    isValidOption: t(function (e) {
      return K(e) && !(this.isOptionDisabled(e) || this.isOptionGroup(e))
    }, 'isValidOption'),
    isValidSelectedOption: t(function (e) {
      return this.isValidOption(e) && this.isSelected(e)
    }, 'isValidSelectedOption'),
    isEquals: t(function (e, t) {
      return M(e, t, this.equalityKey)
    }, 'isEquals'),
    isSelected: t(function (e) {
      var t = this,
        n = this.getOptionValue(e)
      return this.multiple
        ? (this.d_value || []).some(function (e) {
            return t.isEquals(e, n)
          })
        : this.isEquals(this.d_value, this.getOptionValue(e))
    }, 'isSelected'),
    findFirstOptionIndex: t(function () {
      var e = this
      return this.visibleOptions.findIndex(function (t) {
        return e.isValidOption(t)
      })
    }, 'findFirstOptionIndex'),
    findLastOptionIndex: t(function () {
      var e = this
      return Y(this.visibleOptions, function (t) {
        return e.isValidOption(t)
      })
    }, 'findLastOptionIndex'),
    findNextOptionIndex: t(function (e) {
      var t = this,
        n =
          e < this.visibleOptions.length - 1
            ? this.visibleOptions.slice(e + 1).findIndex(function (e) {
                return t.isValidOption(e)
              })
            : -1
      return n > -1 ? n + e + 1 : e
    }, 'findNextOptionIndex'),
    findPrevOptionIndex: t(function (e) {
      var t = this,
        n =
          e > 0
            ? Y(this.visibleOptions.slice(0, e), function (e) {
                return t.isValidOption(e)
              })
            : -1
      return n > -1 ? n : e
    }, 'findPrevOptionIndex'),
    findSelectedOptionIndex: t(function () {
      var e = this
      return this.$filled
        ? this.visibleOptions.findIndex(function (t) {
            return e.isValidSelectedOption(t)
          })
        : -1
    }, 'findSelectedOptionIndex'),
    findFirstFocusedOptionIndex: t(function () {
      var e = this.findSelectedOptionIndex()
      return e < 0 ? this.findFirstOptionIndex() : e
    }, 'findFirstFocusedOptionIndex'),
    findLastFocusedOptionIndex: t(function () {
      var e = this.findSelectedOptionIndex()
      return e < 0 ? this.findLastOptionIndex() : e
    }, 'findLastFocusedOptionIndex'),
    search: t(function (e, t, n) {
      null != t &&
        (('input' === n && 0 === t.trim().length) ||
          ((this.searching = !0),
          this.$emit('complete', { originalEvent: e, query: t })))
    }, 'search'),
    removeOption: t(function (e, t) {
      var n = this,
        o = this.d_value[t],
        i = this.d_value
          .filter(function (e, n) {
            return n !== t
          })
          .map(function (e) {
            return n.getOptionValue(e)
          })
      this.updateModel(e, i),
        this.$emit('item-unselect', { originalEvent: e, value: o }),
        this.$emit('option-unselect', { originalEvent: e, value: o }),
        (this.dirty = !0),
        T(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el)
    }, 'removeOption'),
    changeFocusedOptionIndex: t(function (e, t) {
      this.focusedOptionIndex !== t &&
        ((this.focusedOptionIndex = t),
        this.scrollInView(),
        this.selectOnFocus &&
          this.onOptionSelect(e, this.visibleOptions[t], !1))
    }, 'changeFocusedOptionIndex'),
    scrollInView: t(function () {
      var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1
      this.$nextTick(function () {
        var n = -1 !== t ? ''.concat(e.id, '_').concat(t) : e.focusedOptionId,
          o = w(e.list, 'li[id="'.concat(n, '"]'))
        o
          ? o.scrollIntoView &&
            o.scrollIntoView({ block: 'nearest', inline: 'start' })
          : e.virtualScrollerDisabled ||
            (e.virtualScroller &&
              e.virtualScroller.scrollToIndex(
                -1 !== t ? t : e.focusedOptionIndex
              ))
      })
    }, 'scrollInView'),
    autoUpdateModel: t(function () {
      this.selectOnFocus &&
        this.autoOptionFocus &&
        !this.$filled &&
        ((this.focusedOptionIndex = this.findFirstFocusedOptionIndex()),
        this.onOptionSelect(
          null,
          this.visibleOptions[this.focusedOptionIndex],
          !1
        ))
    }, 'autoUpdateModel'),
    updateModel: t(function (e, t) {
      this.writeValue(t, e),
        this.$emit('change', { originalEvent: e, value: t })
    }, 'updateModel'),
    flatOptions: t(function (e) {
      var t = this
      return (e || []).reduce(function (e, n, o) {
        e.push({ optionGroup: n, group: !0, index: o })
        var i = t.getOptionGroupChildren(n)
        return (
          i &&
            i.forEach(function (t) {
              return e.push(t)
            }),
          e
        )
      }, [])
    }, 'flatOptions'),
    overlayRef: t(function (e) {
      this.overlay = e
    }, 'overlayRef'),
    listRef: t(function (e, t) {
      ;(this.list = e), t && t(e)
    }, 'listRef'),
    virtualScrollerRef: t(function (e) {
      this.virtualScroller = e
    }, 'virtualScrollerRef')
  },
  computed: {
    visibleOptions: t(function () {
      return this.optionGroupLabel
        ? this.flatOptions(this.suggestions)
        : this.suggestions || []
    }, 'visibleOptions'),
    inputValue: t(function () {
      if (this.$filled) {
        if ('object' === xn(this.d_value)) {
          var e = this.getOptionLabel(this.d_value)
          return null != e ? e : this.d_value
        }
        return this.d_value
      }
      return ''
    }, 'inputValue'),
    hasSelectedOption: t(function () {
      return this.$filled
    }, 'hasSelectedOption'),
    equalityKey: t(function () {
      return this.dataKey
    }, 'equalityKey'),
    searchResultMessageText: t(function () {
      return K(this.visibleOptions) && this.overlayVisible
        ? this.searchMessageText.replaceAll('{0}', this.visibleOptions.length)
        : this.emptySearchMessageText
    }, 'searchResultMessageText'),
    searchMessageText: t(function () {
      return (
        this.searchMessage || this.$primevue.config.locale.searchMessage || ''
      )
    }, 'searchMessageText'),
    emptySearchMessageText: t(function () {
      return (
        this.emptySearchMessage ||
        this.$primevue.config.locale.emptySearchMessage ||
        ''
      )
    }, 'emptySearchMessageText'),
    selectionMessageText: t(function () {
      return (
        this.selectionMessage ||
        this.$primevue.config.locale.selectionMessage ||
        ''
      )
    }, 'selectionMessageText'),
    emptySelectionMessageText: t(function () {
      return (
        this.emptySelectionMessage ||
        this.$primevue.config.locale.emptySelectionMessage ||
        ''
      )
    }, 'emptySelectionMessageText'),
    selectedMessageText: t(function () {
      return this.$filled
        ? this.selectionMessageText.replaceAll(
            '{0}',
            this.multiple ? this.d_value.length : '1'
          )
        : this.emptySelectionMessageText
    }, 'selectedMessageText'),
    listAriaLabel: t(function () {
      return this.$primevue.config.locale.aria
        ? this.$primevue.config.locale.aria.listLabel
        : void 0
    }, 'listAriaLabel'),
    focusedOptionId: t(function () {
      return -1 !== this.focusedOptionIndex
        ? ''.concat(this.id, '_').concat(this.focusedOptionIndex)
        : null
    }, 'focusedOptionId'),
    focusedMultipleOptionId: t(function () {
      return -1 !== this.focusedMultipleOptionIndex
        ? ''
            .concat(this.id, '_multiple_option_')
            .concat(this.focusedMultipleOptionIndex)
        : null
    }, 'focusedMultipleOptionId'),
    ariaSetSize: t(function () {
      var e = this
      return this.visibleOptions.filter(function (t) {
        return !e.isOptionGroup(t)
      }).length
    }, 'ariaSetSize'),
    virtualScrollerDisabled: t(function () {
      return !this.virtualScrollerOptions
    }, 'virtualScrollerDisabled'),
    panelId: t(function () {
      return this.id + '_panel'
    }, 'panelId')
  },
  components: {
    InputText: J,
    VirtualScroller: ee,
    Portal: te,
    ChevronDownIcon: ne,
    SpinnerIcon: oe,
    Chip: ie
  },
  directives: { ripple: L }
}
function Tn(e) {
  return (Tn =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        })(e)
}
function Mn(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    t &&
      (o = o.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      n.push.apply(n, o)
  }
  return n
}
function Nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? Mn(Object(n), !0).forEach(function (t) {
          $n(e, t, n[t])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Mn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
  }
  return e
}
function $n(e, t, n) {
  return (
    (t = An(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  )
}
function An(e) {
  var t = Dn(e, 'string')
  return 'symbol' == Tn(t) ? t : t + ''
}
function Dn(e, t) {
  if ('object' != Tn(e) || !e) return e
  var n = e[Symbol.toPrimitive]
  if (void 0 !== n) {
    var o = n.call(e, t || 'default')
    if ('object' != Tn(o)) return o
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return ('string' === t ? String : Number)(e)
}
t(Tn, '_typeof$4'),
  t(Mn, 'ownKeys$3'),
  t(Nn, '_objectSpread$3'),
  t($n, '_defineProperty$4'),
  t(An, '_toPropertyKey$4'),
  t(Dn, '_toPrimitive$4')
var _n = ['aria-activedescendant'],
  zn = ['id', 'aria-label', 'aria-setsize', 'aria-posinset'],
  Kn = [
    'id',
    'placeholder',
    'tabindex',
    'disabled',
    'aria-label',
    'aria-labelledby',
    'aria-expanded',
    'aria-controls',
    'aria-activedescendant',
    'aria-invalid'
  ],
  Fn = ['disabled', 'aria-expanded', 'aria-controls'],
  Rn = ['id'],
  Gn = ['id', 'aria-label'],
  Un = ['id'],
  jn = [
    'id',
    'aria-label',
    'aria-selected',
    'aria-disabled',
    'aria-setsize',
    'aria-posinset',
    'onClick',
    'onMousemove',
    'data-p-selected',
    'data-p-focus',
    'data-p-disabled'
  ]
function Hn(e, n, o, i, a, r) {
  var s = Vue.resolveComponent('InputText'),
    l = Vue.resolveComponent('Chip'),
    u = Vue.resolveComponent('SpinnerIcon'),
    c = Vue.resolveComponent('VirtualScroller'),
    d = Vue.resolveComponent('Portal'),
    p = Vue.resolveDirective('ripple')
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps(
        {
          ref: 'container',
          class: e.cx('root'),
          style: e.sx('root'),
          onClick:
            n[11] ||
            (n[11] = function () {
              return (
                r.onContainerClick && r.onContainerClick.apply(r, arguments)
              )
            })
        },
        e.ptmi('root')
      ),
      [
        e.multiple
          ? Vue.createCommentVNode('', !0)
          : (Vue.openBlock(),
            Vue.createBlock(
              s,
              {
                key: 0,
                ref: 'focusInput',
                id: e.inputId,
                type: 'text',
                name: e.$formName,
                class: Vue.normalizeClass([e.cx('pcInputText'), e.inputClass]),
                style: Vue.normalizeStyle(e.inputStyle),
                value: r.inputValue,
                placeholder: e.placeholder,
                tabindex: e.disabled ? -1 : e.tabindex,
                fluid: e.$fluid,
                disabled: e.disabled,
                size: e.size,
                invalid: e.invalid,
                variant: e.variant,
                autocomplete: 'off',
                role: 'combobox',
                'aria-label': e.ariaLabel,
                'aria-labelledby': e.ariaLabelledby,
                'aria-haspopup': 'listbox',
                'aria-autocomplete': 'list',
                'aria-expanded': a.overlayVisible,
                'aria-controls': r.panelId,
                'aria-activedescendant': a.focused ? r.focusedOptionId : void 0,
                onFocus: r.onFocus,
                onBlur: r.onBlur,
                onKeydown: r.onKeyDown,
                onInput: r.onInput,
                onChange: r.onChange,
                unstyled: e.unstyled,
                pt: e.ptm('pcInputText')
              },
              null,
              8,
              [
                'id',
                'name',
                'class',
                'style',
                'value',
                'placeholder',
                'tabindex',
                'fluid',
                'disabled',
                'size',
                'invalid',
                'variant',
                'aria-label',
                'aria-labelledby',
                'aria-expanded',
                'aria-controls',
                'aria-activedescendant',
                'onFocus',
                'onBlur',
                'onKeydown',
                'onInput',
                'onChange',
                'unstyled',
                'pt'
              ]
            )),
        e.multiple
          ? (Vue.openBlock(),
            Vue.createElementBlock(
              'ul',
              Vue.mergeProps(
                {
                  key: 1,
                  ref: 'multiContainer',
                  class: e.cx('inputMultiple'),
                  tabindex: '-1',
                  role: 'listbox',
                  'aria-orientation': 'horizontal',
                  'aria-activedescendant': a.focused
                    ? r.focusedMultipleOptionId
                    : void 0,
                  onFocus:
                    n[5] ||
                    (n[5] = function () {
                      return (
                        r.onMultipleContainerFocus &&
                        r.onMultipleContainerFocus.apply(r, arguments)
                      )
                    }),
                  onBlur:
                    n[6] ||
                    (n[6] = function () {
                      return (
                        r.onMultipleContainerBlur &&
                        r.onMultipleContainerBlur.apply(r, arguments)
                      )
                    }),
                  onKeydown:
                    n[7] ||
                    (n[7] = function () {
                      return (
                        r.onMultipleContainerKeyDown &&
                        r.onMultipleContainerKeyDown.apply(r, arguments)
                      )
                    })
                },
                e.ptm('inputMultiple')
              ),
              [
                (Vue.openBlock(!0),
                Vue.createElementBlock(
                  Vue.Fragment,
                  null,
                  Vue.renderList(e.d_value, function (n, o) {
                    return (
                      Vue.openBlock(),
                      Vue.createElementBlock(
                        'li',
                        Vue.mergeProps(
                          {
                            key: ''.concat(o, '_').concat(r.getOptionLabel(n)),
                            id: a.id + '_multiple_option_' + o,
                            class: e.cx('chipItem', { i: o }),
                            role: 'option',
                            'aria-label': r.getOptionLabel(n),
                            'aria-selected': !0,
                            'aria-setsize': e.d_value.length,
                            'aria-posinset': o + 1,
                            ref_for: !0
                          },
                          e.ptm('chipItem')
                        ),
                        [
                          Vue.renderSlot(
                            e.$slots,
                            'chip',
                            Vue.mergeProps(
                              {
                                class: e.cx('pcChip'),
                                value: n,
                                index: o,
                                removeCallback: t(function (e) {
                                  return r.removeOption(e, o)
                                }, 'removeCallback'),
                                ref_for: !0
                              },
                              e.ptm('pcChip')
                            ),
                            function () {
                              return [
                                Vue.createVNode(
                                  l,
                                  {
                                    class: Vue.normalizeClass(e.cx('pcChip')),
                                    label: r.getOptionLabel(n),
                                    removeIcon: e.chipIcon || e.removeTokenIcon,
                                    removable: '',
                                    unstyled: e.unstyled,
                                    onRemove: t(function (e) {
                                      return r.removeOption(e, o)
                                    }, 'onRemove'),
                                    pt: e.ptm('pcChip')
                                  },
                                  {
                                    removeicon: Vue.withCtx(function () {
                                      return [
                                        Vue.renderSlot(
                                          e.$slots,
                                          e.$slots.chipicon
                                            ? 'chipicon'
                                            : 'removetokenicon',
                                          {
                                            class: Vue.normalizeClass(
                                              e.cx('chipIcon')
                                            ),
                                            index: o,
                                            removeCallback: t(function (e) {
                                              return r.removeOption(e, o)
                                            }, 'removeCallback')
                                          }
                                        )
                                      ]
                                    }),
                                    _: 2
                                  },
                                  1032,
                                  [
                                    'class',
                                    'label',
                                    'removeIcon',
                                    'unstyled',
                                    'onRemove',
                                    'pt'
                                  ]
                                )
                              ]
                            }
                          )
                        ],
                        16,
                        zn
                      )
                    )
                  }),
                  128
                )),
                Vue.createElementVNode(
                  'li',
                  Vue.mergeProps(
                    { class: e.cx('inputChip'), role: 'option' },
                    e.ptm('inputChip')
                  ),
                  [
                    Vue.createElementVNode(
                      'input',
                      Vue.mergeProps(
                        {
                          ref: 'focusInput',
                          id: e.inputId,
                          type: 'text',
                          style: e.inputStyle,
                          class: e.inputClass,
                          placeholder: e.placeholder,
                          tabindex: e.disabled ? -1 : e.tabindex,
                          disabled: e.disabled,
                          autocomplete: 'off',
                          role: 'combobox',
                          'aria-label': e.ariaLabel,
                          'aria-labelledby': e.ariaLabelledby,
                          'aria-haspopup': 'listbox',
                          'aria-autocomplete': 'list',
                          'aria-expanded': a.overlayVisible,
                          'aria-controls': a.id + '_list',
                          'aria-activedescendant': a.focused
                            ? r.focusedOptionId
                            : void 0,
                          'aria-invalid': e.invalid || void 0,
                          onFocus:
                            n[0] ||
                            (n[0] = function () {
                              return r.onFocus && r.onFocus.apply(r, arguments)
                            }),
                          onBlur:
                            n[1] ||
                            (n[1] = function () {
                              return r.onBlur && r.onBlur.apply(r, arguments)
                            }),
                          onKeydown:
                            n[2] ||
                            (n[2] = function () {
                              return (
                                r.onKeyDown && r.onKeyDown.apply(r, arguments)
                              )
                            }),
                          onInput:
                            n[3] ||
                            (n[3] = function () {
                              return r.onInput && r.onInput.apply(r, arguments)
                            }),
                          onChange:
                            n[4] ||
                            (n[4] = function () {
                              return (
                                r.onChange && r.onChange.apply(r, arguments)
                              )
                            })
                        },
                        e.ptm('input')
                      ),
                      null,
                      16,
                      Kn
                    )
                  ],
                  16
                )
              ],
              16,
              _n
            ))
          : Vue.createCommentVNode('', !0),
        a.searching || e.loading
          ? Vue.renderSlot(
              e.$slots,
              e.$slots.loader ? 'loader' : 'loadingicon',
              { key: 2, class: Vue.normalizeClass(e.cx('loader')) },
              function () {
                return [
                  e.loader || e.loadingIcon
                    ? (Vue.openBlock(),
                      Vue.createElementBlock(
                        'i',
                        Vue.mergeProps(
                          {
                            key: 0,
                            class: [
                              'pi-spin',
                              e.cx('loader'),
                              e.loader,
                              e.loadingIcon
                            ],
                            'aria-hidden': 'true'
                          },
                          e.ptm('loader')
                        ),
                        null,
                        16
                      ))
                    : (Vue.openBlock(),
                      Vue.createBlock(
                        u,
                        Vue.mergeProps(
                          {
                            key: 1,
                            class: e.cx('loader'),
                            spin: '',
                            'aria-hidden': 'true'
                          },
                          e.ptm('loader')
                        ),
                        null,
                        16,
                        ['class']
                      ))
                ]
              }
            )
          : Vue.createCommentVNode('', !0),
        Vue.renderSlot(
          e.$slots,
          e.$slots.dropdown ? 'dropdown' : 'dropdownbutton',
          {
            toggleCallback: t(function (e) {
              return r.onDropdownClick(e)
            }, 'toggleCallback')
          },
          function () {
            return [
              e.dropdown
                ? (Vue.openBlock(),
                  Vue.createElementBlock(
                    'button',
                    Vue.mergeProps(
                      {
                        key: 0,
                        ref: 'dropdownButton',
                        type: 'button',
                        class: [e.cx('dropdown'), e.dropdownClass],
                        disabled: e.disabled,
                        'aria-haspopup': 'listbox',
                        'aria-expanded': a.overlayVisible,
                        'aria-controls': r.panelId,
                        onClick:
                          n[8] ||
                          (n[8] = function () {
                            return (
                              r.onDropdownClick &&
                              r.onDropdownClick.apply(r, arguments)
                            )
                          })
                      },
                      e.ptm('dropdown')
                    ),
                    [
                      Vue.renderSlot(
                        e.$slots,
                        'dropdownicon',
                        { class: Vue.normalizeClass(e.dropdownIcon) },
                        function () {
                          return [
                            (Vue.openBlock(),
                            Vue.createBlock(
                              Vue.resolveDynamicComponent(
                                e.dropdownIcon ? 'span' : 'ChevronDownIcon'
                              ),
                              Vue.mergeProps(
                                { class: e.dropdownIcon },
                                e.ptm('dropdownIcon')
                              ),
                              null,
                              16,
                              ['class']
                            ))
                          ]
                        }
                      )
                    ],
                    16,
                    Fn
                  ))
                : Vue.createCommentVNode('', !0)
            ]
          }
        ),
        Vue.createElementVNode(
          'span',
          Vue.mergeProps(
            {
              role: 'status',
              'aria-live': 'polite',
              class: 'p-hidden-accessible'
            },
            e.ptm('hiddenSearchResult'),
            { 'data-p-hidden-accessible': !0 }
          ),
          Vue.toDisplayString(r.searchResultMessageText),
          17
        ),
        Vue.createVNode(
          d,
          { appendTo: e.appendTo },
          {
            default: Vue.withCtx(function () {
              return [
                Vue.createVNode(
                  Vue.Transition,
                  Vue.mergeProps(
                    {
                      name: 'p-connected-overlay',
                      onEnter: r.onOverlayEnter,
                      onAfterEnter: r.onOverlayAfterEnter,
                      onLeave: r.onOverlayLeave,
                      onAfterLeave: r.onOverlayAfterLeave
                    },
                    e.ptm('transition')
                  ),
                  {
                    default: Vue.withCtx(function () {
                      return [
                        a.overlayVisible
                          ? (Vue.openBlock(),
                            Vue.createElementBlock(
                              'div',
                              Vue.mergeProps(
                                {
                                  key: 0,
                                  ref: r.overlayRef,
                                  id: r.panelId,
                                  class: [
                                    e.cx('overlay'),
                                    e.panelClass,
                                    e.overlayClass
                                  ],
                                  style: Nn(
                                    Nn({}, e.panelStyle),
                                    e.overlayStyle
                                  ),
                                  onClick:
                                    n[9] ||
                                    (n[9] = function () {
                                      return (
                                        r.onOverlayClick &&
                                        r.onOverlayClick.apply(r, arguments)
                                      )
                                    }),
                                  onKeydown:
                                    n[10] ||
                                    (n[10] = function () {
                                      return (
                                        r.onOverlayKeyDown &&
                                        r.onOverlayKeyDown.apply(r, arguments)
                                      )
                                    })
                                },
                                e.ptm('overlay')
                              ),
                              [
                                Vue.renderSlot(e.$slots, 'header', {
                                  value: e.d_value,
                                  suggestions: r.visibleOptions
                                }),
                                Vue.createElementVNode(
                                  'div',
                                  Vue.mergeProps(
                                    {
                                      class: e.cx('listContainer'),
                                      style: {
                                        'max-height': r.virtualScrollerDisabled
                                          ? e.scrollHeight
                                          : ''
                                      }
                                    },
                                    e.ptm('listContainer')
                                  ),
                                  [
                                    Vue.createVNode(
                                      c,
                                      Vue.mergeProps(
                                        { ref: r.virtualScrollerRef },
                                        e.virtualScrollerOptions,
                                        {
                                          style: { height: e.scrollHeight },
                                          items: r.visibleOptions,
                                          tabindex: -1,
                                          disabled: r.virtualScrollerDisabled,
                                          pt: e.ptm('virtualScroller')
                                        }
                                      ),
                                      Vue.createSlots(
                                        {
                                          content: Vue.withCtx(function (n) {
                                            var o = n.styleClass,
                                              i = n.contentRef,
                                              s = n.items,
                                              l = n.getItemOptions,
                                              u = n.contentStyle,
                                              c = n.itemSize
                                            return [
                                              Vue.createElementVNode(
                                                'ul',
                                                Vue.mergeProps(
                                                  {
                                                    ref: t(function (e) {
                                                      return r.listRef(e, i)
                                                    }, 'ref'),
                                                    id: a.id + '_list',
                                                    class: [e.cx('list'), o],
                                                    style: u,
                                                    role: 'listbox',
                                                    'aria-label':
                                                      r.listAriaLabel
                                                  },
                                                  e.ptm('list')
                                                ),
                                                [
                                                  (Vue.openBlock(!0),
                                                  Vue.createElementBlock(
                                                    Vue.Fragment,
                                                    null,
                                                    Vue.renderList(
                                                      s,
                                                      function (n, o) {
                                                        return (
                                                          Vue.openBlock(),
                                                          Vue.createElementBlock(
                                                            Vue.Fragment,
                                                            {
                                                              key: r.getOptionRenderKey(
                                                                n,
                                                                r.getOptionIndex(
                                                                  o,
                                                                  l
                                                                )
                                                              )
                                                            },
                                                            [
                                                              r.isOptionGroup(n)
                                                                ? (Vue.openBlock(),
                                                                  Vue.createElementBlock(
                                                                    'li',
                                                                    Vue.mergeProps(
                                                                      {
                                                                        key: 0,
                                                                        id:
                                                                          a.id +
                                                                          '_' +
                                                                          r.getOptionIndex(
                                                                            o,
                                                                            l
                                                                          ),
                                                                        style: {
                                                                          height:
                                                                            c
                                                                              ? c +
                                                                                'px'
                                                                              : void 0
                                                                        },
                                                                        class:
                                                                          e.cx(
                                                                            'optionGroup'
                                                                          ),
                                                                        role: 'option',
                                                                        ref_for:
                                                                          !0
                                                                      },
                                                                      e.ptm(
                                                                        'optionGroup'
                                                                      )
                                                                    ),
                                                                    [
                                                                      Vue.renderSlot(
                                                                        e.$slots,
                                                                        'optiongroup',
                                                                        {
                                                                          option:
                                                                            n.optionGroup,
                                                                          index:
                                                                            r.getOptionIndex(
                                                                              o,
                                                                              l
                                                                            )
                                                                        },
                                                                        function () {
                                                                          return [
                                                                            Vue.createTextVNode(
                                                                              Vue.toDisplayString(
                                                                                r.getOptionGroupLabel(
                                                                                  n.optionGroup
                                                                                )
                                                                              ),
                                                                              1
                                                                            )
                                                                          ]
                                                                        }
                                                                      )
                                                                    ],
                                                                    16,
                                                                    Un
                                                                  ))
                                                                : Vue.withDirectives(
                                                                    (Vue.openBlock(),
                                                                    Vue.createElementBlock(
                                                                      'li',
                                                                      Vue.mergeProps(
                                                                        {
                                                                          key: 1,
                                                                          id:
                                                                            a.id +
                                                                            '_' +
                                                                            r.getOptionIndex(
                                                                              o,
                                                                              l
                                                                            ),
                                                                          style:
                                                                            {
                                                                              height:
                                                                                c
                                                                                  ? c +
                                                                                    'px'
                                                                                  : void 0
                                                                            },
                                                                          class:
                                                                            e.cx(
                                                                              'option',
                                                                              {
                                                                                option:
                                                                                  n,
                                                                                i: o,
                                                                                getItemOptions:
                                                                                  l
                                                                              }
                                                                            ),
                                                                          role: 'option',
                                                                          'aria-label':
                                                                            r.getOptionLabel(
                                                                              n
                                                                            ),
                                                                          'aria-selected':
                                                                            r.isSelected(
                                                                              n
                                                                            ),
                                                                          'aria-disabled':
                                                                            r.isOptionDisabled(
                                                                              n
                                                                            ),
                                                                          'aria-setsize':
                                                                            r.ariaSetSize,
                                                                          'aria-posinset':
                                                                            r.getAriaPosInset(
                                                                              r.getOptionIndex(
                                                                                o,
                                                                                l
                                                                              )
                                                                            ),
                                                                          onClick:
                                                                            t(
                                                                              function (
                                                                                e
                                                                              ) {
                                                                                return r.onOptionSelect(
                                                                                  e,
                                                                                  n
                                                                                )
                                                                              },
                                                                              'onClick'
                                                                            ),
                                                                          onMousemove:
                                                                            t(
                                                                              function (
                                                                                e
                                                                              ) {
                                                                                return r.onOptionMouseMove(
                                                                                  e,
                                                                                  r.getOptionIndex(
                                                                                    o,
                                                                                    l
                                                                                  )
                                                                                )
                                                                              },
                                                                              'onMousemove'
                                                                            ),
                                                                          'data-p-selected':
                                                                            r.isSelected(
                                                                              n
                                                                            ),
                                                                          'data-p-focus':
                                                                            a.focusedOptionIndex ===
                                                                            r.getOptionIndex(
                                                                              o,
                                                                              l
                                                                            ),
                                                                          'data-p-disabled':
                                                                            r.isOptionDisabled(
                                                                              n
                                                                            ),
                                                                          ref_for:
                                                                            !0
                                                                        },
                                                                        r.getPTOptions(
                                                                          n,
                                                                          l,
                                                                          o,
                                                                          'option'
                                                                        )
                                                                      ),
                                                                      [
                                                                        Vue.renderSlot(
                                                                          e.$slots,
                                                                          'option',
                                                                          {
                                                                            option:
                                                                              n,
                                                                            index:
                                                                              r.getOptionIndex(
                                                                                o,
                                                                                l
                                                                              )
                                                                          },
                                                                          function () {
                                                                            return [
                                                                              Vue.createTextVNode(
                                                                                Vue.toDisplayString(
                                                                                  r.getOptionLabel(
                                                                                    n
                                                                                  )
                                                                                ),
                                                                                1
                                                                              )
                                                                            ]
                                                                          }
                                                                        )
                                                                      ],
                                                                      16,
                                                                      jn
                                                                    )),
                                                                    [[p]]
                                                                  )
                                                            ],
                                                            64
                                                          )
                                                        )
                                                      }
                                                    ),
                                                    128
                                                  )),
                                                  e.showEmptyMessage &&
                                                  (!s || (s && 0 === s.length))
                                                    ? (Vue.openBlock(),
                                                      Vue.createElementBlock(
                                                        'li',
                                                        Vue.mergeProps(
                                                          {
                                                            key: 0,
                                                            class:
                                                              e.cx(
                                                                'emptyMessage'
                                                              ),
                                                            role: 'option'
                                                          },
                                                          e.ptm('emptyMessage')
                                                        ),
                                                        [
                                                          Vue.renderSlot(
                                                            e.$slots,
                                                            'empty',
                                                            {},
                                                            function () {
                                                              return [
                                                                Vue.createTextVNode(
                                                                  Vue.toDisplayString(
                                                                    r.searchResultMessageText
                                                                  ),
                                                                  1
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ],
                                                        16
                                                      ))
                                                    : Vue.createCommentVNode(
                                                        '',
                                                        !0
                                                      )
                                                ],
                                                16,
                                                Gn
                                              )
                                            ]
                                          }),
                                          _: 2
                                        },
                                        [
                                          e.$slots.loader
                                            ? {
                                                name: 'loader',
                                                fn: Vue.withCtx(function (t) {
                                                  var n = t.options
                                                  return [
                                                    Vue.renderSlot(
                                                      e.$slots,
                                                      'loader',
                                                      { options: n }
                                                    )
                                                  ]
                                                }),
                                                key: '0'
                                              }
                                            : void 0
                                        ]
                                      ),
                                      1040,
                                      ['style', 'items', 'disabled', 'pt']
                                    )
                                  ],
                                  16
                                ),
                                Vue.renderSlot(e.$slots, 'footer', {
                                  value: e.d_value,
                                  suggestions: r.visibleOptions
                                }),
                                Vue.createElementVNode(
                                  'span',
                                  Vue.mergeProps(
                                    {
                                      role: 'status',
                                      'aria-live': 'polite',
                                      class: 'p-hidden-accessible'
                                    },
                                    e.ptm('hiddenSelectedMessage'),
                                    { 'data-p-hidden-accessible': !0 }
                                  ),
                                  Vue.toDisplayString(r.selectedMessageText),
                                  17
                                )
                              ],
                              16,
                              Rn
                            ))
                          : Vue.createCommentVNode('', !0)
                      ]
                    }),
                    _: 3
                  },
                  16,
                  ['onEnter', 'onAfterEnter', 'onLeave', 'onAfterLeave']
                )
              ]
            }),
            _: 3
          },
          8,
          ['appendTo']
        )
      ],
      16
    )
  )
}
t(Hn, 'render$9'), (On.render = Hn)
const Wn = {
    name: 'AutoCompletePlus',
    extends: On,
    emits: ['focused-option-changed'],
    mounted() {
      'function' == typeof On.mounted && On.mounted.call(this),
        this.$watch(
          () => this.focusedOptionIndex,
          (e, t) => {
            this.$emit('focused-option-changed', e)
          }
        )
    }
  },
  qn = {
    class:
      'option-container flex justify-between items-center px-2 py-0 cursor-pointer overflow-hidden w-full'
  },
  Zn = { class: 'option-display-name font-semibold flex flex-col' },
  Qn = { key: 0 },
  Xn = ['innerHTML'],
  Yn = ['innerHTML'],
  Jn = {
    key: 0,
    class:
      'option-category font-light text-sm text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap'
  },
  eo = { class: 'option-badges' },
  to = u(
    Vue.defineComponent({
      __name: 'NodeSearchItem',
      props: { nodeDef: {}, currentQuery: {} },
      setup(e) {
        const t = o(),
          n = Vue.computed(() => t.get('Comfy.NodeSearchBoxImpl.ShowCategory')),
          i = Vue.computed(() => t.get('Comfy.NodeSearchBoxImpl.ShowIdName')),
          a = Vue.computed(() =>
            t.get('Comfy.NodeSearchBoxImpl.ShowNodeFrequency')
          ),
          r = ae(),
          s = Vue.computed(() => r.getNodeFrequency(c.nodeDef)),
          l = re(),
          u = Vue.computed(() => l.isBookmarked(c.nodeDef)),
          c = e
        return (e, t) => (
          Vue.openBlock(),
          Vue.createElementBlock('div', qn, [
            Vue.createElementVNode('div', Zn, [
              Vue.createElementVNode('div', null, [
                u.value
                  ? (Vue.openBlock(),
                    Vue.createElementBlock(
                      'span',
                      Qn,
                      t[0] ||
                        (t[0] = [
                          Vue.createElementVNode(
                            'i',
                            { class: 'pi pi-bookmark-fill text-sm mr-1' },
                            null,
                            -1
                          )
                        ])
                    ))
                  : Vue.createCommentVNode('', !0),
                Vue.createElementVNode(
                  'span',
                  {
                    innerHTML: Vue.unref(se)(
                      e.nodeDef.display_name,
                      e.currentQuery
                    )
                  },
                  null,
                  8,
                  Xn
                ),
                t[1] || (t[1] = Vue.createElementVNode('span', null, ' ', -1)),
                i.value
                  ? (Vue.openBlock(),
                    Vue.createBlock(
                      Vue.unref(le),
                      { key: 1, severity: 'secondary' },
                      {
                        default: Vue.withCtx(() => [
                          Vue.createElementVNode(
                            'span',
                            {
                              innerHTML: Vue.unref(se)(
                                e.nodeDef.name,
                                e.currentQuery
                              )
                            },
                            null,
                            8,
                            Yn
                          )
                        ]),
                        _: 1
                      }
                    ))
                  : Vue.createCommentVNode('', !0)
              ]),
              n.value
                ? (Vue.openBlock(),
                  Vue.createElementBlock(
                    'div',
                    Jn,
                    Vue.toDisplayString(
                      e.nodeDef.category.replaceAll('/', ' > ')
                    ),
                    1
                  ))
                : Vue.createCommentVNode('', !0)
            ]),
            Vue.createElementVNode('div', eo, [
              e.nodeDef.experimental
                ? (Vue.openBlock(),
                  Vue.createBlock(
                    Vue.unref(le),
                    {
                      key: 0,
                      value: e.$t('experimental'),
                      severity: 'primary'
                    },
                    null,
                    8,
                    ['value']
                  ))
                : Vue.createCommentVNode('', !0),
              e.nodeDef.deprecated
                ? (Vue.openBlock(),
                  Vue.createBlock(
                    Vue.unref(le),
                    { key: 1, value: e.$t('deprecated'), severity: 'danger' },
                    null,
                    8,
                    ['value']
                  ))
                : Vue.createCommentVNode('', !0),
              a.value && s.value > 0
                ? (Vue.openBlock(),
                  Vue.createBlock(
                    Vue.unref(le),
                    {
                      key: 2,
                      value: Vue.unref(ue)(s.value, { roundToInt: !0 }),
                      severity: 'secondary'
                    },
                    null,
                    8,
                    ['value']
                  ))
                : Vue.createCommentVNode('', !0),
              e.nodeDef.nodeSource.type !== Vue.unref(ce).Unknown
                ? (Vue.openBlock(),
                  Vue.createBlock(
                    Vue.unref(ie),
                    { key: 3, class: 'text-sm font-light' },
                    {
                      default: Vue.withCtx(() => [
                        Vue.createTextVNode(
                          Vue.toDisplayString(e.nodeDef.nodeSource.displayText),
                          1
                        )
                      ]),
                      _: 1
                    }
                  ))
                : Vue.createCommentVNode('', !0)
            ])
          ])
        )
      }
    }),
    [['__scopeId', 'data-v-37f672ab']]
  ),
  no = {
    class:
      'comfy-vue-node-search-container flex justify-center items-center w-full min-w-96 pointer-events-auto'
  },
  oo = {
    key: 0,
    class: 'comfy-vue-node-preview-container absolute left-[-350px] top-[50px]'
  },
  io = { class: '_dialog-body' },
  ao = Vue.defineComponent({
    __name: 'NodeSearchBox',
    props: { filters: {}, searchLimit: { default: 64 } },
    emits: ['addFilter', 'removeFilter', 'addNode'],
    setup(e, { emit: n }) {
      const i = o(),
        { t: a } = VueI18n.useI18n(),
        r = Vue.computed(() => i.get('Comfy.NodeSearchBoxImpl.NodePreview')),
        s = e,
        l = Vue.ref(!1),
        u = `comfy-vue-node-search-box-input-${Math.random()}`,
        c = Vue.ref([]),
        d = Vue.ref(null),
        m = Vue.ref(''),
        f = Vue.computed(() =>
          0 === s.filters.length ? a('searchNodes') + '...' : ''
        ),
        h = de(),
        b = ae(),
        v = t((e) => {
          const t = '' === e && 0 === s.filters.length
          ;(m.value = e),
            (c.value = t
              ? b.topNodeDefs
              : [
                  ...h.nodeSearchService.searchNode(e, s.filters, {
                    limit: s.searchLimit
                  })
                ])
        }, 'search'),
        g = n,
        y = t(() => {
          const e = document.getElementById(u)
          e && (e.blur(), e.focus())
        }, 'reFocusInput')
      Vue.onMounted(y)
      const V = t((e) => {
          ;(l.value = !1), g('addFilter', e), y()
        }, 'onAddFilter'),
        I = t((e, t) => {
          e.stopPropagation(), e.preventDefault(), g('removeFilter', t), y()
        }, 'onRemoveFilter'),
        k = t((e) => {
          if (-1 === e) return void (d.value = null)
          const t = c.value[e]
          d.value = t
        }, 'setHoverSuggestion')
      return (e, n) => (
        Vue.openBlock(),
        Vue.createElementBlock('div', no, [
          r.value
            ? (Vue.openBlock(),
              Vue.createElementBlock('div', oo, [
                d.value
                  ? (Vue.openBlock(),
                    Vue.createBlock(
                      pe,
                      { nodeDef: d.value, key: d.value?.name || '' },
                      null,
                      8,
                      ['nodeDef']
                    ))
                  : Vue.createCommentVNode('', !0)
              ]))
            : Vue.createCommentVNode('', !0),
          Vue.createVNode(Vue.unref(p), {
            icon: 'pi pi-filter',
            severity: 'secondary',
            class: 'filter-button z-10',
            onClick: n[0] || (n[0] = (e) => (l.value = !0))
          }),
          Vue.createVNode(
            Vue.unref(me),
            {
              visible: l.value,
              'onUpdate:visible': n[1] || (n[1] = (e) => (l.value = e)),
              class: 'min-w-96'
            },
            {
              header: Vue.withCtx(
                () =>
                  n[5] ||
                  (n[5] = [
                    Vue.createElementVNode(
                      'h3',
                      null,
                      'Add node filter condition',
                      -1
                    )
                  ])
              ),
              default: Vue.withCtx(() => [
                Vue.createElementVNode('div', io, [
                  Vue.createVNode(fe, { onAddFilter: V })
                ])
              ]),
              _: 1
            },
            8,
            ['visible']
          ),
          Vue.createVNode(
            Wn,
            {
              'model-value': s.filters,
              class: 'comfy-vue-node-search-box z-10 flex-grow',
              scrollHeight: '40vh',
              placeholder: f.value,
              'input-id': u,
              'append-to': 'self',
              suggestions: c.value,
              'min-length': 0,
              delay: 100,
              loading: !Vue.unref(b).isLoaded,
              onComplete: n[2] || (n[2] = (e) => v(e.query)),
              onOptionSelect: n[3] || (n[3] = (e) => g('addNode', e.value)),
              onFocusedOptionChanged: n[4] || (n[4] = (e) => k(e)),
              'complete-on-focus': '',
              'auto-option-focus': '',
              'force-selection': '',
              multiple: '',
              optionLabel: 'display_name'
            },
            {
              option: Vue.withCtx(({ option: e }) => [
                Vue.createVNode(
                  to,
                  { nodeDef: e, currentQuery: m.value },
                  null,
                  8,
                  ['nodeDef', 'currentQuery']
                )
              ]),
              chip: Vue.withCtx(({ value: e }) => [
                Vue.createVNode(
                  he,
                  {
                    onRemove: t((t) => I(t, e), 'onRemove'),
                    text: e[1],
                    badge: e[0].invokeSequence.toUpperCase(),
                    'badge-class': e[0].invokeSequence + '-badge'
                  },
                  null,
                  8,
                  ['onRemove', 'text', 'badge', 'badge-class']
                )
              ]),
              _: 1
            },
            8,
            ['model-value', 'placeholder', 'suggestions', 'loading']
          )
        ])
      )
    }
  })
class ro {
  static {
    t(this, 'ConnectingLinkImpl')
  }
  constructor(e, t, n, o, i, a) {
    ;(this.node = e),
      (this.slot = t),
      (this.input = n),
      (this.output = o),
      (this.pos = i),
      (this.afterRerouteId = a)
  }
  static createFromPlainObject(e) {
    return new ro(e.node, e.slot, e.input, e.output, e.pos, e.afterRerouteId)
  }
  get type() {
    const e = this.input ? this.input.type : (this.output?.type ?? null)
    return -1 === e ? null : e
  }
  get releaseSlotType() {
    return this.output ? 'input' : 'output'
  }
  connectTo(e) {
    const t = 'output' === this.releaseSlotType ? e.outputs : e.inputs
    if (!t) return
    const n = t.findIndex((e) => l.isValidConnection(e.type, this.type))
    ;-1 !== n
      ? 'input' === this.releaseSlotType
        ? this.node.connect(this.slot, e, n, this.afterRerouteId)
        : e.connect(n, this.node, this.slot, this.afterRerouteId)
      : console.warn(
          `Could not find slot with type ${this.type} on node ${e.title}. This should never happen`
        )
  }
}
const so = n('searchBox', () => {
    const e = Vue.ref(!1)
    function n() {
      e.value = !e.value
    }
    return t(n, 'toggleVisible'), { visible: e, toggleVisible: n }
  }),
  lo = Vue.defineComponent({
    __name: 'NodeSearchBoxPopover',
    setup(e) {
      const n = o(),
        { visible: i } = be(so()),
        r = Vue.ref(!0),
        s = Vue.ref(null),
        u = t(() => {
          if (!s.value) return a.getCanvasCenter()
          const e = s.value.detail.originalEvent
          return [e.canvasX, e.canvasY]
        }, 'getNewNodeLocation'),
        c = Vue.ref([]),
        d = t((e) => {
          c.value.push(e)
        }, 'addFilter'),
        p = t((e) => {
          c.value = c.value.filter((t) => Vue.toRaw(t) !== Vue.toRaw(e))
        }, 'removeFilter'),
        m = t(() => {
          c.value = []
        }, 'clearFilters'),
        f = t(() => {
          i.value = !1
        }, 'closeDialog'),
        h = t((e) => {
          const t = a.addNodeOnGraph(e, { pos: u() }),
            n = s.value?.detail
          n &&
            'empty-release' === n.subType &&
            n.linkReleaseContext.links.forEach((e) => {
              ro.createFromPlainObject(e).connectTo(t)
            }),
            window.setTimeout(() => {
              f()
            }, 100)
        }, 'addNode'),
        b = Vue.computed(() => 'default' === n.get('Comfy.NodeSearchBoxImpl')),
        v = t((e) => {
          const t = e.detail
          b.value
            ? 'touch' === t.originalEvent?.pointerType
              ? setTimeout(() => {
                  y(e)
                }, 128)
              : y(e)
            : I.canvas.showSearchBox(t.originalEvent)
        }, 'showSearchBox'),
        g = de(),
        y = t((e) => {
          if ('empty-release' === e.detail.subType) {
            const t = e.detail.linkReleaseContext.links
            if (0 === t.length)
              return void console.warn(
                'Empty release with no links! This should never happen'
              )
            const n = ro.createFromPlainObject(t[0]),
              o = g.nodeSearchService.getFilterById(n.releaseSlotType),
              i = n.type.toString()
            d([o, i])
          }
          ;(i.value = !0),
            (s.value = e),
            (r.value = !1),
            setTimeout(() => {
              r.value = !0
            }, 300)
        }, 'showNewSearchBox'),
        V = t((e) => {
          if ('empty-release' !== e.detail.subType) return
          const n = e.detail.linkReleaseContext.links
          if (0 === n.length)
            return void console.warn(
              'Empty release with no links! This should never happen'
            )
          const o = ro.createFromPlainObject(n[0]),
            i = {
              e: e.detail.originalEvent,
              allow_searchbox: !0,
              showSearchBox: t(() => v(e), 'showSearchBox')
            },
            a = o.output
              ? {
                  nodeFrom: o.node,
                  slotFrom: o.output,
                  afterRerouteId: o.afterRerouteId
                }
              : {
                  nodeTo: o.node,
                  slotTo: o.input,
                  afterRerouteId: o.afterRerouteId
                }
          I.canvas.showConnectionMenu({ ...a, ...i })
        }, 'showContextMenu'),
        I = xt()
      Vue.watchEffect(() => {
        I.canvas &&
          ((l.release_link_on_empty_shows_menu = !1),
          (I.canvas.allow_searchbox = !1))
      })
      const k = t((e) => {
          if ('empty-double-click' === e.detail.subType) v(e)
          else if ('empty-release' === e.detail.subType) C(e)
          else if ('group-double-click' === e.detail.subType) {
            const t = e.detail.group,
              [n, o] = t.pos
            e.detail.originalEvent.canvasY - o > t.titleHeight && v(e)
          }
        }, 'canvasEventHandler'),
        w = Vue.computed(() => n.get('Comfy.LinkRelease.Action')),
        x = Vue.computed(() => n.get('Comfy.LinkRelease.ActionShift')),
        C = t((e) => {
          switch (e.detail.originalEvent.shiftKey ? x.value : w.value) {
            case ge.SEARCH_BOX:
              v(e)
              break
            case ge.CONTEXT_MENU:
              V(e)
            case ge.NO_ACTION:
          }
        }, 'handleCanvasEmptyRelease')
      return (
        ve(document, 'litegraph:canvas', k),
        (e, t) => (
          Vue.openBlock(),
          Vue.createElementBlock('div', null, [
            Vue.createVNode(
              Vue.unref(me),
              {
                visible: Vue.unref(i),
                'onUpdate:visible':
                  t[0] || (t[0] = (e) => (Vue.isRef(i) ? (i.value = e) : null)),
                modal: '',
                'dismissable-mask': r.value,
                onHide: m,
                pt: {
                  root: { class: 'invisible-dialog-root', role: 'search' },
                  mask: { class: 'node-search-box-dialog-mask' },
                  transition: {
                    enterFromClass: 'opacity-0 scale-75',
                    enterActiveClass: 'transition-all duration-100 ease-out',
                    leaveActiveClass: 'transition-all duration-100 ease-in',
                    leaveToClass: 'opacity-0 scale-75'
                  }
                }
              },
              {
                container: Vue.withCtx(() => [
                  Vue.createVNode(
                    ao,
                    {
                      filters: c.value,
                      onAddFilter: d,
                      onRemoveFilter: p,
                      onAddNode: h
                    },
                    null,
                    8,
                    ['filters']
                  )
                ]),
                _: 1
              },
              8,
              ['visible', 'dismissable-mask']
            )
          ])
        )
      )
    }
  }),
  uo = u(
    Vue.defineComponent({
      __name: 'NodeTooltip',
      setup(e) {
        let n
        const o = de(),
          i = Vue.ref(),
          r = Vue.ref(''),
          s = Vue.ref(),
          u = Vue.ref(),
          c = t(() => (r.value = null), 'hideTooltip'),
          d = t(async (e) => {
            if (!e) return
            ;(s.value = a.canvas.mouse[0] + 'px'),
              (u.value = a.canvas.mouse[1] + 'px'),
              (r.value = e),
              await Vue.nextTick()
            const t = i.value.getBoundingClientRect()
            t.right > window.innerWidth &&
              (s.value = a.canvas.mouse[0] - t.width + 'px'),
              t.top < 0 && (u.value = a.canvas.mouse[1] + t.height + 'px')
          }, 'showTooltip'),
          p = t(() => {
            const { canvas: e } = a,
              t = e.node_over
            if (!t) return
            const n = t.constructor,
              i = o.nodeDefsByName[t.type]
            if (n.title_mode !== l.NO_TITLE && e.graph_mouse[1] < t.pos[1])
              return d(i.description)
            if (t.flags?.collapsed) return
            const r = e.isOverNodeInput(
              t,
              e.graph_mouse[0],
              e.graph_mouse[1],
              [0, 0]
            )
            if (-1 !== r) {
              const e = t.inputs[r].name
              return d(i.inputs.getInput(e)?.tooltip)
            }
            const s = e.isOverNodeOutput(
              t,
              e.graph_mouse[0],
              e.graph_mouse[1],
              [0, 0]
            )
            if (-1 !== s) return d(i.outputs.all?.[s]?.tooltip)
            const u = a.canvas.getWidgetAtCursor()
            return u && !u.element
              ? d(u.tooltip ?? i.inputs.getInput(u.name)?.tooltip)
              : void 0
          }, 'onIdle'),
          m = t((e) => {
            c(),
              clearTimeout(n),
              'CANVAS' === e.target.nodeName && (n = window.setTimeout(p, 500))
          }, 'onMouseMove')
        return (
          ve(window, 'mousemove', m),
          ve(window, 'click', c),
          (e, t) =>
            r.value
              ? (Vue.openBlock(),
                Vue.createElementBlock(
                  'div',
                  {
                    key: 0,
                    ref_key: 'tooltipRef',
                    ref: i,
                    class: 'node-tooltip',
                    style: Vue.normalizeStyle({ left: s.value, top: u.value })
                  },
                  Vue.toDisplayString(r.value),
                  5
                ))
              : Vue.createCommentVNode('', !0)
        )
      }
    }),
    [['__scopeId', 'data-v-259081e0']]
  ),
  co = Vue.defineComponent({
    __name: 'NodeBadge',
    setup(e) {
      const n = o(),
        i = Vue.computed(() => n.get('Comfy.NodeBadge.NodeSourceBadgeMode')),
        r = Vue.computed(() => n.get('Comfy.NodeBadge.NodeIdBadgeMode')),
        s = Vue.computed(() => n.get('Comfy.NodeBadge.NodeLifeCycleBadgeMode'))
      Vue.watch([i, r, s], () => {
        a.graph?.setDirtyCanvas(!0, !0)
      })
      const l = Vue.computed(() => ye(n.get('Comfy.ColorPalette'))),
        u = de()
      function c(e, t) {
        return !(t === we.None || (e?.isCoreNode && t === we.HideBuiltIn))
      }
      return (
        t(c, 'badgeTextVisible'),
        Vue.onMounted(() => {
          a.registerExtension({
            name: 'Comfy.NodeBadge',
            nodeCreated(e) {
              e.badgePosition = Ve.TopRight
              const t = Vue.computed(() => {
                const t = u.fromLGraphNode(e)
                return new Ie({
                  text: _.truncate(
                    [
                      c(t, r.value) ? `#${e.id}` : '',
                      c(t, s.value) ? (t?.nodeLifeCycleBadgeText ?? '') : '',
                      c(t, i.value) ? (t?.nodeSource?.badgeText ?? '') : ''
                    ]
                      .filter((e) => e.length > 0)
                      .join(' '),
                    { length: 31 }
                  ),
                  fgColor:
                    l.value?.colors?.litegraph_base?.BADGE_FG_COLOR ||
                    ke.colors.litegraph_base.BADGE_FG_COLOR,
                  bgColor:
                    l.value?.colors?.litegraph_base?.BADGE_BG_COLOR ||
                    ke.colors.litegraph_base.BADGE_BG_COLOR
                })
              })
              e.badges.push(() => t.value)
            }
          })
        }),
        (e, t) => (Vue.openBlock(), Vue.createElementBlock('div'))
      )
    }
  })
var po = t(function (e) {
    return (
      e.dt,
      '\n.p-buttongroup {\n    display: inline-flex;\n}\n\n.p-buttongroup .p-button {\n    margin: 0;\n}\n\n.p-buttongroup .p-button:not(:last-child),\n.p-buttongroup .p-button:not(:last-child):hover {\n    border-inline-end: 0 none;\n}\n\n.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-buttongroup .p-button:first-of-type:not(:only-of-type) {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n.p-buttongroup .p-button:last-of-type:not(:only-of-type) {\n    border-start-start-radius: 0;\n    border-end-start-radius: 0;\n}\n\n.p-buttongroup .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n'
    )
  }, 'theme'),
  mo = {
    name: 'ButtonGroup',
    extends: {
      name: 'BaseButtonGroup',
      extends: V,
      style: c.extend({
        name: 'buttongroup',
        theme: po,
        classes: { root: 'p-buttongroup p-component' }
      }),
      provide: t(function () {
        return { $pcButtonGroup: this, $parentInstance: this }
      }, 'provide')
    },
    inheritAttrs: !1
  }
function fo(e, t, n, o, i, a) {
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'span',
      Vue.mergeProps({ class: e.cx('root'), role: 'group' }, e.ptmi('root')),
      [Vue.renderSlot(e.$slots, 'default')],
      16
    )
  )
}
t(fo, 'render$8'), (mo.render = fo)
const ho = u(
    Vue.defineComponent({
      __name: 'GraphCanvasMenu',
      setup(e) {
        const { t: n } = VueI18n.useI18n(),
          i = m(),
          a = xt(),
          r = o(),
          s = Vue.computed(
            () => r.get('Comfy.LinkRenderMode') === l.HIDDEN_LINK
          )
        let u = null
        const c = t((e) => {
            if (u) return
            const n = t(() => i.execute(e), 'cmd')
            n(), (u = window.setInterval(n, 100))
          }, 'repeat'),
          d = t(() => {
            u && (clearInterval(u), (u = null))
          }, 'stopRepeat')
        return (e, t) => {
          const o = Vue.resolveComponent('i-material-symbols:pan-tool-outline'),
            r = Vue.resolveComponent('i-simple-line-icons:cursor'),
            l = Vue.resolveDirective('tooltip')
          return (
            Vue.openBlock(),
            Vue.createBlock(
              Vue.unref(mo),
              {
                class:
                  'p-buttongroup-vertical absolute bottom-[10px] right-[10px] z-[1000] pointer-events-auto'
              },
              {
                default: Vue.withCtx(() => [
                  Vue.withDirectives(
                    Vue.createVNode(
                      Vue.unref(p),
                      {
                        severity: 'secondary',
                        icon: 'pi pi-plus',
                        onMousedown:
                          t[0] || (t[0] = (e) => c('Comfy.Canvas.ZoomIn')),
                        onMouseup: d
                      },
                      null,
                      512
                    ),
                    [
                      [
                        l,
                        Vue.unref(n)('graphCanvasMenu.zoomIn'),
                        void 0,
                        { left: !0 }
                      ]
                    ]
                  ),
                  Vue.withDirectives(
                    Vue.createVNode(
                      Vue.unref(p),
                      {
                        severity: 'secondary',
                        icon: 'pi pi-minus',
                        onMousedown:
                          t[1] || (t[1] = (e) => c('Comfy.Canvas.ZoomOut')),
                        onMouseup: d
                      },
                      null,
                      512
                    ),
                    [
                      [
                        l,
                        Vue.unref(n)('graphCanvasMenu.zoomOut'),
                        void 0,
                        { left: !0 }
                      ]
                    ]
                  ),
                  Vue.withDirectives(
                    Vue.createVNode(
                      Vue.unref(p),
                      {
                        severity: 'secondary',
                        icon: 'pi pi-expand',
                        onClick:
                          t[2] ||
                          (t[2] = () =>
                            Vue.unref(i).execute('Comfy.Canvas.FitView'))
                      },
                      null,
                      512
                    ),
                    [
                      [
                        l,
                        Vue.unref(n)('graphCanvasMenu.fitView'),
                        void 0,
                        { left: !0 }
                      ]
                    ]
                  ),
                  Vue.withDirectives(
                    (Vue.openBlock(),
                    Vue.createBlock(
                      Vue.unref(p),
                      {
                        severity: 'secondary',
                        onClick:
                          t[3] ||
                          (t[3] = () =>
                            Vue.unref(i).execute('Comfy.Canvas.ToggleLock'))
                      },
                      {
                        icon: Vue.withCtx(() => [
                          Vue.unref(a).canvas?.read_only
                            ? (Vue.openBlock(), Vue.createBlock(o, { key: 0 }))
                            : (Vue.openBlock(), Vue.createBlock(r, { key: 1 }))
                        ]),
                        _: 1
                      }
                    )),
                    [
                      [
                        l,
                        Vue.unref(n)(
                          'graphCanvasMenu.' +
                            (Vue.unref(a).canvas?.read_only
                              ? 'panMode'
                              : 'selectMode')
                        ) + ' (Space)',
                        void 0,
                        { left: !0 }
                      ]
                    ]
                  ),
                  Vue.withDirectives(
                    Vue.createVNode(
                      Vue.unref(p),
                      {
                        severity: 'secondary',
                        icon: s.value ? 'pi pi-eye-slash' : 'pi pi-eye',
                        onClick:
                          t[4] ||
                          (t[4] = () =>
                            Vue.unref(i).execute(
                              'Comfy.Canvas.ToggleLinkVisibility'
                            )),
                        'data-testid': 'toggle-link-visibility-button'
                      },
                      null,
                      8,
                      ['icon']
                    ),
                    [
                      [
                        l,
                        Vue.unref(n)('graphCanvasMenu.toggleLinkVisibility'),
                        void 0,
                        { left: !0 }
                      ]
                    ]
                  )
                ]),
                _: 1
              }
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-94481f39']]
  ),
  bo = Vue.defineComponent({
    __name: 'GraphCanvas',
    emits: ['ready'],
    setup(e, { emit: n }) {
      const s = n,
        u = Vue.ref(null),
        c = o(),
        d = de(),
        p = g(),
        f = xt(),
        h = xe(),
        b = Vue.computed(() => 'Disabled' !== c.get('Comfy.UseNewMenu')),
        v = Vue.computed(() => c.get('Comfy.Graph.CanvasMenu')),
        y = Vue.computed(() => c.get('Comfy.EnableTooltips'))
      Vue.watchEffect(() => {
        const e = c.get('Comfy.Graph.CanvasInfo')
        f.canvas && (f.canvas.show_info = e)
      }),
        Vue.watchEffect(() => {
          const e = c.get('Comfy.Graph.ZoomSpeed')
          f.canvas && (f.canvas.zoom_speed = e)
        }),
        Vue.watchEffect(() => {
          l.snaps_for_comfy = c.get('Comfy.Node.AutoSnapLinkToSlot')
        }),
        Vue.watchEffect(() => {
          l.snap_highlights_node = c.get('Comfy.Node.SnapHighlightsNode')
        }),
        Vue.watchEffect(() => {
          r.keepAllLinksOnBypass = c.get('Comfy.Node.BypassAllLinksOnDelete')
        }),
        Vue.watchEffect(() => {
          l.middle_click_slot_add_default_node = c.get(
            'Comfy.Node.MiddleClickRerouteNode'
          )
        }),
        Vue.watchEffect(() => {
          d.showDeprecated = c.get('Comfy.Node.ShowDeprecated')
        }),
        Vue.watchEffect(() => {
          d.showExperimental = c.get('Comfy.Node.ShowExperimental')
        }),
        Vue.watchEffect(() => {
          const e = c.get('Comfy.TextareaWidget.Spellcheck')
          document
            .querySelectorAll('textarea.comfy-multiline-input')
            .forEach((t) => {
              ;(t.spellcheck = e), t.focus(), t.blur()
            })
        }),
        Vue.watchEffect(() => {
          const e = c.get('Comfy.LinkRenderMode')
          f.canvas &&
            ((f.canvas.links_render_mode = e), f.canvas.setDirty(!1, !0))
        }),
        Vue.watchEffect(() => {
          const e = c.get('Comfy.Graph.LinkMarkers'),
            { canvas: t } = f
          t && ((t.linkMarkerShape = e), t.setDirty(!1, !0))
        }),
        Vue.watchEffect(() => {
          const e = c.get('Comfy.RerouteBeta'),
            { canvas: t } = f
          t && ((t.reroutesEnabled = e), t.setDirty(!1, !0))
        }),
        Vue.watchEffect(() => {
          const e = c.get('LiteGraph.Canvas.MaximumFps'),
            { canvas: t } = f
          t && (t.maximumFps = e)
        }),
        Vue.watchEffect(() => {
          Ce.doubleClickTime = c.get('Comfy.Pointer.DoubleClickTime')
        }),
        Vue.watchEffect(() => {
          Ce.bufferTime = c.get('Comfy.Pointer.ClickBufferTime')
        }),
        Vue.watchEffect(() => {
          Ce.maxClickDrift = c.get('Comfy.Pointer.ClickDrift')
        }),
        Vue.watchEffect(() => {
          l.CANVAS_GRID_SIZE = c.get('Comfy.SnapToGrid.GridSize')
        }),
        Vue.watchEffect(() => {
          l.alwaysSnapToGrid = c.get('pysssss.SnapToGrid')
        }),
        Vue.watchEffect(() => {
          f.canvas &&
            (f.canvas.state.draggingCanvas
              ? (f.canvas.canvas.style.cursor = 'grabbing')
              : f.canvas.state.readOnly
                ? (f.canvas.canvas.style.cursor = 'grab')
                : (f.canvas.canvas.style.cursor = 'default'))
        })
      const V = Se(),
        I = t(() => {
          const e = JSON.stringify(a.serializeGraph())
          localStorage.setItem('workflow', e),
            Be.clientId && sessionStorage.setItem(`workflow:${Be.clientId}`, e)
        }, 'persistCurrentWorkflow')
      Vue.watchEffect(() => {
        if (V.activeWorkflow) {
          const e = V.activeWorkflow
          Pe('Comfy.PreviousWorkflow', e.key), I()
        }
      }),
        Be.addEventListener('graphChanged', I),
        Ee(() => u.value, {
          onDrop: t((e) => {
            const t = e.location.current.input,
              n = e.source.data
            if ('tree-explorer-node' === n.type) {
              const e = n.data
              if (e.data instanceof Le) {
                const n = e.data,
                  o = a.clientPosToCanvasPos([t.clientX - 20, t.clientY])
                a.addNodeOnGraph(n, { pos: o })
              } else if (e.data instanceof Oe) {
                const n = e.data,
                  o = a.clientPosToCanvasPos([t.clientX, t.clientY]),
                  i = a.graph.getNodeOnPos(o[0], o[1])
                let r = null,
                  s = null
                if (i) {
                  const e = h.getAllNodeProviders(n.directory)
                  for (const t of e)
                    t.nodeDef.name === i.comfyClass && ((s = i), (r = t))
                }
                if (!s) {
                  const e = h.getNodeProvider(n.directory)
                  e && ((s = a.addNodeOnGraph(e.nodeDef, { pos: o })), (r = e))
                }
                if (s) {
                  const e = s.widgets.find((e) => e.name === r.key)
                  e && (e.value = n.file_name)
                }
              }
            }
          }, 'onDrop')
        })
      const k = Vue.ref(!1)
      return (
        Vue.onMounted(async () => {
          ;(window.LiteGraph = l),
            (window.LGraph = Te),
            (window.LLink = Me),
            (window.LGraphNode = r),
            (window.LGraphGroup = i),
            (window.DragAndScale = Ne),
            (window.LGraphCanvas = $e),
            (window.ContextMenu = Ae),
            (window.LGraphBadge = Ie),
            (a.vueAppReady = !0),
            (p.spinner = !0),
            De.init(a),
            await a.setup(u.value),
            (f.canvas = a.canvas),
            (f.canvas.render_canvas_border = !1),
            (p.spinner = !1),
            (window.app = a),
            (window.graph = a.graph),
            (k.value = !0),
            Vue.watch(
              () => c.get('Comfy.Locale'),
              async () => {
                await m().execute('Comfy.RefreshNodeDefinitions'),
                  _e.reloadCurrentWorkflow()
              }
            ),
            s('ready')
        }),
        (e, t) => (
          Vue.openBlock(),
          Vue.createElementBlock(
            Vue.Fragment,
            null,
            [
              (Vue.openBlock(),
              Vue.createBlock(Vue.Teleport, { to: '.graph-canvas-container' }, [
                k.value && b.value && !Vue.unref(p).focusMode
                  ? (Vue.openBlock(),
                    Vue.createBlock(
                      yn,
                      { key: 0 },
                      {
                        'side-bar-panel': Vue.withCtx(() => [
                          Vue.createVNode(At)
                        ]),
                        'bottom-panel': Vue.withCtx(() => [
                          Vue.createVNode(Yt)
                        ]),
                        'graph-canvas-panel': Vue.withCtx(() => [
                          v.value
                            ? (Vue.openBlock(), Vue.createBlock(ho, { key: 0 }))
                            : Vue.createCommentVNode('', !0)
                        ]),
                        _: 1
                      }
                    ))
                  : Vue.createCommentVNode('', !0),
                Vue.createVNode(Ct),
                !b.value && v.value
                  ? (Vue.openBlock(), Vue.createBlock(ho, { key: 1 }))
                  : Vue.createCommentVNode('', !0),
                Vue.createElementVNode(
                  'canvas',
                  {
                    ref_key: 'canvasRef',
                    ref: u,
                    id: 'graph-canvas',
                    tabindex: '1'
                  },
                  null,
                  512
                )
              ])),
              Vue.createVNode(lo),
              y.value
                ? (Vue.openBlock(), Vue.createBlock(uo, { key: 0 }))
                : Vue.createCommentVNode('', !0),
              Vue.createVNode(co)
            ],
            64
          )
        )
      )
    }
  }),
  vo = u(
    Vue.defineComponent({
      __name: 'MenuHamburger',
      setup(e) {
        const n = g(),
          i = o(),
          r = t(() => {
            n.focusMode = !1
          }, 'exitFocusMode')
        Vue.watchEffect(() => {
          'Disabled' === i.get('Comfy.UseNewMenu') &&
            (n.focusMode
              ? (a.ui.menuContainer.style.display = 'none')
              : (a.ui.menuContainer.style.display = 'block'))
        })
        const s = Vue.computed(() => i.get('Comfy.UseNewMenu')),
          l = Vue.computed(() =>
            'Bottom' === s.value
              ? { bottom: '0px', right: '0px' }
              : { top: '0px', right: '0px' }
          )
        return (e, t) => {
          const o = Vue.resolveDirective('tooltip')
          return Vue.withDirectives(
            (Vue.openBlock(),
            Vue.createBlock(
              Vue.unref(p),
              {
                class: 'comfy-menu-hamburger',
                style: Vue.normalizeStyle(l.value),
                icon: 'pi pi-bars',
                severity: 'secondary',
                text: '',
                size: 'large',
                onClick: r
              },
              null,
              8,
              ['style']
            )),
            [
              [Vue.vShow, Vue.unref(n).focusMode],
              [o, { value: e.$t('menu.showMenu'), showDelay: 300 }]
            ]
          )
        }
      }
    }),
    [['__scopeId', 'data-v-2ddd26e8']]
  )
function go(e) {
  return (go =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        })(e)
}
function yo(e, t, n) {
  return (
    (t = Vo(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  )
}
function Vo(e) {
  var t = Io(e, 'string')
  return 'symbol' == go(t) ? t : t + ''
}
function Io(e, t) {
  if ('object' != go(e) || !e) return e
  var n = e[Symbol.toPrimitive]
  if (void 0 !== n) {
    var o = n.call(e, t || 'default')
    if ('object' != go(o)) return o
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return ('string' === t ? String : Number)(e)
}
t(go, '_typeof$3'),
  t(yo, '_defineProperty$3'),
  t(Vo, '_toPropertyKey$3'),
  t(Io, '_toPrimitive$3')
var ko = t(function (e) {
    var t = e.dt
    return '\n.p-toast {\n    width: '
      .concat(
        t('toast.width'),
        ';\n    white-space: pre-line;\n    word-break: break-word;\n}\n\n.p-toast-message {\n    margin: 0 0 1rem 0;\n}\n\n.p-toast-message-icon {\n    flex-shrink: 0;\n    font-size: '
      )
      .concat(t('toast.icon.size'), ';\n    width: ')
      .concat(t('toast.icon.size'), ';\n    height: ')
      .concat(
        t('toast.icon.size'),
        ';\n}\n\n.p-toast-message-content {\n    display: flex;\n    align-items: flex-start;\n    padding: '
      )
      .concat(t('toast.content.padding'), ';\n    gap: ')
      .concat(
        t('toast.content.gap'),
        ';\n}\n\n.p-toast-message-text {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: '
      )
      .concat(
        t('toast.text.gap'),
        ';\n}\n\n.p-toast-summary {\n    font-weight: '
      )
      .concat(t('toast.summary.font.weight'), ';\n    font-size: ')
      .concat(
        t('toast.summary.font.size'),
        ';\n}\n\n.p-toast-detail {\n    font-weight: '
      )
      .concat(t('toast.detail.font.weight'), ';\n    font-size: ')
      .concat(
        t('toast.detail.font.size'),
        ';\n}\n\n.p-toast-close-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    cursor: pointer;\n    background: transparent;\n    transition: background '
      )
      .concat(t('toast.transition.duration'), ', color ')
      .concat(t('toast.transition.duration'), ', outline-color ')
      .concat(t('toast.transition.duration'), ', box-shadow ')
      .concat(
        t('toast.transition.duration'),
        ';\n    outline-color: transparent;\n    color: inherit;\n    width: '
      )
      .concat(t('toast.close.button.width'), ';\n    height: ')
      .concat(t('toast.close.button.height'), ';\n    border-radius: ')
      .concat(
        t('toast.close.button.border.radius'),
        ';\n    margin: -25% 0 0 0;\n    right: -25%;\n    padding: 0;\n    border: none;\n    user-select: none;\n}\n\n.p-toast-close-button:dir(rtl) {\n    margin: -25% 0 0 auto;\n    left: -25%;\n    right: auto;\n}\n\n.p-toast-message-info,\n.p-toast-message-success,\n.p-toast-message-warn,\n.p-toast-message-error,\n.p-toast-message-secondary,\n.p-toast-message-contrast {\n    border-width: '
      )
      .concat(
        t('toast.border.width'),
        ';\n    border-style: solid;\n    backdrop-filter: blur('
      )
      .concat(t('toast.blur'), ');\n    border-radius: ')
      .concat(
        t('toast.border.radius'),
        ';\n}\n\n.p-toast-close-icon {\n    font-size: '
      )
      .concat(t('toast.close.icon.size'), ';\n    width: ')
      .concat(t('toast.close.icon.size'), ';\n    height: ')
      .concat(
        t('toast.close.icon.size'),
        ';\n}\n\n.p-toast-close-button:focus-visible {\n    outline-width: '
      )
      .concat(t('focus.ring.width'), ';\n    outline-style: ')
      .concat(t('focus.ring.style'), ';\n    outline-offset: ')
      .concat(
        t('focus.ring.offset'),
        ';\n}\n\n.p-toast-message-info {\n    background: '
      )
      .concat(t('toast.info.background'), ';\n    border-color: ')
      .concat(t('toast.info.border.color'), ';\n    color: ')
      .concat(t('toast.info.color'), ';\n    box-shadow: ')
      .concat(
        t('toast.info.shadow'),
        ';\n}\n\n.p-toast-message-info .p-toast-detail {\n    color: '
      )
      .concat(
        t('toast.info.detail.color'),
        ';\n}\n\n.p-toast-message-info .p-toast-close-button:focus-visible {\n    outline-color: '
      )
      .concat(
        t('toast.info.close.button.focus.ring.color'),
        ';\n    box-shadow: '
      )
      .concat(
        t('toast.info.close.button.focus.ring.shadow'),
        ';\n}\n\n.p-toast-message-info .p-toast-close-button:hover {\n    background: '
      )
      .concat(
        t('toast.info.close.button.hover.background'),
        ';\n}\n\n.p-toast-message-success {\n    background: '
      )
      .concat(t('toast.success.background'), ';\n    border-color: ')
      .concat(t('toast.success.border.color'), ';\n    color: ')
      .concat(t('toast.success.color'), ';\n    box-shadow: ')
      .concat(
        t('toast.success.shadow'),
        ';\n}\n\n.p-toast-message-success .p-toast-detail {\n    color: '
      )
      .concat(
        t('toast.success.detail.color'),
        ';\n}\n\n.p-toast-message-success .p-toast-close-button:focus-visible {\n    outline-color: '
      )
      .concat(
        t('toast.success.close.button.focus.ring.color'),
        ';\n    box-shadow: '
      )
      .concat(
        t('toast.success.close.button.focus.ring.shadow'),
        ';\n}\n\n.p-toast-message-success .p-toast-close-button:hover {\n    background: '
      )
      .concat(
        t('toast.success.close.button.hover.background'),
        ';\n}\n\n.p-toast-message-warn {\n    background: '
      )
      .concat(t('toast.warn.background'), ';\n    border-color: ')
      .concat(t('toast.warn.border.color'), ';\n    color: ')
      .concat(t('toast.warn.color'), ';\n    box-shadow: ')
      .concat(
        t('toast.warn.shadow'),
        ';\n}\n\n.p-toast-message-warn .p-toast-detail {\n    color: '
      )
      .concat(
        t('toast.warn.detail.color'),
        ';\n}\n\n.p-toast-message-warn .p-toast-close-button:focus-visible {\n    outline-color: '
      )
      .concat(
        t('toast.warn.close.button.focus.ring.color'),
        ';\n    box-shadow: '
      )
      .concat(
        t('toast.warn.close.button.focus.ring.shadow'),
        ';\n}\n\n.p-toast-message-warn .p-toast-close-button:hover {\n    background: '
      )
      .concat(
        t('toast.warn.close.button.hover.background'),
        ';\n}\n\n.p-toast-message-error {\n    background: '
      )
      .concat(t('toast.error.background'), ';\n    border-color: ')
      .concat(t('toast.error.border.color'), ';\n    color: ')
      .concat(t('toast.error.color'), ';\n    box-shadow: ')
      .concat(
        t('toast.error.shadow'),
        ';\n}\n\n.p-toast-message-error .p-toast-detail {\n    color: '
      )
      .concat(
        t('toast.error.detail.color'),
        ';\n}\n\n.p-toast-message-error .p-toast-close-button:focus-visible {\n    outline-color: '
      )
      .concat(
        t('toast.error.close.button.focus.ring.color'),
        ';\n    box-shadow: '
      )
      .concat(
        t('toast.error.close.button.focus.ring.shadow'),
        ';\n}\n\n.p-toast-message-error .p-toast-close-button:hover {\n    background: '
      )
      .concat(
        t('toast.error.close.button.hover.background'),
        ';\n}\n\n.p-toast-message-secondary {\n    background: '
      )
      .concat(t('toast.secondary.background'), ';\n    border-color: ')
      .concat(t('toast.secondary.border.color'), ';\n    color: ')
      .concat(t('toast.secondary.color'), ';\n    box-shadow: ')
      .concat(
        t('toast.secondary.shadow'),
        ';\n}\n\n.p-toast-message-secondary .p-toast-detail {\n    color: '
      )
      .concat(
        t('toast.secondary.detail.color'),
        ';\n}\n\n.p-toast-message-secondary .p-toast-close-button:focus-visible {\n    outline-color: '
      )
      .concat(
        t('toast.secondary.close.button.focus.ring.color'),
        ';\n    box-shadow: '
      )
      .concat(
        t('toast.secondary.close.button.focus.ring.shadow'),
        ';\n}\n\n.p-toast-message-secondary .p-toast-close-button:hover {\n    background: '
      )
      .concat(
        t('toast.secondary.close.button.hover.background'),
        ';\n}\n\n.p-toast-message-contrast {\n    background: '
      )
      .concat(t('toast.contrast.background'), ';\n    border-color: ')
      .concat(t('toast.contrast.border.color'), ';\n    color: ')
      .concat(t('toast.contrast.color'), ';\n    box-shadow: ')
      .concat(
        t('toast.contrast.shadow'),
        ';\n}\n\n.p-toast-message-contrast .p-toast-detail {\n    color: '
      )
      .concat(
        t('toast.contrast.detail.color'),
        ';\n}\n\n.p-toast-message-contrast .p-toast-close-button:focus-visible {\n    outline-color: '
      )
      .concat(
        t('toast.contrast.close.button.focus.ring.color'),
        ';\n    box-shadow: '
      )
      .concat(
        t('toast.contrast.close.button.focus.ring.shadow'),
        ';\n}\n\n.p-toast-message-contrast .p-toast-close-button:hover {\n    background: '
      )
      .concat(
        t('toast.contrast.close.button.hover.background'),
        ';\n}\n\n.p-toast-top-center {\n    transform: translateX(-50%);\n}\n\n.p-toast-bottom-center {\n    transform: translateX(-50%);\n}\n\n.p-toast-center {\n    min-width: 20vw;\n    transform: translate(-50%, -50%);\n}\n\n.p-toast-message-enter-from {\n    opacity: 0;\n    transform: translateY(50%);\n}\n\n.p-toast-message-leave-from {\n    max-height: 1000px;\n}\n\n.p-toast .p-toast-message.p-toast-message-leave-to {\n    max-height: 0;\n    opacity: 0;\n    margin-bottom: 0;\n    overflow: hidden;\n}\n\n.p-toast-message-enter-active {\n    transition: transform 0.3s, opacity 0.3s;\n}\n\n.p-toast-message-leave-active {\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;\n}\n'
      )
  }, 'theme'),
  wo = {
    root: t(function (e) {
      var t = e.position
      return {
        position: 'fixed',
        top:
          'top-right' === t || 'top-left' === t || 'top-center' === t
            ? '20px'
            : 'center' === t
              ? '50%'
              : null,
        right: ('top-right' === t || 'bottom-right' === t) && '20px',
        bottom:
          ('bottom-left' === t ||
            'bottom-right' === t ||
            'bottom-center' === t) &&
          '20px',
        left:
          'top-left' === t || 'bottom-left' === t
            ? '20px'
            : 'center' === t || 'top-center' === t || 'bottom-center' === t
              ? '50%'
              : null
      }
    }, 'root')
  },
  xo = {
    root: t(function (e) {
      return ['p-toast p-component p-toast-' + e.props.position]
    }, 'root'),
    message: t(function (e) {
      var t = e.props
      return [
        'p-toast-message',
        {
          'p-toast-message-info':
            'info' === t.message.severity || void 0 === t.message.severity,
          'p-toast-message-warn': 'warn' === t.message.severity,
          'p-toast-message-error': 'error' === t.message.severity,
          'p-toast-message-success': 'success' === t.message.severity,
          'p-toast-message-secondary': 'secondary' === t.message.severity,
          'p-toast-message-contrast': 'contrast' === t.message.severity
        }
      ]
    }, 'message'),
    messageContent: 'p-toast-message-content',
    messageIcon: t(function (e) {
      var t = e.props
      return [
        'p-toast-message-icon',
        yo(
          yo(
            yo(
              yo({}, t.infoIcon, 'info' === t.message.severity),
              t.warnIcon,
              'warn' === t.message.severity
            ),
            t.errorIcon,
            'error' === t.message.severity
          ),
          t.successIcon,
          'success' === t.message.severity
        )
      ]
    }, 'messageIcon'),
    messageText: 'p-toast-message-text',
    summary: 'p-toast-summary',
    detail: 'p-toast-detail',
    closeButton: 'p-toast-close-button',
    closeIcon: 'p-toast-close-icon'
  },
  Co = c.extend({ name: 'toast', theme: ko, classes: xo, inlineStyles: wo }),
  So = { name: 'ExclamationTriangleIcon', extends: ze }
function Po(e, t, n, o, i, a) {
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'svg',
      Vue.mergeProps(
        {
          width: '14',
          height: '14',
          viewBox: '0 0 14 14',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg'
        },
        e.pti()
      ),
      t[0] ||
        (t[0] = [
          Vue.createElementVNode(
            'path',
            {
              d: 'M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z',
              fill: 'currentColor'
            },
            null,
            -1
          ),
          Vue.createElementVNode(
            'path',
            {
              d: 'M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z',
              fill: 'currentColor'
            },
            null,
            -1
          ),
          Vue.createElementVNode(
            'path',
            {
              d: 'M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z',
              fill: 'currentColor'
            },
            null,
            -1
          )
        ]),
      16
    )
  )
}
t(Po, 'render$7'), (So.render = Po)
var Bo = { name: 'InfoCircleIcon', extends: ze }
function Eo(e, t, n, o, i, a) {
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'svg',
      Vue.mergeProps(
        {
          width: '14',
          height: '14',
          viewBox: '0 0 14 14',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg'
        },
        e.pti()
      ),
      t[0] ||
        (t[0] = [
          Vue.createElementVNode(
            'path',
            {
              'fill-rule': 'evenodd',
              'clip-rule': 'evenodd',
              d: 'M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z',
              fill: 'currentColor'
            },
            null,
            -1
          )
        ]),
      16
    )
  )
}
t(Eo, 'render$6'), (Bo.render = Eo)
var Lo = {
    name: 'BaseToast',
    extends: V,
    props: {
      group: { type: String, default: null },
      position: { type: String, default: 'top-right' },
      autoZIndex: { type: Boolean, default: !0 },
      baseZIndex: { type: Number, default: 0 },
      breakpoints: { type: Object, default: null },
      closeIcon: { type: String, default: void 0 },
      infoIcon: { type: String, default: void 0 },
      warnIcon: { type: String, default: void 0 },
      errorIcon: { type: String, default: void 0 },
      successIcon: { type: String, default: void 0 },
      closeButtonProps: { type: null, default: null }
    },
    style: Co,
    provide: t(function () {
      return { $pcToast: this, $parentInstance: this }
    }, 'provide')
  },
  Oo = {
    name: 'ToastMessage',
    hostName: 'Toast',
    extends: V,
    emits: ['close'],
    closeTimeout: null,
    props: {
      message: { type: null, default: null },
      templates: { type: Object, default: null },
      closeIcon: { type: String, default: null },
      infoIcon: { type: String, default: null },
      warnIcon: { type: String, default: null },
      errorIcon: { type: String, default: null },
      successIcon: { type: String, default: null },
      closeButtonProps: { type: null, default: null }
    },
    mounted: t(function () {
      var e = this
      this.message.life &&
        (this.closeTimeout = setTimeout(function () {
          e.close({ message: e.message, type: 'life-end' })
        }, this.message.life))
    }, 'mounted'),
    beforeUnmount: t(function () {
      this.clearCloseTimeout()
    }, 'beforeUnmount'),
    methods: {
      close: t(function (e) {
        this.$emit('close', e)
      }, 'close'),
      onCloseClick: t(function () {
        this.clearCloseTimeout(),
          this.close({ message: this.message, type: 'close' })
      }, 'onCloseClick'),
      clearCloseTimeout: t(function () {
        this.closeTimeout &&
          (clearTimeout(this.closeTimeout), (this.closeTimeout = null))
      }, 'clearCloseTimeout')
    },
    computed: {
      iconComponent: t(function () {
        return {
          info: !this.infoIcon && Bo,
          success: !this.successIcon && Ke,
          warn: !this.warnIcon && So,
          error: !this.errorIcon && Fe
        }[this.message.severity]
      }, 'iconComponent'),
      closeAriaLabel: t(function () {
        return this.$primevue.config.locale.aria
          ? this.$primevue.config.locale.aria.close
          : void 0
      }, 'closeAriaLabel')
    },
    components: {
      TimesIcon: Re,
      InfoCircleIcon: Bo,
      CheckIcon: Ke,
      ExclamationTriangleIcon: So,
      TimesCircleIcon: Fe
    },
    directives: { ripple: L }
  }
function To(e) {
  return (To =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        })(e)
}
function Mo(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    t &&
      (o = o.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      n.push.apply(n, o)
  }
  return n
}
function No(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? Mo(Object(n), !0).forEach(function (t) {
          $o(e, t, n[t])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Mo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
  }
  return e
}
function $o(e, t, n) {
  return (
    (t = Ao(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  )
}
function Ao(e) {
  var t = Do(e, 'string')
  return 'symbol' == To(t) ? t : t + ''
}
function Do(e, t) {
  if ('object' != To(e) || !e) return e
  var n = e[Symbol.toPrimitive]
  if (void 0 !== n) {
    var o = n.call(e, t || 'default')
    if ('object' != To(o)) return o
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return ('string' === t ? String : Number)(e)
}
t(To, '_typeof$1'),
  t(Mo, 'ownKeys$1'),
  t(No, '_objectSpread$1'),
  t($o, '_defineProperty$1'),
  t(Ao, '_toPropertyKey$1'),
  t(Do, '_toPrimitive$1')
var _o = ['aria-label']
function zo(e, t, n, o, i, a) {
  var r = Vue.resolveDirective('ripple')
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps(
        {
          class: [e.cx('message'), n.message.styleClass],
          role: 'alert',
          'aria-live': 'assertive',
          'aria-atomic': 'true'
        },
        e.ptm('message')
      ),
      [
        n.templates.container
          ? (Vue.openBlock(),
            Vue.createBlock(
              Vue.resolveDynamicComponent(n.templates.container),
              { key: 0, message: n.message, closeCallback: a.onCloseClick },
              null,
              8,
              ['message', 'closeCallback']
            ))
          : (Vue.openBlock(),
            Vue.createElementBlock(
              'div',
              Vue.mergeProps(
                {
                  key: 1,
                  class: [e.cx('messageContent'), n.message.contentStyleClass]
                },
                e.ptm('messageContent')
              ),
              [
                n.templates.message
                  ? (Vue.openBlock(),
                    Vue.createBlock(
                      Vue.resolveDynamicComponent(n.templates.message),
                      { key: 1, message: n.message },
                      null,
                      8,
                      ['message']
                    ))
                  : (Vue.openBlock(),
                    Vue.createElementBlock(
                      Vue.Fragment,
                      { key: 0 },
                      [
                        (Vue.openBlock(),
                        Vue.createBlock(
                          Vue.resolveDynamicComponent(
                            n.templates.messageicon
                              ? n.templates.messageicon
                              : n.templates.icon
                                ? n.templates.icon
                                : a.iconComponent && a.iconComponent.name
                                  ? a.iconComponent
                                  : 'span'
                          ),
                          Vue.mergeProps(
                            { class: e.cx('messageIcon') },
                            e.ptm('messageIcon')
                          ),
                          null,
                          16,
                          ['class']
                        )),
                        Vue.createElementVNode(
                          'div',
                          Vue.mergeProps(
                            { class: e.cx('messageText') },
                            e.ptm('messageText')
                          ),
                          [
                            Vue.createElementVNode(
                              'span',
                              Vue.mergeProps(
                                { class: e.cx('summary') },
                                e.ptm('summary')
                              ),
                              Vue.toDisplayString(n.message.summary),
                              17
                            ),
                            Vue.createElementVNode(
                              'div',
                              Vue.mergeProps(
                                { class: e.cx('detail') },
                                e.ptm('detail')
                              ),
                              Vue.toDisplayString(n.message.detail),
                              17
                            )
                          ],
                          16
                        )
                      ],
                      64
                    )),
                !1 !== n.message.closable
                  ? (Vue.openBlock(),
                    Vue.createElementBlock(
                      'div',
                      Vue.normalizeProps(
                        Vue.mergeProps({ key: 2 }, e.ptm('buttonContainer'))
                      ),
                      [
                        Vue.withDirectives(
                          (Vue.openBlock(),
                          Vue.createElementBlock(
                            'button',
                            Vue.mergeProps(
                              {
                                class: e.cx('closeButton'),
                                type: 'button',
                                'aria-label': a.closeAriaLabel,
                                onClick:
                                  t[0] ||
                                  (t[0] = function () {
                                    return (
                                      a.onCloseClick &&
                                      a.onCloseClick.apply(a, arguments)
                                    )
                                  }),
                                autofocus: ''
                              },
                              No(
                                No({}, n.closeButtonProps),
                                e.ptm('closeButton')
                              )
                            ),
                            [
                              (Vue.openBlock(),
                              Vue.createBlock(
                                Vue.resolveDynamicComponent(
                                  n.templates.closeicon || 'TimesIcon'
                                ),
                                Vue.mergeProps(
                                  { class: [e.cx('closeIcon'), n.closeIcon] },
                                  e.ptm('closeIcon')
                                ),
                                null,
                                16,
                                ['class']
                              ))
                            ],
                            16,
                            _o
                          )),
                          [[r]]
                        )
                      ],
                      16
                    ))
                  : Vue.createCommentVNode('', !0)
              ],
              16
            ))
      ],
      16
    )
  )
}
function Ko(e) {
  return Uo(e) || Go(e) || Ro(e) || Fo()
}
function Fo() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}
function Ro(e, t) {
  if (e) {
    if ('string' == typeof e) return jo(e, t)
    var n = {}.toString.call(e).slice(8, -1)
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? jo(e, t)
          : void 0
    )
  }
}
function Go(e) {
  if (
    ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e['@@iterator']
  )
    return Array.from(e)
}
function Uo(e) {
  if (Array.isArray(e)) return jo(e)
}
function jo(e, t) {
  ;(null == t || t > e.length) && (t = e.length)
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n]
  return o
}
t(zo, 'render$1$2'),
  (Oo.render = zo),
  t(Ko, '_toConsumableArray'),
  t(Fo, '_nonIterableSpread'),
  t(Ro, '_unsupportedIterableToArray'),
  t(Go, '_iterableToArray'),
  t(Uo, '_arrayWithoutHoles'),
  t(jo, '_arrayLikeToArray')
var Ho = 0,
  Wo = {
    name: 'Toast',
    extends: Lo,
    inheritAttrs: !1,
    emits: ['close', 'life-end'],
    data: t(function () {
      return { messages: [] }
    }, 'data'),
    styleElement: null,
    mounted: t(function () {
      Ge.on('add', this.onAdd),
        Ge.on('remove', this.onRemove),
        Ge.on('remove-group', this.onRemoveGroup),
        Ge.on('remove-all-groups', this.onRemoveAllGroups),
        this.breakpoints && this.createStyle()
    }, 'mounted'),
    beforeUnmount: t(function () {
      this.destroyStyle(),
        this.$refs.container &&
          this.autoZIndex &&
          G.clear(this.$refs.container),
        Ge.off('add', this.onAdd),
        Ge.off('remove', this.onRemove),
        Ge.off('remove-group', this.onRemoveGroup),
        Ge.off('remove-all-groups', this.onRemoveAllGroups)
    }, 'beforeUnmount'),
    methods: {
      add: t(function (e) {
        null == e.id && (e.id = Ho++),
          (this.messages = [].concat(Ko(this.messages), [e]))
      }, 'add'),
      remove: t(function (e) {
        var t = this.messages.findIndex(function (t) {
          return t.id === e.message.id
        })
        ;-1 !== t &&
          (this.messages.splice(t, 1),
          this.$emit(e.type, { message: e.message }))
      }, 'remove'),
      onAdd: t(function (e) {
        this.group == e.group && this.add(e)
      }, 'onAdd'),
      onRemove: t(function (e) {
        this.remove({ message: e, type: 'close' })
      }, 'onRemove'),
      onRemoveGroup: t(function (e) {
        this.group === e && (this.messages = [])
      }, 'onRemoveGroup'),
      onRemoveAllGroups: t(function () {
        this.messages = []
      }, 'onRemoveAllGroups'),
      onEnter: t(function () {
        this.autoZIndex &&
          G.set(
            'modal',
            this.$refs.container,
            this.baseZIndex || this.$primevue.config.zIndex.modal
          )
      }, 'onEnter'),
      onLeave: t(function () {
        var e = this
        this.$refs.container &&
          this.autoZIndex &&
          H(this.messages) &&
          setTimeout(function () {
            G.clear(e.$refs.container)
          }, 200)
      }, 'onLeave'),
      createStyle: t(function () {
        if (!this.styleElement && !this.isUnstyled) {
          var e
          ;(this.styleElement = document.createElement('style')),
            (this.styleElement.type = 'text/css'),
            Ue(
              this.styleElement,
              'nonce',
              null === (e = this.$primevue) ||
                void 0 === e ||
                null === (e = e.config) ||
                void 0 === e ||
                null === (e = e.csp) ||
                void 0 === e
                ? void 0
                : e.nonce
            ),
            document.head.appendChild(this.styleElement)
          var t = ''
          for (var n in this.breakpoints) {
            var o = ''
            for (var i in this.breakpoints[n])
              o += i + ':' + this.breakpoints[n][i] + '!important;'
            t += '\n                        @media screen and (max-width: '
              .concat(n, ') {\n                            .p-toast[')
              .concat(
                this.$attrSelector,
                '] {\n                                '
              )
              .concat(
                o,
                '\n                            }\n                        }\n                    '
              )
          }
          this.styleElement.innerHTML = t
        }
      }, 'createStyle'),
      destroyStyle: t(function () {
        this.styleElement &&
          (document.head.removeChild(this.styleElement),
          (this.styleElement = null))
      }, 'destroyStyle')
    },
    components: { ToastMessage: Oo, Portal: te }
  }
function qo(e) {
  return (qo =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        })(e)
}
function Zo(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    t &&
      (o = o.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      n.push.apply(n, o)
  }
  return n
}
function Qo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? Zo(Object(n), !0).forEach(function (t) {
          Xo(e, t, n[t])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Zo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
  }
  return e
}
function Xo(e, t, n) {
  return (
    (t = Yo(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  )
}
function Yo(e) {
  var t = Jo(e, 'string')
  return 'symbol' == qo(t) ? t : t + ''
}
function Jo(e, t) {
  if ('object' != qo(e) || !e) return e
  var n = e[Symbol.toPrimitive]
  if (void 0 !== n) {
    var o = n.call(e, t || 'default')
    if ('object' != qo(o)) return o
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return ('string' === t ? String : Number)(e)
}
function ei(e, t, n, o, i, a) {
  var r = Vue.resolveComponent('ToastMessage'),
    s = Vue.resolveComponent('Portal')
  return (
    Vue.openBlock(),
    Vue.createBlock(s, null, {
      default: Vue.withCtx(function () {
        return [
          Vue.createElementVNode(
            'div',
            Vue.mergeProps(
              {
                ref: 'container',
                class: e.cx('root'),
                style: e.sx('root', !0, { position: e.position })
              },
              e.ptmi('root')
            ),
            [
              Vue.createVNode(
                Vue.TransitionGroup,
                Vue.mergeProps(
                  {
                    name: 'p-toast-message',
                    tag: 'div',
                    onEnter: a.onEnter,
                    onLeave: a.onLeave
                  },
                  Qo({}, e.ptm('transition'))
                ),
                {
                  default: Vue.withCtx(function () {
                    return [
                      (Vue.openBlock(!0),
                      Vue.createElementBlock(
                        Vue.Fragment,
                        null,
                        Vue.renderList(i.messages, function (n) {
                          return (
                            Vue.openBlock(),
                            Vue.createBlock(
                              r,
                              {
                                key: n.id,
                                message: n,
                                templates: e.$slots,
                                closeIcon: e.closeIcon,
                                infoIcon: e.infoIcon,
                                warnIcon: e.warnIcon,
                                errorIcon: e.errorIcon,
                                successIcon: e.successIcon,
                                closeButtonProps: e.closeButtonProps,
                                unstyled: e.unstyled,
                                onClose:
                                  t[0] ||
                                  (t[0] = function (e) {
                                    return a.remove(e)
                                  }),
                                pt: e.pt
                              },
                              null,
                              8,
                              [
                                'message',
                                'templates',
                                'closeIcon',
                                'infoIcon',
                                'warnIcon',
                                'errorIcon',
                                'successIcon',
                                'closeButtonProps',
                                'unstyled',
                                'pt'
                              ]
                            )
                          )
                        }),
                        128
                      ))
                    ]
                  }),
                  _: 1
                },
                16,
                ['onEnter', 'onLeave']
              )
            ],
            16
          )
        ]
      }),
      _: 1
    })
  )
}
t(qo, '_typeof$2'),
  t(Zo, 'ownKeys$2'),
  t(Qo, '_objectSpread$2'),
  t(Xo, '_defineProperty$2'),
  t(Yo, '_toPropertyKey$2'),
  t(Jo, '_toPrimitive$2'),
  t(ei, 'render$5'),
  (Wo.render = ei)
const ti = Vue.defineComponent({
    __name: 'GlobalToast',
    setup(e) {
      const n = je(),
        i = He(),
        a = o()
      function r() {
        const e = document.getElementById('dynamic-toast-style') || s(),
          t = document
            .querySelector('.graph-canvas-container')
            .getBoundingClientRect()
        e.textContent = `\n    .p-toast.p-component.p-toast-top-right {\n      top: ${t.top + 20}px !important;\n      right: ${window.innerWidth - (t.left + t.width) + 20}px !important;\n    }\n  `
      }
      function s() {
        const e = document.createElement('style')
        return (e.id = 'dynamic-toast-style'), document.head.appendChild(e), e
      }
      return (
        Vue.watch(
          () => i.messagesToAdd,
          (e) => {
            0 !== e.length &&
              (e.forEach((e) => {
                n.add(e)
              }),
              (i.messagesToAdd = []))
          },
          { deep: !0 }
        ),
        Vue.watch(
          () => i.messagesToRemove,
          (e) => {
            0 !== e.length &&
              (e.forEach((e) => {
                n.remove(e)
              }),
              (i.messagesToRemove = []))
          },
          { deep: !0 }
        ),
        Vue.watch(
          () => i.removeAllRequested,
          (e) => {
            e && (n.removeAllGroups(), (i.removeAllRequested = !1))
          }
        ),
        t(r, 'updateToastPosition'),
        t(s, 'createStyleElement'),
        Vue.watch(
          () => a.get('Comfy.UseNewMenu'),
          () => Vue.nextTick(r),
          { immediate: !0 }
        ),
        Vue.watch(
          () => a.get('Comfy.Sidebar.Location'),
          () => Vue.nextTick(r),
          { immediate: !0 }
        ),
        (e, t) => (Vue.openBlock(), Vue.createBlock(Vue.unref(Wo)))
      )
    }
  }),
  ni = Vue.defineComponent({
    __name: 'UnloadWindowConfirmDialog',
    setup(e) {
      const n = o(),
        i = t((e) => {
          if (n.get('Comfy.Window.UnloadConfirmation'))
            return e.preventDefault(), !0
        }, 'handleBeforeUnload')
      return (
        Vue.onMounted(() => {
          window.addEventListener('beforeunload', i)
        }),
        Vue.onBeforeUnmount(() => {
          window.removeEventListener('beforeunload', i)
        }),
        (e, t) => (Vue.openBlock(), Vue.createElementBlock('div'))
      )
    }
  }),
  oi = 'ComfyUI',
  ii = Vue.defineComponent({
    __name: 'BrowserTabTitle',
    setup(e) {
      const t = We(),
        n = Vue.computed(() => (t.isIdle ? '' : `[${t.executionProgress}%]`)),
        i = o(),
        a = Vue.computed(() => 'Disabled' !== i.get('Comfy.UseNewMenu')),
        r = Se(),
        s = Vue.computed(() =>
          r.activeWorkflow?.isModified || !r.activeWorkflow?.isPersisted
            ? ' *'
            : ''
        ),
        l = Vue.computed(() => {
          const e = r.activeWorkflow?.filename
          return e ? s.value + e + ' - ComfyUI' : oi
        }),
        u = Vue.computed(() =>
          t.executingNode && t.executingNodeProgress
            ? `${n.value}[${t.executingNodeProgress}%] ${t.executingNode.type}`
            : ''
        ),
        c = Vue.computed(() => n.value + (a.value ? l.value : oi)),
        d = Vue.computed(() => u.value || c.value)
      return qe(d), (e, t) => (Vue.openBlock(), Vue.createElementBlock('div'))
    }
  }),
  ai = ['onContextmenu', 'onMouseup'],
  ri = { class: 'workflow-label text-sm max-w-[150px] truncate inline-block' },
  si = { class: 'relative' },
  li = { key: 0, class: 'status-indicator' },
  ui = u(
    Vue.defineComponent({
      __name: 'WorkflowTabs',
      props: { class: {} },
      setup(e) {
        const n = e,
          { t: o } = VueI18n.useI18n(),
          i = g(),
          a = Se(),
          r = Vue.ref(null),
          s = Vue.ref(),
          l = t((e, t) => {
            ;(r.value = t), s.value.show(e)
          }, 'showContextMenu'),
          u = t((e) => ({ value: e.path, workflow: e }), 'workflowToOption'),
          c = Vue.computed(() => a.openWorkflows.map(u)),
          d = Vue.computed(() =>
            a.activeWorkflow ? u(a.activeWorkflow) : null
          ),
          m = t((e) => {
            e && d.value?.value !== e.value && _e.openWorkflow(e.workflow)
          }, 'onWorkflowChange'),
          f = t(async (e) => {
            for (const t of e)
              if (
                !(await _e.closeWorkflow(t.workflow, {
                  warnIfUnsaved: !i.shiftDown
                }))
              )
                break
          }, 'closeWorkflows'),
          h = t((e) => {
            f([e])
          }, 'onCloseWorkflow'),
          b = Vue.computed(() => {
            const e = r.value
            if (!e) return []
            const n = c.value.findIndex((t) => t.workflow === e.workflow)
            return [
              {
                label: o('tabMenu.duplicateTab'),
                command: t(() => {
                  _e.duplicateWorkflow(e.workflow)
                }, 'command')
              },
              { separator: !0 },
              {
                label: o('tabMenu.closeTab'),
                command: t(() => h(e), 'command')
              },
              {
                label: o('tabMenu.closeTabsToLeft'),
                command: t(() => f(c.value.slice(0, n)), 'command'),
                disabled: n <= 0
              },
              {
                label: o('tabMenu.closeTabsToRight'),
                command: t(() => f(c.value.slice(n + 1)), 'command'),
                disabled: n === c.value.length - 1
              },
              {
                label: o('tabMenu.closeOtherTabs'),
                command: t(
                  () => f([...c.value.slice(n + 1), ...c.value.slice(0, n)]),
                  'command'
                ),
                disabled: c.value.length <= 1
              }
            ]
          })
        return (e, o) => {
          const a = Vue.resolveDirective('tooltip')
          return (
            Vue.openBlock(),
            Vue.createElementBlock(
              Vue.Fragment,
              null,
              [
                Vue.createVNode(
                  Vue.unref(Ze),
                  {
                    class: Vue.normalizeClass([
                      'workflow-tabs bg-transparent flex flex-wrap',
                      n.class
                    ]),
                    modelValue: d.value,
                    'onUpdate:modelValue': m,
                    options: c.value,
                    optionLabel: 'label',
                    dataKey: 'value'
                  },
                  {
                    option: Vue.withCtx(({ option: e }) => [
                      Vue.createElementVNode(
                        'div',
                        {
                          class: 'flex p-2 gap-2',
                          onContextmenu: t((t) => l(t, e), 'onContextmenu'),
                          onMouseup: Vue.withModifiers((t) => h(e), ['middle'])
                        },
                        [
                          Vue.withDirectives(
                            (Vue.openBlock(),
                            Vue.createElementBlock('span', ri, [
                              Vue.createTextVNode(
                                Vue.toDisplayString(e.workflow.filename),
                                1
                              )
                            ])),
                            [[a, e.workflow.key, void 0, { bottom: !0 }]]
                          ),
                          Vue.createElementVNode('div', si, [
                            Vue.unref(i).shiftDown ||
                            (!e.workflow.isModified && e.workflow.isPersisted)
                              ? Vue.createCommentVNode('', !0)
                              : (Vue.openBlock(),
                                Vue.createElementBlock('span', li, '•')),
                            Vue.createVNode(
                              Vue.unref(p),
                              {
                                class: 'close-button p-0 w-auto',
                                icon: 'pi pi-times',
                                text: '',
                                severity: 'secondary',
                                size: 'small',
                                onClick: Vue.withModifiers(
                                  (t) => h(e),
                                  ['stop']
                                )
                              },
                              null,
                              8,
                              ['onClick']
                            )
                          ])
                        ],
                        40,
                        ai
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['class', 'modelValue', 'options']
                ),
                Vue.createVNode(
                  Vue.unref(Qe),
                  { ref_key: 'menu', ref: s, model: b.value },
                  null,
                  8,
                  ['model']
                )
              ],
              64
            )
          )
        }
      }
    }),
    [['__scopeId', 'data-v-012040ee']]
  )
var ci = t(function (e) {
    var t = e.dt
    return '\n.p-menubar {\n    display: flex;\n    align-items: center;\n    background: '
      .concat(t('menubar.background'), ';\n    border: 1px solid ')
      .concat(t('menubar.border.color'), ';\n    border-radius: ')
      .concat(t('menubar.border.radius'), ';\n    color: ')
      .concat(t('menubar.color'), ';\n    padding: ')
      .concat(t('menubar.padding'), ';\n    gap: ')
      .concat(
        t('menubar.gap'),
        ';\n}\n\n.p-menubar-start,\n.p-megamenu-end {\n    display: flex;\n    align-items: center;\n}\n\n.p-menubar-root-list,\n.p-menubar-submenu {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    outline: 0 none;\n}\n\n.p-menubar-root-list {\n    align-items: center;\n    flex-wrap: wrap;\n    gap: '
      )
      .concat(
        t('menubar.gap'),
        ';\n}\n\n.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {\n    border-radius: '
      )
      .concat(
        t('menubar.base.item.border.radius'),
        ';\n}\n\n.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n    padding: '
      )
      .concat(
        t('menubar.base.item.padding'),
        ';\n}\n\n.p-menubar-item-content {\n    transition: background '
      )
      .concat(t('menubar.transition.duration'), ', color ')
      .concat(t('menubar.transition.duration'), ';\n    border-radius: ')
      .concat(t('menubar.item.border.radius'), ';\n    color: ')
      .concat(
        t('menubar.item.color'),
        ';\n}\n\n.p-menubar-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: '
      )
      .concat(t('menubar.item.padding'), ';\n    gap: ')
      .concat(
        t('menubar.item.gap'),
        ';\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-menubar-item-label {\n    line-height: 1;\n}\n\n.p-menubar-item-icon {\n    color: '
      )
      .concat(
        t('menubar.item.icon.color'),
        ';\n}\n\n.p-menubar-submenu-icon {\n    color: '
      )
      .concat(
        t('menubar.submenu.icon.color'),
        ';\n    margin-left: auto;\n    font-size: '
      )
      .concat(t('menubar.submenu.icon.size'), ';\n    width: ')
      .concat(t('menubar.submenu.icon.size'), ';\n    height: ')
      .concat(
        t('menubar.submenu.icon.size'),
        ';\n}\n\n.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content {\n    color: '
      )
      .concat(t('menubar.item.focus.color'), ';\n    background: ')
      .concat(
        t('menubar.item.focus.background'),
        ';\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {\n    color: '
      )
      .concat(
        t('menubar.item.icon.focus.color'),
        ';\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {\n    color: '
      )
      .concat(
        t('menubar.submenu.icon.focus.color'),
        ';\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {\n    color: '
      )
      .concat(t('menubar.item.focus.color'), ';\n    background: ')
      .concat(
        t('menubar.item.focus.background'),
        ';\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {\n    color: '
      )
      .concat(
        t('menubar.item.icon.focus.color'),
        ';\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {\n    color: '
      )
      .concat(
        t('menubar.submenu.icon.focus.color'),
        ';\n}\n\n.p-menubar-item-active > .p-menubar-item-content {\n    color: '
      )
      .concat(t('menubar.item.active.color'), ';\n    background: ')
      .concat(
        t('menubar.item.active.background'),
        ';\n}\n\n.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {\n    color: '
      )
      .concat(
        t('menubar.item.icon.active.color'),
        ';\n}\n\n.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    color: '
      )
      .concat(
        t('menubar.submenu.icon.active.color'),
        ';\n}\n\n.p-menubar-submenu {\n    display: none;\n    position: absolute;\n    min-width: 12.5rem;\n    z-index: 1;\n    background: '
      )
      .concat(t('menubar.submenu.background'), ';\n    border: 1px solid ')
      .concat(t('menubar.submenu.border.color'), ';\n    border-radius: ')
      .concat(t('menubar.submenu.border.radius'), ';\n    box-shadow: ')
      .concat(t('menubar.submenu.shadow'), ';\n    color: ')
      .concat(
        t('menubar.submenu.color'),
        ';\n    flex-direction: column;\n    padding: '
      )
      .concat(t('menubar.submenu.padding'), ';\n    gap: ')
      .concat(
        t('menubar.submenu.gap'),
        ';\n}\n\n.p-menubar-submenu .p-menubar-separator {\n    border-block-start: 1px solid '
      )
      .concat(
        t('menubar.separator.border.color'),
        ';\n}\n\n.p-menubar-submenu .p-menubar-item {\n    position: relative;\n}\n\n.p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n\n.p-menubar-end {\n    margin-left: auto;\n    align-self: center;\n}\n\n.p-menubar-end:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-menubar-button {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    width: '
      )
      .concat(t('menubar.mobile.button.size'), ';\n    height: ')
      .concat(
        t('menubar.mobile.button.size'),
        ';\n    position: relative;\n    color: '
      )
      .concat(
        t('menubar.mobile.button.color'),
        ';\n    border: 0 none;\n    background: transparent;\n    border-radius: '
      )
      .concat(
        t('menubar.mobile.button.border.radius'),
        ';\n    transition: background '
      )
      .concat(t('menubar.transition.duration'), ', color ')
      .concat(t('menubar.transition.duration'), ', outline-color ')
      .concat(
        t('menubar.transition.duration'),
        ';\n    outline-color: transparent;\n}\n\n.p-menubar-button:hover {\n    color: '
      )
      .concat(t('menubar.mobile.button.hover.color'), ';\n    background: ')
      .concat(
        t('menubar.mobile.button.hover.background'),
        ';\n}\n\n.p-menubar-button:focus-visible {\n    box-shadow: '
      )
      .concat(t('menubar.mobile.button.focus.ring.shadow'), ';\n    outline: ')
      .concat(t('menubar.mobile.button.focus.ring.width'), ' ')
      .concat(t('menubar.mobile.button.focus.ring.style'), ' ')
      .concat(
        t('menubar.mobile.button.focus.ring.color'),
        ';\n    outline-offset: '
      )
      .concat(
        t('menubar.mobile.button.focus.ring.offset'),
        ';\n}\n\n.p-menubar-mobile {\n    position: relative;\n}\n\n.p-menubar-mobile .p-menubar-button {\n    display: flex;\n}\n\n.p-menubar-mobile .p-menubar-root-list {\n    position: absolute;\n    display: none;\n    width: 100%;\n    flex-direction: column;\n    top: 100%;\n    left: 0;\n    z-index: 1;\n    padding: '
      )
      .concat(t('menubar.submenu.padding'), ';\n    background: ')
      .concat(t('menubar.submenu.background'), ';\n    border: 1px solid ')
      .concat(t('menubar.submenu.border.color'), ';\n    box-shadow: ')
      .concat(t('menubar.submenu.shadow'), ';\n    border-radius: ')
      .concat(t('menubar.submenu.border.radius'), ';\n    gap: ')
      .concat(
        t('menubar.submenu.gap'),
        ';\n}\n\n.p-menubar-mobile .p-menubar-root-list:dir(rtl) {\n    left: auto;\n    right: 0;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n    padding: '
      )
      .concat(
        t('menubar.item.padding'),
        ';\n}\n\n.p-menubar-mobile-active .p-menubar-root-list {\n    display: flex;\n}\n\n.p-menubar-mobile .p-menubar-root-list .p-menubar-item {\n    width: 100%;\n    position: static;\n}\n\n.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {\n    border-block-start: 1px solid '
      )
      .concat(
        t('menubar.separator.border.color'),
        ';\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {\n    margin-left: auto;\n    transition: transform 0.2s;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),\n.p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    transform: rotate(-180deg);\n}\n\n.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n}\n\n.p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    transform: rotate(-90deg);\n}\n\n.p-menubar-mobile .p-menubar-submenu {\n    width: 100%;\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n    padding-inline-start: '
      )
      .concat(
        t('menubar.submenu.mobile.indent'),
        ';\n    padding-inline-end: 0;\n}\n'
      )
  }, 'theme'),
  di = {
    submenu: t(function (e) {
      var t = e.instance,
        n = e.processedItem
      return { display: t.isItemActive(n) ? 'flex' : 'none' }
    }, 'submenu')
  },
  pi = {
    root: t(function (e) {
      var t = e.instance
      return [
        'p-menubar p-component',
        {
          'p-menubar-mobile': t.queryMatches,
          'p-menubar-mobile-active': t.mobileActive
        }
      ]
    }, 'root'),
    start: 'p-menubar-start',
    button: 'p-menubar-button',
    rootList: 'p-menubar-root-list',
    item: t(function (e) {
      var t = e.instance,
        n = e.processedItem
      return [
        'p-menubar-item',
        {
          'p-menubar-item-active': t.isItemActive(n),
          'p-focus': t.isItemFocused(n),
          'p-disabled': t.isItemDisabled(n)
        }
      ]
    }, 'item'),
    itemContent: 'p-menubar-item-content',
    itemLink: 'p-menubar-item-link',
    itemIcon: 'p-menubar-item-icon',
    itemLabel: 'p-menubar-item-label',
    submenuIcon: 'p-menubar-submenu-icon',
    submenu: 'p-menubar-submenu',
    separator: 'p-menubar-separator',
    end: 'p-menubar-end'
  },
  mi = c.extend({ name: 'menubar', theme: ci, classes: pi, inlineStyles: di }),
  fi = {
    name: 'BaseMenubar',
    extends: V,
    props: {
      model: { type: Array, default: null },
      buttonProps: { type: null, default: null },
      breakpoint: { type: String, default: '960px' },
      ariaLabelledby: { type: String, default: null },
      ariaLabel: { type: String, default: null }
    },
    style: mi,
    provide: t(function () {
      return { $pcMenubar: this, $parentInstance: this }
    }, 'provide')
  },
  hi = {
    name: 'MenubarSub',
    hostName: 'Menubar',
    extends: V,
    emits: ['item-mouseenter', 'item-click', 'item-mousemove'],
    props: {
      items: { type: Array, default: null },
      root: { type: Boolean, default: !1 },
      popup: { type: Boolean, default: !1 },
      mobileActive: { type: Boolean, default: !1 },
      templates: { type: Object, default: null },
      level: { type: Number, default: 0 },
      menuId: { type: String, default: null },
      focusedItemId: { type: String, default: null },
      activeItemPath: { type: Object, default: null }
    },
    list: null,
    methods: {
      getItemId: t(function (e) {
        return ''.concat(this.menuId, '_').concat(e.key)
      }, 'getItemId'),
      getItemKey: t(function (e) {
        return this.getItemId(e)
      }, 'getItemKey'),
      getItemProp: t(function (e, t, n) {
        return e && e.item ? Xe(e.item[t], n) : void 0
      }, 'getItemProp'),
      getItemLabel: t(function (e) {
        return this.getItemProp(e, 'label')
      }, 'getItemLabel'),
      getItemLabelId: t(function (e) {
        return ''.concat(this.menuId, '_').concat(e.key, '_label')
      }, 'getItemLabelId'),
      getPTOptions: t(function (e, t, n) {
        return this.ptm(n, {
          context: {
            item: e.item,
            index: t,
            active: this.isItemActive(e),
            focused: this.isItemFocused(e),
            disabled: this.isItemDisabled(e),
            level: this.level
          }
        })
      }, 'getPTOptions'),
      isItemActive: t(function (e) {
        return this.activeItemPath.some(function (t) {
          return t.key === e.key
        })
      }, 'isItemActive'),
      isItemVisible: t(function (e) {
        return !1 !== this.getItemProp(e, 'visible')
      }, 'isItemVisible'),
      isItemDisabled: t(function (e) {
        return this.getItemProp(e, 'disabled')
      }, 'isItemDisabled'),
      isItemFocused: t(function (e) {
        return this.focusedItemId === this.getItemId(e)
      }, 'isItemFocused'),
      isItemGroup: t(function (e) {
        return K(e.items)
      }, 'isItemGroup'),
      onItemClick: t(function (e, t) {
        this.getItemProp(t, 'command', { originalEvent: e, item: t.item }),
          this.$emit('item-click', {
            originalEvent: e,
            processedItem: t,
            isFocus: !0
          })
      }, 'onItemClick'),
      onItemMouseEnter: t(function (e, t) {
        this.$emit('item-mouseenter', { originalEvent: e, processedItem: t })
      }, 'onItemMouseEnter'),
      onItemMouseMove: t(function (e, t) {
        this.$emit('item-mousemove', { originalEvent: e, processedItem: t })
      }, 'onItemMouseMove'),
      getAriaPosInset: t(function (e) {
        return e - this.calculateAriaSetSize.slice(0, e).length + 1
      }, 'getAriaPosInset'),
      getMenuItemProps: t(function (e, t) {
        return {
          action: Vue.mergeProps(
            { class: this.cx('itemLink'), tabindex: -1 },
            this.getPTOptions(e, t, 'itemLink')
          ),
          icon: Vue.mergeProps(
            { class: [this.cx('itemIcon'), this.getItemProp(e, 'icon')] },
            this.getPTOptions(e, t, 'itemIcon')
          ),
          label: Vue.mergeProps(
            { class: this.cx('itemLabel') },
            this.getPTOptions(e, t, 'itemLabel')
          ),
          submenuicon: Vue.mergeProps(
            { class: this.cx('submenuIcon') },
            this.getPTOptions(e, t, 'submenuIcon')
          )
        }
      }, 'getMenuItemProps')
    },
    computed: {
      calculateAriaSetSize: t(function () {
        var e = this
        return this.items.filter(function (t) {
          return e.isItemVisible(t) && e.getItemProp(t, 'separator')
        })
      }, 'calculateAriaSetSize'),
      getAriaSetSize: t(function () {
        var e = this
        return this.items.filter(function (t) {
          return e.isItemVisible(t) && !e.getItemProp(t, 'separator')
        }).length
      }, 'getAriaSetSize')
    },
    components: { AngleRightIcon: Ye, AngleDownIcon: Je },
    directives: { ripple: L }
  },
  bi = [
    'id',
    'aria-label',
    'aria-disabled',
    'aria-expanded',
    'aria-haspopup',
    'aria-level',
    'aria-setsize',
    'aria-posinset',
    'data-p-active',
    'data-p-focused',
    'data-p-disabled'
  ],
  vi = ['onClick', 'onMouseenter', 'onMousemove'],
  gi = ['href', 'target'],
  yi = ['id'],
  Vi = ['id']
function Ii(e, n, o, i, a, r) {
  var s = Vue.resolveComponent('MenubarSub', !0),
    l = Vue.resolveDirective('ripple')
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'ul',
      Vue.mergeProps(
        { class: 0 === o.level ? e.cx('rootList') : e.cx('submenu') },
        0 === o.level ? e.ptm('rootList') : e.ptm('submenu')
      ),
      [
        (Vue.openBlock(!0),
        Vue.createElementBlock(
          Vue.Fragment,
          null,
          Vue.renderList(o.items, function (i, a) {
            return (
              Vue.openBlock(),
              Vue.createElementBlock(
                Vue.Fragment,
                { key: r.getItemKey(i) },
                [
                  r.isItemVisible(i) && !r.getItemProp(i, 'separator')
                    ? (Vue.openBlock(),
                      Vue.createElementBlock(
                        'li',
                        Vue.mergeProps(
                          {
                            key: 0,
                            id: r.getItemId(i),
                            style: r.getItemProp(i, 'style'),
                            class: [
                              e.cx('item', { processedItem: i }),
                              r.getItemProp(i, 'class')
                            ],
                            role: 'menuitem',
                            'aria-label': r.getItemLabel(i),
                            'aria-disabled': r.isItemDisabled(i) || void 0,
                            'aria-expanded': r.isItemGroup(i)
                              ? r.isItemActive(i)
                              : void 0,
                            'aria-haspopup':
                              r.isItemGroup(i) && !r.getItemProp(i, 'to')
                                ? 'menu'
                                : void 0,
                            'aria-level': o.level + 1,
                            'aria-setsize': r.getAriaSetSize,
                            'aria-posinset': r.getAriaPosInset(a),
                            ref_for: !0
                          },
                          r.getPTOptions(i, a, 'item'),
                          {
                            'data-p-active': r.isItemActive(i),
                            'data-p-focused': r.isItemFocused(i),
                            'data-p-disabled': r.isItemDisabled(i)
                          }
                        ),
                        [
                          Vue.createElementVNode(
                            'div',
                            Vue.mergeProps(
                              {
                                class: e.cx('itemContent'),
                                onClick: t(function (e) {
                                  return r.onItemClick(e, i)
                                }, 'onClick'),
                                onMouseenter: t(function (e) {
                                  return r.onItemMouseEnter(e, i)
                                }, 'onMouseenter'),
                                onMousemove: t(function (e) {
                                  return r.onItemMouseMove(e, i)
                                }, 'onMousemove'),
                                ref_for: !0
                              },
                              r.getPTOptions(i, a, 'itemContent')
                            ),
                            [
                              o.templates.item
                                ? (Vue.openBlock(),
                                  Vue.createBlock(
                                    Vue.resolveDynamicComponent(
                                      o.templates.item
                                    ),
                                    {
                                      key: 1,
                                      item: i.item,
                                      root: o.root,
                                      hasSubmenu: r.getItemProp(i, 'items'),
                                      label: r.getItemLabel(i),
                                      props: r.getMenuItemProps(i, a)
                                    },
                                    null,
                                    8,
                                    [
                                      'item',
                                      'root',
                                      'hasSubmenu',
                                      'label',
                                      'props'
                                    ]
                                  ))
                                : Vue.withDirectives(
                                    (Vue.openBlock(),
                                    Vue.createElementBlock(
                                      'a',
                                      Vue.mergeProps(
                                        {
                                          key: 0,
                                          href: r.getItemProp(i, 'url'),
                                          class: e.cx('itemLink'),
                                          target: r.getItemProp(i, 'target'),
                                          tabindex: '-1',
                                          ref_for: !0
                                        },
                                        r.getPTOptions(i, a, 'itemLink')
                                      ),
                                      [
                                        o.templates.itemicon
                                          ? (Vue.openBlock(),
                                            Vue.createBlock(
                                              Vue.resolveDynamicComponent(
                                                o.templates.itemicon
                                              ),
                                              {
                                                key: 0,
                                                item: i.item,
                                                class: Vue.normalizeClass(
                                                  e.cx('itemIcon')
                                                )
                                              },
                                              null,
                                              8,
                                              ['item', 'class']
                                            ))
                                          : r.getItemProp(i, 'icon')
                                            ? (Vue.openBlock(),
                                              Vue.createElementBlock(
                                                'span',
                                                Vue.mergeProps(
                                                  {
                                                    key: 1,
                                                    class: [
                                                      e.cx('itemIcon'),
                                                      r.getItemProp(i, 'icon')
                                                    ],
                                                    ref_for: !0
                                                  },
                                                  r.getPTOptions(
                                                    i,
                                                    a,
                                                    'itemIcon'
                                                  )
                                                ),
                                                null,
                                                16
                                              ))
                                            : Vue.createCommentVNode('', !0),
                                        Vue.createElementVNode(
                                          'span',
                                          Vue.mergeProps(
                                            {
                                              id: r.getItemLabelId(i),
                                              class: e.cx('itemLabel'),
                                              ref_for: !0
                                            },
                                            r.getPTOptions(i, a, 'itemLabel')
                                          ),
                                          Vue.toDisplayString(
                                            r.getItemLabel(i)
                                          ),
                                          17,
                                          yi
                                        ),
                                        r.getItemProp(i, 'items')
                                          ? (Vue.openBlock(),
                                            Vue.createElementBlock(
                                              Vue.Fragment,
                                              { key: 2 },
                                              [
                                                o.templates.submenuicon
                                                  ? (Vue.openBlock(),
                                                    Vue.createBlock(
                                                      Vue.resolveDynamicComponent(
                                                        o.templates.submenuicon
                                                      ),
                                                      {
                                                        key: 0,
                                                        root: o.root,
                                                        active:
                                                          r.isItemActive(i),
                                                        class:
                                                          Vue.normalizeClass(
                                                            e.cx('submenuIcon')
                                                          )
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        'root',
                                                        'active',
                                                        'class'
                                                      ]
                                                    ))
                                                  : (Vue.openBlock(),
                                                    Vue.createBlock(
                                                      Vue.resolveDynamicComponent(
                                                        o.root
                                                          ? 'AngleDownIcon'
                                                          : 'AngleRightIcon'
                                                      ),
                                                      Vue.mergeProps(
                                                        {
                                                          key: 1,
                                                          class:
                                                            e.cx('submenuIcon'),
                                                          ref_for: !0
                                                        },
                                                        r.getPTOptions(
                                                          i,
                                                          a,
                                                          'submenuIcon'
                                                        )
                                                      ),
                                                      null,
                                                      16,
                                                      ['class']
                                                    ))
                                              ],
                                              64
                                            ))
                                          : Vue.createCommentVNode('', !0)
                                      ],
                                      16,
                                      gi
                                    )),
                                    [[l]]
                                  )
                            ],
                            16,
                            vi
                          ),
                          r.isItemVisible(i) && r.isItemGroup(i)
                            ? (Vue.openBlock(),
                              Vue.createBlock(
                                s,
                                {
                                  key: 0,
                                  id: r.getItemId(i) + '_list',
                                  menuId: o.menuId,
                                  role: 'menu',
                                  style: Vue.normalizeStyle(
                                    e.sx('submenu', !0, { processedItem: i })
                                  ),
                                  focusedItemId: o.focusedItemId,
                                  items: i.items,
                                  mobileActive: o.mobileActive,
                                  activeItemPath: o.activeItemPath,
                                  templates: o.templates,
                                  level: o.level + 1,
                                  'aria-labelledby': r.getItemLabelId(i),
                                  pt: e.pt,
                                  unstyled: e.unstyled,
                                  onItemClick:
                                    n[0] ||
                                    (n[0] = function (t) {
                                      return e.$emit('item-click', t)
                                    }),
                                  onItemMouseenter:
                                    n[1] ||
                                    (n[1] = function (t) {
                                      return e.$emit('item-mouseenter', t)
                                    }),
                                  onItemMousemove:
                                    n[2] ||
                                    (n[2] = function (t) {
                                      return e.$emit('item-mousemove', t)
                                    })
                                },
                                null,
                                8,
                                [
                                  'id',
                                  'menuId',
                                  'style',
                                  'focusedItemId',
                                  'items',
                                  'mobileActive',
                                  'activeItemPath',
                                  'templates',
                                  'level',
                                  'aria-labelledby',
                                  'pt',
                                  'unstyled'
                                ]
                              ))
                            : Vue.createCommentVNode('', !0)
                        ],
                        16,
                        bi
                      ))
                    : Vue.createCommentVNode('', !0),
                  r.isItemVisible(i) && r.getItemProp(i, 'separator')
                    ? (Vue.openBlock(),
                      Vue.createElementBlock(
                        'li',
                        Vue.mergeProps(
                          {
                            key: 1,
                            id: r.getItemId(i),
                            class: [
                              e.cx('separator'),
                              r.getItemProp(i, 'class')
                            ],
                            style: r.getItemProp(i, 'style'),
                            role: 'separator',
                            ref_for: !0
                          },
                          e.ptm('separator')
                        ),
                        null,
                        16,
                        Vi
                      ))
                    : Vue.createCommentVNode('', !0)
                ],
                64
              )
            )
          }),
          128
        ))
      ],
      16
    )
  )
}
t(Ii, 'render$1$1'), (hi.render = Ii)
var ki = {
  name: 'Menubar',
  extends: fi,
  inheritAttrs: !1,
  emits: ['focus', 'blur'],
  matchMediaListener: null,
  data: t(function () {
    return {
      id: this.$attrs.id,
      mobileActive: !1,
      focused: !1,
      focusedItemInfo: { index: -1, level: 0, parentKey: '' },
      activeItemPath: [],
      dirty: !1,
      query: null,
      queryMatches: !1
    }
  }, 'data'),
  watch: {
    '$attrs.id': t(function (e) {
      this.id = e || R()
    }, '$attrsId'),
    activeItemPath: t(function (e) {
      K(e)
        ? (this.bindOutsideClickListener(), this.bindResizeListener())
        : (this.unbindOutsideClickListener(), this.unbindResizeListener())
    }, 'activeItemPath')
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted: t(function () {
    ;(this.id = this.id || R()), this.bindMatchMediaListener()
  }, 'mounted'),
  beforeUnmount: t(function () {
    ;(this.mobileActive = !1),
      this.unbindOutsideClickListener(),
      this.unbindResizeListener(),
      this.unbindMatchMediaListener(),
      this.container && G.clear(this.container),
      (this.container = null)
  }, 'beforeUnmount'),
  methods: {
    getItemProp: t(function (e, t) {
      return e ? Xe(e[t]) : void 0
    }, 'getItemProp'),
    getItemLabel: t(function (e) {
      return this.getItemProp(e, 'label')
    }, 'getItemLabel'),
    isItemDisabled: t(function (e) {
      return this.getItemProp(e, 'disabled')
    }, 'isItemDisabled'),
    isItemVisible: t(function (e) {
      return !1 !== this.getItemProp(e, 'visible')
    }, 'isItemVisible'),
    isItemGroup: t(function (e) {
      return K(this.getItemProp(e, 'items'))
    }, 'isItemGroup'),
    isItemSeparator: t(function (e) {
      return this.getItemProp(e, 'separator')
    }, 'isItemSeparator'),
    getProccessedItemLabel: t(function (e) {
      return e ? this.getItemLabel(e.item) : void 0
    }, 'getProccessedItemLabel'),
    isProccessedItemGroup: t(function (e) {
      return e && K(e.items)
    }, 'isProccessedItemGroup'),
    toggle: t(function (e) {
      var t = this
      this.mobileActive
        ? ((this.mobileActive = !1), G.clear(this.menubar), this.hide())
        : ((this.mobileActive = !0),
          G.set('menu', this.menubar, this.$primevue.config.zIndex.menu),
          setTimeout(function () {
            t.show()
          }, 1)),
        this.bindOutsideClickListener(),
        e.preventDefault()
    }, 'toggle'),
    show: t(function () {
      T(this.menubar)
    }, 'show'),
    hide: t(function (e, t) {
      var n = this
      this.mobileActive &&
        ((this.mobileActive = !1),
        setTimeout(function () {
          T(n.$refs.menubutton)
        }, 0)),
        (this.activeItemPath = []),
        (this.focusedItemInfo = { index: -1, level: 0, parentKey: '' }),
        t && T(this.menubar),
        (this.dirty = !1)
    }, 'hide'),
    onFocus: t(function (e) {
      ;(this.focused = !0),
        (this.focusedItemInfo =
          -1 !== this.focusedItemInfo.index
            ? this.focusedItemInfo
            : {
                index: this.findFirstFocusedItemIndex(),
                level: 0,
                parentKey: ''
              }),
        this.$emit('focus', e)
    }, 'onFocus'),
    onBlur: t(function (e) {
      ;(this.focused = !1),
        (this.focusedItemInfo = { index: -1, level: 0, parentKey: '' }),
        (this.searchValue = ''),
        (this.dirty = !1),
        this.$emit('blur', e)
    }, 'onBlur'),
    onKeyDown: t(function (e) {
      var t = e.metaKey || e.ctrlKey
      switch (e.code) {
        case 'ArrowDown':
          this.onArrowDownKey(e)
          break
        case 'ArrowUp':
          this.onArrowUpKey(e)
          break
        case 'ArrowLeft':
          this.onArrowLeftKey(e)
          break
        case 'ArrowRight':
          this.onArrowRightKey(e)
          break
        case 'Home':
          this.onHomeKey(e)
          break
        case 'End':
          this.onEndKey(e)
          break
        case 'Space':
          this.onSpaceKey(e)
          break
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(e)
          break
        case 'Escape':
          this.onEscapeKey(e)
          break
        case 'Tab':
          this.onTabKey(e)
          break
        case 'PageDown':
        case 'PageUp':
        case 'Backspace':
        case 'ShiftLeft':
        case 'ShiftRight':
          break
        default:
          !t && et(e.key) && this.searchItems(e, e.key)
      }
    }, 'onKeyDown'),
    onItemChange: t(function (e, t) {
      var n = e.processedItem,
        o = e.isFocus
      if (!H(n)) {
        var i = n.index,
          a = n.key,
          r = n.level,
          s = n.parentKey,
          l = n.items,
          u = K(l),
          c = this.activeItemPath.filter(function (e) {
            return e.parentKey !== s && e.parentKey !== a
          })
        u && c.push(n),
          (this.focusedItemInfo = { index: i, level: r, parentKey: s }),
          u && (this.dirty = !0),
          o && T(this.menubar),
          ('hover' === t && this.queryMatches) || (this.activeItemPath = c)
      }
    }, 'onItemChange'),
    onItemClick: t(function (e) {
      var t = e.originalEvent,
        n = e.processedItem,
        o = this.isProccessedItemGroup(n),
        i = H(n.parent)
      if (this.isSelected(n)) {
        var a = n.index,
          r = n.key,
          s = n.level,
          l = n.parentKey
        ;(this.activeItemPath = this.activeItemPath.filter(function (e) {
          return r !== e.key && r.startsWith(e.key)
        })),
          (this.focusedItemInfo = { index: a, level: s, parentKey: l }),
          (this.dirty = !i),
          T(this.menubar)
      } else if (o) this.onItemChange(e)
      else {
        var u = i
          ? n
          : this.activeItemPath.find(function (e) {
              return '' === e.parentKey
            })
        this.hide(t),
          this.changeFocusedItemIndex(t, u ? u.index : -1),
          (this.mobileActive = !1),
          T(this.menubar)
      }
    }, 'onItemClick'),
    onItemMouseEnter: t(function (e) {
      this.dirty && this.onItemChange(e, 'hover')
    }, 'onItemMouseEnter'),
    onItemMouseMove: t(function (e) {
      this.focused && this.changeFocusedItemIndex(e, e.processedItem.index)
    }, 'onItemMouseMove'),
    menuButtonClick: t(function (e) {
      this.toggle(e)
    }, 'menuButtonClick'),
    menuButtonKeydown: t(function (e) {
      ;('Enter' === e.code || 'NumpadEnter' === e.code || 'Space' === e.code) &&
        this.menuButtonClick(e)
    }, 'menuButtonKeydown'),
    onArrowDownKey: t(function (e) {
      var t = this.visibleItems[this.focusedItemInfo.index]
      if (t ? H(t.parent) : null) {
        this.isProccessedItemGroup(t) &&
          (this.onItemChange({ originalEvent: e, processedItem: t }),
          (this.focusedItemInfo = { index: -1, parentKey: t.key }),
          this.onArrowRightKey(e))
      } else {
        var n =
          -1 !== this.focusedItemInfo.index
            ? this.findNextItemIndex(this.focusedItemInfo.index)
            : this.findFirstFocusedItemIndex()
        this.changeFocusedItemIndex(e, n)
      }
      e.preventDefault()
    }, 'onArrowDownKey'),
    onArrowUpKey: t(function (e) {
      var t = this,
        n = this.visibleItems[this.focusedItemInfo.index]
      if (H(n.parent)) {
        if (this.isProccessedItemGroup(n)) {
          this.onItemChange({ originalEvent: e, processedItem: n }),
            (this.focusedItemInfo = { index: -1, parentKey: n.key })
          var o = this.findLastItemIndex()
          this.changeFocusedItemIndex(e, o)
        }
      } else {
        var i = this.activeItemPath.find(function (e) {
          return e.key === n.parentKey
        })
        if (0 === this.focusedItemInfo.index)
          (this.focusedItemInfo = {
            index: -1,
            parentKey: i ? i.parentKey : ''
          }),
            (this.searchValue = ''),
            this.onArrowLeftKey(e),
            (this.activeItemPath = this.activeItemPath.filter(function (e) {
              return e.parentKey !== t.focusedItemInfo.parentKey
            }))
        else {
          var a =
            -1 !== this.focusedItemInfo.index
              ? this.findPrevItemIndex(this.focusedItemInfo.index)
              : this.findLastFocusedItemIndex()
          this.changeFocusedItemIndex(e, a)
        }
      }
      e.preventDefault()
    }, 'onArrowUpKey'),
    onArrowLeftKey: t(function (e) {
      var t = this,
        n = this.visibleItems[this.focusedItemInfo.index],
        o = n
          ? this.activeItemPath.find(function (e) {
              return e.key === n.parentKey
            })
          : null
      if (o)
        this.onItemChange({ originalEvent: e, processedItem: o }),
          (this.activeItemPath = this.activeItemPath.filter(function (e) {
            return e.parentKey !== t.focusedItemInfo.parentKey
          })),
          e.preventDefault()
      else {
        var i =
          -1 !== this.focusedItemInfo.index
            ? this.findPrevItemIndex(this.focusedItemInfo.index)
            : this.findLastFocusedItemIndex()
        this.changeFocusedItemIndex(e, i), e.preventDefault()
      }
    }, 'onArrowLeftKey'),
    onArrowRightKey: t(function (e) {
      var t = this.visibleItems[this.focusedItemInfo.index]
      if (
        t
          ? this.activeItemPath.find(function (e) {
              return e.key === t.parentKey
            })
          : null
      ) {
        this.isProccessedItemGroup(t) &&
          (this.onItemChange({ originalEvent: e, processedItem: t }),
          (this.focusedItemInfo = { index: -1, parentKey: t.key }),
          this.onArrowDownKey(e))
      } else {
        var n =
          -1 !== this.focusedItemInfo.index
            ? this.findNextItemIndex(this.focusedItemInfo.index)
            : this.findFirstFocusedItemIndex()
        this.changeFocusedItemIndex(e, n), e.preventDefault()
      }
    }, 'onArrowRightKey'),
    onHomeKey: t(function (e) {
      this.changeFocusedItemIndex(e, this.findFirstItemIndex()),
        e.preventDefault()
    }, 'onHomeKey'),
    onEndKey: t(function (e) {
      this.changeFocusedItemIndex(e, this.findLastItemIndex()),
        e.preventDefault()
    }, 'onEndKey'),
    onEnterKey: t(function (e) {
      if (-1 !== this.focusedItemInfo.index) {
        var t = w(
            this.menubar,
            'li[id="'.concat(''.concat(this.focusedItemId), '"]')
          ),
          n = t && w(t, 'a[data-pc-section="itemlink"]')
        n ? n.click() : t && t.click()
        var o = this.visibleItems[this.focusedItemInfo.index]
        !this.isProccessedItemGroup(o) &&
          (this.focusedItemInfo.index = this.findFirstFocusedItemIndex())
      }
      e.preventDefault()
    }, 'onEnterKey'),
    onSpaceKey: t(function (e) {
      this.onEnterKey(e)
    }, 'onSpaceKey'),
    onEscapeKey: t(function (e) {
      if (0 !== this.focusedItemInfo.level) {
        var t = this.focusedItemInfo
        this.hide(e, !1),
          (this.focusedItemInfo = {
            index: Number(t.parentKey.split('_')[0]),
            level: 0,
            parentKey: ''
          })
      }
      e.preventDefault()
    }, 'onEscapeKey'),
    onTabKey: t(function (e) {
      if (-1 !== this.focusedItemInfo.index) {
        var t = this.visibleItems[this.focusedItemInfo.index]
        !this.isProccessedItemGroup(t) &&
          this.onItemChange({ originalEvent: e, processedItem: t })
      }
      this.hide()
    }, 'onTabKey'),
    bindOutsideClickListener: t(function () {
      var e = this
      this.outsideClickListener ||
        ((this.outsideClickListener = function (t) {
          var n = e.container && !e.container.contains(t.target),
            o = !(
              e.target &&
              (e.target === t.target || e.target.contains(t.target))
            )
          n && o && e.hide()
        }),
        document.addEventListener('click', this.outsideClickListener))
    }, 'bindOutsideClickListener'),
    unbindOutsideClickListener: t(function () {
      this.outsideClickListener &&
        (document.removeEventListener('click', this.outsideClickListener),
        (this.outsideClickListener = null))
    }, 'unbindOutsideClickListener'),
    bindResizeListener: t(function () {
      var e = this
      this.resizeListener ||
        ((this.resizeListener = function (t) {
          X() || e.hide(t, !0), (e.mobileActive = !1)
        }),
        window.addEventListener('resize', this.resizeListener))
    }, 'bindResizeListener'),
    unbindResizeListener: t(function () {
      this.resizeListener &&
        (window.removeEventListener('resize', this.resizeListener),
        (this.resizeListener = null))
    }, 'unbindResizeListener'),
    bindMatchMediaListener: t(function () {
      var e = this
      if (!this.matchMediaListener) {
        var t = matchMedia('(max-width: '.concat(this.breakpoint, ')'))
        ;(this.query = t),
          (this.queryMatches = t.matches),
          (this.matchMediaListener = function () {
            ;(e.queryMatches = t.matches), (e.mobileActive = !1)
          }),
          this.query.addEventListener('change', this.matchMediaListener)
      }
    }, 'bindMatchMediaListener'),
    unbindMatchMediaListener: t(function () {
      this.matchMediaListener &&
        (this.query.removeEventListener('change', this.matchMediaListener),
        (this.matchMediaListener = null))
    }, 'unbindMatchMediaListener'),
    isItemMatched: t(function (e) {
      var t
      return (
        this.isValidItem(e) &&
        (null === (t = this.getProccessedItemLabel(e)) || void 0 === t
          ? void 0
          : t
              .toLocaleLowerCase()
              .startsWith(this.searchValue.toLocaleLowerCase()))
      )
    }, 'isItemMatched'),
    isValidItem: t(function (e) {
      return (
        !!e &&
        !this.isItemDisabled(e.item) &&
        !this.isItemSeparator(e.item) &&
        this.isItemVisible(e.item)
      )
    }, 'isValidItem'),
    isValidSelectedItem: t(function (e) {
      return this.isValidItem(e) && this.isSelected(e)
    }, 'isValidSelectedItem'),
    isSelected: t(function (e) {
      return this.activeItemPath.some(function (t) {
        return t.key === e.key
      })
    }, 'isSelected'),
    findFirstItemIndex: t(function () {
      var e = this
      return this.visibleItems.findIndex(function (t) {
        return e.isValidItem(t)
      })
    }, 'findFirstItemIndex'),
    findLastItemIndex: t(function () {
      var e = this
      return Y(this.visibleItems, function (t) {
        return e.isValidItem(t)
      })
    }, 'findLastItemIndex'),
    findNextItemIndex: t(function (e) {
      var t = this,
        n =
          e < this.visibleItems.length - 1
            ? this.visibleItems.slice(e + 1).findIndex(function (e) {
                return t.isValidItem(e)
              })
            : -1
      return n > -1 ? n + e + 1 : e
    }, 'findNextItemIndex'),
    findPrevItemIndex: t(function (e) {
      var t = this,
        n =
          e > 0
            ? Y(this.visibleItems.slice(0, e), function (e) {
                return t.isValidItem(e)
              })
            : -1
      return n > -1 ? n : e
    }, 'findPrevItemIndex'),
    findSelectedItemIndex: t(function () {
      var e = this
      return this.visibleItems.findIndex(function (t) {
        return e.isValidSelectedItem(t)
      })
    }, 'findSelectedItemIndex'),
    findFirstFocusedItemIndex: t(function () {
      var e = this.findSelectedItemIndex()
      return e < 0 ? this.findFirstItemIndex() : e
    }, 'findFirstFocusedItemIndex'),
    findLastFocusedItemIndex: t(function () {
      var e = this.findSelectedItemIndex()
      return e < 0 ? this.findLastItemIndex() : e
    }, 'findLastFocusedItemIndex'),
    searchItems: t(function (e, t) {
      var n = this
      this.searchValue = (this.searchValue || '') + t
      var o = -1,
        i = !1
      return (
        -1 !==
          (o =
            -1 !== this.focusedItemInfo.index
              ? -1 ===
                (o = this.visibleItems
                  .slice(this.focusedItemInfo.index)
                  .findIndex(function (e) {
                    return n.isItemMatched(e)
                  }))
                ? this.visibleItems
                    .slice(0, this.focusedItemInfo.index)
                    .findIndex(function (e) {
                      return n.isItemMatched(e)
                    })
                : o + this.focusedItemInfo.index
              : this.visibleItems.findIndex(function (e) {
                  return n.isItemMatched(e)
                })) && (i = !0),
        -1 === o &&
          -1 === this.focusedItemInfo.index &&
          (o = this.findFirstFocusedItemIndex()),
        -1 !== o && this.changeFocusedItemIndex(e, o),
        this.searchTimeout && clearTimeout(this.searchTimeout),
        (this.searchTimeout = setTimeout(function () {
          ;(n.searchValue = ''), (n.searchTimeout = null)
        }, 500)),
        i
      )
    }, 'searchItems'),
    changeFocusedItemIndex: t(function (e, t) {
      this.focusedItemInfo.index !== t &&
        ((this.focusedItemInfo.index = t), this.scrollInView())
    }, 'changeFocusedItemIndex'),
    scrollInView: t(function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
        t = -1 !== e ? ''.concat(this.id, '_').concat(e) : this.focusedItemId,
        n = w(this.menubar, 'li[id="'.concat(t, '"]'))
      n &&
        n.scrollIntoView &&
        n.scrollIntoView({ block: 'nearest', inline: 'start' })
    }, 'scrollInView'),
    createProcessedItems: t(function (e) {
      var t = this,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
        a = []
      return (
        e &&
          e.forEach(function (e, r) {
            var s = ('' !== i ? i + '_' : '') + r,
              l = {
                item: e,
                index: r,
                level: n,
                key: s,
                parent: o,
                parentKey: i
              }
            ;(l.items = t.createProcessedItems(e.items, n + 1, l, s)), a.push(l)
          }),
        a
      )
    }, 'createProcessedItems'),
    containerRef: t(function (e) {
      this.container = e
    }, 'containerRef'),
    menubarRef: t(function (e) {
      this.menubar = e ? e.$el : void 0
    }, 'menubarRef')
  },
  computed: {
    processedItems: t(function () {
      return this.createProcessedItems(this.model || [])
    }, 'processedItems'),
    visibleItems: t(function () {
      var e = this,
        t = this.activeItemPath.find(function (t) {
          return t.key === e.focusedItemInfo.parentKey
        })
      return t ? t.items : this.processedItems
    }, 'visibleItems'),
    focusedItemId: t(function () {
      return -1 !== this.focusedItemInfo.index
        ? ''
            .concat(this.id)
            .concat(
              K(this.focusedItemInfo.parentKey)
                ? '_' + this.focusedItemInfo.parentKey
                : '',
              '_'
            )
            .concat(this.focusedItemInfo.index)
        : null
    }, 'focusedItemId')
  },
  components: { MenubarSub: hi, BarsIcon: Vt }
}
function wi(e) {
  return (wi =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        })(e)
}
function xi(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    t &&
      (o = o.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      n.push.apply(n, o)
  }
  return n
}
function Ci(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? xi(Object(n), !0).forEach(function (t) {
          Si(e, t, n[t])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : xi(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
  }
  return e
}
function Si(e, t, n) {
  return (
    (t = Pi(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  )
}
function Pi(e) {
  var t = Bi(e, 'string')
  return 'symbol' == wi(t) ? t : t + ''
}
function Bi(e, t) {
  if ('object' != wi(e) || !e) return e
  var n = e[Symbol.toPrimitive]
  if (void 0 !== n) {
    var o = n.call(e, t || 'default')
    if ('object' != wi(o)) return o
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return ('string' === t ? String : Number)(e)
}
t(wi, '_typeof'),
  t(xi, 'ownKeys'),
  t(Ci, '_objectSpread'),
  t(Si, '_defineProperty'),
  t(Pi, '_toPropertyKey'),
  t(Bi, '_toPrimitive')
var Ei = ['aria-haspopup', 'aria-expanded', 'aria-controls', 'aria-label']
function Li(e, n, o, i, a, r) {
  var s = Vue.resolveComponent('BarsIcon'),
    l = Vue.resolveComponent('MenubarSub')
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps(
        { ref: r.containerRef, class: e.cx('root') },
        e.ptmi('root')
      ),
      [
        e.$slots.start
          ? (Vue.openBlock(),
            Vue.createElementBlock(
              'div',
              Vue.mergeProps({ key: 0, class: e.cx('start') }, e.ptm('start')),
              [Vue.renderSlot(e.$slots, 'start')],
              16
            ))
          : Vue.createCommentVNode('', !0),
        Vue.renderSlot(
          e.$slots,
          e.$slots.button ? 'button' : 'menubutton',
          {
            id: a.id,
            class: Vue.normalizeClass(e.cx('button')),
            toggleCallback: t(function (e) {
              return r.menuButtonClick(e)
            }, 'toggleCallback')
          },
          function () {
            var t
            return [
              e.model && e.model.length > 0
                ? (Vue.openBlock(),
                  Vue.createElementBlock(
                    'a',
                    Vue.mergeProps(
                      {
                        key: 0,
                        ref: 'menubutton',
                        role: 'button',
                        tabindex: '0',
                        class: e.cx('button'),
                        'aria-haspopup': !!(
                          e.model.length && e.model.length > 0
                        ),
                        'aria-expanded': a.mobileActive,
                        'aria-controls': a.id,
                        'aria-label':
                          null === (t = e.$primevue.config.locale.aria) ||
                          void 0 === t
                            ? void 0
                            : t.navigation,
                        onClick:
                          n[0] ||
                          (n[0] = function (e) {
                            return r.menuButtonClick(e)
                          }),
                        onKeydown:
                          n[1] ||
                          (n[1] = function (e) {
                            return r.menuButtonKeydown(e)
                          })
                      },
                      Ci(Ci({}, e.buttonProps), e.ptm('button'))
                    ),
                    [
                      Vue.renderSlot(
                        e.$slots,
                        e.$slots.buttonicon ? 'buttonicon' : 'menubuttonicon',
                        {},
                        function () {
                          return [
                            Vue.createVNode(
                              s,
                              Vue.normalizeProps(
                                Vue.guardReactiveProps(e.ptm('buttonicon'))
                              ),
                              null,
                              16
                            )
                          ]
                        }
                      )
                    ],
                    16,
                    Ei
                  ))
                : Vue.createCommentVNode('', !0)
            ]
          }
        ),
        Vue.createVNode(
          l,
          {
            ref: r.menubarRef,
            id: a.id + '_list',
            role: 'menubar',
            items: r.processedItems,
            templates: e.$slots,
            root: !0,
            mobileActive: a.mobileActive,
            tabindex: '0',
            'aria-activedescendant': a.focused ? r.focusedItemId : void 0,
            menuId: a.id,
            focusedItemId: a.focused ? r.focusedItemId : void 0,
            activeItemPath: a.activeItemPath,
            level: 0,
            'aria-labelledby': e.ariaLabelledby,
            'aria-label': e.ariaLabel,
            pt: e.pt,
            unstyled: e.unstyled,
            onFocus: r.onFocus,
            onBlur: r.onBlur,
            onKeydown: r.onKeyDown,
            onItemClick: r.onItemClick,
            onItemMouseenter: r.onItemMouseEnter,
            onItemMousemove: r.onItemMouseMove
          },
          null,
          8,
          [
            'id',
            'items',
            'templates',
            'mobileActive',
            'aria-activedescendant',
            'menuId',
            'focusedItemId',
            'activeItemPath',
            'aria-labelledby',
            'aria-label',
            'pt',
            'unstyled',
            'onFocus',
            'onBlur',
            'onKeydown',
            'onItemClick',
            'onItemMouseenter',
            'onItemMousemove'
          ]
        ),
        e.$slots.end
          ? (Vue.openBlock(),
            Vue.createElementBlock(
              'div',
              Vue.mergeProps({ key: 1, class: e.cx('end') }, e.ptm('end')),
              [Vue.renderSlot(e.$slots, 'end')],
              16
            ))
          : Vue.createCommentVNode('', !0)
      ],
      16
    )
  )
}
t(Li, 'render$4'), (ki.render = Li)
const Oi = ['href'],
  Ti = { class: 'p-menubar-item-label' },
  Mi = {
    key: 1,
    class:
      'ml-auto border border-surface rounded text-muted text-xs p-1 keybinding-tag'
  },
  Ni = u(
    Vue.defineComponent({
      __name: 'CommandMenubar',
      setup(e) {
        const n = o(),
          i = Vue.computed(() =>
            'Top' === n.get('Comfy.UseNewMenu') ? 'down' : 'up'
          ),
          a = tt(),
          { t: r } = VueI18n.useI18n(),
          s = t((e) => {
            const t = 'function' == typeof e.label ? e.label() : e.label,
              n = t ? r(`menuLabels.${nt(t)}`, t) : void 0
            return { ...e, label: n, items: e.items?.map(s) }
          }, 'translateMenuItem'),
          l = Vue.computed(() => a.menuItems.map(s))
        return (e, t) => (
          Vue.openBlock(),
          Vue.createBlock(
            Vue.unref(ki),
            {
              model: l.value,
              class: 'top-menubar border-none p-0 bg-transparent',
              pt: {
                rootList: 'gap-0 flex-nowrap w-auto',
                submenu: `dropdown-direction-${i.value}`,
                item: 'relative'
              }
            },
            {
              item: Vue.withCtx(({ item: e, props: t }) => [
                Vue.createElementVNode(
                  'a',
                  Vue.mergeProps({ class: 'p-menubar-item-link' }, t.action, {
                    href: e.url,
                    target: '_blank'
                  }),
                  [
                    e.icon
                      ? (Vue.openBlock(),
                        Vue.createElementBlock(
                          'span',
                          {
                            key: 0,
                            class: Vue.normalizeClass([
                              'p-menubar-item-icon',
                              e.icon
                            ])
                          },
                          null,
                          2
                        ))
                      : Vue.createCommentVNode('', !0),
                    Vue.createElementVNode(
                      'span',
                      Ti,
                      Vue.toDisplayString(e.label),
                      1
                    ),
                    e?.comfyCommand?.keybinding
                      ? (Vue.openBlock(),
                        Vue.createElementBlock(
                          'span',
                          Mi,
                          Vue.toDisplayString(
                            e.comfyCommand.keybinding.combo.toString()
                          ),
                          1
                        ))
                      : Vue.createCommentVNode('', !0)
                  ],
                  16,
                  Oi
                )
              ]),
              _: 1
            },
            8,
            ['model', 'pt']
          )
        )
      }
    }),
    [['__scopeId', 'data-v-a2b12676']]
  )
var $i = t(function (e) {
    var t = e.dt
    return '\n.p-panel {\n    border: 1px solid '
      .concat(t('panel.border.color'), ';\n    border-radius: ')
      .concat(t('panel.border.radius'), ';\n    background: ')
      .concat(t('panel.background'), ';\n    color: ')
      .concat(
        t('panel.color'),
        ';\n}\n\n.p-panel-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: '
      )
      .concat(t('panel.header.padding'), ';\n    background: ')
      .concat(t('panel.header.background'), ';\n    color: ')
      .concat(
        t('panel.header.color'),
        ';\n    border-style: solid;\n    border-width: '
      )
      .concat(t('panel.header.border.width'), ';\n    border-color: ')
      .concat(t('panel.header.border.color'), ';\n    border-radius: ')
      .concat(
        t('panel.header.border.radius'),
        ';\n}\n\n.p-panel-toggleable .p-panel-header {\n    padding: '
      )
      .concat(
        t('panel.toggleable.header.padding'),
        ';\n}\n\n.p-panel-title {\n    line-height: 1;\n    font-weight: '
      )
      .concat(
        t('panel.title.font.weight'),
        ';\n}\n\n.p-panel-content {\n    padding: '
      )
      .concat(
        t('panel.content.padding'),
        ';\n}\n\n.p-panel-footer {\n    padding: '
      )
      .concat(t('panel.footer.padding'), ';\n}\n')
  }, 'theme'),
  Ai = {
    root: t(function (e) {
      return [
        'p-panel p-component',
        { 'p-panel-toggleable': e.props.toggleable }
      ]
    }, 'root'),
    header: 'p-panel-header',
    title: 'p-panel-title',
    headerActions: 'p-panel-header-actions',
    pcToggleButton: 'p-panel-toggle-button',
    contentContainer: 'p-panel-content-container',
    content: 'p-panel-content',
    footer: 'p-panel-footer'
  },
  Di = c.extend({ name: 'panel', theme: $i, classes: Ai }),
  _i = {
    name: 'Panel',
    extends: {
      name: 'BasePanel',
      extends: V,
      props: {
        header: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
          type: Object,
          default: t(function () {
            return { severity: 'secondary', text: !0, rounded: !0 }
          }, '_default')
        }
      },
      style: Di,
      provide: t(function () {
        return { $pcPanel: this, $parentInstance: this }
      }, 'provide')
    },
    inheritAttrs: !1,
    emits: ['update:collapsed', 'toggle'],
    data: t(function () {
      return { id: this.$attrs.id, d_collapsed: this.collapsed }
    }, 'data'),
    watch: {
      '$attrs.id': t(function (e) {
        this.id = e || R()
      }, '$attrsId'),
      collapsed: t(function (e) {
        this.d_collapsed = e
      }, 'collapsed')
    },
    mounted: t(function () {
      this.id = this.id || R()
    }, 'mounted'),
    methods: {
      toggle: t(function (e) {
        ;(this.d_collapsed = !this.d_collapsed),
          this.$emit('update:collapsed', this.d_collapsed),
          this.$emit('toggle', { originalEvent: e, value: this.d_collapsed })
      }, 'toggle'),
      onKeyDown: t(function (e) {
        ;('Enter' !== e.code &&
          'NumpadEnter' !== e.code &&
          'Space' !== e.code) ||
          (this.toggle(e), e.preventDefault())
      }, 'onKeyDown')
    },
    computed: {
      buttonAriaLabel: t(function () {
        return this.toggleButtonProps && this.toggleButtonProps.ariaLabel
          ? this.toggleButtonProps.ariaLabel
          : this.header
      }, 'buttonAriaLabel')
    },
    components: { PlusIcon: It, MinusIcon: ot, Button: p },
    directives: { ripple: L }
  },
  zi = ['id'],
  Ki = ['id', 'aria-labelledby']
function Fi(e, t, n, o, i, a) {
  var r = Vue.resolveComponent('Button')
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps({ class: e.cx('root') }, e.ptmi('root')),
      [
        Vue.createElementVNode(
          'div',
          Vue.mergeProps({ class: e.cx('header') }, e.ptm('header')),
          [
            Vue.renderSlot(
              e.$slots,
              'header',
              {
                id: i.id + '_header',
                class: Vue.normalizeClass(e.cx('title'))
              },
              function () {
                return [
                  e.header
                    ? (Vue.openBlock(),
                      Vue.createElementBlock(
                        'span',
                        Vue.mergeProps(
                          {
                            key: 0,
                            id: i.id + '_header',
                            class: e.cx('title')
                          },
                          e.ptm('title')
                        ),
                        Vue.toDisplayString(e.header),
                        17,
                        zi
                      ))
                    : Vue.createCommentVNode('', !0)
                ]
              }
            ),
            Vue.createElementVNode(
              'div',
              Vue.mergeProps(
                { class: e.cx('headerActions') },
                e.ptm('headerActions')
              ),
              [
                Vue.renderSlot(e.$slots, 'icons'),
                e.toggleable
                  ? (Vue.openBlock(),
                    Vue.createBlock(
                      r,
                      Vue.mergeProps(
                        {
                          key: 0,
                          id: i.id + '_header',
                          class: e.cx('pcToggleButton'),
                          'aria-label': a.buttonAriaLabel,
                          'aria-controls': i.id + '_content',
                          'aria-expanded': !i.d_collapsed,
                          unstyled: e.unstyled,
                          onClick: a.toggle,
                          onKeydown: a.onKeyDown
                        },
                        e.toggleButtonProps,
                        { pt: e.ptm('pcToggleButton') }
                      ),
                      {
                        icon: Vue.withCtx(function (t) {
                          return [
                            Vue.renderSlot(
                              e.$slots,
                              e.$slots.toggleicon
                                ? 'toggleicon'
                                : 'togglericon',
                              { collapsed: i.d_collapsed },
                              function () {
                                return [
                                  (Vue.openBlock(),
                                  Vue.createBlock(
                                    Vue.resolveDynamicComponent(
                                      i.d_collapsed ? 'PlusIcon' : 'MinusIcon'
                                    ),
                                    Vue.mergeProps(
                                      { class: t.class },
                                      e.ptm('pcToggleButton').icon
                                    ),
                                    null,
                                    16,
                                    ['class']
                                  ))
                                ]
                              }
                            )
                          ]
                        }),
                        _: 3
                      },
                      16,
                      [
                        'id',
                        'class',
                        'aria-label',
                        'aria-controls',
                        'aria-expanded',
                        'unstyled',
                        'onClick',
                        'onKeydown',
                        'pt'
                      ]
                    ))
                  : Vue.createCommentVNode('', !0)
              ],
              16
            )
          ],
          16
        ),
        Vue.createVNode(
          Vue.Transition,
          Vue.mergeProps({ name: 'p-toggleable-content' }, e.ptm('transition')),
          {
            default: Vue.withCtx(function () {
              return [
                Vue.withDirectives(
                  Vue.createElementVNode(
                    'div',
                    Vue.mergeProps(
                      {
                        id: i.id + '_content',
                        class: e.cx('contentContainer'),
                        role: 'region',
                        'aria-labelledby': i.id + '_header'
                      },
                      e.ptm('contentContainer')
                    ),
                    [
                      Vue.createElementVNode(
                        'div',
                        Vue.mergeProps(
                          { class: e.cx('content') },
                          e.ptm('content')
                        ),
                        [Vue.renderSlot(e.$slots, 'default')],
                        16
                      ),
                      e.$slots.footer
                        ? (Vue.openBlock(),
                          Vue.createElementBlock(
                            'div',
                            Vue.mergeProps(
                              { key: 0, class: e.cx('footer') },
                              e.ptm('footer')
                            ),
                            [Vue.renderSlot(e.$slots, 'footer')],
                            16
                          ))
                        : Vue.createCommentVNode('', !0)
                    ],
                    16,
                    Ki
                  ),
                  [[Vue.vShow, !i.d_collapsed]]
                )
              ]
            }),
            _: 3
          },
          16
        )
      ],
      16
    )
  )
}
t(Fi, 'render$3'), (_i.render = Fi)
var Ri = t(function (e) {
    var t = e.dt
    return '\n.p-tieredmenu {\n    background: '
      .concat(t('tieredmenu.background'), ';\n    color: ')
      .concat(t('tieredmenu.color'), ';\n    border: 1px solid ')
      .concat(t('tieredmenu.border.color'), ';\n    border-radius: ')
      .concat(
        t('tieredmenu.border.radius'),
        ';\n    min-width: 12.5rem;\n}\n\n.p-tieredmenu-root-list,\n.p-tieredmenu-submenu {\n    margin: 0;\n    padding: '
      )
      .concat(
        t('tieredmenu.list.padding'),
        ';\n    list-style: none;\n    outline: 0 none;\n    display: flex;\n    flex-direction: column;\n    gap: '
      )
      .concat(
        t('tieredmenu.list.gap'),
        ';\n}\n\n.p-tieredmenu-submenu {\n    position: absolute;\n    min-width: 100%;\n    z-index: 1;\n    background: '
      )
      .concat(t('tieredmenu.background'), ';\n    color: ')
      .concat(t('tieredmenu.color'), ';\n    border: 1px solid ')
      .concat(t('tieredmenu.border.color'), ';\n    border-radius: ')
      .concat(t('tieredmenu.border.radius'), ';\n    box-shadow: ')
      .concat(
        t('tieredmenu.shadow'),
        ';\n}\n\n.p-tieredmenu-item {\n    position: relative;\n}\n\n.p-tieredmenu-item-content {\n    transition: background '
      )
      .concat(t('tieredmenu.transition.duration'), ', color ')
      .concat(t('tieredmenu.transition.duration'), ';\n    border-radius: ')
      .concat(t('tieredmenu.item.border.radius'), ';\n    color: ')
      .concat(
        t('tieredmenu.item.color'),
        ';\n}\n\n.p-tieredmenu-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: '
      )
      .concat(t('tieredmenu.item.padding'), ';\n    gap: ')
      .concat(
        t('tieredmenu.item.gap'),
        ';\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-tieredmenu-item-label {\n    line-height: 1;\n}\n\n.p-tieredmenu-item-icon {\n    color: '
      )
      .concat(
        t('tieredmenu.item.icon.color'),
        ';\n}\n\n.p-tieredmenu-submenu-icon {\n    color: '
      )
      .concat(
        t('tieredmenu.submenu.icon.color'),
        ';\n    margin-left: auto;\n    font-size: '
      )
      .concat(t('tieredmenu.submenu.icon.size'), ';\n    width: ')
      .concat(t('tieredmenu.submenu.icon.size'), ';\n    height: ')
      .concat(
        t('tieredmenu.submenu.icon.size'),
        ';\n}\n\n.p-tieredmenu-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {\n    color: '
      )
      .concat(t('tieredmenu.item.focus.color'), ';\n    background: ')
      .concat(
        t('tieredmenu.item.focus.background'),
        ';\n}\n\n.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {\n    color: '
      )
      .concat(
        t('tieredmenu.item.icon.focus.color'),
        ';\n}\n\n.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n    color: '
      )
      .concat(
        t('tieredmenu.submenu.icon.focus.color'),
        ';\n}\n\n.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {\n    color: '
      )
      .concat(t('tieredmenu.item.focus.color'), ';\n    background: ')
      .concat(
        t('tieredmenu.item.focus.background'),
        ';\n}\n\n.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {\n    color: '
      )
      .concat(
        t('tieredmenu.item.icon.focus.color'),
        ';\n}\n\n.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {\n    color: '
      )
      .concat(
        t('tieredmenu.submenu.icon.focus.color'),
        ';\n}\n\n.p-tieredmenu-item-active > .p-tieredmenu-item-content {\n    color: '
      )
      .concat(t('tieredmenu.item.active.color'), ';\n    background: ')
      .concat(
        t('tieredmenu.item.active.background'),
        ';\n}\n\n.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {\n    color: '
      )
      .concat(
        t('tieredmenu.item.icon.active.color'),
        ';\n}\n\n.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n    color: '
      )
      .concat(
        t('tieredmenu.submenu.icon.active.color'),
        ';\n}\n\n.p-tieredmenu-separator {\n    border-block-start: 1px solid '
      )
      .concat(
        t('tieredmenu.separator.border.color'),
        ';\n}\n\n.p-tieredmenu-overlay {\n    box-shadow: '
      )
      .concat(
        t('tieredmenu.shadow'),
        ';\n}\n\n.p-tieredmenu-enter-from,\n.p-tieredmenu-leave-active {\n    opacity: 0;\n}\n\n.p-tieredmenu-enter-active {\n    transition: opacity 250ms;\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-submenu {\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n    padding-inline-start: '
      )
      .concat(
        t('tieredmenu.submenu.mobile.indent'),
        ';\n    padding-inline-end: 0;\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {\n    padding-inline-start: 0;\n    padding-inline-end: '
      )
      .concat(
        t('tieredmenu.submenu.mobile.indent'),
        ';\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n    transform: rotate(-90deg);\n}\n'
      )
  }, 'theme'),
  Gi = {
    submenu: t(function (e) {
      var t = e.instance,
        n = e.processedItem
      return { display: t.isItemActive(n) ? 'flex' : 'none' }
    }, 'submenu')
  },
  Ui = {
    root: t(function (e) {
      var t = e.props,
        n = e.instance
      return [
        'p-tieredmenu p-component',
        {
          'p-tieredmenu-overlay': t.popup,
          'p-tieredmenu-mobile': n.queryMatches
        }
      ]
    }, 'root'),
    start: 'p-tieredmenu-start',
    rootList: 'p-tieredmenu-root-list',
    item: t(function (e) {
      var t = e.instance,
        n = e.processedItem
      return [
        'p-tieredmenu-item',
        {
          'p-tieredmenu-item-active': t.isItemActive(n),
          'p-focus': t.isItemFocused(n),
          'p-disabled': t.isItemDisabled(n)
        }
      ]
    }, 'item'),
    itemContent: 'p-tieredmenu-item-content',
    itemLink: 'p-tieredmenu-item-link',
    itemIcon: 'p-tieredmenu-item-icon',
    itemLabel: 'p-tieredmenu-item-label',
    submenuIcon: 'p-tieredmenu-submenu-icon',
    submenu: 'p-tieredmenu-submenu',
    separator: 'p-tieredmenu-separator',
    end: 'p-tieredmenu-end'
  },
  ji = c.extend({
    name: 'tieredmenu',
    theme: Ri,
    classes: Ui,
    inlineStyles: Gi
  }),
  Hi = {
    name: 'BaseTieredMenu',
    extends: V,
    props: {
      popup: { type: Boolean, default: !1 },
      model: { type: Array, default: null },
      appendTo: { type: [String, Object], default: 'body' },
      breakpoint: { type: String, default: '960px' },
      autoZIndex: { type: Boolean, default: !0 },
      baseZIndex: { type: Number, default: 0 },
      disabled: { type: Boolean, default: !1 },
      tabindex: { type: Number, default: 0 },
      ariaLabelledby: { type: String, default: null },
      ariaLabel: { type: String, default: null }
    },
    style: ji,
    provide: t(function () {
      return { $pcTieredMenu: this, $parentInstance: this }
    }, 'provide')
  },
  Wi = {
    name: 'TieredMenuSub',
    hostName: 'TieredMenu',
    extends: V,
    emits: ['item-click', 'item-mouseenter', 'item-mousemove'],
    container: null,
    props: {
      menuId: { type: String, default: null },
      focusedItemId: { type: String, default: null },
      items: { type: Array, default: null },
      visible: { type: Boolean, default: !1 },
      level: { type: Number, default: 0 },
      templates: { type: Object, default: null },
      activeItemPath: { type: Object, default: null },
      tabindex: { type: Number, default: 0 }
    },
    methods: {
      getItemId: t(function (e) {
        return ''.concat(this.menuId, '_').concat(e.key)
      }, 'getItemId'),
      getItemKey: t(function (e) {
        return this.getItemId(e)
      }, 'getItemKey'),
      getItemProp: t(function (e, t, n) {
        return e && e.item ? Xe(e.item[t], n) : void 0
      }, 'getItemProp'),
      getItemLabel: t(function (e) {
        return this.getItemProp(e, 'label')
      }, 'getItemLabel'),
      getItemLabelId: t(function (e) {
        return ''.concat(this.menuId, '_').concat(e.key, '_label')
      }, 'getItemLabelId'),
      getPTOptions: t(function (e, t, n) {
        return this.ptm(n, {
          context: {
            item: e.item,
            index: t,
            active: this.isItemActive(e),
            focused: this.isItemFocused(e),
            disabled: this.isItemDisabled(e)
          }
        })
      }, 'getPTOptions'),
      isItemActive: t(function (e) {
        return this.activeItemPath.some(function (t) {
          return t.key === e.key
        })
      }, 'isItemActive'),
      isItemVisible: t(function (e) {
        return !1 !== this.getItemProp(e, 'visible')
      }, 'isItemVisible'),
      isItemDisabled: t(function (e) {
        return this.getItemProp(e, 'disabled')
      }, 'isItemDisabled'),
      isItemFocused: t(function (e) {
        return this.focusedItemId === this.getItemId(e)
      }, 'isItemFocused'),
      isItemGroup: t(function (e) {
        return K(e.items)
      }, 'isItemGroup'),
      onEnter: t(function () {
        it(this.container, this.level)
      }, 'onEnter'),
      onItemClick: t(function (e, t) {
        this.getItemProp(t, 'command', { originalEvent: e, item: t.item }),
          this.$emit('item-click', {
            originalEvent: e,
            processedItem: t,
            isFocus: !0
          })
      }, 'onItemClick'),
      onItemMouseEnter: t(function (e, t) {
        this.$emit('item-mouseenter', { originalEvent: e, processedItem: t })
      }, 'onItemMouseEnter'),
      onItemMouseMove: t(function (e, t) {
        this.$emit('item-mousemove', { originalEvent: e, processedItem: t })
      }, 'onItemMouseMove'),
      getAriaSetSize: t(function () {
        var e = this
        return this.items.filter(function (t) {
          return e.isItemVisible(t) && !e.getItemProp(t, 'separator')
        }).length
      }, 'getAriaSetSize'),
      getAriaPosInset: t(function (e) {
        var t = this
        return (
          e -
          this.items.slice(0, e).filter(function (e) {
            return t.isItemVisible(e) && t.getItemProp(e, 'separator')
          }).length +
          1
        )
      }, 'getAriaPosInset'),
      getMenuItemProps: t(function (e, t) {
        return {
          action: Vue.mergeProps(
            { class: this.cx('itemLink'), tabindex: -1 },
            this.getPTOptions(e, t, 'itemLink')
          ),
          icon: Vue.mergeProps(
            { class: [this.cx('itemIcon'), this.getItemProp(e, 'icon')] },
            this.getPTOptions(e, t, 'itemIcon')
          ),
          label: Vue.mergeProps(
            { class: this.cx('itemLabel') },
            this.getPTOptions(e, t, 'itemLabel')
          ),
          submenuicon: Vue.mergeProps(
            { class: this.cx('submenuIcon') },
            this.getPTOptions(e, t, 'submenuIcon')
          )
        }
      }, 'getMenuItemProps'),
      containerRef: t(function (e) {
        this.container = e
      }, 'containerRef')
    },
    components: { AngleRightIcon: Ye },
    directives: { ripple: L }
  },
  qi = ['tabindex'],
  Zi = [
    'id',
    'aria-label',
    'aria-disabled',
    'aria-expanded',
    'aria-haspopup',
    'aria-level',
    'aria-setsize',
    'aria-posinset',
    'data-p-active',
    'data-p-focused',
    'data-p-disabled'
  ],
  Qi = ['onClick', 'onMouseenter', 'onMousemove'],
  Xi = ['href', 'target'],
  Yi = ['id'],
  Ji = ['id']
function ea(e, n, o, i, a, r) {
  var s = Vue.resolveComponent('AngleRightIcon'),
    l = Vue.resolveComponent('TieredMenuSub', !0),
    u = Vue.resolveDirective('ripple')
  return (
    Vue.openBlock(),
    Vue.createBlock(
      Vue.Transition,
      Vue.mergeProps(
        { name: 'p-tieredmenu', onEnter: r.onEnter },
        e.ptm('menu.transition')
      ),
      {
        default: Vue.withCtx(function () {
          return [
            0 === o.level || o.visible
              ? (Vue.openBlock(),
                Vue.createElementBlock(
                  'ul',
                  { key: 0, ref: r.containerRef, tabindex: o.tabindex },
                  [
                    (Vue.openBlock(!0),
                    Vue.createElementBlock(
                      Vue.Fragment,
                      null,
                      Vue.renderList(o.items, function (i, a) {
                        return (
                          Vue.openBlock(),
                          Vue.createElementBlock(
                            Vue.Fragment,
                            { key: r.getItemKey(i) },
                            [
                              r.isItemVisible(i) &&
                              !r.getItemProp(i, 'separator')
                                ? (Vue.openBlock(),
                                  Vue.createElementBlock(
                                    'li',
                                    Vue.mergeProps(
                                      {
                                        key: 0,
                                        id: r.getItemId(i),
                                        style: r.getItemProp(i, 'style'),
                                        class: [
                                          e.cx('item', { processedItem: i }),
                                          r.getItemProp(i, 'class')
                                        ],
                                        role: 'menuitem',
                                        'aria-label': r.getItemLabel(i),
                                        'aria-disabled':
                                          r.isItemDisabled(i) || void 0,
                                        'aria-expanded': r.isItemGroup(i)
                                          ? r.isItemActive(i)
                                          : void 0,
                                        'aria-haspopup':
                                          r.isItemGroup(i) &&
                                          !r.getItemProp(i, 'to')
                                            ? 'menu'
                                            : void 0,
                                        'aria-level': o.level + 1,
                                        'aria-setsize': r.getAriaSetSize(),
                                        'aria-posinset': r.getAriaPosInset(a),
                                        ref_for: !0
                                      },
                                      r.getPTOptions(i, a, 'item'),
                                      {
                                        'data-p-active': r.isItemActive(i),
                                        'data-p-focused': r.isItemFocused(i),
                                        'data-p-disabled': r.isItemDisabled(i)
                                      }
                                    ),
                                    [
                                      Vue.createElementVNode(
                                        'div',
                                        Vue.mergeProps(
                                          {
                                            class: e.cx('itemContent'),
                                            onClick: t(function (e) {
                                              return r.onItemClick(e, i)
                                            }, 'onClick'),
                                            onMouseenter: t(function (e) {
                                              return r.onItemMouseEnter(e, i)
                                            }, 'onMouseenter'),
                                            onMousemove: t(function (e) {
                                              return r.onItemMouseMove(e, i)
                                            }, 'onMousemove'),
                                            ref_for: !0
                                          },
                                          r.getPTOptions(i, a, 'itemContent')
                                        ),
                                        [
                                          o.templates.item
                                            ? (Vue.openBlock(),
                                              Vue.createBlock(
                                                Vue.resolveDynamicComponent(
                                                  o.templates.item
                                                ),
                                                {
                                                  key: 1,
                                                  item: i.item,
                                                  hasSubmenu: r.getItemProp(
                                                    i,
                                                    'items'
                                                  ),
                                                  label: r.getItemLabel(i),
                                                  props: r.getMenuItemProps(
                                                    i,
                                                    a
                                                  )
                                                },
                                                null,
                                                8,
                                                [
                                                  'item',
                                                  'hasSubmenu',
                                                  'label',
                                                  'props'
                                                ]
                                              ))
                                            : Vue.withDirectives(
                                                (Vue.openBlock(),
                                                Vue.createElementBlock(
                                                  'a',
                                                  Vue.mergeProps(
                                                    {
                                                      key: 0,
                                                      href: r.getItemProp(
                                                        i,
                                                        'url'
                                                      ),
                                                      class: e.cx('itemLink'),
                                                      target: r.getItemProp(
                                                        i,
                                                        'target'
                                                      ),
                                                      tabindex: '-1',
                                                      ref_for: !0
                                                    },
                                                    r.getPTOptions(
                                                      i,
                                                      a,
                                                      'itemLink'
                                                    )
                                                  ),
                                                  [
                                                    o.templates.itemicon
                                                      ? (Vue.openBlock(),
                                                        Vue.createBlock(
                                                          Vue.resolveDynamicComponent(
                                                            o.templates.itemicon
                                                          ),
                                                          {
                                                            key: 0,
                                                            item: i.item,
                                                            class:
                                                              Vue.normalizeClass(
                                                                e.cx('itemIcon')
                                                              )
                                                          },
                                                          null,
                                                          8,
                                                          ['item', 'class']
                                                        ))
                                                      : r.getItemProp(i, 'icon')
                                                        ? (Vue.openBlock(),
                                                          Vue.createElementBlock(
                                                            'span',
                                                            Vue.mergeProps(
                                                              {
                                                                key: 1,
                                                                class: [
                                                                  e.cx(
                                                                    'itemIcon'
                                                                  ),
                                                                  r.getItemProp(
                                                                    i,
                                                                    'icon'
                                                                  )
                                                                ],
                                                                ref_for: !0
                                                              },
                                                              r.getPTOptions(
                                                                i,
                                                                a,
                                                                'itemIcon'
                                                              )
                                                            ),
                                                            null,
                                                            16
                                                          ))
                                                        : Vue.createCommentVNode(
                                                            '',
                                                            !0
                                                          ),
                                                    Vue.createElementVNode(
                                                      'span',
                                                      Vue.mergeProps(
                                                        {
                                                          id: r.getItemLabelId(
                                                            i
                                                          ),
                                                          class:
                                                            e.cx('itemLabel'),
                                                          ref_for: !0
                                                        },
                                                        r.getPTOptions(
                                                          i,
                                                          a,
                                                          'itemLabel'
                                                        )
                                                      ),
                                                      Vue.toDisplayString(
                                                        r.getItemLabel(i)
                                                      ),
                                                      17,
                                                      Yi
                                                    ),
                                                    r.getItemProp(i, 'items')
                                                      ? (Vue.openBlock(),
                                                        Vue.createElementBlock(
                                                          Vue.Fragment,
                                                          { key: 2 },
                                                          [
                                                            o.templates
                                                              .submenuicon
                                                              ? (Vue.openBlock(),
                                                                Vue.createBlock(
                                                                  Vue.resolveDynamicComponent(
                                                                    o.templates
                                                                      .submenuicon
                                                                  ),
                                                                  Vue.mergeProps(
                                                                    {
                                                                      key: 0,
                                                                      class:
                                                                        e.cx(
                                                                          'submenuIcon'
                                                                        ),
                                                                      active:
                                                                        r.isItemActive(
                                                                          i
                                                                        ),
                                                                      ref_for:
                                                                        !0
                                                                    },
                                                                    r.getPTOptions(
                                                                      i,
                                                                      a,
                                                                      'submenuIcon'
                                                                    )
                                                                  ),
                                                                  null,
                                                                  16,
                                                                  [
                                                                    'class',
                                                                    'active'
                                                                  ]
                                                                ))
                                                              : (Vue.openBlock(),
                                                                Vue.createBlock(
                                                                  s,
                                                                  Vue.mergeProps(
                                                                    {
                                                                      key: 1,
                                                                      class:
                                                                        e.cx(
                                                                          'submenuIcon'
                                                                        ),
                                                                      ref_for:
                                                                        !0
                                                                    },
                                                                    r.getPTOptions(
                                                                      i,
                                                                      a,
                                                                      'submenuIcon'
                                                                    )
                                                                  ),
                                                                  null,
                                                                  16,
                                                                  ['class']
                                                                ))
                                                          ],
                                                          64
                                                        ))
                                                      : Vue.createCommentVNode(
                                                          '',
                                                          !0
                                                        )
                                                  ],
                                                  16,
                                                  Xi
                                                )),
                                                [[u]]
                                              )
                                        ],
                                        16,
                                        Qi
                                      ),
                                      r.isItemVisible(i) && r.isItemGroup(i)
                                        ? (Vue.openBlock(),
                                          Vue.createBlock(
                                            l,
                                            Vue.mergeProps(
                                              {
                                                key: 0,
                                                id: r.getItemId(i) + '_list',
                                                class: e.cx('submenu'),
                                                style: e.sx('submenu', !0, {
                                                  processedItem: i
                                                }),
                                                'aria-labelledby':
                                                  r.getItemLabelId(i),
                                                role: 'menu',
                                                menuId: o.menuId,
                                                focusedItemId: o.focusedItemId,
                                                items: i.items,
                                                templates: o.templates,
                                                activeItemPath:
                                                  o.activeItemPath,
                                                level: o.level + 1,
                                                visible:
                                                  r.isItemActive(i) &&
                                                  r.isItemGroup(i),
                                                pt: e.pt,
                                                unstyled: e.unstyled,
                                                onItemClick:
                                                  n[0] ||
                                                  (n[0] = function (t) {
                                                    return e.$emit(
                                                      'item-click',
                                                      t
                                                    )
                                                  }),
                                                onItemMouseenter:
                                                  n[1] ||
                                                  (n[1] = function (t) {
                                                    return e.$emit(
                                                      'item-mouseenter',
                                                      t
                                                    )
                                                  }),
                                                onItemMousemove:
                                                  n[2] ||
                                                  (n[2] = function (t) {
                                                    return e.$emit(
                                                      'item-mousemove',
                                                      t
                                                    )
                                                  }),
                                                ref_for: !0
                                              },
                                              e.ptm('submenu')
                                            ),
                                            null,
                                            16,
                                            [
                                              'id',
                                              'class',
                                              'style',
                                              'aria-labelledby',
                                              'menuId',
                                              'focusedItemId',
                                              'items',
                                              'templates',
                                              'activeItemPath',
                                              'level',
                                              'visible',
                                              'pt',
                                              'unstyled'
                                            ]
                                          ))
                                        : Vue.createCommentVNode('', !0)
                                    ],
                                    16,
                                    Zi
                                  ))
                                : Vue.createCommentVNode('', !0),
                              r.isItemVisible(i) &&
                              r.getItemProp(i, 'separator')
                                ? (Vue.openBlock(),
                                  Vue.createElementBlock(
                                    'li',
                                    Vue.mergeProps(
                                      {
                                        key: 1,
                                        id: r.getItemId(i),
                                        style: r.getItemProp(i, 'style'),
                                        class: [
                                          e.cx('separator'),
                                          r.getItemProp(i, 'class')
                                        ],
                                        role: 'separator',
                                        ref_for: !0
                                      },
                                      e.ptm('separator')
                                    ),
                                    null,
                                    16,
                                    Ji
                                  ))
                                : Vue.createCommentVNode('', !0)
                            ],
                            64
                          )
                        )
                      }),
                      128
                    ))
                  ],
                  8,
                  qi
                ))
              : Vue.createCommentVNode('', !0)
          ]
        }),
        _: 1
      },
      16,
      ['onEnter']
    )
  )
}
t(ea, 'render$1'), (Wi.render = ea)
var ta = {
    name: 'TieredMenu',
    extends: Hi,
    inheritAttrs: !1,
    emits: ['focus', 'blur', 'before-show', 'before-hide', 'hide', 'show'],
    outsideClickListener: null,
    matchMediaListener: null,
    scrollHandler: null,
    resizeListener: null,
    target: null,
    container: null,
    menubar: null,
    searchTimeout: null,
    searchValue: null,
    data: t(function () {
      return {
        id: this.$attrs.id,
        focused: !1,
        focusedItemInfo: { index: -1, level: 0, parentKey: '' },
        activeItemPath: [],
        visible: !this.popup,
        submenuVisible: !1,
        dirty: !1,
        query: null,
        queryMatches: !1
      }
    }, 'data'),
    watch: {
      '$attrs.id': t(function (e) {
        this.id = e || R()
      }, '$attrsId'),
      activeItemPath: t(function (e) {
        this.popup ||
          (K(e)
            ? (this.bindOutsideClickListener(), this.bindResizeListener())
            : (this.unbindOutsideClickListener(), this.unbindResizeListener()))
      }, 'activeItemPath')
    },
    mounted: t(function () {
      ;(this.id = this.id || R()), this.bindMatchMediaListener()
    }, 'mounted'),
    beforeUnmount: t(function () {
      this.unbindOutsideClickListener(),
        this.unbindResizeListener(),
        this.unbindMatchMediaListener(),
        this.scrollHandler &&
          (this.scrollHandler.destroy(), (this.scrollHandler = null)),
        this.container && this.autoZIndex && G.clear(this.container),
        (this.target = null),
        (this.container = null)
    }, 'beforeUnmount'),
    methods: {
      getItemProp: t(function (e, t) {
        return e ? Xe(e[t]) : void 0
      }, 'getItemProp'),
      getItemLabel: t(function (e) {
        return this.getItemProp(e, 'label')
      }, 'getItemLabel'),
      isItemDisabled: t(function (e) {
        return this.getItemProp(e, 'disabled')
      }, 'isItemDisabled'),
      isItemVisible: t(function (e) {
        return !1 !== this.getItemProp(e, 'visible')
      }, 'isItemVisible'),
      isItemGroup: t(function (e) {
        return K(this.getItemProp(e, 'items'))
      }, 'isItemGroup'),
      isItemSeparator: t(function (e) {
        return this.getItemProp(e, 'separator')
      }, 'isItemSeparator'),
      getProccessedItemLabel: t(function (e) {
        return e ? this.getItemLabel(e.item) : void 0
      }, 'getProccessedItemLabel'),
      isProccessedItemGroup: t(function (e) {
        return e && K(e.items)
      }, 'isProccessedItemGroup'),
      toggle: t(function (e) {
        this.visible ? this.hide(e, !0) : this.show(e)
      }, 'toggle'),
      show: t(function (e, t) {
        this.popup &&
          (this.$emit('before-show'),
          (this.visible = !0),
          (this.target = this.target || e.currentTarget),
          (this.relatedTarget = e.relatedTarget || null)),
          t && T(this.menubar)
      }, 'show'),
      hide: t(function (e, t) {
        this.popup && (this.$emit('before-hide'), (this.visible = !1)),
          (this.activeItemPath = []),
          (this.focusedItemInfo = { index: -1, level: 0, parentKey: '' }),
          t && T(this.relatedTarget || this.target || this.menubar),
          (this.dirty = !1)
      }, 'hide'),
      onFocus: t(function (e) {
        ;(this.focused = !0),
          this.popup ||
            (this.focusedItemInfo =
              -1 !== this.focusedItemInfo.index
                ? this.focusedItemInfo
                : {
                    index: this.findFirstFocusedItemIndex(),
                    level: 0,
                    parentKey: ''
                  }),
          this.$emit('focus', e)
      }, 'onFocus'),
      onBlur: t(function (e) {
        ;(this.focused = !1),
          (this.focusedItemInfo = { index: -1, level: 0, parentKey: '' }),
          (this.searchValue = ''),
          (this.dirty = !1),
          this.$emit('blur', e)
      }, 'onBlur'),
      onKeyDown: t(function (e) {
        if (this.disabled) e.preventDefault()
        else {
          var t = e.metaKey || e.ctrlKey
          switch (e.code) {
            case 'ArrowDown':
              this.onArrowDownKey(e)
              break
            case 'ArrowUp':
              this.onArrowUpKey(e)
              break
            case 'ArrowLeft':
              this.onArrowLeftKey(e)
              break
            case 'ArrowRight':
              this.onArrowRightKey(e)
              break
            case 'Home':
              this.onHomeKey(e)
              break
            case 'End':
              this.onEndKey(e)
              break
            case 'Space':
              this.onSpaceKey(e)
              break
            case 'Enter':
            case 'NumpadEnter':
              this.onEnterKey(e)
              break
            case 'Escape':
              this.onEscapeKey(e)
              break
            case 'Tab':
              this.onTabKey(e)
              break
            case 'PageDown':
            case 'PageUp':
            case 'Backspace':
            case 'ShiftLeft':
            case 'ShiftRight':
              break
            default:
              !t && et(e.key) && this.searchItems(e, e.key)
          }
        }
      }, 'onKeyDown'),
      onItemChange: t(function (e, t) {
        var n = e.processedItem,
          o = e.isFocus
        if (!H(n)) {
          var i = n.index,
            a = n.key,
            r = n.level,
            s = n.parentKey,
            l = n.items,
            u = K(l),
            c = this.activeItemPath.filter(function (e) {
              return e.parentKey !== s && e.parentKey !== a
            })
          u && (c.push(n), (this.submenuVisible = !0)),
            (this.focusedItemInfo = { index: i, level: r, parentKey: s }),
            u && (this.dirty = !0),
            o && T(this.menubar),
            ('hover' === t && this.queryMatches) || (this.activeItemPath = c)
        }
      }, 'onItemChange'),
      onOverlayClick: t(function (e) {
        j.emit('overlay-click', { originalEvent: e, target: this.target })
      }, 'onOverlayClick'),
      onItemClick: t(function (e) {
        var t = e.originalEvent,
          n = e.processedItem,
          o = this.isProccessedItemGroup(n),
          i = H(n.parent)
        if (this.isSelected(n)) {
          var a = n.index,
            r = n.key,
            s = n.level,
            l = n.parentKey
          ;(this.activeItemPath = this.activeItemPath.filter(function (e) {
            return r !== e.key && r.startsWith(e.key)
          })),
            (this.focusedItemInfo = { index: a, level: s, parentKey: l }),
            (this.dirty = !i),
            T(this.menubar)
        } else if (o) this.onItemChange(e)
        else {
          var u = i
            ? n
            : this.activeItemPath.find(function (e) {
                return '' === e.parentKey
              })
          this.hide(t),
            this.changeFocusedItemIndex(t, u ? u.index : -1),
            T(this.menubar)
        }
      }, 'onItemClick'),
      onItemMouseEnter: t(function (e) {
        this.dirty && this.onItemChange(e, 'hover')
      }, 'onItemMouseEnter'),
      onItemMouseMove: t(function (e) {
        this.focused && this.changeFocusedItemIndex(e, e.processedItem.index)
      }, 'onItemMouseMove'),
      onArrowDownKey: t(function (e) {
        var t =
          -1 !== this.focusedItemInfo.index
            ? this.findNextItemIndex(this.focusedItemInfo.index)
            : this.findFirstFocusedItemIndex()
        this.changeFocusedItemIndex(e, t), e.preventDefault()
      }, 'onArrowDownKey'),
      onArrowUpKey: t(function (e) {
        if (e.altKey) {
          if (-1 !== this.focusedItemInfo.index) {
            var t = this.visibleItems[this.focusedItemInfo.index]
            !this.isProccessedItemGroup(t) &&
              this.onItemChange({ originalEvent: e, processedItem: t })
          }
          this.popup && this.hide(e, !0), e.preventDefault()
        } else {
          var n =
            -1 !== this.focusedItemInfo.index
              ? this.findPrevItemIndex(this.focusedItemInfo.index)
              : this.findLastFocusedItemIndex()
          this.changeFocusedItemIndex(e, n), e.preventDefault()
        }
      }, 'onArrowUpKey'),
      onArrowLeftKey: t(function (e) {
        var t = this,
          n = this.visibleItems[this.focusedItemInfo.index],
          o = this.activeItemPath.find(function (e) {
            return e.key === n.parentKey
          })
        H(n.parent) ||
          ((this.focusedItemInfo = {
            index: -1,
            parentKey: o ? o.parentKey : ''
          }),
          (this.searchValue = ''),
          this.onArrowDownKey(e)),
          (this.activeItemPath = this.activeItemPath.filter(function (e) {
            return e.parentKey !== t.focusedItemInfo.parentKey
          })),
          e.preventDefault()
      }, 'onArrowLeftKey'),
      onArrowRightKey: t(function (e) {
        var t = this.visibleItems[this.focusedItemInfo.index]
        this.isProccessedItemGroup(t) &&
          (this.onItemChange({ originalEvent: e, processedItem: t }),
          (this.focusedItemInfo = { index: -1, parentKey: t.key }),
          (this.searchValue = ''),
          this.onArrowDownKey(e)),
          e.preventDefault()
      }, 'onArrowRightKey'),
      onHomeKey: t(function (e) {
        this.changeFocusedItemIndex(e, this.findFirstItemIndex()),
          e.preventDefault()
      }, 'onHomeKey'),
      onEndKey: t(function (e) {
        this.changeFocusedItemIndex(e, this.findLastItemIndex()),
          e.preventDefault()
      }, 'onEndKey'),
      onEnterKey: t(function (e) {
        if (-1 !== this.focusedItemInfo.index) {
          var t = w(
              this.menubar,
              'li[id="'.concat(''.concat(this.focusedItemId), '"]')
            ),
            n = t && w(t, '[data-pc-section="itemlink"]')
          if ((n ? n.click() : t && t.click(), !this.popup)) {
            var o = this.visibleItems[this.focusedItemInfo.index]
            !this.isProccessedItemGroup(o) &&
              (this.focusedItemInfo.index = this.findFirstFocusedItemIndex())
          }
        }
        e.preventDefault()
      }, 'onEnterKey'),
      onSpaceKey: t(function (e) {
        this.onEnterKey(e)
      }, 'onSpaceKey'),
      onEscapeKey: t(function (e) {
        if (this.popup || 0 !== this.focusedItemInfo.level) {
          var t = this.focusedItemInfo
          this.hide(e, !1),
            (this.focusedItemInfo = {
              index: Number(t.parentKey.split('_')[0]),
              level: 0,
              parentKey: ''
            }),
            this.popup && T(this.target)
        }
        e.preventDefault()
      }, 'onEscapeKey'),
      onTabKey: t(function (e) {
        if (-1 !== this.focusedItemInfo.index) {
          var t = this.visibleItems[this.focusedItemInfo.index]
          !this.isProccessedItemGroup(t) &&
            this.onItemChange({ originalEvent: e, processedItem: t })
        }
        this.hide()
      }, 'onTabKey'),
      onEnter: t(function (e) {
        this.autoZIndex &&
          G.set('menu', e, this.baseZIndex + this.$primevue.config.zIndex.menu),
          W(e, { position: 'absolute', top: '0', left: '0' }),
          this.alignOverlay(),
          T(this.menubar),
          this.scrollInView()
      }, 'onEnter'),
      onAfterEnter: t(function () {
        this.bindOutsideClickListener(),
          this.bindScrollListener(),
          this.bindResizeListener(),
          this.$emit('show')
      }, 'onAfterEnter'),
      onLeave: t(function () {
        this.unbindOutsideClickListener(),
          this.unbindScrollListener(),
          this.unbindResizeListener(),
          this.$emit('hide'),
          (this.container = null),
          (this.dirty = !1)
      }, 'onLeave'),
      onAfterLeave: t(function (e) {
        this.autoZIndex && G.clear(e)
      }, 'onAfterLeave'),
      alignOverlay: t(function () {
        Z(this.container, this.target),
          S(this.target) > S(this.container) &&
            (this.container.style.minWidth = S(this.target) + 'px')
      }, 'alignOverlay'),
      bindOutsideClickListener: t(function () {
        var e = this
        this.outsideClickListener ||
          ((this.outsideClickListener = function (t) {
            var n = e.container && !e.container.contains(t.target),
              o =
                !e.popup ||
                !(
                  e.target &&
                  (e.target === t.target || e.target.contains(t.target))
                )
            n && o && e.hide()
          }),
          document.addEventListener('click', this.outsideClickListener))
      }, 'bindOutsideClickListener'),
      unbindOutsideClickListener: t(function () {
        this.outsideClickListener &&
          (document.removeEventListener('click', this.outsideClickListener),
          (this.outsideClickListener = null))
      }, 'unbindOutsideClickListener'),
      bindScrollListener: t(function () {
        var e = this
        this.scrollHandler ||
          (this.scrollHandler = new Q(this.target, function (t) {
            e.hide(t, !0)
          })),
          this.scrollHandler.bindScrollListener()
      }, 'bindScrollListener'),
      unbindScrollListener: t(function () {
        this.scrollHandler && this.scrollHandler.unbindScrollListener()
      }, 'unbindScrollListener'),
      bindResizeListener: t(function () {
        var e = this
        this.resizeListener ||
          ((this.resizeListener = function (t) {
            X() || e.hide(t, !0)
          }),
          window.addEventListener('resize', this.resizeListener))
      }, 'bindResizeListener'),
      unbindResizeListener: t(function () {
        this.resizeListener &&
          (window.removeEventListener('resize', this.resizeListener),
          (this.resizeListener = null))
      }, 'unbindResizeListener'),
      bindMatchMediaListener: t(function () {
        var e = this
        if (!this.matchMediaListener) {
          var t = matchMedia('(max-width: '.concat(this.breakpoint, ')'))
          ;(this.query = t),
            (this.queryMatches = t.matches),
            (this.matchMediaListener = function () {
              e.queryMatches = t.matches
            }),
            this.query.addEventListener('change', this.matchMediaListener)
        }
      }, 'bindMatchMediaListener'),
      unbindMatchMediaListener: t(function () {
        this.matchMediaListener &&
          (this.query.removeEventListener('change', this.matchMediaListener),
          (this.matchMediaListener = null))
      }, 'unbindMatchMediaListener'),
      isItemMatched: t(function (e) {
        var t
        return (
          this.isValidItem(e) &&
          (null === (t = this.getProccessedItemLabel(e)) || void 0 === t
            ? void 0
            : t
                .toLocaleLowerCase()
                .startsWith(this.searchValue.toLocaleLowerCase()))
        )
      }, 'isItemMatched'),
      isValidItem: t(function (e) {
        return (
          !!e &&
          !this.isItemDisabled(e.item) &&
          !this.isItemSeparator(e.item) &&
          this.isItemVisible(e.item)
        )
      }, 'isValidItem'),
      isValidSelectedItem: t(function (e) {
        return this.isValidItem(e) && this.isSelected(e)
      }, 'isValidSelectedItem'),
      isSelected: t(function (e) {
        return this.activeItemPath.some(function (t) {
          return t.key === e.key
        })
      }, 'isSelected'),
      findFirstItemIndex: t(function () {
        var e = this
        return this.visibleItems.findIndex(function (t) {
          return e.isValidItem(t)
        })
      }, 'findFirstItemIndex'),
      findLastItemIndex: t(function () {
        var e = this
        return Y(this.visibleItems, function (t) {
          return e.isValidItem(t)
        })
      }, 'findLastItemIndex'),
      findNextItemIndex: t(function (e) {
        var t = this,
          n =
            e < this.visibleItems.length - 1
              ? this.visibleItems.slice(e + 1).findIndex(function (e) {
                  return t.isValidItem(e)
                })
              : -1
        return n > -1 ? n + e + 1 : e
      }, 'findNextItemIndex'),
      findPrevItemIndex: t(function (e) {
        var t = this,
          n =
            e > 0
              ? Y(this.visibleItems.slice(0, e), function (e) {
                  return t.isValidItem(e)
                })
              : -1
        return n > -1 ? n : e
      }, 'findPrevItemIndex'),
      findSelectedItemIndex: t(function () {
        var e = this
        return this.visibleItems.findIndex(function (t) {
          return e.isValidSelectedItem(t)
        })
      }, 'findSelectedItemIndex'),
      findFirstFocusedItemIndex: t(function () {
        var e = this.findSelectedItemIndex()
        return e < 0 ? this.findFirstItemIndex() : e
      }, 'findFirstFocusedItemIndex'),
      findLastFocusedItemIndex: t(function () {
        var e = this.findSelectedItemIndex()
        return e < 0 ? this.findLastItemIndex() : e
      }, 'findLastFocusedItemIndex'),
      searchItems: t(function (e, t) {
        var n = this
        this.searchValue = (this.searchValue || '') + t
        var o = -1,
          i = !1
        return (
          -1 !==
            (o =
              -1 !== this.focusedItemInfo.index
                ? -1 ===
                  (o = this.visibleItems
                    .slice(this.focusedItemInfo.index)
                    .findIndex(function (e) {
                      return n.isItemMatched(e)
                    }))
                  ? this.visibleItems
                      .slice(0, this.focusedItemInfo.index)
                      .findIndex(function (e) {
                        return n.isItemMatched(e)
                      })
                  : o + this.focusedItemInfo.index
                : this.visibleItems.findIndex(function (e) {
                    return n.isItemMatched(e)
                  })) && (i = !0),
          -1 === o &&
            -1 === this.focusedItemInfo.index &&
            (o = this.findFirstFocusedItemIndex()),
          -1 !== o && this.changeFocusedItemIndex(e, o),
          this.searchTimeout && clearTimeout(this.searchTimeout),
          (this.searchTimeout = setTimeout(function () {
            ;(n.searchValue = ''), (n.searchTimeout = null)
          }, 500)),
          i
        )
      }, 'searchItems'),
      changeFocusedItemIndex: t(function (e, t) {
        this.focusedItemInfo.index !== t &&
          ((this.focusedItemInfo.index = t), this.scrollInView())
      }, 'changeFocusedItemIndex'),
      scrollInView: t(function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
          t = -1 !== e ? ''.concat(this.id, '_').concat(e) : this.focusedItemId,
          n = w(this.menubar, 'li[id="'.concat(t, '"]'))
        n &&
          n.scrollIntoView &&
          n.scrollIntoView({ block: 'nearest', inline: 'start' })
      }, 'scrollInView'),
      createProcessedItems: t(function (e) {
        var t = this,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
          a = []
        return (
          e &&
            e.forEach(function (e, r) {
              var s = ('' !== i ? i + '_' : '') + r,
                l = {
                  item: e,
                  index: r,
                  level: n,
                  key: s,
                  parent: o,
                  parentKey: i
                }
              ;(l.items = t.createProcessedItems(e.items, n + 1, l, s)),
                a.push(l)
            }),
          a
        )
      }, 'createProcessedItems'),
      containerRef: t(function (e) {
        this.container = e
      }, 'containerRef'),
      menubarRef: t(function (e) {
        this.menubar = e ? e.$el : void 0
      }, 'menubarRef')
    },
    computed: {
      processedItems: t(function () {
        return this.createProcessedItems(this.model || [])
      }, 'processedItems'),
      visibleItems: t(function () {
        var e = this,
          t = this.activeItemPath.find(function (t) {
            return t.key === e.focusedItemInfo.parentKey
          })
        return t ? t.items : this.processedItems
      }, 'visibleItems'),
      focusedItemId: t(function () {
        return -1 !== this.focusedItemInfo.index
          ? ''
              .concat(this.id)
              .concat(
                K(this.focusedItemInfo.parentKey)
                  ? '_' + this.focusedItemInfo.parentKey
                  : '',
                '_'
              )
              .concat(this.focusedItemInfo.index)
          : null
      }, 'focusedItemId')
    },
    components: { TieredMenuSub: Wi, Portal: te }
  },
  na = ['id']
function oa(e, t, n, o, i, a) {
  var r = Vue.resolveComponent('TieredMenuSub'),
    s = Vue.resolveComponent('Portal')
  return (
    Vue.openBlock(),
    Vue.createBlock(
      s,
      { appendTo: e.appendTo, disabled: !e.popup },
      {
        default: Vue.withCtx(function () {
          return [
            Vue.createVNode(
              Vue.Transition,
              Vue.mergeProps(
                {
                  name: 'p-connected-overlay',
                  onEnter: a.onEnter,
                  onAfterEnter: a.onAfterEnter,
                  onLeave: a.onLeave,
                  onAfterLeave: a.onAfterLeave
                },
                e.ptm('transition')
              ),
              {
                default: Vue.withCtx(function () {
                  return [
                    i.visible
                      ? (Vue.openBlock(),
                        Vue.createElementBlock(
                          'div',
                          Vue.mergeProps(
                            {
                              key: 0,
                              ref: a.containerRef,
                              id: i.id,
                              class: e.cx('root'),
                              onClick:
                                t[0] ||
                                (t[0] = function () {
                                  return (
                                    a.onOverlayClick &&
                                    a.onOverlayClick.apply(a, arguments)
                                  )
                                })
                            },
                            e.ptmi('root')
                          ),
                          [
                            e.$slots.start
                              ? (Vue.openBlock(),
                                Vue.createElementBlock(
                                  'div',
                                  Vue.mergeProps(
                                    { key: 0, class: e.cx('start') },
                                    e.ptm('start')
                                  ),
                                  [Vue.renderSlot(e.$slots, 'start')],
                                  16
                                ))
                              : Vue.createCommentVNode('', !0),
                            Vue.createVNode(
                              r,
                              Vue.mergeProps(
                                {
                                  ref: a.menubarRef,
                                  id: i.id + '_list',
                                  class: e.cx('rootList'),
                                  tabindex: e.disabled ? -1 : e.tabindex,
                                  role: 'menubar',
                                  'aria-label': e.ariaLabel,
                                  'aria-labelledby': e.ariaLabelledby,
                                  'aria-disabled': e.disabled || void 0,
                                  'aria-orientation': 'vertical',
                                  'aria-activedescendant': i.focused
                                    ? a.focusedItemId
                                    : void 0,
                                  menuId: i.id,
                                  focusedItemId: i.focused
                                    ? a.focusedItemId
                                    : void 0,
                                  items: a.processedItems,
                                  templates: e.$slots,
                                  activeItemPath: i.activeItemPath,
                                  level: 0,
                                  visible: i.submenuVisible,
                                  pt: e.pt,
                                  unstyled: e.unstyled,
                                  onFocus: a.onFocus,
                                  onBlur: a.onBlur,
                                  onKeydown: a.onKeyDown,
                                  onItemClick: a.onItemClick,
                                  onItemMouseenter: a.onItemMouseEnter,
                                  onItemMousemove: a.onItemMouseMove
                                },
                                e.ptm('rootList')
                              ),
                              null,
                              16,
                              [
                                'id',
                                'class',
                                'tabindex',
                                'aria-label',
                                'aria-labelledby',
                                'aria-disabled',
                                'aria-activedescendant',
                                'menuId',
                                'focusedItemId',
                                'items',
                                'templates',
                                'activeItemPath',
                                'visible',
                                'pt',
                                'unstyled',
                                'onFocus',
                                'onBlur',
                                'onKeydown',
                                'onItemClick',
                                'onItemMouseenter',
                                'onItemMousemove'
                              ]
                            ),
                            e.$slots.end
                              ? (Vue.openBlock(),
                                Vue.createElementBlock(
                                  'div',
                                  Vue.mergeProps(
                                    { key: 1, class: e.cx('end') },
                                    e.ptm('end')
                                  ),
                                  [Vue.renderSlot(e.$slots, 'end')],
                                  16
                                ))
                              : Vue.createCommentVNode('', !0)
                          ],
                          16,
                          na
                        ))
                      : Vue.createCommentVNode('', !0)
                  ]
                }),
                _: 3
              },
              16,
              ['onEnter', 'onAfterEnter', 'onLeave', 'onAfterLeave']
            )
          ]
        }),
        _: 3
      },
      8,
      ['appendTo', 'disabled']
    )
  )
}
t(oa, 'render$2'), (ta.render = oa)
var ia = t(function (e) {
    var t = e.dt
    return '\n.p-splitbutton {\n    display: inline-flex;\n    position: relative;\n    border-radius: '
      .concat(
        t('splitbutton.border.radius'),
        ';\n}\n\n.p-splitbutton-button {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n    border-inline-end: 0 none;\n}\n\n.p-splitbutton-button:focus-visible,\n.p-splitbutton-dropdown:focus-visible {\n    z-index: 1;\n}\n\n.p-splitbutton-button:not(:disabled):hover,\n.p-splitbutton-button:not(:disabled):active {\n    border-inline-end: 0 none;\n}\n\n.p-splitbutton-dropdown {\n    border-start-start-radius: 0;\n    border-end-start-radius: 0;\n}\n\n.p-splitbutton .p-menu {\n    min-width: 100%;\n}\n\n.p-splitbutton-fluid {\n    display: flex;\n}\n\n.p-splitbutton-rounded .p-splitbutton-dropdown {\n    border-start-end-radius: '
      )
      .concat(
        t('splitbutton.rounded.border.radius'),
        ';\n    border-end-end-radius: '
      )
      .concat(
        t('splitbutton.rounded.border.radius'),
        ';\n}\n\n.p-splitbutton-rounded .p-splitbutton-button {\n    border-start-start-radius: '
      )
      .concat(
        t('splitbutton.rounded.border.radius'),
        ';\n    border-end-start-radius: '
      )
      .concat(
        t('splitbutton.rounded.border.radius'),
        ';\n}\n\n.p-splitbutton-raised {\n    box-shadow: '
      )
      .concat(t('splitbutton.raised.shadow'), ';\n}\n')
  }, 'theme'),
  aa = {
    root: t(function (e) {
      var t = e.instance,
        n = e.props
      return [
        'p-splitbutton p-component',
        {
          'p-splitbutton-raised': n.raised,
          'p-splitbutton-rounded': n.rounded,
          'p-splitbutton-fluid': t.hasFluid
        }
      ]
    }, 'root'),
    pcButton: 'p-splitbutton-button',
    pcDropdown: 'p-splitbutton-dropdown'
  },
  ra = c.extend({ name: 'splitbutton', theme: ia, classes: aa }),
  sa = {
    name: 'SplitButton',
    extends: {
      name: 'BaseSplitButton',
      extends: V,
      props: {
        label: { type: String, default: null },
        icon: { type: String, default: null },
        model: { type: Array, default: null },
        autoZIndex: { type: Boolean, default: !0 },
        baseZIndex: { type: Number, default: 0 },
        appendTo: { type: [String, Object], default: 'body' },
        disabled: { type: Boolean, default: !1 },
        fluid: { type: Boolean, default: null },
        class: { type: null, default: null },
        style: { type: null, default: null },
        buttonProps: { type: null, default: null },
        menuButtonProps: { type: null, default: null },
        menuButtonIcon: { type: String, default: void 0 },
        dropdownIcon: { type: String, default: void 0 },
        severity: { type: String, default: null },
        raised: { type: Boolean, default: !1 },
        rounded: { type: Boolean, default: !1 },
        text: { type: Boolean, default: !1 },
        outlined: { type: Boolean, default: !1 },
        size: { type: String, default: null },
        plain: { type: Boolean, default: !1 }
      },
      style: ra,
      provide: t(function () {
        return { $pcSplitButton: this, $parentInstance: this }
      }, 'provide')
    },
    inheritAttrs: !1,
    emits: ['click'],
    inject: { $pcFluid: { default: null } },
    data: t(function () {
      return { id: this.$attrs.id, isExpanded: !1 }
    }, 'data'),
    watch: {
      '$attrs.id': t(function (e) {
        this.id = e || R()
      }, '$attrsId')
    },
    mounted: t(function () {
      var e = this
      ;(this.id = this.id || R()),
        this.$watch('$refs.menu.visible', function (t) {
          e.isExpanded = t
        })
    }, 'mounted'),
    methods: {
      onDropdownButtonClick: t(function (e) {
        e && e.preventDefault(),
          this.$refs.menu.toggle({
            currentTarget: this.$el,
            relatedTarget: this.$refs.button.$el
          }),
          (this.isExpanded = this.$refs.menu.visible)
      }, 'onDropdownButtonClick'),
      onDropdownKeydown: t(function (e) {
        ;('ArrowDown' !== e.code && 'ArrowUp' !== e.code) ||
          (this.onDropdownButtonClick(), e.preventDefault())
      }, 'onDropdownKeydown'),
      onDefaultButtonClick: t(function (e) {
        this.isExpanded && this.$refs.menu.hide(e), this.$emit('click', e)
      }, 'onDefaultButtonClick')
    },
    computed: {
      containerClass: t(function () {
        return [this.cx('root'), this.class]
      }, 'containerClass'),
      hasFluid: t(function () {
        return H(this.fluid) ? !!this.$pcFluid : this.fluid
      }, 'hasFluid')
    },
    components: { PVSButton: p, PVSMenu: ta, ChevronDownIcon: ne }
  },
  la = ['data-p-severity']
function ua(e, t, n, o, i, a) {
  var r = Vue.resolveComponent('PVSButton'),
    s = Vue.resolveComponent('PVSMenu')
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps(
        { class: a.containerClass, style: e.style },
        e.ptmi('root'),
        { 'data-p-severity': e.severity }
      ),
      [
        Vue.createVNode(
          r,
          Vue.mergeProps(
            {
              type: 'button',
              class: e.cx('pcButton'),
              label: e.label,
              disabled: e.disabled,
              severity: e.severity,
              text: e.text,
              icon: e.icon,
              outlined: e.outlined,
              size: e.size,
              fluid: e.fluid,
              'aria-label': e.label,
              onClick: a.onDefaultButtonClick
            },
            e.buttonProps,
            { pt: e.ptm('pcButton'), unstyled: e.unstyled }
          ),
          Vue.createSlots(
            {
              default: Vue.withCtx(function () {
                return [Vue.renderSlot(e.$slots, 'default')]
              }),
              _: 2
            },
            [
              e.$slots.icon
                ? {
                    name: 'icon',
                    fn: Vue.withCtx(function (t) {
                      return [
                        Vue.renderSlot(
                          e.$slots,
                          'icon',
                          { class: Vue.normalizeClass(t.class) },
                          function () {
                            return [
                              Vue.createElementVNode(
                                'span',
                                Vue.mergeProps(
                                  { class: [e.icon, t.class] },
                                  e.ptm('pcButton').icon,
                                  { 'data-pc-section': 'buttonicon' }
                                ),
                                null,
                                16
                              )
                            ]
                          }
                        )
                      ]
                    }),
                    key: '0'
                  }
                : void 0
            ]
          ),
          1040,
          [
            'class',
            'label',
            'disabled',
            'severity',
            'text',
            'icon',
            'outlined',
            'size',
            'fluid',
            'aria-label',
            'onClick',
            'pt',
            'unstyled'
          ]
        ),
        Vue.createVNode(
          r,
          Vue.mergeProps(
            {
              ref: 'button',
              type: 'button',
              class: e.cx('pcDropdown'),
              disabled: e.disabled,
              'aria-haspopup': 'true',
              'aria-expanded': i.isExpanded,
              'aria-controls': i.id + '_overlay',
              onClick: a.onDropdownButtonClick,
              onKeydown: a.onDropdownKeydown,
              severity: e.severity,
              text: e.text,
              outlined: e.outlined,
              size: e.size,
              unstyled: e.unstyled
            },
            e.menuButtonProps,
            { pt: e.ptm('pcDropdown') }
          ),
          {
            icon: Vue.withCtx(function (t) {
              return [
                Vue.renderSlot(
                  e.$slots,
                  e.$slots.dropdownicon ? 'dropdownicon' : 'menubuttonicon',
                  { class: Vue.normalizeClass(t.class) },
                  function () {
                    return [
                      (Vue.openBlock(),
                      Vue.createBlock(
                        Vue.resolveDynamicComponent(
                          e.menuButtonIcon || e.dropdownIcon
                            ? 'span'
                            : 'ChevronDownIcon'
                        ),
                        Vue.mergeProps(
                          {
                            class: [e.dropdownIcon || e.menuButtonIcon, t.class]
                          },
                          e.ptm('pcDropdown').icon,
                          { 'data-pc-section': 'menubuttonicon' }
                        ),
                        null,
                        16,
                        ['class']
                      ))
                    ]
                  }
                )
              ]
            }),
            _: 3
          },
          16,
          [
            'class',
            'disabled',
            'aria-expanded',
            'aria-controls',
            'onClick',
            'onKeydown',
            'severity',
            'text',
            'outlined',
            'size',
            'unstyled',
            'pt'
          ]
        ),
        Vue.createVNode(
          s,
          {
            ref: 'menu',
            id: i.id + '_overlay',
            model: e.model,
            popup: !0,
            autoZIndex: e.autoZIndex,
            baseZIndex: e.baseZIndex,
            appendTo: e.appendTo,
            unstyled: e.unstyled,
            pt: e.ptm('pcMenu')
          },
          Vue.createSlots({ _: 2 }, [
            e.$slots.menuitemicon
              ? {
                  name: 'itemicon',
                  fn: Vue.withCtx(function (t) {
                    return [
                      Vue.renderSlot(e.$slots, 'menuitemicon', {
                        item: t.item,
                        class: Vue.normalizeClass(t.class)
                      })
                    ]
                  }),
                  key: '0'
                }
              : void 0,
            e.$slots.item
              ? {
                  name: 'item',
                  fn: Vue.withCtx(function (t) {
                    return [
                      Vue.renderSlot(e.$slots, 'item', {
                        item: t.item,
                        hasSubmenu: t.hasSubmenu,
                        label: t.label,
                        props: t.props
                      })
                    ]
                  }),
                  key: '1'
                }
              : void 0
          ]),
          1032,
          [
            'id',
            'model',
            'autoZIndex',
            'baseZIndex',
            'appendTo',
            'unstyled',
            'pt'
          ]
        )
      ],
      16,
      la
    )
  )
}
t(ua, 'render'), (sa.render = ua)
const ca = u(
    Vue.defineComponent({
      __name: 'BatchCountEdit',
      props: { class: { default: '' } },
      setup(e) {
        const n = e,
          i = at(),
          { batchCount: a } = be(i),
          r = o(),
          s = Vue.computed(() => r.get('Comfy.QueueButton.BatchCountLimit')),
          l = t((e) => {
            let t
            if (e) {
              t = 2 * (a.value - 1)
            } else {
              const e = a.value + 1
              t = Math.floor(e / 2)
            }
            a.value = t
          }, 'handleClick')
        return (e, o) => {
          const i = Vue.resolveDirective('tooltip')
          return Vue.withDirectives(
            (Vue.openBlock(),
            Vue.createElementBlock(
              'div',
              { class: Vue.normalizeClass(['batch-count', n.class]) },
              [
                Vue.createVNode(
                  Vue.unref(rt),
                  {
                    class: 'w-14',
                    modelValue: Vue.unref(a),
                    'onUpdate:modelValue':
                      o[0] ||
                      (o[0] = (e) => (Vue.isRef(a) ? (a.value = e) : null)),
                    min: 1,
                    max: s.value,
                    fluid: '',
                    showButtons: '',
                    pt: {
                      incrementButton: {
                        class: 'w-6',
                        onmousedown: t(() => {
                          l(!0)
                        }, 'onmousedown')
                      },
                      decrementButton: {
                        class: 'w-6',
                        onmousedown: t(() => {
                          l(!1)
                        }, 'onmousedown')
                      }
                    }
                  },
                  null,
                  8,
                  ['modelValue', 'max', 'pt']
                )
              ],
              2
            )),
            [[i, e.$t('menu.batchCount'), void 0, { bottom: !0 }]]
          )
        }
      }
    }),
    [['__scopeId', 'data-v-713442be']]
  ),
  da = { class: 'queue-button-group flex' },
  pa = u(
    Vue.defineComponent({
      __name: 'ComfyQueueButton',
      setup(e) {
        const n = g(),
          o = be(st()),
          { mode: i } = be(at()),
          { t: a } = VueI18n.useI18n(),
          r = Vue.computed(() => ({
            disabled: {
              key: 'disabled',
              label: a('menu.queue'),
              tooltip: a('menu.disabledTooltip'),
              command: t(() => {
                i.value = 'disabled'
              }, 'command')
            },
            instant: {
              key: 'instant',
              label: `${a('menu.queue')} (${a('menu.instant')})`,
              tooltip: a('menu.instantTooltip'),
              command: t(() => {
                i.value = 'instant'
              }, 'command')
            },
            change: {
              key: 'change',
              label: `${a('menu.queue')} (${a('menu.onChange')})`,
              tooltip: a('menu.onChangeTooltip'),
              command: t(() => {
                i.value = 'change'
              }, 'command')
            }
          })),
          s = Vue.computed(() => r.value[i.value]),
          l = Vue.computed(() => Object.values(r.value)),
          u = Vue.computed(() => !!o.count.value),
          c = Vue.computed(() => o.count.value > 1),
          d = m(),
          f = t((e) => {
            const t = e.shiftKey
              ? 'Comfy.QueuePromptFront'
              : 'Comfy.QueuePrompt'
            d.execute(t)
          }, 'queuePrompt')
        return (e, t) => {
          const o = Vue.resolveComponent('i-lucide:list-start'),
            a = Vue.resolveComponent('i-lucide:play'),
            r = Vue.resolveComponent('i-lucide:fast-forward'),
            m = Vue.resolveComponent('i-lucide:step-forward'),
            h = Vue.resolveDirective('tooltip')
          return (
            Vue.openBlock(),
            Vue.createElementBlock('div', da, [
              Vue.withDirectives(
                (Vue.openBlock(),
                Vue.createBlock(
                  Vue.unref(sa),
                  {
                    class: 'comfyui-queue-button',
                    label: s.value.label,
                    severity: 'primary',
                    size: 'small',
                    onClick: f,
                    model: l.value,
                    'data-testid': 'queue-button'
                  },
                  {
                    icon: Vue.withCtx(() => [
                      Vue.unref(n).shiftDown
                        ? (Vue.openBlock(), Vue.createBlock(o, { key: 0 }))
                        : 'disabled' === Vue.unref(i)
                          ? (Vue.openBlock(), Vue.createBlock(a, { key: 1 }))
                          : 'instant' === Vue.unref(i)
                            ? (Vue.openBlock(), Vue.createBlock(r, { key: 2 }))
                            : 'change' === Vue.unref(i)
                              ? (Vue.openBlock(),
                                Vue.createBlock(m, { key: 3 }))
                              : Vue.createCommentVNode('', !0)
                    ]),
                    item: Vue.withCtx(({ item: e }) => [
                      Vue.withDirectives(
                        Vue.createVNode(
                          Vue.unref(p),
                          {
                            label: e.label,
                            icon: e.icon,
                            severity:
                              e.key === Vue.unref(i) ? 'primary' : 'secondary',
                            size: 'small',
                            text: ''
                          },
                          null,
                          8,
                          ['label', 'icon', 'severity']
                        ),
                        [[h, e.tooltip]]
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ['label', 'model']
                )),
                [
                  [
                    h,
                    Vue.unref(n).shiftDown
                      ? e.$t('menu.queueWorkflowFront')
                      : e.$t('menu.queueWorkflow'),
                    void 0,
                    { bottom: !0 }
                  ]
                ]
              ),
              Vue.createVNode(ca),
              Vue.createVNode(
                Vue.unref(mo),
                { class: 'execution-actions flex flex-nowrap' },
                {
                  default: Vue.withCtx(() => [
                    Vue.withDirectives(
                      Vue.createVNode(
                        Vue.unref(p),
                        {
                          icon: 'pi pi-times',
                          severity: u.value ? 'danger' : 'secondary',
                          disabled: !u.value,
                          text: '',
                          onClick:
                            t[0] ||
                            (t[0] = () =>
                              Vue.unref(d).execute('Comfy.Interrupt'))
                        },
                        null,
                        8,
                        ['severity', 'disabled']
                      ),
                      [[h, e.$t('menu.interrupt'), void 0, { bottom: !0 }]]
                    ),
                    Vue.withDirectives(
                      Vue.createVNode(
                        Vue.unref(p),
                        {
                          icon: 'pi pi-stop',
                          severity: c.value ? 'danger' : 'secondary',
                          disabled: !c.value,
                          text: '',
                          onClick:
                            t[1] ||
                            (t[1] = () =>
                              Vue.unref(d).execute('Comfy.ClearPendingTasks'))
                        },
                        null,
                        8,
                        ['severity', 'disabled']
                      ),
                      [
                        [
                          h,
                          e.$t('sideToolbar.queueTab.clearPendingTasks'),
                          void 0,
                          { bottom: !0 }
                        ]
                      ]
                    )
                  ]),
                  _: 1
                }
              )
            ])
          )
        }
      }
    }),
    [['__scopeId', 'data-v-d3897845']]
  ),
  ma = u(
    Vue.defineComponent({
      __name: 'ComfyActionbar',
      setup(e) {
        const n = o(),
          i = Vue.computed(() => 'Disabled' !== n.get('Comfy.UseNewMenu')),
          a = Vue.ref(null),
          r = Vue.ref(null),
          s = lt('Comfy.MenuPosition.Docked', !1),
          l = lt('Comfy.MenuPosition.Floating', { x: 0, y: 0 }),
          {
            x: u,
            y: c,
            style: d,
            isDragging: p
          } = ut(a, {
            initialValue: { x: 0, y: 0 },
            handle: r,
            containerElement: document.body
          })
        ct(
          [u, c],
          ([e, t]) => {
            l.value = { x: e, y: t }
          },
          { debounce: 300 }
        )
        const m = t(() => {
          if (0 === u.value && 0 === c.value) {
            if (0 !== l.value.x || 0 !== l.value.y)
              return (u.value = l.value.x), (c.value = l.value.y), void h()
            if (a.value) {
              const e = window.innerWidth,
                t = window.innerHeight,
                n = a.value.offsetWidth,
                o = a.value.offsetHeight
              if (0 === n || 0 === o) return
              ;(u.value = (e - n) / 2), (c.value = t - o - 10), h()
            }
          }
        }, 'setInitialPosition')
        Vue.onMounted(m),
          Vue.watch(i, (e) => {
            e && Vue.nextTick(m)
          })
        const f = Vue.ref({
            x: u.value,
            y: c.value,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
          }),
          h = t(() => {
            f.value = {
              x: u.value,
              y: c.value,
              windowWidth: window.innerWidth,
              windowHeight: window.innerHeight
            }
          }, 'captureLastDragState')
        Vue.watch(
          p,
          (e) => {
            e || h()
          },
          { immediate: !0 }
        )
        ve(
          window,
          'resize',
          t(() => {
            if (a.value) {
              const e = window.innerWidth,
                t = window.innerHeight,
                n = a.value.offsetWidth,
                o = a.value.offsetHeight,
                i = [
                  { edge: 'left', distance: f.value.x },
                  {
                    edge: 'right',
                    distance: f.value.windowWidth - (f.value.x + n)
                  },
                  { edge: 'top', distance: f.value.y },
                  {
                    edge: 'bottom',
                    distance: f.value.windowHeight - (f.value.y + o)
                  }
                ].reduce((e, t) => (t.distance < e.distance ? t : e)),
                r = f.value.y / f.value.windowHeight,
                s = f.value.x / f.value.windowWidth
              'left' === i.edge
                ? ((u.value = i.distance), (c.value = r * t))
                : 'right' === i.edge
                  ? ((u.value = e - n - i.distance), (c.value = r * t))
                  : 'top' === i.edge
                    ? ((u.value = s * e), (c.value = i.distance))
                    : ((u.value = s * e), (c.value = t - o - i.distance)),
                (u.value = _.clamp(u.value, 0, e - n)),
                (c.value = _.clamp(c.value, 0, t - o))
            }
          }, 'adjustMenuPosition')
        )
        const b = Vue.inject('topMenuRef'),
          v = dt(b),
          g = Vue.computed(() => {
            if (!a.value) return !1
            const { height: e } = a.value.getBoundingClientRect(),
              t = c.value + e,
              n = v.bottom.value
            return Math.min(t, n) - Math.max(c.value, v.top.value) > 20
          })
        Vue.watch(p, (e) => {
          s.value = !e && g.value
        })
        const y = pt('topMenu')
        return (
          Vue.watch([p, g], ([e, t]) => {
            y.emit('updateHighlight', { isDragging: e, isOverlapping: t })
          }),
          (e, t) => (
            Vue.openBlock(),
            Vue.createBlock(
              Vue.unref(_i),
              {
                class: Vue.normalizeClass([
                  'actionbar w-fit',
                  { 'is-dragging': Vue.unref(p), 'is-docked': Vue.unref(s) }
                ]),
                style: Vue.normalizeStyle(Vue.unref(d))
              },
              {
                default: Vue.withCtx(() => [
                  Vue.createElementVNode(
                    'div',
                    {
                      class: 'actionbar-content flex items-center',
                      ref_key: 'panelRef',
                      ref: a
                    },
                    [
                      Vue.createElementVNode(
                        'span',
                        {
                          class: 'drag-handle cursor-move mr-2 p-0!',
                          ref_key: 'dragHandleRef',
                          ref: r
                        },
                        null,
                        512
                      ),
                      Vue.createVNode(pa)
                    ],
                    512
                  )
                ]),
                _: 1
              },
              8,
              ['style', 'class']
            )
          )
        )
      }
    }),
    [['__scopeId', 'data-v-542a7001']]
  ),
  fa = Vue.defineComponent({
    __name: 'BottomPanelToggleButton',
    setup(e) {
      const t = N()
      return (e, n) => {
        const o = Vue.resolveComponent('i-material-symbols:dock-to-bottom'),
          i = Vue.resolveComponent('i-material-symbols:dock-to-bottom-outline'),
          a = Vue.resolveDirective('tooltip')
        return Vue.withDirectives(
          (Vue.openBlock(),
          Vue.createBlock(
            Vue.unref(p),
            {
              severity: 'secondary',
              text: '',
              onClick: Vue.unref(t).toggleBottomPanel
            },
            {
              icon: Vue.withCtx(() => [
                Vue.unref(t).bottomPanelVisible
                  ? (Vue.openBlock(), Vue.createBlock(o, { key: 0 }))
                  : (Vue.openBlock(), Vue.createBlock(i, { key: 1 }))
              ]),
              _: 1
            },
            8,
            ['onClick']
          )),
          [
            [Vue.vShow, Vue.unref(t).bottomPanelTabs.length > 0],
            [a, { value: e.$t('menu.toggleBottomPanel'), showDelay: 300 }]
          ]
        )
      }
    }
  }),
  ha = { class: 'flex-grow' },
  ba = u(
    Vue.defineComponent({
      __name: 'TopMenubar',
      setup(e) {
        const t = g(),
          n = o(),
          i = Vue.computed(() => n.get('Comfy.Workflow.WorkflowTabsPosition')),
          r = Vue.computed(() => 'Disabled' !== n.get('Comfy.UseNewMenu')),
          s = Vue.computed(() =>
            'Top' === n.get('Comfy.UseNewMenu')
              ? '.comfyui-body-top'
              : '.comfyui-body-bottom'
          ),
          l = Vue.ref(null)
        Vue.onMounted(() => {
          l.value && l.value.appendChild(a.menu.element)
        })
        const u = Vue.ref(null)
        Vue.provide('topMenuRef', u)
        const c = pt('topMenu'),
          d = Vue.ref(!1),
          m = Vue.ref(!1)
        return (
          c.on((e, t) => {
            'updateHighlight' === e &&
              ((d.value = t.isDragging),
              (m.value = t.isOverlapping && t.isDragging))
          }),
          (e, n) => {
            const o = Vue.resolveDirective('tooltip')
            return (
              Vue.openBlock(),
              Vue.createBlock(
                Vue.Teleport,
                { to: s.value },
                [
                  Vue.withDirectives(
                    Vue.createElementVNode(
                      'div',
                      {
                        ref_key: 'topMenuRef',
                        ref: u,
                        class: Vue.normalizeClass([
                          'comfyui-menu flex items-center',
                          { dropzone: d.value, 'dropzone-active': m.value }
                        ])
                      },
                      [
                        n[1] ||
                          (n[1] = Vue.createElementVNode(
                            'h1',
                            { class: 'comfyui-logo mx-2' },
                            'ComfyUI',
                            -1
                          )),
                        Vue.createVNode(Ni),
                        Vue.createVNode(Vue.unref(mt), {
                          layout: 'vertical',
                          class: 'mx-2'
                        }),
                        Vue.createElementVNode('div', ha, [
                          'Topbar' === i.value
                            ? (Vue.openBlock(), Vue.createBlock(ui, { key: 0 }))
                            : Vue.createCommentVNode('', !0)
                        ]),
                        Vue.createElementVNode(
                          'div',
                          {
                            class: 'comfyui-menu-right',
                            ref_key: 'menuRight',
                            ref: l
                          },
                          null,
                          512
                        ),
                        Vue.createVNode(ma),
                        Vue.createVNode(fa),
                        Vue.withDirectives(
                          Vue.createVNode(
                            Vue.unref(p),
                            {
                              icon: 'pi pi-bars',
                              severity: 'secondary',
                              text: '',
                              onClick:
                                n[0] ||
                                (n[0] = (e) => (Vue.unref(t).focusMode = !0))
                            },
                            null,
                            512
                          ),
                          [
                            [
                              o,
                              { value: e.$t('menu.hideMenu'), showDelay: 300 }
                            ]
                          ]
                        )
                      ],
                      2
                    ),
                    [[Vue.vShow, r.value && !Vue.unref(t).focusMode]]
                  )
                ],
                8,
                ['to']
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-d84a704d']]
  )
function va() {
  const e = st(),
    t = at()
  let n = !1,
    o = 0
  Be.addEventListener('graphChanged', () => {
    'change' === t.mode &&
      (o ? (n = !0) : ((n = !1), a.queuePrompt(0, t.batchCount), o++))
  }),
    e.$subscribe(
      () => {
        ;(o = e.count),
          o ||
            a.lastExecutionError ||
            (('instant' === t.mode || ('change' === t.mode && n)) &&
              ((n = !1), a.queuePrompt(0, t.batchCount)))
      },
      { detached: !0 }
    )
}
t(va, 'setupAutoQueueHandler')
var ga = ((e) => (
    (e.NoPreviews = 'none'),
    (e.Auto = 'auto'),
    (e.Latent2RGB = 'latent2rgb'),
    (e.TAESD = 'taesd'),
    e
  ))(ga || {}),
  ya = ((e) => (
    (e.DEBUG = 'DEBUG'),
    (e.INFO = 'INFO'),
    (e.WARNING = 'WARNING'),
    (e.ERROR = 'ERROR'),
    (e.CRITICAL = 'CRITICAL'),
    e
  ))(ya || {}),
  Va = ((e) => (
    (e.MD5 = 'md5'),
    (e.SHA1 = 'sha1'),
    (e.SHA256 = 'sha256'),
    (e.SHA512 = 'sha512'),
    e
  ))(Va || {}),
  Ia = ((e) => (
    (e.Auto = 'auto'), (e.Disable = 'disable'), (e.Enable = 'enable'), e
  ))(Ia || {}),
  ka = ((e) => (
    (e.Auto = 'auto'), (e.Disable = 'disable'), (e.Enable = 'enable'), e
  ))(ka || {}),
  wa = ((e) => (
    (e.AUTO = 'auto'),
    (e.FP64 = 'fp64'),
    (e.FP32 = 'fp32'),
    (e.FP16 = 'fp16'),
    (e.BF16 = 'bf16'),
    (e.FP8E4M3FN = 'fp8_e4m3fn'),
    (e.FP8E5M2 = 'fp8_e5m2'),
    e
  ))(wa || {}),
  xa = ((e) => (
    (e.Auto = 'auto'),
    (e.Split = 'split'),
    (e.Quad = 'quad'),
    (e.Pytorch = 'pytorch'),
    e
  ))(xa || {}),
  Ca = ((e) => (
    (e.Auto = 'auto'),
    (e.GPUOnly = 'gpu-only'),
    (e.HighVram = 'highvram'),
    (e.NormalVram = 'normalvram'),
    (e.LowVram = 'lowvram'),
    (e.NoVram = 'novram'),
    (e.CPU = 'cpu'),
    e
  ))(Ca || {})
Object.values(Ia), Ia.Auto
const Sa = [
  {
    id: 'tls-keyfile',
    name: 'TLS Key File: Path to TLS key file for HTTPS',
    category: ['Network'],
    type: 'text',
    defaultValue: ''
  },
  {
    id: 'tls-certfile',
    name: 'TLS Certificate File: Path to TLS certificate file for HTTPS',
    category: ['Network'],
    type: 'text',
    defaultValue: ''
  },
  {
    id: 'enable-cors-header',
    name: 'Enable CORS header: Use "*" for all origins or specify domain',
    category: ['Network'],
    type: 'text',
    defaultValue: ''
  },
  {
    id: 'max-upload-size',
    name: 'Maximum upload size (MB)',
    category: ['Network'],
    type: 'number',
    defaultValue: 100
  },
  {
    id: 'cuda-device',
    name: 'CUDA device index to use',
    category: ['CUDA'],
    type: 'number',
    defaultValue: null
  },
  {
    id: 'cuda-malloc',
    name: 'Use CUDA malloc for memory allocation',
    category: ['CUDA'],
    type: 'combo',
    options: Object.values(ka),
    defaultValue: ka.Auto,
    getValue: t((e) => {
      switch (e) {
        case ka.Auto:
          return {}
        case ka.Enable:
          return { 'cuda-malloc': !0 }
        case ka.Disable:
          return { 'disable-cuda-malloc': !0 }
      }
    }, 'getValue')
  },
  {
    id: 'global-precision',
    name: 'Global floating point precision',
    category: ['Inference'],
    type: 'combo',
    options: [wa.AUTO, wa.FP32, wa.FP16],
    defaultValue: wa.AUTO,
    tooltip: 'Global floating point precision',
    getValue: t((e) => {
      switch (e) {
        case wa.AUTO:
          return {}
        case wa.FP32:
          return { 'force-fp32': !0 }
        case wa.FP16:
          return { 'force-fp16': !0 }
        default:
          return {}
      }
    }, 'getValue')
  },
  {
    id: 'unet-precision',
    name: 'UNET precision',
    category: ['Inference'],
    type: 'combo',
    options: [
      wa.AUTO,
      wa.FP64,
      wa.FP32,
      wa.FP16,
      wa.BF16,
      wa.FP8E4M3FN,
      wa.FP8E5M2
    ],
    defaultValue: wa.AUTO,
    tooltip: 'UNET precision',
    getValue: t(
      (e) => (e === wa.AUTO ? {} : { [`${e.toLowerCase()}-unet`]: !0 }),
      'getValue'
    )
  },
  {
    id: 'vae-precision',
    name: 'VAE precision',
    category: ['Inference'],
    type: 'combo',
    options: [wa.AUTO, wa.FP16, wa.FP32, wa.BF16],
    defaultValue: wa.AUTO,
    tooltip: 'VAE precision',
    getValue: t(
      (e) => (e === wa.AUTO ? {} : { [`${e.toLowerCase()}-vae`]: !0 }),
      'getValue'
    )
  },
  {
    id: 'cpu-vae',
    name: 'Run VAE on CPU',
    category: ['Inference'],
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'text-encoder-precision',
    name: 'Text Encoder precision',
    category: ['Inference'],
    type: 'combo',
    options: [wa.AUTO, wa.FP8E4M3FN, wa.FP8E5M2, wa.FP16, wa.FP32],
    defaultValue: wa.AUTO,
    tooltip: 'Text Encoder precision',
    getValue: t(
      (e) => (e === wa.AUTO ? {} : { [`${e.toLowerCase()}-text-enc`]: !0 }),
      'getValue'
    )
  },
  {
    id: 'force-channels-last',
    name: 'Force channels-last memory format',
    category: ['Memory'],
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'directml',
    name: 'DirectML device index',
    category: ['Memory'],
    type: 'number',
    defaultValue: null
  },
  {
    id: 'disable-ipex-optimize',
    name: 'Disable IPEX optimization',
    category: ['Memory'],
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'preview-method',
    name: 'Method used for latent previews',
    category: ['Preview'],
    type: 'combo',
    options: Object.values(ga),
    defaultValue: ga.NoPreviews
  },
  {
    id: 'preview-size',
    name: 'Size of preview images',
    category: ['Preview'],
    type: 'slider',
    defaultValue: 512,
    attrs: { min: 128, max: 2048, step: 128 }
  },
  {
    id: 'cache-classic',
    name: 'Use classic cache system',
    category: ['Cache'],
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'cache-lru',
    name: 'Use LRU caching with a maximum of N node results cached.',
    category: ['Cache'],
    type: 'number',
    defaultValue: null,
    tooltip: 'May use more RAM/VRAM.'
  },
  {
    id: 'cross-attention-method',
    name: 'Cross attention method',
    category: ['Attention'],
    type: 'combo',
    options: Object.values(xa),
    defaultValue: xa.Auto,
    getValue: t(
      (e) =>
        e === xa.Auto ? {} : { [`use-${e.toLowerCase()}-cross-attention`]: !0 },
      'getValue'
    )
  },
  {
    id: 'disable-xformers',
    name: 'Disable xFormers optimization',
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'force-upcast-attention',
    name: 'Force attention upcast',
    category: ['Attention'],
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'dont-upcast-attention',
    name: 'Prevent attention upcast',
    category: ['Attention'],
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'vram-management',
    name: 'VRAM management mode',
    category: ['Memory'],
    type: 'combo',
    options: Object.values(Ca),
    defaultValue: Ca.Auto,
    getValue: t((e) => (e === Ca.Auto ? {} : { [e]: !0 }), 'getValue')
  },
  {
    id: 'reserve-vram',
    name: 'Reserved VRAM (GB)',
    category: ['Memory'],
    type: 'number',
    defaultValue: null,
    tooltip:
      'Set the amount of vram in GB you want to reserve for use by your OS/other software. By default some amount is reverved depending on your OS.'
  },
  {
    id: 'default-hashing-function',
    name: 'Default hashing function for model files',
    type: 'combo',
    options: Object.values(Va),
    defaultValue: Va.SHA256
  },
  {
    id: 'disable-smart-memory',
    name: 'Disable smart memory management',
    tooltip:
      'Force ComfyUI to aggressively offload to regular ram instead of keeping models in vram when it can.',
    category: ['Memory'],
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'deterministic',
    name: 'Make pytorch use slower deterministic algorithms when it can.',
    type: 'boolean',
    defaultValue: !1,
    tooltip: 'Note that this might not make images deterministic in all cases.'
  },
  {
    id: 'fast',
    name: 'Enable some untested and potentially quality deteriorating optimizations.',
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'dont-print-server',
    name: "Don't print server output to console.",
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'disable-metadata',
    name: 'Disable saving prompt metadata in files.',
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'disable-all-custom-nodes',
    name: 'Disable loading all custom nodes.',
    type: 'boolean',
    defaultValue: !1
  },
  {
    id: 'log-level',
    name: 'Logging verbosity level',
    type: 'combo',
    options: Object.values(ya),
    defaultValue: ya.INFO,
    getValue: t((e) => ({ verbose: e }), 'getValue')
  }
]
function Pa() {
  const e = t(() => Se()?.activeWorkflow?.changeTracker, 'getTracker'),
    n = t(() => {
      const e = a.canvas.selected_nodes,
        t = []
      if (e)
        for (const n in e) {
          const o = e[n]
          t.push(o)
        }
      return t
    }, 'getSelectedNodes'),
    s = t((e) => {
      n().forEach((t) => {
        t.mode === e ? (t.mode = ft.ALWAYS) : (t.mode = e)
      })
    }, 'toggleSelectedNodesMode')
  return [
    {
      id: 'Comfy.NewBlankWorkflow',
      icon: 'pi pi-plus',
      label: 'New Blank Workflow',
      menubarLabel: 'New',
      function: t(() => _e.loadBlankWorkflow(), 'function')
    },
    {
      id: 'Comfy.OpenWorkflow',
      icon: 'pi pi-folder-open',
      label: 'Open Workflow',
      menubarLabel: 'Open',
      function: t(() => {
        a.ui.loadFile()
      }, 'function')
    },
    {
      id: 'Comfy.LoadDefaultWorkflow',
      icon: 'pi pi-code',
      label: 'Load Default Workflow',
      function: t(() => _e.loadDefaultWorkflow(), 'function')
    },
    {
      id: 'Comfy.SaveWorkflow',
      icon: 'pi pi-save',
      label: 'Save Workflow',
      menubarLabel: 'Save',
      function: t(async () => {
        const e = Se().activeWorkflow
        e && (await _e.saveWorkflow(e))
      }, 'function')
    },
    {
      id: 'Comfy.SaveWorkflowAs',
      icon: 'pi pi-save',
      label: 'Save Workflow As',
      menubarLabel: 'Save As',
      function: t(async () => {
        const e = Se().activeWorkflow
        e && (await _e.saveWorkflowAs(e))
      }, 'function')
    },
    {
      id: 'Comfy.ExportWorkflow',
      icon: 'pi pi-download',
      label: 'Export Workflow',
      menubarLabel: 'Export',
      function: t(() => {
        _e.exportWorkflow('workflow', 'workflow')
      }, 'function')
    },
    {
      id: 'Comfy.ExportWorkflowAPI',
      icon: 'pi pi-download',
      label: 'Export Workflow (API Format)',
      menubarLabel: 'Export (API)',
      function: t(() => {
        _e.exportWorkflow('workflow_api', 'output')
      }, 'function')
    },
    {
      id: 'Comfy.Undo',
      icon: 'pi pi-undo',
      label: 'Undo',
      function: t(async () => {
        await e()?.undo?.()
      }, 'function')
    },
    {
      id: 'Comfy.Redo',
      icon: 'pi pi-refresh',
      label: 'Redo',
      function: t(async () => {
        await e()?.redo?.()
      }, 'function')
    },
    {
      id: 'Comfy.ClearWorkflow',
      icon: 'pi pi-trash',
      label: 'Clear Workflow',
      function: t(() => {
        ;(o().get('Comfy.ComfirmClear') && !confirm('Clear workflow?')) ||
          (a.clean(), a.graph.clear(), Be.dispatchCustomEvent('graphCleared'))
      }, 'function')
    },
    {
      id: 'Comfy.Canvas.ResetView',
      icon: 'pi pi-expand',
      label: 'Reset View',
      function: t(() => {
        a.resetView()
      }, 'function')
    },
    {
      id: 'Comfy.OpenClipspace',
      icon: 'pi pi-clipboard',
      label: 'Clipspace',
      function: t(() => {
        a.openClipspace()
      }, 'function')
    },
    {
      id: 'Comfy.RefreshNodeDefinitions',
      icon: 'pi pi-refresh',
      label: 'Refresh Node Definitions',
      function: t(async () => {
        await a.refreshComboInNodes()
      }, 'function')
    },
    {
      id: 'Comfy.Interrupt',
      icon: 'pi pi-stop',
      label: 'Interrupt',
      function: t(async () => {
        await Be.interrupt(),
          He().add({
            severity: 'info',
            summary: 'Interrupted',
            detail: 'Execution has been interrupted',
            life: 1e3
          })
      }, 'function')
    },
    {
      id: 'Comfy.ClearPendingTasks',
      icon: 'pi pi-stop',
      label: 'Clear Pending Tasks',
      function: t(async () => {
        await ht().clear(['queue']),
          He().add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'Pending tasks deleted',
            life: 3e3
          })
      }, 'function')
    },
    {
      id: 'Comfy.BrowseTemplates',
      icon: 'pi pi-folder-open',
      label: 'Browse Templates',
      function: bt
    },
    {
      id: 'Comfy.Canvas.ZoomIn',
      icon: 'pi pi-plus',
      label: 'Zoom In',
      function: t(() => {
        const e = a.canvas.ds
        e.changeScale(
          1.1 * e.scale,
          e.element ? [e.element.width / 2, e.element.height / 2] : void 0
        ),
          a.canvas.setDirty(!0, !0)
      }, 'function')
    },
    {
      id: 'Comfy.Canvas.ZoomOut',
      icon: 'pi pi-minus',
      label: 'Zoom Out',
      function: t(() => {
        const e = a.canvas.ds
        e.changeScale(
          e.scale / 1.1,
          e.element ? [e.element.width / 2, e.element.height / 2] : void 0
        ),
          a.canvas.setDirty(!0, !0)
      }, 'function')
    },
    {
      id: 'Comfy.Canvas.FitView',
      icon: 'pi pi-expand',
      label: 'Fit view to selected nodes',
      function: t(() => {
        a.canvas.empty
          ? He().add({ severity: 'error', summary: 'Empty canvas', life: 3e3 })
          : a.canvas.fitViewToSelectionAnimated()
      }, 'function')
    },
    {
      id: 'Comfy.Canvas.ToggleLock',
      icon: 'pi pi-lock',
      label: 'Toggle Lock',
      function: t(() => {
        a.canvas.read_only = !a.canvas.read_only
      }, 'function')
    },
    {
      id: 'Comfy.Canvas.ToggleLinkVisibility',
      icon: 'pi pi-eye',
      label: 'Toggle Link Visibility',
      versionAdded: '1.3.6',
      function: (() => {
        const e = o()
        let t = l.SPLINE_LINK
        return () => {
          const n = e.get('Comfy.LinkRenderMode')
          n === l.HIDDEN_LINK
            ? e.set('Comfy.LinkRenderMode', t)
            : ((t = n), e.set('Comfy.LinkRenderMode', l.HIDDEN_LINK))
        }
      })()
    },
    {
      id: 'Comfy.QueuePrompt',
      icon: 'pi pi-play',
      label: 'Queue Prompt',
      versionAdded: '1.3.7',
      function: t(() => {
        const e = at().batchCount
        a.queuePrompt(0, e)
      }, 'function')
    },
    {
      id: 'Comfy.QueuePromptFront',
      icon: 'pi pi-play',
      label: 'Queue Prompt (Front)',
      versionAdded: '1.3.7',
      function: t(() => {
        const e = at().batchCount
        a.queuePrompt(-1, e)
      }, 'function')
    },
    {
      id: 'Comfy.ShowSettingsDialog',
      icon: 'pi pi-cog',
      label: 'Settings',
      versionAdded: '1.3.7',
      function: t(() => {
        vt()
      }, 'function')
    },
    {
      id: 'Comfy.Graph.GroupSelectedNodes',
      icon: 'pi pi-sitemap',
      label: 'Group Selected Nodes',
      versionAdded: '1.3.7',
      function: t(() => {
        const { canvas: e } = a
        if (!e.selectedItems?.size)
          return void He().add({
            severity: 'error',
            summary: 'Nothing to group',
            detail:
              'Please select the nodes (or other groups) to create a group for',
            life: 3e3
          })
        const t = new i(),
          n = o().get('Comfy.GroupSelectedNodes.Padding')
        t.resizeTo(e.selectedItems, n),
          e.graph.add(t),
          (wt().titleEditorTarget = t)
      }, 'function')
    },
    {
      id: 'Workspace.NextOpenedWorkflow',
      icon: 'pi pi-step-forward',
      label: 'Next Opened Workflow',
      versionAdded: '1.3.9',
      function: t(() => {
        _e.loadNextOpenedWorkflow()
      }, 'function')
    },
    {
      id: 'Workspace.PreviousOpenedWorkflow',
      icon: 'pi pi-step-backward',
      label: 'Previous Opened Workflow',
      versionAdded: '1.3.9',
      function: t(() => {
        _e.loadPreviousOpenedWorkflow()
      }, 'function')
    },
    {
      id: 'Comfy.Canvas.ToggleSelectedNodes.Mute',
      icon: 'pi pi-volume-off',
      label: 'Mute/Unmute Selected Nodes',
      versionAdded: '1.3.11',
      function: t(() => {
        s(ft.NEVER)
      }, 'function')
    },
    {
      id: 'Comfy.Canvas.ToggleSelectedNodes.Bypass',
      icon: 'pi pi-shield',
      label: 'Bypass/Unbypass Selected Nodes',
      versionAdded: '1.3.11',
      function: t(() => {
        s(ft.BYPASS)
      }, 'function')
    },
    {
      id: 'Comfy.Canvas.ToggleSelectedNodes.Pin',
      icon: 'pi pi-pin',
      label: 'Pin/Unpin Selected Nodes',
      versionAdded: '1.3.11',
      function: t(() => {
        n().forEach((e) => {
          e.pin(!e.pinned)
        })
      }, 'function')
    },
    {
      id: 'Comfy.Canvas.ToggleSelected.Pin',
      icon: 'pi pi-pin',
      label: 'Pin/Unpin Selected Items',
      versionAdded: '1.3.33',
      function: t(() => {
        for (const e of a.canvas.selectedItems)
          (e instanceof r || e instanceof i) && e.pin(!e.pinned)
      }, 'function')
    },
    {
      id: 'Comfy.Canvas.ToggleSelectedNodes.Collapse',
      icon: 'pi pi-minus',
      label: 'Collapse/Expand Selected Nodes',
      versionAdded: '1.3.11',
      function: t(() => {
        n().forEach((e) => {
          e.collapse()
        })
      }, 'function')
    },
    {
      id: 'Comfy.ToggleTheme',
      icon: 'pi pi-moon',
      label: 'Toggle Theme',
      versionAdded: '1.3.12',
      function: (() => {
        let e = 'dark'
        const n = t((e) => 'light' !== e, 'isDarkMode')
        return () => {
          const t = o(),
            i = t.get('Comfy.ColorPalette')
          n(i)
            ? ((e = i), t.set('Comfy.ColorPalette', 'light'))
            : t.set('Comfy.ColorPalette', e)
        }
      })()
    },
    {
      id: 'Workspace.ToggleBottomPanel',
      icon: 'pi pi-list',
      label: 'Toggle Bottom Panel',
      versionAdded: '1.3.22',
      function: t(() => {
        N().toggleBottomPanel()
      }, 'function')
    },
    {
      id: 'Workspace.ToggleFocusMode',
      icon: 'pi pi-eye',
      label: 'Toggle Focus Mode',
      versionAdded: '1.3.27',
      function: t(() => {
        g().toggleFocusMode()
      }, 'function')
    },
    {
      id: 'Comfy.Graph.FitGroupToContents',
      icon: 'pi pi-expand',
      label: 'Fit Group To Contents',
      versionAdded: '1.4.9',
      function: t(() => {
        for (const e of a.canvas.selectedItems)
          if (e instanceof i) {
            e.recomputeInsideNodes()
            const t = o().get('Comfy.GroupSelectedNodes.Padding')
            e.resizeTo(e.children, t), a.graph.change()
          }
      }, 'function')
    },
    {
      id: 'Comfy.Help.OpenComfyUIIssues',
      icon: 'pi pi-github',
      label: 'ComfyUI Issues',
      versionAdded: '1.5.5',
      function: t(() => {
        window.open(
          'https://github.com/comfyanonymous/ComfyUI/issues',
          '_blank'
        )
      }, 'function')
    },
    {
      id: 'Comfy.Help.OpenComfyUIDocs',
      icon: 'pi pi-info-circle',
      label: 'ComfyUI Docs',
      versionAdded: '1.5.5',
      function: t(() => {
        window.open('https://docs.comfy.org/', '_blank')
      }, 'function')
    },
    {
      id: 'Comfy.Help.OpenComfyOrgDiscord',
      icon: 'pi pi-discord',
      label: 'Comfy-Org Discord',
      versionAdded: '1.5.5',
      function: t(() => {
        window.open('https://www.comfy.org/discord', '_blank')
      }, 'function')
    },
    {
      id: 'Workspace.SearchBox.Toggle',
      icon: 'pi pi-search',
      label: 'Toggle Search Box',
      versionAdded: '1.5.7',
      function: t(() => {
        so().toggleVisible()
      }, 'function')
    }
  ]
}
t(Pa, 'useCoreCommands')
const Ba = Vue.defineComponent({
  __name: 'GraphView',
  setup(e) {
    va()
    const { t: n } = VueI18n.useI18n(),
      i = je(),
      r = o(),
      s = We(),
      l = Vue.computed(() => r.get('Comfy.ColorPalette'))
    Vue.watch(
      l,
      (e) => {
        const t = 'dark-theme'
        'light' !== e
          ? document.body.classList.add(t)
          : document.body.classList.remove(t)
      },
      { immediate: !0 }
    ),
      Vue.watchEffect(() => {
        const e = r.get('Comfy.TextareaWidget.FontSize')
        document.documentElement.style.setProperty(
          '--comfy-textarea-font-size',
          `${e}px`
        )
      }),
      Vue.watchEffect(() => {
        const e = r.get('Comfy.TreeExplorer.ItemPadding')
        document.documentElement.style.setProperty(
          '--comfy-tree-explorer-item-padding',
          `${e}px`
        )
      }),
      Vue.watchEffect(() => {
        const e = r.get('Comfy.Locale')
        e && (gt.global.locale.value = e)
      }),
      Vue.watchEffect(() => {
        'Disabled' === r.get('Comfy.UseNewMenu')
          ? (a.ui.menuContainer.style.removeProperty('display'),
            a.ui.restoreMenuPosition())
          : a.ui.menuContainer.style.setProperty('display', 'none')
      }),
      Vue.watchEffect(() => {
        ht().maxHistoryItems = r.get('Comfy.Queue.MaxHistoryItems')
      })
    const u = t(() => {
        r.addSettings(a.ui.settings)
        const e = Pa()
        m().registerCommands(e),
          tt().registerCoreMenuCommands(),
          y().loadCoreKeybindings(),
          z().registerCoreSidebarTabs(),
          N().registerCoreBottomPanelTabs(),
          (a.extensionManager = g())
      }, 'init'),
      c = st(),
      d = t((e) => {
        c.update(e)
      }, 'onStatus'),
      p = { severity: 'error', summary: n('reconnecting') },
      f = t(() => {
        i.remove(p), i.add(p)
      }, 'onReconnecting'),
      h = t(() => {
        i.remove(p),
          i.add({ severity: 'success', summary: n('reconnected'), life: 2e3 })
      }, 'onReconnected')
    Vue.onMounted(() => {
      Be.addEventListener('status', d),
        Be.addEventListener('reconnecting', f),
        Be.addEventListener('reconnected', h),
        s.bindExecutionEvents()
      try {
        u()
      } catch (e) {
        console.error('Failed to init ComfyUI frontend', e)
      }
    }),
      Vue.onBeforeUnmount(() => {
        Be.removeEventListener('status', d),
          Be.removeEventListener('reconnecting', f),
          Be.removeEventListener('reconnected', h),
          s.unbindExecutionEvents()
      })
    const b = t(() => {
      requestIdleCallback(
        () => {
          y().loadUserKeybindings(),
            kt().loadServerConfig(Sa, r.get('Comfy.Server.ServerConfigValues')),
            yt().loadModelFolders(),
            de().nodeSearchService.endsWithFilterStartSequence(''),
            ae().loadNodeFrequencies()
        },
        { timeout: 1e3 }
      )
    }, 'onGraphReady')
    return (e, t) => (
      Vue.openBlock(),
      Vue.createElementBlock(
        Vue.Fragment,
        null,
        [
          Vue.createVNode(ba),
          Vue.createVNode(bo, { onReady: b }),
          Vue.createVNode(ti),
          Vue.createVNode(ni),
          Vue.createVNode(ii),
          Vue.createVNode(vo)
        ],
        64
      )
    )
  }
})
export { Ba as default }
