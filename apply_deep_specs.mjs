import fs from 'fs';

const details = JSON.parse(fs.readFileSync('deep_product_details.json', 'utf8'));
let code = fs.readFileSync('src/data/products.ts', 'utf8');

const specMap = {};

details.forEach(d => {
    let keyword = "";
    if (d.url.toLowerCase().includes('ankara')) keyword = 'ankara';
    else if (d.url.toLowerCase().includes('praga')) keyword = 'praga';
    else if (d.url.toLowerCase().includes('helsinki')) keyword = 'helsinki';
    else if (d.url.toLowerCase().includes('kiev')) keyword = 'kiev';
    else if (d.url.toLowerCase().includes('oporto')) keyword = 'oporto';
    else if (d.url.toLowerCase().includes('berlin') || d.url.toLowerCase().includes('berlín')) keyword = 'berlin';
    else if (d.url.toLowerCase().includes('budapest')) keyword = 'budapest';
    else if (d.url.toLowerCase().includes('danubio')) keyword = 'danubio';
    else if (d.url.toLowerCase().includes('viena')) keyword = 'viena';
    else if (d.url.toLowerCase().includes('suecia')) keyword = 'suecia';
    else if (d.url.toLowerCase().includes('oslo')) keyword = 'oslo';
    
    // accessories
    else if (d.url.toLowerCase().includes('cinta-de-union-adhesiva')) keyword = 'cinta-adhesiva';
    else if (d.url.toLowerCase().includes('cinta-de-union')) keyword = 'cinta-geotextil';
    else if (d.url.toLowerCase().includes('cartucho')) keyword = 'adhesivo-300';
    else if (d.url.toLowerCase().includes('espatula')) keyword = 'espatula';
    else if (d.url.toLowerCase().includes('grapas')) keyword = 'grapas';
    else if (d.url.toLowerCase().includes('cortador')) keyword = 'cortador';
    else if (d.url.toLowerCase().includes('malla')) keyword = 'malla-antihierbas';
    else if (d.url.toLowerCase().includes('guantes')) keyword = 'guantes';
    else if (d.url.toLowerCase().includes('cola')) keyword = 'cola-bicomponente';
    
    if (keyword) {
        specMap[keyword] = {
            description: d.longDesc.replace(/"/g, '\\"').replace(/\n/g, '\\n'),
            gallery: d.gallery
        };
    }
});

Object.entries(specMap).forEach(([keyword, data]) => {
    // We already have `description: "..."` in the structure, let's strictly replace it
    // The previous script failed because `description: "..."` was failing to match if the string had newlines perhaps.
    // Let's use a very safe replace
    // products.ts has: description: "Excelente drenaje y resistencia. Aspecto muy frondoso y natural."
    // We need to replace exactly the `description: "...",` line
    
    // Find where the ID is, then replace the next description.
    let startIndex = code.indexOf(`id: "${keyword}`);
    if (startIndex !== -1) {
       let descStart = code.indexOf(`description: "`, startIndex);
       if (descStart !== -1) {
           let descEnd = code.indexOf(`",\n`, descStart);
           if (descEnd !== -1) {
               // Great, replace it
               let before = code.substring(0, descStart);
               let after = code.substring(descEnd + 3); // skip ",\n
               
               // Let's also inject the gallery right after description
               code = before + `description: "${data.description}",\n    gallery: ${JSON.stringify(data.gallery)},\n` + after;
           }
       }
    }
});

fs.writeFileSync('src/data/products.ts', code);
console.log("Updated products.ts SAFELY with dynamic descriptions and gallery images.");
