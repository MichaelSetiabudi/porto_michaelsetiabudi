/** @type {import('tailwindcss').Config} */

// Import theme configuration
const { colors } = require('./src/theme/colors');
const { tokens } = require('./src/theme/tokens');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // === COLOR SYSTEM ===
      colors: {
        // Theme colors - accessible via theme()
        'theme-dark': colors.dark,
        'theme-light': colors.light,

        // Quick access aliases
        'bg-primary-dark': colors.dark.bg.primary,
        'bg-primary-light': colors.light.bg.primary,
        'text-primary-dark': colors.dark.text.primary,
        'text-primary-light': colors.light.text.primary,
        'accent': colors.dark.accent.primary,
        'accent-light': colors.light.accent.primary,
      },

      // === TYPOGRAPHY ===
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      letterSpacing: tokens.typography.letterSpacing,

      // === SPACING ===
      spacing: tokens.spacing,

      // === BORDER RADIUS ===
      borderRadius: tokens.borderRadius,

      // === Z-INDEX ===
      zIndex: tokens.zIndex,

      // === ANIMATIONS ===
      transitionDuration: tokens.duration,
      transitionTimingFunction: tokens.easing,

      // === BREAKPOINTS ===
      screens: tokens.breakpoints,

      // === CONTAINER ===
      maxWidth: tokens.container,

      // === BOX SHADOW ===
      boxShadow: {
        // Dark mode shadows
        'dark-sm': colors.dark.shadow.sm,
        'dark-md': colors.dark.shadow.md,
        'dark-lg': colors.dark.shadow.lg,
        'dark-xl': colors.dark.shadow.xl,
        // Light mode shadows
        'light-sm': colors.light.shadow.sm,
        'light-md': colors.light.shadow.md,
        'light-lg': colors.light.shadow.lg,
        'light-xl': colors.light.shadow.xl,
      },

      // === BACKDROP BLUR ===
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};