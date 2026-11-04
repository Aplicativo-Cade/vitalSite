import { FAQ } from "@/data/geriactiva";

export default function Faq() {
  return (
    <section className="faq">
      <div className="wrap">
        <h2 className="sec-title">Preguntas frecuentes</h2>
        {FAQ.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}