module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      oswald: ["Oswald"],
      rubik: ["Rubik"],
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      height: {
        192: '48rem',
      },
      maxWidth: {
        '1140px': '1140px',
        '960px': '960px',
        '768px': '768px',
        '540px': '540px',
      },
      colors: {
        'theme-text': '#58CCFF',
      }
    },
  },
  plugins: [
  ],
}
