import type { Publication, PublicationsConfig } from '@/types'

/**
 * Configuración del grid de publicaciones
 */
export const publicationsConfig: PublicationsConfig = {
  gridColumns: 2,
  itemsPerPage: 6, // 2 columnas x 3 filas
}

/**
 * Lista de publicaciones
 * Añade nuevas publicaciones al array para que aparezcan automáticamente
 */
export const publications: Publication[] = [
  {
    id: 'ieee-eeg-stress',
    slug: 'deep-learning-eeg-stress-ieee',
    title:
      'A Deep Learning Approach to Estimate Multi-Level Mental Stress from EEG using Serious Games',
    shortDescription:
      'Publicación en IEEE Journal of Biomedical and Health Informatics sobre clasificación de estrés mental mediante Deep Learning y EEG.',
    description: `Este artículo presenta un enfoque novedoso basado en Deep Learning para estimar múltiples niveles de estrés mental a partir de señales EEG utilizando Serious Games como estímulo controlado.

## Resumen

El estrés mental es un problema de salud creciente en la sociedad moderna. Este trabajo propone un sistema de clasificación automática de niveles de estrés mediante el análisis de señales electroencefalográficas (EEG) durante sesiones de juego.

## Metodología

- Adquisición de señales EEG de múltiples participantes
- Inducción de estrés mediante Serious Games diseñados específicamente
- Preprocesamiento y extracción de características espectrales y temporales
- Arquitectura de Deep Learning para clasificación multiclase

## Resultados

El modelo propuesto alcanza una precisión significativamente superior a los métodos tradicionales de Machine Learning, demostrando la viabilidad del uso de EEG y Serious Games para la evaluación objetiva del estrés mental.

## Impacto

Este trabajo contribuye al campo de la neurociencia computacional y tiene aplicaciones potenciales en:
- Monitorización de salud mental
- Interfaces cerebro-computadora
- Evaluación de bienestar en entornos laborales`,
    image: '/images/publications/ieee-eeg.webp',
    date: '2024',
    url: 'https://ieeexplore.ieee.org/abstract/document/10510582',
    type: 'paper',
    authors: [
      'Joaquín J. González',
      // Añadir otros coautores
    ],
    journal: 'IEEE Journal of Biomedical and Health Informatics',
  },
  {
    id: 'caseib-2023',
    slug: 'clasificacion-eeg-estres-caseib',
    title:
      'Clasificación EEG de estrés mental inducido por un Serious Game mediante Deep Learning',
    shortDescription:
      'Comunicación en CASEIB 2023 sobre clasificación de estrés mediante EEG y Deep Learning.',
    description: `Comunicación presentada en el Congreso Anual de la Sociedad Española de Ingeniería Biomédica (CASEIB 2023) sobre la clasificación de estrés mental mediante análisis de señales EEG.

## Resumen

Este trabajo presenta un sistema de clasificación de estrés mental basado en Deep Learning, utilizando señales EEG adquiridas durante la interacción con un Serious Game diseñado para inducir diferentes niveles de estrés de forma controlada.

## Contribuciones principales

- Protocolo experimental para inducción controlada de estrés
- Pipeline de procesamiento de señales EEG
- Arquitectura de red neuronal optimizada para clasificación temporal

## Contexto

CASEIB es el congreso de referencia de la Sociedad Española de Ingeniería Biomédica, reuniendo a investigadores y profesionales del ámbito de la ingeniería aplicada a la medicina y la salud.`,
    image: '/images/publications/caseib-2023.webp',
    date: '2023',
    url: 'https://repositorio.upct.es/entities/publication/9e00f08f-2f97-49ac-9534-77da5f9dcd0c',
    type: 'conference',
    authors: ['Joaquín J. González'],
    journal: 'CASEIB 2023',
  },
]

/**
 * Obtener publicaciones para mostrar en la página de inicio
 */
export const getFeaturedPublications = (count: number = 2): Publication[] => {
  return publications.slice(0, count)
}

/**
 * Obtener publicación por slug
 */
export const getPublicationBySlug = (slug: string): Publication | undefined => {
  return publications.find((p) => p.slug === slug)
}

/**
 * Obtener todos los slugs de publicaciones
 */
export const getAllPublicationSlugs = (): string[] => {
  return publications.map((p) => p.slug)
}
