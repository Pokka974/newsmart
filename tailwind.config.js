module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'card' : 'autofill minmax(300px, 1fr)'
      }
    },
  },
  plugins: [],
}