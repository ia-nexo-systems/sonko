export default function UbicacionSection() {
  return (
    <section style={{ background: '#F3EEE6' }} className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="flex-1">
            <p className="font-inter text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#8C7B6A' }}>
              Atención presencial y online
            </p>
            <h2 className="text-2xl md:text-3xl font-normal leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>
              Consulta en España y atención online
            </h2>
            <p className="font-inter text-sm leading-relaxed mb-4" style={{ color: 'rgba(36,31,27,0.7)' }}>
              Profesor SONKO atiende desde su consulta en España y trabaja con personas de todo el mundo de forma discreta y personalizada.
            </p>
            <p className="font-inter text-sm leading-relaxed mb-6" style={{ color: 'rgba(36,31,27,0.7)' }}>
              Atención presencial y online. Atención profesional, directa y confidencial.
            </p>
            <a
              href="https://wa.me/34632372152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3.5 text-white font-inter font-semibold text-sm transition-all duration-300"
              style={{ background: '#25D366', borderRadius: '4px' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1ebe5d'}
              onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
            >
              Hablar por WhatsApp
            </a>
          </div>
          {/* Consulta real — healer con consultante */}
          <div className="flex-1">
            <div className="overflow-hidden mb-4" style={{ borderRadius: '6px', height: '200px' }}>
              <img
                src="https://media.base44.com/images/public/69b8ff201a186ac9effab2b3/6c7545aa0_African_spiritual_workspace_objects_b2d63257b6jpeg_202603172322.jpg"
                alt="Consulta espiritual personalizada"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Ubicación", value: "España" },
              { label: "Modalidad", value: "Presencial y online" },
              { label: "Idiomas", value: "Español, Francés" },
              { label: "Disponibilidad", value: "Consultas personalizadas" },
            ].map((item, i) => (
              <div key={i} className="p-5" style={{ background: '#fff', borderRadius: '6px', border: '1px solid rgba(140,123,106,0.2)' }}>
                <div className="font-inter text-xs uppercase tracking-wider mb-1" style={{ color: '#8C7B6A' }}>{item.label}</div>
                <div className="font-inter text-sm font-medium" style={{ color: '#241F1B' }}>{item.value}</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}