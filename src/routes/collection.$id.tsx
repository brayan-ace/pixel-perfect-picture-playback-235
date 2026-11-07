import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { formatPrice, getProduct, PRODUCTS, productName } from "@/lib/inventory";
import { BRAND } from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/site/Buttons";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/collection/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${productName(p)} — ${BRAND.short}` : `Snowmobile not found — ${BRAND.short}`;
    const desc = p ? `${p.category} snowmobile. ${p.description}`.slice(0, 155) : "This snowmobile is not available.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(p ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-5 pt-20 text-center">
      <h1 className="text-5xl font-extrabold uppercase">Snowmobile not found</h1>
      <Link to="/collection" className="text-primary">Back to collection</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const name = productName(p);
  const related = PRODUCTS.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8">
        <Link to="/collection" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Collection
        </Link>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-md border border-border">
              <img key={active} src={p.images[active]} alt={`${name} — image ${active + 1}`} width={1280} height={960} className="aspect-[4/3] w-full object-cover animate-slow-zoom" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {p.images.map((img, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Show image ${i + 1}`} className={cn("overflow-hidden rounded-sm border-2 transition-all", i === active ? "border-primary" : "border-transparent opacity-60 hover:opacity-100")}>
                  <img src={img} alt="" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-sm bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">{p.category}</span>
              <span className="rounded-sm border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Sample listing</span>
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">{p.manufacturer}</p>
            <h1 className="mt-2 text-6xl font-extrabold uppercase leading-[0.9]">{p.model}</h1>
            {p.price !== undefined && <p className="mt-5 text-3xl font-semibold text-primary">{formatPrice(p.price)}</p>}
            {p.availability && <p className="mt-2 text-sm text-ice">● {p.availability}</p>}
            <p className="mt-6 leading-relaxed text-muted-foreground">{p.description}</p>

            <WhatsAppButton product={name} size="lg" className="mt-8 w-full">Inquire on WhatsApp</WhatsAppButton>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              {p.price === undefined ? "Price on request — " : ""}Message us for availability and details.
            </p>

            <div className="mt-10 border-t border-border pt-6">
              <h2 className="eyebrow">Specifications</h2>
              {p.specs?.length ? (
                <dl className="mt-4 divide-y divide-border">
                  {p.specs.map((s) => (
                    <div key={s.label} className="flex justify-between py-3 text-sm">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="font-semibold">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground">Specifications will be published once confirmed. Ask our team for details.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-4xl font-extrabold uppercase">You may also like</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <ProductCard key={r.id} product={r} />)}
          </div>
        </div>
      </section>
    </>
  );
}
