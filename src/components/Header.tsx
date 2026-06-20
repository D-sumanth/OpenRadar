import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070f]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded border border-cyan-300/50 bg-cyan-300/10 font-mono text-sm font-black text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.25)]">
            OWR
          </span>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#notify"
          className="rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.08)] transition hover:border-cyan-200/60 hover:bg-cyan-200/15"
        >
          Notify Me
        </Link>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-white/10 px-4 py-2 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded px-3 py-2 text-sm font-semibold text-slate-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
