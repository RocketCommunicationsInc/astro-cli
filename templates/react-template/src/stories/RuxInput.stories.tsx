import type { Meta, StoryObj } from '@storybook/react'
import { RuxInput } from '@astrouxds/react'

const meta: Meta<typeof RuxInput> = {
  title: 'Astro UX/Input',
  component: RuxInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Astro UX Design System Input component for forms.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'Text Input',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
    label: 'Email Address',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    label: 'Password',
  },
}

export const Required: Story = {
  args: {
    placeholder: 'Required field',
    label: 'Required Input',
    required: true,
  },
}

export const Invalid: Story = {
  args: {
    placeholder: 'Invalid input',
    label: 'Invalid Input',
    invalid: true,
    errorText: 'This field has an error',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    label: 'Disabled Input',
    disabled: true,
  },
}

export const WithHelpText: Story = {
  args: {
    placeholder: 'Enter username...',
    label: 'Username',
    helpText: 'Username must be at least 3 characters long',
  },
}
