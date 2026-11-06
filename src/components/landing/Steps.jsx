import { STEPS } from "@/data/vital";

export default function Steps() {
  return (
    <section className="alt py-16">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="sec-title text-3xl md:text-4xl font-bold">
            Así de simple: <span className="amber">Abre, Elige y Aplica</span>
          </h2>
          <p className="sec-sub mt-2 text-muted-foreground">Sin armar la sesión desde cero. Sin improvisar.</p>
        </div>

        {/* Container Grid: Vídeo à esquerda e Steps à direita no Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* VÍDEO (Esquerda no desktop, abaixo no mobile conforme ordem do DOM ou ordenado via flex/grid) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="hero-media rounded-2xl overflow-hidden shadow-lift border border-border/50 bg-card">
              <div className="video-wrap relative w-full aspect-video">
                <iframe
                  src="https://fast.wistia.net/embed/iframe/cwuuj9b5lq?seo=false&videoFoam=false"
                  title="Presentación del kit Vital"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* STEPS (Direita no desktop, Compactos) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-3">
            {STEPS.map((s) => (
              <div 
                className="step flex items-start gap-4 p-3.5 rounded-xl bg-card border border-border/40 shadow-soft transition-all hover:border-primary/40" 
                key={s.n}
              >
                <div className="num shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary font-display font-bold flex items-center justify-center text-sm">
                  {s.n}
                </div>
                <div>
                  <b className="text-sm md:text-base font-semibold block text-foreground">{s.title}</b>
                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}