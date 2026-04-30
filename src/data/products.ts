export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  m2Price?: number;
  rollDimensions?: string;
  category: 'al-corte' | 'en-rollo' | 'complementos';
  image: string;
  images: string[];
  description: string;
  features: string[];
  installation: string;
  shipping: string;
  featured?: boolean;
  height?: number;
  variants?: string[];
  specs?: Record<string, string>;
}

export const categories = [
  { id: 'al-corte', name: 'CÉSPED ARTIFICIAL AL CORTE' },
  { id: 'en-rollo', name: 'CÉSPED ARTIFICIAL EN ROLLO' },
  { id: 'complementos', name: 'COMPLEMENTOS' },
];

import imgAnkara from '../assets/cesped-ankara.png';
import imgPraga from '../assets/cesped-praga.png';
import imgHelsinki from '../assets/cesped-helsinki.png';
import imgKiev from '../assets/cesped-kiev.png';
import imgOporto from '../assets/cesped-oporto.png';
import imgDefault from '../assets/cesped-producto-1.jpg';
import imgAccesorios from '../assets/accesorios-instalacion.jpg';
import imgCartucho from '../assets/cartucho-adhesivo.png';
import imgCintaAdhesiva from '../assets/cinta-union-adhesiva.jpg';
import imgCintaNormal from '../assets/cinta-union-estandar.jpg';
import imgCola from '../assets/cola-bicomponente.jpg';
import imgCortador from '../assets/cortador-especial.jpg';
import imgEspatula from '../assets/espatula-xamanek.jpg';
import imgGrapas from '../assets/grapas-fijacion.jpg';
import imgGuantes from '../assets/guantes-cesped.jpg';
import imgMalla from '../assets/malla-antihierbas.jpg';

// Nuevas imágenes de productos
import prodAnkaraCorte from '../assets/products/ankara.webp';
import prodAnkaraRollo from '../assets/products/ankara rollo.jpg';
import prodPragaCorte from '../assets/products/PRAGA.webp';
import prodPragaRollo from '../assets/products/praga rollo.webp';
import prodHelsinkiCorte from '../assets/products/HELSINKI.webp';
import prodKievCorte from '../assets/products/KIEV.webp';
import prodKievRollo from '../assets/products/kiev rollo.webp';
import prodOportoCorte from '../assets/products/OPORTO.webp';
import prodOportoRollo from '../assets/products/oporto rollo.webp';
import prodBerlinCorte from '../assets/products/berlin.jpg';
import prodBerlinRollo from '../assets/products/berlin rollo.jpeg';
import prodBudapestCorte from '../assets/products/budapest.jpg';
import prodBudapestRollo from '../assets/products/budapest rollo.webp';
import prodDanubioCorte from '../assets/products/danubio.webp';
import prodDanubioRollo from '../assets/products/Danubio rollo.avif';
import prodVienaCorte from '../assets/products/viena colores.webp';
import prodVienaRollo from '../assets/products/viene colores rollo.jpg';
import prodSueciaCorte from '../assets/products/suecia.webp';
import prodSueciaRollo from '../assets/products/Suecia rollo.jpg';
import prodOsloCorte from '../assets/products/oslo.png';
import prodOsloRollo from '../assets/products/oslo rollo.jpg';

const imgURLs = {
  ankara: imgAnkara,
  praga: imgPraga,
  helsinki: imgHelsinki,
  kiev: imgKiev,
  oporto: imgOporto,
  berlin: imgDefault,
  budapest: imgDefault,
  danubio: imgDefault,
  viena: imgDefault,
  suecia: imgDefault,
  oslo: imgDefault,
  
  cartucho: imgCartucho,
  cintaAdhesiva: imgCintaAdhesiva,
  cintaNormal: imgCintaNormal,
  cola: imgCola,
  cortador: imgCortador,
  espatula: imgEspatula,
  grapas: imgGrapas,
  guantes: imgGuantes,
  malla: imgMalla
};

export const products: Product[] = [
  // CÉSPED ARTIFICIAL AL CORTE
  {
    id: "ankara-45-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE ANKARA 45 mm – ALTA DENSIDAD",
    slug: "ankara-45mm-corte",
    price: 21.75,
    category: "al-corte",
    image: prodAnkaraCorte,
    images: [prodAnkaraCorte],
    height: 45,
    description: "El modelo Ankara 45mm destaca por su densidad premium y su altura, ofreciendo un realismo visual insuperable. Es la elección perfecta para jardines de alto standing.",
    features: ["Alta densidad", "Máxima gama", "Drenaje superior"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "45 mm", weight: "3,912 kg/m²", density: "Alta", uvResistance: "Sí" }
  },
  {
    id: "praga-40-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE PRAGA 40 MM – CONFORT",
    slug: "praga-40mm-corte",
    price: 18.10,
    category: "al-corte",
    image: prodPragaCorte,
    images: [prodPragaCorte],
    height: 40,
    description: "El césped Praga de 40mm ofrece un equilibrio perfecto entre confort y resistencia. Ideal para renovar terrazas y zonas ajardinadas.",
    features: ["Suave", "Gran confort", "Recuperación vertical"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "40 mm", weight: "3,261 kg/m²", density: "Media-Alta", uvResistance: "Sí" }
  },
  {
    id: "helsinki-30-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE HELSINKI 30MM – SUAVIDAD Y REALISMO",
    slug: "helsinki-30mm-corte",
    price: 13.75,
    category: "al-corte",
    image: prodHelsinkiCorte,
    images: [prodHelsinkiCorte],
    height: 30,
    description: "El modelo Helsinki de 30mm es una solución versátil y muy realista. Su acabado mate elimina brillos artificiales.",
    features: ["Suavidad", "Realismo", "Uso decorativo"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "30 mm", weight: "2,558 kg/m²", density: "Media", uvResistance: "Sí" }
  },
  {
    id: "kiev-20-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE KIEV 20 MM – ELEGANCIA Y DURABILIDAD",
    slug: "kiev-20mm-corte",
    price: 11.60,
    category: "al-corte",
    image: prodKievCorte,
    images: [prodKievCorte],
    height: 20,
    description: "El césped artificial Kiev 20mm es sinónimo de elegancia y funcionalidad. Ideal para áreas comerciales y zonas de mucho paso.",
    features: ["Elegante", "Duradero", "Fácil mantenimiento"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "20 mm", weight: "2,164 kg/m²", density: "Media", uvResistance: "Sí" }
  },
  {
    id: "oporto-33-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE OPORTO 33MM – CALIDAD",
    slug: "oporto-33mm-corte",
    price: 11.20,
    category: "al-corte",
    image: prodOportoCorte,
    images: [prodOportoCorte],
    height: 33,
    description: "Oporto 33mm es un modelo todoterreno que combina un aspecto natural con una gran resistencia.",
    features: ["Calidad", "Natural", "Versátil"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "33 mm", weight: "2,145 kg/m²", density: "Media", uvResistance: "Sí" }
  },
  {
    id: "berlin-24-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE BERLÍN 24MM – RESISTENTE Y NATURAL",
    slug: "berlin-24mm-corte",
    price: 10.48,
    category: "al-corte",
    image: prodBerlinCorte,
    images: [prodBerlinCorte],
    height: 24,
    description: "El césped Berlín de 24mm es la opción ideal para quienes buscan un acabado limpio y compacto.",
    features: ["Resistente", "Natural", "Económico"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "24 mm", weight: "1,845 kg/m²", density: "Media", uvResistance: "Sí" }
  },
  {
    id: "budapest-18-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE BUDAPEST 18 MM – REALISMO Y FUNCIONALIDAD",
    slug: "budapest-18mm-corte",
    price: 8.78,
    category: "al-corte",
    image: prodBudapestCorte,
    images: [prodBudapestCorte],
    height: 18,
    description: "Budapest 18mm es un césped altamente funcional pensado para embellecer balcones y terrazas.",
    features: ["Funcional", "Realista", "Ligero"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "18 mm", weight: "1,625 kg/m²", density: "Media-Baja", uvResistance: "Sí" }
  },
  {
    id: "danubio-15-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE DANUBIO 15 MM – ECONOMÍA Y VERSATILIDAD",
    slug: "danubio-15mm-corte",
    price: 8.20,
    category: "al-corte",
    image: prodDanubioCorte,
    images: [prodDanubioCorte],
    height: 15,
    description: "El modelo Danubio 15mm es la alternativa más versátil y económica para proyectos de decoración.",
    features: ["Económico", "Versátil", "Multiuso"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "15 mm", weight: "1,090 kg/m²", density: "Baja", uvResistance: "Sí" }
  },
  {
    id: "viena-colores-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE VIENA COLORES 8 MM – CREATIVIDAD Y DISEÑO",
    slug: "viena-colores-corte",
    price: 7.45,
    category: "al-corte",
    image: prodVienaCorte,
    images: [prodVienaCorte],
    height: 8,
    description: "Viena Colores 8mm es la opción más creativa. Disponible en varios colores vibrantes.",
    features: ["Colores", "Creativo", "Diseño"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "8 mm", weight: "0,890 kg/m²", density: "Decorativa", uvResistance: "Sí" }
  },
  {
    id: "suecia-7-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE SUECIA 7 MM – ECONOMÍA Y DECORACIÓN",
    slug: "suecia-7mm-corte",
    price: 6.80,
    category: "al-corte",
    image: prodSueciaCorte,
    images: [prodSueciaCorte],
    height: 7,
    description: "El césped Suecia de 7mm es una solución decorativa funcional y económica.",
    features: ["Decorativo", "Barato", "Funcional"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "7 mm", weight: "0,790 kg/m²", density: "Baja", uvResistance: "Sí" }
  },
  {
    id: "oslo-7-corte",
    name: "CÉSPED ARTIFICIAL AL CORTE OSLO 7 MM – SIMPLICIDAD Y ECONOMÍA",
    slug: "oslo-7mm-corte",
    price: 5.79,
    category: "al-corte",
    image: prodOsloCorte,
    images: [prodOsloCorte],
    height: 7,
    description: "Oslo 7mm representa la simplicidad y el ahorro. Altura básica perfecta para eventos.",
    features: ["Mínimo coste", "Efectivo", "Funcional"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "7 mm", weight: "0,813 kg/m²", density: "Baja", uvResistance: "Sí" }
  },

  // CÉSPED ARTIFICIAL EN ROLLO
  {
    id: "ankara-45-rollo",
    name: "MODELO ANKARA 45mm – ROLLO COMPLETO",
    slug: "ankara-45mm-rollo",
    price: 1245.00,
    m2Price: 20.75,
    rollDimensions: "2x30m / 1x30m",
    category: "en-rollo",
    image: prodAnkaraRollo,
    images: [prodAnkaraRollo],
    height: 45,
    description: "Rollo completo premium Ankara 45mm. Máxima densidad para proyectos extensos. Disponible en anchos de 1m y 2m.",
    features: ["Formato ahorro", "Máxima densidad", "Calidad Pro"],
    installation: "Fácil despliegue.",
    shipping: "Logística pesada.",
    specs: { height: "45 mm", weight: "3,912 kg/m²", density: "Profesional", uvResistance: "Sí" }
  },
  {
    id: "praga-40-rollo",
    name: "MODELO PRAGA 40mm – ROLLO COMPLETO",
    slug: "praga-40mm-rollo",
    price: 1026.00,
    m2Price: 17.10,
    rollDimensions: "2x30m / 1x30m",
    category: "en-rollo",
    image: prodPragaRollo,
    images: [prodPragaRollo],
    height: 40,
    description: "Rollo industrial de Praga 40mm. Suavidad y resistencia profesional. Disponible en anchos de 1m y 2m.",
    features: ["Confort", "Pisada suave", "Alta m²"],
    installation: "Profesional.",
    shipping: "Logística pesada.",
    specs: { height: "40 mm", weight: "3,261 kg/m²", density: "Confort", uvResistance: "Sí" }
  },
  {
    id: "helsinki-30-rollo",
    name: "MODELO HELSINKI 30mm – ROLLO COMPLETO",
    slug: "helsinki-30mm-rollo",
    price: 510.00,
    m2Price: 12.75,
    rollDimensions: "2x20m / 1x20m / 2x40m / 1x40m",
    category: "en-rollo",
    image: prodHelsinkiCorte,
    images: [prodHelsinkiCorte],
    height: 30,
    description: "Rollo completo Helsinki 30mm. Realismo y versatilidad en gran formato. Múltiples medidas disponibles.",
    features: ["Realismo", "Económico", "Versátil"],
    installation: "Sencilla.",
    shipping: "Logística pesada.",
    specs: { height: "30 mm", weight: "2,558 kg/m²", density: "Realista", uvResistance: "Sí" }
  },
  {
    id: "kiev-20-rollo",
    name: "MODELO KIEV 20mm – ROLLO COMPLETO",
    slug: "kiev-20mm-rollo",
    price: 424.00,
    m2Price: 10.60,
    rollDimensions: "2x20m / 1x20m / 2x40m / 1x40m",
    category: "en-rollo",
    image: prodKievRollo,
    images: [prodKievRollo],
    height: 20,
    description: "Formato en rollo de Kiev 20mm. Extremadamente resistente para alto tránsito. Múltiples medidas disponibles.",
    features: ["Industrial", "Resistente", "Duradero"],
    installation: "Rápida.",
    shipping: "Logística pesada.",
    specs: { height: "20 mm", weight: "2,164 kg/m²", density: "Resistente", uvResistance: "Sí" }
  },
  {
    id: "oporto-33-rollo",
    name: "MODELO OPORTO 33mm – ROLLO COMPLETO",
    slug: "oporto-33mm-rollo",
    price: 408.00,
    m2Price: 10.20,
    rollDimensions: "2x20m / 1x20m / 2x40m / 1x40m",
    category: "en-rollo",
    image: prodOportoRollo,
    images: [prodOportoRollo],
    height: 33,
    description: "Rollo del modelo Oporto 33mm. Excelente relación calidad-precio para jardines extensos.",
    features: ["Calidad", "Garantía", "Ahorro m²"],
    installation: "Estándar.",
    shipping: "Logística pesada.",
    specs: { height: "33 mm", weight: "2,145 kg/m²", density: "Media", uvResistance: "Sí" }
  },
  {
    id: "berlin-24-rollo",
    name: "MODELO BERLÍN 24mm – ROLLO COMPLETO",
    slug: "berlin-24mm-rollo",
    price: 379.20,
    m2Price: 9.48,
    rollDimensions: "2x20m / 1x20m / 2x40m / 1x40m",
    category: "en-rollo",
    image: prodBerlinRollo,
    images: [prodBerlinRollo],
    height: 24,
    description: "Rollo de césped Berlín 24mm. Cobertura firme y compacta. Múltiples medidas disponibles.",
    features: ["Resistente", "Natural", "Económico"],
    installation: "Estándar.",
    shipping: "Logística pesada.",
    specs: { height: "24 mm", weight: "1,845 kg/m²", density: "Media", uvResistance: "Sí" }
  },
  {
    id: "budapest-18-rollo",
    name: "MODELO BUDAPEST 18mm – ROLLO COMPLETO",
    slug: "budapest-18mm-rollo",
    price: 311.20,
    m2Price: 7.78,
    rollDimensions: "2x20m / 1x20m / 2x40m / 1x40m",
    category: "en-rollo",
    image: prodBudapestRollo,
    images: [prodBudapestRollo],
    height: 18,
    description: "Rollo de Budapest 18mm. Ideal para eventos y hostelería. Múltiples medidas disponibles.",
    features: ["Compacto", "Práctico", "Envío masivo"],
    installation: "Rápida.",
    shipping: "Logística pesada.",
    specs: { height: "18 mm", weight: "1,625 kg/m²", density: "Media-Baja", uvResistance: "Sí" }
  },
  {
    id: "danubio-15-rollo",
    name: "MODELO DANUBIO 15mm – ROLLO COMPLETO",
    slug: "danubio-15mm-rollo",
    price: 576.00,
    m2Price: 7.20,
    rollDimensions: "2x40m / 1x40m",
    category: "en-rollo",
    image: prodDanubioRollo,
    images: [prodDanubioRollo],
    height: 15,
    description: "Rollo completo Danubio 15mm. Máxima versatilidad para recubrimientos extensos.",
    features: ["Patios", "Balcones", "Ahorro total"],
    installation: "Simple.",
    shipping: "Logística pesada.",
    specs: { height: "15 mm", weight: "1,090 kg/m²", density: "Baja", uvResistance: "Sí" }
  },
  {
    id: "viena-colores-rollo",
    name: "MODELO VIENA COLORES 8 mm – ROLLO COMPLETO",
    slug: "viena-colores-rollo",
    price: 387.00,
    m2Price: 6.45,
    rollDimensions: "2x30m / 1x30m",
    category: "en-rollo",
    image: prodVienaRollo,
    images: [prodVienaRollo],
    height: 8,
    description: "Rollos de césped Viena 8mm en colores. Perfecto para parques infantiles y stands.",
    features: ["Decoración pro", "Diseño", "Colores"],
    installation: "Especializada.",
    shipping: "Logística pesada.",
    specs: { height: "8 mm", weight: "0,890 kg/m²", density: "Baja", uvResistance: "Sí" }
  },
  {
    id: "suecia-7-rollo",
    name: "MODELO SUECIA 7 mm – ROLLO COMPLETO",
    slug: "suecia-7mm-rollo",
    price: 464.00,
    m2Price: 5.80,
    rollDimensions: "2x40m / 1x40m",
    category: "en-rollo",
    image: prodSueciaRollo,
    images: [prodSueciaRollo],
    height: 7,
    description: "Rollo de césped Suecia 7mm. Solución económica a gran escala.",
    features: ["Decoración", "Mínimo peso", "Económico"],
    installation: "Decorativa.",
    shipping: "Logística pesada.",
    specs: { height: "7 mm", weight: "0,790 kg/m²", density: "Decorativa", uvResistance: "Sí" }
  },
  {
    id: "oslo-7-rollo",
    name: "MODELO OSLO 7mm – ROLLO COMPLETO",
    slug: "oslo-7mm-rollo",
    price: 287.40,
    m2Price: 4.79,
    rollDimensions: "2x30m / 1x30m",
    category: "en-rollo",
    image: prodOsloRollo,
    images: [prodOsloRollo],
    height: 7,
    description: "Rollo Oslo 7mm. El formato más rentable para eventos masivos.",
    features: ["Mínimo coste", "Efectivo", "Funcional"],
    installation: "Rápida.",
    shipping: "Logística pesada.",
    specs: { height: "7 mm", weight: "0,813 kg/m²", density: "Económica", uvResistance: "Sí" }
  },

  // COMPLEMENTOS Y ACCESORIOS
  {
    id: "cinta-union-estandar-5m",
    name: "Cinta de Unión para Césped Artificial 30cmx5m",
    slug: "cinta-union-estandar-5m",
    price: 8.98,
    category: "complementos",
    image: imgURLs.cintaNormal,
    images: [imgURLs.cintaNormal],
    description: "Cinta de unión estándar no adhesiva de 30cm x 5m, fabricada en geotextil de alta resistencia. Diseñada para ser utilizada con cola bicomponente en juntas profesionales e invisibles.",
    features: ["30cm x 5m", "Resistente", "Profesional"],
    installation: "Uso con cola.",
    shipping: "Inmediata."
  },
  {
    id: "cinta-union-estandar-10m",
    name: "Cinta de Unión para Césped Artificial 30cmx10m",
    slug: "cinta-union-estandar-10m",
    price: 14.98,
    category: "complementos",
    image: imgURLs.cintaNormal,
    images: [imgURLs.cintaNormal],
    description: "Cinta de unión estándar no adhesiva de 30cm x 10m. Ideal para instalaciones medianas que requieren una fijación permanente y duradera con adhesivo bicomponente.",
    features: ["30cm x 10m", "Larga duración", "Calidad"],
    installation: "Uso con cola.",
    shipping: "Inmediata."
  },
  {
    id: "cinta-union-estandar-30m",
    name: "Cinta de Unión para Césped Artificial 30cmx30m",
    slug: "cinta-union-estandar-30m",
    price: 35.90,
    category: "complementos",
    image: imgURLs.cintaNormal,
    images: [imgURLs.cintaNormal],
    description: "Formato profesional de 30 metros. Cinta de unión de alta resistencia para grandes superficies. Asegura la estabilidad total en instalaciones extensas.",
    features: ["30cm x 30m", "Formato ahorro", "Profesional"],
    installation: "Uso con cola.",
    shipping: "Inmediata."
  },
  {
    id: "cinta-union-adhesiva-5m",
    name: "Cinta de Unión Adhesiva para Césped Artificial 15cmx5m",
    slug: "cinta-union-adhesiva-5m",
    price: 10.90,
    category: "complementos",
    image: imgURLs.cintaAdhesiva,
    images: [imgURLs.cintaAdhesiva],
    description: "Cinta autoadhesiva de 5 metros para una instalación rápida y limpia sin necesidad de cola líquida. Perfecta para bricolaje y pequeñas reparaciones.",
    features: ["15cm x 5m", "Autoadhesiva", "Fácil"],
    installation: "Directa.",
    shipping: "Inmediata."
  },
  {
    id: "cinta-union-adhesiva-10m",
    name: "Cinta de Unión Adhesiva para Césped Artificial 15cmx10m",
    slug: "cinta-union-adhesiva-10m",
    price: 21.90,
    category: "complementos",
    image: imgURLs.cintaAdhesiva,
    images: [imgURLs.cintaAdhesiva],
    description: "Cinta autoadhesiva de 10 metros de alta tracción. Proporciona una sujeción inmediata y duradera entre paños de césped en terrazas y balcones.",
    features: ["15cm x 10m", "Alta adherencia", "Limpio"],
    installation: "Directa.",
    shipping: "Inmediata."
  },
  {
    id: "cartucho-adhesivo-300",
    name: "Cartucho de Adhesivo para Césped Artificial – 300 ml",
    slug: "cartucho-adhesivo-300ml",
    price: 7.10,
    category: "complementos",
    image: imgURLs.cartucho,
    images: [imgURLs.cartucho],
    description: "Adhesivo de poliuretano en cartucho de 300ml. Formulado especialmente para la fijación de césped artificial en juntas pequeñas, remates perimetrales y reparaciones.",
    features: ["300ml", "Secado rápido", "Uso con pistola"],
    installation: "Manual.",
    shipping: "Inmediata."
  },
  {
    id: "guantes-pro",
    name: "Guantes de Protección para Instalación",
    slug: "guantes-cesped",
    price: 2.20,
    category: "complementos",
    image: imgURLs.guantes,
    images: [imgURLs.guantes],
    description: "Guantes de protección ligeros y resistentes con recubrimiento antideslizante. Protegen tus manos durante la manipulación y el pegado del césped.",
    features: ["Antideslizante", "Protección", "Cómodos"],
    installation: "Manual.",
    shipping: "Inmediata."
  },
  {
    id: "cortador-especial-pro",
    name: "Cutter Especial para Césped Artificial",
    slug: "cutter-especial",
    price: 6.72,
    category: "complementos",
    image: imgURLs.cortador,
    images: [imgURLs.cortador],
    description: "Herramienta de corte ergonómica diseñada para realizar cortes precisos desde el reverso del césped sin dañar las fibras superiores.",
    features: ["Ergonómico", "Preciso", "Seguro"],
    installation: "Manual.",
    shipping: "Inmediata."
  },
  {
    id: "espatula-xamanek",
    name: "Espátula Dentada para Adhesivo",
    slug: "espatula-xamanek",
    price: 4.55,
    category: "complementos",
    image: imgURLs.espatula,
    images: [imgURLs.espatula],
    description: "Espátula dentada profesional para la correcta distribución de la cola sobre la cinta de unión, asegurando una cobertura homogénea.",
    features: ["Dentada", "Acero inox", "Eficiente"],
    installation: "Manual.",
    shipping: "Inmediata."
  },
  {
    id: "grapas-pack-10",
    name: "Grapas de Fijación para Césped Artificial – Pack de 10 unidades",
    slug: "grapas-fijacion-pack",
    price: 8.42,
    category: "complementos",
    image: imgURLs.grapas,
    images: [imgURLs.grapas],
    description: "Pack de 10 grapas en forma de U de acero galvanizado para anclaje sobre tierra o arena. Evita levantamientos por viento o uso.",
    features: ["Acero galvanizado", "Pack 10 uni", "Gran sujeción"],
    installation: "Manual.",
    shipping: "Inmediata."
  },
  {
    id: "cola-bicomponente-11kg",
    name: "Cola Bicomponente para Césped Artificial 11kg",
    slug: "cola-bicomponente-11kg",
    price: 39.20,
    category: "complementos",
    image: imgURLs.cola,
    images: [imgURLs.cola],
    description: "Adhesivo profesional bicomponente de poliuretano (11 kg). Máxima resistencia mecánica y térmica para uniones definitivas en grandes superficies.",
    features: ["11 KG", "Máxima fuerza", "Resistente"],
    installation: "Mezcla requerida.",
    shipping: "Inmediata."
  },
  {
    id: "cola-bicomponente-7-32kg",
    name: "Cola Bicomponente para Césped Artificial 7,32kg",
    slug: "cola-bicomponente-7-32kg",
    price: 31.20,
    category: "complementos",
    image: imgURLs.cola,
    images: [imgURLs.cola],
    description: "Adhesivo profesional bicomponente en formato de 7,32 kg. Ideal para proyectos medianos que buscan una adherencia profesional de larga duración.",
    features: ["7.32 KG", "Profesional", "Adherencia total"],
    installation: "Mezcla requerida.",
    shipping: "Inmediata."
  },
  {
    id: "malla-antihierbas-1-10x10",
    name: "Malla Antihierbas Negra 1,10x10m",
    slug: "malla-antihierbas-1-10x10",
    price: 12.90,
    category: "complementos",
    image: imgURLs.malla,
    images: [imgURLs.malla],
    description: "Malla geotextil negra de 1,10m x 10m. Impide el crecimiento de malas hierbas y asegura un drenaje perfecto bajo el césped artificial.",
    features: ["1.10m x 10m", "Geotextil", "Drenante"],
    installation: "Base.",
    shipping: "Inmediata."
  },
  {
    id: "malla-antihierbas-2x10",
    name: "Malla Antihierbas Negra 2x10m",
    slug: "malla-antihierbas-2x10",
    price: 15.90,
    category: "complementos",
    image: imgURLs.malla,
    images: [imgURLs.malla],
    description: "Malla geotextil negra de 2m x 10m. Cubre rápidamente superficies medianas protegiendo la instalación del crecimiento vegetal.",
    features: ["2m x 10m", "Fácil extensión", "Resistente"],
    installation: "Base.",
    shipping: "Inmediata."
  },
  {
    id: "malla-antihierbas-2x25",
    name: "Malla Antihierbas Negra 2x25m",
    slug: "malla-antihierbas-2x25",
    price: 28.15,
    category: "complementos",
    image: imgURLs.malla,
    images: [imgURLs.malla],
    description: "Malla geotextil negra de 2m x 25m. Formato ahorro para jardines residenciales que requieren una base sólida y limpia.",
    features: ["2m x 25m", "Alta densidad", "Duradera"],
    installation: "Base.",
    shipping: "Inmediata."
  },
  {
    id: "malla-antihierbas-2x50",
    name: "Malla Antihierbas Negra 2x50m",
    slug: "malla-antihierbas-2x50",
    price: 48.90,
    category: "complementos",
    image: imgURLs.malla,
    images: [imgURLs.malla],
    description: "Malla geotextil negra de 2m x 50m. Indicada para instalaciones profesionales extensas que buscan la mejor relación calidad-precio.",
    features: ["2m x 50m", "Gran formato", "Profesional"],
    installation: "Base.",
    shipping: "Inmediata."
  },
  {
    id: "malla-antihierbas-2x100",
    name: "Malla Antihierbas Negra 2x100m",
    slug: "malla-antihierbas-2x100",
    price: 98.80,
    category: "complementos",
    image: imgURLs.malla,
    images: [imgURLs.malla],
    description: "Rollo industrial de malla antihierbas negra 2m x 100m. La solución definitiva para grandes proyectos de paisajismo y áreas comunes.",
    features: ["2m x 100m", "Industrial", "Máximo ahorro"],
    installation: "Base.",
    shipping: "Inmediata."
  }
];
