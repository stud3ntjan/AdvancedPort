/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },

    extend: {
      // Colors used
      colors: {
        primary: "#6E0056", // #0F9DF8
        background: "#2E001B", // #040B1C
        cardbg: "#590345", // #061840
        white: "#FBFBFB", // #FBFBFB

        navbg: "#590345", // #0A214E #63004C

        overlayBg: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
