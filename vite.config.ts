import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Routes from 'vite-plugin-router'

import path from 'path';

export default defineConfig({
  plugins: [react(), Routes()],

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ]
  }
})
