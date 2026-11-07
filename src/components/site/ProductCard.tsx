import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatPrice, productName, type Product } from "@/lib/inventory";
import { btn, WhatsAppButton } from "./Buttons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
      <Link to="/collection/$id" params={{ id: product.id }} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={product.images[0]}
          alt={productName(product)}
          loading="lazy"
          width={1280}
          height={960}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-card-overlay" />
        <span className="absolute left-4 top-4 rounded-sm bg-background/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur">
          {product.category}
        </span>
        <span className="absolute right-4 top-4 rounded-sm border border-foreground/20 bg-background/60 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground backdrop-blur">
          Sample listing
        </span>
        {product.availability && (
          <span className="absolute bottom-4 left-4 text-xs font-semibold text-ice">● {product.availability}</span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{product.manufacturer}</p>
        <h3 className="mt-1 text-3xl font-bold uppercase leading-none">{product.model}</h3>
        {product.price !== undefined && <p className="mt-3 text-lg font-semibold text-primary">{formatPrice(product.price)}</p>}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-6">
          <Link to="/collection/$id" params={{ id: product.id }} className={btn({ variant: "outline", size: "sm" })}>
            Details <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <WhatsAppButton product={productName(product)} size="sm">
            Inquire
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
