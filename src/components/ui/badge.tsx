import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'success' | 'warning'
  size?: 'sm' | 'md'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'sm', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center font-medium transition-colors'

    const variants = {
      default: 'bg-dark-800 text-dark-300 border border-dark-700',
      primary: 'bg-primary-500/20 text-primary-300 border border-primary-500/30',
      secondary: 'bg-accent-500/20 text-accent-300 border border-accent-500/30',
      outline: 'bg-transparent text-dark-300 border border-dark-600',
      success: 'bg-green-500/20 text-green-300 border border-green-500/30',
      warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    }

    const sizes = {
      sm: 'px-2.5 py-0.5 text-xs rounded-md',
      md: 'px-3 py-1 text-sm rounded-lg',
    }

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
