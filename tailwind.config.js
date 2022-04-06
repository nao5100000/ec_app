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
        'gradient-red-orange': '#fb6b4b',
        'gradient-orange': '#f09819',
        'light-gray': '#cccccc',
        'dark-gray': '#aaaaaa',
        'dark-gray02': '#4c4c4c',
        'light-gray02': '#f4f4f4',
        'light-gray03': '#f9f9f9'
      },
      fontFamily: {
        'body': ['"Roboto"', '"Noto Sans JP"'],
      },
    },

  },
  plugins: [],
}
