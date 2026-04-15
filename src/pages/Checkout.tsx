import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShieldCheck, ArrowLeft, CheckCircle2, PackageCheck } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Pedido realizado con éxito!");
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <main className="py-20 animate-in fade-in duration-700">
        <div className="container max-w-xl text-center space-y-8">
            <div className="bg-primary/10 h-24 w-24 rounded-[2rem] flex items-center justify-center mx-auto text-primary shadow-inner">
            <CheckCircle2 className="h-12 w-12" />
            </div>
            <div className="space-y-3">
                <h1 className="text-4xl font-black italic uppercase text-primary tracking-tight">¡Gracias por tu pedido!</h1>
                <p className="text-muted-foreground font-medium">
                Hemos recibido tu solicitud correctamente. Te enviaremos un correo con los detalles del pago y el seguimiento de tu envío.
                </p>
            </div>
            <div className="pt-6">
                <Button asChild size="lg" className="rounded-xl h-14 px-10 font-black italic shadow-xl shadow-primary/20">
                    <Link to="/">VOLVER AL INICIO</Link>
                </Button>
            </div>
        </div>
      </main>
    );
  }

  if (totalItems === 0) {
    return (
      <main className="py-20 animate-in fade-in duration-700">
        <div className="container text-center space-y-6">
            <h1 className="text-3xl font-black italic uppercase">Tu carrito está vacío</h1>
            <Button asChild className="rounded-xl h-14 px-10 font-black italic shadow-lg shadow-primary/20">
                <Link to="/tienda">IR A LA TIENDA</Link>
            </Button>
            <div className="pt-4">
                <Button variant="ghost" asChild className="rounded-xl font-bold text-muted-foreground">
                    <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> Volver al Inicio</Link>
                </Button>
            </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 md:py-20 animate-in fade-in duration-700 bg-muted/10">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-1">
                <h1 className="text-5xl font-black italic uppercase tracking-tight text-primary">Finalizar Pago</h1>
                <p className="text-muted-foreground font-bold italic">Completa tus datos para procesar el pedido con MH Sport.</p>
            </div>
            <Button variant="ghost" asChild className="rounded-xl h-11 font-bold text-muted-foreground hover:text-primary">
                <Link to="/carrito"><ArrowLeft className="h-4 w-4 mr-2" /> Volver al Carrito</Link>
            </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="bg-card border-2 border-primary/5 p-8 md:p-12 rounded-[3.5rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-xs font-black italic uppercase ml-1 opacity-60">Nombre completo</Label>
                  <Input id="name" required placeholder="Juan Pérez" className="h-14 rounded-2xl bg-muted/30 border-none font-bold text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-xs font-black italic uppercase ml-1 opacity-60">Email</Label>
                  <Input id="email" type="email" required placeholder="juan@ejemplo.com" className="h-14 rounded-2xl bg-muted/30 border-none font-bold text-lg" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-xs font-black italic uppercase ml-1 opacity-60">Teléfono</Label>
                  <Input id="phone" type="tel" required placeholder="600 000 000" className="h-14 rounded-2xl bg-muted/30 border-none font-bold text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="address" className="text-xs font-black italic uppercase ml-1 opacity-60">Dirección de envío</Label>
                  <Input id="address" required placeholder="Tu dirección real..." className="h-14 rounded-2xl bg-muted/30 border-none font-bold text-lg" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="notes" className="text-xs font-black italic uppercase ml-1 opacity-60">Notas del pedido</Label>
                <Textarea id="notes" placeholder="¿Alguna instrucción especial para la entrega?" className="rounded-2xl bg-muted/30 border-none font-bold text-lg min-h-[140px] resize-none" />
              </div>

              <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10 flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed font-bold italic">
                  Al finalizar tu pedido, recibirás las instrucciones de pago por transferencia bancaria o tarjeta. Utilizamos cifrado de grado militar para proteger tus datos.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full text-xl font-black italic h-16 rounded-2xl shadow-xl shadow-primary/30 uppercase">
                CONFIRMAR PEDIDO · {totalPrice.toFixed(2)} €
              </Button>
            </form>
          </div>

          {/* Summary */}
          <div className="space-y-8">
            <div className="bg-card border-2 border-primary/20 p-8 md:p-10 rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex items-center gap-3">
                    <PackageCheck className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-black italic uppercase tracking-tighter">Tu Pedido</h2>
                </div>

                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary/20">
                    {items.map((item) => (
                        <div key={item.product.id} className="flex justify-between items-center bg-muted/30 p-4 rounded-2xl">
                            <div className="flex gap-4 items-center">
                                <span className="h-10 w-10 flex items-center justify-center bg-primary text-white font-black italic text-sm rounded-xl shadow-lg">{item.quantity}x</span>
                                <div className="space-y-0.5">
                                    <p className="font-black italic text-xs uppercase line-clamp-1">{item.product.name}</p>
                                    <p className="text-[10px] font-bold opacity-50 uppercase">{item.product.category.replace('-', ' ')}</p>
                                </div>
                            </div>
                            <span className="font-black italic text-primary">{(item.product.price * item.quantity).toFixed(2)} €</span>
                        </div>
                    ))}
                </div>

                <div className="pt-6 space-y-4">
                    <div className="flex justify-between text-sm font-black uppercase italic opacity-40">
                        <span>Subtotal</span>
                        <span>{totalPrice.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between text-sm font-black uppercase italic opacity-40">
                        <span>Envío</span>
                        <span className="text-primary opacity-100">GRATIS</span>
                    </div>
                    <div className="h-px bg-border my-6" />
                    <div className="flex justify-between items-baseline">
                        <span className="text-xl font-black italic uppercase">Total a pagar</span>
                        <span className="text-5xl font-black italic text-primary">{totalPrice.toFixed(2)} €</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <Button variant="ghost" asChild className="gap-2 font-black italic uppercase rounded-xl h-14 px-8 text-muted-foreground hover:text-primary">
                    <Link to="/"><ArrowLeft className="h-5 w-5" /> Volver al Inicio</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
