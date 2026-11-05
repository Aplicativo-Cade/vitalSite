import { Image } from "@/components/ui/image";
import { USAGE_PHOTOS } from "@/data/vital";

const STATS = [
  { n: "500+", l: "Clientes" },
  { n: "4.9★", l: "Calificación" },
  { n: "100%", l: "Satisfacción" },
];

export default function Results() {
  return (
    <section className="alt">
      <div className="wrap">
        <p className="center">
          <span className="pill">TESTIMONIOS REALES</span>
        </p>
        <h2 className="sec-title">Resultados que se sienten en el día a día</h2>

        <div className="stats">
          {STATS.map((stat) => (
            <div key={stat.l}>
              <div className="n">{stat.n}</div>
              <div className="l">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="show">
          {USAGE_PHOTOS.map((photo) => (
            <Image key={photo.src} src={photo.src} alt={photo.alt} fittingType="fit" loading="lazy" />
          ))}
        </div>
        <p className="hint">← Deslizá para ver más →</p>
      </div>
    </section>
  );
}