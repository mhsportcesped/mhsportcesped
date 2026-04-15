import { Instagram, Facebook, Camera } from "lucide-react";
import galeriaJardin from "@/assets/galeria-jardin.jpg";
import galeriaTerr from "@/assets/galeria-terraza.jpg";
import galeriaPisc from "@/assets/galeria-piscina.jpg";
import galeriaDep from "@/assets/galeria-deportiva.jpg";

const photos = [
  { url: galeriaJardin, title: "Jardín Familiar MH" },
  { url: galeriaTerr, title: "Terraza Ático" },
  { url: galeriaPisc, title: "Piscina Premium" },
  { url: galeriaDep, title: "Instalación Deportiva" },
  { url: "https://images.unsplash.com/photo-1558905648-93e18f20a6a2?auto=format&fit=crop&q=80&w=800", title: "Entrada Vivienda" },
  { url: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&q=80&w=800", title: "Parque Infantil" },
  { url: "https://images.unsplash.com/photo-1510156411330-74673c683b56?auto=format&fit=crop&q=80&w=800", title: "Patio con Encanto" },
  { url: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800", title: "Zona Relax" },
];

const Gallery = () => {
  return (
    <main className="py-12 md:py-20 animate-in fade-in duration-700">
      <div className="container">
        {/* Top Social Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 bg-muted/50 p-6 md:p-10 rounded-3xl border border-border">
          <div className="space-y-1 text-center md:text-left">
            <h1 className="text-4xl font-black italic text-primary">NUESTROS TRABAJOS</h1>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Transformando espacios en toda España</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold italic hidden sm:inline">Síguenos en nuestras redes:</span>
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-tr from-pink-500 to-yellow-500 text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform">
              <Instagram className="h-5 w-5" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform">
              <Facebook className="h-5 w-5" /> Facebook
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {photos.map((photo, i) => (
            <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-white font-black italic text-xl tracking-tight">{photo.title}</span>
                <span className="text-primary font-bold text-sm flex items-center gap-2 mt-2">
                  <Camera className="h-4 w-4" /> VER PROYECTO
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary text-primary-foreground rounded-[3rem] text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black italic">¿Quieres ver más?</h2>
          <p className="text-xl opacity-90 font-medium">Actualizamos nuestros trabajos semanalmente en nuestras redes sociales oficiales.</p>
          <div className="pt-4">
            <a href="/contacto" className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-white text-primary font-black italic text-lg shadow-xl hover:bg-white/90 transition-colors">
              SOLICITAR PRESUPUESTO
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
