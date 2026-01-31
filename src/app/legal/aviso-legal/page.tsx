import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal del portfolio de Joaquín González',
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container size="md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <Card padding="lg">
          <h1 className="text-3xl font-bold text-white mb-2">Aviso Legal</h1>
          <p className="text-dark-500 mb-8">
            <strong>Última actualización:</strong> 31 de enero de 2026
          </p>

          <div className="prose-custom">
            <section className="mb-8">
              <h2>1. Datos identificativos del titular</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios
                de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa
                de los datos identificativos del titular de este sitio web:
              </p>
              <div className="bg-dark-800/50 p-4 rounded-xl border border-dark-700 my-4">
                <p><strong>Titular:</strong> Joaquín Jesús González Vázquez de Agredos</p>
                <p><strong>Domicilio:</strong> Alicante, España</p>
                <p><strong>Email:</strong> joajegonvaz999@gmail.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2>2. Objeto y ámbito de aplicación</h2>
              <p>
                El presente Aviso Legal regula el acceso y uso de este sitio web (en adelante,
                "el Sitio Web"), un portfolio profesional que muestra la trayectoria,
                proyectos y publicaciones de su titular.
              </p>
              <p>
                El acceso al Sitio Web atribuye la condición de usuario e implica la aceptación
                plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
              </p>
            </section>

            <section className="mb-8">
              <h2>3. Descripción del servicio</h2>
              <p>Este sitio web ofrece información sobre:</p>
              <ul>
                <li>Trayectoria profesional y académica del titular</li>
                <li>Proyectos de desarrollo de software e inteligencia artificial</li>
                <li>Publicaciones científicas y artículos</li>
                <li>Certificaciones y formación continua</li>
                <li>Formulario de contacto para consultas profesionales</li>
              </ul>
              <p>
                El contenido tiene carácter informativo y profesional, orientado a mostrar
                las competencias y experiencia del titular.
              </p>
            </section>

            <section className="mb-8">
              <h2>4. Propiedad intelectual e industrial</h2>
              <p>
                El diseño, código fuente y contenidos originales de este sitio web son
                propiedad del titular o se utilizan con la debida autorización.
              </p>
              <p>
                Queda prohibida la reproducción, distribución, comunicación pública o
                transformación de los contenidos sin autorización expresa del titular,
                salvo en los casos permitidos por la legislación vigente.
              </p>
              <p><strong>Elementos de terceros:</strong></p>
              <ul>
                <li>
                  <strong>Tipografías:</strong> Se utilizan fuentes de Google Fonts (Inter,
                  JetBrains Mono), sujetas a sus respectivas licencias.
                </li>
                <li>
                  <strong>Iconos:</strong> Se utiliza la librería Lucide Icons bajo licencia ISC.
                </li>
                <li>
                  <strong>Framework:</strong> Desarrollado con Next.js, React y otras
                  tecnologías de código abierto.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>5. Exclusión de responsabilidad</h2>
              <p>El titular se exime de cualquier responsabilidad derivada de:</p>
              <ul>
                <li>La falta de disponibilidad o accesibilidad al Sitio Web.</li>
                <li>
                  Los errores u omisiones en los contenidos, aunque se pone especial cuidado
                  en mantener la información actualizada.
                </li>
                <li>
                  Los daños que pudieran derivarse del uso de la información contenida en
                  el sitio web.
                </li>
                <li>El contenido de sitios web de terceros enlazados desde este sitio.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>6. Enlaces externos</h2>
              <p>
                Este sitio web puede contener enlaces a sitios externos (GitHub, LinkedIn,
                publicaciones científicas, etc.). El titular no se responsabiliza del contenido,
                políticas o funcionamiento de estos sitios externos.
              </p>
            </section>

            <section className="mb-8">
              <h2>7. Modificaciones</h2>
              <p>
                El titular se reserva el derecho de modificar, actualizar o eliminar la
                información contenida en el Sitio Web, así como su configuración o
                presentación, en cualquier momento y sin previo aviso.
              </p>
            </section>

            <section className="mb-8">
              <h2>8. Legislación aplicable y jurisdicción</h2>
              <p>
                Este Aviso Legal se rige por la legislación española. Para cualquier
                controversia derivada del acceso o uso del Sitio Web, las partes se someten
                a los Juzgados y Tribunales de Alicante, España.
              </p>
            </section>

            <section>
              <h2>9. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con este Aviso Legal, puede contactar
                a través del email:{' '}
                <a href="mailto:joajegonvaz999@gmail.com">joajegonvaz999@gmail.com</a>
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-dark-800 flex flex-wrap gap-4">
            <Link href="/legal/privacidad" className="text-primary-400 hover:text-primary-300 transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-dark-600">•</span>
            <Link href="/legal/cookies" className="text-primary-400 hover:text-primary-300 transition-colors">
              Política de Cookies
            </Link>
          </div>
        </Card>
      </Container>
    </section>
  )
}
