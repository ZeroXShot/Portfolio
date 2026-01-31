import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies del portfolio de Joaquín González',
  robots: { index: false, follow: false },
}

export default function CookiesPage() {
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
          <h1 className="text-3xl font-bold text-white mb-2">Política de Cookies</h1>
          <p className="text-dark-500 mb-8">
            <strong>Última actualización:</strong> 31 de enero de 2026
          </p>

          <div className="bg-accent-500/10 border border-accent-500/30 p-4 rounded-xl mb-8">
            <h3 className="font-semibold text-white mb-2">Solo cookies técnicas necesarias</h3>
            <p className="text-dark-300">
              Este sitio web utiliza <strong>únicamente cookies técnicas esenciales</strong> para
              el funcionamiento del servicio. <strong>No</strong> utilizamos cookies de seguimiento,
              analíticas, publicitarias ni de terceros para perfilarte.
            </p>
          </div>

          <div className="prose-custom">
            <section className="mb-8">
              <h2>1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web almacenan en tu
                dispositivo cuando los visitas. Se utilizan para que el sitio web recuerde
                información sobre tu visita.
              </p>
              
              <h3>Tipos de cookies según su finalidad</h3>
              <ul>
                <li><strong>Cookies técnicas:</strong> Imprescindibles para el funcionamiento básico.</li>
                <li><strong>Cookies de preferencias:</strong> Permiten recordar preferencias.</li>
                <li><strong>Cookies analíticas:</strong> Permiten analizar el comportamiento.</li>
                <li><strong>Cookies publicitarias:</strong> Se utilizan para mostrar publicidad.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>2. ¿Qué cookies utiliza este sitio web?</h2>
              <p>
                Este sitio web está diseñado para funcionar <strong>sin cookies innecesarias</strong>.
              </p>
              
              <div className="bg-dark-800/50 p-4 rounded-xl border border-dark-700 my-4">
                <h3 className="mt-0">Cookies técnicas (si las hubiera)</h3>
                <p className="mb-0">
                  Pueden utilizarse cookies técnicas mínimas para el funcionamiento del framework
                  (Next.js). Estas cookies son estrictamente necesarias y no requieren consentimiento.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2>3. Cookies que NO utilizamos</h2>
              <p>Para garantizar tu privacidad, confirmamos que <strong>NO</strong> utilizamos:</p>
              <ul>
                <li><strong>Cookies analíticas:</strong> No usamos Google Analytics ni similares.</li>
                <li><strong>Cookies publicitarias:</strong> No mostramos publicidad.</li>
                <li><strong>Cookies de redes sociales:</strong> No incluimos botones de compartir con tracking.</li>
                <li><strong>Cookies de seguimiento:</strong> No rastreamos tu actividad.</li>
                <li><strong>Cookies de marketing:</strong> No realizamos perfilado.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>4. Cookies de terceros</h2>
              <p>Los servicios externos que utilizamos pueden instalar sus propias cookies:</p>
              
              <h3>Google Fonts</h3>
              <p>
                Utilizamos Google Fonts para cargar las tipografías. Google puede establecer
                cookies relacionadas con la carga de fuentes.
              </p>
              <p><strong>Finalidad:</strong> Optimizar la carga de tipografías.</p>
              <p>
                <strong>Política de privacidad:</strong>{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  https://policies.google.com/privacy
                </a>
              </p>
              
              <p className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg text-sm italic">
                Nota: Este es el único servicio externo que puede establecer cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2>5. ¿Cómo gestionar o eliminar las cookies?</h2>
              <p>Puedes configurar tu navegador para bloquear o eliminar cookies:</p>
              <ul>
                <li>Este sitio web funcionará correctamente incluso si bloqueas todas las cookies.</li>
                <li>
                  Bloquear cookies de Google Fonts puede afectar ligeramente a la visualización
                  (se usarán fuentes del sistema).
                </li>
              </ul>
              
              <h3>Instrucciones por navegador</h3>
              <ul>
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>6. Base legal</h2>
              <p>
                Según el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la
                Información (LSSI-CE) y el RGPD:
              </p>
              <ul>
                <li>
                  Las cookies <strong>técnicas estrictamente necesarias</strong> no requieren
                  consentimiento previo.
                </li>
                <li>
                  El resto de cookies sí requieren consentimiento informado.
                </li>
              </ul>
              <p>
                <strong>En este sitio web:</strong> Dado que únicamente utilizamos cookies
                técnicas, no es necesario obtener consentimiento previo mediante banner de cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2>7. Actualizaciones de esta política</h2>
              <p>
                Nos reservamos el derecho de modificar esta Política de Cookies si se añaden
                nuevos servicios o cambia la legislación. Cualquier cambio será publicado en
                esta página.
              </p>
            </section>

            <section>
              <h2>8. Contacto</h2>
              <p>
                Para cualquier consulta sobre cookies:{' '}
                <a href="mailto:joajegonvaz999@gmail.com">joajegonvaz999@gmail.com</a>
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-dark-800 flex flex-wrap gap-4">
            <Link href="/legal/aviso-legal" className="text-primary-400 hover:text-primary-300 transition-colors">
              Aviso Legal
            </Link>
            <span className="text-dark-600">•</span>
            <Link href="/legal/privacidad" className="text-primary-400 hover:text-primary-300 transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </Card>
      </Container>
    </section>
  )
}
