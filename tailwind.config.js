module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Valorant'],
    },
    extend: {
      colors: {
        'valorant-red': '#ff4655',
        'valorant-white': '#ece8e1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
