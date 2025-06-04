module.exports = {
  content: [
    './layouts/**/*.html',    // Relative to themes/droit/
    './content/**/*.md',      // Relative to themes/droit/
    './archetypes/**/*.md',   // Relative to themes/droit/
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF', // Main background
        'near-black': '#222222', // Primary text (matches user preference)
        'heading-primary': '#000000', // Black for H1
        'accent-blue': '#3c6893', // Knight primary accent
        'accent-red': '#d20f1e', // Knight secondary accent
        'accent-red-hover': '#f01e2d', // Knight secondary accent hover
        'blockquote-text': '#5a5a5a', // Knight blockquote text
        'soft-teal': '#7FD8D8', // Existing, can be kept or phased out
        'soft-teal-darker': '#5ABDBD', // Existing, can be kept or phased out
        'navy': '#000080', // Existing, will be overridden by new accents for links
        'favicon-blue': '#209cee',
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
              color: theme('colors.heading-primary'),
              fontFamily: theme('fontFamily.barlow').join(', '),
              fontWeight: '700',
              fontSize: theme('fontSize.4xl'),
              marginTop: theme('spacing.14'),
              marginBottom: theme('spacing.8'),
              lineHeight: theme('lineHeight.tight'),
            },
            h2: {
              color: theme('colors.accent-blue'),
              fontFamily: theme('fontFamily.barlow').join(', '),
              fontWeight: '700',
              fontSize: theme('fontSize.3xl'),
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.6'),
              lineHeight: theme('lineHeight.tight'),
            },
            h3: {
              color: theme('colors.accent-blue'),
              fontFamily: theme('fontFamily.barlow').join(', '),
              fontWeight: '700',
              fontSize: theme('fontSize.2xl'),
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.5'),
              lineHeight: theme('lineHeight.snug'),
            },
            h4: {
              color: theme('colors.accent-blue'),
              fontFamily: theme('fontFamily.barlow').join(', '),
              fontWeight: '700',
              fontSize: theme('fontSize.xl'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.4'),
              lineHeight: theme('lineHeight.snug'),
            },
            h5: {
              color: theme('colors.accent-red'),
              fontFamily: theme('fontFamily.barlow').join(', '),
              fontWeight: '700',
              fontSize: theme('fontSize.lg'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.3'),
              lineHeight: theme('lineHeight.normal'),
              textTransform: 'uppercase',
            },
            h6: {
              color: theme('colors.accent-red'),
              fontFamily: theme('fontFamily.barlow').join(', '),
              fontWeight: '700',
              fontSize: theme('fontSize.base'),
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.2'),
              lineHeight: theme('lineHeight.normal'),
              textTransform: 'uppercase',
            },
            p: {
              color: theme('colors.near-black'),
              fontFamily: theme('fontFamily.albert-sans').join(', '),
              fontWeight: '400',
              fontSize: theme('fontSize.base'), // Equivalent to Knight's 1rem/17px base
              lineHeight: theme('lineHeight.relaxed'), // Knight uses 1.5-1.7, relaxed is good
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
              color: theme('colors.accent-blue'),
              textDecoration: 'none',
              borderBottom: '1px solid ' + theme('colors.accent-blue'),
              paddingBottom: '1px',
              fontWeight: 'inherit', // Knight links in body are often bolder
              '&:hover': {
                color: theme('colors.accent-red'),
                borderBottomColor: theme('colors.accent-red'),
                textDecoration: 'none',
              },
            },
            strong: { color: theme('colors.near-black'), fontWeight: 'bold' },
            code: { color: theme('colors.soft-teal-darker'), backgroundColor: theme('colors.near-black', { alpha: 0.1 }), padding: '0.2em 0.4em', borderRadius: '0.25em' },
            blockquote: { 
              color: theme('colors.blockquote-text'), 
              borderLeftColor: theme('colors.accent-blue'), 
              fontStyle: 'italic', 
              paddingLeft: theme('spacing.4'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.8'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
