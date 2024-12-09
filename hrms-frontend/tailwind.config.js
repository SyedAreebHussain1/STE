/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        lightGray: "#D0D5DD",
        grayPrimary: "#667085",
        graySecondary: "#344054",
        red: "#FC4C1B",
        light: {
          primary: "#3E54AC",
          borderColor: "#e6e6e6",
          secondary: "#3e54ac29",
        },

        dark: {
          grayLight: "#3F3F3F",
          primary: "#1E1E1E",
          borderColor: "#3ED0D6",
          secondary: "#CCFE06",
          purple: "#7C4BDE",
          grayprimary: "#282828",
        },
      },
    },
  },

  plugins: [require("antd")],
};
