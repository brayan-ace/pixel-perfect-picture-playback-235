import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import type { ReactNode } from "react";

export const btn = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:shadow-glow hover:-translate-y-0.5",
        outline: "border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5",
        ghost: "text-foreground hover:text-primary",
        whatsapp: "bg-whatsapp text-whatsapp-foreground hover:brightness-110 hover:-translate-y-0.5",
        ice: "bg-ice text-background hover:bg-foreground",
      },
      size: { sm: "h-10 px-4", md: "h-12 px-6", lg: "h-14 px-8" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function WhatsAppButton({
  product,
  children,
  className,
  variant = "whatsapp",
  size,
}: { product?: string; children: ReactNode; className?: string } & VariantProps<typeof btn>) {
  return (
    <a
      href={whatsappLink(product)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(btn({ variant, size }), className)}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}
