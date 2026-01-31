import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Habilitar imágenes de dominios externos (placeholders)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  // Configuración experimental para MDX
  experimental: {
    mdxRs: true,
  },
}

export default nextConfig
