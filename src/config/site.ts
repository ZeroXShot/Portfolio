import type { SiteConfig } from '@/types'

/**
 * Configuración general del sitio
 * Modifica estos valores para personalizar tu portfolio
 */
export const siteConfig: SiteConfig = {
  personal: {
    name: 'Joaquín Jesús González Vázquez de Agredos',
    title: 'Senior AI Developer & Biomedical Engineer',
    subtitle: 'Desarrollador de Inteligencia Artificial e Ingeniero Biomédico',
    location: 'Alicante, España',
    email: 'joajegonvaz999@gmail.com',
    phone: '+34 633 16 37 01',
    bio: 'Desarrollador de Inteligencia Artificial e Ingeniero Biomédico con experiencia en proyectos de alto impacto nacional. Especializado en segmentación de imágenes médicas, Deep Learning y arquitecturas de IA en producción.',
    bioExtended: `Desarrollador de Inteligencia Artificial e Ingeniero Biomédico con experiencia en proyectos de alto impacto nacional. Responsable del desarrollo del proyecto Fluxus de Avamed Synergy y su IA (integración y securización), así como los proyectos principales de la empresa Bariatric y Bohemia.

Con experiencia en IA en Hospitales y Grupos de Investigación, poseo sólidos conocimientos de ciberseguridad y sistemas aplicados al entorno profesional. También desarrollo aplicaciones software (backend – frontend) y agentes de IA como hobby.

Mi formación incluye un Máster en Inteligencia Artificial por la Universidad Politécnica de Madrid (con Matrícula de Honor en Visión por Computador) y un Grado en Ingeniería Biomédica por la Universidad de Alicante (Premio extraordinario al mejor expediente académico).`,
    avatar: '/images/avatar.webp',
    cv: '/cv/curriculum_es.pdf',
  },

  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joaquín-jesús-gonzález',
      icon: 'Linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/joaquin-gonzalez',
      icon: 'Github',
    },
    {
      name: 'Email',
      url: 'mailto:joajegonvaz999@gmail.com',
      icon: 'Mail',
    },
  ],

  navigation: [
    { label: 'Inicio', href: '/', icon: 'Home' },
    { label: 'Trayectoria', href: '/trayectoria', icon: 'Briefcase' },
    { label: 'Proyectos', href: '/proyectos', icon: 'FolderGit2' },
    { label: 'Cursos', href: '/cursos', icon: 'GraduationCap' },
    { label: 'Publicaciones', href: '/publicaciones', icon: 'FileText' },
    { label: 'Contacto', href: '/contacto', icon: 'Send' },
  ],

  footer: {
    copyright: `© ${new Date().getFullYear()} Joaquín González. Todos los derechos reservados.`,
    legalLinks: [
      { label: 'Aviso Legal', href: '/legal/aviso-legal' },
      { label: 'Política de Privacidad', href: '/legal/privacidad' },
      { label: 'Política de Cookies', href: '/legal/cookies' },
    ],
  },
}

// Metadatos SEO
export const seoConfig = {
  title: 'Joaquín González | Senior AI Developer & Biomedical Engineer',
  description:
    'Portfolio profesional de Joaquín Jesús González Vázquez de Agredos. Desarrollador de Inteligencia Artificial e Ingeniero Biomédico especializado en Deep Learning, segmentación de imágenes médicas y arquitecturas de IA en producción.',
  keywords: [
    'Desarrollador IA',
    'Ingeniero Biomédico',
    'Deep Learning',
    'Machine Learning',
    'Python',
    'PyTorch',
    'TensorFlow',
    'Segmentación Médica',
    'Computer Vision',
    'Alicante',
    'España',
  ],
  ogImage: '/images/og-image.webp',
  siteUrl: 'https://joaquingonzalez.dev',
}
