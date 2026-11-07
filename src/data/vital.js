const B =
  "https://aekpgsbqjzqntlbucbts.supabase.co/storage/v1/object/public/store-resources/901b1f32-05da-431f-a3d5-0946f0897d8a/";

/** Checkout configurável — troque pela URL de checkout definitiva quando disponível. */
export const CHECKOUT_URL = "https://Vital.impultienda.ar/checkout";

export const MOCKUP = `${B}1787977659934_mockup-final.webp`;

export const TESTIMONIALS = [
  {
    photo: `https://res.cloudinary.com/xiupvhfs/video/upload/v1793986372/download_1.mp4`,
    alt: "Ana López García, fisioterapeuta de Argentina, en la app Vital",
    quote:
      "Dejé de improvisar. Tener miles de ejercicios ilustrados y buscarlos en segundos ordenó mi trabajo por completo: mis pacientes están más motivados.",
    who: "Ana López García",
    role: "Fisioterapeuta · Argentina",
  },
  {
    photo: `https://res.cloudinary.com/xiupvhfs/video/upload/v1793987133/853c22920e9a037e16091f181a7495cc.mp4`,
    alt: "Bento Muñoz, kinesióloga de Colombia, con la app Vital",
    quote:
      "Antes armaba cada sesión desde cero y se me iban las tardes. Con Vital abro, elijo la ficha y la aplico. Mis pacientes notaron el cambio… y yo recuperé mi tiempo.",
    who: "Bento Muñoz",
    role: "Terapeuta ocupacional · Colombia",
  },
];

export const STEPS = [
  { n: "1", title: "Abre", text: "Entrás al MiniApp organizado por categoría, nivel o condición del paciente. Encontrás lo que buscás en segundos." },
  { n: "2", title: "Elige", text: "Usás el generador express o seleccionás tus ejercicios favoritos guardándolos en colecciones personalizadas." },
  { n: "3", title: "Aplica", text: "Imprimís la ficha profesional o la mostrás en pantalla. Cada sesión lista en minutos, no en horas." },
];

export const NUMBERS = [
  { n: "3", t: "Tomos completos + Herramientas", d: "Físico, estiramientos y actividades cognitivas, y mas herramientas inteligentes" },
  { n: "Filtros", t: "Buscador Inteligente", d: "Encontrá ejercicios por condición (silla de ruedas, post-caída, marcha)." },
  { n: "Sesión Express", t: "Generador de Sesiones", d: "Seleccioná el tiempo y foco; el MiniApp arma tu rutina automáticamente." },
  { n: "Colecciones", t: "Sistema de Colecciones", d: "Guardá y agrupá tus rutinas favoritas estilo carpetas para cada paciente o grupo." },
  { n: "3", t: "Bonos exclusivos", d: "Movilidad reducida, recuperación, evaluación y sesiones." },
  { n: "+170", t: "Adaptados", d: "Movilidad reducida y recuperación post-caída." },
];

export const MINIAPP_SCREENS = [
  {
    id: "dashboard",
    badge: "Página Principal",
    title: "Dashboard & Filtros Rápidos",
    description:
      "Explorá por categorías o filtrá al instante según la condición de tu paciente. Todo al alcance de un toque.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904169/image_1.png",
  },
  {
    id: "buscador",
    badge: "Búsqueda Inteligente",
    title: "Buscador en Tiempo Real",
    description:
      "Encontrá ejercicios específicos por nombre, objetivo o equipamiento en milisegundos con skeletons de carga.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904330/image_2.png",
  },
  {
    id: "express",
    badge: "Inteligencia Aplicada",
    title: "Generador de Sesión Exprés",
    description:
      "Desplegá la bandeja flotante, seleccioná el tiempo disponible y la condición del paciente. Rutina lista en 2 segundos.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904419/image_3.png",
  },
  {
    id: "detalle",
    badge: "Ficha Físico-Clínica",
    title: "Vista de Detalle Completa",
    description:
      "Paso a paso ilustrado, objetivos, materiales necesarios, precauciones de seguridad y botón listo para exportar a PDF.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904505/image_4.png",
  },
  {
    id: "colecciones",
    badge: "Organización",
    title: "Gestión de Colecciones",
    description:
      "Agrupá tus rutinas en carpetas estilo Instagram para cada paciente o taller. Renombrá o editá cuando quieras.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904601/image_5.png", //[cite: 10]
  },
  {
    id: "carpeta",
    badge: "Listas Personalizadas",
    title: "Manejo Interno de Rutinas",
    description:
      "Accedé a tus sesiones guardadas y gestioná cada ejercicio de forma individual con doble confirmación de seguridad.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904705/image_6.png",
  },
  {
    id: "pdf",
    badge: "Material Físico o Digital",
    title: "Exportar & Imprimir en PDF",
    description:
      "Generá fichas profesionales listas para imprimir en formato A4 con un solo clic. Entregá un material impecable a tus pacientes o talleres.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793905435/2026-11-05_16-00.png",
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
  "+1.997 páginas organizadas por tomo, nivel y objetivo",
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
    q: "¿Voy a tener que ser experto para usarlo?",
    a: "No. Está todo categorizado con instrucciones claras y visuales. Si sabés buscar, sabés aplicarlo.",
  },
  {
    q: "¿Necesito instalar algo?",
    a: "No. Es 100% web, entrás con tu usuario y contraseña desde cualquier dispositivo al instante.",
  },
  {
    q: "Mis pacientes tienen movilidad reducida.",
    a: "Incluye un bono con +100 actividades adaptadas para silla de ruedas y movilidad reducida.",
  },
  {
    q: "Ya tengo material parecido.",
    a: "Acá son +1.997 páginas organizadas por categoría, listas para usar, más láminas imprimibles. Nunca más improvisás una sesión.",
  },
  {
    q: "Es caro para lo que trae.",
    a: "Por menos de lo que cobrás una sola sesión, te llevás los 5 tomos + 4 bonos. Para siempre.",
  },
];

export const BONUSES = [
  {
    img: `${B}1787663348402_bono1.webp`,
    alt: "Bono 1 Actividades Cognitivas y de Estimulación",
    title: "+100 Actividades · Cognitivas y de Estimulación",
    text: "Sopas de letras, laberintos y secuencias diseñadas especialmente para Estimular la agilidad mental y rehabilitación física, logrando una atención integral.",
    value: "Vale $20",
  },
  {
    img: `${B}1787663349475_bono2.webp`,
    alt: "Bono 2 recuperación física",
    title: "+60 Ejercicios · Recuperación y Post-Caída",
    text: "Progresión segura para volver a moverse después de una caída, cirugía o reposo prolongado.",
    value: "Vale $20",
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
    q: "¿Cómo recibo el acceso al MiniApp?",
    a: "Al instante. Apenas completás tu pago, recibís tus credenciales por correo electrónico para ingresar de inmediato desde cualquier celular, tablet o computadora.",
  },
  {
    q: "¿Necesito ser especialista para aplicarlo?",
    a: "No. Cada ejercicio y actividad cuenta con instrucciones simples, objetivos claros e ilustraciones detalladas. Si sabés buscar en la plataforma, sabés aplicarlo al instante.",
  },
  {
    q: "¿Sirve para atención individual y en grupo?",
    a: "Sí. Encontrás material tanto para sesiones individuales como para dinámicas grupales, talleres o centros de día, pudiendo armar todo con el generador express.",
  },
  {
    q: "¿Cómo funciona el generador de sesión express y las colecciones?",
    a: "Elegís el tiempo, la condición o el foco del paciente, y el MiniApp arma tu rutina automáticamente. Además, podés guardar y agrupar tus ejercicios favoritos en carpetas personalizadas estilo colecciones.",
  },
  {
    q: "¿En qué dispositivos puedo usarlo y se puede imprimir?",
    a: "Podés usarlo en cualquier dispositivo con navegador web. Cada ficha cuenta con un botón dedicado para exportar en PDF e imprimir en formato A4 de forma limpia y profesional.",
  },
  {
    q: "¿Y si el MiniApp no cumple mis expectativas?",
    a: "Tenés 7 días de garantía incondicional. Si no te sirve o no se adapta a tu trabajo, te devolvemos el 100% de tu dinero sin preguntas.",
  },
];

export const ROWS = [
  {
    left: { text: "Contenido fijo, sin cambios", ok: false },
    right: { text: "Actualizaciones automáticas constantes", ok: true },
  },
  {
    left: { text: "Descargas manuales de cada versión", ok: false },
    right: { text: "Sin descargas: siempre la última versión", ok: true },
  },
  {
    left: { text: "Pesado y difícil de abrir en el celular", ok: false },
    right: { text: "Funciona perfecto en celular, tablet o PC", ok: true },
  },
  {
    left: { text: "Ocupa memoria de tu dispositivo", ok: false },
    right: { text: "No ocupa memoria", ok: true },
  },
  {
    left: { text: "Solo páginas estáticas", ok: false },
    right: { text: "Herramientas interactivas", ok: true },
  },
  {
    left: { text: "Ejercicios ilustrados", ok: true },
    right: { text: "+1.997 fichas ilustradas, paso a paso", ok: true },
  },
];