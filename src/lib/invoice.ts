import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { formatPrice } from "./utils";

export const generateInvoicePDF = (orderData: any, logoSrc?: string, type: 'albaran' | 'factura' = 'albaran') => {
  const doc = new jsPDF();
  const { items, customerInfo, totals, orderId = `MH-${Math.floor(Math.random() * 1000000)}`, date } = orderData;

  const isFactura = type === 'factura';
  const docTitle = isFactura ? "FACTURA OFICIAL" : "ALBARÁN DE COMPRA";

  // Background for the header
  doc.setFillColor(136, 192, 67); // Exact green from the new logo (#88C043)
  doc.rect(0, 0, 210, 45, 'F');

  // Header with Logo - Adjusted for the new horizontal logo
  if (logoSrc) {
    try {
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(12, 10, 65, 25, 3, 3, 'F');
      
      // New proportions for the horizontal logo
      doc.addImage(logoSrc, 'WEBP', 15, 13, 59, 19);
    } catch (e) {
      console.warn("Could not add logo to PDF:", e);
    }
  }

  // Company Name and Info in the green header
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("MH SPORT CÉSPED", 82, 22);
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(240, 255, 240);
  doc.text("CÉSPED ARTIFICIAL Y JARDINERÍA PREMIUM", 82, 29);
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text("CIF: B12345678 | Polígono San Rafael, Hellín (Albacete)", 82, 36);

  // Separator line
  doc.setDrawColor(136, 192, 67);
  doc.setLineWidth(0.5);
  doc.line(14, 52, 196, 52);

  // --- Document Details Box (Upper Right) ---
  doc.setFillColor(248, 250, 248);
  doc.roundedRect(135, 52, 61, 28, 2, 2, 'F');
  
  doc.setTextColor(136, 192, 67);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text(docTitle, 139, 60);
  
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`${isFactura ? 'Nº Factura:' : 'Nº Pedido:'}`, 139, 68);
  doc.setFont("helvetica", "bold");
  doc.text(`${orderId}`, 192, 68, { align: 'right' });
  
  doc.setFont("helvetica", "normal");
  doc.text(`Fecha:`, 139, 73);
  doc.setFont("helvetica", "bold");
  const displayDate = date || new Date().toLocaleDateString('es-ES');
  doc.text(`${displayDate}`, 192, 73, { align: 'right' });

  // --- Seller and Customer Sections ---
  // Seller
  doc.setFontSize(10);
  doc.setTextColor(136, 192, 67);
  doc.setFont("helvetica", "bold");
  doc.text("VENDEDOR:", 14, 58);
  
  doc.setTextColor(80, 80, 80);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("MH SPORT CÉSPED ARTIFICIAL S.L.", 14, 63);
  doc.text("Polígono San Rafael, Calle Malta 12-13", 14, 68);
  doc.text("02400 Hellín (Albacete), España", 14, 73);
  doc.text("info@mhsportcesped.es", 14, 78);

  // Customer
  doc.setTextColor(136, 192, 67);
  doc.setFont("helvetica", "bold");
  doc.text("CLIENTE:", 80, 58);
  
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(`${customerInfo.name}`, 80, 63);
  
  doc.setTextColor(80, 80, 80);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  // Multi-line address handling
  const splitAddress = doc.splitTextToSize(customerInfo.address, 50);
  doc.text(splitAddress, 80, 68);
  
  const addressHeight = splitAddress.length * 4;
  doc.text(`Tel: ${customerInfo.phone}`, 80, 68 + addressHeight + 2);
  doc.text(`Email: ${customerInfo.email}`, 80, 68 + addressHeight + 6);

  // Items Table
  const tableData = items.map((item: any) => [
    item.product.name,
    item.quantity,
    `${formatPrice(item.product.price)} €`,
    `${formatPrice(item.product.price * item.quantity)} €`
  ]);

  autoTable(doc, {
    startY: 92,
    head: [['Descripción del Producto', 'Cant.', 'Precio/Ud.', 'Subtotal']],
    body: tableData,
    theme: 'striped',
    headStyles: { 
        fillColor: [136, 192, 67], 
        textColor: [255, 255, 255],
        fontSize: 10,
        fontStyle: 'bold',
        halign: 'center'
    },
    columnStyles: {
        0: { cellWidth: 'auto' },
        1: { halign: 'center' },
        2: { halign: 'right' },
        3: { halign: 'right' }
    },
    styles: { fontSize: 9, cellPadding: 4 },
    alternateRowStyles: { fillColor: [248, 250, 248] },
    margin: { left: 14, right: 14 }
  });

  // Totals Section
  const finalTableY = (doc as any).lastAutoTable.finalY;
  const finalY = finalTableY + 15;
  
  // Total summary box
  doc.setFillColor(248, 250, 248);
  doc.roundedRect(130, finalY - 5, 66, 40, 3, 3, 'F');
  
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.setFont("helvetica", "normal");
  doc.text(`Base Imponible:`, 135, finalY + 2);
  doc.text(`${formatPrice(totals.subtotal)} €`, 191, finalY + 2, { align: 'right' });
  
  doc.text(`IVA (21%):`, 135, finalY + 9);
  doc.text(`${formatPrice(totals.ivaAmount)} €`, 191, finalY + 9, { align: 'right' });
  
  doc.text(`Gastos de Envío:`, 135, finalY + 16);
  doc.text(`${totals.shippingPrice === 0 ? "GRATIS" : formatPrice(totals.shippingPrice) + " €"}`, 191, finalY + 16, { align: 'right' });
  
  doc.setDrawColor(136, 192, 67);
  doc.line(135, finalY + 21, 191, finalY + 21);
  
  doc.setFontSize(12);
  doc.setTextColor(136, 192, 67);
  doc.setFont("helvetica", "bold");
  doc.text(`TOTAL ${isFactura ? 'FACTURA' : 'ALBARÁN'}:`, 135, finalY + 28);
  doc.text(`${formatPrice(totals.finalTotal)} €`, 191, finalY + 28, { align: 'right' });

  // Footer
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150);
  doc.text(`- Este documento confirma la transacción y ${isFactura ? 'sirve como justificante legal' : 'la recepción del pedido'}.`, 14, 275);
  doc.text("- Gracias por confiar en MH Sport Césped.", 14, 280);
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "bolditalic");
  doc.setTextColor(136, 192, 67);
  doc.text("www.mhsportcesped.es", 105, 290, { align: 'center' });

  // Save the PDF
  const fileName = isFactura ? `Factura_MH_Sport_${orderId}.pdf` : `Albaran_MH_Sport_${orderId}.pdf`;
  doc.save(fileName);
  return doc;
};
