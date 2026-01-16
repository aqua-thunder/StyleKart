import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate'
    })
  ],
})