// Poster: frame cálido del vídeo — healer manos con conchas, luz de vela
const POSTER = "https://media.base44.com/images/public/69b8ff201a186ac9effab2b3/36713451e_Healer_casting_cowrie_shells_5bcbe5a6bf.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ background: '#1E1A17', minHeight: '85vh' }}
    >
      {/* ── Background layer ── */}
      <div className="absolute inset-0">

        {/* Poster — siempre visible como fondo mientras carga el vídeo */}
        <img
          src={POSTER}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%', filter: 'brightness(0.55) saturate(0.85)' }}
          loading="eager"
        />

        {/* Vimeo iframe — fondo silencioso en bucle, todos los dispositivos */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1174552180?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&portrait=0"
            className="absolute"
            style={{
              top: '50%', left: '50%',
              width: '177.78vh', minWidth: '100%',
              height: '56.25vw', minHeight: '100%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.6,
              border: 'none',
              filter: 'brightness(0.75) saturate(0.85)',
              pointerEvents: 'none',
            }}
            allow="autoplay; fullscreen"
            title="Profesor SONKO"
          />
        </div>

        {/* Overlay oscuro cálido — garantiza legibilidad */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(22,17,13,0.42) 0%, rgba(22,17,13,0.38) 60%, rgba(22,17,13,0.55) 100%)' }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">

        {/* Eyebrow */}
        <p className="font-inter text-xs uppercase tracking-[0.3em] mb-6" style={{ color: 'rgba(234,227,217,0.65)' }}>
          Tradición espiritual ancestral · Más de 20 años de experiencia
        </p>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] mb-6 max-w-4xl mx-auto"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#EAE3D9' }}
        >
          Profesor SONKO — Guía espiritual de tradición ancestral para resolver problemas que parecen no tener solución.
        </h1>

        {/* Subheadline */}
        <p className="font-inter text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6" style={{ color: 'rgba(234,227,217,0.72)' }}>
          Más de 20 años ayudando a personas a superar bloqueos personales, problemas sentimentales, dificultades en los negocios y situaciones complicadas en la vida.
        </p>

        <p className="font-inter text-sm leading-relaxed max-w-xl mx-auto mb-10" style={{ color: 'rgba(234,227,217,0.52)' }}>
          A veces la vida se bloquea y nada parece avanzar. La orientación espiritual basada en rituales tradicionales puede ayudar a recuperar el equilibrio y abrir nuevos caminos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href="https://wa.me/34632372152"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-white font-inter font-semibold text-sm tracking-wide transition-all duration-300"
            style={{ background: '#25D366', borderRadius: '6px' }}
            onMouseEnter={e => e.currentTarget.style.background = '#1ebe5d'}
            onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
          >
            Hablar por WhatsApp
          </a>
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-4 text-white font-inter font-medium text-sm tracking-wide transition-all duration-300 hover:opacity-90"
            style={{ background: '#A65A4D', borderRadius: '6px' }}
          >
            Consultar mi situación
          </a>
        </div>

        {/* Micro-pruebas */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {["Confidencial", "Respuesta rápida", "Sin compromiso"].map((item) => (
            <span key={item} className="font-inter text-xs flex items-center gap-1.5" style={{ color: 'rgba(234,227,217,0.55)' }}>
              <span style={{ color: '#25D366' }}>✓</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F3EEE6] to-transparent" />
    </section>
  );
}