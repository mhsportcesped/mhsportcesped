import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  return (
    <div className="group bg-card h-full flex flex-col rounded-[2rem] border-2 border-border/50 overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300">
      <Link to={`/producto/${product.slug}`} className="block aspect-square overflow-hidden relative shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {product.category === "al-corte" && (
            <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg">Al Corte</span>
            </div>
        )}
      </Link>
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
            <Link to={`/producto/${product.slug}`}>
            <h3 className="font-black italic text-lg text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">{product.name}</h3>
            </Link>
            <p className="text-sm font-medium text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{product.description}</p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <span className="text-2xl font-black italic text-primary">
            {product.category === 'al-corte' ? 'Desde ' : ''}{product.price.toFixed(2)} €
          </span>
          <Button asChild className="w-full rounded-xl font-black italic shadow-md shadow-primary/10 hover:scale-[1.02] transition-transform">
             <Link to={`/producto/${product.slug}`}>Seleccionar opciones</Link>
          </Button>
          {(product.category === "al-corte" || (product.variants && product.variants.length > 0)) && (
            <p className="text-[10px] text-muted-foreground italic text-center -mt-2">
                Este producto tiene múltiples variantes. Las opciones se pueden elegir en la página de producto.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
