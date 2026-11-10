
import CtaButton from "./CtaButton";

const VIDEO_URL =
  "https://res.cloudinary.com/xiupvhfs/video/upload/q_auto/f_auto/v1794348503/Con_Vital_su_Biblioteca_Inteligente.mp4";

const VIDEO_POSTER =
  "https://res.cloudinary.com/xiupvhfs/video/upload/so_0/v1794348503/Con_Vital_su_Biblioteca_Inteligente.jpg";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">

        <div className="hero-copy">
          <span className="pill" style={{ color: "#2b7351" }}>
            FISIOTERAPEUTAS · T.O. · EDUCADORES FÍSICOS · CUIDADORES
          </span>

          <h1>
            Dejá de improvisar tus sesiones con{" "}
            <span className="amber">adultos mayores</span>
          </h1>

          <p className="sub sub-strong">
            Armá sesiones profesionales para adultos mayores en minutos.
          </p>

          <p className="sub">
            Todo lo que necesitás, listo en una plataforma inteligente
          </p>

          <p className="sub sub-small">
            +1.300 fichas y generador express.
          </p>

          <div>
            <CtaButton sub="Acceso inmediato · Garantía de 7 días">
              QUIERO MI ACCESO AL MiniApp AHORA
            </CtaButton>
          </div>
        </div>

        <div className="hero-media">
          <div className="video-wrap">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={VIDEO_POSTER}
              aria-label="Presentación de la biblioteca inteligente"
            >
              <source src={VIDEO_URL} />
            </video>
          </div>
        </div>

      </div>
    </header>
  );
}
