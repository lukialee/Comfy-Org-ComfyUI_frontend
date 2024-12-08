var e = Object.defineProperty,
  l = (l, t) => e(l, 'name', { value: t, configurable: !0 })
import {
  i as t,
  W as u,
  b0 as a,
  b7 as r,
  b8 as o,
  e as n
} from './index-CXhECVBD.js'
const s = {
    id: 'comfy-user-selection',
    class:
      'font-sans flex flex-col items-center h-screen m-0 text-neutral-300 bg-neutral-900 dark-theme pointer-events-auto'
  },
  c = {
    class:
      'mt-[5vh] 2xl:mt-[20vh] min-w-84 relative rounded-lg bg-[var(--comfy-menu-bg)] p-5 px-10 shadow-lg'
  },
  i = { class: 'flex w-full flex-col items-center' },
  V = { class: 'flex w-full flex-col gap-2' },
  d = { for: 'new-user-input' },
  m = { class: 'flex w-full flex-col gap-2' },
  f = { for: 'existing-user-select' },
  p = { class: 'mt-5' },
  v = Vue.defineComponent({
    __name: 'UserSelectView',
    setup(e) {
      const v = t(),
        x = VueRouter.useRouter(),
        g = Vue.ref(null),
        b = Vue.ref(''),
        N = Vue.ref(''),
        w = Vue.computed(() => '' !== b.value.trim()),
        y = Vue.computed(() =>
          v.users.find((e) => e.username === b.value)
            ? `User "${b.value}" already exists`
            : ''
        ),
        h = Vue.computed(() => y.value || N.value),
        E = l(async () => {
          try {
            const e = w.value ? await v.createUser(b.value) : g.value
            if (!e) throw new Error('No user selected')
            v.login(e), x.push('/')
          } catch (e) {
            N.value = e.message ?? JSON.stringify(e)
          }
        }, 'login')
      return (
        Vue.onMounted(async () => {
          v.initialized || (await v.initialize())
        }),
        (e, l) => (
          Vue.openBlock(),
          Vue.createElementBlock('div', s, [
            Vue.createElementVNode('main', c, [
              l[2] ||
                (l[2] = Vue.createElementVNode(
                  'h1',
                  { class: 'my-2.5 mb-7 font-normal' },
                  'ComfyUI',
                  -1
                )),
              Vue.createElementVNode('form', i, [
                Vue.createElementVNode('div', V, [
                  Vue.createElementVNode(
                    'label',
                    d,
                    Vue.toDisplayString(e.$t('userSelect.newUser')) + ':',
                    1
                  ),
                  Vue.createVNode(
                    Vue.unref(u),
                    {
                      id: 'new-user-input',
                      modelValue: b.value,
                      'onUpdate:modelValue':
                        l[0] || (l[0] = (e) => (b.value = e)),
                      placeholder: e.$t('userSelect.enterUsername')
                    },
                    null,
                    8,
                    ['modelValue', 'placeholder']
                  )
                ]),
                Vue.createVNode(Vue.unref(a)),
                Vue.createElementVNode('div', m, [
                  Vue.createElementVNode(
                    'label',
                    f,
                    Vue.toDisplayString(e.$t('userSelect.existingUser')) + ':',
                    1
                  ),
                  Vue.createVNode(
                    Vue.unref(r),
                    {
                      modelValue: g.value,
                      'onUpdate:modelValue':
                        l[1] || (l[1] = (e) => (g.value = e)),
                      class: 'w-full',
                      inputId: 'existing-user-select',
                      options: Vue.unref(v).users,
                      'option-label': 'username',
                      placeholder: e.$t('userSelect.selectUser'),
                      disabled: w.value
                    },
                    null,
                    8,
                    ['modelValue', 'options', 'placeholder', 'disabled']
                  ),
                  h.value
                    ? (Vue.openBlock(),
                      Vue.createBlock(
                        Vue.unref(o),
                        { key: 0, severity: 'error' },
                        {
                          default: Vue.withCtx(() => [
                            Vue.createTextVNode(Vue.toDisplayString(h.value), 1)
                          ]),
                          _: 1
                        }
                      ))
                    : Vue.createCommentVNode('', !0)
                ]),
                Vue.createElementVNode('footer', p, [
                  Vue.createVNode(
                    Vue.unref(n),
                    { label: e.$t('userSelect.next'), onClick: E },
                    null,
                    8,
                    ['label']
                  )
                ])
              ])
            ])
          ])
        )
      )
    }
  })
export { v as default }
