import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  build:{
    outDir:"./../src/resources/front",
  },
  plugins: [react()],
  server: {
      host: true,
      port: 5174,
      hmr: {
          host: 'localhost',
      },
  },
})
