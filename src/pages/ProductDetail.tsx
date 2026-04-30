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
import { formatPrice } from "@/lib/utils";

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
        <h1 className="text-3xl font-black italic">Producto no encontrado</h1>
        <Button asChild className="rounded-xl px-10 h-14 font-black italic"><Link to="/tienda">Volver a la tienda</Link></Button>
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
              <img src={product.image} alt={product.name} className={`w-full h-full ${product.category === 'complementos' ? 'object-contain p-12' : 'object-cover'} group-hover:scale-110 transition-transform duration-1000`} />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg gap-2">Oficial</span>
              </div>
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {product.gallery.map((img, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform hover:border-primary/50 relative">
                    <img src={img} alt={`${product.name} galería ${i + 1}`} className={`w-full h-full ${product.category === 'complementos' ? 'object-contain p-2' : 'object-cover'}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <nav className="flex items-center gap-2 text-[10px] font-black tracking-widest text-muted-foreground opacity-60">
                <Link to="/tienda" className="hover:text-primary transition-colors">Tienda</Link>
                <span>/</span>
                <span className="text-primary">{product.category.replace('-', ' ')}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none">{product.name}</h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black italic text-primary">
                    {product.category === 'al-corte' && estimated > 0 ? formatPrice(estimated) : formatPrice(product.price)} €
                  </span>
                  <span className="text-lg text-muted-foreground font-black italic">
                    / {product.category === 'al-corte' ? (estimated > 0 ? `${sqm.toFixed(2).replace('.', ',')} m²` : 'm²') : (product.category === 'en-rollo' ? 'rollo completo' : 'unidad')}
                  </span>
                </div>
                {product.category === 'en-rollo' && product.m2Price && (
                  <p className="text-sm font-bold italic text-muted-foreground">
                    Precio m²: {formatPrice(product.m2Price)} € (Ahorro de 1€/m² vs corte)
                  </p>
                )}
                {product.category === 'en-rollo' && product.rollDimensions && (
                  <p className="text-sm font-black italic text-primary">
                    Medida del rollo: {product.rollDimensions}
                  </p>
                )}
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium line-clamp-3">
              {product.description.split('\n').filter(Boolean).find(p => p.length > 50 && p !== 'Descripción') || product.description.split('\n').filter(Boolean)[0]}
            </p>
            {product.category === 'al-corte' && (
                <p className="text-sm font-bold text-foreground">
                    El precio es por metro cuadrado. Su precio es de {formatPrice(product.price)} €/m².
                </p>
            )}

            {/* Configurator */}
            <div className="p-8 bg-card border-2 border-primary/10 rounded-[2.5rem] shadow-xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-3 relative z-10">
                  <label className="text-xs font-black tracking-widest text-muted-foreground italic">Seleccionar Variante</label>
                  <Select value={variant} onValueChange={setVariant}>
                    <SelectTrigger className="h-12 rounded-xl bg-background border-border font-bold shadow-sm">
                      <SelectValue placeholder="Elige una opción" />
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
                <div className="space-y-5 relative z-10 bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <div className="space-y-2">
                    <label className="text-xs font-black tracking-widest text-muted-foreground italic">Formato de corte (metros)</label>
                    <Select 
                        value={width && length ? `${width}x${length}` : ""} 
                        onValueChange={(val) => {
                            if (!val) { setWidth(""); setLength(""); return; }
                            const [w, l] = val.split('x');
                            setWidth(w);
                            setLength(l);
                        }}
                    >
                      <SelectTrigger className="h-12 rounded-xl bg-background border-border font-bold shadow-sm">
                        <SelectValue placeholder="Elige una opción" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {/* Generamos las opciones de 1x... y 2x... */}
                        {Array.from({length: 30}, (_, i) => i + 1).map(num => (
                          <SelectItem key={`1x${num}`} value={`1x${num}`} className="font-bold">1x{num}</SelectItem>
                        ))}
                        {Array.from({length: 26}, (_, i) => i + 5).map(num => (
                          <SelectItem key={`2x${num}`} value={`2x${num}`} className="font-bold">2x{num}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {width && length && (
                     <div className="flex justify-end">
                       <button onClick={() => { setWidth(""); setLength(""); }} className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors hover:underline">
                         Limpiar
                       </button>
                     </div>
                  )}

                  <div className="pt-4 space-y-4">
                    {sqm > 0 ? (
                        <div className="animate-in fade-in zoom-in-95 duration-300">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-sm font-bold text-muted-foreground">Total m²: <span className="text-foreground">{sqm.toFixed(2).replace('.', ',')} m²</span></span>
                            <span className="text-3xl font-black italic text-primary">{formatPrice(estimated)} €</span>
                        </div>
                        <p className="text-xs text-muted-foreground text-right">{formatPrice(product.price)} € / m²</p>
                        </div>
                    ) : (
                        <p className="text-3xl font-black italic text-muted-foreground/50 text-right">Desde {formatPrice(product.price)} €</p>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 pt-4 relative z-10">
                <div className="flex gap-4">
                  <div className="flex items-center bg-white rounded-xl overflow-hidden p-1 border-2 border-border shadow-sm">
                    <button className="h-12 w-12 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-all" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="h-4 w-4" /></button>
                    <span className="w-10 text-center font-black italic text-xl">{qty}</span>
                    <button className="h-12 w-12 flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-all" onClick={() => setQty(qty + 1)}><Plus className="h-4 w-4" /></button>
                  </div>
                  <Button 
                    size="lg" 
                    disabled={product.category === 'al-corte' && (!width || !length)}
                    className="flex-1 rounded-xl h-14 font-black italic text-[15px] sm:text-lg gap-3 shadow-xl shadow-primary/30 tracking-tight hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100" 
                    onClick={() => {
                      const finalProduct = { 
                        ...product, 
                        name: product.category === 'al-corte' ? `${product.name} (${width}x${length}m)` : product.name,
                        price: product.category === 'al-corte' ? product.price * sqm : product.price,
                        id: product.category === 'al-corte' ? `${product.id}-${width}x${length}` : product.id
                      };
                      addItem(finalProduct, qty);
                    }}
                  >
                    <ShoppingCart className="h-6 w-6" /> Añadir al carrito
                  </Button>
                </div>
                <div className="bg-primary/5 p-4 rounded-2xl border border-primary/20 flex items-center gap-3">
                  <Sun className="h-5 w-5 text-primary animate-pulse" />
                  <p className="text-xs font-black italic text-primary">¡Portes GRATIS en pedidos superiores a 300€!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Tabs */}
        <div className="mt-24">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="w-full justify-start border-b-2 border-primary/10 rounded-none bg-transparent h-auto p-0 gap-12">
              <TabsTrigger value="specs" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-6 font-black tracking-widest text-xs italic">Ficha Técnica</TabsTrigger>
              <TabsTrigger value="description" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-6 font-black tracking-widest text-xs italic">Descripción</TabsTrigger>
              <TabsTrigger value="installation" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-6 font-black tracking-widest text-xs italic">Instalación</TabsTrigger>
              <TabsTrigger value="shipping" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-6 font-black tracking-widest text-xs italic">Envíos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specs" className="py-12 animate-in fade-in duration-500">
              <div className="max-w-5xl mx-auto border-t-2 border-primary/20 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src={product.image} alt={`Ficha técnica ${product.name}`} className="w-full max-w-sm mx-auto rounded-3xl shadow-xl border border-border" />
                    </div>
                    <div>
                        {product.specs && Object.keys(product.specs).length > 0 ? (
                            <table className="w-full text-left border-collapse">
                                <tbody>
                                    {Object.entries(product.specs).map(([key, value]) => {
                                        const keyMap: Record<string, string> = {
                                            height: 'Altura',
                                            density: 'Densidad',
                                            baseMaterial: 'Material Base',
                                            uvResistance: 'Resistencia UV',
                                            pileHeight: 'Altura del hilo',
                                            backing: 'Soporte',
                                            yarn: 'Hilo'
                                        };
                                        const displayKey = keyMap[key] || key;
                                        return (
                                            <tr key={key} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                                                <th className="py-4 text-muted-foreground font-medium w-1/3 capitalize">{displayKey}</th>
                                                <td className="py-4 font-bold text-foreground italic">{value as React.ReactNode}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        ) : (
                        <p className="text-muted-foreground italic text-center py-12">No hay ficha técnica detallada para este producto.</p>
                        )}
                    </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="description" className="py-12 animate-in fade-in duration-500">
              <div className="max-w-4xl space-y-8 bg-white p-12 rounded-[3rem] border border-border/50 shadow-sm">
                <p className="text-2xl font-black italic text-primary underline decoration-primary/20 underline-offset-8 mb-8">A fondo</p>
                <div className="text-lg text-muted-foreground leading-relaxed font-medium space-y-6">
                  {product.description.split(/\n\s*\n/).filter(Boolean).map((block, i) => {
                     const paragraph = block.replace(/\n/g, ' ').trim();
                     if (paragraph.toLowerCase() === 'descripción') return null;
                     const isHeading = paragraph.length < 90 && (!paragraph.includes('.') || paragraph.endsWith(':'));
                     return (
                         <p key={i} className={isHeading ? "font-black italic text-foreground text-xl pt-4" : ""}>
                             {paragraph.replace(/&#8211;/g, '-').replace(/&#8212;/g, '-').replace(/&#215;/g, 'x').replace(/&euro;/g, '€')}
                         </p>
                     );
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="installation" className="py-12 animate-in fade-in duration-500">
                <div className="bg-primary/5 p-8 md:p-12 rounded-[3rem] border-2 border-primary/10 max-w-4xl">
                    <h3 className="text-2xl font-black italic mb-6 text-primary">Consejos de instalación</h3>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed">{product.installation}</p>
                </div>
            </TabsContent>

            <TabsContent value="shipping" className="py-12 animate-in fade-in duration-500">
                <div className="bg-muted/50 p-8 md:p-12 rounded-[3rem] border border-border max-w-4xl">
                    <h3 className="text-2xl font-black italic mb-6">Información de envío</h3>
                    <p className="text-xl text-muted-foreground font-medium leading-relaxed">{product.shipping}</p>
                </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Recommended */}
        {recommended.length > 0 && (
          <div className="mt-32 pt-20 border-t-2 border-primary/10">
            <h2 className="text-4xl font-black italic mb-16 text-center">Te puede interesar</h2>
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
