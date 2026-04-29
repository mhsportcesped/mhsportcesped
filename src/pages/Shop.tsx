import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, Filter, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCat);

  const filtered = useMemo(() => {
    let result = products;
    if (search) result = result.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));
    if (category !== "all") result = result.filter((p) => p.category === category);
    return result;
  }, [search, category]);

  const sections = [
    { 
      id: 'al-corte', 
      title: "CÉSPED ARTIFICIAL AL CORTE", 
      badge: "👉 Se vende por metros (precio por m²)",
      note: "📌 Es el mismo césped que en rollo, pero cortado a medida del cliente."
    },
    { 
      id: 'en-rollo', 
      title: "CÉSPED ARTIFICIAL EN ROLLO", 
      badge: "👉 Rollos completos (más baratos por cantidad)",
      note: "📌 Los rollos son ideales para jardines grandes, instalaciones deportivas u obras profesionales."
    },
    { 
      id: 'complementos', 
      title: "COMPLEMENTOS", 
      badge: "👉 Todo lo necesario para montar y fijar el césped",
      note: "🧴 Adhesivos, ✂️ Herramientas y 🌿 Base para el terreno."
    }
  ];

  return (
    <main className="py-12 md:py-20 animate-in fade-in duration-700 bg-muted/20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="space-y-2">
            <h1 className="text-5xl font-black tracking-tight italic text-primary uppercase">TIENDA MH SPORT</h1>
            <p className="text-xl font-bold">Todo lo que necesitas para tu proyecto verde.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button asChild variant="outline" className="rounded-xl h-14 px-8 border-primary text-primary font-black italic hover:bg-primary/5 shadow-sm">
              <Link to="/contacto">PIDE MUESTRAS GRATUITAS</Link>
            </Button>
            <Button asChild className="rounded-xl h-14 px-8 bg-primary font-black italic shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              <Link to="/instalacion">PRESUPUESTO INSTALACIÓN</Link>
            </Button>
          </div>
        </div>

        {/* Search and Quick Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-20">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="¿Qué buscas? (Ej: Kiev, 40mm, Cola...)" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
              className="pl-12 h-16 rounded-2xl border-border bg-card shadow-sm text-lg focus:ring-primary" 
            />
          </div>
          <div className="flex items-center gap-2 p-1 bg-white border rounded-2xl shadow-sm overflow-x-auto whitespace-nowrap">
            <button onClick={() => setCategory('all')} className={`px-6 py-3 rounded-xl font-bold transition-all ${category === 'all' ? 'bg-primary text-white shadow-lg' : 'hover:bg-accent'}`}>Todos</button>
            <button onClick={() => setCategory('al-corte')} className={`px-6 py-3 rounded-xl font-bold transition-all ${category === 'al-corte' ? 'bg-primary text-white shadow-lg' : 'hover:bg-accent'}`}>Al Corte</button>
            <button onClick={() => setCategory('en-rollo')} className={`px-6 py-3 rounded-xl font-bold transition-all ${category === 'en-rollo' ? 'bg-primary text-white shadow-lg' : 'hover:bg-accent'}`}>Rollos</button>
            <button onClick={() => setCategory('complementos')} className={`px-6 py-3 rounded-xl font-bold transition-all ${category === 'complementos' ? 'bg-primary text-white shadow-lg' : 'hover:bg-accent'}`}>Complementos</button>
          </div>
        </div>

        {/* Product Sections */}
        <div className="space-y-24">
          {sections.map(section => {
            const sectionProducts = filtered.filter(p => p.category === section.id);
            if (sectionProducts.length === 0 && category !== 'all' && category !== section.id) return null;
            if (sectionProducts.length === 0 && search) return null;

            return (
              <section key={section.id} className="space-y-8 animate-in slide-in-from-bottom-5 duration-700">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-4 border-primary/10 pb-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-black italic text-foreground tracking-tight">{section.title}</h2>
                    <p className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-lg text-sm">{section.badge}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium max-w-md md:text-right">{section.note}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                  {sectionProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>

                {sectionProducts.length === 0 && (
                  <p className="text-center py-12 text-muted-foreground italic">No se han encontrado productos en esta sección.</p>
                )}
              </section>
            );
          })}
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

export default Shop;
