/**
 * Centralized Color System
 * "Slate & Teal" Theme
 *
 * A sophisticated, modern palette inspired by developer portfolios.
 * Navy (#0a192f), slate grays, and teal accents for a professional, clean look.
 */

export const colors = {
  // === DARK MODE PALETTE ===
  dark: {
    // Backgrounds - Deep navy & charcoal
    bg: {
      primary: '#0a192f',        // Deep navy (main background)
      secondary: '#112240',      // Light navy (cards)
      tertiary: '#1a2332',       // Medium navy (elevated surfaces)
      overlay: '#0d1b2a',        // Modal/overlay background
      elevated: '#1e2d3d',       // Highest elevation
    },

    // Text - Slate grays & whites
    text: {
      primary: '#e6f1ff',        // Almost white (main text)
      secondary: '#8892b0',      // Slate gray (secondary text)
      tertiary: '#5a6d8c',       // Muted slate (tertiary text)
      disabled: '#495670',       // Disabled state
      inverse: '#0a192f',        // For use on light backgrounds
    },

    // Accent - Teal & cyan
    accent: {
      primary: '#64ffda',        // Bright teal (primary actions)
      secondary: '#52d4aa',      // Medium teal (hover states)
      tertiary: '#40b894',       // Deep teal (pressed states)
      light: '#80ffe4',          // Light teal (highlights)
    },

    // Supporting colors
    support: {
      success: '#52d4aa',        // Teal green
      warning: '#ffd93d',        // Yellow
      error: '#ff6b6b',          // Coral red
      info: '#4dabf7',           // Sky blue
    },

    // Borders & Dividers
    border: {
      primary: '#1e2d3d',        // Subtle borders
      secondary: '#2d3e50',      // More visible borders
      accent: '#64ffda40',       // Teal with opacity (40%)
    },

    // Shadows - Deep navy with opacity
    shadow: {
      sm: '0 1px 2px 0 rgba(10, 25, 47, 0.3)',
      md: '0 4px 6px -1px rgba(10, 25, 47, 0.4), 0 2px 4px -1px rgba(10, 25, 47, 0.3)',
      lg: '0 10px 15px -3px rgba(10, 25, 47, 0.5), 0 4px 6px -2px rgba(10, 25, 47, 0.4)',
      xl: '0 20px 25px -5px rgba(10, 25, 47, 0.5), 0 10px 10px -5px rgba(10, 25, 47, 0.4)',
    },
  },

  // === LIGHT MODE PALETTE ===
  light: {
    // Backgrounds - Off-whites & light grays
    bg: {
      primary: '#ffffff',        // Pure white (main background)
      secondary: '#f8f9fa',      // Off-white (cards)
      tertiary: '#e9ecef',       // Light gray (elevated surfaces)
      overlay: '#ffffff',        // Pure white (modals)
      elevated: '#ffffff',       // Pure white (dropdowns)
    },

    // Text - Navy & slate
    text: {
      primary: '#0a192f',        // Deep navy (main text)
      secondary: '#2d3e50',      // Medium slate (secondary text)
      tertiary: '#5a6d8c',       // Light slate (tertiary text)
      disabled: '#adb5bd',       // Disabled state
      inverse: '#ffffff',        // For use on dark backgrounds
    },

    // Accent - Teal & cyan (slightly darker for light mode)
    accent: {
      primary: '#00b894',        // Deep teal (primary actions)
      secondary: '#00a080',      // Darker teal (hover states)
      tertiary: '#008c6c',       // Very dark teal (pressed states)
      light: '#1dd1a1',          // Lighter teal (backgrounds)
    },

    // Supporting colors
    support: {
      success: '#00b894',        // Deep teal green
      warning: '#f39c12',        // Orange-yellow
      error: '#e74c3c',          // Red
      info: '#3498db',           // Blue
    },

    // Borders & Dividers
    border: {
      primary: '#e9ecef',        // Subtle borders
      secondary: '#dee2e6',      // More visible borders
      accent: '#00b89460',       // Teal with opacity (60%)
    },

    // Shadows - Navy tint
    shadow: {
      sm: '0 1px 2px 0 rgba(10, 25, 47, 0.08)',
      md: '0 4px 6px -1px rgba(10, 25, 47, 0.12), 0 2px 4px -1px rgba(10, 25, 47, 0.08)',
      lg: '0 10px 15px -3px rgba(10, 25, 47, 0.15), 0 4px 6px -2px rgba(10, 25, 47, 0.08)',
      xl: '0 20px 25px -5px rgba(10, 25, 47, 0.18), 0 10px 10px -5px rgba(10, 25, 47, 0.10)',
    },
  },
} as const;

// Type helpers
export type ColorMode = 'light' | 'dark';
export type ColorPalette = typeof colors.dark;
