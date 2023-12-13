/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        lightBlack: "rgba(0, 0, 0, 0.70)",
      },
    },

    screens: {
      xs: "475px",
      "max-xs": { max: "474px" },
      sm: "640px",
      "max-sm": { max: "639px" },
      // => @media (min-width: 640px) { ... }

      md: "768px",
      "max-md": { max: "767px" },
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      "max-lg": { max: "1023px" },
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      "max-xl": { max: "1279px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      "max-2xl": { max: "1535px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
});
