import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    cors:true,
    proxy:{
      'foodly': ' https://github.com/danipv54/foodly/blob/gh-pages/assets'
    }
  }
  
})
