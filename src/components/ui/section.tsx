import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './container'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  withPattern?: boolean
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, containerSize = 'lg', spacing = 'lg', withPattern = false, children, ...props }, ref) => {
    const spacings = {
      sm: 'py-12',
      md: 'py-16',
      lg: 'py-24',
      xl: 'py-32',
    }

    return (
      <section
        ref={ref}
        className={cn(
          'relative',
          spacings[spacing],
          withPattern && 'grid-pattern',
          className
        )}
        {...props}
      >
        <Container size={containerSize}>{children}</Container>
      </section>
    )
  }
)

Section.displayName = 'Section'

// Section Header component
interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  titleAs?: 'h1' | 'h2' | 'h3'
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, align = 'center', titleAs: Tag = 'h2', ...props }, ref) => {
    const alignments = {
      left: 'text-left',
      center: 'text-center mx-auto',
      right: 'text-right ml-auto',
    }

    return (
      <div
        ref={ref}
        className={cn('max-w-3xl mb-12', alignments[align], className)}
        {...props}
      >
        <Tag className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-4">
          {title}
        </Tag>
        {subtitle && (
          <p className="text-lg sm:text-xl text-dark-400">{subtitle}</p>
        )}
      </div>
    )
  }
)

SectionHeader.displayName = 'SectionHeader'

export { Section, SectionHeader }
