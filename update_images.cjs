const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

const replacements = {
    '"ankara-45-corte"': { main: 'ankaraMain', gallery: '[ankaraMain, ankara1, ankara2, ankara3, ankara4, ankara5, ankaraTech]' },
    '"praga-40-corte"': { main: 'pragaMain', gallery: '[pragaMain, praga1, praga2, praga3, pragaTech]' },
    '"helsinki-30-corte"': { main: 'helsinkiMain', gallery: '[helsinkiMain, helsinki1, helsinki2, helsinki3, helsinki4, helsinkiTech]' },
    '"kiev-20-corte"': { main: 'kievMain', gallery: '[kievMain, kiev1, kiev2, kiev3, kiev4, kievTech]' },
    '"oporto-33-corte"': { main: 'oportoMain', gallery: '[oportoMain, oporto1, oporto2, oporto3, oportoTech]' },
    '"berlin-24-corte"': { main: 'berlinMain', gallery: '[berlinMain, berlin1, berlin2, berlin3, berlinTech]' },
    '"budapest-18-corte"': { main: 'budapestMain', gallery: '[budapestMain, budapest1, budapest2, budapest3, budapestTech]' },
    '"danubio-15-corte"': { main: 'danubioMain', gallery: '[danubioMain, danubio1, danubio2, danubio3, danubioTech]' },
    '"viena-colores-corte"': { main: 'vienaMain', gallery: '[vienaMain, viena1, viena2, vienaTech]' },
    '"oslo-7-corte"': { main: 'osloMain', gallery: '[osloMain, oslo1, oslo2, oslo3, osloTech]' },
    
    '"ankara-45-rollo"': { main: 'prodAnkaraRollo', gallery: '[prodAnkaraRollo, ankaraMain, ankara1, ankara2, ankara3, ankara4, ankara5, ankaraTech]' },
    '"praga-40-rollo"': { main: 'prodPragaRollo', gallery: '[prodPragaRollo, pragaMain, praga1, praga2, praga3, pragaTech]' },
    '"helsinki-30-rollo"': { main: 'helsinkiMain', gallery: '[helsinkiMain, helsinki1, helsinki2, helsinki3, helsinki4, helsinkiTech]' },
    '"kiev-20-rollo"': { main: 'prodKievRollo', gallery: '[prodKievRollo, kievMain, kiev1, kiev2, kiev3, kiev4, kievTech]' },
    '"oporto-33-rollo"': { main: 'prodOportoRollo', gallery: '[prodOportoRollo, oportoMain, oporto1, oporto2, oporto3, oportoTech]' },
    '"berlin-24-rollo"': { main: 'prodBerlinRollo', gallery: '[prodBerlinRollo, berlinMain, berlin1, berlin2, berlin3, berlinTech]' },
    '"budapest-18-rollo"': { main: 'prodBudapestRollo', gallery: '[prodBudapestRollo, budapestMain, budapest1, budapest2, budapest3, budapestTech]' },
    '"danubio-15-rollo"': { main: 'prodDanubioRollo', gallery: '[prodDanubioRollo, danubioMain, danubio1, danubio2, danubio3, danubioTech]' },
    '"viena-colores-rollo"': { main: 'prodVienaRollo', gallery: '[prodVienaRollo, vienaMain, viena1, viena2, vienaTech]' },
    '"suecia-7-rollo"': { main: 'prodSueciaRollo', gallery: '[prodSueciaRollo, prodSueciaCorte]' },
    '"oslo-7-rollo"': { main: 'prodOsloRollo', gallery: '[prodOsloRollo, osloMain, oslo1, oslo2, oslo3, osloTech]' },
};

let newLines = [];
for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let found = false;
    for (let id in replacements) {
        if (line.includes(id)) {
            newLines.push(line);
            let j = i + 1;
            while (j < i + 15 && j < lines.length) {
                if (lines[j].includes('image:')) {
                    newLines.push(`    image: ${replacements[id].main},`);
                } else if (lines[j].includes('images:')) {
                    newLines.push(`    images: ${replacements[id].gallery},`);
                } else if (lines[j].includes('id:')) {
                    break;
                } else {
                    if (!lines[j].includes('image:') && !lines[j].includes('images:')) {
                        newLines.push(lines[j]);
                    }
                }
                j++;
            }
            i = j - 1;
            found = true;
            break;
        }
    }
    if (!found) {
        newLines.push(line);
    }
}

fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
console.log('Done updating products.ts');
