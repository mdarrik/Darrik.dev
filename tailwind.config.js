module.exports = {
  theme: {
    fontFamily: {
      sans: [
        '"Fira Sans"',
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      decorative: ['"Fredericka the Great"', "cursive"],
    },
    extend: {},
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "visited"],
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant("visited", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`visited${separator}${className}`)}:visited`
        })
      })
    },
  ],
}
