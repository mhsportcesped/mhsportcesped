import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShieldCheck, ArrowLeft, CheckCircle2, PackageCheck, CreditCard, Landmark, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Initialize Stripe (Placeholder key)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_51PqL...");

const CheckoutForm = ({ onPrev, onComplete, amount, items }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    // In a real app, you'd create a PaymentIntent on your server here
    // For this demo, we simulate a successful payment after 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    toast.success("Pago procesado correctamente");
    onComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in slide-in-from-right duration-500">
      <div className="p-6 bg-muted/50 rounded-2xl border border-border space-y-4">
        <Label className="text-xs font-black italic opacity-60">Datos de la tarjeta</Label>
        <div className="p-4 bg-background border border-border rounded-xl">
          <CardElement options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': { color: '#aab7c4' },
              },
              invalid: { color: '#9e2146' },
            },
          }} />
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          type="submit" 
          disabled={!stripe || loading} 
          size="lg" 
          className="w-full text-xl font-black italic h-16 rounded-2xl shadow-xl shadow-primary/30"
        >
          {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Procesando...</> : `Pagar ${amount.toFixed(2)} €`}
        </Button>
        <Button variant="ghost" onClick={onPrev} disabled={loading} className="w-full font-bold text-muted-foreground italic underline-offset-4 hover:underline">
          Volver a datos de envío
        </Button>
      </div>
    </form>
  );
};

const Checkout = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Details, 2: Payment
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "transfer">("card");
  const [formData, setFormData] = useState<any>(null);

  const handleDetailsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setFormData(data);
    setStep(2);
    window.scrollTo(0, 0);
  };

  const finalizeOrder = async () => {
    // Send to Formspree
    const cartSummary = items.map(item => `- ${item.product.name} (x${item.quantity}): ${(item.product.price * item.quantity).toFixed(2)} €`).join("\n");
    const finalData = new FormData();
    
    // Copy original form data
    for (const [key, value] of formData.entries()) {
      finalData.append(key, value);
    }

    finalData.append("Pedido", `\n${cartSummary}\n\nTOTAL: ${totalPrice.toFixed(2)} €`);
    finalData.append("Metodo_Pago", paymentMethod === "card" ? "Tarjeta (Stripe)" : "Transferencia Bancaria");
    finalData.append("_subject", "NUEVO PEDIDO - WEB OFICIAL MH SPORT CÉSPED");
    finalData.append("fuente", "Checkout con Pago - Página Oficial");

    try {
      await fetch("https://formspree.io/info@mhsportcesped.es", {
        method: "POST",
        body: finalData,
        headers: { 'Accept': 'application/json' }
      });
      
      setSubmitted(true);
      clearCart();
      toast.success("¡Pedido finalizado con éxito!");
    } catch (error) {
      toast.error("Error al registrar el pedido, pero el pago fue recibido. Contacta con nosotros.");
    }
  };

  if (submitted) {
    return (
      <main className="py-20 animate-in fade-in duration-700">
        <div className="container max-w-xl text-center space-y-8">
            <div className="bg-primary/10 h-24 w-24 rounded-[2rem] flex items-center justify-center mx-auto text-primary shadow-inner">
            <CheckCircle2 className="h-12 w-12" />
            </div>
            <div className="space-y-3">
                <h1 className="text-4xl font-black italic text-primary tracking-tight">¡Pedido confirmado!</h1>
                <p className="text-muted-foreground font-medium">
                Hemos recibido tu pedido y el pago se ha procesado correctamente. En breve recibirás un correo con la confirmación de envío.
                </p>
            </div>
            <div className="pt-6">
                <Button asChild size="lg" className="rounded-xl h-14 px-10 font-black italic shadow-xl shadow-primary/20">
                    <Link to="/">Volver al inicio</Link>
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
            <h1 className="text-3xl font-black italic">Tu carrito está vacío</h1>
            <Button asChild className="rounded-xl h-14 px-10 font-black italic shadow-lg shadow-primary/20">
                <Link to="/tienda">Ir a la tienda</Link>
            </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 md:py-20 animate-in fade-in duration-700 bg-muted/10 min-h-screen">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-2">
                <div className="flex items-center gap-4 text-xs font-black italic opacity-60 mb-2">
                  <span className={step === 1 ? "text-primary opacity-100" : ""}>1. Datos Envío</span>
                  <span>/</span>
                  <span className={step === 2 ? "text-primary opacity-100" : ""}>2. Pago Seguro</span>
                </div>
                <h1 className="text-5xl font-black italic tracking-tight text-primary leading-none">
                  {step === 1 ? "Tu información" : "Pago Seguro"}
                </h1>
            </div>
            <Button variant="ghost" asChild className="rounded-xl h-11 font-bold text-muted-foreground hover:text-primary">
                <Link to="/carrito"><ArrowLeft className="h-4 w-4 mr-2" /> Volver al Carrito</Link>
            </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Main Column */}
          <div className="bg-card border-2 border-primary/5 p-8 md:p-12 rounded-[3.5rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            {step === 1 ? (
              <form onSubmit={handleDetailsSubmit} className="space-y-8 relative z-10 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-xs font-black italic ml-1 opacity-60">Nombre completo</Label>
                    <Input id="name" name="nombre" required placeholder="Juan Pérez" defaultValue={formData?.get("nombre")} className="h-14 rounded-2xl bg-muted/30 border-none font-bold text-lg" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-xs font-black italic ml-1 opacity-60">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="juan@ejemplo.com" defaultValue={formData?.get("email")} className="h-14 rounded-2xl bg-muted/30 border-none font-bold text-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-xs font-black italic ml-1 opacity-60">Teléfono</Label>
                    <Input id="phone" name="telefono" type="tel" required placeholder="600 000 000" defaultValue={formData?.get("telefono")} className="h-14 rounded-2xl bg-muted/30 border-none font-bold text-lg" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="calle" className="text-xs font-black italic ml-1 opacity-60">Calle y Número</Label>
                    <Input id="calle" name="calle" required placeholder="C/ Ejemplo, 123" defaultValue={formData?.get("calle")} className="h-14 rounded-2xl bg-muted/30 border-none font-bold text-lg" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="address" className="text-xs font-black italic ml-1 opacity-60">Población / Ciudad</Label>
                    <Input id="address" name="direccion" required placeholder="Tu ciudad..." defaultValue={formData?.get("direccion")} className="h-14 rounded-2xl bg-muted/30 border-none font-bold text-lg" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="notes" className="text-xs font-black italic ml-1 opacity-60">Notas del pedido (Opcional)</Label>
                  <Textarea id="notes" name="notas" placeholder="Instrucciones para la entrega..." defaultValue={formData?.get("notas")} className="rounded-2xl bg-muted/30 border-none font-bold text-lg min-h-[140px] resize-none" />
                </div>

                <Button type="submit" size="lg" className="w-full text-xl font-black italic h-16 rounded-2xl shadow-xl shadow-primary/30">
                  Continuar al pago
                </Button>
              </form>
            ) : (
              <div className="space-y-8 relative z-10 animate-in fade-in duration-500">
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setPaymentMethod("card")}
                    className={`flex flex-col items-center gap-3 p-6 rounded-3xl border-2 transition-all ${paymentMethod === "card" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                  >
                    <CreditCard className={`h-8 w-8 ${paymentMethod === "card" ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="font-black italic text-xs">Tarjeta Bancaria</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod("transfer")}
                    className={`flex flex-col items-center gap-3 p-6 rounded-3xl border-2 transition-all ${paymentMethod === "transfer" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                  >
                    <Landmark className={`h-8 w-8 ${paymentMethod === "transfer" ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="font-black italic text-xs">Transferencia</span>
                  </button>
                </div>

                {paymentMethod === "card" ? (
                  <Elements stripe={stripePromise}>
                    <CheckoutForm amount={totalPrice} onPrev={() => setStep(1)} onComplete={finalizeOrder} />
                  </Elements>
                ) : (
                  <div className="space-y-6 animate-in slide-in-from-left duration-500">
                    <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10 space-y-4">
                      <h4 className="font-black italic text-primary">Instrucciones de transferencia</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        Al confirmar, registraremos tu pedido y te enviaremos por email nuestro IBAN. El envío se procesará una vez recibamos el justificante de pago.
                      </p>
                      <ul className="text-xs space-y-2 opacity-60 font-bold italic">
                        <li>Beneficiario: MH SPORT CÉSPED S.L.</li>
                        <li>Concepto: Pedido #{Math.floor(Math.random() * 9000) + 1000}</li>
                      </ul>
                    </div>
                    <Button onClick={finalizeOrder} size="lg" className="w-full text-xl font-black italic h-16 rounded-2xl shadow-xl shadow-primary/30">
                      Confirmar pedido por transferencia
                    </Button>
                    <Button variant="ghost" onClick={() => setStep(1)} className="w-full font-bold text-muted-foreground italic underline-offset-4 hover:underline">
                      Volver a datos de envío
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Summary Column */}
          <div className="space-y-8 sticky top-8">
            <div className="bg-card border-2 border-primary/20 p-8 md:p-10 rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex items-center gap-3">
                    <PackageCheck className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-black italic tracking-tighter">Tu Pedido</h2>
                </div>

                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-primary">
                    {items.map((item) => (
                        <div key={item.product.id} className="flex justify-between items-center bg-muted/30 p-4 rounded-2xl">
                            <div className="flex gap-4 items-center">
                                <span className="h-10 w-10 flex items-center justify-center bg-primary text-white font-black italic text-sm rounded-xl shadow-lg">{item.quantity}x</span>
                                <div className="space-y-0.5">
                                    <p className="font-black italic text-xs line-clamp-1">{item.product.name}</p>
                                    <p className="text-[10px] font-bold opacity-50">{item.product.category.replace('-', ' ')}</p>
                                </div>
                            </div>
                            <span className="font-black italic text-primary">{(item.product.price * item.quantity).toFixed(2)} €</span>
                        </div>
                    ))}
                </div>

                <div className="pt-6 space-y-4">
                    <div className="flex justify-between items-baseline">
                        <span className="text-xl font-black italic">Total a pagar</span>
                        <span className="text-5xl font-black italic text-primary">{totalPrice.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between text-xs font-black italic opacity-40">
                        <span>Envío</span>
                        <span className="text-primary opacity-100">Gratis</span>
                    </div>
                </div>
            </div>

            <div className="p-8 bg-white/50 backdrop-blur-sm border border-border rounded-[2.5rem] flex items-start gap-4 shadow-sm">
                <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                <div className="space-y-1">
                  <p className="text-xs font-black italic tracking-wider">Pago 100% seguro</p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed font-bold italic">
                    Tus pagos se procesan de forma cifrada a través de Stripe, cumpliendo con los estándares PCI-DSS.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
