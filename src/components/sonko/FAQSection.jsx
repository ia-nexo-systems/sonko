import { useState } from "react";

const faqs = [
  {
    q: "¿Esto funciona de verdad?",
    a: "Muchas personas comienzan a notar cambios en los primeros días tras la consulta. En muchos casos, los cambios se perciben en un corto plazo. Cada caso es diferente y la orientación se adapta a cada situación concreta.",
  },
  {
    q: "¿Esto puede ayudarme en mi caso concreto?",
    a: "Cada situación es diferente. Por eso la orientación espiritual se basa en analizar tu caso de forma personal antes de recomendar cualquier tipo de ayuda.",
  },
  {
    q: "¿Es confidencial?",
    a: "Sí. Todas las consultas se realizan de forma totalmente confidencial y respetando la situación personal de cada persona.",
  },
  {
    q: "¿Y si no sé exactamente qué me pasa?",
    a: "Muchas personas acuden precisamente por eso: cuando sienten que algo no va bien pero no saben cómo explicarlo. La orientación espiritual ayuda a comprender mejor lo que está ocurriendo.",
  },
  {
    q: "¿Puedo consultar sin compromiso?",
    a: "Sí. Puedes realizar el primer contacto, explicar tu situación y recibir orientación sobre cómo puede ayudarte la consulta espiritual.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ background: '#F3EEE6' }} className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] mb-3" style={{ color: '#8C7B6A' }}>
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>
            Preguntas que muchas personas se hacen
          </h2>
          <p className="font-inter text-sm" style={{ color: 'rgba(36,31,27,0.5)' }}>Puedes explicar tu situación ahora mismo, sin compromiso.</p>
        </div>

        <div className="space-y-0" style={{ borderTop: '1px solid rgba(140,123,106,0.2)' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: '1px solid rgba(140,123,106,0.2)' }}
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-inter font-medium text-sm" style={{ color: '#241F1B' }}>{faq.q}</span>
                <span
                  className="font-inter text-lg flex-shrink-0 transition-transform duration-200"
                  style={{ color: '#A65A4D', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="font-inter text-sm leading-relaxed" style={{ color: 'rgba(36,31,27,0.6)' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://wa.me/34632372152"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white font-inter font-semibold text-sm transition-all duration-300"
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