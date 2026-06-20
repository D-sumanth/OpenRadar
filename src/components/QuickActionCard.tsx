import Link from "next/link";

export function QuickActionCard({
  title,
  description,
  href,
  marker,
  cta = "Open guide",
}: {
  title: string;
  description: string;
  href: string;
  marker: string;
  cta?: string;
}) {
  return (
    <article className="group rounded-[1.5rem] glass-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-black text-white">{title}</h3>
        <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-2 py-1 font-mono text-xs font-black text-cyan-100">
          {marker}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-cyan-100 transition group-hover:border-cyan-200/40 group-hover:bg-cyan-200/10"
      >
        {cta}
      </Link>
    </article>
  );
}
