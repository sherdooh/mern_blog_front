/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#4d90fe",
        dark : {
          hard : "#2d71e0",
          soft : "#275cb3",
        },
      },
      fontFamily : {
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}