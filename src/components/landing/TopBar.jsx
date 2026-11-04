import { CHECKOUT_URL } from "@/data/geriactiva";

export default function TopBar() {
  const today = new Date().toLocaleDateString("es-CO", { day: "2-digit", month: "2-digit" });

  return (
    <div className="top">
      <b>GeriActiva</b>
      <div className="topdisc">
        🔥 Descuento válido solo hoy
        <br />
        <span>{today}</span>
      </div>
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
        Quiero el kit
      </a>
    </div>
  );
}