// filepath: /home/too/dev/projects/OneClickTweakUI/tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'], // Adjust paths to match your project structure
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};