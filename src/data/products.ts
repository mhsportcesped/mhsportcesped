export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: 'al-corte' | 'en-rollo' | 'complementos';
  image: string;
  gallery?: string[];
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
  { id: 'al-corte', name: 'Césped Artificial Al Corte' },
  { id: 'en-rollo', name: 'Césped Artificial En Rollo' },
  { id: 'complementos', name: 'Complementos' },
];

import imgAnkara from '../assets/cesped-ankara.png';
import imgPraga from '../assets/cesped-praga.png';
import imgHelsinki from '../assets/cesped-helsinki.png';
import imgKiev from '../assets/cesped-kiev.png';
import imgOporto from '../assets/cesped-oporto.png';
import imgDefault from '../assets/cesped-producto-1.jpg';
import imgAccesorios from '../assets/accesorios-instalacion.jpg';

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
  
  cartucho: imgAccesorios,
  cintaAdhesiva: imgAccesorios,
  cintaNormal: imgAccesorios,
  cola: imgAccesorios,
  cortador: imgAccesorios,
  espatula: imgAccesorios,
  grapas: imgAccesorios,
  guantes: imgAccesorios,
  malla: imgAccesorios
};

export const products: Product[] = [
  // Césped Artificial al Corte
  {
    id: "ankara-45-corte",
    name: "Césped Artificial Al Corte Ankara 45 Mm – Alta Densidad",
    slug: "ankara-45mm-corte",
    price: 21.75,
    category: "al-corte",
    image: imgURLs.ankara,
    gallery: [imgURLs.ankara],
    height: 45,
    description: "Descripción\n\n🌿 \nCésped artificial Ankara 45 mm – Realismo y suavidad premium\n\nCésped artificial ankara 45mm al corte\n, nuestro modelo premium más demandado. Combina realismo, suavidad y alta densidad, siendo la mejor opción para quienes buscan calidad superior.\n\n💪 \nAlta densidad y resistencia para uso intensivo\n\nFabricado con \nmezcla de polietileno y polipropileno de alta calidad\n, el césped Ankara 45 mm garantiza \ndurabilidad y firmeza\n, soportando tránsito constante de personas y muebles de exterior. Con un \npeso total de 4.140 g/m²\n, mantiene su forma y color, incluso en condiciones climáticas adversas, asegurando un césped verde y atractivo durante años.\n\n🐾 \nSeguro y cómodo para mascotas y niños\n\nPerfecto para familias y amantes de los animales, este césped es \nresistente a uñas y garras\n y permite un \ndrenaje rápido del agua\n, evitando charcos y manteniendo el espacio limpio y seco. Ideal para juegos, paseos o actividades al aire libre sin preocupaciones, combinando confort y seguridad.\n\n🧰 \nFácil instalación y mantenimiento\n\nEl sistema de base doble de polipropileno y red asegura una fijación estable, mientras que el recubrimiento de \nlátex SBR\n permite una instalación rápida y sencilla, incluso en superficies grandes. Además, su material es \nno inflamable\n, proporcionando seguridad extra y tranquilidad a los usuarios.\n\n🌞 \nVersátil para cualquier espacio exterior\n\nEl césped artificial Ankara 45 mm se adapta a jardines grandes, terrazas, áreas comerciales o zonas de ocio. Combina \nlujo, estilo y resistencia\n, ofreciendo un acabado profesional con un mantenimiento mínimo: solo requiere cepillado ocasional y limpieza ligera para conservar su aspecto natural y brillante. El \ncésped artificial ankara 45mm\n mantiene su aspecto natural y color durante años.\n\n✅ \nLa elección perfecta para tu jardín o terraza\n\nSi buscas un césped artificial \nduradero, seguro y estéticamente impecable\n, el modelo \nAnkara 45 mm al corte\n es la mejor opción. Convierte cualquier espacio exterior en un lugar elegante y confortable, listo para relajarte, jugar o recibir visitas.\n\n🌍 Más información general en\n\nWikipedia sobre césped artificial\n\n📊 \nPrecio:\n 21,75 €/m²\n\n🔗 Descubre más en \nnuestra gama completa de césped artificial\n y encuentra el modelo perfecto para tu jardín o terraza.",
        features: ["Alta densidad", "Máxima gama", "Drenaje superior"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    featured: true,
    specs: { height: "45 mm", density: "Alta", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "praga-40-corte",
    name: "Césped Artificial Al Corte Praga 40 Mm – Confort",
    slug: "praga-40mm-corte",
    price: 18.10,
    category: "al-corte",
    image: imgURLs.praga,
    gallery: [imgURLs.praga],
    height: 40,
    description: "Descripción\n\n🌿 \nCésped Artificial AL CORTE Praga 40 MM – CONFORT\n\nEl \ncésped al corte Praga 40 mm\n ofrece un equilibrio perfecto entre realismo, confort y durabilidad. Con una altura de fibra de 40 mm y mezcla de 4 tonos, logra un acabado natural y elegante para cualquier espacio exterior. Su apariencia mate y la combinación de fibras rectas y rizadas aportan un tacto agradable durante todo el año.\n\n💪 Césped artificial Praga 40: resistente y funcional\n\nGracias a su densidad de \n25.200 puntadas/m²\n y un \npeso total de 3.261 g/m²\n, este modelo garantiza estabilidad en terrazas, jardines familiares o zonas de ocio con tránsito moderado. La \nprotección UV\n mantiene el color y evita el desgaste prematuro incluso con muchas horas de sol.\n\n🐾 Confortable y seguro para toda la familia\n\nDiseñado para una pisada suave, este \ncésped sintético Praga 40 mm\n combina fibras rectas tipo \nSpine\n con fibras rizadas de soporte que mejoran la recuperación. Es cómodo para juegos y actividades, y resulta ideal para convivir con mascotas por su fácil limpieza y resistencia.\n\n🧰 Fácil instalación y drenaje eficaz\n\nEl backing de \ndoble base de polipropileno + malla\n y el recubrimiento de \nlátex SBR\n aportan fijación y estabilidad. La permeabilidad de \n60 l/m²\n facilita el drenaje, evitando charcos y manteniendo el césped limpio y utilizable tras la lluvia o el riego. El mantenimiento se limita a cepillado ocasional y limpieza ligera.\n\n🌞 Versatilidad y garantía de calidad\n\nEl \ncésped artificial de 40 mm Praga\n encaja en jardines privados, áticos y áreas recreativas donde se busca estética y practicidad. Cuenta con \ngarantía de 5 años\n y certificaciones \nCE, ISO, ROHS y REACH\n, que avalan su calidad y seguridad. Este \ncésped sintético Praga 40\n ofrece una gran relación calidad-precio dentro de nuestra gama.\n\n✅ Césped sintético Praga 40, la elección inteligente\n\nSi prefieres un \ncésped artificial decorativo de 40 mm\n con aspecto natural, buen confort y bajo mantenimiento, Praga es tu opción. Convierte tu terraza o jardín en un espacio duradero y atractivo. Además, este \ncésped al corte Praga 40\n garantiza estética y confort con mínimo esfuerzo.\n\n🌍 Más info en el \nartículo de Wikipedia sobre césped artificial\n\n🔗 ¿Buscas más densidad y suavidad? Mira el \nmodelo Ankara 45 mm\n\n📊 Precio: 18,10 €/m²",
        features: ["Suave", "Gran confort", "Recuperación vertical"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    featured: true,
    specs: { height: "40 mm", density: "Media-Alta", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "helsinki-30-corte",
    name: "Césped Artificial Al Corte Helsinki 30 Mm – Suavidad Y Realismo",
    slug: "helsinki-30mm-corte",
    price: 13.75,
    category: "al-corte",
    image: imgURLs.helsinki,
    gallery: [imgURLs.helsinki],
    height: 30,
    description: "Descripción\n\n🌿 Césped Artificial al Corte Helsinki 30 mm – Suavidad y Realismo\n\nCésped artificial Helsinki 30 al corte es la opción ideal si buscas un césped compacto, natural y suave al tacto. Con una altura de 30 mm y mezcla de 4 tonos, ofrece un aspecto realista y duradero que encaja en cualquier espacio exterior. Su acabado mate evita reflejos y la combinación de fibras rectas y rizadas aporta un tacto agradable durante todo el año.\n\n💪 Césped artificial Helsinki 30 resistente y práctico\n\nCon \n17.850 puntadas/m²\n y un \npeso total de 2.558 g/m²\n, este modelo asegura densidad y firmeza sin perder confort. El \ndtex total de 11.600\n y la \nprotección UV\n mantienen los colores vivos y evitan el desgaste prematuro incluso con muchas horas de sol.\n\n🐾 Confort para familias y mascotas\n\nGracias a la mezcla de fibras rectas tipo \nSpine\n (PE) y fibras rizadas de soporte (PP), el \ncésped sintético Helsinki 30\n ofrece buena recuperación y pisada cómoda. Es perfecto para zonas de juego infantil y hogares con mascotas por su resistencia y fácil limpieza.\n\n🧰 Instalación sencilla y drenaje eficaz\n\nEl backing con \nbase primaria de polipropileno + malla (Mesh)\n y el recubrimiento de \nSBR Látex\n aportan estabilidad y durabilidad. La permeabilidad de \n60 l/m²\n facilita el drenaje, evitando charcos y manteniendo la superficie utilizable tras la lluvia o el riego. El mantenimiento se reduce a un cepillado ocasional y limpieza ligera.\n\n🌞 Versatilidad y garantía de calidad\n\nEste \ncésped artificial de 30 mm Helsinki\n encaja en jardines, áticos y áreas decorativas donde se busca estética y practicidad. Está clasificado como \nClass Efl\n (no inflamable), cuenta con \ngarantía de 5 años\n y certificaciones \nCE, ISO, ROHS y REACH\n. El \ncésped artificial Helsinki 30\n destaca por su relación calidad-precio dentro de nuestra gama.\n\n✅ Modelo Helsinki 30, la elección inteligente\n\nSi buscas un \ncésped artificial decorativo de 30 mm\n con aspecto natural, confort y poco mantenimiento, este modelo es tu mejor opción para transformar tu terraza o jardín en un espacio duradero y atractivo.\n\n🌍 Más info en el \nartículo de Wikipedia sobre césped artificial\n\n🔗 ¿Quieres más densidad y suavidad? Mira el \nmodelo Ankara 45 mm\n\n📊 Precio: 13,75 €/m²",
        features: ["Suavidad", "Realismo", "Uso decorativo y funcional"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    featured: true,
    specs: { height: "30 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "kiev-20-corte",
    name: "Césped Artificial Al Corte Kiev 20 Mm – Elegancia Y Durabilidad",
    slug: "kiev-20mm-corte",
    price: 11.60,
    category: "al-corte",
    image: imgURLs.kiev,
    gallery: [imgURLs.kiev],
    height: 20,
    description: "Descripción\n\n🌱 Césped artificial Kiev 20 mm: elegancia y resistencia\n\nEl \ncésped artificial Kiev 20 mm de MH Sport\n es mucho más que una solución decorativa: combina \nfrescura, suavidad y durabilidad\n en cada fibra. Gracias a su \ndtex de 11.000\n y una \ndensidad de 17.850\n, este modelo garantiza un aspecto uniforme y natural en jardines, terrazas y espacios comerciales.\n\n✨ Detalles técnicos del césped artificial Kiev 20 mm\n\nCada fibra está fabricada con \npolietileno y polipropileno\n, integrando una \nsección espina central\n que aporta un acabado realista y brillante. Con \n1172 puntadas por metro cuadrado\n, ofrece una textura compacta y resistente sin perder suavidad. Su \npeso del hilo de 1.000 g/m2\n y el \npeso total de 1.850 g/m2\n aseguran estabilidad en cada instalación.\n\n💪 Ventajas del modelo Kiev 20 mm\n\nLa \nbase de polipropileno\n y el \nrecubrimiento de SBR Látex\n refuerzan la firmeza del césped, garantizando un excelente comportamiento frente al desgaste. Además, cuenta con \nclasificación no inflamable\n y una \ngarantía de 5 años\n, lo que lo convierte en una opción segura y fiable.\n\n🏡 Usos recomendados\n\nEl \ncésped artificial Kiev 20 mm\n es ideal para quienes buscan transformar su hogar o negocio con una solución estética y práctica. Perfecto para \njardines, terrazas o espacios comerciales\n, este modelo combina elegancia y confort, ofreciendo un aspecto natural que se mantiene impecable con el paso del tiempo.\n\nAdemás, su versatilidad lo convierte en una excelente opción para \nzonas de ocio, áreas de piscina y espacios infantiles\n, gracias a su suavidad y a la resistencia al tránsito frecuente. Su diseño en \n4 tonos de color\n le aporta un efecto realista y una estética moderna, capaz de integrarse en cualquier tipo de ambiente.\n\n🔗 Más información y referencias\n\nSi quieres aprender más sobre el uso del \ncésped artificial\n en espacios residenciales y públicos, puedes consultar \neste artículo en Wikipedia\n.\n\nTambién puedes descubrir otros modelos como el \ncésped artificial Berlín 24 mm\n, perfecto para quienes buscan mayor densidad y suavidad.\n\n💶 Su precio es de \n11,60 €/m2\n.",
        features: ["Elegante", "Duradero", "Fácil mantenimiento"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    featured: true,
    specs: { height: "20 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "oporto-33-corte",
    name: "Césped Artificial Al Corte Oporto 33 Mm – Calidad",
    slug: "oporto-33mm-corte",
    price: 11.20,
    category: "al-corte",
    image: imgURLs.oporto,
    gallery: [imgURLs.oporto],
    height: 33,
    description: "Descripción\n\n🌿 Césped Artificial al Corte Oporto 33 mm – Calidad y Confort\n\nCésped artificial Oporto 33 al corte es la opción ideal si buscas un césped realista, económico y duradero. Con una altura de 33 mm y mezcla de 4 tonos, ofrece un acabado natural y elegante que transforma cualquier espacio exterior en un entorno atractivo y resistente.\n\n💪 Césped artificial Oporto 33 resistente y práctico\n\nCon \n27.300 puntadas/m²\n y un \npeso total de 2.145 g/m²\n, este modelo asegura densidad y firmeza sin perder confort. La \nprotección UV\n mantiene los colores vivos y su \nclasificación de fuego Efl\n lo convierte en una opción segura y versátil tanto para jardines como para terrazas.\n\n🐾 Confort y suavidad para toda la familia\n\nGracias a la mezcla de fibras rectas tipo \nSpine\n y fibras rizadas de soporte, el \ncésped sintético Oporto 33\n mejora la recuperación y la comodidad. Es ideal para convivir con mascotas y para zonas de juego infantil por su resistencia y fácil limpieza.\n\n🧰 Instalación sencilla y drenaje eficaz\n\nEl backing con \ndoble base de polipropileno + malla\n y el recubrimiento de \nSBR Látex\n aportan estabilidad y durabilidad. La permeabilidad de \n60 l/m²\n evita encharcamientos y mantiene la superficie utilizable tras lluvia o riego. El mantenimiento se limita a un cepillado ocasional y limpieza ligera.\n\n🌞 Versatilidad y garantía\n\nEl \ncésped artificial decorativo de 33 mm\n se adapta a jardines privados, áticos y áreas recreativas donde se busca estética y practicidad. Cuenta con \ngarantía de 5 años\n y certificaciones \nCE, ISO, ROHS y REACH\n que avalan su calidad. Este \ncésped sintético Oporto 33\n destaca por su gran relación calidad-precio dentro de nuestra gama.\n\n✅ Césped artificial Oporto 33, tu mejor elección\n\nSi buscas un \ncésped artificial Oporto 33\n con aspecto natural, durabilidad y poco mantenimiento, este modelo es la opción ideal para transformar cualquier espacio exterior. Disfruta de un césped con apariencia realista, fácil de mantener y perfecto durante todo el año.\n\n🌍 Más información en el \nartículo de Wikipedia sobre césped artificial\n\n🔗 ¿Quieres más densidad y suavidad? Mira el \nmodelo Ankara 45 mm\n\n📊 Precio: 11,20 €/m²",
        features: ["Calidad", "Natural", "Versátil"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "33 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "berlin-24-corte",
    name: "Césped Artificial Al Corte Berlín 24 Mm – Resistente Y Natural",
    slug: "berlin-24mm-corte",
    price: 10.48,
    category: "al-corte",
    image: imgURLs.berlin,
    gallery: [imgURLs.berlin],
    height: 24,
    description: "Descripción\n\n🌿 \nCésped Artificial al Corte Berlín 24 mm – Estilo y Resistencia\n\nEl \ncésped artificial Berlín 24mm\n de MH Sport es la opción ideal para quienes buscan un acabado natural, compacto y elegante. Con su altura de fibra de 24 mm, combina estética y durabilidad para transformar cualquier espacio exterior.\n\n💪 \nResistente y funcional\n\nGracias a su \ndtex de 6.000\n y una \ndensidad de 27.300 puntadas/m²\n, este modelo garantiza una superficie firme y de aspecto uniforme. Sus \n26 puntadas por centímetro\n ofrecen un acabado continuo, sin huecos visibles, imitando la perfección de un césped natural.\n\n🎨 \nAspecto natural y realista\n\nEl \ncésped artificial Berlín 24mm\n combina \n4 tonos de color\n cuidadosamente seleccionados para aportar un estilo vibrante pero natural. Sus fibras de \nsección espina central\n con acabado mate le dan mayor realismo y suavidad al tacto, evitando brillos artificiales.\n\n🐾 \nConfort y seguridad\n\nCon un \npeso total de 1.845 g/m²\n y un hilo de 910 g/m², este césped ofrece una pisada estable y cómoda. Es perfecto tanto para jardines familiares como para terrazas o zonas de ocio, siendo seguro para niños y mascotas. Además, cuenta con \nresistencia al fuego no inflamable\n, aportando confianza y tranquilidad.\n\n🧰 \nFácil instalación y drenaje eficaz\n\nSu \nbase primaria de polipropileno\n, junto con una \nmalla secundaria\n y recubrimiento en \nSBR Látex\n, aseguran una fijación duradera. Además, su drenaje de \n60 l/m²\n evita la acumulación de agua, manteniendo la superficie seca y lista para usar.\n\n🌞 \nGarantía y versatilidad\n\nEste césped artificial cuenta con \n5 años de garantía\n y certificaciones \nCE, ISO, ROHS y Reach\n, lo que avala su calidad y seguridad. Es ideal para jardines, terrazas o cualquier espacio donde se desee un acabado moderno y funcional.\n\n✅ \nCésped artificial Berlín 24mm, tu mejor elección\n\nSi buscas un césped artificial decorativo con estilo, resistencia y bajo mantenimiento, el modelo Berlín es la alternativa perfecta. Disfruta de un espacio atractivo, natural y duradero con la confianza de MH Sport.\n\n🌍 Más información sobre el \ncésped artificial en Wikipedia\n\n🔗 Echa un vistazo al \nmodelo Praga 40 mm\n.\n\n📊 \nPrecio: 10,48 €/m²",
        features: ["Resistente", "Natural", "Económico"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "24 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "budapest-18-corte",
    name: "Césped Artificial Al Corte Budapest 18 Mm – Realismo Y Funcionalidad",
    slug: "budapest-18mm-corte",
    price: 8.78,
    category: "al-corte",
    image: imgURLs.budapest,
    gallery: [imgURLs.budapest],
    height: 18,
    description: "Descripción\n\n🌿 \nCésped artificial Budapest 18mm\n al corte – Realismo y funcionalidad en tu terraza o balcón\n\nCon una \naltura de fibra de 18mm\n, el modelo Budapest es ideal para embellecer terrazas, balcones, patios o zonas de exposición sin complicaciones. Su aspecto natural, denso y uniforme aporta frescura en cualquier ambiente, con un toque agradable y cómodo al caminar.\n\n✨ \nCalidad y resistencia\n\nFabricado con fibras de polietileno y polipropileno en varios tonos, el \ncésped artificial Budapest 18mm\n reproduce un acabado natural y realista durante todo el año. Su base de alta calidad garantiza firmeza, estabilidad y un drenaje óptimo, incluso en condiciones de humedad. Además, no requiere riegos, siegas ni fertilizantes, lo que supone un ahorro en mantenimiento y en consumo de agua.\n\n🐾 \nSeguro y confortable\n\nEste modelo está diseñado para aportar suavidad y resistencia en espacios con tránsito moderado. Es perfecto para zonas de relax, áreas infantiles o espacios donde conviven mascotas, ya que es fácil de limpiar y siempre mantiene un aspecto cuidado.\n\n🏡 \nUsos decorativos y versatilidad\n\nEl \ncésped artificial Budapest 18mm\n es muy versátil: utilízalo en terrazas, balcones, áticos, chill out o incluso en stands de feria y escaparates comerciales. Aporta un toque verde y elegante en cualquier entorno, adaptándose a todo tipo de proyectos decorativos.\n\n💪 \nGarantía MH Sport\n\nEn MH Sport cuidamos cada detalle: ofrecemos asesoramiento personalizado, cortes a medida y \ngarantía de 5 años\n en todos nuestros modelos. Si buscas un acabado más mullido, descubre el \nmodelo Ankara 45mm\n. Y si prefieres una opción económica para proyectos puntuales, revisa el \nmodelo Kiev 20mm\n.\n\n📚 \nMás información\n\nSi quieres conocer más sobre el material y sus aplicaciones, consulta la \nentrada de Wikipedia sobre césped artificial\n.\n\n&#8212;\n\n✅ En definitiva, el \ncésped artificial Budapest 18mm\n de MH Sport combina estética, comodidad y durabilidad en un formato práctico y fácil de instalar. Pídelo online y transforma tus espacios en muy poco tiempo.",
        features: ["Funcional", "Realista", "Ligero"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "18 mm", density: "Media-Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "danubio-15-corte",
    name: "Césped Artificial Al Corte Danubio 15 Mm – Economía Y Versatilidad",
    slug: "danubio-15mm-corte",
    price: 8.20,
    category: "al-corte",
    image: imgURLs.danubio,
    gallery: [imgURLs.danubio],
    height: 15,
    description: "Descripción\n\n🌿 \nCésped artificial Danubio 15mm\n al corte – Economía y versatilidad para tus espacios\n\nCon una \naltura de fibra de 15mm\n, el modelo Danubio es la opción más práctica y económica para quienes buscan un césped artificial decorativo sin complicaciones. Su acabado realista y uniforme aporta frescura tanto en exteriores como en interiores, ofreciendo una solución rápida y eficaz para transformar cualquier espacio sin riego ni mantenimiento.\n\n✨ \nCalidad funcional y duradera\n\nEl \ncésped artificial Danubio 15mm\n está diseñado con fibras resistentes que soportan el paso del tiempo y las condiciones climáticas. Su base garantiza una instalación estable y un drenaje eficiente, evitando encharcamientos incluso en días de lluvia. Gracias a su fabricación con materiales de calidad, cumple con normativas de seguridad y proporciona un césped fiable durante años.\n\n🏡 \nUsos decorativos y adaptabilidad\n\nPor su altura reducida y precio ajustado, este modelo es perfecto para terrazas, balcones, azoteas, patios pequeños, zonas de exposición comercial o eventos temporales. Es ligero, fácil de instalar y se adapta a proyectos donde se busque dar un toque verde sin grandes inversiones. Su versatilidad lo convierte en un aliado tanto en entornos domésticos como en locales comerciales.\n\n🐾 \nConfort y seguridad\n\nEl \nDanubio 15mm\n también es una opción práctica en hogares con mascotas o niños, ya que es fácil de limpiar y mantiene un aspecto cuidado con muy poco esfuerzo. Su superficie cómoda aporta un espacio seguro y agradable para el día a día.\n\n💪 \nGarantía MH Sport\n\nEn MH Sport ofrecemos garantía de \n3 años\n en el modelo Danubio, junto con asesoramiento personalizado y cortes a medida. Si buscas un césped más mullido y realista, te recomendamos el \nmodelo Ankara 45mm\n. Y si prefieres una opción intermedia en altura, revisa el \nmodelo Budapest 18mm\n.\n\n📚 \nMás información\n\nSi quieres conocer más sobre este tipo de superficies, consulta la \nentrada de Wikipedia sobre césped artificial\n.\n\n&#8212;\n\n✅ En conclusión, el \ncésped artificial Danubio 15mm\n de MH Sport destaca por su economía, facilidad de instalación y gran versatilidad. Ideal para proyectos decorativos con bajo presupuesto y alta practicidad, siempre con la calidad garantizada de MH Sport.",
        features: ["Económico", "Versátil", "Multiuso"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "15 mm", density: "Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "viena-colores-corte",
    name: "Césped Artificial Al Corte Viena Colores 8 Mm – Creatividad Y Diseño",
    slug: "viena-colores-corte",
    price: 7.45,
    category: "al-corte",
    image: imgURLs.viena,
    gallery: [imgURLs.viena],
    height: 8,
    description: "Descripción\n\n🌈 \nCésped artificial Viena Colores 8mm\n al corte – Creatividad y diseño para espacios únicos\n\nEl \ncésped artificial Viena Colores 8mm\n de MH Sport es la opción más original para quienes buscan dar un toque creativo y diferente a su hogar o negocio. Diseñado especialmente para \nuso decorativo\n, combina diseño, versatilidad y economía en un mismo producto. Con una \naltura de fibra de 8 mm\n y una \ndensidad de 86.000 puntadas\n, ofrece una cobertura tupida y cómoda que aporta frescura y estilo a cualquier espacio.\n\n✨ \nCreatividad sin límites\n\nEste modelo se diferencia del resto gracias a su \npaleta de colores variada\n: rojo, verde, morado, fucsia, azul, gris, marrón y negro. Una gama que permite crear combinaciones atrevidas, diseños geométricos o simples detalles de color que rompen la monotonía de lo convencional. Perfecto para terrazas modernas, locales comerciales, stands de feria, eventos temáticos o incluso habitaciones infantiles.\n\n💪 \nCalidad y resistencia\n\nAunque su objetivo principal es decorativo, el \ncésped artificial Viena Colores 8mm\n también ofrece resistencia y estabilidad gracias a su \nbase de tejido PP\n y recubrimiento de \nSBR Látex\n. Su estructura ligera (890 g/m²) facilita la instalación y el manejo, al tiempo que asegura una superficie duradera y firme. Además, cuenta con clasificación de seguridad: es \nno inflamable\n y garantiza tranquilidad en cualquier espacio.\n\n🏡 \nAplicaciones versátiles\n\nEl \nViena Colores 8mm\n es ideal para decorar balcones, patios, terrazas pequeñas, escaparates o cualquier rincón que necesite un toque vibrante. Su bajo coste y facilidad de uso lo convierten en una excelente alternativa para proyectos temporales, creativos o con presupuestos ajustados.\n\n🐾 \nSeguro y fácil de mantener\n\nAl ser ligero y de baja altura, este césped es muy sencillo de limpiar y mantener. Es apto para espacios con mascotas o niños, ya que resiste el uso diario y mantiene un aspecto impecable con muy poco esfuerzo.\n\n🔗 \nOtros modelos que te pueden interesar\n\nSi buscas un césped más mullido y realista, revisa el \nmodelo Ankara 45mm\n. Para una opción intermedia en altura, te recomendamos el \nmodelo Budapest 18mm\n.\n\n📚 \nMás información\n\nSi quieres conocer más sobre este tipo de superficies, consulta la \nentrada de Wikipedia sobre césped artificial\n.\n\n&#8212;\n\n✅ En conclusión, el \ncésped artificial Viena Colores 8mm\n es la solución perfecta para quienes buscan creatividad, color y diseño en un césped decorativo. Una opción práctica, económica y diferente que transforma cualquier espacio con estilo.",
        features: ["Colores", "Creativo", "Diseño"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "8 mm", density: "Decorativa", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "suecia-7-corte",
    name: "Césped Artificial Al Corte Suecia 7 Mm – Economía Y Decoración",
    slug: "suecia-7mm-corte",
    price: 6.80,
    category: "al-corte",
    image: imgURLs.suecia,
    gallery: [imgURLs.suecia],
    height: 7,
    description: "Descripción\n\n🌿 \nCésped artificial Suecia 7mm\n al corte – Economía y decoración práctica\n\nEl \ncésped artificial Suecia 7mm\n de MH Sport es la alternativa perfecta para quienes buscan un césped decorativo sencillo, económico y funcional. Con una \naltura de fibra de 7 mm\n, ofrece una superficie suave y uniforme que aporta frescura a cualquier espacio sin necesidad de riego ni mantenimiento. Es una opción ideal para proyectos donde prima la practicidad, sin renunciar a la estética.\n\n✨ \nCalidad y diseño\n\nFabricado con fibras de polietileno y polipropileno de alta resistencia, el \ncésped artificial Suecia 7mm\n garantiza durabilidad frente al uso y las inclemencias del clima. Su \ndensidad de 60.000 puntadas\n por m² y su \ngalga de 5/32”\n aseguran una cobertura consistente y realista, mientras que el acabado \nsin brillo\n le otorga un aspecto más natural. Además, su vibrante tono verde imita el césped real, ofreciendo un acabado limpio y cuidado todo el año.\n\n🏡 \nUsos decorativos y versatilidad\n\nGracias a su bajo coste y fácil instalación, el \nSuecia 7mm\n es perfecto para terrazas pequeñas, patios, balcones, azoteas o zonas de exposición. También resulta muy útil en eventos temporales, ferias o stands comerciales donde se necesite una superficie estética y práctica sin grandes inversiones. Su ligereza lo convierte en un producto manejable y adaptable a cualquier rincón.\n\n🐾 \nSeguro y fiable\n\nEl \ncésped artificial Suecia 7mm\n es \nno inflamable\n y cuenta con garantía de un año, lo que asegura confianza y seguridad en todo tipo de instalaciones. Su base de polipropileno con recubrimiento SBR Látex ofrece estabilidad, resistencia y un buen drenaje para evitar encharcamientos. Además, es cómodo para caminar y fácil de limpiar, lo que lo hace apto para espacios con mascotas o niños.\n\n💪 \nGarantía MH Sport\n\nEn MH Sport ponemos a tu disposición asesoramiento personalizado y cortes a medida para que obtengas justo lo que necesitas. Si buscas un césped más mullido y realista, descubre el \nmodelo Ankara 45mm\n. Y si prefieres un punto intermedio, revisa el \nmodelo Budapest 18mm\n.\n\n📚 \nMás información\n\nPara ampliar conocimientos sobre este material, visita la \nentrada de Wikipedia sobre césped artificial\n.\n\n&#8212;\n\n✅ En conclusión, el \ncésped artificial Suecia 7mm\n es una solución económica, práctica y decorativa que transforma cualquier espacio con facilidad. Una opción ideal para quienes buscan un césped sencillo, resistente y accesible con la garantía de MH Sport.",
        features: ["Decorativo", "Barato", "Funcional"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "7 mm", density: "Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "oslo-7-corte",
    name: "Césped Artificial Al Corte Oslo 7 Mm – Simplicidad Y Economía",
    slug: "oslo-7mm-corte",
    price: 5.79,
    category: "al-corte",
    image: imgURLs.oslo,
    gallery: [imgURLs.oslo],
    height: 7,
    description: "Descripción\n\n🌿 \nCésped artificial Oslo 7mm\n al corte – Simplicidad y economía para tu hogar\n\nEl \ncésped artificial Oslo 7mm\n de MH Sport es la opción más sencilla y económica para quienes buscan un césped decorativo sin complicaciones. Con una \naltura de fibra de 7 mm\n, este modelo ofrece una textura suave y cómoda, aportando un toque verde a cualquier espacio sin necesidad de riego ni mantenimiento. Es perfecto para proyectos donde prima la practicidad y el ahorro, sin renunciar a la estética.\n\n✨ \nCalidad funcional\n\nFabricado con fibras de polipropileno fibrilado y un recubrimiento de \nSBR látex\n, el \ncésped artificial Oslo 7mm\n garantiza estabilidad y resistencia en el tiempo. Su \ndensidad de 60.000 puntadas\n y \n24 puntadas por centímetro\n aseguran una cobertura uniforme y un aspecto cuidado durante todo el año. Además, su acabado \nsin brillo\n y su tono verde natural aportan una apariencia visual atractiva que imita al césped real.\n\n🏡 \nUsos decorativos\n\nGracias a su ligereza y precio ajustado, el \nOslo 7mm\n es ideal para terrazas, balcones, patios pequeños, azoteas o espacios interiores donde se busque un toque verde decorativo. También resulta muy útil en \neventos temporales\n, ferias o stands comerciales, donde se necesita una superficie estética y práctica que se pueda instalar y retirar con facilidad.\n\n🐾 \nSeguro y fácil de mantener\n\nEste césped es \nno inflamable\n y cuenta con una \ngarantía de 3 años\n, lo que lo convierte en una opción segura y confiable. Su base de polipropileno con recubrimiento SBR Látex asegura un buen drenaje, evitando encharcamientos, mientras que su superficie es cómoda al tacto, fácil de limpiar y apta para espacios con niños o mascotas.\n\n💪 \nGarantía MH Sport\n\nEn MH Sport ofrecemos asesoramiento personalizado y cortes a medida en todos nuestros modelos. Si buscas un césped más mullido y realista, te recomendamos el \nmodelo Ankara 45mm\n. Para una opción intermedia, revisa el \nmodelo Budapest 18mm\n.\n\n📚 \nMás información\n\nSi quieres conocer más sobre este tipo de superficies, visita la \nentrada de Wikipedia sobre césped artificial\n.\n\n&#8212;\n\n✅ En conclusión, el \ncésped artificial Oslo 7mm\n es una solución práctica, económica y funcional que aporta color y frescura a cualquier espacio. Una elección ideal para proyectos sencillos que buscan buena relación calidad-precio, siempre con la confianza de MH Sport.",
        features: ["Ahorro", "Simple", "Efectivo"],
    installation: "Configurable m².",
    shipping: "Entrega en 24/48h.",
    specs: { height: "7 mm", density: "Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },

  // Césped Artificial en Rollo
  {
    id: "ankara-45-rollo",
    name: "Modelo Ankara 45 Mm (en Rollos)",
    slug: "ankara-45mm-rollo",
    price: 622.50,
    category: "en-rollo",
    image: imgURLs.ankara,
    gallery: [imgURLs.ankara],
    height: 45,
    description: "Rolete completo de Ankara 45mm para máxima cobertura y ahorro.",
    features: ["Formato profesional", "Máxima densidad", "Ahorro m²"],
    installation: "Fácil despliegue.",
    shipping: "Logística pesada.",
    specs: { height: "45 mm", density: "Profesional", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "praga-40-rollo",
    name: "Modelo Praga 40 Mm (en Rollos)",
    slug: "praga-40mm-rollo",
    price: 513.00,
    category: "en-rollo",
    image: imgURLs.praga,
    gallery: [imgURLs.praga],
    height: 40,
    description: "Praga 40mm en rollo completo. Suavidad y recuperación para grandes áreas.",
    features: ["Formato ahorro", "Pisada suave", "Alta m²"],
    installation: "Profesional.",
    shipping: "Logística pesada.",
    specs: { height: "40 mm", density: "Confort", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "helsinki-30-rollo",
    name: "Modelo Helsinki 30 Mm (en Rollos)",
    slug: "helsinki-30mm-rollo",
    price: 255.00,
    category: "en-rollo",
    image: imgURLs.helsinki,
    gallery: [imgURLs.helsinki],
    height: 30,
    description: "Helsinki 30mm en rollo industrial. Realismo excepcional.",
    features: ["Realismo", "Económico", "Fácil unión"],
    installation: "Sencilla.",
    shipping: "Logística pesada.",
    specs: { height: "30 mm", density: "Realista", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "kiev-20-rollo",
    name: "Modelo Kiev 20 Mm (en Rollos)",
    slug: "kiev-20mm-rollo",
    price: 212.00,
    category: "en-rollo",
    image: imgURLs.kiev,
    gallery: [imgURLs.kiev],
    height: 20,
    description: "Kiev 20mm en rollo completo. Durabilidad extrema.",
    features: ["Industrial", "Resistente", "Largo metraje"],
    installation: "Rápida.",
    shipping: "Logística pesada.",
    specs: { height: "20 mm", density: "Resistente", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "oporto-33-rollo",
    name: "Modelo Oporto 33 Mm (en Rollos)",
    slug: "oporto-33mm-rollo",
    price: 204.00,
    category: "en-rollo",
    image: imgURLs.oporto,
    gallery: [imgURLs.oporto],
    height: 33,
    description: "Calidad en formato industrial de 33mm.",
    features: ["Calidad", "Garantía", "Ahorro m²"],
    installation: "Estándar.",
    shipping: "Logística pesada.",
    specs: { height: "33 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "berlin-24-rollo",
    name: "Modelo Berlín 24 Mm (en Rollos)",
    slug: "berlin-24mm-rollo",
    price: 189.60,
    category: "en-rollo",
    image: imgURLs.berlin,
    gallery: [imgURLs.berlin],
    height: 24,
    description: "Berlín 24mm en pack de rollos industriales.",
    features: ["Resistente", "Natural", "Económico"],
    installation: "Estándar.",
    shipping: "Logística pesada.",
    specs: { height: "24 mm", density: "Media", baseMaterial: "PP+PE", uvResistance: "Sí" }
  },
  {
    id: "budapest-18-rollo",
    name: "Modelo Budapest 18 Mm (en Rollos)",
    slug: "budapest-18mm-rollo",
    price: 155.60,
    category: "en-rollo",
    image: imgURLs.budapest,
    gallery: [imgURLs.budapest],
    height: 18,
    description: "Budapest 18mm para uso intensivo en eventos y ferias.",
    features: ["Compacto", "Práctico", "Envío masivo"],
    installation: "Rápida.",
    shipping: "Logística pesada.",
    specs: { height: "18 mm", density: "Media-Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "danubio-15-rollo",
    name: "Modelo Danubio 15 Mm (en Rollos)",
    slug: "danubio-15mm-rollo",
    price: 288.00,
    category: "en-rollo",
    image: imgURLs.danubio,
    gallery: [imgURLs.danubio],
    height: 15,
    description: "Danubio 15mm en rollo completo para máxima versatilidad.",
    features: ["Patios", "Balcones", "Ahorro total"],
    installation: "Simple.",
    shipping: "Logística pesada.",
    specs: { height: "15 mm", density: "Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "viena-colores-rollo",
    name: "Modelo Viena Colores 8 Mm (en Rollos)",
    slug: "viena-colores-rollo",
    price: 193.50,
    category: "en-rollo",
    image: imgURLs.viena,
    gallery: [imgURLs.viena],
    height: 8,
    description: "Rollos de colores para diseño y creatividad MH Sport.",
    features: ["Decoración pro", "Diseño", "Innovación"],
    installation: "Especializada.",
    shipping: "Logística pesada.",
    specs: { height: "8 mm", density: "Baja", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "suecia-7-rollo",
    name: "Modelo Suecia 7 Mm (en Rollos)",
    slug: "suecia-7mm-rollo",
    price: 232.00,
    category: "en-rollo",
    image: imgURLs.suecia,
    gallery: [imgURLs.suecia],
    height: 7,
    description: "Modelo Suecia en formato de rollo completo decorativo.",
    features: ["Decoración", "Mínimo peso", "Económico"],
    installation: "Decorativa.",
    shipping: "Logística pesada.",
    specs: { height: "7 mm", density: "Decorativa", baseMaterial: "PP", uvResistance: "Sí" }
  },
  {
    id: "oslo-7-rollo",
    name: "Modelo Oslo 7 Mm (en Rollos)",
    slug: "oslo-7mm-rollo",
    price: 143.70,
    category: "en-rollo",
    image: imgURLs.oslo,
    gallery: [imgURLs.oslo],
    height: 7,
    description: "La forma más rentable de cubrir grandes superficies.",
    features: ["Mínimo coste", "Efectivo", "Funcional"],
    installation: "Rápida.",
    shipping: "Logística pesada.",
    specs: { height: "7 mm", density: "Económica", baseMaterial: "PP", uvResistance: "Sí" }
  },

  // Complementos y Accesorios
  {
    id: "cartucho-adhesivo-300",
    name: "Cartucho De Adhesivo Para Césped Artificial – 300 Ml",
    slug: "cartucho-adhesivo-300ml",
    price: 7.10,
    category: "complementos",
    image: imgURLs.cartucho,
    gallery: [imgURLs.cartucho],
    description: "Adhesivo en cartucho para fijaciones rápidas y zonas de detalle (IVA incluído).",
    features: ["300ml", "Secado rápido", "Uso con pistola"],
    installation: "Manual.",
    shipping: "Inmediata."
  },
  {
    id: "cinta-union-adhesiva",
    name: "Cinta De Unión Adhesiva Para Césped Artificial",
    slug: "cinta-union-adhesiva",
    price: 10.90,
    category: "complementos",
    image: imgURLs.cintaAdhesiva,
    gallery: [imgURLs.cintaAdhesiva],
    description: "Cinta autoadhesiva para una unión limpia y rápida de paños de césped.",
    features: ["Autoadhesiva", "Alta tracción", "Invisible"],
    installation: "Inmediata.",
    shipping: "Inmediata."
  },
  {
    id: "cinta-union-estandar",
    name: "Cinta De Unión Para Césped Artificial",
    slug: "cinta-union-estandar",
    price: 8.98,
    category: "complementos",
    image: imgURLs.cintaNormal,
    gallery: [imgURLs.cintaNormal],
    description: "Cinta de unión estándar diseñada para ser usada con cola bicomponente.",
    features: ["Resistente", "Larga duración", "Profesional"],
    installation: "Uso con cola.",
    shipping: "Inmediata."
  },
  {
    id: "cola-bicomponente-pro",
    name: "Cola Bicomponente Para Césped Artificial – Adhesivo Profesional",
    slug: "cola-bicomponente",
    price: 31.20,
    category: "complementos",
    image: imgURLs.cola,
    gallery: [imgURLs.cola],
    description: "Descripción\n\n🧴 \nCola bicomponente césped artificial\n – Adhesivo profesional para uniones firmes y duraderas\n\nLa \ncola bicomponente césped artificial\n de MH Sport es un adhesivo profesional de máxima calidad, diseñado para asegurar una instalación sólida y estable del césped en interior y exterior. Gracias a su fórmula de \ndos componentes\n, crea uniones limpias entre paños, evitando desplazamientos o aperturas con el paso del tiempo y logrando un resultado estético sin costuras visibles.\n\n💪 \nResistencia y fiabilidad\n\nFormulada para soportar usos intensivos y cambios de temperatura, esta cola mantiene su poder de adhesión incluso en condiciones adversas. Su excelente comportamiento térmico y mecánico ofrece seguridad a largo plazo, tanto en viviendas como en comercios, comunidades o centros deportivos.\n\n⚙️ \nAplicación sencilla\n\nMezcla los dos componentes siguiendo las indicaciones del envase y aplica sobre la banda de unión o la superficie preparada. Extiende de manera uniforme y asienta los paños de césped para conseguir una unión profesional y estable desde el primer momento. Acabado \nlimpio y sin brillos\n.\n\n📦 \nFormatos disponibles\n\nDisponible en \n7,32 kg\n y \n11 kg\n, para proyectos pequeños o grandes. Su rendimiento permite optimizar tiempos y costes de instalación.\n\n🏡 \nUsos recomendados\n\nInstalaciones residenciales, terrazas, zonas comunes, locales comerciales, stands y eventos. Ideal para combinar con nuestros modelos de césped: si buscas un acabado \npremium\n y mullido, descubre el \nAnkara 45mm\n; para una opción intermedia, revisa el \nBudapest 18mm\n.\n\n🧠 \nConsejos de instalación\n\n&#8211; Trabaja sobre base seca, limpia y nivelada.\n\n&#8211; Respeta los tiempos de mezcla y curado indicados en el envase.\n\n&#8211; Presiona bien las juntas para asegurar la adherencia.\n\n&#8211; Evita el tránsito hasta completar el curado.\n\n📚 \nMás información\n\nSi quieres saber más sobre este tipo de productos, puedes consultar la \nentrada de Wikipedia sobre adhesivos\n.\n\n&#8212;\n\n✅ Con la \ncola bicomponente césped artificial\n de MH Sport obtendrás una instalación profesional, duradera y estéticamente impecable, con el respaldo de nuestro asesoramiento y servicio postventa.",
        features: ["Bicomponente", "Profesional", "Total adherencia"],
    installation: "Mezcla sugerida.",
    shipping: "Inmediata."
  },
  {
    id: "cortador-especial-pro",
    name: "Cortador Especial Para Césped Artificial",
    slug: "cortador-especial",
    price: 6.72,
    category: "complementos",
    image: imgURLs.cortador,
    gallery: [imgURLs.cortador],
    description: "Descripción\n\n✂️ El \ncortador especial para césped artificial\n es la herramienta imprescindible para lograr cortes precisos y profesionales en cada instalación. Diseñado para ofrecer el máximo rendimiento, este cúter cuenta con una hoja retráctil \nfabricada en acero de alta calidad\n, lo que garantiza una gran capacidad de corte y una resistencia superior al óxido. Esto prolonga su vida útil incluso en condiciones de uso intensivo.\n\nSu estructura sólida y ergonómica proporciona un manejo cómodo y seguro, permitiendo cortar con facilidad todo tipo de \ncésped artificial\n sin esfuerzo. Gracias a su acabado en color verde, este cortador no solo es funcional, sino también fácil de localizar en tu área de trabajo.\n\n🔧 Si buscas precisión y comodidad en cada instalación, el \ncortador especial de la marca Novartix\n es la opción ideal. Su hoja afilada y resistente permite realizar cortes exactos, adaptando el césped artificial a cualquier espacio con un acabado impecable. Una herramienta fiable que asegura rapidez, seguridad y un resultado profesional en todo momento.\n\n✅ Con este \ncortador para césped artificial\n podrás trabajar sin complicaciones en grandes superficies, bordes, uniones y recortes de detalle. Su diseño ergonómico reduce la fatiga y aumenta la precisión, lo que lo convierte en un accesorio fundamental para instaladores y aficionados al bricolaje.\n\n🔗 Compleméntalo con nuestra \ncategoría de césped artificial\n o añade accesorios como la \ncinta adhesiva para uniones\n y la \ncola bicomponente\n para obtener un resultado perfecto.\n\n📖 Para conocer buenas prácticas de seguridad en el uso de herramientas de corte, consulta la guía de la \nOrganización Internacional del Trabajo (OIT)\n.",
        features: ["Ergonómico", "Preciso", "Seguro"],
    installation: "Manual.",
    shipping: "Inmediata."
  },
  {
    id: "espatula-xamanek",
    name: "Espátula Para Césped Artificial – Xamanek",
    slug: "espatula-xamanek",
    price: 4.55,
    category: "complementos",
    image: imgURLs.espatula,
    gallery: [imgURLs.espatula],
    description: "Descripción\n\nEspátula para césped artificial XAMANEK\n\nLa \nespátula para césped artificial XAMANEK\n es la herramienta imprescindible para aplicar y extender adhesivos con precisión, logrando una \nfijación uniforme\n y un acabado profesional en cada unión. Su diseño ergonómico facilita el manejo y reduce la fatiga, ideal tanto para instaladores profesionales como para particulares.\n\nFabricada con \nmateriales de alta calidad\n, combina un \nmango de madera ergonómico\n para un agarre cómodo y controlado con una base \nde polipropileno verde\n resistente que distribuye el adhesivo sin dañar la superficie del césped. Su \ntamaño compacto (aprox. 15,8 × 9 cm)\n y su ligereza (alrededor de \n86 g\n) la hacen manejable en cualquier tipo de instalación: desde terrazas y patios pequeños hasta jardines y zonas de uso intensivo.\n\nVentajas principales\n\nAplicación homogénea\n del adhesivo para evitar burbujas y levantamientos.\n\nControl y precisión\n en los bordes y juntas gracias al formato de pala.\n\nResistente y duradera\n incluso con uso frecuente.\n\nFácil de limpiar\n tras cada trabajo para alargar su vida útil.\n\nCómo usarla (paso a paso)\n\nPrepara la base y presenta las piezas de \ncésped artificial Ankara 45 mm\n u otro modelo.\n\nAplica el \nadhesivo\n recomendado sobre la banda de unión.\n\nExtiende el producto con la \nespátula XAMANEK\n realizando pasadas firmes y uniformes.\n\nUne los paños presionando a lo largo de la junta para asegurar una \nfijación estable\n.\n\nRetira el exceso y deja secar el tiempo indicado por el fabricante.\n\nCombínala con nuestros accesorios\n\nPara un resultado 10/10, completa tu compra con nuestros \naccesorios de instalación\n (bandas, adhesivos, grapas y malla geotextil). Si necesitas fijación perimetral o en taludes, añade también las \ngrapas de fijación\n.\n\nConsejo profesional\n\nSi es tu primera instalación, te ayudará repasar esta \nguía de instalación de césped artificial\n con pasos y buenas prácticas.\n\nCon la \nespátula para césped artificial XAMANEK\n lograrás un acabado limpio, seguro y duradero, manteniendo tu césped sintético perfecto durante más tiempo y con el mínimo mantenimiento.",
        features: ["Dentada", "Acero inox", "Marca líder"],
    installation: "Manual.",
    shipping: "Inmediata."
  },
  {
    id: "grapas-pack-10",
    name: "Grapas De Fijación Para Césped Artificial – Pack De 10 Unidades",
    slug: "grapas-fijacion-pack",
    price: 8.42,
    category: "complementos",
    image: imgURLs.grapas,
    gallery: [imgURLs.grapas],
    description: "Descripción\n\nLas \ngrapas de fijación para césped artificial\n son un accesorio indispensable para garantizar que tu instalación sea firme, segura y duradera. Este pack de 10 unidades está especialmente diseñado para sujetar el \ncésped artificial Ankara 45 mm\n u otros modelos similares, evitando desplazamientos y levantamientos con el paso del tiempo o ante condiciones climáticas adversas.\n\nFabricadas en \nhierro galvanizado de alta resistencia\n, estas grapas proporcionan gran durabilidad y soportan el tránsito constante de personas, mascotas o muebles de exterior. Su acabado en color verde permite que se integren de manera discreta en la superficie, sin romper la estética de tu jardín o terraza. Además, su diseño en forma de clip facilita una fijación rápida y sin complicaciones, apta incluso para quienes no tienen experiencia en bricolaje.\n\nGracias a estas \ngrapas Xamanek para césped sintético\n, la estabilidad de tu instalación está garantizada. Cada pieza se adapta perfectamente a diferentes tipos de suelos, asegurando una sujeción fiable y prácticamente imperceptible. Con ellas, podrás disfrutar de un césped impecable, sin arrugas ni movimientos inesperados, aumentando la vida útil de tu inversión.\n\nEstas grapas son compatibles con todas nuestras categorías de \naccesorios de instalación\n, lo que te permite combinar tu compra con cintas adhesivas, mallas geotextiles o pegamentos especiales para césped artificial. Si quieres conocer más consejos profesionales sobre cómo instalar correctamente tu césped, puedes consultar esta \nguía de instalación\n.\n\nEn resumen, este \npack de 10 grapas de fijación para césped artificial\n es la solución perfecta para quienes buscan un resultado profesional en casa. Un accesorio económico, resistente y fácil de usar, que te ayudará a mantener tu jardín siempre en perfectas condiciones.\n\nEstas grapas no solo aseguran tu césped artificial frente a movimientos y levantamientos, sino que también ofrecen una instalación profesional con un coste reducido. Son perfectas para jardines, terrazas, patios e incluso zonas de uso intensivo, garantizando siempre un acabado limpio y seguro. Con ellas, podrás mantener tu césped sintético en óptimas condiciones durante mucho más tiempo.",
        features: ["Acero galvanizado", "Pack 10 uni", "Gran sujeción"],
    installation: "Clavar manual.",
    shipping: "Inmediata."
  },
  {
    id: "guantes-pro",
    name: "Guantes Para Césped Artificial",
    slug: "guantes-cesped",
    price: 2.10,
    category: "complementos",
    image: imgURLs.guantes,
    gallery: [imgURLs.guantes],
    description: "Descripción\n\n🧤 Los \nguantes para césped artificial\n son el accesorio indispensable para facilitar la instalación, ofreciendo \nprotección\n, \nagarre óptimo\n y comodidad en cada tarea. Fabricados en \nnylon 100%\n, combinan flexibilidad y resistencia, permitiendo manipular el césped artificial con total seguridad y precisión.\n\n✋ El interior incluye un \npunteo de PVC\n que mejora el agarre, evitando deslizamientos y asegurando un control firme en cada corte o ajuste del césped. Además, el \nmaterial exterior de acrílico\n proporciona impermeabilidad, protegiendo las manos de la humedad y garantizando un uso seguro en distintas condiciones.\n\n✅ Gracias a su \ndiseño ergonómico\n y a la talla única adaptable, estos guantes son la opción ideal para instaladores y aficionados que buscan \ncomodidad, eficacia y seguridad\n. Ya sea para manipular rollos de césped, realizar cortes precisos o fijar uniones, con estos guantes para césped artificial el proceso será más sencillo y profesional.\n\n🌱 Además, su resistencia y ligereza los convierten en un complemento indispensable para quienes desean un acabado profesional en proyectos de \ncésped artificial\n, tanto en jardines como en instalaciones deportivas o decorativas.\n\n✅ Con estos \nguantes para césped artificial\n mejorarás el control en cortes y ajustes, reduciendo deslizamientos y fatiga. Su nylon 100% ofrece flexibilidad y resistencia, mientras que el punteo de PVC asegura un agarre firme incluso en superficies húmedas.\n\n🔗 Complétalo con nuestra \ncola bicomponente para césped artificial\n y la \nsección de complementos\n para un resultado totalmente profesional.\n\n📖 Para buenas prácticas de seguridad en el trabajo, consulta la guía de la \nOrganización Internacional del Trabajo (OIT)\n.\n\nPrecio: 2,95 €/unidad",
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
    gallery: [imgURLs.malla],
    description: "Descripción\n\n🌱 La \nmalla antihierbas negra para césped artificial\n es el complemento esencial para garantizar una instalación duradera y libre de malas hierbas. Fabricada en polipropileno de alta calidad, esta malla geotextil impide el crecimiento de vegetación no deseada, evitando que interfiera con la superficie del césped y reduciendo al mínimo el mantenimiento. Su color negro bloquea la luz solar, reforzando la capacidad de inhibir hierbas y manteniendo un terreno limpio y estable a lo largo del tiempo.\n\n💧 Gracias a su diseño \npermeable al agua\n, la malla antihierbas permite un drenaje eficiente, evitando acumulación de humedad y favoreciendo la correcta evacuación del agua de lluvia o riego. Está disponible en varios tamaños (1,10 m y 2 m de ancho, con longitudes desde 10 hasta 100 metros), adaptándose a todo tipo de superficies y proyectos, desde jardines pequeños hasta grandes obras paisajísticas.\n\n🛡️ Con un nivel de filtración de 40 micras, la \nmalla antihierbas negra Xamanek\n actúa como una barrera eficaz sin comprometer la transpirabilidad del suelo. Asegura protección máxima y prolonga la vida útil de tu césped artificial con una solución fiable, de fácil instalación y mantenimiento.\n\n✅ Esta malla antihierbas no solo simplifica la instalación, sino que mejora el acabado final de tu espacio exterior, garantizando resistencia y durabilidad frente a las condiciones climáticas más exigentes.\n\n🔗 Complétala con nuestra \ncola bicomponente para césped artificial\n y descubre más \ncomplementos de instalación\n en nuestra tienda online.\n\n📖 Para información adicional sobre materiales geotextiles y su uso profesional, consulta la \nguía de Geotextiles en Wikipedia\n.\n\nPrecio desde: 0,60 €/m².",
        features: ["Densa", "Geotextil", "Antihierbas"],
    installation: "Extensión base.",
    shipping: "Inmediata."
  }
];
