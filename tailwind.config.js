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
        primary: "#000000", // #0F9DF8 #6E0056 #1e1e1e
        background: "#830b5f", // #040B1C #2E001B #708090
        cardbg: "#3d3d3d", // #061840 #590345 #1e1e1e
        white: "#FBFBFB", // #FBFBFB

        navbg: "#000000", // #0A214E #63004C #590345

        overlayBg: "rgba(0,0,0,0.3)",

        gradientStart: "#6E0056", // Startpunkt Fuchsia
        gradientEnd: "#00d4da", // Endpunkt Blau
      },
      backgroundImage: {
        // Gradienten-Definition
        "fuchsia-gradient": "linear-gradient(135deg, #6E0056, #00d4da)",
        "footer-gradient": "linear-gradient(135deg, #00d4da, #6E0056)",
      },
    },
  },
  plugins: [],
};
