import fs from 'fs';

const details = JSON.parse(fs.readFileSync('product_details.json', 'utf8'));
let code = fs.readFileSync('src/data/products.ts', 'utf8');

// Also update the Product interface mapping
code = code.replace(/specs\?: \{\s*height: string;\s*density: string;\s*baseMaterial: string;\s*uvResistance: string;\s*\};/, 'specs?: Record<string, string>;');

const specMap = {};

details.forEach(d => {
    if (!d.specs || Object.keys(d.specs).length === 0) return;
    
    let keyword = "";
    if (d.name.toLowerCase().includes('ankara')) keyword = 'ankara';
    else if (d.name.toLowerCase().includes('praga')) keyword = 'praga';
    else if (d.name.toLowerCase().includes('helsinki')) keyword = 'helsinki';
    else if (d.name.toLowerCase().includes('kiev')) keyword = 'kiev';
    else if (d.name.toLowerCase().includes('oporto')) keyword = 'oporto';
    else if (d.name.toLowerCase().includes('berlín') || d.name.toLowerCase().includes('berlin')) keyword = 'berlin';
    else if (d.name.toLowerCase().includes('budapest')) keyword = 'budapest';
    else if (d.name.toLowerCase().includes('danubio')) keyword = 'danubio';
    else if (d.name.toLowerCase().includes('viena')) keyword = 'viena';
    else if (d.name.toLowerCase().includes('suecia')) keyword = 'suecia';
    else if (d.name.toLowerCase().includes('oslo')) keyword = 'oslo';
    
    if (keyword) specMap[keyword] = d.specs;
});

// Since the file is regexed, let's carefully replace spec blocks per keyword
Object.entries(specMap).forEach(([keyword, specsObj]) => {
    // Convert specs to a JS object literal string cleanly
    const specsString = Object.entries(specsObj).map(([k, v]) => `"${k}": "${v.replace(/"/g, '\\"')}"`).join(', ');
    
    // Replace the old specs object definition with the new one
    // e.g. specs: { height: "45 mm", density: "Profesional", baseMaterial: "PP+PE", uvResistance: "Sí" }
    // It's safer to use a regex that catches `id: "keyword-..."` and down to `specs: { ... }`
    const regex = new RegExp(`(id: "${keyword}[\\s\\S]*?)(specs:\\s*\\{[^}]*\\})`, 'g');
    code = code.replace(regex, `$1specs: { ${specsString} }`);
});

fs.writeFileSync('src/data/products.ts', code);
console.log("Updated products.ts with dynamic specs");
