/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      'primary-100': "#56FFFF",
      'primary-200': "#36E5E5",
      'accent-100': "#7F2AE1",
      'white-100': "#FFFFFF",
      'white-200': "#E0E0E0",
      'bg-100': "#0F0F3D",
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

