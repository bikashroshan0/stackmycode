import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: './', 
  build: {
    outDir: 'docs', // This forces Vite to output the finished site to the docs folder
    emptyOutDir: true, // Clears the folder before each build
  }
})