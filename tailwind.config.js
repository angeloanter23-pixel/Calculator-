/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        'neu-bg': '#e0e5ec',
        'neu-text': '#4a5568',
        'neu-accent': '#3182ce'
      },
      boxShadow: {
        'neu': '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)',
        'neu-inner': 'inset 6px 6px 10px 0 rgba(163, 177, 198, 0.7), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.8)'
      }
    },
  },
  plugins: [],
}