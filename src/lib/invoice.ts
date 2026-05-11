import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { formatPrice } from "./utils";

export const generateInvoicePDF = (orderData: any) => {
  const doc = new jsPDF();
  const { items, customerInfo, totals, orderId = `MH-${Math.floor(Math.random() * 1000000)}` } = orderData;

  // Header
  doc.setFontSize(22);
  doc.setTextColor(26, 74, 48); // Brand green
  doc.text("MH SPORT CÉSPED", 14, 22);
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Polígono San Rafael, C/ Malta N°12-13", 14, 30);
  doc.text("02400 Hellín, Albacete", 14, 35);
  doc.text("Tel: 967 179 172 | 655 075 988", 14, 40);
  doc.text("Email: info@mhsportcesped.es", 14, 45);

  // Invoice Details
  doc.setFontSize(16);
  doc.setTextColor(0);
  doc.text("FACTURA DE COMPRA", 140, 22);
  
  doc.setFontSize(10);
  doc.text(`Número: ${orderId}`, 140, 30);
  doc.text(`Fecha: ${new Date().toLocaleDateString('es-ES')}`, 140, 35);

  // Customer Details
  doc.setDrawColor(230);
  doc.line(14, 55, 196, 55);
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("CLIENTE:", 14, 65);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`${customerInfo.name}`, 14, 72);
  doc.text(`${customerInfo.address}`, 14, 77);
  doc.text(`Tel: ${customerInfo.phone}`, 14, 82);
  doc.text(`Email: ${customerInfo.email}`, 14, 87);

  // Table
  const tableData = items.map((item: any) => [
    item.product.name,
    item.quantity,
    `${formatPrice(item.product.price)} €`,
    `${formatPrice(item.product.price * item.quantity)} €`
  ]);

  autoTable(doc, {
    startY: 95,
    head: [['Producto', 'Cant.', 'Precio Unit.', 'Subtotal']],
    body: tableData,
    headStyles: { fillColor: [26, 74, 48], textColor: [255, 255, 255] },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    margin: { left: 14, right: 14 }
  });

  // Totals
  const finalY = (doc as any).lastAutoTable.finalY + 10;
  
  doc.setFontSize(10);
  doc.text(`Base Imponible:`, 140, finalY);
  doc.text(`${formatPrice(totals.subtotal)} €`, 180, finalY, { align: 'right' });
  
  doc.text(`IVA (21%):`, 140, finalY + 5);
  doc.text(`${formatPrice(totals.ivaAmount)} €`, 180, finalY + 5, { align: 'right' });
  
  doc.text(`Envío:`, 140, finalY + 10);
  doc.text(`${totals.shippingPrice === 0 ? "Gratis" : formatPrice(totals.shippingPrice) + " €"}`, 180, finalY + 10, { align: 'right' });
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(`TOTAL:`, 140, finalY + 20);
  doc.text(`${formatPrice(totals.finalTotal)} €`, 180, finalY + 20, { align: 'right' });

  // Footer
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150);
  const footerText = "Gracias por confiar en MH Sport Césped para tu proyecto. Esta es una confirmación de compra válida como factura simplificada.";
  doc.text(footerText, 14, 280);

  // Save the PDF
  doc.save(`Factura_MH_Sport_${orderId}.pdf`);
  return doc;
};
