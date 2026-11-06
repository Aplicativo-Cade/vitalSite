import { CHECKOUT_URL } from "@/data/vital";
import { Leaf } from "lucide-react";

export default function TopBar() {
  const today = new Date().toLocaleDateString("es-CO", { day: "2-digit", month: "2-digit" });

  return (
    <div className="top">
      <span className="font-display text-2xl">Vital</span>
      <div className="topdisc">
        🔥 DESCUENTO VÁLIDO SÓLO HOY • ACCESO INSTANTÁNEO
        <br />
        <span>{today}</span>
      </div>
    </div>
  );
}