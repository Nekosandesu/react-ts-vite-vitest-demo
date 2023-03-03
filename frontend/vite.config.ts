/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@api', replacement: resolve(__dirname, './src/api') },
      { find: '@utils', replacement: resolve(__dirname, './src/utils') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
    ],
  },
  server: {
    proxy: {
      '/items': 'http://localhost:8000',
      'items/:id': 'http://localhost:8000',
      '/categories': 'http://localhost:8000',
      '/images': 'http://localhost:8000',
    },
  },
  css: {
    modules: {
      // enable this: import { applyColor } from './example.module.css'
      localsConvention: 'camelCaseOnly',
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts',
    globals: true,
  },
});
