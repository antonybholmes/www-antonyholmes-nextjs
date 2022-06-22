const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['text-blue-500', 'hover:text-blue-500', 'text-red-500'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial'],
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '9/20': '45%',
        '15/100': '15%',
        '48/100': '48%',
        '64/100': '64%',
        '85/100': '85%',
      },
      minWidth: {
        '8': '2rem',
        '1/4': '25%',
        '1/2': '50%',
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1800px',
        '5xl': '1920px',
        '6xl': '2048px',
      },
      colors: {
        gray: colors.slate,
        'white-90': 'rgba(255, 255, 255, 0.98)',
        'black-50': 'rgba(0, 0, 0, 0.5)',
        'black-80': 'rgba(0, 0, 0, 0.8)',
        'black-90': 'rgba(0, 0, 0, 0.9)',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,.12)',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      scale: { 
        101: '1.01', 
        102: '1.02' 
      },
      brightness: {        
        80: '.8',
      },
    },
  },
}
