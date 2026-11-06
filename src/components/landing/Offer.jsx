import CtaButton from "./CtaButton";
import OfferCountdown from "./OfferCountdown";

const STACK = [
  <>
    <b>+1.997 Fichas Ilustradas</b> · Un ejercicio por página, paso a paso
  </>,
  <>
    <b>5 Tomos completos + Herramientas</b> · Físico, movilidad, estiramientos, cognitivo, dinámicas y MiniApp
  </>,
  <>
    <b>Buscador Inteligente y Filtros</b> · Encontrá ejercicios por condición (silla de ruedas, post-caída, marcha)
  </>,
  <>
    <b>Generador de Sesión Express</b> · Seleccioná el tiempo y foco; el MiniApp arma tu rutina automáticamente
  </>,
  <>
    <b>Sistema de Colecciones</b> · Guardá y agrupá tus rutinas favoritas estilo carpetas para cada paciente
  </>,
  <>
    <b>3 Bonos exclusivos + +170 Adaptados</b> · Movilidad reducida, recuperación, evaluación y sesiones
  </>,
  <>
    Acceso inmediato y <b>vitalicio</b> + actualizaciones
  </>,
];

const PLAN_FEATURES = [
  "Acceso completo al MiniApp interactivo",
  "+1.997 fichas ilustradas paso a paso",
  "Buscador inteligente y filtros avanzados",
  "Generador de Sesión Express automático",
  "Sistema de colecciones y carpetas",
  "Los 3 bonos exclusivos y +170 adaptados",
  "Garantía incondicional de 7 días",
];

export default function Offer() {
  return (
    <section id="comprar">
      <div className="wrap">
        <OfferCountdown />

        <div className="vstack">
          <h3>Todo lo que te llevás hoy con acceso vitalicio.</h3>
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
            Desarrollar este software y digitalizar todo el material: <b>meses de trabajo.</b> Contratar programadores y diseñadores:{" "}
            <b>cientos de dólares.</b>
            <br />
            Valor real: <s>US$ 325.78</s>
          </p>
          <p className="ridic">Hoy lo llevás por menos de lo que cobrás por UNA sesión. 🤯</p>
        </div>

        <div className="plan best" style={{ maxWidth: 520, margin: "0 auto" }}>
          <h3>Colección Completa GeriActiva MiniApp</h3>
          <p className="old">
            Antes: <s>US$ 325.78</s>
          </p>
          <div className="now">US$ 17</div>
          <p className="save">Ahorrás US$ 308.78</p>
          <ul className="feats">
            {PLAN_FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <CtaButton sub="Acceso inmediato · Pago único">QUIERO MI ACCESO AL MINIAPP AHORA</CtaButton>
          <p className="after">
            Con que uses <b>una sola ficha o generes una sesión express</b>, ya lo recuperaste.
          </p>
        </div>

        <div className="guarantee">
          <span className="g" aria-hidden="true">
            🛡️
          </span>
          <span>
            <b>Garantía de 7 días.</b> Si el MiniApp no supera tus expectativas, te devolvemos el 100% de tu dinero. Sin preguntas.
          </span>
        </div>
      </div>
    </section>
  );
}