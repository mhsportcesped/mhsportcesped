export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
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
  specs?: {
    height: string;
    density: string;
    baseMaterial: string;
    uvResistance: string;
  };
}

import kievImg from "@/assets/cesped-kiev.png";
import helsinkiImg from "@/assets/cesped-helsinki.png";
import pragaImg from "@/assets/cesped-praga.png";
import ankaraImg from "@/assets/cesped-ankara.png";
import oportoImg from "@/assets/cesped-oporto.png";
import accesoriosImg from "@/assets/accesorios-instalacion.jpg";

export const categories = [
  { id: 'al-corte', name: 'CÉSPED ARTIFICIAL AL CORTE' },
  { id: 'en-rollo', name: 'CÉSPED ARTIFICIAL EN ROLLO' },
  { id: 'complementos', name: 'COMPLEMENTOS' },
];

export const products: Product[] = [
  // AL CORTE
  {
    id: "kiev-20-corte",
    name: "Césped Kiev 20 mm (Al Corte)",
    slug: "kiev-20mm-corte",
    price: 11.60,
    category: "al-corte",
    image: kievImg,
    images: [kievImg],
    height: 20,
    description: "Zonas económicas o de poco tránsito. Ideal para balcones y eventos temporales.",
    features: ["Económico", "Drenaje rápido", "Fácil limpieza"],
    installation: "Extender sobre superficie lisa, fijar con adhesivo o grapas.",
    shipping: "3-5 días laborables.",
    specs: { height: "20 mm", density: "13.650 puntadas/m²", baseMaterial: "Polipropileno", uvResistance: "Alta" }
  },
  {
    id: "helsinki-30-corte",
    name: "Césped Helsinki 30 mm (Al Corte)",
    slug: "helsinki-30mm-corte",
    price: 13.75,
    category: "al-corte",
    image: helsinkiImg,
    images: [helsinkiImg],
    height: 30,
    description: "Terrazas y patios. Equilibrio perfecto entre suavidad y recuperación.",
    features: ["Suave", "Aspeto natural", "Resistente"],
    installation: "Uso de cinta de unión y cola en juntas.",
    shipping: "3-5 días laborables.",
    specs: { height: "30 mm", density: "15.750 puntadas/m²", baseMaterial: "PP + Látex", uvResistance: "8-10 años" }
  },
  {
    id: "praga-40-corte",
    name: "Césped Praga 40 mm (Al Corte)",
    slug: "praga-40mm-corte",
    price: 18.10,
    category: "al-corte",
    image: pragaImg,
    images: [pragaImg],
    height: 40,
    description: "Uso general en jardines. Gran densidad y confort bajo los pies.",
    features: ["Densidad premium", "Tacto suave", "Recuperación vertical"],
    installation: "Preparación de base de grava recomendada.",
    shipping: "3-5 días laborables.",
    specs: { height: "40 mm", density: "18.900 puntadas/m²", baseMaterial: "PP + Látex reforzado", uvResistance: "Certificada" }
  },
  {
    id: "ankara-45-corte",
    name: "Césped Ankara 45 mm (Al Corte)",
    slug: "ankara-45mm-corte",
    price: 21.75,
    category: "al-corte",
    image: ankaraImg,
    images: [ankaraImg],
    height: 45,
    description: "Jardines y zonas decorativas de lujo. Aspecto selvático y muy frondoso.",
    features: ["Máximo realismo", "Extrema suavidad", "Certificado mascotas"],
    installation: "Instalación profesional recomendada.",
    shipping: "3-5 días laborables.",
    specs: { height: "45 mm", density: "21.000 puntadas/m²", baseMaterial: "Triple capa", uvResistance: "Máxima" }
  },

  // EN ROLLO
  {
    id: "kiev-20-rollo",
    name: "Rollo Industrial Kiev 20 mm",
    slug: "kiev-20mm-rollo",
    price: 255.00,
    category: "en-rollo",
    image: kievImg,
    images: [kievImg],
    height: 20,
    description: "Formato ahorro para grandes superficies. Ideal para obras y zonas industriales.",
    features: ["Formato profesional", "Precio reducido", "Fácil transporte"],
    installation: "Desenrollar y fijar mecánicamente.",
    shipping: "Paletizado especial (5-7 días).",
    specs: { height: "20 mm", density: "13.650 puntadas/m²", baseMaterial: "Polipropileno", uvResistance: "Alta" }
  },
  {
    id: "helsinki-30-rollo",
    name: "Rollo Industrial Helsinki 30 mm",
    slug: "helsinki-30mm-rollo",
    price: 255.00,
    category: "en-rollo",
    image: helsinkiImg,
    images: [helsinkiImg],
    height: 30,
    description: "Rollos completos de 2x25m. La mejor opción para jardines residenciales extensos.",
    features: ["Menos juntas", "Estabilidad dimensional", "Gran ahorro"],
    installation: "Requiere maquinaria de elevación o varias personas.",
    shipping: "Entrega en camión con plataforma.",
    specs: { height: "30 mm", density: "15.750 puntadas/m²", baseMaterial: "PP + Látex", uvResistance: "Certificada" }
  },
  {
    id: "praga-40-rollo",
    name: "Rollo Industrial Praga 40 mm",
    slug: "praga-40mm-rollo",
    price: 513.00,
    category: "en-rollo",
    image: pragaImg,
    images: [pragaImg],
    height: 40,
    description: "Máxima calidad en formato ahorro. Para paisajistas e instalaciones deportivas.",
    features: ["Calidad premium", "Larga durabilidad", "Aspecto inmejorable"],
    installation: "Uso de adhesivo bicomponente recomendado.",
    shipping: "Entrega pesada (5-7 días).",
    specs: { height: "40 mm", density: "18.900 puntadas/m²", baseMaterial: "PP + Látex reforzado", uvResistance: "Máxima" }
  },
  {
    id: "ankara-45-rollo",
    name: "Rollo Industrial Ankara 45 mm",
    slug: "ankara-45mm-rollo",
    price: 622.50,
    category: "en-rollo",
    image: ankaraImg,
    images: [ankaraImg],
    height: 45,
    description: "El modelo más frondoso en formato industrial. Lo mejor para proyectos de alto standing.",
    features: ["Lujo y confort", "Certificaciones internacionales", "Drenaje superior"],
    installation: "Especialistas MH Sport recomendados.",
    shipping: "Entrega pesada (5-7 días).",
    specs: { height: "45 mm", density: "21.000 puntadas/m²", baseMaterial: "Triple capa", uvResistance: "Total" }
  },

  // COMPLEMENTOS
  {
    id: "cola-bi",
    name: "Cola Bicomponente (Fase 1 + Fase 2)",
    slug: "cola-bicomponente",
    price: 31.20,
    category: "complementos",
    image: accesoriosImg,
    images: [accesoriosImg],
    description: "Adhesivo de alta resistencia para juntas permanentes. Resistente al agua y temperaturas extremas.",
    features: ["Ultra fuerte", "Exterior", "Profesional"],
    installation: "Mezclar ambos componentes y aplicar con espátula dentada.",
    shipping: "3 días."
  },
  {
    id: "cartucho-ad",
    name: "Cartucho Adhesivo Poliuretano",
    slug: "cartucho-adhesivo",
    price: 7.10,
    category: "complementos",
    image: accesoriosImg,
    images: [accesoriosImg],
    description: "Ideal para reparaciones o pegado de bordes y remates rápidos.",
    features: ["Fácil aplicación", "Secado rápido", "Multifunción"],
    installation: "Uso con pistola de calafateo estándar.",
    shipping: "3 días."
  },
  {
    id: "cinta-uni",
    name: "Cinta de Unión Adhesiva",
    slug: "cinta-union",
    price: 8.98,
    category: "complementos",
    image: accesoriosImg,
    images: [accesoriosImg],
    description: "Cinta reforzada para la unión invisible de paños de césped.",
    features: ["Grosor optimizado", "Adhesión total", "Fácil uso"],
    installation: "Colocar entre los dos paños y presionar.",
    shipping: "3 días."
  },
  {
    id: "grapas-fij",
    name: "Grapas de Fijación (Pack)",
    slug: "grapas-fijacion",
    price: 8.42,
    category: "complementos",
    image: accesoriosImg,
    images: [accesoriosImg],
    description: "Grapas de acero galvanizado para anclaje sobre tierra o arena.",
    features: ["Antioxidante", "Gran sujeción", "Discretas"],
    installation: "Clavar cada 30-50 cm en el perímetro.",
    shipping: "3 días."
  },
  {
    id: "cortador-ces",
    name: "Cortador de Césped Profesional",
    slug: "cortador-cesped",
    price: 6.72,
    category: "complementos",
    image: accesoriosImg,
    images: [accesoriosImg],
    description: "Cuchillas especiales para un corte limpio de la base de látex.",
    features: ["Corte preciso", "Mango ergonómico", "Seguridad"],
    installation: "Cortar siempre por el envés del césped para no dañar las fibras.",
    shipping: "3 días."
  },
  {
    id: "espatula-den",
    name: "Espátula Dentada",
    slug: "espatula-dentada",
    price: 4.55,
    category: "complementos",
    image: accesoriosImg,
    images: [accesoriosImg],
    description: "Herramienta indispensable para extender la cola de forma homogénea.",
    features: ["Reparto perfecto", "Acero resistente", "Cómoda"],
    installation: "Limpiar tras cada uso con disolvente.",
    shipping: "3 días."
  },
  {
    id: "guantes-tra",
    name: "Guantes de Trabajo",
    slug: "guantes-trabajo",
    price: 2.10,
    category: "complementos",
    image: accesoriosImg,
    images: [accesoriosImg],
    description: "Protección para las manos durante la manipulación de adhesivos y cortes.",
    features: ["Grip superior", "Protección química", "Transpirables"],
    installation: "Uso obligatorio al manipular cola bicomponente.",
    shipping: "3 días."
  },
  {
    id: "malla-anti",
    name: "Malla Antihierbas (Rollo)",
    slug: "malla-antihierbas",
    price: 12.90,
    category: "complementos",
    image: accesoriosImg,
    images: [accesoriosImg],
    description: "Base geotextil para evitar el crecimiento de vegetación bajo el césped.",
    features: ["Permeable", "Larga duración", "Necesaria en tierra"],
    installation: "Solapar 10 cm entre tiras y fijar con grapas.",
    shipping: "3 días."
  }
];
