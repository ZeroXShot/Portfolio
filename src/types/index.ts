/**
 * Tipos globales del portfolio
 * Definiciones TypeScript para configuración y datos
 */

// ============================================
// DATOS PERSONALES Y CONTACTO
// ============================================

export interface SocialLink {
  name: string
  url: string
  icon: string // Nombre del icono de Lucide
}

export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  location: string
  email: string
  phone: string
  bio: string
  bioExtended: string
  avatar?: string
  cv: string
}

export interface SiteConfig {
  personal: PersonalInfo
  social: SocialLink[]
  navigation: NavigationItem[]
  footer: FooterConfig
}

// ============================================
// NAVEGACIÓN
// ============================================

export interface NavigationItem {
  label: string
  href: string
  icon?: string
}

export interface FooterConfig {
  copyright: string
  legalLinks: NavigationItem[]
}

// ============================================
// EXPERIENCIA LABORAL
// ============================================

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | 'Actualidad'
  description: string[]
  technologies?: string[]
  logo?: string
}

// ============================================
// EDUCACIÓN
// ============================================

export interface Education {
  id: string
  institution: string
  degree: string
  location: string
  startDate: string
  endDate: string
  honors?: string[]
  description?: string
  logo?: string
}

// ============================================
// PROYECTOS
// ============================================

export type GithubVisibility = 'public' | 'private' | 'none'

export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  githubVisibility: GithubVisibility
  liveUrl?: string
  featured: boolean
  date: string
  readme?: string // Ruta al archivo README.md
}

export interface ProjectsConfig {
  gridColumns: number
  itemsPerPage: number
  featuredCount: number
}

// ============================================
// CURSOS Y CERTIFICACIONES
// ============================================

export interface Course {
  id: string
  title: string
  institution: string
  description: string
  date: string
  image: string
  certificateUrl?: string
  skills?: string[]
}

export interface CoursesConfig {
  gridColumns: number
  gridRows: number
}

// ============================================
// PUBLICACIONES
// ============================================

export interface Publication {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  image: string
  date: string
  url: string
  type: 'paper' | 'article' | 'conference' | 'other'
  authors?: string[]
  journal?: string
}

export interface PublicationsConfig {
  gridColumns: number
  itemsPerPage: number
}

// ============================================
// HABILIDADES
// ============================================

export interface Skill {
  name: string
  category: 'technical' | 'soft' | 'language'
  level?: number // 1-5
}

export interface SkillCategory {
  name: string
  skills: string[]
}

// ============================================
// CONFERENCIAS
// ============================================

export interface Conference {
  id: string
  name: string
  role: 'speaker' | 'attendee'
  date: string
  location?: string
}

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// ============================================
// GRIDS CONFIGURABLES
// ============================================

export interface GridConfig {
  columns: {
    default: number
    sm: number
    md: number
    lg: number
    xl: number
  }
  gap: string
}
