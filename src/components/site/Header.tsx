import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "./Buttons";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/collection", label: "Our Collection" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/75 transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <WhatsAppButton size="sm" className="hidden sm:inline-flex">
            Contact Us
          </WhatsAppButton>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-8 pt-4 lg:hidden" aria-label="Mobile">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="flex items-baseline gap-4 border-b border-border py-4 font-display text-3xl font-bold uppercase data-[status=active]:text-primary"
            >
              <span className="font-sans text-xs text-muted-foreground">0{i + 1}</span>
              {n.label}
            </Link>
          ))}
          <WhatsAppButton size="lg" className="mt-6 w-full">
            Contact Us on WhatsApp
          </WhatsAppButton>
        </nav>
      )}
    </header>
  );
}
