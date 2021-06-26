module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundPosition: {
      bottom: 'bottom',
     'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
     'left-bottom': 'left bottom',
     'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
     'top-4': 'center top 1rem',
     '70-v': '0% 70%',
     '85-v': '0% 85%',
     '95-v': '0% 95%',
     '110-v': '0% 110%',
    },
    scale: {
        '0': '0',
       '25': '.25',
        '50': '.5',
        '75': '.75',
        '80': '.8',
        '85': '.85',
        '90': '.9',
       '95': '.95',
        '100': '1',
       '105': '1.05',
       '110': '1.1',
        '125': '1.25',
        '140': '1.4',
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
      'mobileLS': '640px',
      // => @media (min-width: 640px) { ... }
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
        '1xl': '1.35rem',
      },
      colors: {
        "primaryColLite" : "#56BD9E",
        "primaryColDark" : "#1C3F34",
        "highlightHigh" : "#404040",
        "textMain" : "#f0f0f0"
      },
      spacing: {
        '7/10': '70%',
        '38': '9.5rem',
        '46': '11.5rem',
        '80': '20rem',
        '100': '28rem',
        '150': '38rem',
        '220': '64rem'
      },
      backgroundImage: theme => ({
        'black-panel': "url('./assets/images/blackpanel.svg')",
        'dot-pattern-sml': "url('./assets/images/dot_pattern_sml.svg')",
        'dot-pattern': "url('./assets/images/dot_pattern.svg')",
        'face-bg': "url('./assets/images/myface.svg')",
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
