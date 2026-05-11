import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { formatPrice } from "./utils";

export const generateInvoicePDF = (orderData: any, logoSrc?: string) => {
  const doc = new jsPDF();
  const { items, customerInfo, totals, orderId = `MH-${Math.floor(Math.random() * 1000000)}` } = orderData;

  // Background for the header
  doc.setFillColor(26, 74, 48); // Brand green
  doc.rect(0, 0, 210, 40, 'F');

  // Header with Logo (Improved size and position)
  if (logoSrc) {
    try {
      // Adding a white circle/square background for the logo to make it pop
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(14, 8, 35, 24, 3, 3, 'F');
      doc.addImage(logoSrc, 'WEBP', 16, 10, 31, 20);
    } catch (e) {
      console.warn("Could not add logo to PDF:", e);
    }
  }

  // Company Name and Info in the green header
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("MH SPORT CÉSPED", 55, 20);
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Especialistas en Césped Artificial de Alta Gama", 55, 28);
  doc.text("CIF: B12345678 | Polígono San Rafael, C/ Malta N°12-13, Hellín", 55, 33);

  // Invoice Details Box
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("FACTURA", 145, 55);
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`Número de Pedido:`, 145, 62);
  doc.setFont("helvetica", "bold");
  doc.text(`${orderId}`, 196, 62, { align: 'right' });
  
  doc.setFont("helvetica", "normal");
  doc.text(`Fecha de Emisión:`, 145, 67);
  doc.setFont("helvetica", "bold");
  doc.text(`${new Date().toLocaleDateString('es-ES')}`, 196, 67, { align: 'right' });

  // Two columns for Seller and Customer
  doc.setDrawColor(230);
  doc.setLineWidth(0.5);
  doc.line(14, 48, 196, 48);

  // Seller Column
  doc.setFontSize(10);
  doc.setTextColor(26, 74, 48);
  doc.setFont("helvetica", "bold");
  doc.text("VENDEDOR:", 14, 58);
  
  doc.setTextColor(80, 80, 80);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("MH SPORT CÉSPED ARTIFICIAL S.L.", 14, 63);
  doc.text("Polígono San Rafael, Calle Malta 12-13", 14, 68);
  doc.text("02400 Hellín (Albacete), España", 14, 73);
  doc.text("Tel: 967 179 172 | info@mhsportcesped.es", 14, 78);

  // Customer Column
  doc.setTextColor(26, 74, 48);
  doc.setFont("helvetica", "bold");
  doc.text("CLIENTE:", 85, 58);
  
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(`${customerInfo.name}`, 85, 63);
  
  doc.setTextColor(80, 80, 80);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(`${customerInfo.address}`, 85, 68);
  doc.text(`Tel: ${customerInfo.phone}`, 85, 73);
  doc.text(`Email: ${customerInfo.email}`, 85, 78);

  // Items Table
  const tableData = items.map((item: any) => [
    item.product.name,
    item.quantity,
    `${formatPrice(item.product.price)} €`,
    `${formatPrice(item.product.price * item.quantity)} €`
  ]);

  autoTable(doc, {
    startY: 88,
    head: [['Descripción del Producto', 'Cant.', 'Precio/Ud.', 'Subtotal']],
    body: tableData,
    theme: 'striped',
    headStyles: { 
        fillColor: [26, 74, 48], 
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
  const finalY = (doc as any).lastAutoTable.finalY + 15;
  
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
  
  doc.setDrawColor(26, 74, 48);
  doc.line(135, finalY + 21, 191, finalY + 21);
  
  doc.setFontSize(12);
  doc.setTextColor(26, 74, 48);
  doc.setFont("helvetica", "bold");
  doc.text(`TOTAL FACTURA:`, 135, finalY + 28);
  doc.text(`${formatPrice(totals.finalTotal)} €`, 191, finalY + 28, { align: 'right' });

  // Footer / Legal Notes
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150);
  
  const footerX = 14;
  let footerY = 270;
  
  doc.text("INFORMACIÓN ADICIONAL:", footerX, footerY);
  doc.setFontSize(7);
  doc.text("- Esta factura simplificada cumple con la normativa vigente de facturación en España.", footerX, footerY + 5);
  doc.text("- MH Sport garantiza todos sus productos por un periodo mínimo de 8 años en degradación por rayos UV.", footerX, footerY + 9);
  doc.text("- Para cualquier devolución o consulta, conserve este documento.", footerX, footerY + 13);
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "bolditalic");
  doc.setTextColor(26, 74, 48);
  doc.text("¡Gracias por elegir MH Sport Césped para transformar tu jardín!", 105, 290, { align: 'center' });

  // Save the PDF
  doc.save(`Factura_MH_Sport_${orderId}.pdf`);
  return doc;
};
