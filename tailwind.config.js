/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'display': '"MantouSans", sans-serif',
      'body': '"Roboto", sans-serif'
    },
    borderRadius: {
      bannerlg: '200px'
    },
    extend: {
      keyframes: {
        menuOpen: {
          '0%' : {
            transform: 'translateX(0)'
          },
          '100%' : {
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        menuOpen: 'menuOpen 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

