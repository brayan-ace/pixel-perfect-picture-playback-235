import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import trail from "@/assets/sled-trail.jpg";
import { CATEGORIES, MANUFACTURERS, PRODUCTS, productName, type Category } from "@/lib/inventory";
import { BRAND } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHero } from "@/components/site/Sections";

type SearchParams = { category?: Category };

export const Route = createFileRoute("/collection/")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    category: CATEGORIES.includes(s.category as Category) ? (s.category as Category) : undefined,
  }),
  head: () => ({
    meta: [
      { title: `Our Collection — ${BRAND.short}` },
      { name: "description", content: "Browse snowmobiles by category and manufacturer. Search, filter and sort the full collection." },
      { property: "og:title", content: `Snowmobile Collection — ${BRAND.short}` },
      { property: "og:description", content: "Mountain, trail, touring, sport and utility snowmobiles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Collection,
});

type Sort = "featured" | "az" | "za" | "price-asc" | "price-desc";

function Collection() {
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/collection/" });
  const [q, setQ] = useState("");
  const [maker, setMaker] = useState<string>("all");
  const [sort, setSort] = useState<Sort>("featured");

  const setCategory = (c?: Category) => navigate({ search: { category: c }, replace: true, resetScroll: false });

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    let r = PRODUCTS.filter(
      (p) =>
        (!category || p.category === category) &&
        (maker === "all" || p.manufacturer === maker) &&
        (!term || `${productName(p)} ${p.category}`.toLowerCase().includes(term)),
    );
    const price = (n?: number, dir = 1) => (n === undefined ? Infinity : n * dir);
    if (sort === "az") r = [...r].sort((a, b) => a.model.localeCompare(b.model));
    if (sort === "za") r = [...r].sort((a, b) => b.model.localeCompare(a.model));
    if (sort === "price-asc") r = [...r].sort((a, b) => price(a.price) - price(b.price));
    if (sort === "price-desc") r = [...r].sort((a, b) => price(b.price, -1) - price(a.price, -1));
    return r;
  }, [q, category, maker, sort]);

  const chip = (active: boolean) =>
    cn(
      "h-10 rounded-sm border px-4 text-xs font-bold uppercase tracking-[0.18em] transition-colors",
      active ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground/75 hover:border-foreground/50 hover:text-foreground",
    );
  const field = "h-12 rounded-sm border border-input bg-card px-4 text-sm text-foreground focus:border-primary focus:outline-none";

  return (
    <>
      <PageHero eyebrow="Our collection" title="Find your next ride." image={trail}>
        Search and filter every snowmobile we feature. Listings below are samples until real inventory is added.
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="sticky top-20 z-30 -mx-5 border-b border-border bg-background/90 px-5 py-5 backdrop-blur-xl md:mx-0 md:rounded-md md:border md:px-5">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
            <label className="relative">
              <span className="sr-only">Search snowmobiles</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search model, manufacturer…" className={cn(field, "w-full pl-11")} />
            </label>
            <label>
              <span className="sr-only">Manufacturer</span>
              <select value={maker} onChange={(e) => setMaker(e.target.value)} className={cn(field, "w-full")}>
                <option value="all">All manufacturers</option>
                {MANUFACTURERS.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </label>
            <label>
              <span className="sr-only">Sort</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className={cn(field, "w-full")}>
                <option value="featured">Featured</option>
                <option value="az">Model A–Z</option>
                <option value="za">Model Z–A</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
              </select>
            </label>
          </div>
          <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Category">
            <button className={chip(!category)} onClick={() => setCategory(undefined)}>All</button>
            {CATEGORIES.map((c) => (
              <button key={c} className={chip(category === c)} onClick={() => setCategory(c)} aria-pressed={category === c}>{c}</button>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{list.length} {list.length === 1 ? "snowmobile" : "snowmobiles"}</p>
        {list.length ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="mt-6 rounded-md border border-dashed border-border p-16 text-center">
            <p className="font-display text-3xl font-bold uppercase">No matches</p>
            <button
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary"
              onClick={() => { setQ(""); setMaker("all"); setCategory(undefined); }}
            >
              <X className="h-4 w-4" /> Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
