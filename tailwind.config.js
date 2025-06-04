/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/droit/layouts/**/*.html", // Path to your theme's layouts
    "./layouts/**/*.html",             // Path to your project's layouts
    "./content/**/*.md",               // Path to your content files
    "./themes/droit/tailwind.config.js" // Ensure the theme's config is processed by Tailwind
  ],
  theme: {
    extend: {
      // Project-specific overrides or extensions can go here if needed in the future.
      // For now, we want the theme's config to take precedence for its own styles.
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

