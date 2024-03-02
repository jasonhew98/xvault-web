/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      'cosmic-cobalt': "#2E2E7E",
      'vodka': "#C3B4FF",
      'dark-blue-gray': "#6E6EA1",
      'white': "#FFFFFF",
      'cn-white': "#E0E0E0",
      'cetacean-blue': "#0F0F3D",
      'space-cadet': "#211D4E",
      'us-blue': "#3C3468",
      'black' : "#000000"
    },
    extend: {
      height: {
        '500': '31.25rem',
      },
      width: {
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

