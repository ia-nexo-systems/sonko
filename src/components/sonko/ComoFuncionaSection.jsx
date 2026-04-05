const pasos = [
  {
    num: "01",
    titulo: "Primer contacto",
    desc: "Contacta con Profesor SONKO por teléfono o WhatsApp y explica brevemente tu situación.",
  },
  {
    num: "02",
    titulo: "Consulta espiritual",
    desc: "Se analiza tu situación personal para comprender qué está ocurriendo. Cada caso se estudia de forma individual.",
  },
  {
    num: "03",
    titulo: "Orientación y ritual",
    desc: "Profesor SONKO orienta sobre el tipo de práctica espiritual tradicional que puede ayudar a recuperar el equilibrio.",
  },
];

export default function ComoFuncionaSection() {
  return (
    <section id="como-funciona" style={{ background: '#F3EEE6' }} className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#8C7B6A' }}>
            El proceso
          </p>
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>
            Cómo funciona la consulta
          </h2>
          <p className="font-inter text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(36,31,27,0.55)' }}>
            Proceso confidencial, directo y personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
          {pasos.map((p, i) => (
            <div key={i} className="p-6" style={{ background: '#fff', borderRadius: '6px', border: '1px solid rgba(140,123,106,0.2)' }}>
              <div className="text-3xl font-normal mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: 'rgba(140,123,106,0.35)' }}>{p.num}</div>
              <div className="w-5 h-px mb-4" style={{ background: '#A65A4D' }} />
              <h3 className="font-inter font-semibold text-sm mb-2" style={{ color: '#241F1B' }}>{p.titulo}</h3>
              <p className="font-inter text-sm leading-relaxed" style={{ color: 'rgba(36,31,27,0.55)' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Image — manos con conchas, luz vela, plano cercano */}
        <div className="mt-10 overflow-hidden" style={{ borderRadius: '6px', height: '240px' }}>
          <img
            src="https://media.base44.com/images/public/69b8ff201a186ac9effab2b3/36713451e_Healer_casting_cowrie_shells_5bcbe5a6bf.jpg"
            alt="Práctica espiritual tradicional con conchas"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 35%' }}
            loading="lazy"
          />
        </div>

        <div className="mt-12 pt-10" style={{ borderTop: '1px solid rgba(140,123,106,0.2)' }}>
          <p className="font-inter text-sm mb-6" style={{ color: 'rgba(36,31,27,0.55)' }}>
            Cada caso requiere una orientación diferente.
          </p>
          <a
            href="https://wa.me/34632372152"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white font-inter font-semibold text-sm transition-all duration-300"
            style={{ background: '#25D366', borderRadius: '4px' }}
            onMouseEnter={e => e.currentTarget.style.background = '#1ebe5d'}
            onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}