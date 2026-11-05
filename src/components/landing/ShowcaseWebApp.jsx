import { useRef, useState, useEffect } from "react";
import { WEBAPP_SCREENS } from "@/data/vital";

export default function ShowcaseWebApp() {
  const sliderRef = useRef(/** @type {HTMLDivElement | null} */ (null));
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicamos o array para criar o efeito visual de loop infinito sem quebras
  const slides = [...WEBAPP_SCREENS, ...WEBAPP_SCREENS];

  // Tratamento de drag suave para desktop sem selecionar texto ou travar
  const handleMouseDown = (/** @type {{ pageX: number; }} */ e) => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsMouseDown(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (/** @type {{ preventDefault: () => void; pageX: number; }} */ e) => {
    const slider = sliderRef.current;
    if (!isMouseDown || !slider) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.8; // Sensibilidade do arraste
    slider.scrollLeft = scrollLeft - walk;
  };

  // Efeito de rolagem infinita contínua caso o usuário não esteja interagindo
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const maxScroll = slider.scrollWidth / 2;
      if (slider.scrollLeft >= maxScroll) {
        slider.scrollLeft -= maxScroll;
      } else if (slider.scrollLeft <= 0) {
        slider.scrollLeft += maxScroll;
      }
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="showcase-section">
      <div className="wrap">
        <div className="section-header">
          <span className="pill ga-amber-ink">EL PRODUCTO POR DENTRO</span>
          <h2 className="sec-title">Así funciona tu nuevo WebApp interactivo</h2>
          <p className="sec-sub">
            Sin PDFs pesados ni carpetas desordenadas. Diseñado para usarse en segundos desde tu celular, tablet o computadora.
          </p>
        </div>
      </div>

      {/* Container do Carrossel */}
      <div
        className={`showcase-carousel-wrapper ${isMouseDown ? "grabbing" : ""}`}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="showcase-track">
          {slides.map((screen, idx) => (
            <div className="showcase-card" key={`${screen.id}-${idx}`}>
              <div className="card-image-frame">
                <img
                  src={screen.image}
                  alt={screen.title}
                  width={340}
                  height={680}
                  className="screen-img"
                  draggable={false} // Evita o drag nativo de imagem do navegador
                  loading={idx < 3 ? "eager" : "lazy"}
                />
              </div>
              <div className="card-content">
                <span className="card-badge">{screen.badge}</span>
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}