const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#F3CE5C"
      },
    },
  },
  plugins: [],
});
