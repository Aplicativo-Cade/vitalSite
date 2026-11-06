import { Check, X } from "lucide-react";

export type CompareCell = { text: string; ok: boolean };
export type CompareRow = { left: CompareCell; right: CompareCell };

type Props = {
  /** Título da coluna clara (a opção "comum") */
  leftTitle: string;
  /** Título da coluna escura (a opção destacada) */
  rightTitle: string;
  rows: CompareRow[];
  /** Imagem opcional ao lado da tabela (só aparece em telas largas) */
  image?: string;
  /** Legenda acessível da tabela */
  caption?: string;
};

function Cell({ cell }: { cell: CompareCell }) {
  return (
    <td className={`cmp-cell ${cell.ok ? "ok" : "no"}`}>
      <span className="cmp-ico" aria-hidden="true">
        {cell.ok ? <Check strokeWidth={2.2} /> : <X strokeWidth={2.2} />}
      </span>
      <span className="sr-only">{cell.ok ? "Incluye: " : "No incluye: "}</span>
      <span>{cell.text}</span>
    </td>
  );
}

export default function ComparisonTable({ leftTitle, rightTitle, rows, image, caption }: Props) {
  return (
    <div className="cmp">
      <table className="cmp-table">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr>
            <th scope="col" className="cmp-head left">{leftTitle}</th>
            <th scope="col" className="cmp-head right">{rightTitle}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <Cell cell={row.left} />
              <Cell cell={row.right} />
            </tr>
          ))}
        </tbody>
      </table>

      {image && (
        <div className="cmp-img">
          <img src={image} alt="Comparative image" loading="lazy" />
        </div>
      )}
    </div>
  );
}
