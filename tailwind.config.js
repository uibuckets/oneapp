module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'macfont': ['-apple-system', "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"]
      },
      spacing: {
        2.5: '0.625rem'
      },
      fontSize: {
        'macro': '0.6875rem',
        'micro': '0.625rem',
        'tiny': '.8125rem',
      }
    },
  }
}
