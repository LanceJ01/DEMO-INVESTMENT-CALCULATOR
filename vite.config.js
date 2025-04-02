import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [
    react({
      include: '**/*.jsx', // Strictly process JSX files
      babel: {
        parserOpts: {
          plugins: [['jsx', { useBuiltIns: true }]], // Ensures it works for pure JavaScript
        },
      },
    }),
  ],
};

