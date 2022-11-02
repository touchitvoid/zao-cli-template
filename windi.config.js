import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  prefixer: false,
  preflight: false,
  enableRpx: true,
  extract: {
    exclude: ['node_modules', '.git', 'dist']
  },
  theme: {
    extend: {
      width: {
        full: '100%'
      },
      fontSize: {
        default: '14px'
      },
      colors: {
        'primary': '#0058C6'
      },
      spacing: {
        xl: '40rpx',
      },
      backgroundColor: {
        'w': '#ffffff'
      },
      // 圆角
      borderRadius: {},
      // 行高
      lineHeight: {
        none: 1
      }
    }
  },
  corePlugins: {
    container: false
  }
})
