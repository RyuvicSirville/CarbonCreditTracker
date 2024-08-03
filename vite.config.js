import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit from 500kB to 1000kB
  },
  base: '/CarbonCreditTracker/',

  plugins: [react()],
})
