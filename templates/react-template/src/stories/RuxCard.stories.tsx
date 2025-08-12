import type { Meta, StoryObj } from '@storybook/react'
import { RuxCard } from '@astrouxds/react'

const meta: Meta<typeof RuxCard> = {
  title: 'Astro UX/Card',
  component: RuxCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Astro UX Design System Card component for displaying content.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '16px' }}>
        <h3>Card Title</h3>
        <p>This is a default card with some content inside.</p>
      </div>
    ),
  },
}

export const WithContent: Story = {
  args: {
    children: (
      <div>
        <div style={{ padding: '16px', borderBottom: '1px solid #e0e0e0' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>System Status</h3>
          <p style={{ margin: 0, color: '#666' }}>Mission critical systems overview</p>
        </div>
        <div style={{ padding: '16px' }}>
          <div style={{ marginBottom: '12px' }}>
            <strong>Satellite Communication:</strong> <span style={{ color: '#4caf50' }}>Nominal</span>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong>Power Systems:</strong> <span style={{ color: '#4caf50' }}>Nominal</span>
          </div>
          <div>
            <strong>Navigation:</strong> <span style={{ color: '#ff9800' }}>Caution</span>
          </div>
        </div>
      </div>
    ),
  },
}
