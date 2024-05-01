/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3C50E0",
        },
        green: {
          DEFAULT: "#00FF00",
          dark: "#00DF00",
          darker: "#009700",
        },
        pink: {
          DEFAULT: "#FF00FF",
          lightest: "#FFD6FF",
        },
        gray: {
          light: "#E0E0E0",
          dark: "#2C2C2C",
        },
        black: {
          light: "#161616",
          DEFAULT: "#000000",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        red: {
          error: "#F6465D",
        },
      },
      height: {
        500: "31.25rem",
      },
      width: {
        72.5: "18.125rem",
        sidebar: "15rem",
        500: "31.25rem",
      },
      boxShadow: {
        "button--hover": "inset 0 0 0 1px #00FF00",
        11: "0px 1px 3px 0px rgba(166, 175, 195, .4)",
        12: "0px .5px 3px 0px rgba(0, 0, 0, .18)",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
