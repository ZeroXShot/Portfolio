'use client'

import { motion } from 'motion/react'
import {
  Briefcase,
  GraduationCap,
  Award,
  Download,
  MapPin,
  Calendar,
  ChevronRight,
  Languages,
  Mic,
  Car,
} from 'lucide-react'
import {
  experiences,
  education,
  skillCategories,
  conferences,
  languages,
  additionalInfo,
  siteConfig,
} from '@/config'
import { Section, SectionHeader, Card, Button, Badge, Container } from '@/components/ui'

// Componente Timeline para experiencia
function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Línea vertical */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-dark-700 to-dark-800 transform md:-translate-x-1/2" />

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Punto en la línea */}
          <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950 transform -translate-x-1.5 md:-translate-x-1/2 z-10 shadow-glow-sm" />

          {/* Fecha - lado opuesto */}
          <div
            className={`hidden md:flex md:w-1/2 items-start ${
              index % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'
            }`}
          >
            <div className="flex items-center gap-2 text-dark-400">
              <Calendar className="w-4 h-4" />
              <span>
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
            <Card padding="lg" className="relative">
              {/* Flecha indicadora */}
              <div
                className={`hidden md:block absolute top-6 w-4 h-4 bg-dark-900 border-t border-l border-dark-800 transform rotate-45 ${
                  index % 2 === 0 ? '-right-2' : '-left-2'
                }`}
              />

              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/30 flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                  <p className="text-primary-400 font-medium">{exp.company}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-dark-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                    <span className="md:hidden flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-dark-300 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tecnologías */}
              {exp.technologies && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-800">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Componente para educación
function EducationSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {education.map((edu, index) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card padding="lg" className="h-full">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-accent-500/10 border border-accent-500/30 flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-accent-400 font-medium">{edu.institution}</p>
                <div className="flex items-center gap-4 mt-1 text-sm text-dark-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Honores */}
            {edu.honors && (
              <ul className="space-y-2">
                {edu.honors.map((honor, i) => (
                  <li key={i} className="flex items-start gap-2 text-dark-300 text-sm">
                    <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    {honor}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

// Componente para habilidades
function SkillsSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card padding="md" className="h-full">
            <h4 className="text-lg font-semibold text-white mb-4">{category.name}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline" size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

// Componente para conferencias
function ConferencesSection() {
  const speakerConferences = conferences.filter((c) => c.role === 'speaker')
  const attendeeConferences = conferences.filter((c) => c.role === 'attendee')

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Ponente */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card padding="lg" className="h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/30">
              <Mic className="w-5 h-5 text-green-400" />
            </div>
            <h4 className="text-lg font-semibold text-white">Como Ponente</h4>
          </div>
          <ul className="space-y-3">
            {speakerConferences.map((conf) => (
              <li key={conf.id} className="flex items-center justify-between">
                <span className="text-dark-300">{conf.name}</span>
                <Badge variant="success" size="sm">
                  {conf.date}
                </Badge>
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>

      {/* Asistente */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card padding="lg" className="h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
              <Award className="w-5 h-5 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-white">Como Asistente</h4>
          </div>
          <ul className="space-y-3">
            {attendeeConferences.map((conf) => (
              <li key={conf.id} className="flex items-center justify-between">
                <span className="text-dark-300">{conf.name}</span>
                <Badge variant="default" size="sm">
                  {conf.date}
                </Badge>
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </div>
  )
}

// Componente para idiomas e info adicional
function AdditionalInfoSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Idiomas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card padding="lg" className="h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
              <Languages className="w-5 h-5 text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-white">Idiomas</h4>
          </div>
          <ul className="space-y-3">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between">
                <span className="text-dark-300">{lang.name}</span>
                <Badge variant="secondary" size="sm">
                  {lang.level}
                </Badge>
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>

      {/* Información adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card padding="lg" className="h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/30">
              <Car className="w-5 h-5 text-orange-400" />
            </div>
            <h4 className="text-lg font-semibold text-white">Información adicional</h4>
          </div>
          <ul className="space-y-3">
            {additionalInfo.map((info, i) => (
              <li key={i} className="flex items-start gap-2 text-dark-300">
                <ChevronRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                {info}
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </div>
  )
}

export function TrayectoriaContent() {
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
              Mi Trayectoria
            </h1>
            <p className="text-xl text-dark-300 mb-8">
              Un recorrido por mi experiencia profesional, formación académica y las habilidades 
              que he desarrollado a lo largo de mi carrera en IA e ingeniería biomédica.
            </p>
            <Button asChild size="lg">
              <a href={siteConfig.personal.cv} download>
                <Download className="w-5 h-5" />
                Descargar CV completo
              </a>
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Experiencia laboral */}
      <Section id="experiencia">
        <SectionHeader
          title="Experiencia Profesional"
          subtitle="Mi trayectoria en el desarrollo de IA y software médico"
          align="left"
        />
        <ExperienceTimeline />
      </Section>

      {/* Educación */}
      <Section id="educacion" className="bg-gradient-futuristic">
        <SectionHeader
          title="Formación Académica"
          subtitle="Base sólida en IA e ingeniería biomédica"
        />
        <EducationSection />
      </Section>

      {/* Habilidades */}
      <Section id="habilidades">
        <SectionHeader
          title="Habilidades Técnicas"
          subtitle="Stack tecnológico y competencias profesionales"
        />
        <SkillsSection />
      </Section>

      {/* Conferencias */}
      <Section id="conferencias" className="bg-gradient-futuristic">
        <SectionHeader
          title="Conferencias y Congresos"
          subtitle="Participación activa en la comunidad"
        />
        <ConferencesSection />
      </Section>

      {/* Info adicional */}
      <Section id="adicional">
        <SectionHeader
          title="Información Adicional"
          subtitle="Idiomas y otros datos relevantes"
        />
        <AdditionalInfoSection />
      </Section>

      {/* CTA Descargar CV */}
      <Section spacing="xl" className="bg-gradient-mesh">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Quieres saber más?
          </h2>
          <p className="text-lg text-dark-400 mb-8 max-w-xl mx-auto">
            Descarga mi CV completo para obtener todos los detalles de mi experiencia y formación.
          </p>
          <Button asChild size="lg">
            <a href={siteConfig.personal.cv} download>
              <Download className="w-5 h-5" />
              Descargar CV en PDF
            </a>
          </Button>
        </motion.div>
      </Section>
    </>
  )
}
