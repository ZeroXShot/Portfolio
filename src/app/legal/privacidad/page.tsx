import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container, Card } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad del portfolio de Joaquín González',
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
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
          <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidad</h1>
          <p className="text-dark-500 mb-8">
            <strong>Última actualización:</strong> 31 de enero de 2026
          </p>

          <div className="bg-primary-500/10 border border-primary-500/30 p-4 rounded-xl mb-8">
            <h3 className="font-semibold text-white mb-2">Tu privacidad es importante</h3>
            <p className="text-dark-300">
              Este sitio web <strong>NO recoge, NO almacena y NO transmite</strong> ningún
              dato personal sin tu consentimiento. El formulario de contacto solo se utiliza
              para comunicación directa.
            </p>
          </div>

          <div className="prose-custom">
            <section className="mb-8">
              <h2>1. Responsable del tratamiento</h2>
              <p>A efectos del Reglamento General de Protección de Datos (RGPD - UE 2016/679):</p>
              <div className="bg-dark-800/50 p-4 rounded-xl border border-dark-700 my-4">
                <p><strong>Titular:</strong> Joaquín Jesús González Vázquez de Agredos</p>
                <p><strong>Domicilio:</strong> Alicante, España</p>
                <p><strong>Email:</strong> joajegonvaz999@gmail.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2>2. Datos que NO recogemos</h2>
              <p>
                Este sitio web ha sido diseñado con <strong>privacidad por diseño</strong>.
                <strong> NO</strong> recogemos, almacenamos ni procesamos:
              </p>
              <ul>
                <li>Datos de identificación personal sin consentimiento</li>
                <li>Direcciones IP con fines de identificación o perfilado</li>
                <li>Datos de geolocalización</li>
                <li>Información de navegación con fines comerciales</li>
                <li>Datos de terceros</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>3. Datos del formulario de contacto</h2>
              <p>
                Si utilizas el formulario de contacto, se recogerán únicamente los datos
                que proporciones voluntariamente:
              </p>
              <ul>
                <li>Nombre</li>
                <li>Email</li>
                <li>Asunto y mensaje</li>
              </ul>
              <p><strong>Finalidad:</strong> Responder a tu consulta o propuesta.</p>
              <p><strong>Base legal:</strong> Consentimiento del interesado (art. 6.1.a RGPD).</p>
              <p><strong>Conservación:</strong> Los datos se conservarán mientras sea necesario
                para atender tu solicitud.</p>
            </section>

            <section className="mb-8">
              <h2>4. Datos técnicos del servidor</h2>
              <p>
                Como cualquier sitio web, el servidor puede registrar automáticamente
                datos técnicos básicos:
              </p>
              <ul>
                <li>Dirección IP (de forma anónima y temporal)</li>
                <li>Fecha y hora de acceso</li>
                <li>Tipo y versión del navegador</li>
                <li>Sistema operativo</li>
              </ul>
              <p>Esta información:</p>
              <ul>
                <li>Se utiliza exclusivamente para fines técnicos y de seguridad</li>
                <li>No se asocia a ningún usuario identificable</li>
                <li>Se elimina periódicamente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>5. Cookies</h2>
              <p>
                Este sitio web utiliza <strong>únicamente cookies técnicas</strong> necesarias
                para el funcionamiento básico.
              </p>
              <p><strong>NO</strong> utilizamos cookies de:</p>
              <ul>
                <li>Seguimiento o tracking</li>
                <li>Analítica web</li>
                <li>Publicidad</li>
                <li>Redes sociales</li>
              </ul>
              <p>
                Para más información, consulta nuestra{' '}
                <Link href="/legal/cookies" className="text-primary-400 hover:text-primary-300">
                  Política de Cookies
                </Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2>6. Servicios de terceros</h2>
              <p>Este sitio web puede utilizar los siguientes servicios externos:</p>
              
              <h3>Google Fonts</h3>
              <p>
                Utilizamos Google Fonts para cargar las tipografías. Google puede procesar
                ciertos datos técnicos según su{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Política de Privacidad
                </a>.
              </p>
              
              <h3>Vercel (Hosting)</h3>
              <p>
                El sitio está alojado en Vercel. Puedes consultar su{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Política de Privacidad
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2>7. Derechos de los usuarios</h2>
              <p>Si has proporcionado datos a través del formulario de contacto, tienes derecho a:</p>
              <ul>
                <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Supresión:</strong> Solicitar el borrado de tus datos</li>
                <li><strong>Limitación:</strong> Restringir el tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento</li>
              </ul>
              <p>
                Para ejercer estos derechos, contacta en:{' '}
                <a href="mailto:joajegonvaz999@gmail.com">joajegonvaz999@gmail.com</a>
              </p>
            </section>

            <section className="mb-8">
              <h2>8. Seguridad</h2>
              <p>Implementamos medidas de seguridad para:</p>
              <ul>
                <li>Conexión segura mediante HTTPS</li>
                <li>Proteger la integridad del sitio web</li>
                <li>Prevenir accesos no autorizados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>9. Cambios en esta política</h2>
              <p>
                Nos reservamos el derecho de modificar esta Política de Privacidad. Cualquier
                cambio será publicado en esta página con la fecha de actualización.
              </p>
            </section>

            <section>
              <h2>10. Contacto</h2>
              <p>
                Para cualquier consulta sobre privacidad:{' '}
                <a href="mailto:joajegonvaz999@gmail.com">joajegonvaz999@gmail.com</a>
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-dark-800 flex flex-wrap gap-4">
            <Link href="/legal/aviso-legal" className="text-primary-400 hover:text-primary-300 transition-colors">
              Aviso Legal
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
