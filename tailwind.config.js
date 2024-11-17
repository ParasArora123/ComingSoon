/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './assets/**/*.{html,js}', './css/**/*.{html,js}', './js/**/*.{html,js}', './output.css'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        goudy: ['"Goudy Bookletter 1911"', 'serif']
      },
      zIndex: {
        '-2': '-2',
      },
      maxWidth: {
        'custom': '33rem', // Custom width between lg (32rem) and xl (36rem)
      },
    },
  },
  plugins: [
    require('tailwindcss'), 
    require('autoprefixer'),
  ]
}

