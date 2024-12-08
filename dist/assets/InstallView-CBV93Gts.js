var e = Object.defineProperty,
  t = (t, a) => e(t, 'name', { value: a, configurable: !0 })
import {
  B as a,
  l as n,
  U as l,
  bc as o,
  bd as i,
  o as r,
  be as s,
  W as c,
  bf as u,
  e as p,
  b8 as d,
  bb as V,
  bg as m,
  bh as v,
  a5 as f,
  bi as h,
  b0 as g,
  aa as x,
  _ as b
} from './index-CXhECVBD.js'
var S = t(function (e) {
    var t = e.dt
    return '\n.p-steplist {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    overflow-x: auto;\n}\n\n.p-step {\n    position: relative;\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    gap: '
      .concat(t('stepper.step.gap'), ';\n    padding: ')
      .concat(
        t('stepper.step.padding'),
        ';\n}\n\n.p-step:last-of-type {\n    flex: initial;\n}\n\n.p-step-header {\n    border: 0 none;\n    display: inline-flex;\n    align-items: center;\n    text-decoration: none;\n    cursor: pointer;\n    transition: background '
      )
      .concat(t('stepper.transition.duration'), ', color ')
      .concat(t('stepper.transition.duration'), ', border-color ')
      .concat(t('stepper.transition.duration'), ', outline-color ')
      .concat(t('stepper.transition.duration'), ', box-shadow ')
      .concat(t('stepper.transition.duration'), ';\n    border-radius: ')
      .concat(
        t('stepper.step.header.border.radius'),
        ';\n    outline-color: transparent;\n    background: transparent;\n    padding: '
      )
      .concat(t('stepper.step.header.padding'), ';\n    gap: ')
      .concat(
        t('stepper.step.header.gap'),
        ';\n}\n\n.p-step-header:focus-visible {\n    box-shadow: '
      )
      .concat(t('stepper.step.header.focus.ring.shadow'), ';\n    outline: ')
      .concat(t('stepper.step.header.focus.ring.width'), ' ')
      .concat(t('stepper.step.header.focus.ring.style'), ' ')
      .concat(
        t('stepper.step.header.focus.ring.color'),
        ';\n    outline-offset: '
      )
      .concat(
        t('stepper.step.header.focus.ring.offset'),
        ';\n}\n\n.p-stepper.p-stepper-readonly .p-step {\n    cursor: auto;\n}\n\n.p-step-title {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    color: '
      )
      .concat(t('stepper.step.title.color'), ';\n    font-weight: ')
      .concat(
        t('stepper.step.title.font.weight'),
        ';\n    transition: background '
      )
      .concat(t('stepper.transition.duration'), ', color ')
      .concat(t('stepper.transition.duration'), ', border-color ')
      .concat(t('stepper.transition.duration'), ', box-shadow ')
      .concat(t('stepper.transition.duration'), ', outline-color ')
      .concat(
        t('stepper.transition.duration'),
        ';\n}\n\n.p-step-number {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: '
      )
      .concat(t('stepper.step.number.color'), ';\n    border: 2px solid ')
      .concat(t('stepper.step.number.border.color'), ';\n    background: ')
      .concat(t('stepper.step.number.background'), ';\n    min-width: ')
      .concat(t('stepper.step.number.size'), ';\n    height: ')
      .concat(t('stepper.step.number.size'), ';\n    line-height: ')
      .concat(t('stepper.step.number.size'), ';\n    font-size: ')
      .concat(
        t('stepper.step.number.font.size'),
        ';\n    z-index: 1;\n    border-radius: '
      )
      .concat(
        t('stepper.step.number.border.radius'),
        ';\n    position: relative;\n    font-weight: '
      )
      .concat(
        t('stepper.step.number.font.weight'),
        ';\n}\n\n.p-step-number::after {\n    content: " ";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: '
      )
      .concat(t('stepper.step.number.border.radius'), ';\n    box-shadow: ')
      .concat(
        t('stepper.step.number.shadow'),
        ';\n}\n\n.p-step-active .p-step-header {\n    cursor: default;\n}\n\n.p-step-active .p-step-number {\n    background: '
      )
      .concat(
        t('stepper.step.number.active.background'),
        ';\n    border-color: '
      )
      .concat(t('stepper.step.number.active.border.color'), ';\n    color: ')
      .concat(
        t('stepper.step.number.active.color'),
        ';\n}\n\n.p-step-active .p-step-title {\n    color: '
      )
      .concat(
        t('stepper.step.title.active.color'),
        ';\n}\n\n.p-step:not(.p-disabled):focus-visible {\n    outline: '
      )
      .concat(t('focus.ring.width'), ' ')
      .concat(t('focus.ring.style'), ' ')
      .concat(t('focus.ring.color'), ';\n    outline-offset: ')
      .concat(
        t('focus.ring.offset'),
        ';\n}\n\n.p-step:has(~ .p-step-active) .p-stepper-separator {\n    background: '
      )
      .concat(
        t('stepper.separator.active.background'),
        ';\n}\n\n.p-stepper-separator {\n    flex: 1 1 0;\n    background: '
      )
      .concat(
        t('stepper.separator.background'),
        ';\n    width: 100%;\n    height: '
      )
      .concat(t('stepper.separator.size'), ';\n    transition: background ')
      .concat(t('stepper.transition.duration'), ', color ')
      .concat(t('stepper.transition.duration'), ', border-color ')
      .concat(t('stepper.transition.duration'), ', box-shadow ')
      .concat(t('stepper.transition.duration'), ', outline-color ')
      .concat(
        t('stepper.transition.duration'),
        ';\n}\n\n.p-steppanels {\n    padding: '
      )
      .concat(
        t('stepper.steppanels.padding'),
        ';\n}\n\n.p-steppanel {\n    background: '
      )
      .concat(t('stepper.steppanel.background'), ';\n    color: ')
      .concat(
        t('stepper.steppanel.color'),
        ';\n}\n\n.p-stepper:has(.p-stepitem) {\n    display: flex;\n    flex-direction: column;\n}\n\n.p-stepitem {\n    display: flex;\n    flex-direction: column;\n    flex: initial;\n}\n\n.p-stepitem.p-stepitem-active {\n    flex: 1 1 auto;\n}\n\n.p-stepitem .p-step {\n    flex: initial;\n}\n\n.p-stepitem .p-steppanel-content {\n    width: 100%;\n    padding: '
      )
      .concat(
        t('stepper.steppanel.padding'),
        ';\n    margin-inline-start: 1rem;\n}\n\n.p-stepitem .p-steppanel {\n    display: flex;\n    flex: 1 1 auto;\n}\n\n.p-stepitem .p-stepper-separator {\n    flex: 0 0 auto;\n    width: '
      )
      .concat(t('stepper.separator.size'), ';\n    height: auto;\n    margin: ')
      .concat(
        t('stepper.separator.margin'),
        ';\n    position: relative;\n    left: calc(-1 * '
      )
      .concat(
        t('stepper.separator.size'),
        ');\n}\n\n.p-stepitem .p-stepper-separator:dir(rtl) {\n    left: calc(-9 * '
      )
      .concat(
        t('stepper.separator.size'),
        ');\n}\n\n.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {\n    background: '
      )
      .concat(
        t('stepper.separator.active.background'),
        ';\n}\n\n.p-stepitem:last-of-type .p-steppanel {\n    padding-inline-start: '
      )
      .concat(t('stepper.step.number.size'), ';\n}\n')
  }, 'theme'),
  y = {
    root: t(function (e) {
      return ['p-stepper p-component', { 'p-readonly': e.props.linear }]
    }, 'root'),
    separator: 'p-stepper-separator'
  },
  k = a.extend({ name: 'stepper', theme: S, classes: y }),
  N = {
    name: 'Stepper',
    extends: {
      name: 'BaseStepper',
      extends: n,
      props: {
        value: { type: [String, Number], default: void 0 },
        linear: { type: Boolean, default: !1 }
      },
      style: k,
      provide: t(function () {
        return { $pcStepper: this, $parentInstance: this }
      }, 'provide')
    },
    inheritAttrs: !1,
    emits: ['update:value'],
    data: t(function () {
      return { id: this.$attrs.id, d_value: this.value }
    }, 'data'),
    watch: {
      '$attrs.id': t(function (e) {
        this.id = e || l()
      }, '$attrsId'),
      value: t(function (e) {
        this.d_value = e
      }, 'value')
    },
    mounted: t(function () {
      this.id = this.id || l()
    }, 'mounted'),
    methods: {
      updateValue: t(function (e) {
        this.d_value !== e &&
          ((this.d_value = e), this.$emit('update:value', e))
      }, 'updateValue'),
      isStepActive: t(function (e) {
        return this.d_value === e
      }, 'isStepActive'),
      isStepDisabled: t(function () {
        return this.linear
      }, 'isStepDisabled')
    }
  }
function C(e, t, a, n, l, o) {
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps({ class: e.cx('root'), role: 'tablist' }, e.ptmi('root')),
      [
        e.$slots.start
          ? Vue.renderSlot(e.$slots, 'start', { key: 0 })
          : Vue.createCommentVNode('', !0),
        Vue.renderSlot(e.$slots, 'default'),
        e.$slots.end
          ? Vue.renderSlot(e.$slots, 'end', { key: 1 })
          : Vue.createCommentVNode('', !0)
      ],
      16
    )
  )
}
t(C, 'render$5'), (N.render = C)
var $ = {
  name: 'StepList',
  extends: {
    name: 'BaseStepList',
    extends: n,
    style: a.extend({ name: 'steplist', classes: { root: 'p-steplist' } }),
    provide: t(function () {
      return { $pcStepList: this, $parentInstance: this }
    }, 'provide')
  },
  inheritAttrs: !1
}
function w(e, t, a, n, l, o) {
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps({ class: e.cx('root') }, e.ptmi('root')),
      [Vue.renderSlot(e.$slots, 'default')],
      16
    )
  )
}
t(w, 'render$4'), ($.render = w)
var E = {
  name: 'StepPanels',
  extends: {
    name: 'BaseStepPanels',
    extends: n,
    style: a.extend({ name: 'steppanels', classes: { root: 'p-steppanels' } }),
    provide: t(function () {
      return { $pcStepPanels: this, $parentInstance: this }
    }, 'provide')
  },
  inheritAttrs: !1
}
function D(e, t, a, n, l, o) {
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'div',
      Vue.mergeProps({ class: e.cx('root') }, e.ptmi('root')),
      [Vue.renderSlot(e.$slots, 'default')],
      16
    )
  )
}
t(D, 'render$3'), (E.render = D)
var P = {
    root: t(function (e) {
      var t = e.instance
      return [
        'p-step',
        { 'p-step-active': t.active, 'p-disabled': t.isStepDisabled }
      ]
    }, 'root'),
    header: 'p-step-header',
    number: 'p-step-number',
    title: 'p-step-title'
  },
  B = a.extend({ name: 'step', classes: P }),
  I = { name: 'StepperSeparator', hostName: 'Stepper', extends: n }
function _(e, t, a, n, l, o) {
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'span',
      Vue.mergeProps({ class: e.cx('separator') }, e.ptm('separator')),
      null,
      16
    )
  )
}
t(_, 'render$1$1'), (I.render = _)
var M = {
    name: 'Step',
    extends: {
      name: 'BaseStep',
      extends: n,
      props: {
        value: { type: [String, Number], default: void 0 },
        disabled: { type: Boolean, default: !1 },
        asChild: { type: Boolean, default: !1 },
        as: { type: [String, Object], default: 'DIV' }
      },
      style: B,
      provide: t(function () {
        return { $pcStep: this, $parentInstance: this }
      }, 'provide')
    },
    inheritAttrs: !1,
    inject: {
      $pcStepper: { default: null },
      $pcStepList: { default: null },
      $pcStepItem: { default: null }
    },
    data: t(function () {
      return { isSeparatorVisible: !1 }
    }, 'data'),
    mounted: t(function () {
      if (this.$el && this.$pcStepList) {
        var e = o(this.$el, i(this.$pcStepper.$el, '[data-pc-name="step"]')),
          t = i(this.$pcStepper.$el, '[data-pc-name="step"]').length
        this.isSeparatorVisible = e !== t - 1
      }
    }, 'mounted'),
    methods: {
      getPTOptions: t(function (e) {
        return ('root' === e ? this.ptmi : this.ptm)(e, {
          context: { active: this.active, disabled: this.isStepDisabled }
        })
      }, 'getPTOptions'),
      onStepClick: t(function () {
        this.$pcStepper.updateValue(this.activeValue)
      }, 'onStepClick')
    },
    computed: {
      active: t(function () {
        return this.$pcStepper.isStepActive(this.activeValue)
      }, 'active'),
      activeValue: t(function () {
        var e
        return this.$pcStepItem
          ? null === (e = this.$pcStepItem) || void 0 === e
            ? void 0
            : e.value
          : this.value
      }, 'activeValue'),
      isStepDisabled: t(function () {
        return (
          !this.active && (this.$pcStepper.isStepDisabled() || this.disabled)
        )
      }, 'isStepDisabled'),
      id: t(function () {
        var e
        return ''
          .concat(
            null === (e = this.$pcStepper) || void 0 === e ? void 0 : e.id,
            '_step_'
          )
          .concat(this.activeValue)
      }, 'id'),
      ariaControls: t(function () {
        var e
        return ''
          .concat(
            null === (e = this.$pcStepper) || void 0 === e ? void 0 : e.id,
            '_steppanel_'
          )
          .concat(this.activeValue)
      }, 'ariaControls'),
      a11yAttrs: t(function () {
        return {
          root: {
            role: 'presentation',
            'aria-current': this.active ? 'step' : void 0,
            'data-pc-name': 'step',
            'data-pc-section': 'root',
            'data-p-disabled': this.isStepDisabled,
            'data-p-active': this.active
          },
          header: {
            id: this.id,
            role: 'tab',
            taindex: this.disabled ? -1 : void 0,
            'aria-controls': this.ariaControls,
            'data-pc-section': 'header',
            disabled: this.isStepDisabled,
            onClick: this.onStepClick
          }
        }
      }, 'a11yAttrs')
    },
    components: { StepperSeparator: I }
  },
  U = ['id', 'tabindex', 'aria-controls', 'disabled']
function T(e, t, a, n, l, o) {
  var i = Vue.resolveComponent('StepperSeparator')
  return e.asChild
    ? Vue.renderSlot(e.$slots, 'default', {
        key: 1,
        class: Vue.normalizeClass(e.cx('root')),
        active: o.active,
        value: e.value,
        a11yAttrs: o.a11yAttrs,
        activateCallback: o.onStepClick
      })
    : (Vue.openBlock(),
      Vue.createBlock(
        Vue.resolveDynamicComponent(e.as),
        Vue.mergeProps(
          {
            key: 0,
            class: e.cx('root'),
            'aria-current': o.active ? 'step' : void 0,
            role: 'presentation',
            'data-p-active': o.active,
            'data-p-disabled': o.isStepDisabled
          },
          o.getPTOptions('root')
        ),
        {
          default: Vue.withCtx(function () {
            return [
              Vue.createElementVNode(
                'button',
                Vue.mergeProps(
                  {
                    id: o.id,
                    class: e.cx('header'),
                    role: 'tab',
                    type: 'button',
                    tabindex: o.isStepDisabled ? -1 : void 0,
                    'aria-controls': o.ariaControls,
                    disabled: o.isStepDisabled,
                    onClick:
                      t[0] ||
                      (t[0] = function () {
                        return (
                          o.onStepClick && o.onStepClick.apply(o, arguments)
                        )
                      })
                  },
                  o.getPTOptions('header')
                ),
                [
                  Vue.createElementVNode(
                    'span',
                    Vue.mergeProps(
                      { class: e.cx('number') },
                      o.getPTOptions('number')
                    ),
                    Vue.toDisplayString(o.activeValue),
                    17
                  ),
                  Vue.createElementVNode(
                    'span',
                    Vue.mergeProps(
                      { class: e.cx('title') },
                      o.getPTOptions('title')
                    ),
                    [Vue.renderSlot(e.$slots, 'default')],
                    16
                  )
                ],
                16,
                U
              ),
              l.isSeparatorVisible
                ? (Vue.openBlock(), Vue.createBlock(i, { key: 0 }))
                : Vue.createCommentVNode('', !0)
            ]
          }),
          _: 3
        },
        16,
        ['class', 'aria-current', 'data-p-active', 'data-p-disabled']
      ))
}
t(T, 'render$2'), (M.render = T)
var A = {
    root: t(function (e) {
      var t = e.instance
      return ['p-steppanel', { 'p-steppanel-active': t.isVertical && t.active }]
    }, 'root'),
    content: 'p-steppanel-content'
  },
  L = a.extend({ name: 'steppanel', classes: A }),
  O = { name: 'StepperSeparator', hostName: 'Stepper', extends: n }
function z(e, t, a, n, l, o) {
  return (
    Vue.openBlock(),
    Vue.createElementBlock(
      'span',
      Vue.mergeProps({ class: e.cx('separator') }, e.ptm('separator')),
      null,
      16
    )
  )
}
t(z, 'render$1'), (O.render = z)
var j = {
  name: 'StepPanel',
  extends: {
    name: 'BaseStepPanel',
    extends: n,
    props: {
      value: { type: [String, Number], default: void 0 },
      asChild: { type: Boolean, default: !1 },
      as: { type: [String, Object], default: 'DIV' }
    },
    style: L,
    provide: t(function () {
      return { $pcStepPanel: this, $parentInstance: this }
    }, 'provide')
  },
  inheritAttrs: !1,
  inject: {
    $pcStepper: { default: null },
    $pcStepItem: { default: null },
    $pcStepList: { default: null }
  },
  data: t(function () {
    return { isSeparatorVisible: !1 }
  }, 'data'),
  mounted: t(function () {
    if (this.$el) {
      var e,
        t,
        a = i(this.$pcStepper.$el, '[data-pc-name="step"]'),
        n = r(
          this.isVertical
            ? null === (e = this.$pcStepItem) || void 0 === e
              ? void 0
              : e.$el
            : null === (t = this.$pcStepList) || void 0 === t
              ? void 0
              : t.$el,
          '[data-pc-name="step"]'
        ),
        l = o(n, a)
      this.isSeparatorVisible = this.isVertical && l !== a.length - 1
    }
  }, 'mounted'),
  methods: {
    getPTOptions: t(function (e) {
      return ('root' === e ? this.ptmi : this.ptm)(e, {
        context: { active: this.active }
      })
    }, 'getPTOptions'),
    updateValue: t(function (e) {
      this.$pcStepper.updateValue(e)
    }, 'updateValue')
  },
  computed: {
    active: t(function () {
      var e, t
      return (
        (this.$pcStepItem
          ? null === (e = this.$pcStepItem) || void 0 === e
            ? void 0
            : e.value
          : this.value) ===
        (null === (t = this.$pcStepper) || void 0 === t ? void 0 : t.d_value)
      )
    }, 'active'),
    isVertical: t(function () {
      return !!this.$pcStepItem
    }, 'isVertical'),
    activeValue: t(function () {
      var e
      return this.isVertical
        ? null === (e = this.$pcStepItem) || void 0 === e
          ? void 0
          : e.value
        : this.value
    }, 'activeValue'),
    id: t(function () {
      var e
      return ''
        .concat(
          null === (e = this.$pcStepper) || void 0 === e ? void 0 : e.id,
          '_steppanel_'
        )
        .concat(this.activeValue)
    }, 'id'),
    ariaControls: t(function () {
      var e
      return ''
        .concat(
          null === (e = this.$pcStepper) || void 0 === e ? void 0 : e.id,
          '_step_'
        )
        .concat(this.activeValue)
    }, 'ariaControls'),
    a11yAttrs: t(function () {
      return {
        id: this.id,
        role: 'tabpanel',
        'aria-controls': this.ariaControls,
        'data-pc-name': 'steppanel',
        'data-p-active': this.active
      }
    }, 'a11yAttrs')
  },
  components: { StepperSeparator: O }
}
function q(e, a, n, l, o, i) {
  var r = Vue.resolveComponent('StepperSeparator')
  return i.isVertical
    ? (Vue.openBlock(),
      Vue.createElementBlock(
        Vue.Fragment,
        { key: 0 },
        [
          e.asChild
            ? Vue.renderSlot(e.$slots, 'default', {
                key: 1,
                active: i.active,
                a11yAttrs: i.a11yAttrs,
                activateCallback: t(function (e) {
                  return i.updateValue(e)
                }, 'activateCallback')
              })
            : (Vue.openBlock(),
              Vue.createBlock(
                Vue.Transition,
                Vue.mergeProps(
                  { key: 0, name: 'p-toggleable-content' },
                  e.ptm('transition')
                ),
                {
                  default: Vue.withCtx(function () {
                    return [
                      Vue.withDirectives(
                        (Vue.openBlock(),
                        Vue.createBlock(
                          Vue.resolveDynamicComponent(e.as),
                          Vue.mergeProps(
                            {
                              id: i.id,
                              class: e.cx('root'),
                              role: 'tabpanel',
                              'aria-controls': i.ariaControls
                            },
                            i.getPTOptions('root')
                          ),
                          {
                            default: Vue.withCtx(function () {
                              return [
                                o.isSeparatorVisible
                                  ? (Vue.openBlock(),
                                    Vue.createBlock(r, { key: 0 }))
                                  : Vue.createCommentVNode('', !0),
                                Vue.createElementVNode(
                                  'div',
                                  Vue.mergeProps(
                                    { class: e.cx('content') },
                                    i.getPTOptions('content')
                                  ),
                                  [
                                    Vue.renderSlot(e.$slots, 'default', {
                                      active: i.active,
                                      activateCallback: t(function (e) {
                                        return i.updateValue(e)
                                      }, 'activateCallback')
                                    })
                                  ],
                                  16
                                )
                              ]
                            }),
                            _: 3
                          },
                          16,
                          ['id', 'class', 'aria-controls']
                        )),
                        [[Vue.vShow, i.active]]
                      )
                    ]
                  }),
                  _: 3
                },
                16
              ))
        ],
        64
      ))
    : (Vue.openBlock(),
      Vue.createElementBlock(
        Vue.Fragment,
        { key: 1 },
        [
          e.asChild
            ? e.asChild && i.active
              ? Vue.renderSlot(e.$slots, 'default', {
                  key: 1,
                  active: i.active,
                  a11yAttrs: i.a11yAttrs,
                  activateCallback: t(function (e) {
                    return i.updateValue(e)
                  }, 'activateCallback')
                })
              : Vue.createCommentVNode('', !0)
            : Vue.withDirectives(
                (Vue.openBlock(),
                Vue.createBlock(
                  Vue.resolveDynamicComponent(e.as),
                  Vue.mergeProps(
                    {
                      key: 0,
                      id: i.id,
                      class: e.cx('root'),
                      role: 'tabpanel',
                      'aria-controls': i.ariaControls
                    },
                    i.getPTOptions('root')
                  ),
                  {
                    default: Vue.withCtx(function () {
                      return [
                        Vue.renderSlot(e.$slots, 'default', {
                          active: i.active,
                          activateCallback: t(function (e) {
                            return i.updateValue(e)
                          }, 'activateCallback')
                        })
                      ]
                    }),
                    _: 3
                  },
                  16,
                  ['id', 'class', 'aria-controls']
                )),
                [[Vue.vShow, i.active]]
              )
        ],
        64
      ))
}
t(q, 'render'), (j.render = q)
const F = { class: 'flex flex-col gap-6 w-[600px]' },
  R = { class: 'flex flex-col gap-4' },
  W = { class: 'text-2xl font-semibold text-neutral-100' },
  G = { class: 'text-neutral-400 my-0' },
  H = { class: 'flex gap-2' },
  J = { class: 'bg-neutral-800 p-4 rounded-lg' },
  K = { class: 'text-lg font-medium mt-0 mb-3 text-neutral-100' },
  Q = { class: 'flex flex-col gap-2' },
  X = { class: 'flex items-center gap-2' },
  Y = { class: 'text-neutral-200' },
  Z = { class: 'pi pi-info-circle' },
  ee = { class: 'flex items-center gap-2' },
  te = { class: 'text-neutral-200' },
  ae = { class: 'pi pi-info-circle' },
  ne = Vue.defineComponent({
    __name: 'InstallLocationPicker',
    props: {
      installPath: { required: !0 },
      installPathModifiers: {},
      pathError: { required: !0 },
      pathErrorModifiers: {}
    },
    emits: ['update:installPath', 'update:pathError'],
    setup(e) {
      const { t: a } = VueI18n.useI18n(),
        n = Vue.useModel(e, 'installPath'),
        l = Vue.useModel(e, 'pathError'),
        o = Vue.ref(''),
        i = Vue.ref(''),
        r = V()
      Vue.onMounted(async () => {
        const e = await r.getSystemPaths()
        ;(o.value = e.appData),
          (i.value = e.appPath),
          (n.value = e.defaultInstallPath),
          await m(e.defaultInstallPath)
      })
      const m = t(async (e) => {
          try {
            l.value = ''
            const t = await r.validateInstallPath(e)
            t.isValid || (l.value = t.error)
          } catch (t) {
            l.value = a('install.pathValidationFailed')
          }
        }, 'validatePath'),
        v = t(async () => {
          try {
            const e = await r.showDirectoryPicker()
            e && ((n.value = e), await m(e))
          } catch (e) {
            l.value = a('install.failedToSelectDirectory')
          }
        }, 'browsePath')
      return (e, t) => {
        const a = Vue.resolveDirective('tooltip')
        return (
          Vue.openBlock(),
          Vue.createElementBlock('div', F, [
            Vue.createElementVNode('div', R, [
              Vue.createElementVNode(
                'h2',
                W,
                Vue.toDisplayString(e.$t('install.chooseInstallationLocation')),
                1
              ),
              Vue.createElementVNode(
                'p',
                G,
                Vue.toDisplayString(e.$t('install.installLocationDescription')),
                1
              ),
              Vue.createElementVNode('div', H, [
                Vue.createVNode(
                  Vue.unref(s),
                  { class: 'flex-1' },
                  {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(
                        Vue.unref(c),
                        {
                          modelValue: n.value,
                          'onUpdate:modelValue': [
                            t[0] || (t[0] = (e) => (n.value = e)),
                            m
                          ],
                          class: Vue.normalizeClass([
                            'w-full',
                            { 'p-invalid': l.value }
                          ])
                        },
                        null,
                        8,
                        ['modelValue', 'class']
                      ),
                      Vue.withDirectives(
                        Vue.createVNode(
                          Vue.unref(u),
                          { class: 'pi pi-info-circle' },
                          null,
                          512
                        ),
                        [[a, e.$t('install.installLocationTooltip')]]
                      )
                    ]),
                    _: 1
                  }
                ),
                Vue.createVNode(Vue.unref(p), {
                  icon: 'pi pi-folder',
                  onClick: v,
                  class: 'w-12'
                })
              ]),
              l.value
                ? (Vue.openBlock(),
                  Vue.createBlock(
                    Vue.unref(d),
                    { key: 0, severity: 'error' },
                    {
                      default: Vue.withCtx(() => [
                        Vue.createTextVNode(Vue.toDisplayString(l.value), 1)
                      ]),
                      _: 1
                    }
                  ))
                : Vue.createCommentVNode('', !0)
            ]),
            Vue.createElementVNode('div', J, [
              Vue.createElementVNode(
                'h3',
                K,
                Vue.toDisplayString(e.$t('install.systemLocations')),
                1
              ),
              Vue.createElementVNode('div', Q, [
                Vue.createElementVNode('div', X, [
                  t[1] ||
                    (t[1] = Vue.createElementVNode(
                      'i',
                      { class: 'pi pi-folder text-neutral-400' },
                      null,
                      -1
                    )),
                  t[2] ||
                    (t[2] = Vue.createElementVNode(
                      'span',
                      { class: 'text-neutral-400' },
                      'App Data:',
                      -1
                    )),
                  Vue.createElementVNode(
                    'span',
                    Y,
                    Vue.toDisplayString(o.value),
                    1
                  ),
                  Vue.withDirectives(
                    Vue.createElementVNode('span', Z, null, 512),
                    [[a, e.$t('install.appDataLocationTooltip')]]
                  )
                ]),
                Vue.createElementVNode('div', ee, [
                  t[3] ||
                    (t[3] = Vue.createElementVNode(
                      'i',
                      { class: 'pi pi-desktop text-neutral-400' },
                      null,
                      -1
                    )),
                  t[4] ||
                    (t[4] = Vue.createElementVNode(
                      'span',
                      { class: 'text-neutral-400' },
                      'App Path:',
                      -1
                    )),
                  Vue.createElementVNode(
                    'span',
                    te,
                    Vue.toDisplayString(i.value),
                    1
                  ),
                  Vue.withDirectives(
                    Vue.createElementVNode('span', ae, null, 512),
                    [[a, e.$t('install.appPathLocationTooltip')]]
                  )
                ])
              ])
            ])
          ])
        )
      }
    }
  }),
  le = { class: 'flex flex-col gap-6 w-[600px]' },
  oe = { class: 'flex flex-col gap-4' },
  ie = { class: 'text-2xl font-semibold text-neutral-100' },
  re = { class: 'text-neutral-400 my-0' },
  se = { class: 'flex gap-2' },
  ce = { key: 0, class: 'flex flex-col gap-4 bg-neutral-800 p-4 rounded-lg' },
  ue = { class: 'text-lg mt-0 font-medium text-neutral-100' },
  pe = { class: 'flex flex-col gap-3' },
  de = ['onClick'],
  Ve = ['for'],
  me = { class: 'text-sm text-neutral-400 my-1' },
  ve = { class: 'flex items-center gap-3 p-2 rounded cursor-not-allowed' },
  fe = { class: 'text-neutral-200 font-medium' },
  he = { class: 'text-sm text-neutral-400 my-1' },
  ge = { key: 1, class: 'text-neutral-400 italic' },
  xe = Vue.defineComponent({
    __name: 'MigrationPicker',
    props: {
      sourcePath: { required: !1 },
      sourcePathModifiers: {},
      migrationItemIds: { required: !1 },
      migrationItemIdsModifiers: {}
    },
    emits: ['update:sourcePath', 'update:migrationItemIds'],
    setup(e) {
      const { t: a } = VueI18n.useI18n(),
        n = V(),
        l = Vue.useModel(e, 'sourcePath'),
        o = Vue.useModel(e, 'migrationItemIds'),
        i = Vue.ref(m.map((e) => ({ ...e, selected: !0 }))),
        r = Vue.ref(''),
        s = Vue.computed(() => '' !== l.value && '' === r.value),
        u = t(async (e) => {
          if (e)
            try {
              r.value = ''
              const t = await n.validateComfyUISource(e)
              t.isValid || (r.value = t.error)
            } catch (t) {
              console.error(t), (r.value = a('install.pathValidationFailed'))
            }
          else r.value = ''
        }, 'validateSource'),
        h = t(async () => {
          try {
            const e = await n.showDirectoryPicker()
            e && ((l.value = e), await u(e))
          } catch (e) {
            console.error(e), (r.value = a('install.failedToSelectDirectory'))
          }
        }, 'browsePath')
      return (
        Vue.watchEffect(() => {
          o.value = i.value.filter((e) => e.selected).map((e) => e.id)
        }),
        (e, a) => (
          Vue.openBlock(),
          Vue.createElementBlock('div', le, [
            Vue.createElementVNode('div', oe, [
              Vue.createElementVNode(
                'h2',
                ie,
                Vue.toDisplayString(
                  e.$t('install.migrateFromExistingInstallation')
                ),
                1
              ),
              Vue.createElementVNode(
                'p',
                re,
                Vue.toDisplayString(
                  e.$t('install.migrationSourcePathDescription')
                ),
                1
              ),
              Vue.createElementVNode('div', se, [
                Vue.createVNode(
                  Vue.unref(c),
                  {
                    modelValue: l.value,
                    'onUpdate:modelValue': [
                      a[0] || (a[0] = (e) => (l.value = e)),
                      u
                    ],
                    placeholder:
                      'Select existing ComfyUI installation (optional)',
                    class: Vue.normalizeClass([
                      'flex-1',
                      { 'p-invalid': r.value }
                    ])
                  },
                  null,
                  8,
                  ['modelValue', 'class']
                ),
                Vue.createVNode(Vue.unref(p), {
                  icon: 'pi pi-folder',
                  onClick: h,
                  class: 'w-12'
                })
              ]),
              r.value
                ? (Vue.openBlock(),
                  Vue.createBlock(
                    Vue.unref(d),
                    { key: 0, severity: 'error' },
                    {
                      default: Vue.withCtx(() => [
                        Vue.createTextVNode(Vue.toDisplayString(r.value), 1)
                      ]),
                      _: 1
                    }
                  ))
                : Vue.createCommentVNode('', !0)
            ]),
            s.value
              ? (Vue.openBlock(),
                Vue.createElementBlock('div', ce, [
                  Vue.createElementVNode(
                    'h3',
                    ue,
                    Vue.toDisplayString(e.$t('install.selectItemsToMigrate')),
                    1
                  ),
                  Vue.createElementVNode('div', pe, [
                    (Vue.openBlock(!0),
                    Vue.createElementBlock(
                      Vue.Fragment,
                      null,
                      Vue.renderList(
                        i.value,
                        (e) => (
                          Vue.openBlock(),
                          Vue.createElementBlock(
                            'div',
                            {
                              key: e.id,
                              class:
                                'flex items-center gap-3 p-2 hover:bg-neutral-700 rounded',
                              onClick: t(
                                (t) => (e.selected = !e.selected),
                                'onClick'
                              )
                            },
                            [
                              Vue.createVNode(
                                Vue.unref(v),
                                {
                                  modelValue: e.selected,
                                  'onUpdate:modelValue': t(
                                    (t) => (e.selected = t),
                                    'onUpdate:modelValue'
                                  ),
                                  inputId: e.id,
                                  binary: !0,
                                  onClick:
                                    a[1] ||
                                    (a[1] = Vue.withModifiers(() => {}, [
                                      'stop'
                                    ]))
                                },
                                null,
                                8,
                                ['modelValue', 'onUpdate:modelValue', 'inputId']
                              ),
                              Vue.createElementVNode('div', null, [
                                Vue.createElementVNode(
                                  'label',
                                  {
                                    for: e.id,
                                    class: 'text-neutral-200 font-medium'
                                  },
                                  Vue.toDisplayString(e.label),
                                  9,
                                  Ve
                                ),
                                Vue.createElementVNode(
                                  'p',
                                  me,
                                  Vue.toDisplayString(e.description),
                                  1
                                )
                              ])
                            ],
                            8,
                            de
                          )
                        )
                      ),
                      128
                    )),
                    Vue.createElementVNode('div', ve, [
                      Vue.createVNode(Vue.unref(v), {
                        disabled: '',
                        binary: !0
                      }),
                      Vue.createElementVNode('div', null, [
                        Vue.createElementVNode('label', fe, [
                          Vue.createTextVNode(
                            Vue.toDisplayString(e.$t('install.customNodes')) +
                              ' ',
                            1
                          ),
                          Vue.createVNode(
                            Vue.unref(f),
                            { severity: 'secondary' },
                            {
                              default: Vue.withCtx(() => [
                                Vue.createTextVNode(
                                  Vue.toDisplayString(e.$t('comingSoon')) +
                                    '... ',
                                  1
                                )
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        Vue.createElementVNode(
                          'p',
                          he,
                          Vue.toDisplayString(
                            e.$t('install.customNodesDescription')
                          ),
                          1
                        )
                      ])
                    ])
                  ])
                ]))
              : (Vue.openBlock(),
                Vue.createElementBlock(
                  'div',
                  ge,
                  Vue.toDisplayString(e.$t('install.migrationOptional')),
                  1
                ))
          ])
        )
      )
    }
  })
var be = {
  name: 'InputSwitch',
  extends: h,
  mounted: t(function () {
    console.warn('Deprecated since v4. Use ToggleSwitch component instead.')
  }, 'mounted')
}
const Se = { class: 'flex flex-col gap-6 w-[600px]' },
  ye = { class: 'flex flex-col gap-4' },
  ke = { class: 'text-2xl font-semibold text-neutral-100' },
  Ne = { class: 'text-neutral-400 my-0' },
  Ce = { class: 'flex flex-col bg-neutral-800 p-4 rounded-lg' },
  $e = { class: 'flex items-center gap-4' },
  we = { class: 'flex-1' },
  Ee = { class: 'text-lg font-medium text-neutral-100' },
  De = { class: 'text-sm text-neutral-400 mt-1' },
  Pe = { class: 'flex items-center gap-4' },
  Be = { class: 'flex-1' },
  Ie = { class: 'text-lg font-medium text-neutral-100' },
  _e = { class: 'text-sm text-neutral-400 mt-1' },
  Me = { class: 'text-neutral-300' },
  Ue = { class: 'font-medium mb-2' },
  Te = { class: 'list-disc pl-6 space-y-1' },
  Ae = { class: 'font-medium mt-4 mb-2' },
  Le = { class: 'list-disc pl-6 space-y-1' },
  Oe = Vue.defineComponent({
    __name: 'DesktopSettingsConfiguration',
    props: {
      autoUpdate: { required: !0 },
      autoUpdateModifiers: {},
      allowMetrics: { required: !0 },
      allowMetricsModifiers: {}
    },
    emits: ['update:autoUpdate', 'update:allowMetrics'],
    setup(e) {
      const a = Vue.ref(!1),
        n = Vue.useModel(e, 'autoUpdate'),
        l = Vue.useModel(e, 'allowMetrics'),
        o = t(() => {
          a.value = !0
        }, 'showMetricsInfo')
      return (e, t) => (
        Vue.openBlock(),
        Vue.createElementBlock('div', Se, [
          Vue.createElementVNode('div', ye, [
            Vue.createElementVNode(
              'h2',
              ke,
              Vue.toDisplayString(e.$t('install.desktopAppSettings')),
              1
            ),
            Vue.createElementVNode(
              'p',
              Ne,
              Vue.toDisplayString(
                e.$t('install.desktopAppSettingsDescription')
              ),
              1
            )
          ]),
          Vue.createElementVNode('div', Ce, [
            Vue.createElementVNode('div', $e, [
              Vue.createElementVNode('div', we, [
                Vue.createElementVNode(
                  'h3',
                  Ee,
                  Vue.toDisplayString(e.$t('install.settings.autoUpdate')),
                  1
                ),
                Vue.createElementVNode(
                  'p',
                  De,
                  Vue.toDisplayString(
                    e.$t('install.settings.autoUpdateDescription')
                  ),
                  1
                )
              ]),
              Vue.createVNode(
                Vue.unref(be),
                {
                  modelValue: n.value,
                  'onUpdate:modelValue': t[0] || (t[0] = (e) => (n.value = e))
                },
                null,
                8,
                ['modelValue']
              )
            ]),
            Vue.createVNode(Vue.unref(g)),
            Vue.createElementVNode('div', Pe, [
              Vue.createElementVNode('div', Be, [
                Vue.createElementVNode(
                  'h3',
                  Ie,
                  Vue.toDisplayString(e.$t('install.settings.allowMetrics')),
                  1
                ),
                Vue.createElementVNode(
                  'p',
                  _e,
                  Vue.toDisplayString(
                    e.$t('install.settings.allowMetricsDescription')
                  ),
                  1
                ),
                Vue.createElementVNode(
                  'a',
                  {
                    href: '#',
                    class:
                      'text-sm text-blue-400 hover:text-blue-300 mt-1 inline-block',
                    onClick: Vue.withModifiers(o, ['prevent'])
                  },
                  Vue.toDisplayString(
                    e.$t('install.settings.learnMoreAboutData')
                  ),
                  1
                )
              ]),
              Vue.createVNode(
                Vue.unref(be),
                {
                  modelValue: l.value,
                  'onUpdate:modelValue': t[1] || (t[1] = (e) => (l.value = e))
                },
                null,
                8,
                ['modelValue']
              )
            ])
          ]),
          Vue.createVNode(
            Vue.unref(x),
            {
              visible: a.value,
              'onUpdate:visible': t[2] || (t[2] = (e) => (a.value = e)),
              modal: '',
              header: e.$t('install.settings.dataCollectionDialog.title')
            },
            {
              default: Vue.withCtx(() => [
                Vue.createElementVNode('div', Me, [
                  Vue.createElementVNode(
                    'h4',
                    Ue,
                    Vue.toDisplayString(
                      e.$t(
                        'install.settings.dataCollectionDialog.whatWeCollect'
                      )
                    ),
                    1
                  ),
                  Vue.createElementVNode('ul', Te, [
                    Vue.createElementVNode(
                      'li',
                      null,
                      Vue.toDisplayString(
                        e.$t(
                          'install.settings.dataCollectionDialog.errorReports'
                        )
                      ),
                      1
                    ),
                    Vue.createElementVNode(
                      'li',
                      null,
                      Vue.toDisplayString(
                        e.$t('install.settings.dataCollectionDialog.systemInfo')
                      ),
                      1
                    )
                  ]),
                  Vue.createElementVNode(
                    'h4',
                    Ae,
                    Vue.toDisplayString(
                      e.$t(
                        'install.settings.dataCollectionDialog.whatWeDoNotCollect'
                      )
                    ),
                    1
                  ),
                  Vue.createElementVNode('ul', Le, [
                    Vue.createElementVNode(
                      'li',
                      null,
                      Vue.toDisplayString(
                        e.$t(
                          'install.settings.dataCollectionDialog.personalInformation'
                        )
                      ),
                      1
                    ),
                    Vue.createElementVNode(
                      'li',
                      null,
                      Vue.toDisplayString(
                        e.$t(
                          'install.settings.dataCollectionDialog.workflowContents'
                        )
                      ),
                      1
                    ),
                    Vue.createElementVNode(
                      'li',
                      null,
                      Vue.toDisplayString(
                        e.$t(
                          'install.settings.dataCollectionDialog.fileSystemInformation'
                        )
                      ),
                      1
                    ),
                    Vue.createElementVNode(
                      'li',
                      null,
                      Vue.toDisplayString(
                        e.$t(
                          'install.settings.dataCollectionDialog.customNodeConfigurations'
                        )
                      ),
                      1
                    )
                  ])
                ])
              ]),
              _: 1
            },
            8,
            ['visible', 'header']
          )
        ])
      )
    }
  }),
  ze = {
    class:
      'font-sans flex flex-col items-center h-screen m-0 text-neutral-300 bg-neutral-900 dark-theme pointer-events-auto'
  },
  je = { class: 'flex pt-6 justify-end' },
  qe = { class: 'flex pt-6 justify-between' },
  Fe = { class: 'flex pt-6 justify-between' },
  Re = b(
    Vue.defineComponent({
      __name: 'InstallView',
      setup(e) {
        const a = Vue.ref(''),
          n = Vue.ref(''),
          l = Vue.ref(''),
          o = Vue.ref([]),
          i = Vue.ref(!0),
          r = Vue.ref(!0),
          s = Vue.computed(() => '' !== n.value),
          c = VueRouter.useRouter(),
          u = t(() => {
            const e = Vue.toRaw({
              installPath: a.value,
              autoUpdate: i.value,
              allowMetrics: r.value,
              migrationSourcePath: l.value,
              migrationItemIds: Vue.toRaw(o.value)
            })
            V().installComfyUI(e), c.push('/server-start')
          }, 'install')
        return (e, c) => (
          Vue.openBlock(),
          Vue.createElementBlock('div', ze, [
            Vue.createVNode(
              Vue.unref(N),
              { class: 'mt-[5vh] 2xl:mt-[20vh]', value: '1' },
              {
                default: Vue.withCtx(() => [
                  Vue.createVNode(Vue.unref($), null, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(
                        Vue.unref(M),
                        { value: '1', disabled: s.value },
                        {
                          default: Vue.withCtx(() => [
                            Vue.createTextVNode(
                              Vue.toDisplayString(
                                e.$t('install.installLocation')
                              ),
                              1
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['disabled']
                      ),
                      Vue.createVNode(
                        Vue.unref(M),
                        { value: '2', disabled: s.value },
                        {
                          default: Vue.withCtx(() => [
                            Vue.createTextVNode(
                              Vue.toDisplayString(e.$t('install.migration')),
                              1
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['disabled']
                      ),
                      Vue.createVNode(
                        Vue.unref(M),
                        { value: '3', disabled: s.value },
                        {
                          default: Vue.withCtx(() => [
                            Vue.createTextVNode(
                              Vue.toDisplayString(
                                e.$t('install.desktopSettings')
                              ),
                              1
                            )
                          ]),
                          _: 1
                        },
                        8,
                        ['disabled']
                      )
                    ]),
                    _: 1
                  }),
                  Vue.createVNode(Vue.unref(E), null, {
                    default: Vue.withCtx(() => [
                      Vue.createVNode(
                        Vue.unref(j),
                        { value: '1' },
                        {
                          default: Vue.withCtx(({ activateCallback: e }) => [
                            Vue.createVNode(
                              ne,
                              {
                                installPath: a.value,
                                'onUpdate:installPath':
                                  c[0] || (c[0] = (e) => (a.value = e)),
                                pathError: n.value,
                                'onUpdate:pathError':
                                  c[1] || (c[1] = (e) => (n.value = e))
                              },
                              null,
                              8,
                              ['installPath', 'pathError']
                            ),
                            Vue.createElementVNode('div', je, [
                              Vue.createVNode(
                                Vue.unref(p),
                                {
                                  label: 'Next',
                                  icon: 'pi pi-arrow-right',
                                  iconPos: 'right',
                                  onClick: t((t) => e('2'), 'onClick'),
                                  disabled: '' !== n.value
                                },
                                null,
                                8,
                                ['onClick', 'disabled']
                              )
                            ])
                          ]),
                          _: 1
                        }
                      ),
                      Vue.createVNode(
                        Vue.unref(j),
                        { value: '2' },
                        {
                          default: Vue.withCtx(({ activateCallback: e }) => [
                            Vue.createVNode(
                              xe,
                              {
                                sourcePath: l.value,
                                'onUpdate:sourcePath':
                                  c[2] || (c[2] = (e) => (l.value = e)),
                                migrationItemIds: o.value,
                                'onUpdate:migrationItemIds':
                                  c[3] || (c[3] = (e) => (o.value = e))
                              },
                              null,
                              8,
                              ['sourcePath', 'migrationItemIds']
                            ),
                            Vue.createElementVNode('div', qe, [
                              Vue.createVNode(
                                Vue.unref(p),
                                {
                                  label: 'Back',
                                  severity: 'secondary',
                                  icon: 'pi pi-arrow-left',
                                  onClick: t((t) => e('1'), 'onClick')
                                },
                                null,
                                8,
                                ['onClick']
                              ),
                              Vue.createVNode(
                                Vue.unref(p),
                                {
                                  label: 'Next',
                                  icon: 'pi pi-arrow-right',
                                  iconPos: 'right',
                                  onClick: t((t) => e('3'), 'onClick')
                                },
                                null,
                                8,
                                ['onClick']
                              )
                            ])
                          ]),
                          _: 1
                        }
                      ),
                      Vue.createVNode(
                        Vue.unref(j),
                        { value: '3' },
                        {
                          default: Vue.withCtx(({ activateCallback: e }) => [
                            Vue.createVNode(
                              Oe,
                              {
                                autoUpdate: i.value,
                                'onUpdate:autoUpdate':
                                  c[4] || (c[4] = (e) => (i.value = e)),
                                allowMetrics: r.value,
                                'onUpdate:allowMetrics':
                                  c[5] || (c[5] = (e) => (r.value = e))
                              },
                              null,
                              8,
                              ['autoUpdate', 'allowMetrics']
                            ),
                            Vue.createElementVNode('div', Fe, [
                              Vue.createVNode(
                                Vue.unref(p),
                                {
                                  label: 'Back',
                                  severity: 'secondary',
                                  icon: 'pi pi-arrow-left',
                                  onClick: t((t) => e('2'), 'onClick')
                                },
                                null,
                                8,
                                ['onClick']
                              ),
                              Vue.createVNode(
                                Vue.unref(p),
                                {
                                  label: 'Install',
                                  icon: 'pi pi-check',
                                  iconPos: 'right',
                                  disabled: s.value,
                                  onClick: c[6] || (c[6] = (e) => u())
                                },
                                null,
                                8,
                                ['disabled']
                              )
                            ])
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }
            )
          ])
        )
      }
    }),
    [['__scopeId', 'data-v-7ef01cf2']]
  )
export { Re as default }
