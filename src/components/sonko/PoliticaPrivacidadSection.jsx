export default function PoliticaPrivacidadSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#F5F0EA' }}>
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-normal mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#241F1B' }}>
          Politica de Privacidad
        </h1>

        <div className="font-inter text-sm leading-relaxed space-y-6" style={{ color: 'rgba(36,31,27,0.75)' }}>

          <p>Ultima actualizacion: abril 2026</p>

          <h2 className="text-lg font-semibold mt-8" style={{ color: '#241F1B' }}>1. Responsable del tratamiento</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Nombre:</strong> Wasa Camara (Profesor SONKO)</li>
            <li><strong>Actividad:</strong> Consultor espiritual</li>
            <li><strong>Email de contacto:</strong> contacto@profesorsonko.com</li>
            <li><strong>Pais:</strong> Espana</li>
          </ul>

          <h2 className="text-lg font-semibold mt-8" style={{ color: '#241F1B' }}>2. Finalidad del tratamiento</h2>
          <p>Los datos personales recogidos a traves del formulario de contacto se utilizan exclusivamente para:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gestionar las consultas espirituales solicitadas por el interesado.</li>
            <li>Contactar al interesado para la prestacion del servicio solicitado.</li>
          </ul>
          <p>Sus datos NO seran utilizados para publicidad de terceros ni cedidos a terceros salvo obligacion legal.</p>

          <h2 className="text-lg font-semibold mt-8" style={{ color: '#241F1B' }}>3. Base juridica</h2>
          <p>El tratamiento de sus datos se basa en el consentimiento explicito del interesado, conforme al articulo 6.1.a del Reglamento General de Proteccion de Datos (RGPD).</p>

          <h2 className="text-lg font-semibold mt-8" style={{ color: '#241F1B' }}>4. Plazo de conservacion</h2>
          <p>Los datos personales se conservaran mientras dure la relacion comercial y, como maximo, 3 anos desde el ultimo contacto, salvo obligacion legal de conservacion superior.</p>

          <h2 className="text-lg font-semibold mt-8" style={{ color: '#241F1B' }}>5. Derechos del interesado</h2>
          <p>Usted tiene derecho a:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Acceso:</strong> conocer que datos personales tratamos sobre usted.</li>
            <li><strong>Rectificacion:</strong> solicitar la correccion de datos inexactos.</li>
            <li><strong>Supresion:</strong> solicitar la eliminacion de sus datos.</li>
            <li><strong>Oposicion:</strong> oponerse al tratamiento de sus datos.</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
            <li><strong>Limitacion:</strong> solicitar la limitacion del tratamiento.</li>
          </ul>
          <p>Para ejercer estos derechos, contacte con nosotros en <strong>contacto@profesorsonko.com</strong>.</p>
          <p>Asimismo, tiene derecho a presentar una reclamacion ante la Agencia Espanola de Proteccion de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#A65A4D' }}>www.aepd.es</a>.</p>

          <h2 className="text-lg font-semibold mt-8" style={{ color: '#241F1B' }}>6. Cookies</h2>
          <p>Este sitio web utiliza cookies propias y de terceros con fines analiticos y publicitarios. Al acceder al sitio, se le mostrara un banner de consentimiento donde podra aceptar, rechazar o configurar las cookies.</p>
          <p>Las cookies de terceros incluyen:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Google Analytics:</strong> cookies de analisis de trafico (con consentimiento previo).</li>
            <li><strong>Google Ads:</strong> cookies de seguimiento publicitario (con consentimiento previo).</li>
          </ul>
          <p>Puede retirar su consentimiento en cualquier momento desde el banner de cookies o borrando las cookies de su navegador.</p>

          <h2 className="text-lg font-semibold mt-8" style={{ color: '#241F1B' }}>7. Seguridad</h2>
          <p>Aplicamos medidas tecnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la perdida o la destruccion. La comunicacion con este sitio esta cifrada mediante protocolo HTTPS/TLS.</p>

          <div className="mt-12 pt-6" style={{ borderTop: '1px solid rgba(140,123,106,0.2)' }}>
            <a href="/" className="font-inter text-sm font-semibold transition-colors" style={{ color: '#A65A4D' }}>
              ← Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
