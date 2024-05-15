import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },

      { find: '@layut', replacement: '/src/layout' },
      { find: '@ui', replacement: '/src/components/ui' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@router', replacement: '/src/router' },
      { find: '@navList', replacement: '/src/router/nav-list' },
      { find: '@model', replacement: '/src/model' },
      { find: '@valideshin', replacement: '/src/utils/valideshin.ts' },

      { find: '@auth', replacement: '/src/service/auth' },
      { find: '@services', replacement: '/src/service/services' },

      {find: "@globol-interface" , replacement: '/src/types/globol-interface' },

      {find: '@store-services', replacement: '/src/store/index.ts' },


      





    ]
  }
})
