import type { Deal } from "@/lib/deals";

export function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="rounded border border-lime-300/20 bg-lime-300/[0.05] p-5 shadow-[0_0_40px_rgba(163,230,53,0.05)]">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded bg-lime-300/15 px-2.5 py-1 text-xs font-black uppercase tracking-[0.16em] text-lime-200">
          {deal.tag}
        </span>
        <span className="font-mono text-sm font-bold text-white">{deal.price}</span>
      </div>
      <h2 className="mt-5 text-xl font-black text-white">{deal.title}</h2>
      <p className="mt-1 text-sm font-semibold text-slate-400">{deal.vendor}</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{deal.description}</p>
      <a
        href={deal.href}
        className="mt-5 inline-flex rounded border border-lime-300/40 px-4 py-2 text-sm font-bold text-lime-100 transition hover:bg-lime-300/10"
      >
        View placeholder deal
      </a>
    </article>
  );
}
