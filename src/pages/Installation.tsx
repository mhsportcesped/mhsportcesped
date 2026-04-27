import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CheckCircle, ArrowLeft, Wrench, Shield, Home, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { icon: Home, title: "Consulta", desc: "Nos cuentas tu proyecto y tomamos medidas exactas." },
  { icon: Shield, title: "Presupuesto", desc: "Preparamos un presupuesto detallado sin compromiso." },
  { icon: Wrench, title: "Instalación", desc: "Nuestro equipo certificado instala el césped con acabado premium." },
  { icon: Clock, title: "Garantía", desc: "Aseguramos más de 10 años de vida útil para tu jardín." },
];

const Installation = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Add official website identification
    formData.append("_subject", "PRESUPUESTO INSTALACIÓN - WEB OFICIAL MH SPORT CÉSPED");
    formData.append("fuente", "Página de Instalación - Oficial");

    try {
      const response = await fetch("https://formspree.io/info@mhsportcesped.es", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSent(true);
        toast.success("Solicitud enviada. Nos pondremos en contacto contigo pronto.");
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Formspree error:", errorData);
        toast.error(`Error: ${errorData.error || "No se pudo enviar la solicitud"}`);
      }
    } catch (error) {
      console.error("Error sending form:", error);
      toast.error("Error de conexión. Comprueba la consola.");
    }
  };

  return (
    <main className="py-12 md:py-20 animate-in fade-in duration-700 bg-muted/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tight text-primary">Instalación Profesional</h1>
          <p className="text-xl font-bold">Un acabado perfecto garantizado por expertos.</p>
          <p className="text-muted-foreground leading-relaxed">
            Nuestro equipo de instaladores certificados cuenta con la experiencia técnica necesaria para asegurar un drenaje óptimo y juntas invisibles en cualquier superficie.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((s, i) => (
            <div key={i} className="bg-card border border-border p-8 rounded-[2rem] text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                <s.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold italic mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto bg-card border-2 border-primary/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-3xl font-black italic mb-2">Solicitar presupuesto</h2>
          <p className="text-muted-foreground mb-10 font-medium">Cuéntanos sobre tu espacio y te daremos la mejor solución.</p>
          
          {sent ? (
            <div className="text-center py-16 animate-in zoom-in-95 duration-500">
              <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold italic">¡Solicitud enviada!</h3>
              <p className="text-muted-foreground mt-2">Uno de nuestros técnicos te contactará en menos de 24 horas.</p>
              <Button onClick={() => setSent(false)} variant="outline" className="mt-8 rounded-xl">Enviar otra solicitud</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black italic ml-1">Nombre completo</label>
                  <Input name="nombre" required placeholder="Tu nombre..." className="h-12 rounded-xl bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black italic ml-1">Teléfono</label>
                  <Input name="telefono" required type="tel" placeholder="000 000 000" className="h-12 rounded-xl bg-background" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black italic ml-1">Email</label>
                  <Input name="email" required type="email" placeholder="ejemplo@correo.com" className="h-12 rounded-xl bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black italic ml-1">Ciudad / Población</label>
                  <Input name="ciudad" required placeholder="¿Dónde vives?" className="h-12 rounded-xl bg-background" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black italic ml-1">Calle y Número</label>
                <Input name="calle" required placeholder="Dirección exacta de la instalación..." className="h-12 rounded-xl bg-background" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black italic ml-1">Metros cuadrados aprox.</label>
                <Input name="metros" required type="number" min="1" placeholder="Ej: 50" className="h-12 rounded-xl bg-background" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black italic ml-1">Mensaje o detalles</label>
                <Textarea name="detalles" placeholder="Cuéntanos más sobre el terreno o tus necesidades..." rows={4} className="rounded-xl bg-background resize-none" />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg font-black italic h-14 rounded-xl shadow-xl shadow-primary/20">
                Solicitar presupuesto gratis
              </Button>
            </form>
          )}
        </div>

        <div className="mt-20 flex justify-center">
            <Button variant="ghost" asChild className="gap-2 font-bold rounded-xl h-12">
                <Link to="/"><ArrowLeft className="h-4 w-4" /> Volver al Inicio</Link>
            </Button>
        </div>
      </div>
    </main>
  );
};

export default Installation;
