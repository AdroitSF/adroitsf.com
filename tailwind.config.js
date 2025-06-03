/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/droit/layouts/**/*.html", // Path to your theme's layouts
    "./layouts/**/*.html",             // Path to your project's layouts
    "./content/**/*.md",               // Path to your content files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
