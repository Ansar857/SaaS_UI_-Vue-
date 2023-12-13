/** @type {import('tailwindcss').Config} */
module.exports = {
  cssPath: `./assets/css/tailwind.css`,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  prefix: "tw-",
  viewer: true,
  plugins: [],
};
