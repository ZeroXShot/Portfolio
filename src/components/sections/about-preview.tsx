'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, Award, Briefcase, GraduationCap, Code } from 'lucide-react'
import { siteConfig, experiences, education, skillCategories } from '@/config'
import { Section, SectionHeader, Card, Button, Badge } from '@/components/ui'

const highlights = [
  {
    icon: Briefcase,
    title: 'Experiencia',
    value: '+4 años',
    description: 'en desarrollo de IA y software',
  },
  {
    icon: GraduationCap,
    title: 'Formación',
    value: 'MsC + Grado',
    description: 'IA (UPM) + Ing. Biomédica (UA)',
  },
  {
    icon: Award,
    title: 'Reconocimientos',
    value: '2 Premios',
    description: 'Mejor expediente + Premio GVA',
  },
  {
    icon: Code,
    title: 'Stack Principal',
    value: 'Python + IA',
    description: 'PyTorch, FastAPI, Docker',
  },
]

export function AboutPreviewSection() {
  const latestExperience = experiences[0]
  const latestEducation = education[0]
  const technicalSkills = skillCategories.find((c) => c.name === 'Machine Learning & IA')?.skills || []

  return (
    <Section id="sobre-mi" className="bg-gradient-futuristic">
      <SectionHeader
        title="Sobre Mí"
        subtitle="Desarrollador de IA apasionado por crear soluciones que impactan en el ámbito médico"
      />

      {/* Highlights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card variant="glass" padding="md" className="text-center h-full">
              <item.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-sm text-dark-400">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Card variant="gradient" padding="lg">
          <p className="text-lg text-dark-200 leading-relaxed whitespace-pre-line">
            {siteConfig.personal.bioExtended}
          </p>
        </Card>
      </motion.div>

      {/* Preview de experiencia y educación */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Última experiencia */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card padding="lg" className="h-full">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/30">
                <Briefcase className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <Badge variant="primary" size="sm" className="mb-2">
                  Posición actual
                </Badge>
                <h3 className="text-xl font-semibold text-white">
                  {latestExperience.position}
                </h3>
                <p className="text-dark-400">{latestExperience.company}</p>
                <p className="text-sm text-dark-500">
                  {latestExperience.startDate} - {latestExperience.endDate}
                </p>
              </div>
            </div>
            <p className="text-dark-300 line-clamp-3">
              {latestExperience.description[0]}
            </p>
          </Card>
        </motion.div>

        {/* Última educación */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card padding="lg" className="h-full">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-accent-500/10 border border-accent-500/30">
                <GraduationCap className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <Badge variant="secondary" size="sm" className="mb-2">
                  Formación reciente
                </Badge>
                <h3 className="text-xl font-semibold text-white">
                  {latestEducation.degree}
                </h3>
                <p className="text-dark-400">{latestEducation.institution}</p>
                <p className="text-sm text-dark-500">
                  {latestEducation.startDate} - {latestEducation.endDate}
                </p>
              </div>
            </div>
            {latestEducation.honors && (
              <ul className="space-y-1">
                {latestEducation.honors.slice(0, 2).map((honor, i) => (
                  <li key={i} className="text-dark-300 text-sm flex items-start gap-2">
                    <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    {honor}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </motion.div>
      </div>

      {/* Skills preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-dark-400 mb-4">Tecnologías principales</p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {technicalSkills.map((skill) => (
            <Badge key={skill} variant="outline" size="md">
              {skill}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center"
      >
        <Button asChild variant="outline" size="lg">
          <Link href="/trayectoria">
            Ver trayectoria completa
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </Section>
  )
}
