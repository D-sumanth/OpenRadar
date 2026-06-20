import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#03050b]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded border border-cyan-300/40 bg-cyan-300/10 font-mono text-xs font-black text-cyan-100">
            OWR
          </span>
          <span className="hidden text-xs font-black uppercase tracking-[0.28em] text-white sm:inline">
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/support"
          className="rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-200/15"
        >
          Support
        </Link>
      </div>
      <nav className="flex justify-center gap-1 overflow-x-auto border-t border-white/10 px-4 py-2 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
