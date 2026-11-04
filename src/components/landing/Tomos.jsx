import { TOMOS } from "@/data/geriactiva";

export default function Tomos() {
  return (
    <section>
      <div className="wrap">
        <h2 className="sec-title">Los 5 tomos por dentro</h2>
        <p className="sec-sub">Cada página es una ficha lista para imprimir y aplicar.</p>

        {TOMOS.map((t) => (
          <div className="tomo" key={t.title}>
            <div className="ic" aria-hidden="true">
              {t.icon}
            </div>
            <div>
              <h3>
                {t.title} <span className="pg">{t.pages}</span>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: t.text }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}