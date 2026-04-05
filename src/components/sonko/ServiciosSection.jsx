const servicios = [
  {
    nombre: "Armonía en relaciones sentimentales",
    desc: "Orientación espiritual para personas que atraviesan conflictos de pareja, distanciamiento emocional o desean recuperar la armonía con la persona querida.",
    nota: "Cada caso se estudia de forma individual.",
  },
  {
    nombre: "Limpieza espiritual y energías negativas",
    desc: "Rituales tradicionales para limpiar bloqueos espirituales o situaciones que generan sensación de negatividad o mala suerte persistente.",
    nota: "Proceso definido según la naturaleza de cada situación.",
  },
  {
    nombre: "Protección espiritual personal y familiar",
    desc: "Rituales para fortalecer la protección espiritual de la persona y su entorno familiar frente a situaciones que generan preocupación constante.",
    nota: "Atención confidencial y personalizada.",
  },
  {
    nombre: "Orientación espiritual en negocios y trabajo",
    desc: "Apoyo espiritual cuando los proyectos no avanzan, aparecen dificultades en el trabajo o momentos complicados en el ámbito profesional.",
    nota: "Se trabaja en etapas con revisión continua.",
  },
  {
    nombre: "Conflictos personales o situaciones legales",
    desc: "Apoyo espiritual en momentos de conflictos personales o situaciones relacionadas con procesos legales que generan preocupación.",
    nota: "Orientación personalizada según cada situación.",
  },
  {
    nombre: "Equilibrio y armonía en la vida íntima",
    desc: "Orientación espiritual para recuperar la armonía emocional y personal cuando existen dificultades en la vida íntima o sentimental.",
    nota: "Cada caso requiere una orientación diferente.",
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" style={{ background: '#E7E0D6' }} className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#8C7B6A' }}>
            Orientación espiritual para diferentes situaciones de la vida
          </p>
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>
            Áreas en las que Profesor SONKO puede orientarte
          </h2>
          <p className="font-inter text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(36,31,27,0.6)' }}>
            Muchas personas buscan orientación espiritual cuando sienten que su vida se ha bloqueado o que las cosas no avanzan como deberían.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="p-7 flex flex-col"
              style={{ background: '#fff', borderRadius: '6px', border: '1px solid rgba(140,123,106,0.2)' }}
            >
              <h3 className="text-lg font-normal mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>{s.nombre}</h3>
              <p className="font-inter text-sm leading-relaxed mb-2" style={{ color: 'rgba(36,31,27,0.7)' }}>{s.desc}</p>
              <p className="font-inter text-xs leading-relaxed mb-5" style={{ color: '#8C7B6A' }}>{s.nota}</p>
              <div className="mt-auto pt-4" style={{ borderTop: '1px solid rgba(140,123,106,0.2)' }}>
                <a
                  href="https://wa.me/34632372152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm font-medium transition-colors duration-200"
                  style={{ color: '#25D366' }}
                >
                  Consultar este caso →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Image strip — consulta con pareja, escena real */}
        <div className="mt-6 overflow-hidden" style={{ borderRadius: '6px', height: '220px' }}>
          <img
            src="https://media.base44.com/images/public/69b8ff201a186ac9effab2b3/b011888e3_Vidente_solo_con_202603172336.jpg"
            alt="Consulta espiritual con pareja"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 25%' }}
            loading="lazy"
          />
        </div>

        {/* CTA urgencia */}
        <div className="mt-10 p-8" style={{ background: '#F3EEE6', borderRadius: '6px', border: '1px solid rgba(140,123,106,0.2)' }}>
          <h3 className="text-xl font-normal mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>A veces esperar demasiado puede hacer que los problemas se prolonguen</h3>
          <p className="font-inter text-sm leading-relaxed mb-5" style={{ color: 'rgba(36,31,27,0.6)' }}>
            Si sientes que algo en tu vida no está avanzando como debería, puedes explicar tu situación y recibir orientación espiritual personalizada. Cada caso es diferente.
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
            Consultar ahora
          </a>
        </div>
      </div>
    </section>
  );
}