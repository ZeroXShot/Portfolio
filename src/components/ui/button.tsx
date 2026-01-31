'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium transition-all duration-300
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950
      disabled:pointer-events-none disabled:opacity-50
    `

    const variants = {
      primary: `
        bg-gradient-to-r from-primary-600 to-accent-600
        text-white
        hover:from-primary-500 hover:to-accent-500
        hover:shadow-glow
        active:scale-[0.98]
      `,
      secondary: `
        bg-dark-800 text-dark-100
        border border-dark-700
        hover:bg-dark-700 hover:border-dark-600
        active:scale-[0.98]
      `,
      outline: `
        bg-transparent text-primary-400
        border border-primary-500/50
        hover:bg-primary-500/10 hover:border-primary-500
        active:scale-[0.98]
      `,
      ghost: `
        bg-transparent text-dark-300
        hover:bg-dark-800 hover:text-dark-100
        active:scale-[0.98]
      `,
      link: `
        bg-transparent text-primary-400
        hover:text-primary-300 hover:underline
        underline-offset-4
      `,
    }

    const sizes = {
      sm: 'h-9 px-4 text-sm rounded-lg',
      md: 'h-11 px-6 text-sm rounded-xl',
      lg: 'h-14 px-8 text-base rounded-xl',
      icon: 'h-11 w-11 rounded-xl',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Cargando...</span>
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
