const B =
  "https://aekpgsbqjzqntlbucbts.supabase.co/storage/v1/object/public/store-resources/901b1f32-05da-431f-a3d5-0946f0897d8a/";

/** Checkout configurável — troque pela URL de checkout definitiva quando disponível. */
export const CHECKOUT_URL = "https://geriactiva.impultienda.ar/checkout";

export const MOCKUP = `${B}1787977659934_mockup-final.webp`;

export const TESTIMONIALS = [
  {
    photo: `${B}1787958917467_foto-daniela.webp`,
    alt: "Daniela Rodríguez, fisioterapeuta de Colombia, con el material GeriActiva",
    quote:
      "Dejé de improvisar. Tener miles de ejercicios ilustrados y listos para imprimir me ordenó el trabajo por completo: mis adultos mayores están más motivados y yo me veo mucho más profesional.",
    who: "Daniela Rodríguez",
    role: "🇨🇴 Fisioterapeuta · Colombia",
  },
  {
    photo: `${B}1787958919264_foto-patricia.webp`,
    alt: "Patricia Muñoz, kinesióloga de Chile, con el material GeriActiva",
    quote:
      "Antes armaba cada sesión desde cero y se me iban las tardes. Con GeriActiva abro, elijo la ficha y la aplico. Mis pacientes notaron el cambio… y yo recuperé mi tiempo.",
    who: "Patricia Muñoz",
    role: "🇨🇱 Kinesióloga · Chile",
  },
];

export const STEPS = [
  { n: "1", title: "Abre", text: "Entrás al material organizado por tomo, nivel y objetivo." },
  { n: "2", title: "Elige", text: "Encontrás la actividad exacta que necesitás para cada paciente." },
  { n: "3", title: "Aplica", text: "Imprimís o mostrás en pantalla y aplicás. Listo." },
];

export const NUMBERS = [
  { n: "5", t: "Tomos completos", d: "Físico, equilibrio, estiramientos, dinámicas y cognitivo." },
  { n: "4", t: "Bonos exclusivos", d: "Movilidad reducida, recuperación, evaluación y sesiones." },
  { n: "91", t: "Láminas imprimibles", d: "Sopas de letras, laberintos y secuencias para el paciente." },
  { n: "+170", t: "Adaptados", d: "Movilidad reducida y recuperación post-caída." },
];

export const TOMOS = [
  {
    icon: "📘",
    title: "Tomo 1 · Fichas Detalladas Ilustradas",
    pages: "325 págs",
    text: "El corazón del kit: un ejercicio por página, ilustrado paso a paso. Con y sin equipamiento, para el día a día. Abrís, elegís y aplicás.",
  },
  {
    icon: "📗",
    title: "Tomo 2 · Ejercicios Físicos",
    pages: "371 págs",
    text: "Equilibrio, marcha, movilidad, coordinación y motricidad. El módulo más completo para <b>prevenir caídas</b> y mantener la autonomía.",
  },
  {
    icon: "📙",
    title: "Tomo 3 · Estiramientos y Relajación",
    pages: "126 págs",
    text: "Flexibilidad, movilidad articular, respiración y relajación. Ideal para abrir o cerrar la sesión y trabajar el bienestar.",
  },
  {
    icon: "📕",
    title: "Tomo 4 · Dinámicas Grupales",
    pages: "100 págs",
    text: "Juegos, música, reminiscencia y actividades en grupo. Para talleres y geriátricos: participación, risas y socialización.",
  },
  {
    icon: "📓",
    title: "Tomo 5 · Actividades Cognitivas",
    pages: "293 págs",
    text: "Memoria, atención, lenguaje y funciones ejecutivas. Incluye un <b>cuadernillo de láminas imprimibles</b> (sopas de letras, laberintos y secuencias) para darle directo al paciente.",
  },
];

export const GALLERY = [
  { src: `${B}1787958920486_galeria-01.webp`, alt: "Ficha de ejercicio sin equipamiento" },
  { src: `${B}1787958921853_galeria-02.webp`, alt: "Ficha de ejercicio con equipamiento" },
  { src: `${B}1787958923205_galeria-03.webp`, alt: "Ficha de ejercicio funcional" },
  { src: `${B}1787958924620_galeria-04.webp`, alt: "Ficha de equilibrio" },
  { src: `${B}1787958925993_galeria-05.webp`, alt: "Ficha de motricidad fina" },
  { src: `${B}1787958927268_galeria-06.webp`, alt: "Ficha de movilidad" },
  { src: `${B}1787958928683_galeria-07.webp`, alt: "Ficha de estiramiento" },
  { src: `${B}1787958930438_galeria-08.webp`, alt: "Ficha de respiración y relajación" },
  { src: `${B}1787958931945_galeria-09.webp`, alt: "Dinámica grupal" },
  { src: `${B}1787958933236_galeria-10.webp`, alt: "Dinámica grupal musical" },
  { src: `${B}1787958934515_galeria-11.webp`, alt: "Ejercicio de movilidad reducida" },
  { src: `${B}1787958935944_galeria-12.webp`, alt: "Ejercicio de recuperación" },
  { src: `${B}1787958937352_galeria-13.webp`, alt: "Lámina imprimible: sopa de letras" },
  { src: `${B}1787958938376_galeria-14.webp`, alt: "Lámina imprimible: laberinto" },
  { src: `${B}1787958939318_galeria-15.webp`, alt: "Lámina imprimible: ordenar los pasos" },
];

export const INCLUDES = [
  "+1.395 páginas organizadas por tomo, nivel y objetivo",
  "Ejercicios físicos, cognitivos, estiramientos y dinámicas grupales",
  "91 láminas imprimibles: sopas de letras, laberintos y secuencias",
  "Con y sin equipamiento · un ejercicio por página, ilustrado",
  "Listos para imprimir en A4 o mostrar en pantalla",
  "Para sesión individual, en grupo, rehabilitación o estimulación",
];

export const AUDIENCE = [
  { icon: "🩺", label: "Fisioterapeutas" },
  { icon: "🏃", label: "Educadores físicos" },
  { icon: "🧑‍⚕️", label: "Terapeutas ocupacionales" },
  { icon: "🤝", label: "Cuidadores y geriátricos" },
];

export const OBJECTIONS = [
  {
    q: "¿Voy a tener que ser especialista para aplicarlo?",
    a: "No. Está todo organizado por nivel y objetivo, con instrucciones simples e ilustraciones. Si sabés leer, sabés aplicarlo.",
  },
  {
    q: "Mis pacientes tienen movilidad reducida.",
    a: "Incluye un bono con +100 actividades adaptadas para silla de ruedas y movilidad reducida.",
  },
  {
    q: "Ya tengo material parecido.",
    a: "Acá son +1.395 páginas organizadas por categoría, listas para usar, más láminas imprimibles. Nunca más improvisás una sesión.",
  },
  {
    q: "Es caro para lo que trae.",
    a: "Por menos de lo que cobrás una sola sesión, te llevás los 5 tomos + 4 bonos. Para siempre.",
  },
];

export const BONUSES = [
  {
    img: `${B}1787663348402_bono1.webp`,
    alt: "Bono 1 movilidad reducida",
    title: "+100 Ejercicios · Movilidad Reducida",
    text: "Actividades adaptadas para silla de ruedas y poca movilidad. Para que ningún paciente quede afuera.",
    value: "Vale $20",
  },
  {
    img: `${B}1787663349475_bono2.webp`,
    alt: "Bono 2 recuperación física",
    title: "+60 Ejercicios · Recuperación y Post-Caída",
    text: "Progresión segura para volver a moverse después de una caída, cirugía o reposo prolongado.",
    value: "Vale $20",
  },
  {
    img: `${B}1787663350307_bono3.webp`,
    alt: "Bono 3 guía de evaluación",
    title: "Guía de Evaluación Física",
    text: "Escalas y pruebas para medir el estado inicial y demostrar avances ante familias y pacientes.",
    value: "Vale $17",
  },
  {
    img: `${B}1787663351106_bono4.webp`,
    alt: "Bono 4 armador de sesiones",
    title: "Armador de Sesiones",
    text: "Plantillas para diseñar sesiones y planes completos en minutos. El puente entre tener los ejercicios y tener la sesión lista.",
    value: "Vale $17",
  },
];

export const USAGE_PHOTOS = [
  { src: `${B}1792464242024_es-uso-1-jp-e5ae1acb.webp`, alt: "Testimonio de una fisioterapeuta" },
  { src: `${B}1792464247960_es-uso-2-jp-d68060dc.webp`, alt: "Testimonio de un educador físico" },
  { src: `${B}1792464260800_es-uso-3-jp-20d52da4.webp`, alt: "Testimonio de un kinesiólogo" },
  { src: `${B}1792464266394_es-uso-4-jp-5a9558ca.webp`, alt: "Testimonio de una terapeuta ocupacional" },
  { src: `${B}1792464279495_es-uso-5-jp-7f7bfe5d.webp`, alt: "Testimonio de una cuidadora" },
];

export const FAQ = [
  {
    q: "¿Cómo recibo el material?",
    a: "Al instante. Apenas pagás, recibís el acceso a todos los archivos en PDF para descargar e imprimir cuantas veces quieras.",
  },
  {
    q: "¿Necesito ser especialista para aplicarlo?",
    a: "No. Cada actividad está organizada por nivel y objetivo, con instrucciones simples e ilustraciones. Si sabés leer, sabés aplicarlo.",
  },
  {
    q: "¿Sirve para atención individual y en grupo?",
    a: "Sí. Tenés actividades para sesión individual, en grupo, rehabilitación y estimulación, más un tomo completo de dinámicas grupales.",
  },
  {
    q: "¿En qué dispositivos lo puedo usar?",
    a: "En cualquiera: celular, tablet o computadora. Y lo podés imprimir en A4.",
  },
  {
    q: "¿Y si no me sirve?",
    a: "Tenés 7 días de garantía. Te devolvemos el 100% sin preguntas.",
  },
];