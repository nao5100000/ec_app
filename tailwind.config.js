module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        'dark-green': '#84fab0',
        'dark-blue': '#8fd3f4'
      },
    },
    fontFamily: {
      'body': ['"Roboto"', '"Noto Sans JP"'],
    },

  },
  plugins: [],
}
