import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use relative asset paths so index.html can live anywhere
  base: './',
  plugins: [react()],
  build: {
    // output into docs/ so you can serve from GitHub Pages "docs" folder
    outDir: 'docs',
    assetsDir: 'assets'
  }
});
