/** @type {import('tailwindcss').Config} */
module.exports = {
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  css: [
    '@/assets/css/main.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
