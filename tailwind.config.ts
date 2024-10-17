/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ajusta esta ruta según la estructura de tu proyecto
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-light': ['Satoshi-Light', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}