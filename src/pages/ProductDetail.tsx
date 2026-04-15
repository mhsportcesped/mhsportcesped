import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Minus, Plus, ShieldCheck, Ruler, Droplets, Sun, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [variant, setVariant] = useState(product?.variants?.[0] || "");

  if (!product) {
    return (
      <div className="container py-20 text-center space-y-4">
        <h1 className="text-3xl font-black italic uppercase">Producto no encontrado</h1>
        <Button asChild className="rounded-xl px-10 h-14 font-black italic"><Link to="/tienda">VOLVER A LA TIENDA</Link></Button>
      </div>
    );
  }

  const sqm = width && length ? parseFloat(width) * parseFloat(length) : 0;
  const estimated = sqm * product.price;
  const recommended = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <main className="py-8 md:py-20 animate-in fade-in duration-700 bg-muted/10">
      <div className="container">
        <div className="mb-12 flex items-center justify-between">
            <Button variant="ghost" asChild className="gap-2 font-bold rounded-xl h-11 text-muted-foreground hover:text-primary">
                <Link to="/tienda"><ArrowLeft className="h-4 w-4" /> Volver a Tienda</Link>
            </Button>
            <Button variant="outline" asChild className="gap-2 font-bold rounded-xl h-11 border-primary/20 text-primary hover:bg-primary/5">
                <Link to="/">Inicio</Link>
            </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <div className="space-y-6 sticky top-24">
            <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl bg-white relative group">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">CALIDAD PREMIUM</span>
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform">
                    <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">
                <Link to="/tienda" className="hover:text-primary transition-colors">Tienda</Link>
                <span>/</span>
                <span className="text-primary">{product.category.replace('-', ' ')}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none">{product.name}</h1>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black italic text-primary">{product.price.toFixed(2)} €</span>
                <span className="text-lg text-muted-foreground font-black italic">/ {product.category === 'al-corte' ? 'm²' : 'unidad'}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Configurator */}
            <div className="p-8 bg-card border-2 border-primary/10 rounded-[2.5rem] shadow-xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground italic">Seleccionar Variante</label>
                  <Select value={variant} onValueChange={setVariant}>
                    <SelectTrigger className="h-12 rounded-xl bg-background border-border font-bold">
                      <SelectValue placeholder="Variante" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.variants.map((v) => (
                        <SelectItem key={v} value={v} className="font-bold">{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {product.category === "al-corte" && (
                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground italic">Calculadora de Superficie</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase opacity-60 ml-1">Ancho (m)</span>
                      <Input type="number" min="0" step="0.1" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="0.0" className="h-12 rounded-xl bg-background border-border font-bold" />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase opacity-60 ml-1">Largo (m)</span>
                      <Input type="number" min="0" step="0.1" value={length} onChange={(e) => setLength(e.target.value)} placeholder="0.0" className="h-12 rounded-xl bg-background border-border font-bold" />
                    </div>
                  </div>
                  {sqm > 0 && (
                    <div className="p-5 bg-primary text-white rounded-2xl space-y-1 animate-in zoom-in-95 duration-300 shadow-lg shadow-primary/20">
                      <div className="flex justify-between items-center text-xs font-bold uppercase opacity-80">
                        <span>Total m²:</span>
                        <span>{sqm.toFixed(2)} m²</span>
                      </div>
                      <div className="flex justify-between items-center text-xl font-black italic">
                        <span>Subtotal:</span>
                        <span>{estimated.toFixed(2)} €</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <div className="flex items-center bg-muted/50 rounded-xl overflow-hidden p-1 border border-border">
                  <button className="h-12 w-12 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-lg transition-all" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="h-4 w-4" /></button>
                  <span className="w-10 text-center font-black italic text-xl">{qty}</span>
                  <button className="h-12 w-12 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-lg transition-all" onClick={() => setQty(qty + 1)}><Plus className="h-4 w-4" /></button>
                </div>
                <Button size="lg" className="flex-1 rounded-xl h-14 font-black italic text-lg gap-3 shadow-xl shadow-primary/30 uppercase" onClick={() => addItem(product, qty)}>
                  <ShoppingCart className="h-6 w-6" /> Añadir al carrito
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Tabs */}
        <div className="mt-24">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="w-full justify-start border-b-2 border-primary/10 rounded-none bg-transparent h-auto p-0 gap-12">
              <TabsTrigger value="specs" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-6 font-black uppercase tracking-widest text-xs italic">Ficha Técnica</TabsTrigger>
              <TabsTrigger value="description" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-6 font-black uppercase tracking-widest text-xs italic">Descripción</TabsTrigger>
              <TabsTrigger value="installation" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-6 font-black uppercase tracking-widest text-xs italic">Instalación</TabsTrigger>
              <TabsTrigger value="shipping" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-6 font-black uppercase tracking-widest text-xs italic">Envíos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specs" className="py-12 animate-in fade-in duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {product.specs ? (
                  <>
                    <div className="p-8 rounded-[2rem] border-2 border-primary/5 bg-card flex flex-col items-center text-center gap-4 group hover:border-primary/20 transition-colors">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><Ruler className="h-7 w-7" /></div>
                      <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1 italic">Altura Fibra</p>
                        <p className="text-2xl font-black italic text-primary">{product.specs.height}</p>
                      </div>
                    </div>
                    <div className="p-8 rounded-[2rem] border-2 border-primary/5 bg-card flex flex-col items-center text-center gap-4 group hover:border-primary/20 transition-colors">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><Droplets className="h-7 w-7" /></div>
                      <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1 italic">Drenaje</p>
                        <p className="text-2xl font-black italic text-primary">{product.specs.density}</p>
                      </div>
                    </div>
                    <div className="p-8 rounded-[2rem] border-2 border-primary/5 bg-card flex flex-col items-center text-center gap-4 group hover:border-primary/20 transition-colors">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><ShieldCheck className="h-7 w-7" /></div>
                      <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1 italic">Seguridad</p>
                        <p className="text-2xl font-black italic text-primary">{product.specs.baseMaterial}</p>
                      </div>
                    </div>
                    <div className="p-8 rounded-[2rem] border-2 border-primary/5 bg-card flex flex-col items-center text-center gap-4 group hover:border-primary/20 transition-colors">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><Sun className="h-7 w-7" /></div>
                      <div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1 italic">Rayos UV</p>
                        <p className="text-2xl font-black italic text-primary">{product.specs.uvResistance}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground col-span-full italic text-center py-12">No hay ficha técnica disponible para este producto.</p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="description" className="py-12 animate-in fade-in duration-500">
              <div className="max-w-4xl space-y-8">
                <p className="text-2xl font-black italic text-primary underline decoration-primary/20 underline-offset-8 mb-8 uppercase">A fondo</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                        {product.description} Este modelo ha sido diseñado bajo los estándares más exigentes de la industria, combinando fibras de última generación con una base reforzada de alta permeabilidad.
                    </p>
                    <div className="space-y-4">
                        {product.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl shadow-sm">
                            <div className="h-3 w-3 rounded-full bg-primary" />
                            <span className="font-bold italic uppercase text-sm">{f}</span>
                        </div>
                        ))}
                    </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="installation" className="py-12 animate-in fade-in duration-500">
                <div className="bg-primary/5 p-8 md:p-12 rounded-[3rem] border-2 border-primary/10 max-w-4xl">
                    <h3 className="text-2xl font-black italic uppercase mb-6 text-primary">Consejos de instalación</h3>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed">{product.installation}</p>
                </div>
            </TabsContent>

            <TabsContent value="shipping" className="py-12 animate-in fade-in duration-500">
                <div className="bg-muted/50 p-8 md:p-12 rounded-[3rem] border border-border max-w-4xl">
                    <h3 className="text-2xl font-black italic uppercase mb-6">Información de envío</h3>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed">{product.shipping}</p>
                </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Recommended */}
        {recommended.length > 0 && (
          <div className="mt-32 pt-20 border-t-2 border-primary/10">
            <h2 className="text-4xl font-black italic uppercase mb-16 text-center">Te puede interesar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {recommended.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}

        <div className="mt-24 pt-12 border-t flex justify-center">
            <Button variant="ghost" asChild className="gap-2 font-bold rounded-xl h-12">
                <Link to="/"><ArrowLeft className="h-4 w-4" /> Volver al Inicio</Link>
            </Button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
