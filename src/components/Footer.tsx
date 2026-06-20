import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04060d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-mono font-black uppercase tracking-[0.25em] text-cyan-200">OWR</p>
          <p className="mt-2">{site.disclaimer}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/mission">Mission</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
