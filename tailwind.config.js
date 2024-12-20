/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsBlack: ["poppinsBlack", "sans-serif"],
        netFlixMd: [' "netFlixMd" ', "sans-serif"],
        netFlixRg: [' "netFlixRg" ', "sans-serif"],
      },
      backgroundImage: {
        contactUsBtn: "var(--contactUs-btn)",
      },
      backgroundColor: {
        contactUsBtnHover: "var(--contactUs-btn-hover)",
      },
      transitionProperty: {
        background: "background-image",
      },
      textColor: {
        seeMore: "var(--contactUs-btn-hover)",
      },
      // textShadow: {
      //   sm: '0 1px 2px var(--tw-shadow-color)',
      //   DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      //   lg: '0 8px 16px var(--tw-shadow-color)',
      // },
    },
    plugins: [],
  },
};
