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
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#000080',
              textDecoration: 'none',
              borderBottom: '1px solid #000080',
              boxShadow: 'none',
              paddingBottom: '1px',
              textDecoration: 'none',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
