/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      'dark-blue': '#2C2C54',
      'p-yellow-main': '#FFDA79',
      'p-white-main': '#F5F6FA',
      'p-shadow': '#F7F1E3',
      'p-border': '#000000'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
