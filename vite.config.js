import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// The site is published to GitHub Pages under /oftalmoclass/, so the built
// assets need that prefix. The dev server keeps serving from the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/oftalmoclass/' : '/',
  plugins: [react(), tailwindcss()],
}))
