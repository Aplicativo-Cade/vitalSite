import { TESTIMONIALS } from "@/data/vital";

// Função auxiliar para verificar se a URL é um vídeo (sem tipagem TypeScript)
const isVideoUrl = (url) => {
  return /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(url) || url.includes("/video/upload/");
};

// Converte URL de vídeo do Cloudinary para rodar como autoplay/loop fluido (estilo GIF)
const formatMediaUrl = (url) => {
  if (url.includes("res.cloudinary.com") && url.includes("/video/upload/")) {
    return url.replace("/video/upload/", "/video/upload/f_auto,q_auto,vc_auto/");
  }
  return url;
};

export default function SocialProof() {
  return (
    <section className="social">
      <div className="wrap">
        <p className="center">
          <span className="pill">PROFESIONALES QUE YA LO USAN</span>
        </p>
        <h2 className="sec-title">Fisioterapeutas de LATAM ya trabajan con Vital</h2>
        <p className="sec-sub">Historias reales de quienes dejaron de improvisar.</p>

        <div className="rtesti">
          {TESTIMONIALS.map((t) => {
            const mediaUrl = formatMediaUrl(t.photo);
            const isVideo = isVideoUrl(t.photo);

            return (
              <article className="rt" key={t.who}>
                <div className="media-container">
                  {isVideo ? (
                    <video
                      src={mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={mediaUrl}
                      alt={t.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="body">
                  <div className="stars">★★★★★</div>
                  <p className="quote">“{t.quote}”</p>
                  <div className="who">{t.who}</div>
                  <div className="role">{t.role}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}