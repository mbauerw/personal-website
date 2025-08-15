import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Make sure this includes your SkillCategory files
      './components/**/*.{js,jsx,ts,tsx}',
    ],
    // ...
})
