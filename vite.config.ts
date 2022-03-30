import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "import.meta.env.PROD" ? '/finsta/' : '/',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build :{
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pause: resolve(__dirname, 'pause/index.html')
      }
    }
  }
});
