import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByText('Astro UX Design System Template')).toBeInTheDocument()
  })

  it('renders component showcase card', () => {
    render(<App />)
    expect(screen.getByText('Component Showcase')).toBeInTheDocument()
  })

  it('renders system status card', () => {
    render(<App />)
    expect(screen.getByText('System Status')).toBeInTheDocument()
  })
})
