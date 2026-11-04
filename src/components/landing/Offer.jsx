import CtaButton from "./CtaButton";
import OfferCountdown from "./OfferCountdown";

const STACK = [
  <>
    <b>5 Tomos</b> · +1.395 páginas ilustradas
  </>,
  <>
    <b>Tomo 5</b> con 91 láminas imprimibles (sopas, laberintos y secuencias)
  </>,
  <>
    <b>4 Bonos</b>: Movilidad Reducida, Recuperación, Guía de Evaluación y Armador de Sesiones
  </>,
  <>
    Acceso inmediato y <b>para siempre</b> + actualizaciones
  </>,
];

const PLAN_FEATURES = [
  "Los 5 tomos (+1.395 páginas)",
  "91 láminas cognitivas imprimibles",
  "Los 4 bonos exclusivos",
  "Acceso inmediato y para siempre",
  "Garantía de 7 días",
];

export default function Offer() {
  return (
    <section id="comprar">
      <div className="wrap">
        <OfferCountdown />

        <div className="vstack">
          <h3>Todo lo que te llevás hoy</h3>
          <ul>
            {STACK.map((item, i) => (
              <li key={i}>
                <span className="ck" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="anchor">
            Armar este material vos mismo: <b>semanas de trabajo.</b> Mandarlo a diseñar:{" "}
            <b>cientos de dólares.</b>
            <br />
            Valor real: <s>US$ 84.95</s>
          </p>
          <p className="ridic">Hoy lo llevás por menos de lo que cobrás por UNA sesión. 🤯</p>
        </div>

        <div className="plan best" style={{ maxWidth: 520, margin: "0 auto" }}>
          <h3>Colección Completa GeriActiva</h3>
          <p className="old">
            Antes: <s>US$ 84.95</s>
          </p>
          <div className="now">US$ 17</div>
          <p className="save">Ahorrás US$ 67.95</p>
          <ul className="feats">
            {PLAN_FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <CtaButton>QUIERO MI KIT AHORA</CtaButton>
          <p className="after">
            Con que uses <b>una sola ficha con un solo paciente</b>, ya lo recuperaste.
          </p>
        </div>

        <div className="guarantee">
          <span className="g" aria-hidden="true">
            🛡️
          </span>
          <span>
            <b>Garantía de 7 días.</b> Si no te sirve, te devolvemos el 100% de tu dinero. Sin preguntas.
          </span>
        </div>
      </div>
    </section>
  );
}