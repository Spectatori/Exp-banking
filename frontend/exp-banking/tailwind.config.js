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
        'dark-blue': '#0F3A63',
        'azure': '#0080FC',
        'ghost-white': '#F9F9F9',
        'blue-whale': '#15303B',
        'kelly-green': '#52AE30',
        'space-wolves-grey': '#DDE6F0',
        'category-orange': '#FF6600',
        'category-purple': '#8683ce',
        'category-blue': '#00c9f4',
        'category-yellow': '#f9f871',
        'category-green': '#a6f791'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
