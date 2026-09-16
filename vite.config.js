import { writeFileSync, mkdirSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// One id per build. In GitHub Actions this is the commit sha; locally a timestamp.
const BUILD_ID = (process.env.GITHUB_SHA ?? Date.now().toString(36)).slice(0, 12)

// Writes dist/version.json so the running page can tell whether a newer build
// has been published (GitHub Pages caches index.html for 10 minutes).
function versionFile() {
  return {
    name: 'oftalmoclass-version-file',
    apply: 'build',
    closeBundle() {
      mkdirSync('dist', { recursive: true })
      writeFileSync('dist/version.json', JSON.stringify({ build: BUILD_ID }) + '\n')
    },
  }
}

// The site is published to GitHub Pages under /oftalmoclass/, so the built
// assets need that prefix. The dev server keeps serving from the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/oftalmoclass/' : '/',
  define: { __BUILD_ID__: JSON.stringify(BUILD_ID) },
  plugins: [react(), tailwindcss(), versionFile()],
}))
