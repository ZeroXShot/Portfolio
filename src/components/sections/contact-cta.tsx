'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Mail, MessageSquare } from 'lucide-react'
import { Section, Button } from '@/components/ui'

export function ContactCTASection() {
  return (
    <Section spacing="xl" className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-6 shadow-glow">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>

          {/* Título */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h2>

          {/* Descripción */}
          <p className="text-lg text-dark-400 mb-8 max-w-xl mx-auto">
            Estoy disponible para nuevos proyectos y colaboraciones. 
            No dudes en contactarme para discutir cómo puedo ayudarte.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contacto">
                <Mail className="w-5 h-5" />
                Contactar
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/joaquín-jesús-gonzález" target="_blank" rel="noopener noreferrer">
                Conectar en LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
