/** @type {import('tailwindcss').Config} */
const themeDroitConfig = require('./themes/droit/tailwind.config.js'); // Load the theme's config

module.exports = {
  // The content array should list all files in the project and theme that use Tailwind classes.
  // Paths are relative to this config file (project root).
  content: [
    "./layouts/**/*.html",             // Project's own layouts
    "./content/**/*.md",               // Project's own content files
    "./themes/droit/layouts/**/*.html", // Theme's layouts
    "./themes/droit/content/**/*.md",   // Theme's content files
    "./themes/droit/archetypes/**/*.md", // Theme's archetypes
    // Add other file types or paths if necessary, e.g., JavaScript files
  ],
  theme: {
    // Extend Tailwind's default theme
    extend: {
      // Merge the 'extend' object from the theme's configuration.
      // This will bring in colors, fontFamily, typography, etc., defined in theme's extend.
      ...themeDroitConfig.theme.extend,

      // Project-specific overrides or extensions can be added here.
      // If you define a key that also exists in themeDroitConfig.theme.extend,
      // the definition here will take precedence if placed after the spread (...).
      // Example:
      // colors: {
      //   ...themeDroitConfig.theme.extend.colors, // Include theme colors
      //   'project-specific-color': '#ABCDEF', // Add a new project-specific color
      //   // 'favicon-blue': '#OVERRIDE', // Override a theme color if needed
      // },
    },
    // If your theme's config also defines properties directly under 'theme' (not in 'extend'),
    // you might need to merge them separately. For example:
    // fontFamily: { ...themeDroitConfig.theme.fontFamily, /* ...projectSpecificFonts */ },
    // However, the provided theme config primarily uses 'theme.extend'.
  },
  plugins: [
    require('@tailwindcss/typography'),
    // If themeDroitConfig.plugins includes other plugins, you might need to merge them.
    // Be careful about duplicate plugin registrations (e.g., if @tailwindcss/typography is in both).
    // Consider filtering: themeDroitConfig.plugins.filter(plugin => plugin !== require('@tailwindcss/typography'))
  ],
}
