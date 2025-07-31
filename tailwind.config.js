// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"], // or just "class"
  theme: {
    extend: {
      // Your custom theme extensions here
    },
  },
  plugins: [],
}