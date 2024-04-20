/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*{js,css}", "./src/home/*{js,css}", "./src/js/*{js,css}"],
  theme: {
    screens: {
      sm: "480px",
      md: "786px",
      lg: "1020px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Kanit", "sans-serif"],
      serif: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        darkGrey: "#474747",
        darkOrage: "#FF4F37",
      },
    },
  },
  plugins: [],
};
