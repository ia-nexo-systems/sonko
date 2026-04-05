export default function AvisoLegalSection() {
  return (
    <section style={{ background: '#E7E0D6', borderTop: '1px solid rgba(140,123,106,0.2)' }} className="py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="p-6" style={{ background: 'rgba(140,123,106,0.08)', borderRadius: '6px', border: '1px solid rgba(140,123,106,0.2)' }}>
          <p className="font-inter text-xs leading-relaxed mb-3" style={{ color: 'rgba(36,31,27,0.55)' }}>
            <strong style={{ color: 'rgba(36,31,27,0.7)' }}>Aviso legal:</strong> Esta consulta es de carácter espiritual y en ningún caso sustituye asesoramiento médico, psicológico, legal o profesional de ningún tipo. Los resultados pueden variar según cada persona y situación. Al contactar, el usuario acepta que se trata de un servicio espiritual orientado al acompañamiento personal.
          </p>
          <p className="font-inter text-xs" style={{ color: 'rgba(36,31,27,0.45)' }}>
            Servicio dirigido exclusivamente a mayores de 18 años.
          </p>
        </div>
      </div>
    </section>
  );
}