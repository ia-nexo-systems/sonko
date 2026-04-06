import { useState } from "react";

const WEBHOOK_URL = "https://n8n.ianexosystems.com/webhook/sonko-lead";

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  keys.forEach((key) => {
    const val = params.get(key);
    if (val) utms[key] = val;
  });
  return utms;
}

function validarTelefono(tel) {
  const limpio = tel.replace(/[\s\-().]/g, "");
  return /^\+?\d{9,15}$/.test(limpio);
}

export default function ContactoSection() {
  const [form, setForm] = useState({ nombre: "", whatsapp: "", tipo_consulta: "", contacto_preferido: "", franja_horaria: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarTelefono(form.whatsapp)) {
      setError("Introduce un numero de telefono valido (ej: +34 632 372 152)");
      return;
    }

    setEnviando(true);
    setError("");

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.nombre.trim(),
          phone_raw: form.whatsapp.trim(),
          message: form.mensaje.trim(),
          tipo_consulta: form.tipo_consulta,
          contact_channel_preferred: form.contacto_preferido,
          franja_horaria: form.franja_horaria,
          source_system: "landing_profesorsonko",
          source_endpoint: "landing_form",
          form_id: "form_main",
          landing_url: window.location.href,
          referrer_url: document.referrer || "",
          lead_status: "nuevo",
          created_at: new Date().toISOString(),
          ...getUtmParams(),
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");
      setEnviado(true);

      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'lead_form_submit',
          lead_tipo_consulta: form.tipo_consulta,
          lead_canal: form.contacto_preferido,
          lead_franja: form.franja_horaria,
        });
      }
    } catch {
      setError("No se pudo enviar. Prueba por WhatsApp directamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" style={{ background: '#E7E0D6' }} className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* Left */}
          <div className="flex-1">
            <p className="font-inter text-xs uppercase tracking-[0.25em] mb-4" style={{ color: '#8C7B6A' }}>
              Contacto directo
            </p>
            <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>
              Explica tu situación.
            </h2>
            <p className="font-inter text-sm leading-relaxed mb-5 max-w-sm" style={{ color: 'rgba(36,31,27,0.6)' }}>
              Puedes realizar tu consulta directamente por WhatsApp o rellenando el formulario. La conversación inicial permite explicar tu situación y recibir orientación personalizada. Confidencial y sin compromiso.
            </p>
            <a
              href="tel:+34632372152"
              className="inline-flex items-center gap-2 font-inter text-sm font-semibold mb-6 transition-colors duration-200"
              style={{ color: '#241F1B' }}
              onMouseEnter={e => e.currentTarget.style.color = '#A65A4D'}
              onMouseLeave={e => e.currentTarget.style.color = '#241F1B'}
            >
              <span style={{ color: '#A65A4D' }}>📞</span> +34 632 37 21 52
            </a>

            {/* WhatsApp destacado */}
            <a
              href="https://wa.me/34632372152"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 mb-4 transition-all duration-200"
              style={{ background: '#25D366', borderRadius: '6px' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1ebe5d'}
              onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-inter font-semibold text-sm text-white">Hablar por WhatsApp</div>
                <div className="font-inter text-xs text-white/80">Respuesta rápida · Atención directa</div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="w-full md:w-[460px] flex-shrink-0">
            {/* Imagen — consulta íntima, healer y consultante */}
            <div className="overflow-hidden mb-4" style={{ borderRadius: '6px', height: '180px' }}>
              <img
                src="https://media.base44.com/images/public/69b8ff201a186ac9effab2b3/58f00fa3e_image.png"
                alt="Consulta espiritual personalizada"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 25%' }}
                loading="lazy"
              />
            </div>
            <div className="p-8" style={{ background: '#fff', borderRadius: '6px', border: '1px solid rgba(140,123,106,0.2)' }}>
              {enviado ? (
                <div className="text-center py-8">
                  <div className="text-3xl mb-3" style={{ color: '#25D366' }}>✓</div>
                  <h3 className="text-xl font-normal mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'normal', color: '#241F1B' }}>Consulta recibida</h3>
                  <p className="font-inter text-sm mb-3" style={{ color: 'rgba(36,31,27,0.6)' }}>
                    Profesor SONKO te contactará {form.contacto_preferido === 'llamada' ? 'por teléfono' : form.contacto_preferido === 'whatsapp' ? 'por WhatsApp' : ''} {form.franja_horaria === 'manana' ? 'por la mañana (9h–13h)' : form.franja_horaria === 'tarde' ? 'por la tarde (13h–18h)' : form.franja_horaria === 'noche' ? 'por la noche (18h–21h)' : 'en breve'}.
                  </p>
                  <p className="font-inter text-xs" style={{ color: 'rgba(36,31,27,0.45)' }}>
                    Toda la información es confidencial.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-inter text-xs uppercase tracking-wide block mb-2" style={{ color: '#8C7B6A' }}>
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 font-inter text-sm focus:outline-none transition-colors"
                      style={{
                        background: '#F3EEE6',
                        border: '1px solid rgba(140,123,106,0.3)',
                        borderRadius: '4px',
                        color: '#241F1B',
                      }}
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs uppercase tracking-wide block mb-2" style={{ color: '#8C7B6A' }}>
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full px-4 py-3 font-inter text-sm focus:outline-none transition-colors"
                      style={{
                        background: '#F3EEE6',
                        border: error ? '1px solid #A65A4D' : '1px solid rgba(140,123,106,0.3)',
                        borderRadius: '4px',
                        color: '#241F1B',
                      }}
                    />
                    {error && (
                      <p className="font-inter text-xs mt-1" style={{ color: '#A65A4D' }}>
                        {error}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="font-inter text-xs uppercase tracking-wide block mb-2" style={{ color: '#8C7B6A' }}>
                      Tipo de consulta *
                    </label>
                    <select
                      name="tipo_consulta"
                      required
                      value={form.tipo_consulta}
                      onChange={handleChange}
                      className="w-full px-4 py-3 font-inter text-sm focus:outline-none transition-colors"
                      style={{
                        background: '#F3EEE6',
                        border: '1px solid rgba(140,123,106,0.3)',
                        borderRadius: '4px',
                        color: form.tipo_consulta ? '#241F1B' : '#8C7B6A',
                      }}
                    >
                      <option value="" disabled>Selecciona...</option>
                      <option value="amor">Problemas de amor / pareja</option>
                      <option value="negocio">Negocios / trabajo</option>
                      <option value="bloqueo">Bloqueos personales</option>
                      <option value="familia">Problemas familiares</option>
                      <option value="proteccion">Protección espiritual</option>
                      <option value="otro">Otra consulta</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-inter text-xs uppercase tracking-wide block mb-2" style={{ color: '#8C7B6A' }}>
                      ¿Cómo prefieres que te contactemos? *
                    </label>
                    <select
                      name="contacto_preferido"
                      required
                      value={form.contacto_preferido}
                      onChange={handleChange}
                      className="w-full px-4 py-3 font-inter text-sm focus:outline-none transition-colors"
                      style={{
                        background: '#F3EEE6',
                        border: '1px solid rgba(140,123,106,0.3)',
                        borderRadius: '4px',
                        color: form.contacto_preferido ? '#241F1B' : '#8C7B6A',
                      }}
                    >
                      <option value="" disabled>Selecciona...</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="llamada">Llamada telefónica</option>
                      <option value="yo_contacto">Prefiero contactar yo</option>
                    </select>
                  </div>
                  {form.contacto_preferido && form.contacto_preferido !== 'yo_contacto' && (
                    <div>
                      <label className="font-inter text-xs uppercase tracking-wide block mb-2" style={{ color: '#8C7B6A' }}>
                        Franja horaria preferida *
                      </label>
                      <select
                        name="franja_horaria"
                        required
                        value={form.franja_horaria}
                        onChange={handleChange}
                        className="w-full px-4 py-3 font-inter text-sm focus:outline-none transition-colors"
                        style={{
                          background: '#F3EEE6',
                          border: '1px solid rgba(140,123,106,0.3)',
                          borderRadius: '4px',
                          color: form.franja_horaria ? '#241F1B' : '#8C7B6A',
                        }}
                      >
                        <option value="" disabled>Selecciona...</option>
                        <option value="manana">Mañana (9h – 13h)</option>
                        <option value="tarde">Tarde (13h – 18h)</option>
                        <option value="noche">Noche (18h – 21h)</option>
                      </select>
                    </div>
                  )}
                  <div>
                    <label className="font-inter text-xs uppercase tracking-wide block mb-2" style={{ color: '#8C7B6A' }}>
                      Mensaje (opcional)
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Describe brevemente tu situación..."
                      className="w-full px-4 py-3 font-inter text-sm focus:outline-none transition-colors resize-none"
                      style={{
                        background: '#F3EEE6',
                        border: '1px solid rgba(140,123,106,0.3)',
                        borderRadius: '4px',
                        color: '#241F1B',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={enviando}
                    className="w-full py-4 text-white font-inter font-semibold text-sm hover:opacity-90 transition-all duration-300 disabled:opacity-60"
                    style={{ background: '#A65A4D', borderRadius: '4px' }}
                  >
                    {enviando ? "Enviando..." : "Enviar consulta"}
                  </button>
                  <p className="font-inter text-xs text-center" style={{ color: 'rgba(36,31,27,0.45)' }}>
                    Confidencial · Sin compromiso · Respuesta directa
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}