var e = Object.defineProperty,
  t = (t, n) => e(t, 'name', { value: n, configurable: !0 })
import { e as n, _ as a } from './index-CXhECVBD.js'
const l = {
    class:
      'font-sans flex flex-col justify-center items-center h-screen m-0 text-neutral-300 bg-neutral-900 dark-theme pointer-events-auto'
  },
  o = { class: 'flex flex-col items-center justify-center gap-8 p-8' },
  r = { class: 'animated-gradient-text text-glow select-none' },
  c = a(
    Vue.defineComponent({
      __name: 'WelcomeView',
      setup(e) {
        const a = VueRouter.useRouter(),
          c = t((e) => {
            a.push(e)
          }, 'navigateTo')
        return (e, t) => (
          Vue.openBlock(),
          Vue.createElementBlock('div', l, [
            Vue.createElementVNode('div', o, [
              Vue.createElementVNode(
                'h1',
                r,
                Vue.toDisplayString(e.$t('welcome.title')),
                1
              ),
              Vue.createVNode(
                Vue.unref(n),
                {
                  label: e.$t('welcome.getStarted'),
                  icon: 'pi pi-arrow-right',
                  iconPos: 'right',
                  size: 'large',
                  rounded: '',
                  onClick: t[0] || (t[0] = (e) => c('/install')),
                  class: 'p-4 text-lg fade-in-up'
                },
                null,
                8,
                ['label']
              )
            ])
          ])
        )
      }
    }),
    [['__scopeId', 'data-v-c4d014c5']]
  )
export { c as default }
