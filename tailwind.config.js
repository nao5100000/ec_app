module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#84fab0',
        'dark-blue': '#4481eb',
        'gradient-red': '#ff5858',
        'gradient-orange': '#f09819',
        'light-gray': '#cccccc',
        'dark-gray': '#aaaaaa',
        'light-gray02': '#f4f4f4'
      },
      fontFamily: {
        'body': ['"Roboto"', '"Noto Sans JP"'],
      },
    },

  },
  plugins: [],
}
