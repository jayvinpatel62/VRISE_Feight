const { light } = require('@mui/material/styles/createPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      'white': '#ffffff',
      'primary': {
        light: '#6ddbc7',
        DEFAULT: '#22bb9f',
        dark: '#0a5749',
      },
      'dark':{
        light: '#7A7A7A',
        DEFAULT: '#414a53',
        dark: '#222222',
      }
    },
    extend: {},
  },
  plugins: [],
}