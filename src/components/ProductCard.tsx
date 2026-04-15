import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/producto/${product.slug}`} className="block aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          width={400}
          height={400}
        />
      </Link>
      <div className="p-4">
        <Link to={`/producto/${product.slug}`}>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-primary">{product.price.toFixed(2)} €/m²</span>
          <Button size="sm" onClick={() => addItem(product)} className="gap-1">
            <ShoppingCart className="h-4 w-4" /> Añadir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
