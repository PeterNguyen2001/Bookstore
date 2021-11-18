module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ['group-hover', 'hover'],
      display: ['group-hover'],
      cursor: ['hover']
    },
  },
  plugins: [],
}
