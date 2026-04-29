import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { formatPrice } from "@/lib/utils";

import { sendEmail } from "@/lib/email";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

const Calculator = () => {
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const sqm = width && length ? parseFloat(width) * parseFloat(length) : 0;
  
  // Update category filtering to match new product structure
  const grassProducts = products.filter((p) => p.category === "al-corte");
  const cheapest = grassProducts.length > 0 ? [...grassProducts].sort((a, b) => a.price - b.price)[0] : { price: 0 };
  const priciest = grassProducts.length > 0 ? [...grassProducts].sort((a, b) => b.price - a.price)[0] : { price: 0 };

  const handleSendQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const templateParams = {
      from_name: formData.get("nombre"),
      phone: formData.get("telefono"),
      area_width: width,
      area_length: length,
      total_sqm: sqm.toFixed(2),
      estimated_price: `${(sqm * cheapest.price).toFixed(2)} € - ${(sqm * priciest.price).toFixed(2)} €`,
      subject: "CONSULTA CALCULADORA - WEB OFICIAL MH SPORT CÉSPED",
      source: "Calculadora de m2 - Página Oficial"
    };

    try {
      await sendEmail(templateParams);
      setSent(true);
      toast.success("¡Cálculo enviado! Te contactaremos pronto.");
    } catch (error) {
      toast.error("Error al enviar el cálculo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-20 animate-in fade-in duration-700">
      <div className="container max-w-xl">
        <h1 className="text-4xl font-black italic text-center mb-2 text-primary">Calculadora m²</h1>
        <p className="text-center text-muted-foreground mb-10 font-bold">Planifica tu instalación de forma precisa.</p>

        <div className="bg-card border-2 border-primary/10 rounded-[2rem] p-8 shadow-xl">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-black italic">Ancho (metros)</label>
              <Input type="number" min="0" step="0.1" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="0.0" className="h-14 rounded-xl text-lg font-bold" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black italic">Largo (metros)</label>
              <Input type="number" min="0" step="0.1" value={length} onChange={(e) => setLength(e.target.value)} placeholder="0.0" className="h-14 rounded-xl text-lg font-bold" />
            </div>
          </div>

          {sqm > 0 ? (
            <div className="space-y-8 animate-in zoom-in-95 duration-500">
              <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl space-y-3">
                <p className="text-xl"><strong>Superficie neta:</strong> <span className="text-primary font-black italic">{sqm.toFixed(2).replace('.', ',')} m²</span></p>
                <p className="text-xl"><strong>Con margen (5%):</strong> <span className="text-primary font-black italic">{Math.ceil(sqm * 1.05)} m²</span></p>
                <div className="h-px bg-border my-4" />
                <p className="text-sm font-bold opacity-60 italic">Estimación de inversión:</p>
                <p className="text-3xl font-black italic text-primary">
                  {formatPrice(sqm * cheapest.price)} € - {formatPrice(sqm * priciest.price)} €
                </p>
                <p className="text-[10px] text-muted-foreground font-bold tracking-tighter">*Precios orientativos según modelo.</p>
              </div>
              
              <div className="pt-6 border-t border-border">
                {sent ? (
                  <div className="text-center py-6 bg-primary/10 rounded-2xl animate-in zoom-in-95">
                    <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
                    <p className="font-bold italic">¡Datos enviados con éxito!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSendQuote} className="space-y-4">
                    <p className="text-xs font-black italic opacity-60 mb-2 uppercase">¿Quieres que te llamemos con un presupuesto exacto?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input name="nombre" required placeholder="Tu nombre" className="h-12 rounded-xl" />
                      <Input name="telefono" required type="tel" placeholder="Tu teléfono" className="h-12 rounded-xl" />
                    </div>
                    <Button type="submit" disabled={loading} variant="secondary" className="w-full h-12 rounded-xl font-black italic">
                      {loading ? "Enviando..." : "Enviar mis medidas a MH Sport"}
                    </Button>
                  </form>
                )}
              </div>

              <Button className="w-full h-14 rounded-xl text-lg font-black italic shadow-lg shadow-primary/20" asChild>
                <Link to="/tienda?cat=al-corte">Ver productos al corte</Link>
              </Button>
            </div>
          ) : (
            <div className="py-12 text-center text-muted-foreground italic bg-muted/30 rounded-2xl border border-dashed border-border mb-6">
              Introduce las medidas para calcular el presupuesto
            </div>
          )}
        </div>

        <div className="mt-12 flex justify-center">
            <Button variant="ghost" asChild className="gap-2 font-bold rounded-xl h-12">
                <Link to="/"><ArrowLeft className="h-4 w-4" /> Volver al Inicio</Link>
            </Button>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
