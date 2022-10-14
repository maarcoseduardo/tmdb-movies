/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    colors: {
      'gray-light-200': '#C3CFD9',
      'green-light-200': '#8DD7CF',
      'yellow-500': '#FBE192',
      'purple-dark-600': '#6558F5',
    },
    extend: {},
  },
  plugins: [],
}
