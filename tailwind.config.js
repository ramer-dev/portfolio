/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'xs':'0px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    extend: {
      spacing:{
        '128': '32rem',
        '256': '64rem'
      }
    },
  },
  plugins: [],
}
