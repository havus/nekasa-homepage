/** @type {import('tailwindcss/types').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
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
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        nekasa: {
          50: "#F6F8FC",
          600: "#9098A5",
          700: "#727883",
          800: "#6D718A",
          900: "#374151",
          // 900: "#373D45",
        },
        "nekasa-orange": {
          100: "#FFE4DB",
          300: "#F86D3F",
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        "playfair-display": ["Playfair-Display"],
      },
      spacing: {
        112: "28rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
