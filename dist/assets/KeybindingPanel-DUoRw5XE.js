var e = Object.defineProperty,
  n = (n, i) => e(n, 'name', { value: i, configurable: !0 })
import {
  a5 as i,
  bu as l,
  k as a,
  f as u,
  aG as t,
  bv as o,
  bw as d,
  e as s,
  aa as r,
  W as c,
  b8 as V,
  bp as b,
  bx as f,
  _ as v
} from './index-CXhECVBD.js'
import { s as m, a as p } from './index-rSmOOw8G.js'
import './index-DcTOE_QK.js'
const y = { key: 0, class: 'px-2' },
  g = Vue.defineComponent({
    __name: 'KeyComboDisplay',
    props: { keyCombo: {}, isModified: { type: Boolean, default: !1 } },
    setup(e) {
      const n = e,
        l = Vue.computed(() => n.keyCombo.getKeySequences())
      return (e, n) => (
        Vue.openBlock(),
        Vue.createElementBlock('span', null, [
          (Vue.openBlock(!0),
          Vue.createElementBlock(
            Vue.Fragment,
            null,
            Vue.renderList(
              l.value,
              (n, a) => (
                Vue.openBlock(),
                Vue.createElementBlock(
                  Vue.Fragment,
                  { key: a },
                  [
                    Vue.createVNode(
                      Vue.unref(i),
                      { severity: e.isModified ? 'info' : 'secondary' },
                      {
                        default: Vue.withCtx(() => [
                          Vue.createTextVNode(Vue.toDisplayString(n), 1)
                        ]),
                        _: 2
                      },
                      1032,
                      ['severity']
                    ),
                    a < l.value.length - 1
                      ? (Vue.openBlock(),
                        Vue.createElementBlock('span', y, '+'))
                      : Vue.createCommentVNode('', !0)
                  ],
                  64
                )
              )
            ),
            128
          ))
        ])
      )
    }
  }),
  k = { class: 'actions invisible flex flex-row' },
  C = ['title'],
  h = { key: 1 },
  x = v(
    Vue.defineComponent({
      __name: 'KeybindingPanel',
      setup(e) {
        const v = Vue.ref({ global: { value: '', matchMode: l.CONTAINS } }),
          y = a(),
          x = u(),
          w = Vue.computed(() =>
            Object.values(x.commands).map((e) => ({
              id: e.id,
              keybinding: y.getKeybindingByCommandId(e.id)
            }))
          ),
          K = Vue.ref(null),
          N = Vue.ref(!1),
          B = Vue.ref(null),
          _ = Vue.ref(null),
          E = Vue.ref(null),
          I = Vue.computed(() =>
            _.value
              ? _.value.keybinding?.combo?.equals(B.value)
                ? null
                : B.value
                  ? y.getKeybinding(B.value)
                  : null
              : null
          )
        function M(e) {
          ;(_.value = e),
            (B.value = e.keybinding ? e.keybinding.combo : null),
            (N.value = !0)
        }
        function D(e) {
          e.keybinding &&
            (y.unsetKeybinding(e.keybinding), y.persistUserKeybindings())
        }
        function S(e) {
          const n = b.fromEvent(e)
          B.value = n
        }
        function U() {
          ;(N.value = !1), (_.value = null), (B.value = null)
        }
        function j() {
          if (_.value && B.value) {
            y.updateKeybindingOnCommand(
              new f({ commandId: _.value.id, combo: B.value })
            ) && y.persistUserKeybindings()
          }
          U()
        }
        n(M, 'editKeybinding'),
          Vue.watchEffect(() => {
            N.value &&
              setTimeout(() => {
                E.value?.$el?.focus()
              }, 300)
          }),
          n(D, 'removeKeybinding'),
          n(S, 'captureKeybinding'),
          n(U, 'cancelEdit'),
          n(j, 'saveKeybinding')
        const T = t()
        async function O() {
          y.resetKeybindings(),
            await y.persistUserKeybindings(),
            T.add({
              severity: 'info',
              summary: 'Info',
              detail: 'Keybindings reset',
              life: 3e3
            })
        }
        return (
          n(O, 'resetKeybindings'),
          (e, l) => {
            const a = Vue.resolveDirective('tooltip')
            return (
              Vue.openBlock(),
              Vue.createBlock(
                o,
                { value: 'Keybinding', class: 'keybinding-panel' },
                {
                  header: Vue.withCtx(() => [
                    Vue.createVNode(
                      d,
                      {
                        modelValue: v.value.global.value,
                        'onUpdate:modelValue':
                          l[0] || (l[0] = (e) => (v.value.global.value = e)),
                        placeholder: e.$t('searchKeybindings') + '...'
                      },
                      null,
                      8,
                      ['modelValue', 'placeholder']
                    )
                  ]),
                  default: Vue.withCtx(() => [
                    Vue.createVNode(
                      Vue.unref(m),
                      {
                        value: w.value,
                        selection: K.value,
                        'onUpdate:selection':
                          l[1] || (l[1] = (e) => (K.value = e)),
                        'global-filter-fields': ['id'],
                        filters: v.value,
                        selectionMode: 'single',
                        stripedRows: '',
                        pt: { header: 'px-0' }
                      },
                      {
                        default: Vue.withCtx(() => [
                          Vue.createVNode(
                            Vue.unref(p),
                            { field: 'actions', header: '' },
                            {
                              body: Vue.withCtx((e) => [
                                Vue.createElementVNode('div', k, [
                                  Vue.createVNode(
                                    Vue.unref(s),
                                    {
                                      icon: 'pi pi-pencil',
                                      class: 'p-button-text',
                                      onClick: n((n) => M(e.data), 'onClick')
                                    },
                                    null,
                                    8,
                                    ['onClick']
                                  ),
                                  Vue.createVNode(
                                    Vue.unref(s),
                                    {
                                      icon: 'pi pi-trash',
                                      class: 'p-button-text p-button-danger',
                                      onClick: n((n) => D(e.data), 'onClick'),
                                      disabled: !e.data.keybinding
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
                            Vue.unref(p),
                            {
                              field: 'id',
                              header: 'Command ID',
                              sortable: '',
                              class: 'max-w-64 2xl:max-w-full'
                            },
                            {
                              body: Vue.withCtx((e) => [
                                Vue.createElementVNode(
                                  'div',
                                  {
                                    class:
                                      'overflow-hidden text-ellipsis whitespace-nowrap',
                                    title: e.data.id
                                  },
                                  Vue.toDisplayString(e.data.id),
                                  9,
                                  C
                                )
                              ]),
                              _: 1
                            }
                          ),
                          Vue.createVNode(
                            Vue.unref(p),
                            { field: 'keybinding', header: 'Keybinding' },
                            {
                              body: Vue.withCtx((e) => [
                                e.data.keybinding
                                  ? (Vue.openBlock(),
                                    Vue.createBlock(
                                      g,
                                      {
                                        key: 0,
                                        keyCombo: e.data.keybinding.combo,
                                        isModified: Vue.unref(
                                          y
                                        ).isCommandKeybindingModified(e.data.id)
                                      },
                                      null,
                                      8,
                                      ['keyCombo', 'isModified']
                                    ))
                                  : (Vue.openBlock(),
                                    Vue.createElementBlock('span', h, '-'))
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      },
                      8,
                      ['value', 'selection', 'filters']
                    ),
                    Vue.createVNode(
                      Vue.unref(r),
                      {
                        class: 'min-w-96',
                        visible: N.value,
                        'onUpdate:visible':
                          l[2] || (l[2] = (e) => (N.value = e)),
                        modal: '',
                        header: _.value?.id,
                        onHide: U
                      },
                      {
                        footer: Vue.withCtx(() => [
                          Vue.createVNode(
                            Vue.unref(s),
                            {
                              label: 'Save',
                              icon: 'pi pi-check',
                              onClick: j,
                              disabled: !!I.value,
                              autofocus: ''
                            },
                            null,
                            8,
                            ['disabled']
                          )
                        ]),
                        default: Vue.withCtx(() => [
                          Vue.createElementVNode('div', null, [
                            Vue.createVNode(
                              Vue.unref(c),
                              {
                                class: 'mb-2 text-center',
                                ref_key: 'keybindingInput',
                                ref: E,
                                modelValue: B.value?.toString() ?? '',
                                placeholder: 'Press keys for new binding',
                                onKeydown: Vue.withModifiers(S, [
                                  'stop',
                                  'prevent'
                                ]),
                                autocomplete: 'off',
                                fluid: '',
                                invalid: !!I.value
                              },
                              null,
                              8,
                              ['modelValue', 'invalid']
                            ),
                            I.value
                              ? (Vue.openBlock(),
                                Vue.createBlock(
                                  Vue.unref(V),
                                  { key: 0, severity: 'error' },
                                  {
                                    default: Vue.withCtx(() => [
                                      l[3] ||
                                        (l[3] = Vue.createTextVNode(
                                          ' Keybinding already exists on '
                                        )),
                                      Vue.createVNode(
                                        Vue.unref(i),
                                        {
                                          severity: 'secondary',
                                          value: I.value.commandId
                                        },
                                        null,
                                        8,
                                        ['value']
                                      )
                                    ]),
                                    _: 1
                                  }
                                ))
                              : Vue.createCommentVNode('', !0)
                          ])
                        ]),
                        _: 1
                      },
                      8,
                      ['visible', 'header']
                    ),
                    Vue.withDirectives(
                      Vue.createVNode(
                        Vue.unref(s),
                        {
                          class: 'mt-4',
                          label: e.$t('reset'),
                          icon: 'pi pi-trash',
                          severity: 'danger',
                          fluid: '',
                          text: '',
                          onClick: O
                        },
                        null,
                        8,
                        ['label']
                      ),
                      [[a, e.$t('resetKeybindingsTooltip')]]
                    )
                  ]),
                  _: 1
                }
              )
            )
          }
        )
      }
    }),
    [['__scopeId', 'data-v-9d7e362e']]
  )
export { x as default }
