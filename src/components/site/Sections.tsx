import { Link } from "@tanstack/react-router";
import { BadgeCheck, Headset, Compass, FileText, Truck, ChevronDown } from "lucide-react";
import showroom from "@/assets/showroom.jpg";
import mountain from "@/assets/sled-mountain.jpg";
import { BRAND } from "@/lib/site";
import { Reveal } from "./Reveal";
import { btn, WhatsAppButton } from "./Buttons";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-5xl font-extrabold uppercase leading-[0.95] md:text-6xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{children}</p>}
    </Reveal>
  );
}

const WHY = [
  { icon: BadgeCheck, t: "Quality-focused selection", d: "Every model we list is chosen with reliability and riding experience in mind." },
  { icon: Headset, t: "Customer assistance", d: "Speak directly with our team on WhatsApp for answers to your questions." },
  { icon: Compass, t: "Purchasing guidance", d: "We help you compare models and find the one that suits how you ride." },
  { icon: FileText, t: "Transparent information", d: "Clear product details — we only publish specifications and prices we can confirm." },
  { icon: Truck, t: "Delivery support", d: "Where delivery is offered, we'll talk you through the options available to you." },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
      <SectionHeading eyebrow="Why choose us" title="Confidence in every ride." />
      <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {WHY.map((w, i) => (
          <Reveal key={w.t} delay={i * 80} className="h-full">
            <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-card">
              <w.icon className="h-7 w-7 text-primary transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.5} />
              <h3 className="mt-8 text-2xl font-bold uppercase leading-tight">{w.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Discover", d: "Explore our snowmobile collection." },
  { n: "02", t: "Choose", d: "Find the model that matches your needs." },
  { n: "03", t: "Connect", d: "Contact our team on WhatsApp to discuss your purchase." },
];

export function Process() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Buying process" title="Three steps to your next ride." />
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="border-t border-primary pt-8">
                <span className="font-display text-8xl font-extrabold leading-none text-foreground/10">{s.n}</span>
                <h3 className="-mt-6 text-4xl font-extrabold uppercase">{s.t}</h3>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutBlock({ full = false }: { full?: boolean }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-28 md:px-8 lg:grid-cols-2">
      <Reveal className="relative">
        <img src={showroom} alt="Snowmobiles lined up in a dark showroom" loading="lazy" width={1600} height={1008} className="aspect-[4/3] w-full rounded-md object-cover" />
        {full && (
          <img src={mountain} alt="Snowmobile on a mountain ridge at sunset" loading="lazy" width={1280} height={960} className="absolute -bottom-10 -right-4 hidden w-1/2 rounded-md border-4 border-background object-cover md:block" />
        )}
      </Reveal>
      <Reveal delay={120}>
        <p className="eyebrow">About {BRAND.short}</p>
        <h2 className="mt-4 text-5xl font-extrabold uppercase leading-[0.95] md:text-6xl">Driven by winter. Built on trust.</h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          {BRAND.short} is a snowmobile dealership for riders who expect more from their machines — and from the people who sell them. We focus on a carefully selected range of snowmobiles across mountain, trail, touring, sport and utility riding.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Our approach is simple: honest information, helpful guidance and a direct line to our team. Whether it's your first sled or your next upgrade, we're here to help you make a confident choice.
        </p>
        {!full && (
          <Link to="/about" className={btn({ variant: "outline", className: "mt-8" })}>
            Our story
          </Link>
        )}
      </Reveal>
    </section>
  );
}

const FAQ = [
  { q: "Which snowmobile models are available?", a: "Our collection page lists the models we currently feature. Stock can change, so message us on WhatsApp to confirm a specific model." },
  { q: "Where can I find product specifications?", a: "Specifications are shown on each product page once confirmed. If a detail you need isn't listed, ask our team and we'll share what we can verify." },
  { q: "How is pricing handled?", a: "Prices are displayed only where they have been confirmed. For any model without a listed price, contact us on WhatsApp for a quote." },
  { q: "What payment arrangements are available?", a: "Payment options are discussed directly with our team for each purchase. Please message us to talk through what's possible." },
  { q: "Do you offer shipping and delivery?", a: "Delivery availability depends on the model and your location. Contact us and we'll let you know what options apply to you." },
  { q: "How do I purchase a snowmobile?", a: "Browse the collection, choose your model, then tap any WhatsApp button to start a conversation with our team about next steps." },
];

export function Faq() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-28 md:px-8 lg:grid-cols-[1fr_1.4fr]">
      <SectionHeading eyebrow="FAQ" title="Questions, answered.">
        Anything else? Our team is a message away.
      </SectionHeading>
      <Reveal className="divide-y divide-border border-y border-border">
        {FAQ.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}

export function FinalCta({ image }: { image: string }) {
  return (
    <section className="relative overflow-hidden">
      <img src={image} alt="" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-side-overlay" />
      <div className="relative mx-auto max-w-7xl px-5 py-36 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Let's ride</p>
          <h2 className="mt-4 text-6xl font-extrabold uppercase leading-[0.9] md:text-8xl">Your next adventure starts here.</h2>
          <p className="mt-6 text-lg text-foreground/80">Found the snowmobile you've been looking for? Let's talk.</p>
          <WhatsAppButton size="lg" className="mt-10">Chat with us on WhatsApp</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, image, children }: { eyebrow: string; title: string; image: string; children?: React.ReactNode }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20">
      <img src={image} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover animate-slow-zoom" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-6xl font-extrabold uppercase leading-[0.9] md:text-8xl">{title}</h1>
        {children && <p className="mt-5 max-w-xl text-foreground/80">{children}</p>}
      </div>
    </section>
  );
}
