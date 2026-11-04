import { useEffect } from "react";

export default function GalleryLightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="g3lbx" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
      <button type="button" aria-label="Cerrar" onClick={onClose}>
        ×
      </button>
      <img src={item.src} alt={item.alt} onClick={(event) => event.stopPropagation()} />
    </div>
  );
}