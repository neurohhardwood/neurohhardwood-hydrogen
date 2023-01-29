const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sambuca: {
          100: '#EBE9E7',
          200: '#CEC7C3',
          300: '#B0A69F',
          400: '#756358',
          500: '#3A2010',
          600: '#341D0E',
          700: '#23130A',
          800: '#1A0E07',
          900: '#110A05',
        },
        mahogany: {
          100: '#EDE6E6',
          200: '#D3C1C1',
          300: '#B89B9B',
          400: '#835151',
          500: '#4E0606',
          600: '#460505',
          700: '#2F0404',
          800: '#230303',
          900: '#170202',
        },
      },
    },

    screens: {
      'palm-wide': '480px',
      lap: '736px',
      'lap-wide': '1068px',
      desk: '1440px',
    },
  },
  // eslint-disable-next-line node/no-unpublished-require
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
