import type { Project, ProjectsConfig } from '@/types'

/**
 * Configuración del grid de proyectos
 * Modifica estos valores para cambiar el layout
 */
export const projectsConfig: ProjectsConfig = {
  gridColumns: 3,
  itemsPerPage: 9, // 3 columnas x 3 filas por defecto
  featuredCount: 3, // Proyectos destacados en la página de inicio
}

/**
 * Lista de proyectos
 * Añade nuevos proyectos al array para que aparezcan automáticamente
 */
export const projects: Project[] = [
  {
    id: 'fluxus',
    slug: 'fluxus',
    title: 'Fluxus - Segmentación Médica con IA',
    shortDescription:
      'Sistema de IA para segmentación automática de estructuras anatómicas en imágenes médicas.',
    description: `Fluxus es el proyecto principal de Avamed Synergy, una plataforma de inteligencia artificial dedicada a la segmentación automática de estructuras anatómicas en el ámbito médico.

## Características principales

- **Segmentación automática** de estructuras anatómicas en imágenes médicas (CT, MRI)
- **Arquitectura de microservicios** con FastAPI y Triton Inference Server
- **Infraestructura segura** con Nginx, certificados SSL y gestión de colas
- **Monitorización completa** con Prometheus, Grafana y sistema de logs
- **Testing automatizado** con Jenkins y CI/CD

## Stack tecnológico

El proyecto utiliza tecnologías de vanguardia para garantizar rendimiento, escalabilidad y seguridad:

- **Backend:** Python, FastAPI, PyTorch
- **Infraestructura:** Docker, Nginx, Triton Inference Server
- **Monitorización:** Prometheus, Grafana, Jenkins
- **Seguridad:** SSL/TLS, autenticación, gestión de accesos`,
    image: '/images/projects/fluxus.webp',
    technologies: [
      'Python',
      'PyTorch',
      'FastAPI',
      'Docker',
      'Triton',
      'Prometheus',
      'Grafana',
    ],
    githubVisibility: 'private',
    featured: true,
    date: '2024',
  },
  {
    id: 'bohemia',
    slug: 'bohemia',
    title: 'Bohemia - Análisis de Aneurismas',
    shortDescription:
      'Sistema de cuantificación del índice de rotura del Aneurisma de Arteria Aorta.',
    description: `Bohemia es un proyecto de alto impacto nacional dedicado a la cuantificación del índice de rotura del Aneurisma de Arteria Aorta mediante técnicas de IA y análisis de imagen médica.

## Objetivos del proyecto

- Análisis automático de aneurismas de arteria aorta
- Cálculo del índice de riesgo de rotura
- Integración con sistemas hospitalarios

## Tecnologías utilizadas

- Unity (C#) para visualización 3D
- Python para procesamiento de imágenes
- C++ para algoritmos de alto rendimiento`,
    image: '/images/projects/bohemia.webp',
    technologies: ['Unity', 'C#', 'Python', 'C++', 'VTK', 'ITK'],
    githubVisibility: 'private',
    featured: true,
    date: '2024',
  },
  {
    id: 'bariatric',
    slug: 'bariatric',
    title: 'Bariatric - Análisis Intestinal',
    shortDescription:
      'Obtención automática de la centerline del intestino delgado para cirugía bariátrica.',
    description: `Bariatric es un proyecto especializado en la obtención de la centerline del intestino delgado, fundamental para la planificación de cirugías bariátricas.

## Características

- Algoritmos de segmentación para estructuras tubulares
- Cálculo de centerline mediante modelos matemáticos optimizados
- Visualización 3D interactiva

## Stack tecnológico

- Unity con C# para la interfaz de visualización
- Python y C++ para el procesamiento de imágenes`,
    image: '/images/projects/bariatric.webp',
    technologies: ['Unity', 'C#', 'Python', 'C++', 'VTK'],
    githubVisibility: 'private',
    featured: true,
    date: '2024',
  },
  {
    id: 'armia',
    slug: 'armia',
    title: 'ARMIA - Brazo Sensorizado',
    shortDescription:
      'Brazo sensorizado para medición de actividad cinemática y muscular.',
    description: `ARMIA es un proyecto de robótica biomédica enfocado en el diseño y desarrollo de un brazo sensorizado que permite la medición de la actividad cinemática y muscular.

## Componentes principales

- Sensores EMG para actividad muscular
- IMU para tracking de movimiento
- Sistema de adquisición con Raspberry Pi

## Aplicaciones

- Rehabilitación física
- Investigación en biomecánica
- Análisis de patrones de movimiento`,
    image: '/images/projects/armia.webp',
    technologies: ['Python', 'Arduino', 'Raspberry Pi', 'EMG', 'IMU', 'MATLAB'],
    githubVisibility: 'private',
    featured: false,
    date: '2022',
  },
  {
    id: 'eeg-stress',
    slug: 'eeg-stress-classification',
    title: 'Clasificación EEG de Estrés',
    shortDescription:
      'Sistema de Deep Learning para clasificación de estrés mental mediante señales EEG.',
    description: `Proyecto de investigación publicado para la clasificación de niveles de estrés mental inducido por un Serious Game mediante técnicas de Deep Learning aplicadas a señales EEG.

## Publicaciones asociadas

- CASEIB 2023: "Clasificación EEG de estrés mental inducido por un Serious Game mediante Deep Learning"
- IEEE Journal of Biomedical and Health Informatics: "A Deep Learning Approach to Estimate Multi-Level Mental Stress from EEG using Serious Games"

## Metodología

- Adquisición de señales EEG durante sesiones de juego
- Preprocesamiento y extracción de características
- Modelos de Deep Learning para clasificación multiclase`,
    image: '/images/projects/eeg-stress.webp',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'EEG', 'Signal Processing'],
    githubUrl: 'https://github.com/joaquin-gonzalez/eeg-stress',
    githubVisibility: 'public',
    liveUrl:
      'https://ieeexplore.ieee.org/abstract/document/10510582',
    featured: false,
    date: '2023',
  },
  {
    id: 'portfolio',
    slug: 'portfolio',
    title: 'Portfolio Personal',
    shortDescription:
      'Portfolio web profesional con diseño futurista y arquitectura modular.',
    description: `Este portfolio web ha sido diseñado con una estética futurista y minimalista, orientado a causar una excelente primera impresión técnica y visual.

## Características

- Diseño responsive y modular
- Animaciones fluidas con Motion
- Configuración mediante archivos sin tocar código
- Soporte para markdown en descripciones

## Stack tecnológico

- Next.js 15 con App Router
- Tailwind CSS v4
- TypeScript
- Motion para animaciones`,
    image: '/images/projects/portfolio.webp',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    githubUrl: 'https://github.com/joaquin-gonzalez/portfolio',
    githubVisibility: 'public',
    featured: false,
    date: '2026',
  },
]

/**
 * Obtener proyectos destacados
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured).slice(0, projectsConfig.featuredCount)
}

/**
 * Obtener proyecto por slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug)
}

/**
 * Obtener todos los slugs de proyectos (para generación estática)
 */
export const getAllProjectSlugs = (): string[] => {
  return projects.map((p) => p.slug)
}
