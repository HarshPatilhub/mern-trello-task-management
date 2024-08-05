import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api/v1' : {
        target: 'https://task-manage-backend-one.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react()],
})
