import { INCLUDES } from "@/data/vital";

export default function Includes() {
  return (
    <section>
      <div className="wrap">
        <h2 className="sec-title">Todo lo que incluye</h2>
        <ul className="feat">
          {INCLUDES.map((item) => (
            <li key={item}>
              <span className="ck" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}