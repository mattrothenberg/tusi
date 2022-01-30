const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
      },
    },
  },
  plugins: [],
};
