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
        'navy': '#000080', // Navy blue
        transparent: 'transparent',
        current: 'currentColor',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'albert-sans': ['Albert Sans', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: { // This targets the default 'prose' class styles
          css: {
            h2: {
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.6'),
              fontSize: theme('fontSize.2xl'),
              fontWeight: 'bold',
              color: theme('colors.near-black'),
            },
            h3: {
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.5'),
              fontSize: theme('fontSize.xl'),
              fontWeight: 'bold',
              color: theme('colors.near-black'),
            },
            h4: {
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.4'),
              fontSize: theme('fontSize.lg'),
              fontWeight: 'bold',
              color: theme('colors.near-black'),
            },
            p: {
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.5'),
              fontSize: theme('fontSize.base'),
              color: theme('colors.near-black'),
              lineHeight: theme('lineHeight.relaxed'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.near-black'),
            },
            'ol > li::before': {
              color: theme('colors.near-black'),
            },
            a: {
              color: theme('colors.navy'),
              '&:hover': {
                color: theme('colors.navy'),
                textDecoration: 'underline',
              },
            },
            strong: { color: theme('colors.near-black'), fontWeight: 'bold' },
            code: { color: theme('colors.soft-teal-darker'), backgroundColor: theme('colors.near-black', { alpha: 0.1 }), padding: '0.2em 0.4em', borderRadius: '0.25em' },
            blockquote: { color: theme('colors.near-black'), borderLeftColor: theme('colors.soft-teal'), fontStyle: 'italic', paddingLeft: theme('spacing.4') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add the typography plugin
  ],
}
