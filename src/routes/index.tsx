import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import mountain from "@/assets/sled-mountain.jpg";
import { PRODUCTS } from "@/lib/inventory";
import { BRAND } from "@/lib/site";
import { ProductCard } from "@/components/site/ProductCard";
import { btn, WhatsAppButton } from "@/components/site/Buttons";
import { Reveal } from "@/components/site/Reveal";
import { AboutBlock, Faq, FinalCta, Process, SectionHeading, WhyUs } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BRAND.short} — Premium Snowmobile Dealership` },
      { name: "description", content: "Discover powerful snowmobiles for mountain, trail, touring, sport and utility riding. Explore the collection and chat with our team on WhatsApp." },
      { property: "og:title", content: `${BRAND.short} — Built for the Extraordinary` },
      { property: "og:description", content: "Premium snowmobiles for those who ride further. Explore the collection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img src={hero} alt="Snowmobile carving through deep powder in the mountains at dusk" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover animate-slow-zoom" />
        <div className="absolute inset-0 bg-side-overlay" />
        <div className="absolute inset-0 bg-hero-overlay opacity-70" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-20 md:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Premium snowmobile dealership</p>
            <h1 className="mt-6 text-7xl font-extrabold uppercase leading-[0.85] sm:text-8xl lg:text-[9rem]">
              Built for the <span className="text-ice">extraordinary.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              Discover powerful snowmobiles designed to take your winter adventures further. Explore our collection and find your next ride.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/collection" className={btn({ size: "lg" })}>
                Explore Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <WhatsAppButton size="lg" variant="outline">Chat with our team</WhatsAppButton>
            </div>
          </Reveal>
        </div>
        <a href="#featured" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-foreground/60" aria-label="Scroll to featured snowmobiles">
          Scroll
          <span className="flex h-10 w-6 justify-center rounded-full border border-foreground/40 pt-2">
            <span className="h-2 w-1 rounded-full bg-foreground animate-scroll-dot" />
          </span>
        </a>
      </section>

      <section id="featured" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Featured snowmobiles" title="The collection.">
            Sample listings shown — real inventory will be added soon.
          </SectionHeading>
          <Link to="/collection" className={btn({ variant: "outline" })}>
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <WhyUs />
      <Process />
      <AboutBlock />
      <Faq />
      <FinalCta image={mountain} />
    </>
  );
}
