module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
        '0': '0',
       '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
       '95': '.95',
        '100': '1',
       '105': '1.05',
       '110': '1.1',
        '125': '1.25',
        '150': '1.5',
       '200': '2',
      },
      rotate: {
       '-180': '-180deg',
        '-90': '-90deg',
       '-45': '-45deg',
       '-70': '-70deg',
        '0': '0',
        '45': '45deg',
        '70': '70deg',
        '90': '90deg',
       '135': '135deg',
        '180': '180deg',
       '270': '270deg',
      },
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
        '7/10': '70%',
        '80': '20rem'
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
