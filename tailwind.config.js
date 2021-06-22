module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      '16': '4rem'
    },
    screens: {
      'mobileLS': '576px',
      // => @media (min-width: 576px) { ... }
      'tablets': '768px',
      // => @media (min-width: 768px) { ... }
      'laptops': '992px',
      // => @media (min-width: 992px) { ... }
      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      'extraLG': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontSize: {
        '1xl': '1.35rem'
      },
      colors: {
        "primaryColLite" : "#56BD9E",
        "primaryColDark" : "#1C3F34",
        "highlightHigh" : "#404040",
        "textMain" : "#f0f0f0"
      },
      spacing: {
        '7/10': '70%'
      },
      backgroundImage: theme => ({
        'black-panel': "url('./assets/images/blackpanel.svg')",
        'dot-pattern-sml': "url('./assets/images/dot_pattern_sml.svg')",
        'dot-pattern': "url('./assets/images/dot_pattern.svg')",
       })
    },
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
