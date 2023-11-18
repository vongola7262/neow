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
    extend: {},
  },
  plugins: [],
}

