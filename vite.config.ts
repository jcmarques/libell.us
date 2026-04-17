import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev: base "/" so BrowserRouter matches http://localhost:5173/
// Prod: GitHub Pages project site https://<user>.github.io/libell.us/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/libell.us/' : '/',
  plugins: [react()],
}))
