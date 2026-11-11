
/**
 * @typedef {{
 *   type?: "video" | "testimonial" | "image";
 *   id?: string;
 *   src?: string;
 *   alt?: string;
 *   who?: string;
 *   role?: string;
 *   quote?: string;
 *   photo?: string;
 * }} SocialProofItem
 */

// Conteúdos adicionais para compor o carrossel.
// Substitua as URLs pelas mídias reais do projeto.
/** @type {SocialProofItem[]} */
const EXTRA_ITEMS = [
  {
    type: "testimonial",
    id: "review-1",
    who: "Clemente Costa",
    role: "Fisioterapeuta",
    quote:
      "Tener una aplicación cambió por completo mi forma de atender. Hoy tengo mucha más seguridad y organización.",
    photo: "https://res.cloudinary.com/xiupvhfs/image/upload/v1789689877/samples/people/smiling-man.jpg",
  },
  {
    type: "video",
    id: "video-1",
    src: "https://res.cloudinary.com/xiupvhfs/video/upload/v1794356806/download_2.mp4",
    alt: "Depoimento em vídeo de fisioterapeuta",
  },
  {
    type: "testimonial",
    id: "review-12",
    who: "Bento Muñoz",
    role: "Terapeuta ocupacional",
    quote:
      "Antes armaba cada sesión desde cero y se me iban las tardes. Con Vital abro, elijo la ficha y la aplico. Mis pacientes notaron el cambio… y yo recuperé mi tiempo.",
    photo: "https://res.cloudinary.com/xiupvhfs/image/upload/v1790038665/2026-09-21_21-56.png",
  },
  {
    type: "image",
    id: "image-3",
    src: "https://res.cloudinary.com/xiupvhfs/image/upload/v1794357192/2026-11-10_21-31.png",
    alt: "Registro de resultado Vital",
  },
  {
    type: "testimonial",
    id: "review-2",
    who: "Lucas Ferreira",
    role: "Terapeuta ocupacional",
    quote:
    "¡Una herramienta increíble! Puedo optimizar mis atenciones y ofrecer mucha más calidad a los pacientes.",
    photo: "https://res.cloudinary.com/xiupvhfs/image/upload/v1789689886/samples/man-on-a-escalator.jpg",
  },
  {
    type: "image",
    id: "image-1",
    src: "https://res.cloudinary.com/xiupvhfs/image/upload/v1794358918/83d8f55f0a3fffcb15eba880e29306fa.jpg",
    alt: "Registro de resultado Vital",
  },
  {
    type: "testimonial",
    id: "review-3",
    who: "Camila Rodrigues",
    role: "Cuidadora",
    quote:
      "Finalmente encontré una solución que facilita mi rutina. ¡La recomiendo a todos los profesionales del área!",
    photo: "https://res.cloudinary.com/xiupvhfs/image/upload/v1790038103/50171c86420465a36c0e214311e4d7c7.jpg",
  },
  {
    type: "testimonial",
    id: "review-3",
    who: "Ana López García",
    role: "Fisioterapeuta",
    quote:
      "Dejé de improvisar. Tener miles de ejercicios ilustrados y buscarlos en segundos ordenó mi trabajo por completo: mis pacientes están más motivados.",
    photo: "https://res.cloudinary.com/xiupvhfs/image/upload/v1789747970/2026-09-18_13-12.png",
  },
];



const isVideoUrl = (url = "") => {
  return (
    /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(url) ||
    url.includes("/video/upload/")
  );
};

const formatMediaUrl = (url = "") => {
  if (
    url.includes("res.cloudinary.com") &&
    url.includes("/video/upload/")
  ) {
    return url.replace(
      "/video/upload/",
      "/video/upload/f_auto,q_auto,vc_auto/"
    );
  }

  return url;
};

// Mistura os depoimentos existentes com os novos exemplos
const ITEMS = [
  ...EXTRA_ITEMS,
];

/**
 * @param {{ item: SocialProofItem }} props
 */
function VideoCard({ item }) {
  const src = formatMediaUrl(item.src);

  return (
    <article className="sp-video">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={item.alt || "Vídeo de depoimento"}
      />
    </article>
  );
}

/**
 * @param {{ item: SocialProofItem }} props
 */
function TestimonialCard({ item }) {
  return (
    <article className={`sp-card ${item.photo ? "has-photo" : ""}`}>
      <div className="sp-card-header">
        {item.photo && !isVideoUrl(item.photo) && (
          <img
            src={formatMediaUrl(item.photo)}
            alt={item.who}
            className="sp-avatar"
            loading="lazy"
          />
        )}

        <div className="sp-person">
          <strong>{item.who}</strong>
          <span>{item.role}</span>
        </div>
      </div>

      <div className="sp-stars">★★★★★</div>

      <p className="sp-quote">
        “{item.quote}”
      </p>
    </article>
  );
}

/**
 * @param {{ item: SocialProofItem }} props
 */

function ImageCard({ item }) {
  return (
    <article className="sp-image">
      <img
        src={item.src}
        alt={item.alt || "Imagem de depoimento"}
        loading="lazy"
      />
    </article>
  );
}

/**
 * @param {{ item: SocialProofItem }} props
 */
function CarouselItem({ item }) {
  switch (item.type) {
    case "video":
      return <VideoCard item={item} />;

    case "image":
      return <ImageCard item={item} />;

    case "testimonial":
    default:
      return <TestimonialCard item={item} />;
  }
}

export default function SocialProof() {
  // Duplica os itens para criar o loop infinito
  const duplicatedItems = [...ITEMS, ...ITEMS];

  return (
    <section className="social-proof">
      <div className="sp-heading">
        <p className="sp-eyebrow">
          PROFESIONALES QUE YA LO USAN
        </p>

        <h2>
          Fisioterapeutas de LATAM
          <br />
          ya trabajan con Vital
        </h2>

        <p className="sp-subtitle">
          Historias de profesionales que dejaron de improvisar.
        </p>
      </div>

      <div className="sp-carousel">
        <div className="sp-track">
          {duplicatedItems.map((item, index) => (
            <div
              className="sp-item"
              key={`${item.id}-${index}`}
              aria-hidden={index >= ITEMS.length}
            >
              <CarouselItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
