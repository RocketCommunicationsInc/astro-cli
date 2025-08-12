import React from 'react'

export interface ComponentProps {
  children?: React.ReactNode
  className?: string
}

export interface ButtonProps extends ComponentProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
}

export interface InputProps extends ComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  required?: boolean
}

export interface CardProps extends ComponentProps {
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export type Variant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
export type Size = 'default' | 'sm' | 'lg' | 'icon'
