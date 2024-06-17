/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'apple-gradient': {
          '0': '#ffffff',
          '100': '#000000'
        },
        'primary': 'red-500',
      },
      fontFamily: {
        'apple': ['San Francisco', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: [
    require('tailwindcss-gradient-text')
  ]
}
