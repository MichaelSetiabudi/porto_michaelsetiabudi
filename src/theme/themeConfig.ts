/**
 * Theme Configuration
 * Central export for all theme-related values
 */

import { colors, ColorMode } from './colors';
import { tokens } from './tokens';

/**
 * Get color palette based on theme mode
 */
export function getColorPalette(mode: ColorMode) {
  return colors[mode];
}

/**
 * Theme-aware color getter
 * Usage: getColor(theme, 'accent', 'primary')
 */
export function getColor(
  theme: ColorMode,
  category: keyof typeof colors.dark,
  shade: string
): string {
  const palette = getColorPalette(theme);
  const colorCategory = palette[category] as Record<string, string>;
  return colorCategory?.[shade] || '';
}

/**
 * Semantic color mappings
 * Maps common UI elements to color tokens
 */
export const semanticColors = {
  // Backgrounds
  page: (theme: ColorMode) => getColor(theme, 'bg', 'primary'),
  card: (theme: ColorMode) => getColor(theme, 'bg', 'secondary'),
  surface: (theme: ColorMode) => getColor(theme, 'bg', 'tertiary'),
  overlay: (theme: ColorMode) => getColor(theme, 'bg', 'overlay'),

  // Text
  heading: (theme: ColorMode) => getColor(theme, 'text', 'primary'),
  body: (theme: ColorMode) => getColor(theme, 'text', 'secondary'),
  subtle: (theme: ColorMode) => getColor(theme, 'text', 'tertiary'),

  // Interactive
  primary: (theme: ColorMode) => getColor(theme, 'accent', 'primary'),
  primaryHover: (theme: ColorMode) => getColor(theme, 'accent', 'secondary'),
  primaryActive: (theme: ColorMode) => getColor(theme, 'accent', 'tertiary'),

  // Borders
  divider: (theme: ColorMode) => getColor(theme, 'border', 'primary'),
  outline: (theme: ColorMode) => getColor(theme, 'border', 'secondary'),
  focus: (theme: ColorMode) => getColor(theme, 'border', 'accent'),
} as const;

/**
 * Component-specific presets
 */
export const componentPresets = {
  button: {
    primary: (theme: ColorMode) => ({
      bg: getColor(theme, 'accent', 'primary'),
      bgHover: getColor(theme, 'accent', 'secondary'),
      bgActive: getColor(theme, 'accent', 'tertiary'),
      text: getColor(theme, 'text', 'inverse'),
      border: getColor(theme, 'accent', 'primary'),
    }),
    secondary: (theme: ColorMode) => ({
      bg: 'transparent',
      bgHover: getColor(theme, 'bg', 'tertiary'),
      bgActive: getColor(theme, 'bg', 'elevated'),
      text: getColor(theme, 'text', 'primary'),
      border: getColor(theme, 'border', 'secondary'),
    }),
    ghost: (theme: ColorMode) => ({
      bg: 'transparent',
      bgHover: getColor(theme, 'bg', 'secondary'),
      bgActive: getColor(theme, 'bg', 'tertiary'),
      text: getColor(theme, 'text', 'primary'),
      border: 'transparent',
    }),
  },

  card: {
    default: (theme: ColorMode) => ({
      bg: getColor(theme, 'bg', 'secondary'),
      border: getColor(theme, 'border', 'primary'),
      shadow: colors[theme].shadow.md,
    }),
    elevated: (theme: ColorMode) => ({
      bg: getColor(theme, 'bg', 'tertiary'),
      border: getColor(theme, 'border', 'secondary'),
      shadow: colors[theme].shadow.lg,
    }),
    interactive: (theme: ColorMode) => ({
      bg: getColor(theme, 'bg', 'secondary'),
      bgHover: getColor(theme, 'bg', 'tertiary'),
      border: getColor(theme, 'border', 'primary'),
      borderHover: getColor(theme, 'border', 'accent'),
      shadow: colors[theme].shadow.md,
      shadowHover: colors[theme].shadow.xl,
    }),
  },

  input: {
    default: (theme: ColorMode) => ({
      bg: getColor(theme, 'bg', 'primary'),
      border: getColor(theme, 'border', 'secondary'),
      borderFocus: getColor(theme, 'border', 'accent'),
      text: getColor(theme, 'text', 'primary'),
      placeholder: getColor(theme, 'text', 'tertiary'),
    }),
  },

  nav: {
    default: (theme: ColorMode) => ({
      bg: theme === 'dark'
        ? 'rgba(26, 26, 28, 0.8)'
        : 'rgba(250, 248, 246, 0.8)',
      backdrop: 'blur(12px)',
      border: getColor(theme, 'border', 'primary'),
      text: getColor(theme, 'text', 'primary'),
      textHover: getColor(theme, 'accent', 'primary'),
    }),
  },
} as const;

/**
 * Animation presets
 */
export const animations = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  slideUp: {
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  slideDown: {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  scaleIn: {
    from: { opacity: 0, transform: 'scale(0.95)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
} as const;

/**
 * Export complete theme configuration
 */
export const themeConfig = {
  colors,
  tokens,
  semanticColors,
  componentPresets,
  animations,
  getColorPalette,
  getColor,
} as const;

export default themeConfig;
