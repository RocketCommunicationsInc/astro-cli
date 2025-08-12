# Astro UX Design System React Template

A modern React starter template built with the [Astro UX Design System](https://www.astrouxds.com/), designed for building space applications and mission-critical software interfaces.

## Features

- ⚛️ **React 18** with TypeScript
- 🚀 **Astro UX Design System** components and tokens
- 📚 **Storybook** for component development and documentation
- ⚡ **Vite** for fast development and building
- 🧪 **Vitest** for testing
- 📏 **ESLint & Prettier** for code quality
- 🐕 **Husky** for Git hooks
- 🎨 **Design tokens** integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Storybook

To run Storybook for component development:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the component library.

## Project Structure

```
src/
├── components/          # Astro UX component exports
├── tokens/             # Design tokens (wraps @astrouxds/tokens)
├── stories/            # Storybook stories
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Astro UX tokens
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook for deployment
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Type check without emitting

## Astro UX Components

This template includes access to all Astro UX Design System components:

### Core Components
- `RuxButton` - Action buttons with space-grade styling
- `RuxInput` - Form input fields
- `RuxCard` - Container for content
- `RuxCheckbox` - Checkbox inputs
- `RuxRadio` - Radio button inputs
- `RuxSelect` - Dropdown selectors
- `RuxTextarea` - Multi-line text inputs
- `RuxSwitch` - Toggle switches
- `RuxSlider` - Range sliders
- `RuxProgress` - Progress indicators

### Navigation & Layout
- `RuxTabs` / `RuxTab` / `RuxTabPanels` / `RuxTabPanel` - Tab navigation
- `RuxAccordion` / `RuxAccordionItem` - Collapsible content
- `RuxMenu` / `RuxMenuItem` - Menu components
- `RuxContainer` - Layout container

### Data Display
- `RuxTable` - Data tables
- `RuxTree` / `RuxTreeNode` - Tree structures
- `RuxLog` - Log displays
- `RuxTimeline` - Timeline components

### Space-Specific Components
- `RuxStatus` - Status indicators
- `RuxGlobalStatusBar` - Application status bar
- `RuxClassificationMarking` - Security classification
- `RuxMonitoringIcon` - Monitoring status icons
- `RuxClock` - Time displays
- `RuxDatetime` - Date and time inputs

### Feedback
- `RuxToast` - Toast notifications
- `RuxNotification` - Notification messages
- `RuxPopUp` - Popup overlays

## Design Tokens

Access Astro UX design tokens through the tokens module:

```tsx
import { astroTokens } from './tokens'

// Use in components
const MyComponent = () => (
  <div style={{ 
    backgroundColor: astroTokens.color.background.base.default,
    color: astroTokens.color.text.primary,
    padding: astroTokens.spacing['4'],
    borderRadius: astroTokens.radius.base
  }}>
    Content
  </div>
)
```

### Available Token Categories

- **Colors**: Background, text, border, status colors
- **Spacing**: Consistent spacing scale
- **Typography**: Font families, sizes, weights
- **Radius**: Border radius values
- **Shadows**: Elevation shadows
- **Motion**: Animation and transition tokens

## Customization

### Extending Components

Create custom components that use Astro UX as a foundation:

```tsx
import { RuxButton } from '@astrouxds/react'
import { astroTokens } from './tokens'

export const CustomButton = ({ children, ...props }) => (
  <RuxButton 
    style={{ 
      borderRadius: astroTokens.radius.large 
    }}
    {...props}
  >
    {children}
  </RuxButton>
)
```

### Adding Custom Tokens

Extend the design system with your own tokens:

```tsx
// src/tokens/custom.ts
export const customTokens = {
  myCustomColor: '#ff0000',
  myCustomSpacing: '24px',
} as const
```

## Building for Production

1. Build the application:

```bash
npm run build
```

2. Preview the build:

```bash
npm run preview
```

The built files will be in the `dist` directory.

## Testing

Run tests with Vitest:

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Storybook Deployment

Build Storybook for deployment:

```bash
npm run build-storybook
```

The built Storybook will be in the `storybook-static` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Resources

- [Astro UX Design System Documentation](https://www.astrouxds.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Storybook Documentation](https://storybook.js.org/)
- [Vitest Documentation](https://vitest.dev/)

## License

MIT License - see the [LICENSE](LICENSE) file for details.
