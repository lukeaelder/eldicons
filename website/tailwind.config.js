/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    keyframes: {
      favorite: {
        '0%': { transform: 'scale(.8)' },
        '50%': { transform: 'scale(1.05)' },
        '100%': { transform: 'scale(1)' },
      },
      favoriteRemove: {
        '0%': { transform: 'rotate(7deg)' },
        '40%': { transform: 'rotate(-7deg)', transform: 'scale(.95)' },
        '80%': { transform: 'rotate(3deg)' },
        '100%': { transform: 'rotate(0deg)', transform: 'scale(1)' },
      },
      countdown: {
        '0%': { transform: 'scaleY(1)' },
        '15%': { transform: 'scaleY(.95)' },
        '25%': { transform: 'scaleY(.75)' },
        '40%': { transform: 'scaleY(.70)' },
        '50%': { transform: 'scaleY(.5)' },
        '65%': { transform: 'scaleY(.45)' },
        '75%': { transform: 'scaleY(.25)' },
        '90%': { transform: 'scaleY(.2)' },
        '100%': { transform: 'scaleY(0)' },
      },
    },
  },
  plugins: [],
};
