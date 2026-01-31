import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          `
          w-full px-4 py-3
          bg-dark-900 border rounded-xl
          text-dark-100 placeholder:text-dark-500
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950
          disabled:cursor-not-allowed disabled:opacity-50
          `,
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-dark-700 hover:border-dark-600 focus:border-primary-500 focus:ring-primary-500',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

// Textarea component
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          `
          w-full px-4 py-3
          bg-dark-900 border rounded-xl
          text-dark-100 placeholder:text-dark-500
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950
          disabled:cursor-not-allowed disabled:opacity-50
          resize-none min-h-[120px]
          `,
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-dark-700 hover:border-dark-600 focus:border-primary-500 focus:ring-primary-500',
          className
        )}
        {...props}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

// Form Label
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn('block text-sm font-medium text-dark-200 mb-2', className)}
        {...props}
      >
        {children}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    )
  }
)

Label.displayName = 'Label'

// Form Error Message
const FormError = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-red-500 mt-1', className)}
        {...props}
      />
    )
  }
)

FormError.displayName = 'FormError'

export { Input, Textarea, Label, FormError }
