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
        primary: "#F3CE5C",
        gold: '#FFD700',
        darkorange: '#FF8C00',
      },
      borderColor: {
        'gold-gradient': 'linear-gradient(90deg, #FFD700 0%, #FF8C00 100%)',
      },
    },
  },
  plugins: [],
});
