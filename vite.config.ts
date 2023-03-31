import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteRadar from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-Q1YPY6Y7FM',
      },
    })
  ],
  build: {
    outDir: 'build'
  }
})
