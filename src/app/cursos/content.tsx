'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Award, ExternalLink, Calendar, Building } from 'lucide-react'
import { courses, coursesConfig } from '@/config'
import { Section, SectionHeader, Card, Button, Badge, Container } from '@/components/ui'
import type { Course } from '@/types'

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="group overflow-hidden h-full flex flex-col">
        {/* Imagen del diploma */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
          
          {/* Badge de institución */}
          <div className="absolute bottom-4 left-4 right-4">
            <Badge variant="secondary" size="md" className="bg-dark-900/80 backdrop-blur-sm">
              <Building className="w-3.5 h-3.5 mr-1" />
              {course.institution}
            </Badge>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Fecha */}
          <div className="flex items-center gap-2 text-sm text-dark-500 mb-3">
            <Calendar className="w-4 h-4" />
            {course.date}
          </div>

          {/* Título */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
            {course.title}
          </h3>

          {/* Descripción */}
          <p className="text-dark-400 mb-4 flex-1">
            {course.description}
          </p>

          {/* Skills */}
          {course.skills && course.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {course.skills.map((skill) => (
                <Badge key={skill} variant="default" size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {/* Link al certificado */}
          {course.certificateUrl && (
            <div className="pt-4 border-t border-dark-800">
              <Button asChild variant="outline" size="sm" className="w-full">
                <a
                  href={course.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Award className="w-4 h-4" />
                  Ver certificado
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  )
}

export function CursosContent() {
  // Agrupar cursos por institución
  const coursesByInstitution = courses.reduce((acc, course) => {
    if (!acc[course.institution]) {
      acc[course.institution] = []
    }
    acc[course.institution].push(course)
    return acc
  }, {} as Record<string, Course[]>)

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-400 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              {courses.length} certificaciones
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Formación Continua
            </h1>
            <p className="text-xl text-dark-300">
              Certificaciones y cursos que complementan mi formación académica, 
              abarcando desde IA y Machine Learning hasta ciberseguridad y desarrollo web.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Estadísticas */}
      <Section spacing="sm" className="border-b border-dark-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total certificaciones', value: courses.length },
            { label: 'Instituciones', value: Object.keys(coursesByInstitution).length },
            { label: 'En IA/ML', value: courses.filter(c => c.skills?.some(s => ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch'].includes(s))).length },
            { label: 'En Desarrollo', value: courses.filter(c => c.skills?.some(s => ['JavaScript', 'HTML', 'CSS', 'Unity'].includes(s))).length },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-gradient">{stat.value}</p>
              <p className="text-dark-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Grid de cursos */}
      <Section>
        <SectionHeader
          title="Todos los Cursos"
          subtitle="Cada certificación representa un paso más en mi desarrollo profesional"
        />

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${coursesConfig.gridColumns} gap-6`}>
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="lg" className="bg-gradient-futuristic">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            La formación nunca termina
          </h2>
          <p className="text-dark-400 mb-6">
            Continuamente busco nuevas oportunidades de aprendizaje para mantenerme 
            actualizado en las últimas tecnologías y metodologías.
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="https://www.linkedin.com/in/joaquín-jesús-gonzález" target="_blank" rel="noopener noreferrer">
              Ver más en LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </Section>
    </>
  )
}
