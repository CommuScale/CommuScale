// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate vendor chunks for better caching
            vendor: ['react', 'react-dom'],
            motion: ['framer-motion'],
            icons: ['lucide-react']
          }
        }
      }
    }
  },

  integrations: [react()],
  
  // Enable compression and optimization
  build: {
    inlineStylesheets: 'auto'
  },
  
  // Enable prefetching for better navigation performance
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});