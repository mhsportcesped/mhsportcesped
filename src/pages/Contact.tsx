import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, Clock, Facebook, Instagram, MessageSquare, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Add official website identification
    formData.append("_subject", "NUEVO MENSAJE - WEB OFICIAL MH SPORT CÉSPED");
    formData.append("fuente", "Formulario de Contacto - Página Oficial");

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
        toast.success("¡Mensaje enviado correctamente!");
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Formspree error:", errorData);
        toast.error(`Error: ${errorData.error || "No se pudo enviar el mensaje"}`);
      }
    } catch (error) {
      console.error("Error sending form:", error);
      toast.error("Error de conexión. Comprueba la consola.");
    }
  };

  return (
    <main className="py-12 md:py-20 animate-in fade-in duration-700">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tight text-primary">¡Contacta con nosotros!</h1>
          <p className="text-xl font-bold italic">Ubicación: Polígono "San Rafael" C/Malta N⁰12-13, Hellín</p>
          <p className="text-muted-foreground leading-relaxed">
            En MH Sport queremos ayudarte a encontrar la mejor solución en césped artificial. Visítanos en nuestro punto de venta o solicita asesoramiento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <section className="space-y-6 bg-card border border-border p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-bold italic underline decoration-primary underline-offset-8 mb-4">¿Cómo puedes contactarnos?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg italic">Llámanos</h3>
                    <p className="text-muted-foreground text-sm mb-2">Respuesta rápida y directa con un experto.</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:967179172" className="text-xl font-black hover:text-primary transition-colors">967 179 172</a>
                      <a href="tel:655075988" className="text-xl font-black hover:text-primary transition-colors">655 075 988</a>
                      <p className="text-xs font-bold text-primary flex items-center gap-1 mt-1">
                        <MessageSquare className="h-3 w-3" /> También atendemos WhatsApp
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg italic">Horario de atención</h3>
                    <p className="text-muted-foreground font-medium">Lunes a Viernes</p>
                    <p className="text-lg font-bold">9:00h – 13:30h y 16:30h – 18:30h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg italic">Escríbenos un correo</h3>
                    <p className="text-muted-foreground text-sm mb-2">Cuéntanos tu proyecto con detalle.</p>
                    <a href="mailto:info@mhsportcesped.es" className="text-lg font-bold hover:text-primary transition-colors">info@mhsportcesped.es</a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t flex gap-4">
                <a href="https://www.facebook.com/share/1DyHGTDUJ2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/mhsport.cesped.artificial/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </section>

            <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h2 className="text-xl font-bold mb-6 italic">¿Por qué contactarnos?</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex gap-2 text-sm font-medium">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>Asesoramiento personalizado</span>
                </li>
                <li className="flex gap-2 text-sm font-medium">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>Dudas sobre instalación</span>
                </li>
                <li className="flex gap-2 text-sm font-medium">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>Mantenimiento y características</span>
                </li>
                <li className="flex gap-2 text-sm font-medium">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>Presupuestos sin compromiso</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="bg-muted p-8 md:p-12 rounded-[2.5rem] border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-2 italic">Rellena nuestro formulario</h2>
            <p className="text-muted-foreground mb-10">Te asesoramos sin compromiso adaptándonos a tu espacio y presupuesto.</p>
            
            {sent ? (
              <div className="text-center py-20 animate-in zoom-in-95 duration-500">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground mt-2">Nos pondremos en contacto contigo a la mayor brevedad posible.</p>
                <Button onClick={() => setSent(false)} variant="outline" className="mt-8 rounded-xl">Enviar otro mensaje</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Nombre y Apellidos</Label>
                  <Input id="fullname" name="nombre" required placeholder="Tu nombre real..." className="h-12 rounded-xl bg-background" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" name="email" required type="email" placeholder="ejemplo@correo.com" className="h-12 rounded-xl bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Número de Teléfono</Label>
                    <Input id="phone" name="telefono" required type="tel" placeholder="000 000 000" className="h-12 rounded-xl bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="calle">Calle y Número</Label>
                  <Input id="calle" name="calle" required placeholder="C/ Ejemplo, 123..." className="h-12 rounded-xl bg-background" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="provincia">Provincia</Label>
                    <Input id="provincia" name="provincia" placeholder="Madrid, Albacete..." className="h-12 rounded-xl bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="poblacion">Población</Label>
                    <Input id="poblacion" name="poblacion" placeholder="Tu ciudad..." className="h-12 rounded-xl bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje o comentario</Label>
                  <Textarea id="message" name="mensaje" required placeholder="Cuéntanos tu proyecto..." rows={4} className="rounded-xl bg-background" />
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox id="privacy" required className="mt-1" />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="privacy" className="text-xs font-medium text-muted-foreground cursor-pointer">
                      He leído y acepto la <Link to="/politica-privacidad" className="text-primary hover:underline">política de privacidad</Link> de MH Sport
                    </label>
                  </div>
                </div>

                <div className="p-4 bg-background border border-border rounded-xl flex items-center justify-between text-xs font-bold text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full border-2 border-primary" />
                    ¿Eres humano? No soy un robot
                  </div>
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="Recaptcha" className="h-6 w-6 opacity-30" />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg font-black h-14 rounded-xl shadow-xl shadow-primary/20 italic">
                  Enviar mensaje
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
            <Button variant="ghost" asChild className="gap-2 font-bold rounded-xl h-12">
                <Link to="/"><ArrowLeft className="h-4 w-4" /> Volver al Inicio</Link>
            </Button>
        </div>
      </div>


      <div className="mt-20 h-[550px] w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700 brightness-[0.8] hover:brightness-100 border-y-8 border-primary/10 shadow-2xl">
        <iframe
          src="https://maps.google.com/maps?q=MH%20Sport%20Hellin&t=&z=18&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Exacta MH Sport - Polígono San Rafael"
        />
      </div>
    </main>
  );
};

export default Contact;
