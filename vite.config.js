import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {format, resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es', 'cjs'],
      fileName: format => `xui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        preserveModules: true,
        exports: 'named'
      }
    }
  }
})
