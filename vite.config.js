import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // telling vtest the location of the file 
    globals: true, 
    setupFiles: ["./test-setup.js"],
    environment: 'jsdom'
  }
})
