// GitHub Pages serves static files only; it has no rewrite rule for a SPA.
// Copying index.html to 404.html makes deep links such as /echipa work,
// because Pages serves 404.html for unknown paths and the router takes over.
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
console.log('spa-fallback: dist/404.html written')
