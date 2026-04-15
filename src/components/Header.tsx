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

          <Link to="/carrito" className="relative p-2 hover:bg-accent rounded-lg transition-colors">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="py-2 px-3 text-sm font-medium hover:bg-accent rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
