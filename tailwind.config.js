/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      'abril' : ['Abril Fatface', 'cursive'],
      'sans' : ['Open Sans', 'sans-serif'],
      'serif' : ['Source Serif Pro', 'serif']
    }
  },
  plugins: [],
}

