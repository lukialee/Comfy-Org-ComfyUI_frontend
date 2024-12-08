var e = Object.defineProperty,
  t = (t, n) => e(t, 'name', { value: n, configurable: !0 })
import { e as n } from './index-CXhECVBD.js'
const o = {
    class:
      'font-sans w-screen h-screen mx-0 grid place-items-center justify-center items-center text-neutral-900 bg-neutral-300 pointer-events-auto'
  },
  l = {
    class:
      'col-start-1 h-screen row-start-1 place-content-center mx-auto overflow-y-auto'
  },
  a = {
    class:
      "max-w-screen-sm flex flex-col gap-8 p-8 bg-[url('/assets/images/Git-Logo-White.svg')] bg-no-repeat bg-right-top bg-origin-padding"
  },
  i = { class: 'mt-24 text-4xl font-bold text-red-500' },
  s = { class: 'space-y-4' },
  r = { class: 'text-xl' },
  c = { class: 'text-xl' },
  d = { class: 'text-m' },
  u = { class: 'flex gap-4 flex-row-reverse' },
  p = Vue.defineComponent({
    __name: 'DownloadGitView',
    setup(e) {
      const p = t(() => {
          window.open('https://git-scm.com/downloads/', '_blank')
        }, 'openGitDownloads'),
        V = t(() => {
          console.warn('pushing')
          VueRouter.useRouter().push('install')
        }, 'skipGit')
      return (e, t) => (
        Vue.openBlock(),
        Vue.createElementBlock('div', o, [
          Vue.createElementVNode('div', l, [
            Vue.createElementVNode('div', a, [
              Vue.createElementVNode(
                'h1',
                i,
                Vue.toDisplayString(e.$t('downloadGit.title')),
                1
              ),
              Vue.createElementVNode('div', s, [
                Vue.createElementVNode(
                  'p',
                  r,
                  Vue.toDisplayString(e.$t('downloadGit.message')),
                  1
                ),
                Vue.createElementVNode(
                  'p',
                  c,
                  Vue.toDisplayString(e.$t('downloadGit.instructions')),
                  1
                ),
                Vue.createElementVNode(
                  'p',
                  d,
                  Vue.toDisplayString(e.$t('downloadGit.warning')),
                  1
                )
              ]),
              Vue.createElementVNode('div', u, [
                Vue.createVNode(
                  Vue.unref(n),
                  {
                    label: e.$t('downloadGit.gitWebsite'),
                    icon: 'pi pi-external-link',
                    'icon-pos': 'right',
                    onClick: p,
                    severity: 'primary'
                  },
                  null,
                  8,
                  ['label']
                ),
                Vue.createVNode(
                  Vue.unref(n),
                  {
                    label: e.$t('downloadGit.skip'),
                    icon: 'pi pi-exclamation-triangle',
                    onClick: V,
                    severity: 'secondary'
                  },
                  null,
                  8,
                  ['label']
                )
              ])
            ])
          ])
        ])
      )
    }
  })
export { p as default }
