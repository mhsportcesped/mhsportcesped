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
    description: "El modelo Ankara 45mm destaca por su densidad premium y su altura, ofreciendo un realismo visual insuperable y una suavidad excepcional. Es la elección perfecta para jardines de alto standing y zonas residenciales de uso frecuente.\n\nGracias a su composición de hilos de última generación, recupera su forma rápidamente tras la pisada, manteniendo siempre un aspecto natural y cuidado. Su base reforzada y su excelente capacidad de drenaje lo convierten en un modelo muy duradero.\n\nIdeal para familias con niños y mascotas, su tacto confortable y su resistencia a los rayos UV aseguran un rendimiento excelente durante todas las estaciones del año.",
        features: ["Alta densidad", "Máxima gama", "Drenaje superior"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "45 mm", density: "Alta", baseMaterial: "PP+PE", uvResistance: "Sí" }
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
    description: "El césped Praga de 40mm ofrece un equilibrio perfecto entre confort y resistencia. Su diseño de cuatro tonos le otorga un aspecto muy natural, ideal para renovar terrazas, áticos y zonas ajardinadas.\n\nCon una densidad optimizada, este césped proporciona una pisada mullida y confortable. Es altamente resistente al desgaste y está diseñado para soportar el tránsito moderado sin perder su volumen ni su vitalidad.\n\nDestaca por su fácil mantenimiento y su alta permeabilidad, lo que permite disfrutar de un espacio limpio, seco y visualmente impecable con el mínimo esfuerzo.",
        features: ["Suave", "Gran confort", "Recuperación vertical"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "40 mm", density: "Media-Alta", baseMaterial: "PP+PE", uvResistance: "Sí" }
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
    description: "El modelo Helsinki de 30mm es una solución versátil y muy realista, perfecta para quienes buscan un aspecto natural en un formato de altura media. Su acabado mate elimina brillos artificiales, logrando una estética muy cuidada.\n\nEs un césped compacto y funcional, ideal para áreas de juego, terrazas y zonas decorativas. Sus fibras combinan suavidad y resiliencia, ofreciendo una superficie cómoda y segura para todo tipo de actividades al aire libre.\n\nCuenta con base estabilizada y protección contra los rayos UV, lo que garantiza la conservación de su color y estructura frente a la exposición prolongada al sol.",
        features: ["Suavidad", "Realismo", "Uso decorativo y funcional"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "30 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
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
    description: "El césped artificial Kiev 20mm es sinónimo de elegancia y funcionalidad. Su altura reducida lo hace extremadamente práctico y fácil de limpiar, siendo una opción fantástica para áreas comerciales y zonas de mucho paso.\n\nSu estructura tupida y uniforme asegura una apariencia siempre pulcra. A pesar de su menor altura, mantiene un grado de suavidad muy agradable y un color vibrante que mejora el aspecto de cualquier espacio exterior o interior.\n\nExcelente relación calidad-precio para proyectos que requieren cubrir grandes superficies con un producto duradero, resistente y de estética profesional.",
        features: ["Elegante", "Duradero", "Fácil mantenimiento"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "20 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
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
    description: "Oporto 33mm es un modelo todoterreno que combina un aspecto natural con una gran resistencia. Su altura intermedia lo convierte en una opción muy equilibrada para múltiples aplicaciones, desde jardines privados hasta eventos.\n\nOfrece una textura suave y un diseño multicolor que imita a la perfección el césped natural recién cortado. Su base con buen drenaje evita la acumulación de agua, manteniendo la superficie utilizable bajo cualquier clima.\n\nUna solución duradera y económica que no renuncia a la calidad, aportando frescura y comodidad a tu hogar o negocio sin requerir un mantenimiento exigente.",
        features: ["Calidad", "Natural", "Versátil"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "33 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
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
    description: "El césped Berlín de 24mm es la opción ideal para quienes buscan un acabado limpio, compacto y muy natural. Su densidad garantiza una superficie firme y uniforme que se adapta a cualquier entorno.\n\nCon sus 4 tonos cuidadosamente seleccionados, aporta un estilo vibrante y realista. Es perfecto para jardines familiares, terrazas y espacios donde se busca funcionalidad, siendo seguro y cómodo para el tránsito diario.\n\nCuenta con excelentes propiedades de drenaje y resistencia, asegurando que tu espacio exterior se mantenga perfecto año tras año con un cuidado mínimo.",
        features: ["Resistente", "Natural", "Económico"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "24 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
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
    description: "Budapest 18mm es un césped altamente funcional y realista, pensado para embellecer balcones, terrazas y zonas de exposición. Su formato práctico ofrece una solución rápida para mejorar cualquier ambiente.\n\nGracias a sus fibras resistentes, soporta el paso del tiempo manteniendo un aspecto frondoso. No requiere de apenas mantenimiento y su instalación es sencilla, lo que lo hace perfecto para proyectos decorativos ágiles.\n\nAporta un toque verde elegante y limpio, convirtiendo superficies duras en espacios más acogedores y visualmente atractivos.",
        features: ["Funcional", "Realista", "Ligero"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "18 mm", density: "Media-Baja", baseMaterial: "PP", uvResistance: "Sí" }
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
    description: "El modelo Danubio 15mm es la alternativa más versátil y económica para proyectos de decoración. Su acabado realista y altura reducida lo hacen perfecto para terrazas, patios o eventos temporales.\n\nEs muy ligero y fácil de manipular, ofreciendo un gran rendimiento en zonas donde se necesita una cubierta verde inmediata. Su diseño facilita la limpieza y proporciona un entorno agradable sin las complicaciones del césped natural.\n\nUna solución inteligente y accesible para dar vida a cualquier espacio con la garantía de resistencia y buen drenaje.",
        features: ["Económico", "Versátil", "Multiuso"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "15 mm", density: "Baja", baseMaterial: "PP", uvResistance: "Sí" }
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
    description: "Viena Colores 8mm es la opción más creativa y atrevida de nuestro catálogo. Diseñado para espacios que buscan diferenciarse, está disponible en varios colores vibrantes para adaptarse a cualquier concepto decorativo.\n\nIdeal para parques infantiles, eventos, stands de ferias o terrazas modernas. Su textura de 8mm proporciona una superficie cómoda, llamativa y extremadamente fácil de limpiar.\n\nCombina diseño innovador con resistencia práctica, ofreciendo una instalación ligera que transforma radicalmente el aspecto de cualquier entorno.",
        features: ["Colores", "Creativo", "Diseño"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "8 mm", density: "Decorativa", baseMaterial: "PP", uvResistance: "Sí" }
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
    description: "El césped Suecia de 7mm es una solución decorativa funcional y económica. Su superficie suave y uniforme es perfecta para recubrir espacios exteriores e interiores de manera rápida y eficiente.\n\nIdeal para proyectos con presupuestos ajustados, como ferias, exposiciones o balcones, donde prima la practicidad sin renunciar a dar un toque verde y fresco al ambiente.\n\nSu base ligera facilita la instalación y su bajo mantenimiento lo convierte en un aliado perfecto para decoraciones efímeras o zonas de paso ocasional.",
        features: ["Decorativo", "Barato", "Funcional"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "7 mm", density: "Baja", baseMaterial: "PP", uvResistance: "Sí" }
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
    description: "Oslo 7mm representa la simplicidad y el ahorro. Este césped artificial de altura básica es la elección perfecta para quienes necesitan cubrir superficies de forma económica y estética.\n\nCon una textura suave y un color natural, proporciona un recubrimiento limpio y agradable. Es especialmente útil para eventos, ferias comerciales o como solución temporal en proyectos de decoración.\n\nFácil de instalar, limpiar y recoger, ofrece una relación calidad-precio insuperable para usos donde la practicidad es la máxima prioridad.",
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "7 mm", density: "Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },

  // CÉSPED ARTIFICIAL EN ROLLO
  {
    id: "ankara-45-rollo",
    name: "MODELO ANKARA 45mm",
    slug: "ankara-45mm-rollo",
    price: 1245.00,
    m2Price: 20.75,
    rollDimensions: "2x30m",
    category: "en-rollo",
    image: prodAnkaraRollo,
    images: [prodAnkaraRollo],
    height: 45,
    description: "Rollo completo del modelo premium Ankara 45mm. Máxima densidad y confort para proyectos de gran envergadura. Ideal para paisajismo profesional e instalaciones residenciales extensas que buscan la mayor calidad.",
    features: ["Formato profesional", "Máxima densidad", "Ahorro m²"],
    installation: "Fácil despliegue.",
    shipping: "Logística pesada.",
    specs: { height: "45 mm", density: "Profesional", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "praga-40-rollo",
    name: "MODELO PRAGA 40mm",
    slug: "praga-40mm-rollo",
    price: 1026.00,
    m2Price: 17.10,
    rollDimensions: "2x30m",
    category: "en-rollo",
    image: prodPragaRollo,
    images: [prodPragaRollo],
    height: 40,
    description: "Rollo industrial de Praga 40mm. Equilibrio perfecto entre suavidad y resistencia. Solución óptima para cubrir grandes áreas de jardín o terrazas manteniendo un alto confort y un aspecto muy natural.",
    features: ["Formato ahorro", "Pisada suave", "Alta m²"],
    installation: "Profesional.",
    shipping: "Logística pesada.",
    specs: { height: "40 mm", density: "Confort", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "helsinki-30-rollo",
    name: "MODELO HELSINKI 30mm",
    slug: "helsinki-30mm-rollo",
    price: 510.00,
    m2Price: 12.75,
    rollDimensions: "2x20m",
    category: "en-rollo",
    image: prodHelsinkiCorte, // Usando corte ya que no hay específico de rollo para Helsinki
    images: [prodHelsinkiCorte],
    height: 30,
    description: "Rollo completo del modelo Helsinki 30mm. Realismo y versatilidad en gran formato, perfecto para zonas residenciales y comerciales que requieren una cobertura estética duradera y de altura media.",
    features: ["Realismo", "Económico", "Fácil unión"],
    installation: "Sencilla.",
    shipping: "Logística pesada.",
    specs: { height: "30 mm", density: "Realista", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "kiev-20-rollo",
    name: "MODELO KIEV 20mm",
    slug: "kiev-20mm-rollo",
    price: 424.00,
    m2Price: 10.60,
    rollDimensions: "2x20m",
    category: "en-rollo",
    image: prodKievRollo,
    images: [prodKievRollo],
    height: 20,
    description: "Formato en rollo de Kiev 20mm. Extremadamente resistente y de fácil limpieza, indicado para superficies comerciales, eventos o zonas con un alto volumen de tránsito de personas.",
    features: ["Industrial", "Resistente", "Largo metraje"],
    installation: "Rápida.",
    shipping: "Logística pesada.",
    specs: { height: "20 mm", density: "Resistente", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "oporto-33-rollo",
    name: "MODELO OPORTO 33mm",
    slug: "oporto-33mm-rollo",
    price: 408.00,
    m2Price: 10.20,
    rollDimensions: "2x20m",
    category: "en-rollo",
    image: prodOportoRollo,
    images: [prodOportoRollo],
    height: 33,
    description: "Rollo del modelo Oporto 33mm. Excelente relación calidad-precio para cubrir de forma uniforme y duradera jardines extensos y áreas comunes, aportando gran realismo.",
    features: ["Calidad", "Garantía", "Ahorro m²"],
    installation: "Estándar.",
    shipping: "Logística pesada.",
    specs: { height: "33 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "berlin-24-rollo",
    name: "MODELO BERLÍN 24mm",
    slug: "berlin-24mm-rollo",
    price: 379.20,
    m2Price: 9.48,
    rollDimensions: "2x20m",
    category: "en-rollo",
    image: prodBerlinRollo,
    images: [prodBerlinRollo],
    height: 24,
    description: "Rollo de césped Berlín 24mm. Cobertura firme y compacta, muy natural. Especialmente recomendado para aplicaciones prácticas en grandes terrazas y paisajismo funcional.",
    features: ["Resistente", "Natural", "Económico"],
    installation: "Estándar.",
    shipping: "Logística pesada.",
    specs: { height: "24 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "budapest-18-rollo",
    name: "MODELO BUDAPEST 18mm",
    slug: "budapest-18mm-rollo",
    price: 311.20,
    m2Price: 7.78,
    rollDimensions: "2x20m",
    category: "en-rollo",
    image: prodBudapestRollo,
    images: [prodBudapestRollo],
    height: 18,
    description: "Rollo de Budapest 18mm. Ideal para el sector eventos, hostelería y zonas de exposición que necesitan un recubrimiento verde, limpio y rápido de instalar en grandes superficies.",
    features: ["Compacto", "Práctico", "Envío masivo"],
    installation: "Rápida.",
    shipping: "Logística pesada.",
    specs: { height: "18 mm", density: "Media-Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "danubio-15-rollo",
    name: "MODELO DANUBIO 15mm",
    slug: "danubio-15mm-rollo",
    price: 288.00,
    m2Price: 7.20,
    rollDimensions: "2x20m",
    category: "en-rollo",
    image: prodDanubioRollo,
    images: [prodDanubioRollo],
    height: 15,
    description: "Rollo completo Danubio 15mm. Máxima versatilidad al mejor precio para recubrir amplias zonas decorativas, ferias o espacios efímeros con un acabado profesional.",
    features: ["Patios", "Balcones", "Ahorro total"],
    installation: "Simple.",
    shipping: "Logística pesada.",
    specs: { height: "15 mm", density: "Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "viena-colores-rollo",
    name: "MODELO VIENA COLORES 8 mm",
    slug: "viena-colores-rollo",
    price: 193.50,
    m2Price: 6.45,
    rollDimensions: "2x15m",
    category: "en-rollo",
    image: prodVienaRollo,
    images: [prodVienaRollo],
    height: 8,
    description: "Rollos de césped Viena 8mm en varios colores. La opción definitiva para grandes proyectos creativos, parques infantiles y decoraciones temáticas que requieran impacto visual.",
    features: ["Decoración pro", "Diseño", "Innovación"],
    installation: "Especializada.",
    shipping: "Logística pesada.",
    specs: { height: "8 mm", density: "Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "suecia-7-rollo",
    name: "MODELO SUECIA 7 mm",
    slug: "suecia-7mm-rollo",
    price: 232.00,
    m2Price: 5.80,
    rollDimensions: "2x20m",
    category: "en-rollo",
    image: prodSueciaRollo,
    images: [prodSueciaRollo],
    height: 7,
    description: "Rollo de césped Suecia 7mm. Solución decorativa económica a gran escala. Muy ligero y manejable para montajes rápidos en exhibiciones y balcones extensos.",
    features: ["Decoración", "Mínimo peso", "Económico"],
    installation: "Decorativa.",
    shipping: "Logística pesada.",
    specs: { height: "7 mm", density: "Decorativa", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "oslo-7-rollo",
    name: "MODELO OSLO 7mm",
    slug: "oslo-7mm-rollo",
    price: 143.70,
    m2Price: 4.79,
    rollDimensions: "2x15m",
    category: "en-rollo",
    image: prodOsloRollo,
    images: [prodOsloRollo],
    height: 7,
    description: "Rollo Oslo 7mm. El formato más rentable para cubrir superficies masivas de forma sencilla and económica. Perfecto para protección temporal y eventos feriales.",
    features: ["Mínimo coste", "Efectivo", "Funcional"],
    installation: "Rápida.",
    shipping: "Logística pesada.",
    specs: { height: "7 mm", density: "Económica", baseMaterial: "PP", uvResistance: "Sí" }
  },

  // COMPLEMENTOS Y ACCESORIOS
  {
    id: "cartucho-adhesivo-300",
    name: "Cartucho de Adhesivo para Césped Artificial – 300 ml",
    slug: "cartucho-adhesivo-300ml",
    price: 7.10,
    category: "complementos",
    image: imgURLs.cartucho,
    images: [imgURLs.cartucho],
    description: "Adhesivo de poliuretano en cartucho de 300ml. Formulado especialmente para la fijación de césped artificial en juntas pequeñas, remates perimetrales y reparaciones. Su formato permite una aplicación limpia y precisa con cualquier pistola de silicona estándar, asegurando un secado rápido y una unión muy resistente ante la humedad y los cambios térmicos.",
    features: ["300ml", "Secado rápido", "Uso con pistola"],
    installation: "Manual.",
    shipping: "Inmediata."
  },
  {
    id: "cinta-union-adhesiva",
    name: "Cinta de Unión Adhesiva para Césped Artificial",
    slug: "cinta-union-adhesiva",
    price: 10.90,
    category: "complementos",
    image: imgURLs.cintaAdhesiva,
    images: [imgURLs.cintaAdhesiva],
    description: "Cinta de unión autoadhesiva para césped artificial. Facilita enormemente la instalación al no requerir el uso de cola líquida. Fabricada con materiales de alta tracción, proporciona una sujeción inmediata y duradera entre los paños de césped. Ideal para proyectos de bricolaje, terrazas y zonas con tráfico moderado donde se busca rapidez y limpieza en el montaje.",
    features: ["Autoadhesiva", "Alta tracción", "Invisible"],
    installation: "Inmediata.",
    shipping: "Inmediata."
  },
  {
    id: "cinta-union-estandar",
    name: "Cinta de Unión para Césped Artificial",
    slug: "cinta-union-estandar",
    price: 8.98,
    category: "complementos",
    image: imgURLs.cintaNormal,
    images: [imgURLs.cintaNormal],
    description: "Cinta de unión estándar no adhesiva, fabricada en geotextil de alta resistencia. Diseñada específicamente para ser utilizada en combinación con nuestra cola bicomponente. Garantiza una fijación profesional, permanente e invisible en las juntas del césped artificial, soportando tensiones extremas y asegurando la estabilidad en instalaciones deportivas y residenciales grandes.",
    features: ["Resistente", "Larga duración", "Profesional"],
    installation: "Uso con cola.",
    shipping: "Inmediata."
  },
  {
    id: "cola-bicomponente-6kg",
    name: "COLA BICOMPONENTE PROFESIONAL – 6 KG",
    slug: "cola-bicomponente-6kg",
    price: 0, // Pendiente confirmar
    category: "complementos",
    image: imgURLs.cola,
    images: [imgURLs.cola],
    description: "Adhesivo profesional bicomponente de poliuretano (envase de 6 kg), diseñado para instalaciones de césped artificial de alta exigencia. Al mezclar sus dos componentes, se crea una pasta adhesiva de altísima resistencia mecánica y térmica.",
    features: ["6 KG", "Profesional", "Total adherencia"],
    installation: "Mezcla sugerida.",
    shipping: "Inmediata."
  },
  {
    id: "cola-bicomponente-11kg",
    name: "COLA BICOMPONENTE PROFESIONAL – 11 KG",
    slug: "cola-bicomponente-11kg",
    price: 0, // Pendiente confirmar
    category: "complementos",
    image: imgURLs.cola,
    images: [imgURLs.cola],
    description: "Adhesivo profesional bicomponente de poliuretano (envase de 11 kg), diseñado para instalaciones de césped artificial de alta exigencia. Ideal para grandes superficies que requieren una unión definitiva y duradera.",
    features: ["11 KG", "Profesional", "Total adherencia"],
    installation: "Mezcla sugerida.",
    shipping: "Inmediata."
  },
  {
    id: "cortador-especial-pro",
    name: "Cortador especial para césped artificial",
    slug: "cortador-especial",
    price: 6.72,
    category: "complementos",
    image: imgURLs.cortador,
    images: [imgURLs.cortador],
    description: "Herramienta de corte ergonómica y profesional diseñada para el césped artificial. Su diseño permite un agarre seguro y firme, facilitando realizar cortes rectos o curvos precisos desde el reverso del césped sin dañar las fibras. Incluye cuchillas de acero endurecido de larga duración, indispensables para un acabado perfecto en los bordes y obstáculos durante la instalación.",
        features: ["Ergonómico", "Preciso", "Seguro"],
    installation: "Manual.",
    shipping: "Inmediata."
  },
  {
    id: "espatula-xamanek",
    name: "Espátula para Césped Artificial – XAMANEK",
    slug: "espatula-xamanek",
    price: 4.55,
    category: "complementos",
    image: imgURLs.espatula,
    images: [imgURLs.espatula],
    description: "Espátula dentada profesional, el accesorio esencial para la correcta distribución de la cola bicomponente. Sus dientes están calculados para extender la cantidad exacta de adhesivo sobre la cinta de unión, asegurando una cobertura homogénea y evitando el desperdicio de material. Cuenta con un mango ergonómico que facilita el trabajo prolongado durante la instalación.",
        features: ["Dentada", "Acero inox", "Marca líder"],
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
    description: "Pack de 10 grapas de fijación en forma de U, fabricadas en acero galvanizado resistente a la oxidación. Son el anclaje perfecto para asegurar el perímetro del césped artificial sobre superficies de tierra, arena o grava. Mantienen el césped tensado y firme en su sitio, evitando levantamientos por el viento o el uso diario. Son discretas y fáciles de clavar.",
        features: ["Acero galvanizado", "Pack 10 uni", "Gran sujeción"],
    installation: "Clavar manual.",
    shipping: "Inmediata."
  },
  {
    id: "guantes-pro",
    name: "Guantes para Césped Artificial",
    slug: "guantes-cesped",
    price: 2.10,
    category: "complementos",
    image: imgURLs.guantes,
    images: [imgURLs.guantes],
    description: "Guantes de protección para instalación, ligeros y muy resistentes. Fabricados en tejido de alta calidad con recubrimiento especial en la palma y los dedos para ofrecer un agarre antideslizante superior. Protegen tus manos contra la abrasión al manipular los rollos de césped y evitan el contacto directo con adhesivos o herramientas de corte, garantizando un trabajo seguro y cómodo.",
        features: ["Protección", "Uso rudo", "Cómodos"],
    installation: "Protección personal.",
    shipping: "Inmediata."
  },
  {
    id: "malla-antihierbas-negra",
    name: "Malla Antihierbas Negra",
    slug: "malla-antihierbas-negra",
    price: 12.90,
    category: "complementos",
    image: imgURLs.malla,
    images: [imgURLs.malla],
    description: "Malla geotextil antihierbas de color negro. Se coloca directamente sobre el terreno preparado antes de instalar el césped artificial. Actúa como una barrera eficaz que impide la germinación y crecimiento de malas hierbas desde el subsuelo, protegiendo tu instalación. Es altamente permeable, permitiendo que el agua drene correctamente hacia el terreno sin crear encharcamientos.",
        features: ["Densa", "Geotextil", "Antihierbas"],
    installation: "Extensión base.",
    shipping: "Inmediata."
  }
];
