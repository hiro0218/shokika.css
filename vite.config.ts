import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shokika.css/',
  root: 'docs',
  publicDir: '../public',
  build: {
    // Enable source maps for production debugging
    sourcemap: true,
    // Minimize assets
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
