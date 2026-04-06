export default function FooterSection() {
  return (
    <footer className="py-10" style={{ background: '#141210', borderTop: '1px solid rgba(140,123,106,0.15)' }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-inter font-semibold text-xs tracking-widest uppercase" style={{ color: '#EAE3D9', letterSpacing: '0.1em' }}>PROFESOR SONKO</span>
          <p className="font-inter text-xs mt-1" style={{ color: 'rgba(140,123,106,0.5)' }}>Guía espiritual de tradición ancestral</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#hero" className="font-inter text-xs transition-colors" style={{ color: 'rgba(140,123,106,0.45)' }}>Inicio</a>
          <a href="#servicios" className="font-inter text-xs transition-colors" style={{ color: 'rgba(140,123,106,0.45)' }}>Servicios</a>
          <a href="#contacto" className="font-inter text-xs transition-colors" style={{ color: 'rgba(140,123,106,0.45)' }}>Contacto</a>
          <a href="/privacidad" className="font-inter text-xs transition-colors" style={{ color: 'rgba(140,123,106,0.45)' }}>Privacidad</a>
        </div>
        <p className="font-inter text-xs" style={{ color: 'rgba(140,123,106,0.3)' }}>
          © {new Date().getFullYear()} · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}