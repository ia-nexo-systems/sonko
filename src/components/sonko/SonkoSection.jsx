const bullets = [
  "+20 años de experiencia en orientación espiritual",
  "Tradición ancestral familiar transmitida de generación en generación",
  "Atención confidencial y personalizada en cada caso",
  "Enfoque directo, honesto y orientado a resultados",
];

export default function SonkoSection() {
  return (
    <section id="profesor-sonko" style={{ background: '#F3EEE6' }} className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">

          {/* Image — portrait centrado en rostro */}
          <div className="w-full md:w-[42%] flex-shrink-0">
            <div className="relative overflow-hidden" style={{ borderRadius: '6px' }}>
              {/* Retrato del Profesor SONKO en su consulta */}
              <img
                src="https://media.base44.com/images/public/69b8ff201a186ac9effab2b3/1f5f54f3e_la_mesa_est_202603172226.jpg"
                alt="Profesor SONKO — guía espiritual en su consulta"
                className="w-full object-cover"
                style={{ height: '480px', objectPosition: 'center 15%' }}
                loading="lazy"
                width="600"
                height="480"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(243,238,230,0.3) 0%, transparent 70%)' }} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 md:pt-4">
            <p className="font-inter text-xs uppercase tracking-[0.25em] mb-4" style={{ color: '#8C7B6A' }}>
              Por qué muchas personas confían en Profesor SONKO
            </p>
            <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>
              Profesor SONKO — guía espiritual de tradición ancestral.
            </h2>

            <p className="font-inter text-sm leading-relaxed mb-4" style={{ color: 'rgba(36,31,27,0.7)' }}>
              Profesor SONKO forma parte de una tradición espiritual familiar originaria de Senegal, donde las prácticas de orientación espiritual y los rituales ancestrales se transmiten de generación en generación.
            </p>
            <p className="font-inter text-sm leading-relaxed mb-8" style={{ color: 'rgba(36,31,27,0.7)' }}>
              Desde muy joven fue formado dentro de esta tradición familiar, aprendiendo métodos espirituales utilizados durante décadas para ayudar a personas que atraviesan momentos difíciles en su vida personal, sentimental o profesional. Sus prácticas se basan en rituales espirituales tradicionales propios de su cultura, realizados de forma confidencial y personalizada.
            </p>

            {/* Bullets */}
            <ul className="space-y-3 mb-10">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: '#A65A4D' }} />
                  <span className="font-inter text-sm" style={{ color: 'rgba(36,31,27,0.75)' }}>{b}</span>
                </li>
              ))}
            </ul>

            <p className="font-inter text-sm mb-6" style={{ color: 'rgba(36,31,27,0.5)' }}>Cada situación es diferente. Puedes recibir orientación espiritual personalizada.</p>

            <a
              href="https://wa.me/34632372152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3.5 text-white font-inter font-semibold text-sm transition-all duration-300 mb-10"
              style={{ background: '#25D366', borderRadius: '4px' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1ebe5d'}
              onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
            >
              Hablar con Profesor SONKO
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8" style={{ borderTop: '1px solid rgba(140,123,106,0.25)' }}>
              {[
                { num: "+20", label: "años de experiencia" },
                { num: "Cientos", label: "de personas acompañadas" },
                { num: "3", label: "continentes" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-normal" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>{s.num}</div>
                  <div className="font-inter text-xs mt-1" style={{ color: '#8C7B6A' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <p className="font-inter text-xs mt-4" style={{ color: 'rgba(36,31,27,0.45)' }}>
              Cada situación se trata de forma personal, confidencial y directa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}