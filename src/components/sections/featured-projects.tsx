'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github, Lock, ExternalLink } from 'lucide-react'
import { getFeaturedProjects } from '@/config'
import { Section, SectionHeader, Card, CardContent, Badge, Button } from '@/components/ui'
import type { Project } from '@/types'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden h-full flex flex-col">
        {/* Imagen */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay con icono de visibilidad */}
          <div className="absolute top-4 right-4">
            <span
              className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                ${
                  project.githubVisibility === 'public'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-dark-800/80 text-dark-300 border border-dark-700'
                }
              `}
            >
              {project.githubVisibility === 'public' ? (
                <>
                  <Github className="w-3.5 h-3.5" />
                  Público
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  Privado
                </>
              )}
            </span>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
        </div>

        <CardContent className="flex-1 flex flex-col p-6">
          {/* Título */}
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>

          {/* Descripción */}
          <p className="text-dark-400 mb-4 flex-1">
            {project.shortDescription}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" size="sm">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-3 pt-4 border-t border-dark-800">
            <Button asChild variant="primary" size="sm" className="flex-1">
              <Link href={`/proyectos/${project.slug}`}>
                Ver más
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            {project.githubUrl && project.githubVisibility === 'public' && (
              <Button asChild variant="ghost" size="icon">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver en GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild variant="ghost" size="icon">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function FeaturedProjectsSection() {
  const projects = getFeaturedProjects()

  return (
    <Section id="proyectos-destacados" withPattern>
      <SectionHeader
        title="Proyectos Destacados"
        subtitle="Una selección de mis trabajos más relevantes en IA y desarrollo de software"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
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
          <Link href="/proyectos">
            Ver todos los proyectos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </Section>
  )
}
