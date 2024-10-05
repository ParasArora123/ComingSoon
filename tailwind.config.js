/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './assets/**/*.{html,js}', './css/**/*.{html,js}', './js/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      zIndex: {
        '-2': '-2',
      },
    },
  },
  plugins: [
    require('tailwindcss'), 
    require('autoprefixer'),
  ],
}

