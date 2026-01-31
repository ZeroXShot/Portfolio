'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github, Lock, ExternalLink, Search, Filter } from 'lucide-react'
import { projects, projectsConfig } from '@/config'
import { Section, SectionHeader, Card, CardContent, Badge, Button, Container, Input } from '@/components/ui'
import type { Project, GithubVisibility } from '@/types'

// Filtros disponibles
const visibilityFilters: { label: string; value: GithubVisibility | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Públicos', value: 'public' },
  { label: 'Privados', value: 'private' },
]

// Obtener tecnologías únicas para filtros
const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
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
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="primary" size="sm">
                Destacado
              </Badge>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
        </div>

        <CardContent className="flex-1 flex flex-col p-6">
          {/* Fecha */}
          <span className="text-sm text-dark-500 mb-2">{project.date}</span>

          {/* Título */}
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>

          {/* Descripción */}
          <p className="text-dark-400 mb-4 flex-1 line-clamp-3">
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

export function ProyectosContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState<GithubVisibility | 'all'>('all')
  const [techFilter, setTechFilter] = useState<string | null>(null)

  // Filtrar proyectos
  const filteredProjects = projects.filter((project) => {
    // Búsqueda
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query))
      if (!matchesSearch) return false
    }

    // Filtro de visibilidad
    if (visibilityFilter !== 'all' && project.githubVisibility !== visibilityFilter) {
      return false
    }

    // Filtro de tecnología
    if (techFilter && !project.technologies.includes(techFilter)) {
      return false
    }

    return true
  })

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Mis Proyectos
            </h1>
            <p className="text-xl text-dark-300">
              Una colección de proyectos en IA, desarrollo de software y aplicaciones médicas.
              Desde sistemas de segmentación de imágenes hasta investigación en neurociencia.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filtros */}
      <Section spacing="sm" className="border-b border-dark-800">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Búsqueda */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
            <Input
              type="search"
              placeholder="Buscar proyectos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
            />
          </div>

          {/* Filtros de visibilidad */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 mr-4">
              <Filter className="w-4 h-4 text-dark-500" />
              <span className="text-sm text-dark-400">Filtrar:</span>
            </div>
            {visibilityFilters.map((filter) => (
              <Button
                key={filter.value}
                variant={visibilityFilter === filter.value ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setVisibilityFilter(filter.value)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Filtros de tecnología */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            variant={techFilter === null ? 'outline' : 'ghost'}
            size="sm"
            onClick={() => setTechFilter(null)}
          >
            Todas las tecnologías
          </Button>
          {allTechnologies.slice(0, 10).map((tech) => (
            <Button
              key={tech}
              variant={techFilter === tech ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setTechFilter(techFilter === tech ? null : tech)}
            >
              {tech}
            </Button>
          ))}
        </div>
      </Section>

      {/* Grid de proyectos */}
      <Section>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-dark-400">
            Mostrando {filteredProjects.length} de {projects.length} proyectos
          </p>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${projectsConfig.gridColumns} gap-6`}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-12 h-12 text-dark-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No se encontraron proyectos
              </h3>
              <p className="text-dark-400">
                Intenta ajustar los filtros o la búsqueda
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('')
                  setVisibilityFilter('all')
                  setTechFilter(null)
                }}
              >
                Limpiar filtros
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </>
  )
}
