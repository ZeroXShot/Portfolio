import type { Metadata } from 'next'
import { ContactoContent } from './content'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta con Joaquín González para proyectos de IA, colaboraciones o consultas profesionales',
}

export default function ContactoPage() {
  return <ContactoContent />
}
