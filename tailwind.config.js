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
      'gray-light-200': '#C3CFE9',
      'green-light-200': '#8DD7CF',
      'yellow-500': '#FBE192',
      'purple-dark-600': '#6558F5',
    },
    extend: {
      animation: {
        'pop-up-menu': 'roll-left 1.1s ease',
        'transition-smooth-bg': 'fade-in-smooth 1s ease',
        'scroll-down': 'going-up 1.4s ease' 
      },
      keyframes: {
        'roll-left': {
          '100%': {
            transform: 'translateX(0)',
          },
          '0%': {
            transform: 'translateX(100%)',
          },
        },
        'fade-in-smooth': {
          '0': {
            'background-color': ''
          },
          '100%': {
            'background-color': 'rgba(0,0,0, 0.5)'
          }
        },
        'going-up': {
          '0%': {
            transform: 'translateY(20%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          } 
        }
      },

      
    },
  },
  plugins: [],
}
