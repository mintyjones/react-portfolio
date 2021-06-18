module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // all Google fonts
    // Ensure fonts with spaces have " " surrounding it.
    fontFamily: {
      'PoiretOne': ['"Poiret One"', 'sans-serif'],
      'Lobster': ['Lobster', 'cursive'],
      'RacingSansOne': ['"Racing Sans One"', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
