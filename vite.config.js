import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    // GitHub Pages project URL: https://<user>.github.io/libell.us/
    base: '/libell.us/',
    plugins: [react()],
});
