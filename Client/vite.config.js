import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: fileURLToPath(new URL('../wwwroot', import.meta.url)),
    emptyOutDir: true,
  },
})
