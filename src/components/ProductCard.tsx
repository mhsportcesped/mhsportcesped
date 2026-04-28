import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-card h-full flex flex-col rounded-[2rem] border-2 border-border/50 overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300">
      <Link to={`/producto/${product.slug}`} className={`block aspect-square overflow-hidden relative shrink-0 ${product.category === 'complementos' ? 'bg-white' : ''}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full ${product.category === 'complementos' ? 'object-contain p-8' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
          loading="lazy"
        />
        {product.category === "al-corte" && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-lg">Al Corte</span>
          </div>
        )}
      </Link>
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <Link to={`/producto/${product.slug}`}>
            <h3 className="font-black italic text-xl text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
              {product.name}
            </h3>
          </Link>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <span className="text-3xl font-black italic text-primary">
            {product.category === 'al-corte' ? 'Desde ' : ''}{product.price.toFixed(2)} €
          </span>
          {/* Botón grande y fácil de pulsar */}
          <Button asChild size="lg" className="w-full rounded-xl font-black italic shadow-md shadow-primary/10 hover:scale-[1.02] transition-transform text-base h-14">
            <Link to={`/producto/${product.slug}`}>Ver producto</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
