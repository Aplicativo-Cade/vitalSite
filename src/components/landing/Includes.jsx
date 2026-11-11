import { NUMBERS } from "@/data/vital";
import CtaButton from "./CtaButton";

export default function Includes() {
  return (
    <section className="py-20">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="pill mb-3 inline-block">VENTAJAS EXCLUSIVAS</span>
          <h2 className="sec-title text-3xl md:text-4xl font-bold">Todo lo que incluye Vital</h2>
          <p className="sec-sub mt-2 text-muted-foreground">
            La colección más completa del mercado, ahora en formato digital interactivo. Sin armar sesiones desde cero.
          </p>
        </div>

        {/* Card Destaque para o +1.300 (Redesenhado para parecer estatística de valor, não CTA) */}
        <div className="mb-10 rounded-3xl bg-card border border-border/60 p-8 shadow-soft flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex-1 space-y-3 text-center md:text-left z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              Biblioteca masiva
            </span>
            <div className="flex items-baseline justify-center md:justify-start gap-2">
              <span className="font-display text-5xl md:text-6xl font-bold text-foreground">+1.300</span>
              <span className="text-xl font-medium text-muted-foreground">Fichas</span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
              Fichas Ilustradas: Un ejercicio por página, paso a paso, con y sin equipamiento, diseñadas específicamente para profesionales de la salud.
            </p>
          </div>

            <div>
              <img
                src='https://res.cloudinary.com/xiupvhfs/image/upload/v1794402236/Cole%C3%A7%C3%A3o_Verde_de_Fisioterapia_e_Bem-Estar.png'
                alt="Colección Vital"
                className="object-contain drop-shadow-lg"
                loading="lazy"
              />
            </div>
        </div>

        {/* Grid de Cards Numéricos / Benefícios do WhyNumbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {NUMBERS.map((item) => (
            <div key={item.t} className="rounded-2xl bg-card p-6 border border-border/40 shadow-soft">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">{item.n}</div>
              <div className="font-semibold text-base mb-1 text-foreground">{item.t}</div>
              <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.d}</div>
            </div>
          ))}
        </div>

        {/* CTA no final conforme solicitado */}
        <div className="flex justify-center mt-8">
          <CtaButton sub="Acceso inmediato · Garantía de 7 días">
            QUIERO MI ACCESO AL MiniApp AHORA
          </CtaButton>
        </div>

      </div>
    </section>
  );
}