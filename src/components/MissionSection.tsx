import { MissionActions } from "@/components/MissionActions";
import { RadarGrid } from "@/components/RadarGrid";
import { mission } from "@/data/mission";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: mission.currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function MissionSection({ full = false }: { full?: boolean }) {
  const progress = Math.min(100, (mission.currentAmount / mission.targetAmount) * 100);

  return (
    <section id="mission" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mission-card">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="minimal-label">Mission</p>
            <h2 className="mission-title">{mission.title}</h2>
            <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-cyan-50/90">
              {mission.tagline}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              {mission.summary}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="mission-stat">
                <span>{formatCurrency(mission.currentAmount)} / {formatCurrency(mission.targetAmount)}</span>
                <small>Progress</small>
              </div>
              <div className="mission-stat">
                <span>{mission.supporterCount} / {mission.supporterTarget}</span>
                <small>Supporters</small>
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="mission-progress" style={{ width: `${progress}%` }} />
            </div>

            <div className="mt-6">
              <MissionActions />
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Voluntary contribution. Not a charity donation.
            </p>
            {full ? (
              <p className="mt-3 text-xs leading-5 text-slate-500">
                {mission.contributionDisclaimer}
              </p>
            ) : null}
          </div>

          <RadarGrid />
        </div>
      </div>
    </section>
  );
}
