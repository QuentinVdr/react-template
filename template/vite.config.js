import react from '@vitejs/plugin-react';
import sass from 'sass';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        api: 'modern'
      }
    }
  },
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    watch: {
      usePolling: true, // Enable polling instead of native file watching
      interval: 100 // Optional: adjust the polling interval (in milliseconds)
    }
  },
  resolve: {
    // Registering alias paths
    alias: {
      '@': '/src',
      '@api': '/src/api',
      '@assets': '/public/assets',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@stores': '/src/stores',
      '@styles': '/src/styles',
      '@translations': '/src/translations',
      '@utils': '/src/utils'
    }
  }
});
