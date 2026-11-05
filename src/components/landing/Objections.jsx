import { OBJECTIONS } from "@/data/vital";

export default function Objections() {
  return (
    <section>
      <div className="wrap">
        <h2 className="sec-title">Quizás estás pensando…</h2>
        <div className="obj">
          {OBJECTIONS.map((item) => (
            <div className="card" key={item.q}>
              <div className="q">{item.q}</div>
              <div className="a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}