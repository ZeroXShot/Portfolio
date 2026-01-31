import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina clases de Tailwind de forma inteligente
 * Utiliza clsx para condicionales y twMerge para resolver conflictos
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formatea una fecha en formato legible
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
  })
}

/**
 * Trunca un texto a un número máximo de caracteres
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Genera clases de grid responsivo basado en configuración
 */
export function getGridClasses(columns: {
  default?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}): string {
  const classes: string[] = ['grid']
  
  if (columns.default) classes.push(`grid-cols-${columns.default}`)
  if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`)
  if (columns.md) classes.push(`md:grid-cols-${columns.md}`)
  if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`)
  if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`)
  
  return classes.join(' ')
}

/**
 * Verifica si estamos en el servidor
 */
export const isServer = typeof window === 'undefined'

/**
 * Genera un ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

/**
 * Espera un tiempo determinado (útil para animaciones)
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
