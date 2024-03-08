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
        'primary-100': "#1F3A5F",
        'primary-200': "#4D648D",
        'primary-300': "#ACC2EF",
        'accent-100': "#3D5A80",
        'accent-200': "#CEE8FF",
        'white-100': "#FFFFFF",
        'white-200': "#E0E0E0",
        'bg-100': "#0F1C2E",
        'bg-200': "#1F2B3E",
        'bg-300': "#374357",
        'boxdark': "rgb(36 48 63)",
        'strokedark': "rgb(46 58 71)",
        'black' : "rgb(28 36 52)",
        'graydark' : "rgb(51 58 72)",
        'bodydark1': "rgb(222 228 238)",
        'bodydark2': "rgb(138 153 175)"
      },
      height: {
        '500': '31.25rem',
      },
      width: {
        '72.5': '18.125rem',
        'sidebar': '15rem',
        '500': '31.25rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}