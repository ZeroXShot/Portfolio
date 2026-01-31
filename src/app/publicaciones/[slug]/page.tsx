import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPublicationBySlug, getAllPublicationSlugs } from '@/config'
import { PublicationDetailContent } from './content'

interface Props {
  params: Promise<{ slug: string }>
}

// Generar rutas estáticas
export async function generateStaticParams() {
  const slugs = getAllPublicationSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generar metadata dinámica
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const publication = getPublicationBySlug(slug)

  if (!publication) {
    return {
      title: 'Publicación no encontrada',
    }
  }

  return {
    title: publication.title,
    description: publication.shortDescription,
    openGraph: {
      title: publication.title,
      description: publication.shortDescription,
      images: [publication.image],
    },
  }
}

export default async function PublicationPage({ params }: Props) {
  const { slug } = await params
  const publication = getPublicationBySlug(slug)

  if (!publication) {
    notFound()
  }

  return <PublicationDetailContent publication={publication} />
}
