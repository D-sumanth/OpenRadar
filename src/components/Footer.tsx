import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04060d]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
            {site.name}
          </p>
          <p className="mt-3 max-w-xl text-xs leading-5 text-slate-500">{site.disclaimer}</p>
          <div className="mt-5">
            <SocialLinks compact />
          </div>
        </div>
        <div className="md:text-right">
          <h2 className="text-sm font-bold text-white">Links</h2>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-400 md:justify-end">
            <Link href="/about">About</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
