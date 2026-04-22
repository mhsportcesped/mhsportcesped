import { Instagram, Facebook, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const galleryImages = import.meta.glob("@/assets/gallery/**/*.{png,jpg,jpeg,webp,JPG,PNG,JPEG,WEBP}", { eager: true });
const duplicatesToRemove = [
  "galeria.jpg",
  "galeria 1.jpeg",
  "galeria 1.jpg",
  "galeria mh.jpeg",
  "IMG_20200529_085709-scaled (1).jpg",
  "Imagen-de-WhatsApp-2025-03-20-a-las-12.32.53_cf8729f0.jpg",
  "Imagen-de-WhatsApp-2025-03-20-a-las-12.32.54_0a2a5daa.jpg",
  "Imagen-de-WhatsApp-2025-03-20-a-las-12.32.54_29e0a2a5.jpg",
  "Imagen-de-WhatsApp-2025-03-20-a-las-12.32.54_3a29996d.jpg",
  "Imagen-de-WhatsApp-2025-03-20-a-las-12.32.54_5530707e.jpg",
  "Imagen-de-WhatsApp-2025-03-20-a-las-12.32.54_77eac191.jpg",
  "Imagen-de-WhatsApp-2025-03-20-a-las-12.32.55_9d4892b4.jpg",
  "Imagen-de-WhatsApp-2025-03-20-a-las-12.32.55_d5697953.jpg",
  "Imagen-de-WhatsApp-2025-03-20-a-las-12.32.56_b1d4fdc7.jpg",
  "IMG-20200629-WA0008.jpg",
  "IMG_20240508_160832-scaled.jpg",
  "WhatsApp-Image-2022-01-12-at-12.17.15.jpeg",
  "WhatsApp-Image-2022-01-12-at-12.17.11-1.jpeg",
  "WhatsApp-Image-2022-08-30-at-1.44.03-PM.jpeg",
  "piscina-premium-tinaja-2.jpg"
];

const photos = Object.entries(galleryImages)
  .map(([path, img]: [string, any]) => ({
    url: img.default,
    filename: path.split('/').pop() || "",
  }))
  .filter((photo) => !duplicatesToRemove.includes(photo.filename))
  .map((photo, index) => ({
    ...photo,
    title: `Imagen ${index + 1}`
  }));

const Gallery = () => {
  const handleDownload = (url: string, title: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Iniciando descarga...");
  };

  return (
    <main className="py-12 md:py-20 animate-in fade-in duration-700 bg-muted/20 min-h-screen">
      <div className="container">
        {/* Top Social Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-border/50">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black italic text-primary leading-none tracking-tighter">Nuestros <br />Trabajos</h1>
            <p className="text-muted-foreground font-bold tracking-widest text-xs opacity-70">Ejemplos reales de instalaciones MH Sport</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.instagram.com/mhsport.cesped.artificial/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white font-black italic text-sm shadow-xl hover:scale-105 transition-all">
              <Instagram className="h-5 w-5" /> Instagram
            </a>
            <a href="https://www.facebook.com/share/1DyHGTDUJ2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#1877F2] text-white font-black italic text-sm shadow-xl hover:scale-105 transition-all">
              <Facebook className="h-5 w-5" /> Facebook
            </a>
          </div>
        </div>

        {/* Gallery Grid - Square Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {photos.map((photo, i) => (
            <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="space-y-4">
                    <p className="text-white font-black italic text-lg leading-tight tracking-tight">{photo.title}</p>
                    <div className="flex gap-2">
                        <Button 
                            variant="secondary" 
                            size="sm" 
                            onClick={() => handleDownload(photo.url, photo.title)}
                            className="flex-1 rounded-xl font-bold gap-2 text-xs h-10 shadow-lg"
                        >
                            <Camera className="h-4 w-4" /> Descargar
                        </Button>
                        <a 
                            href={photo.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-xl backdrop-blur-md transition-colors flex items-center justify-center h-10 w-10"
                        >
                            <Camera className="h-4 w-4" />
                        </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 p-12 md:p-20 bg-primary text-primary-foreground rounded-[3.5rem] text-center space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h2 className="text-4xl md:text-7xl font-black italic leading-none tracking-tighter">¿Listo para tu <br />propio jardín?</h2>
          <p className="text-xl md:text-2xl opacity-90 font-medium max-w-2xl mx-auto">Solicita tu presupuesto personalizado gratis y te asesoramos sin compromiso.</p>
          <div className="pt-4">
            <Button size="lg" asChild className="h-16 px-12 rounded-2xl bg-white text-primary font-black italic text-xl shadow-2xl hover:bg-white/90 transition-all hover:scale-105">
              <Link to="/contacto">Cuentanos tu proyecto</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
