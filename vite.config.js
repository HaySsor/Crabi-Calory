import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['trix-editor'].indexOf(tag) !== -1
      }
    },
  }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: [
      'nouislider',
      'wnumb',
      'trix'
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/_variables.scss";`
      }
    }
  }
})
