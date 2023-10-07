/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primaryColor: "#5928E5",
        secondaryColor: "#FFD8D9",
      },
      textColor: {
        primaryColor: "#5928E5",
        secondaryColor: "#FFD8D9",
      },
    },
    screens: {
      sm: { min: "576px", max: "767px" },
      md: { min: "768px", max: "991px" },
      lg: { min: "992px", max: "1199px" },
      xl: { min: "1200px" },
    },
  },
  plugins: [],
};
