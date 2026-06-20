import { socialLinks } from "@/lib/site";

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Open World Radar social links">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className={`inline-flex items-center rounded border border-cyan-300/30 bg-cyan-300/[0.06] font-bold text-cyan-100 transition hover:bg-cyan-300/15 ${
            compact ? "px-2.5 py-1.5 text-xs" : "gap-2 px-3 py-2 text-sm"
          }`}
        >
          <span className="font-mono">{link.shortLabel}</span>
          {!compact && <span>{link.label}</span>}
        </a>
      ))}
    </div>
  );
}
