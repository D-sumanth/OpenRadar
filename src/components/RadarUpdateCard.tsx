import Link from "next/link";
import type { RadarUpdate } from "@/lib/radar-updates";

export function RadarUpdateCard({ update }: { update: RadarUpdate }) {
  return (
    <article className="rounded border border-cyan-300/20 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded bg-cyan-300/15 px-2.5 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
          {update.badge}
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          {update.date}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-black text-white">{update.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{update.summary}</p>
      <Link
        href={update.href}
        className="mt-5 inline-flex text-sm font-bold text-cyan-200 transition hover:text-cyan-100"
      >
        Read update
      </Link>
    </article>
  );
}
