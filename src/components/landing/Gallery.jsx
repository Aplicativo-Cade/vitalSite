import { useEffect, useRef, useState } from "react";
import { Image } from "@/components/ui/image";
import { GALLERY } from "@/data/vital";
import GalleryLightbox from "./GalleryLightbox";

const TOTAL = GALLERY.length;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(null);
  const lastAction = useRef(Date.now());
  const downX = useRef(null);
  const moved = useRef(false);

  const go = (next) => {
    setIndex(((next % TOTAL) + TOTAL) % TOTAL);
    lastAction.current = Date.now();
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!open && Date.now() - lastAction.current > 7000) {
        setIndex((current) => (current + 1) % TOTAL);
      }
    }, 3200);
    return () => clearInterval(id);
  }, [open]);

  const offset = (k) => {
    let delta = k - index;
    if (delta > TOTAL / 2) delta -= TOTAL;
    if (delta < -TOTAL / 2) delta += TOTAL;
    return delta;
  };

  const onPointerDown = (event) => {
    downX.current = event.clientX;
    moved.current = false;
  };

  const onPointerMove = (event) => {
    if (downX.current !== null && Math.abs(event.clientX - downX.current) > 10) moved.current = true;
  };

  const onPointerUp = (event) => {
    if (downX.current === null) return;
    const delta = event.clientX - downX.current;
    downX.current = null;
    if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
  };

  const onCardClick = (k, delta) => {
    if (moved.current) return;
    if (delta === 0) setOpen(GALLERY[k]);
    else go(k);
    lastAction.current = Date.now();
  };

  return (
    <section className="g3sec">
      <div className="wrap">
        <h2 className="sec-title g3t">Así se ve por dentro</h2>
        <p className="sec-sub g3s">Material profesional, claro y listo para imprimir.</p>

        <div className="g3car">
          <div className="g3glow" aria-hidden="true" />
          <div
            className="g3stage"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              downX.current = null;
            }}
          >
            {GALLERY.map((item, k) => {
              const delta = offset(k);
              const abs = Math.abs(delta);
              const style = {
                transform: `translateX(${delta * 56}%) scale(${abs === 0 ? 1 : abs === 1 ? 0.8 : 0.64}) rotateY(${
                  delta === 0 ? 0 : delta < 0 ? 22 : -22
                }deg)`,
                zIndex: 10 - abs,
                opacity: abs > 2 ? 0 : 1,
                pointerEvents: abs > 1 ? "none" : "auto",
                filter:
                  abs === 0
                    ? "none"
                    : `brightness(${abs === 1 ? 0.42 : 0.28}) blur(${abs === 1 ? 1.6 : 3}px) saturate(0.8)`,
              };
              return (
                <div
                  key={item.src}
                  className={abs === 0 ? "g3cc on" : "g3cc"}
                  style={style}
                  onClick={() => onCardClick(k, delta)}
                  role={abs === 0 ? "button" : undefined}
                  tabIndex={abs === 0 ? 0 : -1}
                  aria-label={abs === 0 ? `Ampliar: ${item.alt}` : undefined}
                  onKeyDown={(event) => {
                    if (abs === 0 && (event.key === "Enter" || event.key === " ")) {
                      event.preventDefault();
                      setOpen(GALLERY[k]);
                    }
                  }}
                >
                  <Image src={item.src} alt={item.alt} fittingType="fill" loading="eager" />
                </div>
              );
            })}
          </div>

          <div className="g3nav">
            <button type="button" className="g3arr" aria-label="Página anterior" onClick={() => go(index - 1)}>
              ‹
            </button>
            {TOTAL > 10 ? (
              <span className="g3num">
                <b>{index + 1}</b> / {TOTAL}
              </span>
            ) : (
              <div className="g3dots">
                {GALLERY.map((item, k) => (
                  <i key={item.src} className={k === index ? "on" : ""} />
                ))}
              </div>
            )}
            <button type="button" className="g3arr" aria-label="Página siguiente" onClick={() => go(index + 1)}>
              ›
            </button>
          </div>

          <p className="g3hint">👆 Desliza para ver más · toca la ficha para ampliarla</p>
        </div>
      </div>

      <GalleryLightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}