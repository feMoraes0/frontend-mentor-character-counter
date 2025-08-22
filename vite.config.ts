/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    // https://github.com/vitest-dev/vitest/blob/main/examples/react/vitest.config.ts
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setupTests.js',
    css: true,
  },
});
