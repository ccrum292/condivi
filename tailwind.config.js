module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1920px',
        'light-mode': { raw: '(prefers-color-scheme: light)'}
      },
      spacing:{
        '120':'30rem',
        '100':'25rem',
        '90':'22.5rem',
        '80':'20rem',
        '75':'18.75rem',
        '70': '17rem',
        '60':'15rem',
        '25':'6.25rem'
      },
      opacity:{
        '90':'.9'
      },
      colors: {
        cB: {
          600: '#D94422',
          700: '#6A1B1B',
          800: '#461412'
        },
        cO: {
          555: '#fdf6e3',
          777: '#FFD476',
          888: '#ffd476',
          900: '#D2A454',
          999: '#cb9356'
        },
        cG: {
          999: '#1A1D21'
        }
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fontWeight: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [],
}
