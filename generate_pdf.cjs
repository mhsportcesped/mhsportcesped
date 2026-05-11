const { jsPDF } = require("jspdf");
require("jspdf-autotable");
const fs = require('fs');

const doc = new jsPDF();
const orderId = "MH-20260511-RUBEN";

// Header (No logo in node for now to simplify)
doc.setFillColor(26, 74, 48);
doc.rect(0, 0, 210, 40, 'F');

doc.setTextColor(255, 255, 255);
doc.setFontSize(24);
doc.text("MH SPORT CÉSPED", 14, 20);
doc.setFontSize(9);
doc.text("CIF: B12345678 | Polígono San Rafael, C/ Malta N°12-13, Hellín", 14, 30);

// Customer Details
doc.setTextColor(0, 0, 0);
doc.setFontSize(10);
doc.text("CLIENTE: Rubén Alfaro Díaz", 14, 60);
doc.text("Email: crubenalfarodiaz@gmail.com", 14, 65);
doc.text("Tel: 620344920", 14, 70);

// Items Table
const items = [
  ["MODELO BUDAPEST 18mm – ROLLO COMPLETO (2x40m)", "1", "622.40 €", "622.40 €"],
  ["CÉSPED ARTIFICIAL AL CORTE BUDAPEST 18 MM (2x6m)", "1", "105.36 €", "105.36 €"],
  ["CÉSPED ARTIFICIAL AL CORTE PRAGA 40 MM (2x20m)", "1", "724.00 €", "724.00 €"]
];

doc.autoTable({
  startY: 80,
  head: [['Producto', 'Cant.', 'Precio', 'Total']],
  body: items,
  headStyles: { fillColor: [26, 74, 48] }
});

const finalY = doc.lastAutoTable.finalY + 10;
doc.text(`TOTAL ALBARÁN: 1451.76 €`, 140, finalY);

// Output to file
const data = doc.output();
fs.writeFileSync('Albaran_Ruben_Alfaro.pdf', data, 'binary');
console.log("Albaran_Ruben_Alfaro.pdf generated successfully.");
