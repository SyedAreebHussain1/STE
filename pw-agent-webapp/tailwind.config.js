/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27A3A3",
        borderColor: "#D0D5DD",
        secondary: "#3e54ac29",
        headingColor: "#1D2939",
        subHeadingColor: "#3D4350",
      },
    },
  },
  plugins: [require("antd")],
};
