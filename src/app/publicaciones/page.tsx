import type { Metadata } from 'next'
import { PublicacionesContent } from './content'

export const metadata: Metadata = {
  title: 'Publicaciones',
  description:
    'Artículos científicos y publicaciones de investigación de Joaquín González en IA, Deep Learning y neurociencia',
}

export default function PublicacionesPage() {
  return <PublicacionesContent />
}
