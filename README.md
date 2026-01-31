# Portfolio - Joaquín González

Portfolio web profesional con diseño futurista, modular y completamente configurable.

## Características

- **Diseño futurista y minimalista** con animaciones suaves
- **Totalmente responsive** (desktop, tablet, móvil)
- **Modular y configurable** - añade contenido sin tocar código
- **Optimizado para SEO** y rendimiento
- **Accesible** siguiendo las mejores prácticas

## Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Motion (Framer Motion)
- **Formularios:** React Hook Form + Zod
- **Iconos:** Lucide React

## Estructura del Proyecto

```
Portfolio/
├── src/
│   ├── app/                    # Páginas (App Router)
│   │   ├── page.tsx           # Inicio
│   │   ├── trayectoria/       # Experiencia y educación
│   │   ├── proyectos/         # Grid de proyectos
│   │   │   └── [slug]/        # Detalle de proyecto
│   │   ├── cursos/            # Certificaciones
│   │   ├── publicaciones/     # Papers y artículos
│   │   │   └── [slug]/        # Detalle de publicación
│   │   ├── contacto/          # Formulario
│   │   ├── legal/             # Aviso, privacidad, cookies
│   │   └── layout.tsx         # Layout global
│   │
│   ├── components/
│   │   ├── ui/                # Componentes base (Button, Card...)
│   │   ├── layout/            # Header, Footer
│   │   └── sections/          # Secciones de página
│   │
│   ├── config/                # ⭐ CONFIGURACIÓN
│   │   ├── site.ts            # Info personal y navegación
│   │   ├── experience.ts      # Experiencia y educación
│   │   ├── projects.ts        # Lista de proyectos
│   │   ├── courses.ts         # Cursos y certificaciones
│   │   └── publications.ts    # Publicaciones científicas
│   │
│   ├── lib/                   # Utilidades
│   └── types/                 # Tipos TypeScript
│
├── public/
│   ├── images/                # Imágenes del portfolio
│   │   ├── projects/          # Imágenes de proyectos
│   │   ├── courses/           # Diplomas/certificados
│   │   ├── publications/      # Imágenes de publicaciones
│   │   ├── companies/         # Logos de empresas
│   │   └── education/         # Logos de universidades
│   └── cv/                    # CV en PDF
│
└── package.json
```

## Cómo Añadir Contenido

### Añadir un nuevo proyecto

Edita `src/config/projects.ts`:

```typescript
export const projects: Project[] = [
  // ... proyectos existentes
  {
    id: 'mi-nuevo-proyecto',
    slug: 'mi-nuevo-proyecto',
    title: 'Mi Nuevo Proyecto',
    shortDescription: 'Descripción breve...',
    description: `Descripción extendida con formato Markdown...`,
    image: '/images/projects/mi-proyecto.webp',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/...',
    githubVisibility: 'public', // o 'private'
    featured: false,
    date: '2026',
  },
]
```

### Añadir un nuevo curso

Edita `src/config/courses.ts`:

```typescript
export const courses: Course[] = [
  // ... cursos existentes
  {
    id: 'nuevo-curso',
    title: 'Nombre del Curso',
    institution: 'Institución',
    description: 'Descripción del curso...',
    date: '2026',
    image: '/images/courses/diploma.webp',
    certificateUrl: 'https://...',
    skills: ['Skill 1', 'Skill 2'],
  },
]
```

### Añadir experiencia laboral

Edita `src/config/experience.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: 'nueva-experiencia',
    company: 'Empresa',
    position: 'Puesto',
    location: 'Ciudad, País',
    startDate: 'Mes Año',
    endDate: 'Actualidad',
    description: [
      'Logro o responsabilidad 1',
      'Logro o responsabilidad 2',
    ],
    technologies: ['Tech 1', 'Tech 2'],
  },
  // ... resto de experiencias
]
```

## Configuración de Grids

Los grids son configurables en cada archivo:

```typescript
// src/config/projects.ts
export const projectsConfig = {
  gridColumns: 3,        // Columnas en desktop
  itemsPerPage: 9,       // Items por página
  featuredCount: 3,      // Destacados en inicio
}

// src/config/courses.ts
export const coursesConfig = {
  gridColumns: 3,
  gridRows: 3,
}
```

## Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd Portfolio

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## Personalización

### Colores

Los colores se definen en `src/app/globals.css` dentro de `@theme`:

```css
@theme {
  --color-primary-500: #0ea5e9;  /* Color principal */
  --color-accent-500: #06b6d4;   /* Color de acento */
  /* ... más colores */
}
```

### Información Personal

Edita `src/config/site.ts`:

```typescript
export const siteConfig = {
  personal: {
    name: 'Tu Nombre',
    title: 'Tu Título',
    email: 'tu@email.com',
    // ...
  },
  social: [
    { name: 'LinkedIn', url: '...', icon: 'Linkedin' },
    // ...
  ],
}
```

## Imágenes

Coloca las imágenes en formato `.webp` para mejor rendimiento:

- **Proyectos:** `public/images/projects/` (aspect ratio 16:9)
- **Cursos:** `public/images/courses/` (aspect ratio 4:3)
- **Publicaciones:** `public/images/publications/` (aspect ratio 16:9)
- **Avatar:** `public/images/avatar.webp`
- **OG Image:** `public/images/og-image.webp` (1200x630)

## Deploy

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Deploy automático en cada push

### Otros proveedores

```bash
npm run build
npm start
# O sirve la carpeta .next con tu servidor preferido
```

## Licencia

Este proyecto es privado. © 2026 Joaquín González.
