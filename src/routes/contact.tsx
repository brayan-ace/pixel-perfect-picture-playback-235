import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import utility from "@/assets/sled-utility.jpg";
import { BRAND, WHATSAPP_DISPLAY } from "@/lib/site";
import { WhatsAppButton } from "@/components/site/Buttons";
import { Faq, PageHero } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${BRAND.short}` },
      { name: "description", content: `Chat with the ${BRAND.short} team on WhatsApp about any snowmobile in our collection.` },
      { property: "og:title", content: `Contact ${BRAND.short}` },
      { property: "og:description", content: "Message our team directly on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Let's talk snow." image={utility}>
        The fastest way to reach us is WhatsApp. Tell us which model you're interested in and we'll take it from there.
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid items-center gap-10 rounded-md border border-border bg-card p-10 md:grid-cols-[auto_1fr_auto] md:p-14">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground">
            <MessageCircle className="h-7 w-7" />
          </span>
          <div>
            <p className="eyebrow">WhatsApp</p>
            <p className="mt-2 font-display text-5xl font-extrabold">{WHATSAPP_DISPLAY}</p>
          </div>
          <WhatsAppButton size="lg">Start a chat</WhatsAppButton>
        </div>
      </section>
      <Faq />
    </>
  ),
});
