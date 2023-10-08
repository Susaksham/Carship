/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        arial: ["Arial", "Helvetica", "sans-serif"],
      },
      backgroundColor: {
        primaryColor: "#5928E5",
        secondaryColor: "#FFD8D9",
      },
      textColor: {
        primaryColor: "#5928E5",
        secondaryColor: "#FFD8D9",
      },
      borderColor: {
        primaryColor: "#5928E5",
        secondaryColor: "#FFD8D9",
      },
    },
    screens: {
      mb: "280px",
      xsm: "576px",
      sm: "767px",
      xmd: "839px",
      md: "991px",
      lg: "1199px",
      xl: "1200px",
    },
  },
  plugins: [],
};
