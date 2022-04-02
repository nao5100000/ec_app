module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#84fab0',
        'dark-blue': '#8fd3f4',
        'gradient-red': '#ff5858',
        'gradient-orange': '#f09819',
        'light-gray': '#cccccc',
        'dark-gray': '#aaaaaa'
      },
      fontFamily: {
        'body': ['"Roboto"', '"Noto Sans JP"'],
      },
    },

  },
  plugins: [],
}
