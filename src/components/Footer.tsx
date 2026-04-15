import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo_mh_sport_cesped.webp";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <img src={logo} alt="MH Sport Césped" className="h-12 w-auto mb-4 brightness-0 invert" />
        <p className="text-sm text-background/70">Especialistas en césped artificial y accesorios profesionales. Calidad garantizada y asesoramiento experto.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Empresa</h4>
        <div className="flex flex-col gap-2 text-sm text-background/70">
          <Link to="/tienda" className="hover:text-background transition-colors">Tienda</Link>
          <Link to="/instalacion" className="hover:text-background transition-colors">Instalación</Link>
          <Link to="/calculadora" className="hover:text-background transition-colors">Calculadora m²</Link>
          <Link to="/sobre-nosotros" className="hover:text-background transition-colors">Sobre Nosotros</Link>
          <Link to="/contacto" className="hover:text-background transition-colors">Contacto</Link>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Legal</h4>
        <div className="flex flex-col gap-2 text-sm text-background/70">
          <Link to="/politica-privacidad" className="hover:text-background transition-colors">Política de Privacidad</Link>
          <Link to="/politica-cookies" className="hover:text-background transition-colors">Política de Cookies</Link>
          <Link to="/terminos-condiciones" className="hover:text-background transition-colors">Términos y Condiciones</Link>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Contacto</h4>
        <div className="flex flex-col gap-3 text-sm text-background/70">
          <a href="tel:967179172" className="flex items-center gap-2 hover:text-background"><Phone className="h-4 w-4" /> 967 179 172</a>
          <a href="mailto:info@mhsportcesped.es" className="flex items-center gap-2 hover:text-background"><Mail className="h-4 w-4" /> info@mhsportcesped.es</a>
          <div className="flex items-start gap-2 font-medium">
            <MapPin className="h-4 w-4 shrink-0 mt-1" /> 
            <span>Polígono "San Rafael" C/Malta N⁰12-13,<br /> Hellín (Albacete), España</span>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
        <div className="space-y-1 text-center md:text-left">
          <p>© {new Date().getFullYear()} MH Sport Césped. Todos los derechos reservados.</p>
          <p className="text-[10px] uppercase tracking-widest font-bold text-background/30">Página creada por BAIRON MEDINA ASENCIO</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/share/1DyHGTDUJ2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-sm" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/mhsport.cesped.artificial/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-background/5 flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-sm" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
