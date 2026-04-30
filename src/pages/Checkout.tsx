import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShieldCheck, ArrowLeft, CheckCircle2, PackageCheck, CreditCard, Landmark, Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { sendEmail } from "@/lib/email";

// Initialize Stripe (Using env variable or placeholder)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_tu_clave_aqui");

const CheckoutForm = ({ onPrev, onComplete, amount }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message || "Ocurrió un error inesperado.");
      toast.error(error.message || "Error al procesar el pago");
      setLoading(false);
    } else {
      // Payment successful!
      onComplete();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-in slide-in-from-right duration-500">
      <div className="p-6 bg-muted/50 rounded-2xl border border-border space-y-4">
        <Label className="text-xs font-black italic opacity-60">Detalles de Pago Seguro</Label>
        <div className="p-4 bg-background border border-border rounded-xl">
          <PaymentElement options={{
            layout: "tabs",
          }} />
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-center gap-3 text-destructive text-sm font-bold italic">
          <AlertCircle className="h-5 w-5" />
          {errorMessage}
        </div>
      )}

      <div className="space-y-4">
        <Button 
          type="submit" 
          disabled={!stripe || loading} 
          size="lg" 
          className="w-full text-xl font-black italic h-16 rounded-2xl shadow-xl shadow-primary/30"
        >
          {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Procesando...</> : `Pagar ${amount.toFixed(2)} €`}
        </Button>
        <Button variant="ghost" type="button" onClick={onPrev} disabled={loading} className="w-full font-bold text-muted-foreground italic underline-offset-4 hover:underline">
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
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isFetchingSecret, setIsFetchingSecret] = useState(false);
  const [isSimulated, setIsSimulated] = useState(false);

  // Calculations for detailed summary
  const ivaRate = 0.21;
  const subtotal = totalPrice / (1 + ivaRate);
  const ivaAmount = totalPrice - subtotal;

  // Effect to fetch client secret when moving to payment step
  useEffect(() => {
    if (step === 2 && !clientSecret && !isFetchingSecret) {
      fetchClientSecret();
    }
  }, [step]);

  const fetchClientSecret = async () => {
    setIsFetchingSecret(true);
    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          amount: totalPrice,
          items: items,
          customerInfo: {
            name: formData?.get("nombre"),
            email: formData?.get("email"),
            phone: formData?.get("telefono")
          }
        }),
      });

      if (response.status === 404 || !response.ok) {
        throw new Error("API not found");
      }

      const data = await response.json();
      
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        throw new Error(data.error || "No se pudo iniciar la pasarela de pago");
      }
    } catch (error) {
      console.warn("Backend no disponible, activando simulador local para pruebas.");
      // If we are in local development and API fails, we enable simulation
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        setIsSimulated(true);
        // We set a fake secret just to pass the check
        setClientSecret("simulated_secret");
      } else {
        toast.error("Error de conexión con el servidor de pagos");
      }
    } finally {
      setIsFetchingSecret(false);
    }
  };

  const handleDetailsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setFormData(data);
    setStep(2);
    window.scrollTo(0, 0);
  };

  const finalizeOrder = async () => {
    setLoading(true);
    
    const cartSummary = items.map(item => `- ${item.product.name} (x${item.quantity}): ${(item.product.price * item.quantity).toFixed(2)} €`).join("\n");
    
    const templateParams = {
      from_name: formData.get("nombre"),
      from_email: formData.get("email"),
      phone: formData.get("telefono"),
      address: `${formData.get("calle")}, ${formData.get("direccion")}`,
      notes: formData.get("notes") || "Sin notas",
      order_summary: cartSummary,
      total_price: `${totalPrice.toFixed(2)} €`,
      payment_method: "Tarjeta Bancaria (Stripe)",
      subject: "NUEVO PEDIDO - WEB OFICIAL MH SPORT CÉSPED",
      source: "Checkout con Pago - Página Oficial"
    };

    try {
      await sendEmail(templateParams);
      setSubmitted(true);
      clearCart();
      toast.success("¡Pedido finalizado con éxito!");
    } catch (error) {
      console.error("Email Error:", error);
      toast.error("Error al registrar el pedido. Contacta con nosotros por teléfono.");
    } finally {
      setLoading(false);
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
                Hemos recibido tu pedido y se ha procesado correctamente. En breve recibirás un correo con la confirmación.
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

  const appearance: any = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#1a1a1a',
      colorBackground: '#ffffff',
      colorText: '#30313d',
      colorDanger: '#df1b41',
      fontFamily: 'Inter, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '12px',
    },
  };

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
                  <Textarea id="notes" name="notes" placeholder="Instrucciones para la entrega..." defaultValue={formData?.get("notes")} className="rounded-2xl bg-muted/30 border-none font-bold text-lg min-h-[140px] resize-none" />
                </div>

                <Button type="submit" size="lg" className="w-full text-xl font-black italic h-16 rounded-2xl shadow-xl shadow-primary/30">
                  Continuar al pago
                </Button>
              </form>
            ) : (
              <div className="space-y-8 relative z-10 animate-in fade-in duration-500">
                <div className="flex items-center gap-4 p-6 rounded-3xl border-2 border-primary bg-primary/5">
                  <CreditCard className="h-8 w-8 text-primary" />
                  <div className="flex flex-col">
                    <span className="font-black italic text-sm">Pago con Tarjeta Bancaria</span>
                    <span className="text-[10px] font-bold opacity-60 italic">Pasarela de pago segura cifrada</span>
                  </div>
                </div>

                {clientSecret ? (
                  isSimulated ? (
                    <div className="space-y-6 animate-in slide-in-from-right duration-500">
                      <div className="p-6 bg-amber-50 border-2 border-amber-200 rounded-3xl space-y-4">
                        <div className="flex items-center gap-2 text-amber-700">
                          <AlertCircle className="h-5 w-5" />
                          <span className="font-black italic text-sm uppercase tracking-wider">Modo Simulador Local</span>
                        </div>
                        <p className="text-xs font-bold text-amber-600/80 italic leading-relaxed">
                          El servidor no está detectado en tu PC. Puedes probar el flujo del checkout usando este simulador. 
                          <span className="block mt-1 font-black underline">Esto no realizará ningún cargo real.</span>
                        </p>
                        
                        <div className="p-5 bg-white rounded-2xl border border-amber-100 shadow-sm space-y-4">
                           <div className="space-y-2">
                             <Label className="text-[10px] font-black italic opacity-40">Número de Tarjeta (Simulado)</Label>
                             <div className="h-12 bg-muted/50 rounded-xl border border-dashed border-muted-foreground/20 flex items-center px-4 text-muted-foreground font-mono text-sm">
                               4242 4242 4242 4242
                             </div>
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                             <div className="space-y-2">
                               <Label className="text-[10px] font-black italic opacity-40">Caducidad</Label>
                               <div className="h-12 bg-muted/50 rounded-xl border border-dashed border-muted-foreground/20 flex items-center px-4 text-muted-foreground font-mono text-sm">
                                 12 / 28
                               </div>
                             </div>
                             <div className="space-y-2">
                               <Label className="text-[10px] font-black italic opacity-40">CVC</Label>
                               <div className="h-12 bg-muted/50 rounded-xl border border-dashed border-muted-foreground/20 flex items-center px-4 text-muted-foreground font-mono text-sm">
                                 123
                               </div>
                             </div>
                           </div>
                        </div>
                      </div>

                      <Button 
                        onClick={finalizeOrder}
                        size="lg" 
                        className="w-full text-xl font-black italic h-16 rounded-2xl shadow-xl shadow-primary/30"
                      >
                        Confirmar Pedido (Simulación)
                      </Button>
                      <Button variant="ghost" type="button" onClick={() => setStep(1)} className="w-full font-bold text-muted-foreground italic underline-offset-4 hover:underline">
                        Volver a datos de envío
                      </Button>
                    </div>
                  ) : (
                    <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
                      <CheckoutForm amount={totalPrice} onPrev={() => setStep(1)} onComplete={finalizeOrder} />
                    </Elements>
                  )
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <Loader2 className="h-12 w-12 animate-spin text-primary opacity-20" />
                    <p className="font-black italic text-sm text-muted-foreground">Iniciando pago seguro...</p>
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

                <div className="space-y-4 max-h-[250px] overflow-y-auto pr-4 scrollbar-thin scrollbar-primary">
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

                <div className="pt-6 border-t border-dashed border-primary/20 space-y-4">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-bold italic opacity-60">
                            <span>Base imponible</span>
                            <span>{subtotal.toFixed(2)} €</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold italic opacity-60">
                            <span>IVA (21%)</span>
                            <span>{ivaAmount.toFixed(2)} €</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold italic">
                            <span>Envío</span>
                            <span className={totalPrice >= 300 ? "text-primary" : "text-muted-foreground"}>
                                {totalPrice >= 300 ? "Gratis" : "A consultar"}
                            </span>
                        </div>
                    </div>

                    <div className="pt-4 border-t-2 border-primary/10">
                        <div className="flex justify-between items-baseline">
                            <span className="text-xl font-black italic">Total a pagar</span>
                            <div className="text-right">
                                <span className="text-5xl font-black italic text-primary">{totalPrice.toFixed(2)} €</span>
                                <p className="text-[10px] font-bold opacity-40 italic mt-1">IVA incluido</p>
                            </div>
                        </div>
                        {totalPrice < 300 && (
                            <p className="text-[10px] font-black italic text-primary animate-pulse text-right mt-2">
                                ¡Envío gratis a partir de 300€!
                            </p>
                        )}
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
