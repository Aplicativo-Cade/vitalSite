import ComparisonTable, { type CompareRow } from "../landing/ComparisonTable";

const ROWS: CompareRow[] = [
  {
    left: { text: "Contenido fijo, sin cambios", ok: false },
    right: { text: "Actualizaciones automáticas constantes", ok: true },
  },
  {
    left: { text: "Descargas manuales de cada versión", ok: false },
    right: { text: "Sin descargas: siempre la última versión", ok: true },
  },
  {
    left: { text: "Pesado y difícil de abrir en el celular", ok: false },
    right: { text: "Funciona perfecto en celular, tablet o PC", ok: true },
  },
  {
    left: { text: "Ocupa memoria de tu dispositivo", ok: false },
    right: { text: "No ocupa memoria", ok: true },
  },
  {
    left: { text: "Solo páginas estáticas", ok: false },
    right: { text: "Herramientas interactivas", ok: true },
  },
  {
    left: { text: "Ejercicios ilustrados", ok: true },
    right: { text: "+1.300 fichas ilustradas, paso a paso", ok: true },
  },
];

export default function WhyWebApp() {
  return (
    <section>
      <div className="wrap wide">
        <h2 className="sec-title">¿Por qué elegir nuestro MiniApp en lugar de libros estáticos?</h2>
        <p className="sec-sub">
          Lo mejor de un libro, con el poder de un software moderno.
        </p>

        <ComparisonTable
          leftTitle="Libros en PDF"
          rightTitle="Vital MiniApp"
          caption="Comparativo entre libros en PDF y Vital MiniApp"
          rows={ROWS}
          image='https://res.cloudinary.com/xiupvhfs/image/upload/v1793980033/watermarked_img_4218221343422060236.jpg'
        />
      </div>
    </section>
  );
}
