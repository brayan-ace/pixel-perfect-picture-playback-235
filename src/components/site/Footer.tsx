import { Link } from "@tanstack/react-router";
import { BRAND, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";
import { CATEGORIES } from "@/lib/inventory";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">{BRAND.tagline}</p>
        </div>
        <div>
          <h3 className="eyebrow">Navigate</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/collection" className="text-muted-foreground hover:text-foreground">Our Collection</Link></li>
            <li><Link to="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="eyebrow">Collection</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <Link to="/collection" search={{ category: c }} className="text-muted-foreground hover:text-foreground">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow">Contact</h3>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-foreground hover:text-whatsapp"
          >
            <WhatsAppIcon className="h-4 w-4" /> {WHATSAPP_DISPLAY}
          </a>
          <p className="mt-2 text-xs text-muted-foreground">WhatsApp</p>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground md:px-8">
          © {new Date().getFullYear()} {BRAND.short}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
