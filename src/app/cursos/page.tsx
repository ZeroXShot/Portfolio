import type { Metadata } from 'next'
import { CursosContent } from './content'

export const metadata: Metadata = {
  title: 'Cursos y Certificaciones',
  description:
    'Certificaciones y cursos de formación continua de Joaquín González en IA, desarrollo y tecnología',
}

export default function CursosPage() {
  return <CursosContent />
}
