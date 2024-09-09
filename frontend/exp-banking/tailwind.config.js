/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-green': '#25600B',
        'dark-blue': '#0F3A63',
        'azure': '#0080FC',
        'ghost-white': '#F9F9F9',
        'blue-whale': '#15303B',
      },
    },
  },
  plugins: [],
}
