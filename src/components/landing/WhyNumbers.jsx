import { Image } from "@/components/ui/image";
import { MOCKUP, NUMBERS } from "@/data/geriactiva";

export default function WhyNumbers() {
  return (
    <section className="alt">
      <div className="wrap">
        <h2 className="sec-title">¿Por qué elegir GeriActiva?</h2>
        <p className="sec-sub">La colección más completa del mercado, en una sola biblioteca.</p>

        <div className="big-num">
          <b>+1.395</b>
          páginas ilustradas · un ejercicio por página · organizadas por nivel y objetivo
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

        <Image
          className="tomos-img"
          src={MOCKUP}
          alt="Colección de 5 tomos GeriActiva"
          fittingType="fit"
          loading="lazy"
        />
      </div>
    </section>
  );
}