import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070f]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
            {site.name}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            {site.description}
          </p>
          <p className="mt-4 text-xs leading-5 text-slate-500">{site.disclaimer}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">Guides</h2>
          <div className="mt-3 grid gap-2 text-sm text-slate-400">
            <Link href="/gta-vi-preorder-guide">GTA VI Pre-order Guide</Link>
            <Link href="/ps5-vs-xbox-gta-vi">PS5 vs Xbox for GTA VI</Link>
            <Link href="/gaming-deals">Gaming Deals</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-white">Site</h2>
          <div className="mt-3 grid gap-2 text-sm text-slate-400">
            <Link href="/about">About</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
