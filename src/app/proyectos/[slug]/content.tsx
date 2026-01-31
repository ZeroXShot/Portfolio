'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Github, Lock, ExternalLink, Calendar, ChevronRight } from 'lucide-react'
import { Container, Button, Badge, Card } from '@/components/ui'
import type { Project } from '@/types'

interface Props {
  project: Project
}

export function ProjectDetailContent({ project }: Props) {
  return (
    <>
      {/* Hero con imagen */}
      <section className="relative">
        {/* Imagen de fondo */}
        <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
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
              href="/proyectos"
              className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a proyectos
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`
                  inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                  ${
                    project.githubVisibility === 'public'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-dark-800/80 text-dark-300 border border-dark-700'
                  }
                `}
              >
                {project.githubVisibility === 'public' ? (
                  <>
                    <Github className="w-4 h-4" />
                    Repositorio Público
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Repositorio Privado
                  </>
                )}
              </span>
              {project.featured && (
                <Badge variant="primary" size="md">
                  Proyecto Destacado
                </Badge>
              )}
              <span className="flex items-center gap-1.5 text-dark-400">
                <Calendar className="w-4 h-4" />
                {project.date}
              </span>
            </div>

            {/* Título */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>

            {/* Descripción corta */}
            <p className="text-xl text-dark-300 mb-6 max-w-3xl">
              {project.shortDescription}
            </p>

            {/* Acciones */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && project.githubVisibility === 'public' && (
                <Button asChild size="lg">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    Ver en GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild variant="outline" size="lg">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Ver Demo / Publicación
                  </a>
                </Button>
              )}
            </div>
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
                  Sobre el proyecto
                </h2>
                <div className="prose-custom">
                  {project.description.split('\n\n').map((paragraph, index) => {
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

            {/* Sidebar - Info técnica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Tecnologías */}
              <Card padding="lg">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="primary" size="md">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Links */}
              <Card padding="lg">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Enlaces
                </h3>
                <ul className="space-y-3">
                  {project.githubUrl && (
                    <li>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors
                          ${project.githubVisibility === 'private' ? 'opacity-50 pointer-events-none' : ''}
                        `}
                      >
                        <Github className="w-5 h-5" />
                        <span>Repositorio GitHub</span>
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </a>
                      {project.githubVisibility === 'private' && (
                        <p className="text-xs text-dark-500 mt-1 flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          Repositorio privado
                        </p>
                      )}
                    </li>
                  )}
                  {project.liveUrl && (
                    <li>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Ver publicación</span>
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      </a>
                    </li>
                  )}
                </ul>
              </Card>

              {/* CTA */}
              <Card padding="lg" variant="gradient" className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  ¿Te interesa este proyecto?
                </h3>
                <p className="text-dark-400 text-sm mb-4">
                  Contáctame para más información o colaboraciones
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

      {/* Navegación a otros proyectos */}
      <section className="py-12 border-t border-dark-800">
        <Container>
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/proyectos">
                <ArrowLeft className="w-5 h-5" />
                Ver todos los proyectos
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
