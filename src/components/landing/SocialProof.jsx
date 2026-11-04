import { Image } from "@/components/ui/image";
import { TESTIMONIALS } from "@/data/geriactiva";

export default function SocialProof() {
  return (
    <section className="social">
      <div className="wrap">
        <p className="center">
          <span className="pill">PROFESIONALES QUE YA LO USAN</span>
        </p>
        <h2 className="sec-title">Fisioterapeutas de LATAM ya trabajan con GeriActiva</h2>
        <p className="sec-sub">Historias reales de quienes dejaron de improvisar.</p>

        <div className="rtesti">
          {TESTIMONIALS.map((t) => (
            <article className="rt" key={t.who}>
              <Image src={t.photo} alt={t.alt} fittingType="fill" loading="lazy" />
              <div className="body">
                <div className="stars">★★★★★</div>
                <p className="quote">“{t.quote}”</p>
                <div className="who">{t.who}</div>
                <div className="role">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}