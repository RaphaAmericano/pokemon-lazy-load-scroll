import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/pokemon-lazy-load-scroll/',
  plugins: [react()]
})
