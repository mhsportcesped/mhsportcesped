import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <main className="py-20 animate-in fade-in duration-500">
        <div className="container text-center space-y-8">
          <div className="bg-muted h-24 w-24 rounded-[2rem] flex items-center justify-center mx-auto text-muted-foreground/30 shadow-inner">
            <ShoppingBag className="h-12 w-12" />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-black italic uppercase text-primary">Tu carrito está vacío</h1>
            <p className="text-muted-foreground max-w-sm mx-auto font-medium">Parece que aún no has añadido nada a tu selección de césped artificial.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-xl px-10 h-14 font-black italic shadow-xl shadow-primary/20">
              <Link to="/tienda">IR A LA TIENDA</Link>
            </Button>
            <Button asChild variant="ghost" className="rounded-xl px-8 h-14 font-bold text-muted-foreground">
              <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-8 md:py-20 animate-in fade-in duration-500 bg-muted/10">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-1">
            <h1 className="text-5xl font-black italic uppercase tracking-tight text-primary">Tu Selección</h1>
            <p className="text-muted-foreground font-bold italic">Tienes {totalItems} {totalItems === 1 ? 'producto' : 'productos'} listos para renovar tu espacio.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild className="rounded-xl h-11 border-primary/20 hover:border-primary text-primary font-bold">
              <Link to="/"><ArrowLeft className="h-4 w-4 mr-2" /> Inicio</Link>
            </Button>
            <Button variant="ghost" asChild className="rounded-xl h-11 font-bold text-muted-foreground hover:text-primary">
              <Link to="/tienda">Seguir comprando</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* List */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex flex-col sm:flex-row gap-8 bg-card border-2 border-primary/5 rounded-[2.5rem] p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                <div className="w-full sm:w-40 h-40 rounded-2xl overflow-hidden border-2 border-primary/5 shrink-0 bg-muted/20">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start gap-4">
                      <Link to={`/producto/${item.product.slug}`} className="text-2xl font-black italic tracking-tight hover:text-primary transition-colors line-clamp-1 uppercase">{item.product.name}</Link>
                      <button className="h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-destructive rounded-xl transition-all shadow-sm" onClick={() => removeItem(item.product.id)}>
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-md">{item.product.category.replace('-', ' ')}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-6 mt-8">
                    <div className="flex items-center bg-muted/50 rounded-xl overflow-hidden p-1">
                      <button className="h-10 w-10 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-lg transition-all" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}><Minus className="h-4 w-4" /></button>
                      <span className="w-10 text-center font-black italic text-lg">{item.quantity}</span>
                      <button className="h-10 w-10 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-lg transition-all" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}><Plus className="h-4 w-4" /></button>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">Precio total</p>
                      <p className="text-3xl font-black italic text-primary">{(item.product.price * item.quantity).toFixed(2)} €</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border-2 border-primary/20 p-8 md:p-10 rounded-[3rem] sticky top-24 shadow-2xl space-y-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">Resumen compra</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold uppercase italic opacity-60">
                  <span>Productos</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex justify-between text-sm font-bold uppercase italic opacity-60">
                  <span>Envío</span>
                  <span className="text-primary">Gratis</span>
                </div>
                <div className="h-px bg-border my-6" />
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-black italic uppercase">Total</span>
                  <span className="text-4xl font-black italic text-primary">{totalPrice.toFixed(2)} €</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <Button size="lg" className="w-full rounded-2xl h-16 font-black italic text-xl shadow-xl shadow-primary/20 group uppercase overflow-hidden" asChild>
                    <Link to="/checkout" className="flex items-center justify-center gap-3">
                    COMPRAR AHORA <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </Button>
                
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-black opacity-60">
                    Entrega segura certificada <br /> 3-5 días laborables
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
