var e = Object.defineProperty,
  a = (a, l) => e(a, 'name', { value: l, configurable: !0 })
import {
  bu as l,
  by as n,
  u as t,
  bv as u,
  bw as o,
  b8 as s,
  e as d,
  bi as r
} from './index-CXhECVBD.js'
import { s as i, a as V } from './index-rSmOOw8G.js'
import './index-DcTOE_QK.js'
const c = { class: 'flex justify-end' },
  m = Vue.defineComponent({
    __name: 'ExtensionPanel',
    setup(e) {
      const m = Vue.ref({ global: { value: '', matchMode: l.CONTAINS } }),
        f = n(),
        p = t(),
        x = Vue.ref({})
      Vue.onMounted(() => {
        f.extensions.forEach((e) => {
          x.value[e.name] = f.isExtensionEnabled(e.name)
        })
      })
      const v = Vue.computed(() =>
          f.extensions.filter(
            (e) => x.value[e.name] !== f.isExtensionEnabled(e.name)
          )
        ),
        b = Vue.computed(() => v.value.length > 0),
        E = a(() => {
          const e = Object.entries(x.value)
            .filter(([e, a]) => !a)
            .map(([e]) => e)
          p.set('Comfy.Extension.Disabled', [
            ...f.inactiveDisabledExtensionNames,
            ...e
          ])
        }, 'updateExtensionStatus'),
        h = a(() => {
          window.location.reload()
        }, 'applyChanges')
      return (e, l) => (
        Vue.openBlock(),
        Vue.createBlock(
          u,
          { value: 'Extension', class: 'extension-panel' },
          {
            header: Vue.withCtx(() => [
              Vue.createVNode(
                o,
                {
                  modelValue: m.value.global.value,
                  'onUpdate:modelValue':
                    l[0] || (l[0] = (e) => (m.value.global.value = e)),
                  placeholder: e.$t('searchExtensions') + '...'
                },
                null,
                8,
                ['modelValue', 'placeholder']
              ),
              b.value
                ? (Vue.openBlock(),
                  Vue.createBlock(
                    Vue.unref(s),
                    { key: 0, severity: 'info', 'pt:text': 'w-full' },
                    {
                      default: Vue.withCtx(() => [
                        Vue.createElementVNode('ul', null, [
                          (Vue.openBlock(!0),
                          Vue.createElementBlock(
                            Vue.Fragment,
                            null,
                            Vue.renderList(
                              v.value,
                              (e) => (
                                Vue.openBlock(),
                                Vue.createElementBlock('li', { key: e.name }, [
                                  Vue.createElementVNode(
                                    'span',
                                    null,
                                    Vue.toDisplayString(
                                      Vue.unref(f).isExtensionEnabled(e.name)
                                        ? '[-]'
                                        : '[+]'
                                    ),
                                    1
                                  ),
                                  Vue.createTextVNode(
                                    ' ' + Vue.toDisplayString(e.name),
                                    1
                                  )
                                ])
                              )
                            ),
                            128
                          ))
                        ]),
                        Vue.createElementVNode('div', c, [
                          Vue.createVNode(
                            Vue.unref(d),
                            {
                              label: e.$t('reloadToApplyChanges'),
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
                : Vue.createCommentVNode('', !0)
            ]),
            default: Vue.withCtx(() => [
              Vue.createVNode(
                Vue.unref(i),
                {
                  value: Vue.unref(f).extensions,
                  stripedRows: '',
                  size: 'small',
                  filters: m.value
                },
                {
                  default: Vue.withCtx(() => [
                    Vue.createVNode(
                      Vue.unref(V),
                      {
                        field: 'name',
                        header: e.$t('extensionName'),
                        sortable: ''
                      },
                      null,
                      8,
                      ['header']
                    ),
                    Vue.createVNode(
                      Vue.unref(V),
                      { pt: { bodyCell: 'flex items-center justify-end' } },
                      {
                        body: Vue.withCtx((e) => [
                          Vue.createVNode(
                            Vue.unref(r),
                            {
                              modelValue: x.value[e.data.name],
                              'onUpdate:modelValue': a(
                                (a) => (x.value[e.data.name] = a),
                                'onUpdate:modelValue'
                              ),
                              onChange: E
                            },
                            null,
                            8,
                            ['modelValue', 'onUpdate:modelValue']
                          )
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                },
                8,
                ['value', 'filters']
              )
            ]),
            _: 1
          }
        )
      )
    }
  })
export { m as default }
