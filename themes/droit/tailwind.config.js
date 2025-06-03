module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './archetypes/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF', // Main background
        'near-black': '#222222', // Primary text
        'soft-teal': '#7FD8D8', // Subtle accent for lines, highlights
        'soft-teal-darker': '#5ABDBD', // Accent for hovers
        // Keep Tailwind defaults
        transparent: 'transparent',
        current: 'currentColor',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'albert-sans': ['Albert Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
