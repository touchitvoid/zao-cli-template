import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import WindiCSS from 'vite-plugin-windicss'
import MiniProgramTailwind from '@dcasia/mini-program-tailwind-webpack-plugin/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {
      'BASE_API': "http://localhost",

    },
  },
  plugins: [
    uni(),
    WindiCSS(),
    MiniProgramTailwind()
  ]
})
