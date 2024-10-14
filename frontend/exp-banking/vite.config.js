import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures the build output goes to the 'dist' folder
  },
  server: {
    port: 5173, // Adjust the port if needed
  },
});
