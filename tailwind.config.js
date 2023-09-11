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
          hard : "#020133",
          soft : "#275cb3",
          light: "#3d6adb",
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