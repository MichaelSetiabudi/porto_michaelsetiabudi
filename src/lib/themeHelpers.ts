/**
 * Theme Helper Functions
 * "Slate & Teal" Theme
 *
 * Provides consistent Tailwind class strings based on theme mode.
 * Navy, slate, and teal palette for a modern, professional look.
 */

export const useThemeHelpers = (theme: string) => {
  const isDark = theme === 'dark';

  /**
   * Main page background
   */
  const getBackgroundClass = () => {
    return isDark
      ? 'bg-[#0a192f]' // Deep navy
      : 'bg-white'; // Pure white
  };

  /**
   * Primary text color (headings, important content)
   */
  const getTextPrimaryClass = () => {
    return isDark
      ? 'text-[#e6f1ff]' // Almost white
      : 'text-[#0a192f]'; // Deep navy
  };

  /**
   * Secondary text color (body text, descriptions)
   */
  const getTextSecondaryClass = () => {
    return isDark
      ? 'text-[#8892b0]' // Slate gray
      : 'text-[#2d3e50]'; // Medium slate
  };

  /**
   * Tertiary text color (captions, subtle text)
   */
  const getTextTertiaryClass = () => {
    return isDark
      ? 'text-[#5a6d8c]' // Muted slate
      : 'text-[#5a6d8c]'; // Light slate
  };

  /**
   * Standard card background with border
   */
  const getCardBackgroundClass = () => {
    return isDark
      ? 'bg-[#112240]/70 backdrop-blur-md border-[#1e2d3d]'
      : 'bg-[#f8f9fa]/80 backdrop-blur-md border-[#e9ecef]';
  };

  /**
   * Elevated card (more prominent, with stronger shadow)
   */
  const getCardElevatedClass = () => {
    return isDark
      ? 'bg-[#1a2332]/80 backdrop-blur-lg border-[#2d3e50] shadow-dark-lg'
      : 'bg-white/90 backdrop-blur-lg border-[#dee2e6] shadow-light-lg';
  };

  /**
   * Contact/CTA card (special emphasis)
   */
  const getContactCardBackgroundClass = () => {
    return isDark
      ? 'bg-[#112240]/90 backdrop-blur-xl border-[#1e2d3d] hover:border-[#64ffda]/40 transition-colors duration-300'
      : 'bg-white/95 backdrop-blur-xl border-[#e9ecef] hover:border-[#00b894]/60 shadow-light-xl transition-all duration-300';
  };

  /**
   * Section backgrounds with subtle variations
   */
  const getSectionBackgroundClass = (
    variant: 'primary' | 'secondary' | 'tertiary'
  ) => {
    if (isDark) {
      switch (variant) {
        case 'primary':
          return 'bg-[#0a192f]'; // Base dark
        case 'secondary':
          return 'bg-[#112240]'; // Light navy
        case 'tertiary':
          return 'bg-[#1a2332]'; // Medium navy
        default:
          return 'bg-[#0a192f]';
      }
    } else {
      switch (variant) {
        case 'primary':
          return 'bg-white'; // Pure white
        case 'secondary':
          return 'bg-[#f8f9fa]'; // Off-white
        case 'tertiary':
          return 'bg-[#e9ecef]'; // Light gray
        default:
          return 'bg-white';
      }
    }
  };

  /**
   * Accent/CTA button colors
   */
  const getAccentButtonClass = () => {
    return isDark
      ? 'bg-[#64ffda] hover:bg-[#52d4aa] active:bg-[#40b894] text-[#0a192f] font-medium transition-colors duration-200'
      : 'bg-[#00b894] hover:bg-[#00a080] active:bg-[#008c6c] text-white font-medium transition-colors duration-200';
  };

  /**
   * Secondary/Ghost button (outline style)
   */
  const getSecondaryButtonClass = () => {
    return isDark
      ? 'bg-transparent border-2 border-[#1e2d3d] hover:border-[#64ffda]/60 hover:bg-[#112240] text-[#e6f1ff] transition-all duration-200'
      : 'bg-transparent border-2 border-[#dee2e6] hover:border-[#00b894]/60 hover:bg-[#f8f9fa] text-[#0a192f] transition-all duration-200';
  };

  /**
   * Link/text button accent color
   */
  const getAccentTextClass = () => {
    return isDark
      ? 'text-[#64ffda] hover:text-[#80ffe4] transition-colors duration-200'
      : 'text-[#00b894] hover:text-[#00a080] transition-colors duration-200';
  };

  /**
   * Border color (standard dividers)
   */
  const getBorderClass = () => {
    return isDark
      ? 'border-[#1e2d3d]'
      : 'border-[#e9ecef]';
  };

  /**
   * Accent border (highlighted elements)
   */
  const getAccentBorderClass = () => {
    return isDark
      ? 'border-[#64ffda]/40'
      : 'border-[#00b894]/60';
  };

  /**
   * Input/Form field styles
   */
  const getInputClass = () => {
    return isDark
      ? 'bg-[#0a192f] border-[#2d3e50] focus:border-[#64ffda]/40 text-[#e6f1ff] placeholder-[#5a6d8c]'
      : 'bg-white border-[#dee2e6] focus:border-[#00b894]/60 text-[#0a192f] placeholder-[#5a6d8c]';
  };

  return {
    getBackgroundClass,
    getTextPrimaryClass,
    getTextSecondaryClass,
    getTextTertiaryClass,
    getCardBackgroundClass,
    getCardElevatedClass,
    getContactCardBackgroundClass,
    getSectionBackgroundClass,
    getAccentButtonClass,
    getSecondaryButtonClass,
    getAccentTextClass,
    getBorderClass,
    getAccentBorderClass,
    getInputClass,
  };
};
