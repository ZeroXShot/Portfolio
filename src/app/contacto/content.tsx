'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import { siteConfig } from '@/config'
import { Section, Card, Button, Input, Textarea, Label, FormError, Container } from '@/components/ui'

// Esquema de validación
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Introduce un email válido'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Linkedin,
  Github,
  Mail,
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simular envío (reemplazar con tu API real)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // Aquí iría la lógica real de envío
      console.log('Form data:', data)
      
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card padding="lg">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Envíame un mensaje
      </h2>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 mb-6"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <p>¡Mensaje enviado correctamente! Te responderé lo antes posible.</p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 mb-6"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>Ha ocurrido un error. Por favor, inténtalo de nuevo o contacta directamente por email.</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nombre */}
        <div>
          <Label htmlFor="name" required>
            Nombre
          </Label>
          <Input
            id="name"
            placeholder="Tu nombre completo"
            error={!!errors.name}
            {...register('name')}
          />
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            error={!!errors.email}
            {...register('email')}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </div>

        {/* Asunto */}
        <div>
          <Label htmlFor="subject" required>
            Asunto
          </Label>
          <Input
            id="subject"
            placeholder="¿Sobre qué quieres hablar?"
            error={!!errors.subject}
            {...register('subject')}
          />
          {errors.subject && <FormError>{errors.subject.message}</FormError>}
        </div>

        {/* Mensaje */}
        <div>
          <Label htmlFor="message" required>
            Mensaje
          </Label>
          <Textarea
            id="message"
            placeholder="Cuéntame más sobre tu proyecto o consulta..."
            rows={6}
            error={!!errors.message}
            {...register('message')}
          />
          {errors.message && <FormError>{errors.message.message}</FormError>}
        </div>

        {/* Submit */}
        <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
          <Send className="w-5 h-5" />
          Enviar mensaje
        </Button>
      </form>
    </Card>
  )
}

function ContactInfo() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.personal.email,
      href: `mailto:${siteConfig.personal.email}`,
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: siteConfig.personal.phone,
      href: `tel:${siteConfig.personal.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: siteConfig.personal.location,
      href: null,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Info de contacto */}
      <Card padding="lg">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Información de contacto
        </h2>
        <ul className="space-y-4">
          {contactItems.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-dark-800/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/30 group-hover:bg-primary-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">{item.label}</p>
                    <p className="text-dark-200 group-hover:text-primary-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 p-3">
                  <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/30">
                    <item.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">{item.label}</p>
                    <p className="text-dark-200">{item.value}</p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Card>

      {/* Redes sociales */}
      <Card padding="lg">
        <h2 className="text-xl font-semibold text-white mb-4">
          Sígueme en redes
        </h2>
        <div className="flex gap-3">
          {siteConfig.social.map((social) => {
            const Icon = iconMap[social.icon]
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-dark-800 border border-dark-700 text-dark-300 hover:text-primary-400 hover:border-primary-500/30 hover:bg-dark-700 transition-all"
              >
                {Icon && <Icon className="w-5 h-5" />}
                <span className="hidden sm:inline">{social.name}</span>
              </a>
            )
          })}
        </div>
      </Card>

      {/* Disponibilidad */}
      <Card padding="lg" variant="gradient">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-full bg-green-500/20 border border-green-500/30">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">
              Disponible para proyectos
            </h3>
            <p className="text-dark-400 text-sm">
              Actualmente estoy abierto a nuevas oportunidades y colaboraciones 
              en proyectos de IA y desarrollo de software.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export function ContactoContent() {
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
              Contacto
            </h1>
            <p className="text-xl text-dark-300">
              ¿Tienes un proyecto interesante o simplemente quieres saludar? 
              Me encantaría escucharte. Completa el formulario o utiliza cualquiera 
              de los métodos de contacto disponibles.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contenido */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </Section>
    </>
  )
}
