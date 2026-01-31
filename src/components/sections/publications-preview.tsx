'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, FileText, BookOpen } from 'lucide-react'
import { getFeaturedPublications } from '@/config'
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui'
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
        <div className="flex flex-col md:flex-row h-full">
          {/* Imagen */}
          <div className="relative md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
            <Image
              src={publication.image}
              alt={publication.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-900 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent md:hidden" />
          </div>

          {/* Contenido */}
          <div className="flex-1 p-6 flex flex-col">
            {/* Tipo y fecha */}
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="primary" size="sm">
                <TypeIcon className="w-3 h-3 mr-1" />
                {typeLabels[publication.type]}
              </Badge>
              <span className="text-sm text-dark-500">{publication.date}</span>
            </div>

            {/* Título */}
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
              {publication.title}
            </h3>

            {/* Journal */}
            {publication.journal && (
              <p className="text-sm text-primary-400 mb-2">{publication.journal}</p>
            )}

            {/* Descripción */}
            <p className="text-dark-400 mb-4 flex-1 line-clamp-3">
              {publication.shortDescription}
            </p>

            {/* Acciones */}
            <div className="flex items-center gap-3">
              <Button asChild variant="primary" size="sm">
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
                  Ver publicación
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export function PublicationsPreviewSection() {
  const publications = getFeaturedPublications()

  return (
    <Section id="publicaciones-destacadas">
      <SectionHeader
        title="Publicaciones"
        subtitle="Investigaciones y artículos científicos publicados"
      />

      <div className="space-y-6">
        {publications.map((publication, index) => (
          <PublicationCard
            key={publication.id}
            publication={publication}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <Button asChild variant="outline" size="lg">
          <Link href="/publicaciones">
            Ver todas las publicaciones
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </Section>
  )
}
