import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/svelte-github-pages-template/", // name of your root directory
  plugins: [svelte()]
})
