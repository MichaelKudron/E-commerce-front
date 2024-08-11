const { server } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
   
    extend: {
      colors:{
        background_gray :'#222222',
        text_gray: 'RGBA(255, 255, 255, 0.54)'
      },
      fontFamily:{
        roboto: ['"Roboto"', 'sans-serif'],
        open_sans:['"Open Sans"','sans-serif']
      },
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}