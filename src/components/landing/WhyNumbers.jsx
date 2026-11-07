import { MOCKUP, NUMBERS } from "@/data/vital";

export default function WhyNumbers() {
  return (
    <section className="alt">
      <div className="wrap">
        <h2 className="sec-title">¿Por qué elegir Vital?</h2>
        <p className="sec-sub">La colección más completa del mercado, ahora en formato digital interactivo.</p>

        <div className="big-num">
          <b>+1.997</b>
          Fichas Ilustradas: Un ejercicio por página, paso a paso, con y sin equipamiento.
        </div>

        <div className="inc">
          {NUMBERS.map((item) => (
            <div className="card" key={item.t}>
              <div className="n">{item.n}</div>
              <div className="t">{item.t}</div>
              <div className="d">{item.d}</div>
            </div>
          ))}
        </div>

        <img
          className="tomos-img"
          src={MOCKUP}
          alt="Colección de 3 tomos Vital"
          loading="lazy"
        />
      </div>
    </section>
  );
}