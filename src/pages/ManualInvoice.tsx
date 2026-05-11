import { useEffect } from "react";
import { generateInvoicePDF } from "@/lib/invoice";
import logo from "@/assets/logo_mh_sport_cesped.webp";
import { Button } from "@/components/ui/button";

const ManualInvoice = () => {
  const handleGenerate = () => {
    const orderData = {
      orderId: "MH-RUBEN-001",
      customerInfo: {
        name: "Rubén Alfaro Díaz",
        email: "crubenalfarodiaz@gmail.com",
        phone: "620344920",
        address: "Calle Torcaz 2, Toledo"
      },
      items: [
        {
          product: { name: "MODELO BUDAPEST 18mm – ROLLO COMPLETO (2x40m)", price: 622.40 },
          quantity: 1
        },
        {
          product: { name: "CÉSPED ARTIFICIAL AL CORTE BUDAPEST 18 MM (2x6m)", price: 105.36 },
          quantity: 1
        },
        {
          product: { name: "CÉSPED ARTIFICIAL AL CORTE PRAGA 40 MM (2x20m)", price: 724.00 },
          quantity: 1
        }
      ],
      totals: {
        subtotal: 1200.00, // Adjusted to match 1451.76 total with 21% IVA approx
        ivaAmount: 251.76,
        shippingPrice: 0,
        finalTotal: 1451.76
      }
    };

    generateInvoicePDF(orderData, logo);
  };

  return (
    <div className="container py-20 text-center space-y-8">
      <h1 className="text-3xl font-black italic">Generador Manual de Albarán</h1>
      <p className="text-muted-foreground">Haz clic en el botón para descargar el albarán de Rubén Alfaro Díaz.</p>
      <Button onClick={handleGenerate} size="lg" className="h-16 px-10 text-xl font-black italic rounded-2xl shadow-xl">
        Descargar Albarán (Rubén Alfaro)
      </Button>
    </div>
  );
};

export default ManualInvoice;
