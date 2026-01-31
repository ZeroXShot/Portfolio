'use client'

import Link from 'next/link'
import { Linkedin, Github, Mail, Heart } from 'lucide-react'
import { siteConfig } from '@/config'
import { Container } from '@/components/ui'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Linkedin,
  Github,
  Mail,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800">
      {/* Gradiente decorativo superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <Container>
        <div className="py-12 lg:py-16">
          {/* Grid principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Columna 1: Logo y descripción */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JG</span>
                </div>
                <span className="font-semibold text-white text-lg">
                  Joaquín González
                </span>
              </Link>
              <p className="text-dark-400 max-w-md mb-6">
                Desarrollador de Inteligencia Artificial e Ingeniero Biomédico especializado en 
                Deep Learning, segmentación de imágenes médicas y arquitecturas de IA en producción.
              </p>
              {/* Redes sociales */}
              <div className="flex gap-3">
                {siteConfig.social.map((social) => {
                  const Icon = iconMap[social.icon]
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-dark-900 border border-dark-800 text-dark-400 hover:text-primary-400 hover:border-primary-500/30 hover:bg-dark-800 transition-all"
                      aria-label={social.name}
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Columna 2: Navegación */}
            <div>
              <h4 className="font-semibold text-white mb-4">Navegación</h4>
              <ul className="space-y-3">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {siteConfig.footer.legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-dark-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-dark-500 text-sm">
                © {currentYear} Joaquín González. Todos los derechos reservados.
              </p>
              <p className="text-dark-500 text-sm flex items-center gap-1">
                Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en Alicante, España
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
