// Helper to access commonly used Astro UX tokens in a structured way
import * as astroTokens from '@astrouxds/tokens'

// Structured access to common tokens
export const tokens = {
  // Colors
  colors: {
    primary: astroTokens.ButtonColorBackgroundPrimaryDefault || '#4dacff',
    secondary: astroTokens.ButtonColorBackgroundSecondary || 'transparent',
    text: {
      primary: '#ffffff',
      secondary: '#a4abb6',
      muted: '#6c7682',
    },
    background: {
      dark: '#101923',
      surface: '#1b2329',
      card: '#232c35',
    },
    status: {
      normal: astroTokens.StatusColorBackgroundNormal || '#56f000',
      caution: astroTokens.StatusColorBackgroundCaution || '#ffb302',
      critical: astroTokens.StatusColorBackgroundCritical || '#ff3838',
      serious: astroTokens.StatusColorBackgroundSerious || '#fc4f65',
      standby: astroTokens.StatusColorBackgroundStandby || '#2dccff',
      off: astroTokens.StatusColorBackgroundOff || '#9ea7ad',
    },
    border: {
      default: '#2d3643',
      muted: '#1e252d',
    }
  },
  
  // Spacing
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  // Typography
  typography: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    }
  },
  
  // Border radius
  borderRadius: {
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  }
}

// Export individual token categories for convenience
export const { colors, spacing, typography, borderRadius, shadows } = tokens
