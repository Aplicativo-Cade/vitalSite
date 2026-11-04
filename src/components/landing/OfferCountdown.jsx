import { useEffect, useState } from "react";

const TOTAL_SECONDS = 15 * 60;

export default function OfferCountdown() {
  const [left, setLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const end = Date.now() + TOTAL_SECONDS * 1000;
    const id = setInterval(() => {
      setLeft(Math.max(0, Math.floor((end - Date.now()) / 1000)));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const minutes = String(Math.floor(left / 60)).padStart(2, "0");
  const seconds = String(left % 60).padStart(2, "0");

  return (
    <div className="urg">
      ⏳ Oferta de lanzamiento — termina en:
      <div className="clock" aria-live="off">
        {minutes}:{seconds}
      </div>
    </div>
  );
}