import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUp, Heart, Clock, Star, Leaf, Flame, ShieldCheck, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cesped.jpg";
import durabilidadImg from "@/assets/test-durabilidad.png";
import imgEmpresa from "@/assets/empresa-exterior.jpg";
import { useEffect, useState } from "react";

const trustBadges = [
  { icon: Heart, title: "Ideal para familias", desc: "Único fabricante con modelos certificados para niños y mascotas." },
  { icon: Clock, title: "Uso diario", desc: "Un aspecto siempre perfecto frente a la intensa actividad." },
  { icon: Star, title: "Máximo realismo", desc: "Diseñado para no diferenciarse del grass natural." },
  { icon: Leaf, title: "Siempre verde", desc: "Tu jardín durará más de 10 años sin apenas mantenimiento." },
];

const Index = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <img src={heroImg} alt="Césped artificial instalado" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] italic uppercase">
              Césped Artificial <br /><span className="text-primary italic">Profesional</span>
            </h1>
            <p className="mt-6 text-xl text-white/90 font-medium">
              Descubre nuestra gama de césped artificial certificado para jardines, terrazas y espacios exteriores de alta intensidad.
            </p>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 bg-muted/50 border-y border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustBadges.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center gap-3">
              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-border">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-sm md:text-base italic uppercase">{b.title}</h3>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed px-4">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background px-4 sm:px-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic text-primary uppercase leading-tight">MH Sport: <br />Tu confianza, <br />nuestra sede.</h2>
                <p className="text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
                  Contamos con más de 20 años de experiencia y unas instalaciones equipadas con la última tecnología para gestionar tu proyecto de principio a fin.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="rounded-xl font-black italic px-8 h-14 shadow-lg shadow-primary/20">
                  <Link to="/sobre-nosotros">CONOCE NUESTRA EMPRESA</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-xl font-bold px-8 h-14">
                  <Link to="/contacto">VISÍTANOS EN HELLÍN</Link>
                </Button>
              </div>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] rotate-2 group-hover:rotate-0 transition-transform duration-700" />
              <img 
                src={imgEmpresa} 
                alt="Sede Central MH Sport" 
                className="relative rounded-[2.5rem] shadow-2xl border-4 border-white transition-all duration-700 group-hover:scale-[1.02]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Durability Detail */}
      <section className="py-24 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/15 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
              <img src={durabilidadImg} alt="Test de durabilidad" className="relative rounded-[2rem] shadow-2xl border border-white/20 transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] italic text-primary uppercase underline decoration-primary/30 underline-offset-[12px]">
                  Testado para que dure más de 10 años
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  La seguridad y la durabilidad de todos nuestros modelos están certificadas por laboratorios independientes. Nuestras fibras no cambian de color o consistencia tras décadas de uso intenso.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-lg font-black italic uppercase text-foreground">
                    <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600"><Flame className="h-6 w-6" /></div>
                    No inflamable
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Clasificación “B fl-S1” en la Norma EN 13501-1. Máxima vanguardia en seguridad contra el fuego.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-lg font-black italic uppercase text-foreground">
                    <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600"><ShieldCheck className="h-6 w-6" /></div>
                    Alta calidad
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Índice de resbaladicidad “Clase 3”, la certificación más exigente en construcción y seguridad pública.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Resistance */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container text-center max-w-4xl mx-auto relative z-10">
          <div className="h-20 w-20 rounded-[2rem] bg-white/20 flex items-center justify-center mx-auto mb-8 animate-bounce transition-all duration-1000">
            <Droplets className="h-10 w-10" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase">¿Llueve mucho?</h2>
          <p className="text-2xl md:text-4xl font-bold leading-tight">
            Nuestro césped drena hasta <span className="bg-white text-primary px-4 py-1 rounded-xl mx-2 shadow-lg">60 litros</span> por metro cuadrado cada minuto.
          </p>
          <div className="mt-12 w-24 h-1 bg-white/30 mx-auto rounded-full" />
          <p className="mt-10 text-lg opacity-90 italic max-w-2xl mx-auto">
            "Máxima tranquilidad frente a tormentas y climatología extrema. Un jardín siempre seco y listo para disfrutar."
          </p>
        </div>
      </section>

      {/* Floating Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 h-14 w-14 rounded-2xl bg-primary text-white shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </main>
  );
};

export default Index;
