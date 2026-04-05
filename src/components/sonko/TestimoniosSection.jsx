const testimonios = [
  {
    categoria: "Problemas de pareja",
    texto: "Después de hablar con Profesor SONKO sentí mucha claridad sobre lo que estaba ocurriendo. Las cosas empezaron a mejorar poco a poco.",
    nombre: "Laura M.",
    ciudad: "Madrid",
  },
  {
    categoria: "Bloqueos personales",
    texto: "Sentía que todo estaba bloqueado y nada avanzaba. Después de la consulta empecé a ver las cosas de otra manera y las situaciones empezaron a cambiar.",
    nombre: "Marta S.",
    ciudad: "Barcelona",
  },
  {
    categoria: "Problemas en negocios",
    texto: "Mi negocio pasaba por un momento muy complicado. La orientación me ayudó a tomar decisiones importantes y a recuperar la confianza.",
    nombre: "Carlos G.",
    ciudad: "Sevilla",
  },
];

export default function TestimoniosSection() {
  return (
    <section id="testimonios" style={{ background: '#E7E0D6' }} className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#8C7B6A' }}>
            Experiencias reales
          </p>
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>
            Lo que dicen quienes confiaron
          </h2>
          <p className="font-inter text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(36,31,27,0.55)' }}>
            Muchas personas han buscado orientación espiritual cuando atraviesan momentos difíciles. Estas son algunas de sus experiencias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="p-7 flex flex-col"
              style={{ background: '#fff', borderRadius: '6px', border: '1px solid rgba(140,123,106,0.2)' }}
            >
              <span className="font-inter text-xs uppercase tracking-[0.2em] mb-4 inline-block px-2.5 py-1" style={{ color: '#A65A4D', background: 'rgba(166,90,77,0.08)', borderRadius: '3px' }}>
                {t.categoria}
              </span>
              <p className="font-inter text-sm leading-relaxed flex-1 mb-6" style={{ color: 'rgba(36,31,27,0.75)' }}>
                "{t.texto}"
              </p>
              <div style={{ borderTop: '1px solid rgba(140,123,106,0.2)' }} className="pt-4">
                <div className="font-inter font-semibold text-sm" style={{ color: '#241F1B' }}>{t.nombre}</div>
                <div className="font-inter text-xs mt-0.5" style={{ color: '#8C7B6A' }}>{t.ciudad}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Image — mesa de consulta, atmosfera cálida */}
        <div className="mt-8 overflow-hidden" style={{ borderRadius: '6px', height: '200px' }}>
          {/* Healer en entorno moderno — autoridad contemporánea */}
          <img
            src="https://media.base44.com/images/public/69b8ff201a186ac9effab2b3/9425150cf_Inspirate_en_esta_imagen_4fabb66f4e.jpg"
            alt="Profesor SONKO en reflexión"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
            loading="lazy"
          />
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/34632372152"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white font-inter font-semibold text-sm transition-all duration-300"
            style={{ background: '#25D366', borderRadius: '4px' }}
            onMouseEnter={e => e.currentTarget.style.background = '#1ebe5d'}
            onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
          >
            Explicar mi situación
          </a>
        </div>
      </div>
    </section>
  );
}