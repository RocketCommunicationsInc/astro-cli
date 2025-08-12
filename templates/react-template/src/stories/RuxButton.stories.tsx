import type { Meta, StoryObj } from '@storybook/react'
import { RuxButton } from '@astrouxds/react'

const meta: Meta<typeof RuxButton> = {
  title: 'Astro UX/Button',
  component: RuxButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Astro UX Design System Button component with space-grade styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    secondary: {
      control: { type: 'boolean' },
    },
    borderless: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    iconOnly: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    secondary: true,
  },
}

export const Borderless: Story = {
  args: {
    children: 'Borderless Button',
    borderless: true,
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}
