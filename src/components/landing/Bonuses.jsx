import { Image } from "@/components/ui/image";
import { BONUSES } from "@/data/vital";

export default function Bonuses() {
  return (
    <section className="bonos">
      <div className="wrap">
        <p className="center">
          <span className="pill">BONOS EXCLUSIVOS</span>
        </p>
        <h2 className="sec-title" style={{ color: "#fff" }}>
          Todo lo que te llevás hoy con <span className="amber">acceso vitalicio.</span>
        </h2>
        <p className="sec-sub" style={{ color: "rgba(255,255,255,.75)" }}>
          4 bonos para aplicar con seguridad en cualquier condición.
        </p>

        {BONUSES.map((bono) => (
          <div className="bono" key={bono.title}>
            <Image src={bono.img} alt={bono.alt} fittingType="fit" loading="lazy" />
            <h3>{bono.title}</h3>
            <p>{bono.text}</p>
            <div className="valor">
              <s>{bono.value}</s>
              <span className="gratis">HOY GRATIS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}