/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'spotify-black': '#121212',
        'spotify-dark': '#181818',
        'spotify-darker': '#000000',
        'spotify-green': '#1db954',
        'spotify-gray': '#a7a7a7',
        'spotify-light-gray': '#b3b3b3',
      },
    },
  },
  plugins: [],
}