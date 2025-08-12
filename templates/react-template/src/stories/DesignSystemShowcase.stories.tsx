import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  RuxButton,
  RuxInput,
  RuxCard,
  RuxStatus,
  RuxCheckbox,
  RuxSelect,
  RuxTextarea,
  RuxSwitch,
  RuxSlider,
  RuxProgress,
  RuxContainer
} from '@astrouxds/react'

const DesignSystemShowcase = () => {
  const [sliderValue, setSliderValue] = React.useState(50)
  const [progressValue, setProgressValue] = React.useState(75)
  const [switchValue, setSwitchValue] = React.useState(true)

  return (
    <RuxContainer style={{ padding: '24px', maxWidth: '1200px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>
          Astro UX Design System Showcase
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#666' }}>
          Interactive examples of Astro UX React components
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '24px' 
      }}>
        {/* Buttons & Actions */}
        <RuxCard>
          <div style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>Buttons & Actions</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <RuxButton>Primary</RuxButton>
              <RuxButton secondary>Secondary</RuxButton>
              <RuxButton borderless>Borderless</RuxButton>
              <RuxButton disabled>Disabled</RuxButton>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <RuxButton size="small">Small</RuxButton>
              <RuxButton size="medium">Medium</RuxButton>
              <RuxButton size="large">Large</RuxButton>
            </div>
          </div>
        </RuxCard>

        {/* Form Controls */}
        <RuxCard>
          <div style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>Form Controls</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <RuxInput 
                label="Text Input"
                placeholder="Enter text..."
                helpText="This is help text"
              />
              <RuxSelect label="Select Option">
                <option value="">Choose an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </RuxSelect>
              <RuxTextarea 
                label="Text Area"
                placeholder="Enter longer text..."
                rows={3}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RuxCheckbox />
                <label>Checkbox option</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RuxSwitch 
                  checked={switchValue}
                  onRuxchange={(e) => setSwitchValue(e.detail)}
                />
                <label>Switch option</label>
              </div>
            </div>
          </div>
        </RuxCard>

        {/* Status & Indicators */}
        <RuxCard>
          <div style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>Status & Indicators</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>Status Indicators</label>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <RuxStatus status="normal">Normal</RuxStatus>
                  <RuxStatus status="caution">Caution</RuxStatus>
                  <RuxStatus status="serious">Serious</RuxStatus>
                  <RuxStatus status="critical">Critical</RuxStatus>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>
                  Progress: {progressValue}%
                </label>
                <RuxProgress value={progressValue} max={100} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px' }}>
                  Slider: {sliderValue}
                </label>
                <RuxSlider 
                  min={0}
                  max={100}
                  value={sliderValue}
                  onRuxchange={(e) => setSliderValue(e.detail)}
                />
              </div>
            </div>
          </div>
        </RuxCard>

        {/* System Information */}
        <RuxCard>
          <div style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '16px' }}>System Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Communication Link</span>
                <RuxStatus status="normal" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Power Systems</span>
                <RuxStatus status="normal" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Thermal Control</span>
                <RuxStatus status="caution" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Navigation</span>
                <RuxStatus status="serious" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Life Support</span>
                <RuxStatus status="critical" />
              </div>
            </div>
          </div>
        </RuxCard>
      </div>

      <div style={{ 
        marginTop: '32px', 
        paddingTop: '24px', 
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center' 
      }}>
        <p style={{ color: '#666', margin: 0 }}>
          Built with Astro UX Design System • React • TypeScript • Storybook
        </p>
      </div>
    </RuxContainer>
  )
}

const meta: Meta = {
  title: 'Examples/Design System Showcase',
  component: DesignSystemShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive showcase of Astro UX Design System components in action.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Complete: Story = {}
