/** @type {import('tailwindcss/types').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/**/*.scss",
    "./assets/**/*.css",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
