import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Instagram, Facebook } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo_mh_sport_cesped.webp";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/tienda", label: "Tienda" },
  { to: "/calculadora", label: "Calculadora m²" },
  { to: "/instalacion", label: "Instalación" },
  { to: "/sobre-nosotros", label: "Nosotros" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MH Sport Césped" className="h-10 md:h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 pr-2 border-r border-border mr-1">
            <a href="https://www.instagram.com/mhsport.cesped.artificial/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/share/1DyHGTDUJ2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          <Link to="/carrito" className="relative p-3 hover:bg-accent rounded-xl transition-colors" aria-label="Carrito de compra">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="lg:hidden p-3 rounded-xl hover:bg-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - accesible y amplio para personas mayores */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background shadow-xl">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-4 px-4 text-lg font-semibold text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-colors border-b border-border/30 last:border-0 flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            {/* Teléfono de acceso rápido en móvil */}
            <a
              href="tel:967179172"
              className="mt-3 py-4 px-4 text-lg font-bold text-primary bg-primary/10 rounded-xl flex items-center gap-3"
            >
              📞 967 179 172
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
