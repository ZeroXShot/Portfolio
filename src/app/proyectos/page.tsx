import type { Metadata } from 'next'
import { ProyectosContent } from './content'

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Proyectos de IA, desarrollo de software y aplicaciones médicas de Joaquín González',
}

export default function ProyectosPage() {
  return <ProyectosContent />
}
