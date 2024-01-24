import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 8000,
    },    
  // define:{
  //   'process.env.Youtube_Api_Key': JSON.stringify(import.meta.env.Youtube_Api_Key),
  //   // 'process.env.REACT_APP_BASE_URL': JSON.stringify(import.meta.env.REACT_APP_BASE_URL),
  // }
})
