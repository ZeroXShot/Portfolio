'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, FileText, BookOpen, Calendar, Users } from 'lucide-react'
import { publications, publicationsConfig } from '@/config'
import { Section, SectionHeader, Card, Button, Badge, Container } from '@/components/ui'
import type { Publication } from '@/types'

const typeIcons = {
  paper: BookOpen,
  article: FileText,
  conference: FileText,
  other: FileText,
}

const typeLabels = {
  paper: 'Artículo científico',
  article: 'Artículo',
  conference: 'Conferencia',
  other: 'Publicación',
}

const typeColors = {
  paper: 'primary',
  article: 'secondary',
  conference: 'warning',
  other: 'default',
} as const

function PublicationCard({ publication, index }: { publication: Publication; index: number }) {
  const TypeIcon = typeIcons[publication.type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden h-full">
        <div className="flex flex-col h-full">
          {/* Imagen */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={publication.image}
              alt={publication.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
            
            {/* Tipo badge */}
            <div className="absolute top-4 left-4">
              <Badge variant={typeColors[publication.type]} size="md">
                <TypeIcon className="w-3.5 h-3.5 mr-1" />
                {typeLabels[publication.type]}
              </Badge>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-dark-500 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {publication.date}
              </span>
              {publication.authors && publication.authors.length > 0 && (
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {publication.authors.length} autor{publication.authors.length > 1 ? 'es' : ''}
                </span>
              )}
            </div>

            {/* Título */}
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
              {publication.title}
            </h3>

            {/* Journal */}
            {publication.journal && (
              <p className="text-sm text-primary-400 font-medium mb-3">
                {publication.journal}
              </p>
            )}

            {/* Descripción */}
            <p className="text-dark-400 mb-4 flex-1 line-clamp-3">
              {publication.shortDescription}
            </p>

            {/* Acciones */}
            <div className="flex items-center gap-3 pt-4 border-t border-dark-800">
              <Button asChild variant="primary" size="sm" className="flex-1">
                <Link href={`/publicaciones/${publication.slug}`}>
                  Ver más
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Publicación
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export function PublicacionesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              {publications.length} publicaciones
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Publicaciones
            </h1>
            <p className="text-xl text-dark-300">
              Investigaciones y artículos científicos publicados en revistas y congresos 
              internacionales sobre IA, Deep Learning y análisis de señales biomédicas.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Grid de publicaciones */}
      <Section>
        <div className={`grid grid-cols-1 md:grid-cols-${publicationsConfig.gridColumns} gap-6`}>
          {publications.map((publication, index) => (
            <PublicationCard
              key={publication.id}
              publication={publication}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* CTA Investigación */}
      <Section spacing="lg" className="bg-gradient-futuristic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <BookOpen className="w-12 h-12 text-primary-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Investigación aplicada
          </h2>
          <p className="text-dark-400 mb-6">
            Mi investigación se centra en la aplicación práctica de técnicas de 
            Deep Learning para resolver problemas reales en el ámbito de la salud 
            y el bienestar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="primary" size="lg">
              <Link href="/contacto">
                Colaborar en investigación
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                Google Scholar
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
