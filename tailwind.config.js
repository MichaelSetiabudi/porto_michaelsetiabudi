/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        light: '#FFFFFF',
      },
      backgroundColor: {
        primary: {
          light: '#FFFFFF',
          dark: '#0A0A0A',
        },
        secondary: {
          light: '#F3F4F6',
          dark: '#111827',
        },
      },
      textColor: {
        primary: {
          light: '#1F2937',
          dark: '#F3F4F6',
        },
        secondary: {
          light: '#4B5563',
          dark: '#9CA3AF',
        },
      },
      borderColor: {
        primary: {
          light: 'rgba(99, 102, 241, 0.2)',
          dark: 'rgba(99, 102, 241, 0.2)',
        },
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'indigo-hover': '#5c5fc0',
        'purple-hover': '#9448d6',
      }),
    },
  },
  plugins: [],
};