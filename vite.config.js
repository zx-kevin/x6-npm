import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: './src/lib/x6-data-driven/*',
      fileName: (format) => `[name].${format == 'es' ? 'js' : format}`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      input: {
        index: './src/lib/x6-data-driven/index.js',
        graph: './src/lib/x6-data-driven/Graph.jsx'
        // hooks: './src/lib/x6-data-driven/hooks.ts',
        // utils: './src/lib/x6-data-driven/utils.ts'
      },
      external: ['vue', '@antv/x6'],
      output: {
        globals: {
          '@antv/x6': 'X6',
          vue: 'Vue'
        }
      }
    }
  }
})
