import { Link } from "@tanstack/react-router";
import { BRAND } from "@/lib/site";

export function Logo() {
  const [a, ...rest] = BRAND.name.split(" ");
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${BRAND.short} home`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-[-8deg]" aria-hidden="true">
        <path d="M2 26 L12 8 L17 16 L21 11 L30 26 Z" fill="currentColor" />
        <path d="M12 8 L14.5 12.5 L12 11.5 L9.8 12 Z" fill="var(--color-ice)" />
      </svg>
      <span className="font-display text-xl font-extrabold uppercase tracking-[0.12em]">
        {a} <span className="text-primary">{rest.join(" ")}</span>
      </span>
    </Link>
  );
}
