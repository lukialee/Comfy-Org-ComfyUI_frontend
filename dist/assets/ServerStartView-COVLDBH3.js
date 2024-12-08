var e = Object.defineProperty,
  t = (t, r) => e(t, 'name', { value: r, configurable: !0 })
import { b9 as r, e as n, ba as o, bb as a, _ as l } from './index-CXhECVBD.js'
const s = {
    class:
      'font-sans flex flex-col justify-center items-center h-screen m-0 text-neutral-300 bg-neutral-900 dark-theme pointer-events-auto'
  },
  u = { class: 'text-2xl font-bold' },
  c = { key: 0 },
  i = { key: 0, class: 'flex items-center my-4 gap-2' },
  V = l(
    Vue.defineComponent({
      __name: 'ServerStartView',
      setup(e) {
        const l = a(),
          { t: V } = VueI18n.useI18n(),
          p = Vue.ref(r.INITIAL_STATE),
          d = Vue.ref('')
        let f
        const m = t(({ status: e }) => {
            ;(p.value = e), e !== r.ERROR && f?.clear()
          }, 'updateProgress'),
          v = t(({ terminal: e, useAutoSize: t }, r) => {
            ;(f = e),
              t(r, !0, !0),
              l.onLogMessage((t) => {
                e.write(t)
              }),
              (e.options.cursorBlink = !1),
              (e.options.disableStdin = !0),
              (e.options.cursorInactiveStyle = 'block')
          }, 'terminalCreated'),
          b = t(() => l.reinstall(), 'reinstall'),
          k = t(() => {
            window.open('https://forum.comfy.org/c/v1-feedback/', '_blank')
          }, 'reportIssue'),
          g = t(() => l.openLogsFolder(), 'openLogs')
        return (
          Vue.onMounted(async () => {
            l.sendReady(),
              l.onProgressUpdate(m),
              (d.value = await l.getElectronVersion())
          }),
          (e, t) => (
            Vue.openBlock(),
            Vue.createElementBlock('div', s, [
              Vue.createElementVNode('h2', u, [
                Vue.createTextVNode(
                  Vue.toDisplayString(
                    Vue.unref(V)(`serverStart.process.${p.value}`)
                  ) + ' ',
                  1
                ),
                p.value === Vue.unref(r).ERROR
                  ? (Vue.openBlock(),
                    Vue.createElementBlock(
                      'span',
                      c,
                      ' v' + Vue.toDisplayString(d.value),
                      1
                    ))
                  : Vue.createCommentVNode('', !0)
              ]),
              p.value === Vue.unref(r).ERROR
                ? (Vue.openBlock(),
                  Vue.createElementBlock('div', i, [
                    Vue.createVNode(
                      Vue.unref(n),
                      {
                        icon: 'pi pi-flag',
                        severity: 'secondary',
                        label: Vue.unref(V)('serverStart.reportIssue'),
                        onClick: k
                      },
                      null,
                      8,
                      ['label']
                    ),
                    Vue.createVNode(
                      Vue.unref(n),
                      {
                        icon: 'pi pi-file',
                        severity: 'secondary',
                        label: Vue.unref(V)('serverStart.openLogs'),
                        onClick: g
                      },
                      null,
                      8,
                      ['label']
                    ),
                    Vue.createVNode(
                      Vue.unref(n),
                      {
                        icon: 'pi pi-refresh',
                        label: Vue.unref(V)('serverStart.reinstall'),
                        onClick: b
                      },
                      null,
                      8,
                      ['label']
                    )
                  ]))
                : Vue.createCommentVNode('', !0),
              Vue.createVNode(o, { onCreated: v })
            ])
          )
        )
      }
    }),
    [['__scopeId', 'data-v-95e9eb99']]
  )
export { V as default }
