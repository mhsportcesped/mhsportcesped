import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-card h-full flex flex-col rounded-3xl border border-border/40 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300">
      <Link to={`/producto/${product.slug}`} className={`block aspect-[4/3] overflow-hidden relative shrink-0 ${product.category === 'complementos' ? 'bg-white' : ''}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full ${product.category === 'complementos' ? 'object-contain p-4' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
          loading="lazy"
        />
        {product.category === "al-corte" && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg">Al Corte</span>
          </div>
        )}
      </Link>
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          <Link to={`/producto/${product.slug}`}>
            <h3 className="font-bold italic text-base text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2 uppercase">
              {product.name}
            </h3>
          </Link>
        </div>
        <div className="flex flex-col gap-1 mt-1">
          {product.category === 'en-rollo' && product.rollDimensions && (
            <span className="text-xs font-black italic opacity-60">
              Medida {product.rollDimensions}
            </span>
          )}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black italic text-primary">
              {product.category === 'al-corte' ? 'Desde ' : ''}{formatPrice(product.price)} €
            </span>
          </div>
          {product.category === 'en-rollo' && product.m2Price && (
            <span className="text-[9px] font-bold italic text-muted-foreground">
              ({formatPrice(product.m2Price)} € / m²)
            </span>
          )}
          {product.category === 'al-corte' && (
            <span className="text-[9px] font-bold italic text-muted-foreground">
              el m²
            </span>
          )}
          {/* Botón más compacto */}
          <Button asChild size="sm" className="w-full rounded-lg font-bold italic shadow-sm hover:scale-[1.02] transition-transform text-sm h-10 mt-1">
            <Link to={`/producto/${product.slug}`}>Ver detalles</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
