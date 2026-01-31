'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, ExternalLink } from 'lucide-react'
import { getFeaturedCourses } from '@/config'
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui'
import type { Course } from '@/types'

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
            <Badge variant="secondary" size="sm" className="bg-dark-900/80 backdrop-blur-sm">
              <Award className="w-3 h-3 mr-1" />
              {course.institution}
            </Badge>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Fecha */}
          <span className="text-sm text-dark-500 mb-2">{course.date}</span>

          {/* Título */}
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {course.title}
          </h3>

          {/* Descripción */}
          <p className="text-sm text-dark-400 mb-4 flex-1 line-clamp-3">
            {course.description}
          </p>

          {/* Skills */}
          {course.skills && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {course.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="default" size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          {/* Link al certificado */}
          {course.certificateUrl && (
            <Button asChild variant="ghost" size="sm" className="w-fit">
              <a
                href={course.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Ver certificado
              </a>
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  )
}

export function CoursesPreviewSection() {
  const courses = getFeaturedCourses(3)

  return (
    <Section id="cursos-destacados" className="bg-gradient-futuristic">
      <SectionHeader
        title="Formación Continua"
        subtitle="Certificaciones y cursos que complementan mi formación académica"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
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
          <Link href="/cursos">
            Ver todos los cursos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </Section>
  )
}
