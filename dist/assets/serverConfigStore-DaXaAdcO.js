var e = Object.defineProperty,
  u = (u, a) => e(u, 'name', { value: a, configurable: !0 })
import { d as a } from './index-CXhECVBD.js'
const l = a('serverConfig', () => {
  const e = Vue.ref({}),
    a = Vue.computed(() => Object.values(e.value)),
    l = Vue.computed(() => a.value.filter((e) => e.initialValue !== e.value)),
    r = u(() => {
      for (const e of l.value) e.value = e.initialValue
    }, 'revertChanges'),
    t = Vue.computed(() =>
      a.value.reduce((e, u) => {
        const a = u.category?.[0] ?? 'General'
        return (e[a] = e[a] || []), e[a].push(u), e
      }, {})
    ),
    o = Vue.computed(() =>
      Object.fromEntries(
        a.value.map((e) => [
          e.id,
          e.value === e.defaultValue || null === e.value || void 0 === e.value
            ? void 0
            : e.value
        ])
      )
    ),
    n = Vue.computed(() => {
      const e = Object.assign(
        {},
        ...a.value.map((e) =>
          e.value === e.defaultValue || null === e.value || void 0 === e.value
            ? {}
            : e.getValue
              ? e.getValue(e.value)
              : { [e.id]: e.value }
        )
      )
      return Object.fromEntries(
        Object.entries(e).map(([e, u]) =>
          !0 === u ? [e, ''] : [e, u.toString()]
        )
      )
    }),
    i = Vue.computed(() =>
      Object.entries(n.value)
        .map(([e, u]) => [`--${e}`, u])
        .flat()
        .filter((e) => '' !== e)
        .join(' ')
    )
  function v(u, a) {
    for (const l of u) {
      const u = a[l.id] ?? l.defaultValue
      e.value[l.id] = { ...l, value: u, initialValue: u }
    }
  }
  return (
    u(v, 'loadServerConfig'),
    {
      serverConfigById: e,
      serverConfigs: a,
      modifiedConfigs: l,
      serverConfigsByCategory: t,
      serverConfigValues: o,
      launchArgs: n,
      commandLineArgs: i,
      revertChanges: r,
      loadServerConfig: v
    }
  )
})
export { l as u }
