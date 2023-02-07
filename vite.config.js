import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'


// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['trix-editor'].indexOf(tag) !== -1
      }
    },
  }),
  VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: 'Crabi Calory',
      theme_color: 'rgb(148, 233, 194)',
      icons: [
        {
          src: 'icons/crab.png',
          sizes: '512x512',
          type: 'image/png',
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,jpg,}']
    }
  }),
  visualizer({
    open: false,
  })],
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
