
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import CtaButton from "./CtaButton";

const VIDEO_URL =
  "https://res.cloudinary.com/xiupvhfs/video/upload/q_auto/f_auto/v1794348503/Con_Vital_su_Biblioteca_Inteligente.mp4";

const VIDEO_POSTER =
  "https://res.cloudinary.com/xiupvhfs/image/upload/v1794540410/2026-11-13_00-25.png";

export default function Hero() {
  /** @type {import("react").RefObject<HTMLVideoElement>} */
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    try {
      await videoRef.current?.play();
    } catch (error) {
      console.error("Erro ao iniciar vídeo:", error);
    }
  };

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
              ref={videoRef}
              className="hero-video"
              controls
              playsInline
              preload="metadata"
              poster={VIDEO_POSTER}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              aria-label="Presentación de la biblioteca inteligente"
            >
              <source src={VIDEO_URL} />
            </video>

            {!isPlaying && (
              <button
                type="button"
                className="hero-play-button"
                onClick={handlePlay}
                aria-label="Reproducir video"
              >
                <Play size={38} fill="currentColor" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
