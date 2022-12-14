/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing:{
        '128': '32rem',
        '256': '64rem'
      }
    },
  },
  plugins: [],
}
