import os

file_path = r'c:\Users\magik\Downloads\Mhsportcesped\turf-pros-hub-main\src\data\products.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = 0

replacements = {
    '"ankara-45-corte"': ('ankaraMain', '[ankaraMain, ankara1, ankara2, ankara3, ankara4, ankara5, ankaraTech]'),
    '"praga-40-corte"': ('pragaMain', '[pragaMain, praga1, praga2, praga3, pragaTech]'),
    '"helsinki-30-corte"': ('helsinkiMain', '[helsinkiMain, helsinki1, helsinki2, helsinki3, helsinki4, helsinkiTech]'),
    '"kiev-20-corte"': ('kievMain', '[kievMain, kiev1, kiev2, kiev3, kiev4, kievTech]'),
    '"oporto-33-corte"': ('oportoMain', '[oportoMain, oporto1, oporto2, oporto3, oportoTech]'),
    '"berlin-24-corte"': ('berlinMain', '[berlinMain, berlin1, berlin2, berlin3, berlinTech]'),
    '"budapest-18-corte"': ('budapestMain', '[budapestMain, budapest1, budapest2, budapest3, budapestTech]'),
    '"danubio-15-corte"': ('danubioMain', '[danubioMain, danubio1, danubio2, danubio3, danubioTech]'),
    '"viena-colores-corte"': ('vienaMain', '[vienaMain, viena1, viena2, vienaTech]'),
    '"oslo-7-corte"': ('osloMain', '[osloMain, oslo1, oslo2, oslo3, osloTech]'),
    
    '"ankara-45-rollo"': ('prodAnkaraRollo', '[prodAnkaraRollo, ankaraMain, ankara1, ankara2, ankara3, ankara4, ankara5, ankaraTech]'),
    '"praga-40-rollo"': ('prodPragaRollo', '[prodPragaRollo, pragaMain, praga1, praga2, praga3, pragaTech]'),
    '"helsinki-30-rollo"': ('helsinkiMain', '[helsinkiMain, helsinki1, helsinki2, helsinki3, helsinki4, helsinkiTech]'),
    '"kiev-20-rollo"': ('prodKievRollo', '[prodKievRollo, kievMain, kiev1, kiev2, kiev3, kiev4, kievTech]'),
    '"oporto-33-rollo"': ('prodOportoRollo', '[prodOportoRollo, oportoMain, oporto1, oporto2, oporto3, oportoTech]'),
    '"berlin-24-rollo"': ('prodBerlinRollo', '[prodBerlinRollo, berlinMain, berlin1, berlin2, berlin3, berlinTech]'),
    '"budapest-18-rollo"': ('prodBudapestRollo', '[prodBudapestRollo, budapestMain, budapest1, budapest2, budapest3, budapestTech]'),
    '"danubio-15-rollo"': ('prodDanubioRollo', '[prodDanubioRollo, danubioMain, danubio1, danubio2, danubio3, danubioTech]'),
    '"viena-colores-rollo"': ('prodVienaRollo', '[prodVienaRollo, vienaMain, viena1, viena2, vienaTech]'),
    '"suecia-7-rollo"': ('prodSueciaRollo', '[prodSueciaRollo, prodSueciaCorte]'),
    '"oslo-7-rollo"': ('prodOsloRollo', '[prodOsloRollo, osloMain, oslo1, oslo2, oslo3, osloTech]'),
}

i = 0
while i < len(lines):
    line = lines[i]
    found = False
    for pid, (main_img, gallery) in replacements.items():
        if pid in line:
            new_lines.append(line)
            # Find image and images in next few lines
            j = i + 1
            while j < i + 15 and j < len(lines):
                if 'image:' in lines[j]:
                    new_lines.append(f'    image: {main_img},\n')
                elif 'images:' in lines[j]:
                    new_lines.append(f'    images: {gallery},\n')
                elif 'id:' in lines[j]: # Safety break
                    break
                else:
                    # Check if it's NOT the lines we just replaced
                    if 'image:' not in lines[j] and 'images:' not in lines[j]:
                        new_lines.append(lines[j])
                j += 1
            i = j
            found = True
            break
    if not found:
        new_lines.append(line)
        i += 1

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Done updating products.ts")
