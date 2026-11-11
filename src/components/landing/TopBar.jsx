
export default function TopBar() {
  const today = new Date().toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "2-digit",
  });

  return (
    <div className="top">
      <img
        src="https://res.cloudinary.com/xiupvhfs/image/upload/v1794405918/2026-11-10_10-31-removebg-preview.png"
        alt="Logo da marca"
        className="top-logo"
      />

      <div className="topdisc">
        <span className="gold-text">
        DESCUENTO VÁLIDO SÓLO HOY  <span className="gold-date">{today}</span>
        </span>        
      </div>
    </div>
  );
}
