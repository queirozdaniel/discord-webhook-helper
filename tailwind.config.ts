const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    plugins: [require('daisyui')],
    theme: {
      screens: {
        'xsm': '380px',
        ...defaultTheme.screens,
      }     
    },
    daisyui: {
        themes: [
          "light",
          "dark",
          "cupcake",
          "synthwave",
          "cyberpunk",
          "halloween",
          "forest",
          "lofi",
          "black",
          "dracula",
          "business",
          "night",
          "coffee",
          "winter",
        ],
      },
};
  