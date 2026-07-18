/** @type {import('tailwindcss').Config} */

// Colour and font tokens are defined as CSS custom properties in
// src/styles/globals.css (single source of truth for the two themes).
// Tailwind utilities point at those variables so theme switching is pure CSS.
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        surface: "var(--surface)",
        raised: "var(--raised)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        rule: "var(--rule)",
        "rule-strong": "var(--rule-strong)",
        live: "var(--live)",
        "live-soft": "var(--live-soft)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        wrap: "1360px",
        measure: "62ch",
      },
      letterSpacing: {
        label: "0.14em",
      },
    },
  },
  plugins: [],
};
