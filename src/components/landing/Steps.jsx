import { STEPS } from "@/data/vital";

export default function Steps() {
  return (
    <section className="alt">
      <div className="wrap">
        <h2 className="sec-title">
          Así de simple: <span className="amber">Abre, Elige y Aplica</span>
        </h2>
        <p className="sec-sub">Sin armar la sesión desde cero. Sin improvisar.</p>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <div>
                <b>{s.title}</b>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}