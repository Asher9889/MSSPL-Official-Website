/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        contactUsBtn: "var(--contactUs-btn)",
      },
      backgroundColor: {
      contactUsBtnHover: 'var(--contactUs-btn-hover)',

    },
    transitionProperty: {
      background: 'background-image',
    },
  },
  plugins: [],
}
}
