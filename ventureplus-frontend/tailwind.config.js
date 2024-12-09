/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode using a class
  theme: {
    screens: {
      xs: "400px",
      // => @media (min-width: 400px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mid: "900px",
      // => @media (min-width: 900px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      mxl: "1290px",

      "2xl": "1836px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#016a70",
        primaryActive: "#67a6a9",
        primaryDisabled: "#01555a",
        primaryHover: "#34888d",
        secondary: "#ffffdd",
        secondaryActive: "#ffffeb",
        secondaryDisabled: "#ccccb1",
        secondaryHover: "#ffffe4",
        background: "#f8fafc",
        foreground: "#e3e7ef",
        strokes: "#cdd4df",
        title: "#040615",
        body: "#212838",
        para: "#4a5366",
        icon: "#f2f4f8",
        lightPurple: "#F4F3FF",
        surfacePrimary: "#101828",
        info: "#CFDEFF",
        paraLight: "#667085",
        danger: "#F71C19",
        textWhite: "#F2F4F7",
        green: "#016A70",
        dark: {
          primary: "#016a70",
          primaryActive: "#67a6a9",
          primaryDisabled: "#34888d",
          primaryHover: "#01555a",
          secondary: "#ffffdd",
          secondaryActive: "#ffffeb",
          secondaryDisabled: "#ffffe4",
          secondaryHover: "#ccccb1",
          background: "#040615",
          foreground: "#212838",
          strokes: "#363f52",
          title: "#f8fafc",
          body: "#e3e7ef",
          para: "#97a1b5",
          icon: "#f2f4f8",
        },
        white: {
          100: "#FFFFF8",
          200: "#FFFFF1",
          300: "#FFFFEB",
          400: "#FFFFE4",
          500: "#FFFFDD",
          600: "#CCCCB1",
          700: "#999985",
          800: "#666658",
          900: "#33332C",
        },
        green: {
          100: "#CCE1E2",
          200: "#99C3C6",
          300: "#67A6A9",
          400: "#34888D",
          500: "#016A70",
          600: "#01555A",
          700: "#014043",
          800: "#002A2D",
          900: "#001516",
        },
      },
    },
  },

  plugins: [require("antd"), require("tailwind-scrollbar-hide")],
};
