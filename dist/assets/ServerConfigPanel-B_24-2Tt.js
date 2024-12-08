var e = Object.defineProperty,
  t = (t, l) => e(t, 'name', { value: l, configurable: !0 })
import {
  u as l,
  ad as n,
  bS as r,
  bv as o,
  b8 as u,
  e as a,
  b0 as i,
  bT as V,
  bb as s
} from './index-CXhECVBD.js'
import { u as c } from './serverConfigStore-DaXaAdcO.js'
const d = { class: 'flex flex-col gap-2' },
  m = { class: 'flex justify-end gap-2' },
  f = { class: 'flex items-center justify-between' },
  p = Vue.defineComponent({
    __name: 'ServerConfigPanel',
    setup(e) {
      const p = l(),
        g = c(),
        {
          serverConfigsByCategory: v,
          serverConfigValues: C,
          launchArgs: k,
          commandLineArgs: y,
          modifiedConfigs: b
        } = n(g),
        B = t(() => {
          g.revertChanges()
        }, 'revertChanges'),
        h = t(() => {
          s().restartApp()
        }, 'restartApp')
      Vue.watch(k, (e) => {
        p.set('Comfy.Server.LaunchArgs', e)
      }),
        Vue.watch(C, (e) => {
          p.set('Comfy.Server.ServerConfigValues', e)
        })
      const { copyToClipboard: x } = r(),
        N = t(async () => {
          await x(y.value)
        }, 'copyCommandLineArgs'),
        { t: E } = VueI18n.useI18n(),
        S = t(
          (e) => ({
            ...e,
            name: E(`serverConfigItems.${e.id}.name`, e.name),
            tooltip: e.tooltip
              ? E(`serverConfigItems.${e.id}.tooltip`, e.tooltip)
              : void 0
          }),
          'translateItem'
        )
      return (e, l) => {
        const n = Vue.resolveComponent('i-lucide:terminal')
        return (
          Vue.openBlock(),
          Vue.createBlock(
            o,
            { value: 'Server-Config', class: 'server-config-panel' },
            {
              header: Vue.withCtx(() => [
                Vue.createElementVNode('div', d, [
                  Vue.unref(b).length > 0
                    ? (Vue.openBlock(),
                      Vue.createBlock(
                        Vue.unref(u),
                        { key: 0, severity: 'info', 'pt:text': 'w-full' },
                        {
                          default: Vue.withCtx(() => [
                            Vue.createElementVNode(
                              'p',
                              null,
                              Vue.toDisplayString(
                                e.$t('serverConfig.modifiedConfigs')
                              ),
                              1
                            ),
                            Vue.createElementVNode('ul', null, [
                              (Vue.openBlock(!0),
                              Vue.createElementBlock(
                                Vue.Fragment,
                                null,
                                Vue.renderList(
                                  Vue.unref(b),
                                  (e) => (
                                    Vue.openBlock(),
                                    Vue.createElementBlock(
                                      'li',
                                      { key: e.id },
                                      Vue.toDisplayString(e.name) +
                                        ': ' +
                                        Vue.toDisplayString(e.initialValue) +
                                        ' → ' +
                                        Vue.toDisplayString(e.value),
                                      1
                                    )
                                  )
                                ),
                                128
                              ))
                            ]),
                            Vue.createElementVNode('div', m, [
                              Vue.createVNode(
                                Vue.unref(a),
                                {
                                  label: e.$t('serverConfig.revertChanges'),
                                  onClick: B,
                                  outlined: ''
                                },
                                null,
                                8,
                                ['label']
                              ),
                              Vue.createVNode(
                                Vue.unref(a),
                                {
                                  label: e.$t('serverConfig.restart'),
                                  onClick: h,
                                  outlined: '',
                                  severity: 'danger'
                                },
                                null,
                                8,
                                ['label']
                              )
                            ])
                          ]),
                          _: 1
                        }
                      ))
                    : Vue.createCommentVNode('', !0),
                  Vue.unref(y)
                    ? (Vue.openBlock(),
                      Vue.createBlock(
                        Vue.unref(u),
                        { key: 1, severity: 'secondary', 'pt:text': 'w-full' },
                        {
                          icon: Vue.withCtx(() => [
                            Vue.createVNode(n, { class: 'text-xl font-bold' })
                          ]),
                          default: Vue.withCtx(() => [
                            Vue.createElementVNode('div', f, [
                              Vue.createElementVNode(
                                'p',
                                null,
                                Vue.toDisplayString(Vue.unref(y)),
                                1
                              ),
                              Vue.createVNode(Vue.unref(a), {
                                icon: 'pi pi-clipboard',
                                onClick: N,
                                severity: 'secondary',
                                text: ''
                              })
                            ])
                          ]),
                          _: 1
                        }
                      ))
                    : Vue.createCommentVNode('', !0)
                ])
              ]),
              default: Vue.withCtx(() => [
                (Vue.openBlock(!0),
                Vue.createElementBlock(
                  Vue.Fragment,
                  null,
                  Vue.renderList(
                    Object.entries(Vue.unref(v)),
                    ([l, n], r) => (
                      Vue.openBlock(),
                      Vue.createElementBlock('div', { key: l }, [
                        r > 0
                          ? (Vue.openBlock(),
                            Vue.createBlock(Vue.unref(i), { key: 0 }))
                          : Vue.createCommentVNode('', !0),
                        Vue.createElementVNode(
                          'h3',
                          null,
                          Vue.toDisplayString(
                            e.$t(`serverConfigCategories.${l}`, l)
                          ),
                          1
                        ),
                        (Vue.openBlock(!0),
                        Vue.createElementBlock(
                          Vue.Fragment,
                          null,
                          Vue.renderList(
                            n,
                            (e) => (
                              Vue.openBlock(),
                              Vue.createElementBlock(
                                'div',
                                {
                                  key: e.name,
                                  class: 'flex items-center mb-4'
                                },
                                [
                                  Vue.createVNode(
                                    V,
                                    {
                                      item: S(e),
                                      formValue: e.value,
                                      'onUpdate:formValue': t(
                                        (t) => (e.value = t),
                                        'onUpdate:formValue'
                                      ),
                                      id: e.id,
                                      labelClass: {
                                        'text-highlight':
                                          e.initialValue !== e.value
                                      }
                                    },
                                    null,
                                    8,
                                    [
                                      'item',
                                      'formValue',
                                      'onUpdate:formValue',
                                      'id',
                                      'labelClass'
                                    ]
                                  )
                                ]
                              )
                            )
                          ),
                          128
                        ))
                      ])
                    )
                  ),
                  128
                ))
              ]),
              _: 1
            }
          )
        )
      }
    }
  })
export { p as default }
