/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: 'Oswald'
      },
      colors: {
        'red-1': '#D91E26'
      }
    },
  },
  plugins: [],
}
