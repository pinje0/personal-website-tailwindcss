/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        // primary: '#78716c',
        primary: '#41B883',
        secondary: '#94a3b8',
        dark: '#121212',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
