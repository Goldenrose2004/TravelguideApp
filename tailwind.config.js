/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily:{
        Radley_Regular:["Radley-Regular","sans-serif"],
        Radley_italic:["Radley-Italic","sans-serif"],
      },
    },
  },
  plugins: [],
}