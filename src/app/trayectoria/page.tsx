import type { Metadata } from 'next'
import { TrayectoriaContent } from './content'

export const metadata: Metadata = {
  title: 'Trayectoria',
  description:
    'Experiencia profesional y formación académica de Joaquín González - Desarrollador de IA e Ingeniero Biomédico',
}

export default function TrayectoriaPage() {
  return <TrayectoriaContent />
}
