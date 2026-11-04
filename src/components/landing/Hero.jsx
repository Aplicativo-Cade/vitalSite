import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <span className="pill">FISIOTERAPEUTAS · T.O. · EDUCADORES FÍSICOS · CUIDADORES</span>
        <h1>
          Dejá de improvisar tus sesiones con <span className="amber">adultos mayores</span>
        </h1>
        <p className="sub sub-strong">armá sesiones profesionales para adultos mayores en minutos</p>
        <p className="sub">todo lo que necesitás, listo para imprimir y aplicar</p>
        <p className="sub sub-small">+1.395 páginas de actividades ilustradas · abrís, elegís y aplicás</p>

        <div className="video-wrap">
          <iframe
            src="https://fast.wistia.net/embed/iframe/cwuuj9b5lq?seo=false&videoFoam=false"
            title="Presentación del kit GeriActiva"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
            scrolling="no"
          />
        </div>

        <CtaButton sub="Acceso inmediato · Garantía de 7 días">QUIERO MI KIT AHORA</CtaButton>
        <p className="trust">
          <span className="stars">★★★★★</span> Material creado por y para profesionales de la salud
        </p>
      </div>
    </header>
  );
}