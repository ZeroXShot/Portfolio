import type { Course, CoursesConfig } from '@/types'

/**
 * Configuración del grid de cursos
 * gridColumns: número de columnas
 * gridRows: número de filas visibles (N para mostrar todas)
 */
export const coursesConfig: CoursesConfig = {
  gridColumns: 3,
  gridRows: 3, // 3 filas x N columnas
}

/**
 * Lista de cursos y certificaciones
 * Añade nuevos cursos al array para que aparezcan automáticamente
 */
export const courses: Course[] = [
  {
    id: 'harvard-cs50ai',
    title: 'Harvard CS50AI',
    institution: 'Harvard University',
    description:
      'Curso de Inteligencia Artificial con Python. Cubre fundamentos de IA, búsqueda, conocimiento, incertidumbre, optimización, aprendizaje automático, redes neuronales y procesamiento del lenguaje natural.',
    date: '2023',
    image: '/images/courses/harvard-cs50ai.webp',
    certificateUrl: 'https://certificates.cs50.io/',
    skills: ['Python', 'Machine Learning', 'Neural Networks', 'NLP'],
  },
  {
    id: 'tensorflow-developer',
    title: 'TensorFlow Developer Certificate',
    institution: 'Google',
    description:
      'Certificación oficial de Google que valida competencias en desarrollo con TensorFlow, incluyendo construcción y entrenamiento de redes neuronales, procesamiento de imágenes y NLP.',
    date: '2023',
    image: '/images/courses/tensorflow-developer.webp',
    certificateUrl: 'https://www.tensorflow.org/certificate',
    skills: ['TensorFlow', 'Deep Learning', 'Computer Vision', 'NLP'],
  },
  {
    id: 'ml-datascience-python',
    title: 'Machine Learning: Data Science en Python',
    institution: 'Udemy',
    description:
      'Curso completo de Machine Learning y Data Science en Python, cubriendo desde fundamentos hasta técnicas avanzadas de modelado predictivo.',
    date: '2022',
    image: '/images/courses/ml-python.webp',
    skills: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Data Science'],
  },
  {
    id: 'ciberseguridad-cnn-cert',
    title: 'Certificaciones de Ciberseguridad (x8)',
    institution: 'CCN-CERT',
    description:
      '8 certificaciones de Ciberseguridad del Centro Criptológico Nacional, cubriendo múltiples aspectos de la seguridad informática.',
    date: '2022',
    image: '/images/courses/ccn-cert.webp',
    skills: ['Ciberseguridad', 'Redes', 'Protocolos', 'Seguridad'],
  },
  {
    id: 'ciberseguridad-google',
    title: 'Ciberseguridad en el Teletrabajo',
    institution: 'Google',
    description:
      'Certificación de Google sobre prácticas de ciberseguridad en entornos de trabajo remoto.',
    date: '2022',
    image: '/images/courses/google-security.webp',
    skills: ['Ciberseguridad', 'Trabajo Remoto', 'Buenas Prácticas'],
  },
  {
    id: 'unity-videogames',
    title: 'Máster en Programación de Videojuegos con Unity',
    institution: 'Udemy',
    description:
      'Formación completa en desarrollo de videojuegos con Unity, incluyendo C#, físicas, IA para juegos y optimización.',
    date: '2021',
    image: '/images/courses/unity-master.webp',
    skills: ['Unity', 'C#', 'Game Development', '3D Graphics'],
  },
  {
    id: 'google-web-dev-1',
    title: 'Introducción al Desarrollo Web I',
    institution: 'Google',
    description:
      'Primera parte del curso de Google sobre fundamentos del desarrollo web: HTML, CSS y conceptos básicos.',
    date: '2020',
    image: '/images/courses/google-web1.webp',
    skills: ['HTML', 'CSS', 'Desarrollo Web'],
  },
  {
    id: 'google-web-dev-2',
    title: 'Introducción al Desarrollo Web II',
    institution: 'Google',
    description:
      'Segunda parte del curso de Google sobre desarrollo web: JavaScript, DOM y programación interactiva.',
    date: '2020',
    image: '/images/courses/google-web2.webp',
    skills: ['JavaScript', 'DOM', 'Desarrollo Web'],
  },
  {
    id: 'matlab-onramp',
    title: 'Matlab OnRamp - Matlab Coding',
    institution: 'MathWorks',
    description:
      'Curso oficial de MathWorks para aprender los fundamentos de programación en MATLAB.',
    date: '2020',
    image: '/images/courses/matlab.webp',
    skills: ['MATLAB', 'Análisis Numérico', 'Visualización'],
  },
]

/**
 * Obtener cursos para mostrar en la página de inicio
 */
export const getFeaturedCourses = (count: number = 3): Course[] => {
  return courses.slice(0, count)
}
