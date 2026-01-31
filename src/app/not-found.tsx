'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Home, ArrowLeft } from 'lucide-react'
import { Container, Button } from '@/components/ui'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          {/* 404 */}
          <div className="mb-8">
            <span className="text-8xl sm:text-9xl font-bold text-gradient">404</span>
          </div>

          {/* Mensaje */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Página no encontrada
          </h1>
          <p className="text-lg text-dark-400 mb-8">
            Lo siento, la página que buscas no existe o ha sido movida.
          </p>

          {/* Acciones */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="w-5 h-5" />
                Ir al inicio
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/proyectos">
                <ArrowLeft className="w-5 h-5" />
                Ver proyectos
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
