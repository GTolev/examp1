import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from "vite-babel-plugin"
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    babel(),
    Pages({
      pagesDir: "src/views"
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      resolvers: [
        ElementPlusResolver(),
      ],
      dts: true,
    })
  ]
})
