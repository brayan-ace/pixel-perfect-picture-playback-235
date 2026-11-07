import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CATEGORIES, PRODUCTS, type Category } from "@/lib/inventory";
import { BRAND } from "@/lib/site";
import { PageHero } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";

const BLURB: Record<Category, string> = {
  Mountain: "Long tracks and light chassis for deep powder and steep terrain.",
  Trail: "Agile, comfortable machines for groomed trails and long days out.",
  Touring: "Two-up comfort, storage and stability for longer journeys.",
  Sport: "Sharp handling and responsive power for spirited riding.",
  Utility: "Wide tracks and cargo capacity built for work in the snow.",
};

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: `Snowmobile Categories — ${BRAND.short}` },
      { name: "description", content: "Explore mountain, trail, touring, sport and utility snowmobiles." },
      { property: "og:title", content: `Categories — ${BRAND.short}` },
      { property: "og:description", content: "Choose the riding style that fits you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Categories,
});

function Categories() {
  return (
    <>
      <PageHero eyebrow="Categories" title="Choose your terrain." image={hero} />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-2 md:px-8 lg:grid-cols-6">
        {CATEGORIES.map((c, i) => {
          const items = PRODUCTS.filter((p) => p.category === c);
          return (
            <Reveal key={c} delay={i * 80} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Link to="/collection" search={{ category: c }} className="group relative block aspect-[4/3] overflow-hidden rounded-md border border-border">
                <img src={items[0]?.images[0] ?? hero} alt={`${c} snowmobile`} loading="lazy" width={1280} height={960} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-card-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/70">{items.length} listed</p>
                      <h2 className="text-5xl font-extrabold uppercase">{c}</h2>
                      <p className="mt-2 max-w-sm text-sm text-foreground/80">{BLURB[c]}</p>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </section>
    </>
  );
}
