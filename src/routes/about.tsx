import { createFileRoute } from "@tanstack/react-router";
import showroom from "@/assets/showroom.jpg";
import touring from "@/assets/sled-touring.jpg";
import { BRAND } from "@/lib/site";
import { AboutBlock, FinalCta, PageHero, Process, WhyUs } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us — ${BRAND.short}` },
      { name: "description", content: `The story behind ${BRAND.short}: carefully selected snowmobiles, honest information and direct support.` },
      { property: "og:title", content: `About ${BRAND.short}` },
      { property: "og:description", content: "Driven by winter. Built on trust." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="About us" title="Driven by winter." image={showroom} />
      <AboutBlock full />
      <WhyUs />
      <Process />
      <FinalCta image={touring} />
    </>
  ),
});
