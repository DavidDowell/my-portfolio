const { Transition } = require('semantic-ui-react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      'fade-out-down': {
          'from': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
          'to': {
              opacity: '0',
              transform: 'translateY(300px)',
          },
      },
      'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      'fade-out-up': {
          'from': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
          'to': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
      },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-20deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
        animationDelay: {
          2000: '2000ms',
      },
      animationDuration: {
          2000: '2000ms',
      },
      animationIteration: {
          '10x': '10',
      },
      animationTiming: {
          cubic: 'cubic-bezier(0, 0, 0.2, 1)',
      },
      },
      variants: {
        animationDelay: ['responsive'],
        animationDuration: ['responsive'],
        animationIteration: ['responsive'],
        animationTiming: ['responsive'],
        animationDirection: ['responsive'],
        animationFillMode: ['responsive'],
        animationPlayState: ['responsive'],
    },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 3s linear',
        'fade-out-down': 'fade-out-down 7s infinite',
        'fade-in-up': 'fade-in-up 3s linear',
        'fade-out-up': 'fade-out-up 3s linear'
      }
    },
    
  },
  plugins: [
    require('tailwindcss-animation'),
  ],
}
