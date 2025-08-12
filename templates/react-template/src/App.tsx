import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import {
  RuxButton,
  RuxInput,
  RuxCard,
  RuxStatus,
  RuxGlobalStatusBar,
  RuxClassificationMarking,
  RuxContainer
} from '@astrouxds/react'
import { colors, spacing, typography } from './tokens'
import FlightDynamics from './pages/flightDynamics'

// Home page component (existing content)
const HomePage: React.FC = () => {
  return (
    <RuxContainer style={{ padding: spacing.lg, maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: spacing.xl }}>
        <h1 style={{ 
          color: colors.text.primary,
          fontSize: typography.fontSize['3xl'],
          fontWeight: typography.fontWeight.bold,
          marginBottom: spacing.sm
        }}>
          Astro UX Design System Template
        </h1>
        <p style={{ 
          color: colors.text.secondary,
          fontSize: typography.fontSize.lg
        }}>
          A React starter template using Astro UX components and design tokens.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: spacing.lg,
        marginBottom: spacing.xl
      }}>
        <RuxCard>
          <div style={{ padding: spacing.lg }}>
            <h3 style={{ 
              color: colors.text.primary,
              marginBottom: spacing.md,
              fontSize: typography.fontSize.xl
            }}>
              Component Showcase
            </h3>
            
            <div style={{ marginBottom: spacing.md }}>
              <RuxButton style={{ marginRight: spacing.sm }}>
                Primary Action
              </RuxButton>
              <RuxButton secondary>
                Secondary Action
              </RuxButton>
            </div>
            
            <div style={{ marginBottom: spacing.md }}>
              <RuxInput 
                label="Input Field"
                placeholder="Enter some text..."
                helpText="This is a help text"
              />
            </div>
            
            <div style={{ display: 'flex', gap: spacing.md, alignItems: 'center' }}>
              <RuxStatus status="normal">Normal</RuxStatus>
              <RuxStatus status="caution">Caution</RuxStatus>
              <RuxStatus status="critical">Critical</RuxStatus>
            </div>
          </div>
        </RuxCard>

        <RuxCard>
          <div style={{ padding: spacing.lg }}>
            <h3 style={{ 
              color: colors.text.primary,
              marginBottom: spacing.md,
              fontSize: typography.fontSize.xl
            }}>
              System Status
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: colors.text.primary }}>Communication</span>
                <RuxStatus status="normal" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: colors.text.primary }}>Power Systems</span>
                <RuxStatus status="normal" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: colors.text.primary }}>Navigation</span>
                <RuxStatus status="caution" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: colors.text.primary }}>Thermal Control</span>
                <RuxStatus status="critical" />
              </div>
            </div>
          </div>
        </RuxCard>

        <RuxCard>
          <div style={{ padding: spacing.lg }}>
            <h3 style={{ 
              color: colors.text.primary,
              marginBottom: spacing.md,
              fontSize: typography.fontSize.xl
            }}>
              Design Tokens
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm, fontSize: typography.fontSize.sm }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: colors.primary, 
                  borderRadius: '4px',
                  border: '1px solid #ffffff20'
                }}></div>
                <strong style={{ color: colors.text.primary }}>Primary:</strong>
                <span style={{ fontFamily: 'monospace', color: colors.text.secondary }}>
                  {colors.primary}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: colors.status.normal, 
                  borderRadius: '4px',
                  border: '1px solid #ffffff20'
                }}></div>
                <strong style={{ color: colors.status.normal }}>Normal:</strong>
                <span style={{ fontFamily: 'monospace', color: colors.text.secondary }}>
                  {colors.status.normal}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: colors.status.caution, 
                  borderRadius: '4px',
                  border: '1px solid #ffffff20'
                }}></div>
                <strong style={{ color: colors.status.caution }}>Caution:</strong>
                <span style={{ fontFamily: 'monospace', color: colors.text.secondary }}>
                  {colors.status.caution}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: colors.status.critical, 
                  borderRadius: '4px',
                  border: '1px solid #ffffff20'
                }}></div>
                <strong style={{ color: colors.status.critical }}>Critical:</strong>
                <span style={{ fontFamily: 'monospace', color: colors.text.secondary }}>
                  {colors.status.critical}
                </span>
              </div>
            </div>
          </div>
        </RuxCard>
      </div>

      <div style={{ textAlign: 'center', paddingTop: spacing.xl, borderTop: `1px solid ${colors.border.default}` }}>
        <p style={{ color: colors.text.secondary }}>
          Built with Astro UX Design System • React • TypeScript • Storybook
        </p>
      </div>
    </RuxContainer>
  )
}

// Navigation component
const Navigation: React.FC = () => {
  const location = useLocation()
  
  return (
    <div style={{ 
      backgroundColor: colors.background.surface,
      borderBottom: `1px solid ${colors.border.default}`,
      padding: `${spacing.md} 0`
    }}>
      <RuxContainer style={{ maxWidth: '1200px', margin: '0 auto', padding: `0 ${spacing.lg}` }}>
        <nav style={{ display: 'flex', gap: spacing.md }}>
          <Link 
            to="/" 
            style={{ textDecoration: 'none' }}
          >
            <RuxButton 
              secondary={location.pathname !== '/'}
              size="small"
            >
              Home
            </RuxButton>
          </Link>
          <Link 
            to="/flightDynamics" 
            style={{ textDecoration: 'none' }}
          >
            <RuxButton 
              secondary={location.pathname !== '/flightDynamics'}
              size="small"
            >
              Flight Dynamics
            </RuxButton>
          </Link>
        </nav>
      </RuxContainer>
    </div>
  )
}

function AppContent() {
  const location = useLocation()
  const isFlightDynamicsPage = location.pathname === '/flightDynamics'

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.dark }}>
      {/* Only show global elements on non-Flight Dynamics pages */}
      {!isFlightDynamicsPage && (
        <>
          <RuxClassificationMarking classification="unclassified" />
          
          <RuxGlobalStatusBar 
            appDomain="Astro UX Design System" 
            appName="React Template"
            appVersion="1.0.0"
          />
          
          <Navigation />
        </>
      )}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flightDynamics" element={<FlightDynamics />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
