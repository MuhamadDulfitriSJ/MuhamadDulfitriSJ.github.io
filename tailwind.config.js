/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '36px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
      },
      fontFamily: {
        inter: 'Inter',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
