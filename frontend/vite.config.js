import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api/v1' : {
        target: 'https://mern-trello-task-management-backend.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react()],
})
