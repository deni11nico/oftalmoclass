// GitHub Pages tells browsers to keep index.html for 10 minutes, so right after
// a deploy a visitor can get the old page pointing at old assets. This asks the
// server (cache-busted) which build is current and reloads once if it differs.
// A reload revalidates the document, so it comes back fresh.

const RELOADED_KEY = 'oftalmoclass:reloaded-for'

export function checkForNewerBuild() {
  if (!import.meta.env.PROD) return

  const url = `${import.meta.env.BASE_URL}version.json?t=${Date.now()}`
  fetch(url, { cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => {
      const live = data?.build
      if (!live || live === __BUILD_ID__) return
      // reload at most once per newer build, so a stale CDN edge cannot loop us
      if (sessionStorage.getItem(RELOADED_KEY) === live) return
      sessionStorage.setItem(RELOADED_KEY, live)
      location.reload()
    })
    .catch(() => {
      /* offline or blocked: keep showing what we have */
    })
}
