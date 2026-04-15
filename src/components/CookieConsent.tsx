import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] z-[100] animate-in slide-in-from-bottom-10 duration-700">
      <div className="bg-card border-2 border-primary/20 p-6 rounded-[2rem] shadow-2xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Cookie className="h-6 w-6" />
          </div>
          <h4 className="font-bold italic">Aviso de Cookies</h4>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Utilizamos cookies propias para mejorar tu experiencia y entregarte productos de calidad. Al navegar, aceptas nuestra <Link to="/politica-cookies" className="text-primary font-bold hover:underline">Política de Cookies</Link>.
        </p>
        <div className="flex gap-3">
          <Button onClick={accept} className="flex-1 rounded-xl h-11 font-black italic shadow-lg shadow-primary/20">
            ACEPTAR TODO
          </Button>
          <Button variant="outline" asChild className="rounded-xl h-11">
            <Link to="/politica-cookies">CONFIGURAR</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
