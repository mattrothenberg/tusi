const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        offWhite: "#e9e9e9",
        gray: colors.stone,
      },
    },
  },
  plugins: [],
};
