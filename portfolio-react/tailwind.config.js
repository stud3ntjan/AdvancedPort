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
        primary: "#1e1e1e", // #0F9DF8 #6E0056
        background: "#708090", // #040B1C #2E001B
        cardbg: "#1e1e1e", // #061840 #590345
        white: "#FBFBFB", // #FBFBFB

        navbg: "#1e1e1e", // #0A214E #63004C #590345

        overlayBg: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
