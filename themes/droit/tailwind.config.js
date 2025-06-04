module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './archetypes/**/*.md',
    './themes/droit/layouts/**/*.html', // add this if not present
    './themes/droit/content/**/*.md',
    './themes/droit/archetypes/**/*.md',
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
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.near-black'),
              fontFamily: theme('fontFamily.barlow').join(', '),
            },
            h1: {
              fontWeight: '700',
              fontSize: theme('fontSize.4xl'),
              marginTop: theme('spacing.14'),
              marginBottom: theme('spacing.8'),
              lineHeight: theme('lineHeight.tight'),
            },
            h2: {
              fontWeight: '700',
              fontSize: theme('fontSize.3xl'),
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.6'),
              lineHeight: theme('lineHeight.tight'),
            },
            h3: {
              fontWeight: '600',
              fontSize: theme('fontSize.2xl'),
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.5'),
              lineHeight: theme('lineHeight.snug'),
            },
            h4: {
              fontWeight: '600',
              fontSize: theme('fontSize.xl'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.4'),
              lineHeight: theme('lineHeight.snug'),
            },
            h5: {
              fontWeight: '500',
              fontSize: theme('fontSize.lg'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.3'),
              lineHeight: theme('lineHeight.normal'),
            },
            h6: {
              fontWeight: '500',
              fontSize: theme('fontSize.base'),
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.2'),
              lineHeight: theme('lineHeight.normal'),
            },
            p: {
  color: theme('colors.near-black'),
  fontSize: theme('fontSize.base'),
  lineHeight: theme('lineHeight.relaxed'),
  marginTop: theme('spacing.6'),
  marginBottom: theme('spacing.6'),
},
            'ul > li::before': {
              backgroundColor: theme('colors.near-black'),
            },
            'ol > li::before': {
              color: theme('colors.near-black'),
            },
            a: {
                color: theme('colors.navy'),
                textDecoration: 'none', // remove underline
                borderBottom: '1px solid ' + theme('colors.navy'),
                boxShadow: 'none',
                paddingBottom: '1px',
                textDecoration: 'none',
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
    require('@tailwindcss/typography'),
    require('@tailwindcss/typography'), // Add the typography plugin
  ],
}
