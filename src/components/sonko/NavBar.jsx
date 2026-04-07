import { useState, useEffect } from "react";

const navLinks = [
  { label: "Situaciones", href: "#situaciones" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#como-funciona" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(30,26,23,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(140,123,106,0.15)' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-inter font-semibold text-sm tracking-widest uppercase"
          style={{ color: '#EAE3D9', letterSpacing: '0.1em' }}
        >
          PROFESOR SONKO
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-xs transition-colors duration-200"
              style={{ color: 'rgba(234,227,217,0.5)' }}
              onMouseEnter={e => e.target.style.color = '#EAE3D9'}
              onMouseLeave={e => e.target.style.color = 'rgba(234,227,217,0.5)'}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+34632372152"
            className="hidden md:block font-inter text-xs font-medium transition-colors duration-200"
            style={{ color: 'rgba(234,227,217,0.65)' }}
            onMouseEnter={e => e.target.style.color = '#EAE3D9'}
            onMouseLeave={e => e.target.style.color = 'rgba(234,227,217,0.65)'}
          >
            +34 632 37 21 52
          </a>
          <a
            href="https://wa.me/34632372152"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs font-semibold text-white transition-all duration-300 px-5 py-2.5"
            style={{ background: '#25D366', borderRadius: '4px' }}
            onMouseEnter={e => e.currentTarget.style.background = '#1ebe5d'}
            onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
          >
            WhatsApp
          </a>

          {/* Hamburger — mobile/tablet */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span className="block w-5 h-px transition-all duration-200" style={{ background: '#EAE3D9', transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }} />
            <span className="block w-5 h-px transition-all duration-200" style={{ background: '#EAE3D9', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-px transition-all duration-200" style={{ background: '#EAE3D9', transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile/tablet menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'rgba(30,26,23,0.97)', borderTop: '1px solid rgba(140,123,106,0.15)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-sm transition-colors duration-200"
              style={{ color: 'rgba(234,227,217,0.7)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+34632372152"
            className="font-inter text-sm font-medium"
            style={{ color: 'rgba(234,227,217,0.65)' }}
          >
            +34 632 37 21 52
          </a>
        </div>
      )}
    </nav>
  );
}