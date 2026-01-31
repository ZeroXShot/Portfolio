'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import {
  Menu,
  X,
  Home,
  Briefcase,
  FolderGit2,
  GraduationCap,
  FileText,
  Send,
  Linkedin,
  Github,
  Mail,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config'
import { Container } from '@/components/ui'

// Mapeo de iconos
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Briefcase,
  FolderGit2,
  GraduationCap,
  FileText,
  Send,
  Linkedin,
  Github,
  Mail,
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-dark-950/80 backdrop-blur-xl border-b border-dark-800/50'
            : 'bg-transparent'
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo y nombre */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center overflow-hidden group-hover:shadow-glow transition-shadow">
                <span className="text-white font-bold text-lg">JG</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                  Joaquín González
                </p>
                <p className="text-xs text-dark-400">AI Developer</p>
              </div>
            </Link>

            {/* Navegación desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {siteConfig.navigation.map((item) => {
                const Icon = item.icon ? iconMap[item.icon] : null
                const isActive = isActiveLink(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all',
                      isActive
                        ? 'text-primary-400'
                        : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                    )}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary-500/10 border border-primary-500/30 rounded-xl"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Redes sociales desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {siteConfig.social.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl text-dark-400 hover:text-primary-400 hover:bg-dark-800/50 transition-all"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                )
              })}
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-dark-300 hover:text-white hover:bg-dark-800/50 transition-all"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </Container>
      </header>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-dark-950/90 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menú */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-dark-900 border-l border-dark-800 p-6 pt-24"
            >
              <div className="flex flex-col gap-2">
                {siteConfig.navigation.map((item) => {
                  const Icon = item.icon ? iconMap[item.icon] : null
                  const isActive = isActiveLink(item.href)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all',
                        isActive
                          ? 'bg-primary-500/10 text-primary-400 border border-primary-500/30'
                          : 'text-dark-300 hover:text-white hover:bg-dark-800'
                      )}
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      {item.label}
                    </Link>
                  )
                })}
              </div>

              {/* Redes sociales móvil */}
              <div className="mt-8 pt-8 border-t border-dark-800">
                <p className="text-sm text-dark-500 mb-4">Sígueme</p>
                <div className="flex gap-3">
                  {siteConfig.social.map((social) => {
                    const Icon = iconMap[social.icon]
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-dark-800 text-dark-300 hover:text-primary-400 hover:bg-dark-700 transition-all"
                        aria-label={social.name}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer para compensar el header fixed */}
      <div className="h-16 lg:h-20" />
    </>
  )
}
