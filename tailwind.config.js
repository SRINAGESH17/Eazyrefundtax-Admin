/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "amulya_bold": ['amulya_bold', 'sans-serf'],
        "amulya_boldItalic": ['amulya_boldItalic', 'sans-serf'],
        "amulya_italic": ['amulya_italic', 'sans-serf'],
        "amulya_light": ['amulya_light', 'sans-serf'],
        "amulya_lightItalic": ['amulya_lightItalic', 'sans-serf'],
        "amulya_medium": ['amulya_medium', 'sans-serf'],
        "amulya_mediumItalic": ['amulya_mediumItalic', 'sans-serf'],
        "amulya_regular": ['amulya_regular', 'sans-serf'],
        "amulya_variable": ['amulya_variable', 'sans-serf'],
        "amulya_variableItalic": ['amulya_variableItalic', 'sans-serf'],
      },
      colors: {
        lightBlack: "rgba(0, 0, 0, 0.70)",
        imageGray: "rgba(209, 212, 215, 0.20)",
      },
      boxShadow: {
        shadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        formShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
        '3xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        '6xl': 'rgba(0, 0, 0, 0.35) 10px 0 5px -2px',
        '3dShadow': '0px 0px 10px 0px rgba(0, 0, 0, 0.10);'
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
  plugins: [require("tailwind-scrollbar")],
});
