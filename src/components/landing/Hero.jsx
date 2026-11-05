import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <span className="pill" style={{ color: '#2b7351' }}>FISIOTERAPEUTAS · T.O. · EDUCADORES FÍSICOS · CUIDADORES</span>
        <h1>
          Dejá de improvisar tus sesiones con <span className="amber">adultos mayores</span>
        </h1>
        <p className="sub sub-strong">Armá sesiones profesionales para adultos mayores en minutos.</p>
        <p className="sub">Todo lo que necesitás, listo en una plataforma inteligente</p>
        <p className="sub sub-small">+1.000 fichas y generador express.</p>

        <div className="video-wrap">
          <iframe
            src="https://fast.wistia.net/embed/iframe/cwuuj9b5lq?seo=false&videoFoam=false"
            title="Presentación del kit Vital"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
            scrolling="no"
          />
        </div>

        <CtaButton sub="Acceso inmediato · Garantía de 7 días">QUIERO MI ACCESO AL WEBAPP AHORA</CtaButton>
        <p className="trust">
          <span className="stars">★★★★★</span> Material creado por y para profesionales de la salud
        </p>
      </div>
    </header>
  );
}