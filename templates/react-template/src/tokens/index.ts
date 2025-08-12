// Import Astro UX Design System tokens with proper syntax
import * as astrouxdsTokens from '@astrouxds/tokens'

// Export tokens for easy access
export const astroTokens = astrouxdsTokens

// Export structured helpers
export * from './helpers'

// Additional design tokens that extend Astro UX
export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const transitions = {
  none: 'none',
  all: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  default: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  fast: '100ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const

export type Breakpoint = keyof typeof breakpoints
export type Transition = keyof typeof transitions
