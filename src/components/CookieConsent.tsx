import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX and perception of the animation
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[420px] z-[100] animate-in slide-in-from-bottom-10 fade-in duration-1000">
      <div className="bg-white/95 backdrop-blur-md border-2 border-primary/20 p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] space-y-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
            <Cookie className="h-7 w-7" />
          </div>
          <div className="space-y-0.5">
            <h4 className="font-black italic text-xl uppercase tracking-tighter">Tu Privacidad</h4>
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Configuración de Cookies</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed font-medium relative z-10">
          En MH Sport Césped utilizamos cookies para que tu experiencia sea premium. Al continuar, aceptas el uso de estas tecnologías para mejorar nuestro servicio.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 relative z-10 pt-2">
          <Button onClick={accept} className="flex-[2] rounded-2xl h-14 font-black italic text-lg shadow-xl shadow-primary/20 uppercase tracking-tight">
            ACEPTAR TODO
          </Button>
          <Button variant="outline" asChild className="flex-1 rounded-2xl h-14 font-bold border-2">
            <Link to="/politica-cookies">AJUSTES</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
