import { AUDIENCE } from "@/data/vital";

export default function Audience() {
  return (
    <section className="alt">
      <div className="wrap">
        <h2 className="sec-title">¿Para quién es este material?</h2>
        <p className="sec-sub">Para todo profesional que trabaja con la tercera edad.</p>
        <div className="aud">
          {AUDIENCE.map((item) => (
            <div className="card" key={item.label}>
              <span className="ico" aria-hidden="true">
                {item.icon}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}