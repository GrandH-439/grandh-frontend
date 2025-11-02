import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Updated for Vercel + correct favicon + proper app title path
export default defineConfig({
  plugins: [react()],
  base: './', // ensures assets load correctly in production
  server: {
    open: true, // keep your dev behavior
  },
  build: {
    outDir: 'dist', // standard Vite output folder
  },
})
