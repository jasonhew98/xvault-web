/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3C50E0"
        },
        green: {
          DEFAULT: "#00FF00",
          dark: "#00df00",
          darker: "#009700"
        },
        pink: {
          DEFAULT: "#FF00FF",
          lightest: "#FFD6FF"
        },
        gray: {
          light: "#E0E0E0",
          dark: "#2C2C2C"
        },
        black: {
          light: "#161616",
          DEFAULT: "#000000"
        },
        white: {
          DEFAULT: "#FFFFFF"
        },
        'primary': "rgb(60 80 224)",
        'primary-100': "#1F3A5F",
        'primary-200': "#4D648D",
        'primary-300': "#ACC2EF",
        'accent-100': "#3D5A80",
        'accent-200': "#CEE8FF",
        'white-100': "#FFFFFF",
        'white-200': "#E0E0E0",
        'darkblue': "#0F1C2E",
        'bg-200': "#1F2B3E",
        'bg-300': "#374357",
        'meta-4': "rgb(49 61 74)",
        'stroke': "rgb(226 232 240)",
        'boxdark': "rgb(36 48 63)",
        'strokedark': "rgb(46 58 71)",
        'graydark' : "rgb(51 58 72)",
        'bodydark1': "rgb(222 228 238)",
        'bodydark2': "rgb(138 153 175)",
        'meta-1': "rgb(220 53 69)",
        'error': "#F6465D",
      },
      height: {
        '500': '31.25rem',
      },
      width: {
        '72.5': '18.125rem',
        'sidebar': '15rem',
        '500': '31.25rem',
      },
      boxShadow: {
        'button--hover': "inset 0 0 0 1px #00FF00",
        '11': '0px 1px 3px 0px rgba(166, 175, 195, .4)',
        '12': '0px .5px 3px 0px rgba(0, 0, 0, .18)'
      },
      keyframes: {
      },
      animation: {
      },
    },
  },
  plugins: [],
}