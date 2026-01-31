'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Calendar, Users, BookOpen, FileText } from 'lucide-react'
import { Container, Button, Badge, Card } from '@/components/ui'
import type { Publication } from '@/types'

const typeLabels = {
  paper: 'Artículo científico',
  article: 'Artículo',
  conference: 'Conferencia',
  other: 'Publicación',
}

interface Props {
  publication: Publication
}

export function PublicationDetailContent({ publication }: Props) {
  return (
    <>
      {/* Hero con imagen */}
      <section className="relative">
        {/* Imagen de fondo */}
        <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
          <Image
            src={publication.image}
            alt={publication.title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-dark-950/80 to-dark-950" />
        </div>

        {/* Contenido superpuesto */}
        <Container className="relative -mt-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <Link
              href="/publicaciones"
              className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a publicaciones
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="primary" size="md">
                <BookOpen className="w-4 h-4 mr-1" />
                {typeLabels[publication.type]}
              </Badge>
              <span className="flex items-center gap-1.5 text-dark-400">
                <Calendar className="w-4 h-4" />
                {publication.date}
              </span>
            </div>

            {/* Título */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-4xl">
              {publication.title}
            </h1>

            {/* Journal */}
            {publication.journal && (
              <p className="text-lg text-primary-400 font-medium mb-4">
                {publication.journal}
              </p>
            )}

            {/* Autores */}
            {publication.authors && publication.authors.length > 0 && (
              <div className="flex items-center gap-2 text-dark-300 mb-6">
                <Users className="w-5 h-5" />
                <span>{publication.authors.join(', ')}</span>
              </div>
            )}

            {/* Acciones */}
            <Button asChild size="lg">
              <a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
                Ver publicación original
              </a>
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Contenido principal */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Columna principal - Descripción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Card padding="lg">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Resumen
                </h2>
                <div className="prose-custom">
                  {publication.description.split('\n\n').map((paragraph, index) => {
                    // Detectar headers (##)
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index}>{paragraph.replace('## ', '')}</h2>
                      )
                    }
                    // Detectar listas (-)
                    if (paragraph.includes('\n- ')) {
                      const [title, ...items] = paragraph.split('\n')
                      return (
                        <div key={index}>
                          {title && <p><strong>{title}</strong></p>}
                          <ul>
                            {items.map((item, i) => (
                              <li key={i}>{item.replace('- ', '')}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    }
                    // Párrafo normal
                    return <p key={index}>{paragraph}</p>
                  })}
                </div>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Información */}
              <Card padding="lg">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Información
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-dark-500">Tipo</p>
                      <p className="text-dark-200">{typeLabels[publication.type]}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-dark-500">Fecha</p>
                      <p className="text-dark-200">{publication.date}</p>
                    </div>
                  </li>
                  {publication.journal && (
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-primary-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-dark-500">Publicado en</p>
                        <p className="text-dark-200">{publication.journal}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </Card>

              {/* Link externo */}
              <Card padding="lg">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Acceso
                </h3>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver publicación completa
                  </a>
                </Button>
              </Card>

              {/* CTA */}
              <Card padding="lg" variant="gradient" className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  ¿Interesado en colaborar?
                </h3>
                <p className="text-dark-400 text-sm mb-4">
                  Estoy abierto a nuevas colaboraciones de investigación
                </p>
                <Button asChild variant="primary" className="w-full">
                  <Link href="/contacto">
                    Contactar
                  </Link>
                </Button>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Navegación */}
      <section className="py-12 border-t border-dark-800">
        <Container>
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/publicaciones">
                <ArrowLeft className="w-5 h-5" />
                Ver todas las publicaciones
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
