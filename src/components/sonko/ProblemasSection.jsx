const problemas = [
  {
    title: "Tu relación de pareja ha cambiado",
    desc: "La distancia crece sin explicación. Lo que antes funcionaba ya no es lo mismo, y no sabes cómo recuperarlo.",
  },
  {
    title: "Algo en tu vida se ha bloqueado",
    desc: "Pones esfuerzo, tomas decisiones, pero nada avanza. Sientes que hay algo que frena todo lo que intentas.",
  },
  {
    title: "Conflictos uno detrás de otro",
    desc: "Cuando una situación se resuelve, aparece otra. Es como si los problemas se encadenasen sin que puedas descansar.",
  },
  {
    title: "Proyectos o negocios que no prosperan",
    desc: "Tienes capacidad y voluntad, pero los resultados no llegan. Algo parece interponerse entre el esfuerzo y el éxito.",
  },
  {
    title: "Preocupación constante",
    desc: "Una inquietud que no tiene nombre y no encuentras su origen. Algo no está bien, aunque no sepas exactamente qué es.",
  },
  {
    title: "Tensión familiar",
    desc: "El ambiente en casa se ha vuelto pesado. Los vínculos se deterioran y la armonía que había antes parece haberse roto.",
  },
];

export default function ProblemasSection() {
  return (
    <section id="situaciones" style={{ background: '#2A2521' }} className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#8C7B6A' }}>
            Si te está ocurriendo algo de esto…
          </p>
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#EAE3D9' }}>
            A veces todo parece ir bien… y de repente empiezan los problemas.
          </h2>
          <p className="font-inter text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(234,227,217,0.45)' }}>
            Cuando estas situaciones se repiten, muchas personas buscan orientación espiritual para comprender qué está ocurriendo y encontrar una forma de recuperar el equilibrio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'rgba(140,123,106,0.15)' }}>
          {problemas.map((p, i) => (
            <div
              key={i}
              className="p-7 flex flex-col gap-3 group"
              style={{ background: '#2A2521' }}
            >
              <div className="w-6 h-px" style={{ background: '#A65A4D' }} />
              <h3 className="font-inter font-semibold text-sm" style={{ color: '#EAE3D9' }}>{p.title}</h3>
              <p className="font-inter text-sm leading-relaxed" style={{ color: 'rgba(234,227,217,0.5)' }}>{p.desc}</p>
              <a
                href="#contacto"
                className="font-inter text-xs mt-auto pt-3 transition-colors duration-200"
                style={{ color: '#8C7B6A' }}
                onMouseEnter={e => e.target.style.color = '#A65A4D'}
                onMouseLeave={e => e.target.style.color = '#8C7B6A'}
              >
                Consultar este caso →
              </a>
            </div>
          ))}
        </div>

        {/* Image strip — consulta real + hombre en reflexión */}
        <div className="mt-px grid grid-cols-2 gap-px">
          <div className="overflow-hidden" style={{ height: '220px' }}>
            <img
              src="https://media.base44.com/images/public/69b8ff201a186ac9effab2b3/253bd3e2b_Man_sitting_in_room_337a7c4999.jpg"
              alt="Persona en un momento difícil"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%', filter: 'brightness(0.72)' }}
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden" style={{ height: '220px' }}>
            <img
              src="https://media.base44.com/images/public/69b8ff201a186ac9effab2b3/aae6c728a_111.jpg"
              alt="Orientación espiritual personalizada"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 25%', filter: 'brightness(0.75)' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <p className="font-inter text-sm mb-5" style={{ color: 'rgba(234,227,217,0.5)' }}>¿Quieres explicar tu situación?</p>
          <a
            href="#contacto"
            className="inline-block px-8 py-4 text-white font-inter font-semibold text-sm hover:opacity-90 transition-all duration-300"
            style={{ background: '#A65A4D', borderRadius: '4px' }}
          >
            Consultar ahora
          </a>
        </div>
      </div>
    </section>
  );
}