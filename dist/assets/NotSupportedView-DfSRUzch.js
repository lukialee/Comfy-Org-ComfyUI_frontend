var e = Object.defineProperty,
  t = (t, o) => e(t, 'name', { value: o, configurable: !0 })
import { e as o } from './index-CXhECVBD.js'
const l = '' + new URL('images/sad_girl.png', import.meta.url).href,
  r = {
    class:
      'font-sans w-screen h-screen flex items-center m-0 text-neutral-900 bg-neutral-300 pointer-events-auto'
  },
  n = { class: 'flex-grow flex items-center justify-center' },
  s = { class: 'flex flex-col gap-8 p-8' },
  i = { class: 'text-4xl font-bold text-red-500' },
  u = { class: 'space-y-4' },
  a = { class: 'text-xl' },
  c = { class: 'list-disc list-inside space-y-1 text-neutral-800' },
  p = { class: 'flex gap-4' },
  d = Vue.defineComponent({
    __name: 'NotSupportedView',
    setup(e) {
      const d = t(() => {
          window.open(
            'https://github.com/Comfy-Org/desktop#currently-supported-platforms',
            '_blank'
          )
        }, 'openDocs'),
        V = t(() => {
          window.open('https://forum.comfy.org/c/v1-feedback/', '_blank')
        }, 'reportIssue'),
        m = VueRouter.useRouter(),
        f = t(() => {
          m.push('/install')
        }, 'continueToInstall')
      return (e, t) => {
        const m = Vue.resolveDirective('tooltip')
        return (
          Vue.openBlock(),
          Vue.createElementBlock('div', r, [
            Vue.createElementVNode('div', n, [
              Vue.createElementVNode('div', s, [
                Vue.createElementVNode(
                  'h1',
                  i,
                  Vue.toDisplayString(e.$t('notSupported.title')),
                  1
                ),
                Vue.createElementVNode('div', u, [
                  Vue.createElementVNode(
                    'p',
                    a,
                    Vue.toDisplayString(e.$t('notSupported.message')),
                    1
                  ),
                  Vue.createElementVNode('ul', c, [
                    Vue.createElementVNode(
                      'li',
                      null,
                      Vue.toDisplayString(
                        e.$t('notSupported.supportedDevices.macos')
                      ),
                      1
                    ),
                    Vue.createElementVNode(
                      'li',
                      null,
                      Vue.toDisplayString(
                        e.$t('notSupported.supportedDevices.windows')
                      ),
                      1
                    )
                  ])
                ]),
                Vue.createElementVNode('div', p, [
                  Vue.createVNode(
                    Vue.unref(o),
                    {
                      label: e.$t('notSupported.learnMore'),
                      icon: 'pi pi-github',
                      onClick: d,
                      severity: 'secondary'
                    },
                    null,
                    8,
                    ['label']
                  ),
                  Vue.createVNode(
                    Vue.unref(o),
                    {
                      label: e.$t('notSupported.reportIssue'),
                      icon: 'pi pi-flag',
                      onClick: V,
                      severity: 'secondary'
                    },
                    null,
                    8,
                    ['label']
                  ),
                  Vue.withDirectives(
                    Vue.createVNode(
                      Vue.unref(o),
                      {
                        label: e.$t('notSupported.continue'),
                        icon: 'pi pi-arrow-right',
                        iconPos: 'right',
                        onClick: f,
                        severity: 'danger'
                      },
                      null,
                      8,
                      ['label']
                    ),
                    [[m, e.$t('notSupported.continueTooltip')]]
                  )
                ])
              ])
            ]),
            t[0] ||
              (t[0] = Vue.createElementVNode(
                'div',
                { class: 'h-screen flex-grow-0' },
                [
                  Vue.createElementVNode('img', {
                    src: l,
                    alt: 'Sad girl illustration',
                    class: 'h-full object-cover'
                  })
                ],
                -1
              ))
          ])
        )
      }
    }
  })
export { d as default }
