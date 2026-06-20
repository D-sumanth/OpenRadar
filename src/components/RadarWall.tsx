import { mission } from "@/data/mission";

export function RadarWall({ full = false }: { full?: boolean }) {
  const visibleSupporters = mission.supporters
    .filter((supporter) => supporter.showName)
    .slice(0, full ? 60 : 9);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="minimal-label">Radar Wall</p>
            <h2 className="mt-3 text-2xl font-black uppercase tracking-[0.14em] text-white">
              Radar Wall
            </h2>
          </div>
          <p className="max-w-md text-xs leading-5 text-slate-500">
            Supporters can choose a public display name or stay anonymous.
          </p>
        </div>

        {visibleSupporters.length > 0 ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleSupporters.map((supporter) => (
              <article key={supporter.supporterNumber} className="rounded-xl border border-white/10 bg-black/25 p-4">
                <p className="font-mono text-sm font-black text-cyan-100">
                  #{String(supporter.supporterNumber).padStart(3, "0")} — {supporter.displayName}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-lime-200">£1 supporter</p>
                {supporter.message ? (
                  <p className="mt-3 text-sm leading-6 text-slate-400">{supporter.message}</p>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-slate-400">
            Supporter wall coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
