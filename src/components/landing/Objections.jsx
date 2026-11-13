import { OBJECTIONS } from "@/data/vital";
import CtaButton from "./CtaButton";

export default function Objections() {
  return (
    <section>
      <div className="wrap">
        <h2 className="sec-title">Quizás estás pensando…</h2>
        <div className="obj">
          {OBJECTIONS.map((item) => (
            <div className="card" key={item.q}>
              <div className="q">{item.q}</div>
              <div className="a">{item.a}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <CtaButton sub="Acceso inmediato · Garantía de 7 días">
              QUIERO MI ACCESO AL MiniApp AHORA
            </CtaButton>
          </div>
      </div>
    </section>
  );
}