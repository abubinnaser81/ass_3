/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        animation: {
          'slide-in': 'slide-in 0.5s ease-out forwards',
        },
        keyframes: {
          'slide-in': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
      },
    },
    plugins: [],
  }

