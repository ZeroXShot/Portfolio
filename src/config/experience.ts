import type { Experience, Education, SkillCategory, Conference } from '@/types'

/**
 * Experiencia laboral
 * Añade nuevas experiencias al array para que aparezcan automáticamente
 */
export const experiences: Experience[] = [
  {
    id: 'avamed-ia-lead',
    company: 'Avamed Synergy',
    position: 'Responsable de Inteligencia Artificial',
    location: 'Alicante, España',
    startDate: 'Julio 2024',
    endDate: 'Actualidad',
    description: [
      'Desarrollador de la Inteligencia Artificial de Fluxus, proyecto principal de la empresa, dedicada a la segmentación automática de estructuras anatómicas en el ámbito médico.',
      'Securización de la IA (Nginx, Certs). Integración IA como servicio (FastAPI, Triton, Docker, gestión de colas).',
      'Logs, métricas y tests (Prometheus, Grafana, Jenkins).',
      'Desarrollador de la IA y software asociado en diversos proyectos de gran impacto nacional como Bohemia: cuantificación del índice de rotura del Aneurisma de Arteria Aorta o Bariatric: obtención de la centerline del intestino delgado (Unity: C#, Python, C++).',
      'Creación y optimización de entornos modulares y automatizados de Inteligencia Artificial (Linux Server, Docker, Nginx).',
      'Desarrollo de documentación técnica de Inteligencia Artificial de acuerdo a la normativa Europea.',
      'Gestión de la parte de IA en los diferentes proyectos de la empresa.',
      'Diseño y desarrollo del diagrama de arquitectura de la empresa orientada a Inteligencia Artificial.',
      'Configuración de los componentes de ordenadores y servidores orientados a la optimización de procesos basados en Inteligencia Artificial.',
      'Tutor de alumnos de prácticas de IA en Avamed.',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'FastAPI',
      'Docker',
      'Nginx',
      'Triton',
      'Prometheus',
      'Grafana',
      'Jenkins',
      'Unity',
      'C#',
      'C++',
    ],
    logo: '/images/companies/avamed.webp',
  },
  {
    id: 'avamed-dl',
    company: 'Avamed Synergy',
    position: 'Ingeniero Deep Learning',
    location: 'Alicante, España',
    startDate: 'Septiembre 2022',
    endDate: 'Diciembre 2022',
    description: [
      'Desarrollo de modelos de Inteligencia Artificial para la segmentación de imágenes médicas.',
      'Diseño y optimización de modelos matemáticos de cálculo de centerline en estructuras anatómicas.',
      'Integración de modelos de inteligencia artificial en diversas aplicaciones.',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'VTK', 'ITK', 'NumPy', 'SciPy'],
    logo: '/images/companies/avamed.webp',
  },
  {
    id: 'isabial',
    company: 'ISABIAL (Instituto de Investigación Sanitaria y Biomédica de Alicante)',
    position: 'Ingeniero Biomédico en el grupo de Neurociencias',
    location: 'Alicante, España',
    startDate: 'Julio 2022',
    endDate: 'Octubre 2022',
    description: [
      'Análisis de pacientes con enfermedades neurodegenerativas como el ELA o Ictus, entre otras.',
      'Ensayos a pacientes con enfermedades raras.',
      'Análisis del funcionamiento de las máquinas de RM, CT, RX, Ecografías y ECG.',
      'Programación y optimización de la web de ISABIAL (PHP) y desarrollo de entornos 3D en SIMIA (Unity).',
    ],
    technologies: ['PHP', 'Unity', 'C#', 'Python', 'MATLAB'],
    logo: '/images/companies/isabial.webp',
  },
  {
    id: 'huro',
    company: 'HURO (Human Robotics)',
    position: 'Ingeniero Biomédico en el proyecto ARMIA',
    location: 'Alicante, España',
    startDate: 'Septiembre 2021',
    endDate: 'Junio 2022',
    description: [
      'Diseño y desarrollo del proyecto ARMIA: brazo sensorizado que permita la medición de la actividad cinemática y muscular.',
      'Soldaje y programación de diversos componentes: sensores EMG, IMU, Raspberry PI (Arduino).',
      'Desarrollo y programación de sistemas para el análisis de las señales biomédicas obtenidas por los diversos sensores.',
    ],
    technologies: ['Python', 'Arduino', 'Raspberry Pi', 'EMG', 'IMU', 'MATLAB'],
    logo: '/images/companies/huro.webp',
  },
]

/**
 * Educación
 */
export const education: Education[] = [
  {
    id: 'master-ia',
    institution: 'Universidad Politécnica de Madrid',
    degree: 'Máster en Inteligencia Artificial',
    location: 'Madrid, España',
    startDate: 'Septiembre 2023',
    endDate: 'Julio 2024',
    honors: [
      'Matrícula de Honor en Visión por Computador',
      'TFM calificado con 10',
    ],
    logo: '/images/education/upm.webp',
  },
  {
    id: 'grado-biomedica',
    institution: 'Universidad de Alicante',
    degree: 'Grado en Ingeniería Biomédica',
    location: 'Alicante, España',
    startDate: 'Septiembre 2017',
    endDate: 'Junio 2022',
    honors: [
      'Premio al mejor expediente académico del grado',
      'Premio extraordinario de Ingeniería Biomédica por la GVA',
      '9 Matrículas de Honor en diversas asignaturas técnicas, de programación, físicas y biomédicas',
      'TFG calificado con 10',
    ],
    logo: '/images/education/ua.webp',
  },
]

/**
 * Habilidades técnicas y soft skills
 */
export const skillCategories: SkillCategory[] = [
  {
    name: 'Machine Learning & IA',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'PyTorch',
      'TensorFlow',
      'Scikit-Learn',
      'HuggingFace',
      'Computer Vision',
    ],
  },
  {
    name: 'Backend & DevOps',
    skills: [
      'Python',
      'FastAPI',
      'Docker',
      'Linux Server',
      'Nginx',
      'WSL',
      'Unix Scripting',
      'Cloud',
    ],
  },
  {
    name: 'Frontend & UI',
    skills: [
      'JavaScript',
      'Node.js',
      'React',
      'PySide',
      'Unity',
      'Desarrollo Web',
    ],
  },
  {
    name: 'Data & Visualization',
    skills: ['VTK', 'ITK', 'PyVista', 'SQL', 'NumPy', 'Pandas'],
  },
  {
    name: 'Otros',
    skills: [
      'Java',
      'C++',
      'C#',
      'Protocolos de red',
      'Agile (Scrum)',
      'Impresión 3D',
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      'Comunicación efectiva',
      'Trabajo en equipo',
      'Resolución de problemas',
      'Pensamiento Crítico',
      'Adaptabilidad',
      'Gestión y organización',
      'Creatividad e innovación',
      'Liderazgo',
      'Escucha activa',
      'Colaboración interdisciplinaria',
      'Negociación',
      'Ética profesional',
    ],
  },
]

/**
 * Conferencias y congresos
 */
export const conferences: Conference[] = [
  {
    id: 'cvi-health-day',
    name: 'CV+i Health Day',
    role: 'speaker',
    date: '2024',
  },
  {
    id: 'ua-surgical-planning',
    name: 'UA Surgical Planning Day',
    role: 'speaker',
    date: '2024',
  },
  {
    id: 'vds',
    name: 'Valencia Digital Summit (VDS)',
    role: 'attendee',
    date: '2024',
  },
  {
    id: 'incliva',
    name: 'Incliva + E',
    role: 'attendee',
    date: '2024',
  },
  {
    id: 'aws-webinar',
    name: 'AWS Webinar',
    role: 'attendee',
    date: '2024',
  },
  {
    id: 'oracle-ai-webinar',
    name: 'Oracle AI Webinar',
    role: 'attendee',
    date: '2024',
  },
]

/**
 * Idiomas
 */
export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B2 (Cambridge)' },
  { name: 'Valenciano', level: 'C1 (GVA)' },
]

/**
 * Información adicional
 */
export const additionalInfo = [
  'Permiso de conducir B1 con vehículo propio',
  'Disponibilidad para viajar dentro y fuera del país',
]
