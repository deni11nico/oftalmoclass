// Public assets live in /public and are referenced by absolute path.
// On GitHub Pages the site is served from a sub-folder, so every one of those
// paths needs the Vite base prefix. In dev the base is "/" and this is a no-op.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const asset = (path) => `${BASE}${path}`

export function withBase(value) {
  if (typeof value === 'string') return value.startsWith('/img/') ? asset(value) : value
  if (Array.isArray(value)) return value.map(withBase)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withBase(v)]))
  }
  return value
}
