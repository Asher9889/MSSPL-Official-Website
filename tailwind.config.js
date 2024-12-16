/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-black": [ "Poppins-black" ,'sans-serif'],
        netFlixMd: [' "netFlixMd" ','sans-serif'],
        netFlixRg: [' "netFlixRg" ','sans-serif'],
      },
      backgroundImage: {
        contactUsBtn: "var(--contactUs-btn)",
      },
      backgroundColor: {
      contactUsBtnHover: 'var(--contactUs-btn-hover)',

    },
    transitionProperty: {
      background: 'background-image',
    },
    textColor: {
      seeMore: 'var(--contactUs-btn-hover)',

    }
  },
  plugins: [],
}
}
