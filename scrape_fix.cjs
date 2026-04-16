const fs = require('fs');

try {
  let code = fs.readFileSync('src/data/products.ts', 'utf8');

  // Fix specific models that were grouped under 'nuevosModelosImg' -> 'imgURLs.berlin'
  code = code.replace(/slug: "budapest-18mm-corte",\s*price: 8\.78,\s*category: "al-corte",\s*image: imgURLs\.berlin,\s*images: \[imgURLs\.berlin\]/, 'slug: "budapest-18mm-corte",\n    price: 8.78,\n    category: "al-corte",\n    image: imgURLs.budapest,\n    images: [imgURLs.budapest]');
  code = code.replace(/slug: "danubio-15mm-corte",\s*price: 8\.20,\s*category: "al-corte",\s*image: imgURLs\.berlin,\s*images: \[imgURLs\.berlin\]/, 'slug: "danubio-15mm-corte",\n    price: 8.20,\n    category: "al-corte",\n    image: imgURLs.danubio,\n    images: [imgURLs.danubio]');
  code = code.replace(/slug: "viena-colores-corte",\s*price: 7\.45,\s*category: "al-corte",\s*image: imgURLs\.berlin,\s*images: \[imgURLs\.berlin\]/, 'slug: "viena-colores-corte",\n    price: 7.45,\n    category: "al-corte",\n    image: imgURLs.viena,\n    images: [imgURLs.viena]');
  code = code.replace(/slug: "suecia-7mm-corte",\s*price: 6\.80,\s*category: "al-corte",\s*image: imgURLs\.berlin,\s*images: \[imgURLs\.berlin\]/, 'slug: "suecia-7mm-corte",\n    price: 6.80,\n    category: "al-corte",\n    image: imgURLs.suecia,\n    images: [imgURLs.suecia]');
  code = code.replace(/slug: "oslo-7mm-corte",\s*price: 5\.79,\s*category: "al-corte",\s*image: imgURLs\.berlin,\s*images: \[imgURLs\.berlin\]/, 'slug: "oslo-7mm-corte",\n    price: 5.79,\n    category: "al-corte",\n    image: imgURLs.oslo,\n    images: [imgURLs.oslo]');

  // Rollos
  code = code.replace(/slug: "budapest-18mm-rollo",\s*price: 155\.60,\s*category: "en-rollo",\s*image: imgURLs\.berlin,\s*images: \[imgURLs\.berlin\]/, 'slug: "budapest-18mm-rollo",\n    price: 155.60,\n    category: "en-rollo",\n    image: imgURLs.budapest,\n    images: [imgURLs.budapest]');
  code = code.replace(/slug: "danubio-15mm-rollo",\s*price: 288\.00,\s*category: "en-rollo",\s*image: imgURLs\.berlin,\s*images: \[imgURLs\.berlin\]/, 'slug: "danubio-15mm-rollo",\n    price: 288.00,\n    category: "en-rollo",\n    image: imgURLs.danubio,\n    images: [imgURLs.danubio]');
  code = code.replace(/slug: "viena-colores-rollo",\s*price: 193\.50,\s*category: "en-rollo",\s*image: imgURLs\.berlin,\s*images: \[imgURLs\.berlin\]/, 'slug: "viena-colores-rollo",\n    price: 193.50,\n    category: "en-rollo",\n    image: imgURLs.viena,\n    images: [imgURLs.viena]');
  code = code.replace(/slug: "suecia-7mm-rollo",\s*price: 232\.00,\s*category: "en-rollo",\s*image: imgURLs\.berlin,\s*images: \[imgURLs\.berlin\]/, 'slug: "suecia-7mm-rollo",\n    price: 232.00,\n    category: "en-rollo",\n    image: imgURLs.suecia,\n    images: [imgURLs.suecia]');
  code = code.replace(/slug: "oslo-7mm-rollo",\s*price: 143\.70,\s*category: "en-rollo",\s*image: imgURLs\.berlin,\s*images: \[imgURLs\.berlin\]/, 'slug: "oslo-7mm-rollo",\n    price: 143.70,\n    category: "en-rollo",\n    image: imgURLs.oslo,\n    images: [imgURLs.oslo]');

  // Fix specific accessories that were grouped under 'accesoriosImg' -> 'imgURLs.guantes'
  code = code.replace(/slug: "cartucho-adhesivo-300ml",\s*price: 7\.10,\s*category: "complementos",\s*image: imgURLs\.guantes,\s*images: \[imgURLs\.guantes\]/, 'slug: "cartucho-adhesivo-300ml",\n    price: 7.10,\n    category: "complementos",\n    image: imgURLs.cartucho,\n    images: [imgURLs.cartucho]');
  code = code.replace(/slug: "cinta-union-adhesiva",\s*price: 10\.90,\s*category: "complementos",\s*image: imgURLs\.guantes,\s*images: \[imgURLs\.guantes\]/, 'slug: "cinta-union-adhesiva",\n    price: 10.90,\n    category: "complementos",\n    image: imgURLs.cintaAdhesiva,\n    images: [imgURLs.cintaAdhesiva]');
  code = code.replace(/slug: "cinta-union-estandar",\s*price: 8\.98,\s*category: "complementos",\s*image: imgURLs\.guantes,\s*images: \[imgURLs\.guantes\]/, 'slug: "cinta-union-estandar",\n    price: 8.98,\n    category: "complementos",\n    image: imgURLs.cintaNormal,\n    images: [imgURLs.cintaNormal]');
  code = code.replace(/slug: "cola-bicomponente",\s*price: 31\.20,\s*category: "complementos",\s*image: imgURLs\.guantes,\s*images: \[imgURLs\.guantes\]/, 'slug: "cola-bicomponente",\n    price: 31.20,\n    category: "complementos",\n    image: imgURLs.cola,\n    images: [imgURLs.cola]');
  code = code.replace(/slug: "cortador-especial",\s*price: 6\.72,\s*category: "complementos",\s*image: imgURLs\.guantes,\s*images: \[imgURLs\.guantes\]/, 'slug: "cortador-especial",\n    price: 6.72,\n    category: "complementos",\n    image: imgURLs.cortador,\n    images: [imgURLs.cortador]');
  code = code.replace(/slug: "espatula-xamanek",\s*price: 4\.55,\s*category: "complementos",\s*image: imgURLs\.guantes,\s*images: \[imgURLs\.guantes\]/, 'slug: "espatula-xamanek",\n    price: 4.55,\n    category: "complementos",\n    image: imgURLs.espatula,\n    images: [imgURLs.espatula]');
  code = code.replace(/slug: "grapas-fijacion-pack",\s*price: 8\.42,\s*category: "complementos",\s*image: imgURLs\.guantes,\s*images: \[imgURLs\.guantes\]/, 'slug: "grapas-fijacion-pack",\n    price: 8.42,\n    category: "complementos",\n    image: imgURLs.grapas,\n    images: [imgURLs.grapas]');
  code = code.replace(/slug: "malla-antihierbas-negra",\s*price: 12\.90,\s*category: "complementos",\s*image: imgURLs\.guantes,\s*images: \[imgURLs\.guantes\]/, 'slug: "malla-antihierbas-negra",\n    price: 12.90,\n    category: "complementos",\n    image: imgURLs.malla,\n    images: [imgURLs.malla]');

  fs.writeFileSync('src/data/products.ts', code);
  console.log('done fixing specific images');
} catch (e) {
  console.error("Error", e);
}
