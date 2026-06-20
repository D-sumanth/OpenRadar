type Tone = "cyan" | "lime" | "pink" | "amber";

const toneClass: Record<Tone, string> = {
  cyan: "from-cyan-300/45 via-cyan-300/10 to-transparent text-cyan-200",
  lime: "from-lime-300/45 via-lime-300/10 to-transparent text-lime-200",
  pink: "from-fuchsia-300/45 via-fuchsia-300/10 to-transparent text-fuchsia-200",
  amber: "from-amber-300/45 via-amber-300/10 to-transparent text-amber-200",
};

export function RadarGraphic({
  tone = "cyan",
  compact = false,
}: {
  tone?: Tone;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden border-b border-white/10 bg-[#070b16] ${
        compact ? "h-40" : "min-h-[320px]"
      }`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className={`absolute -inset-16 bg-radial ${toneClass[tone]}`} />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current opacity-60" />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current shadow-[0_0_32px_currentColor]" />
      <div className="absolute left-1/2 top-1/2 h-[1px] w-56 origin-left rotate-[-24deg] bg-current opacity-70" />
      <div className="absolute bottom-5 left-5 font-mono text-xs font-black uppercase tracking-[0.22em] text-current">
        Original radar graphic
      </div>
    </div>
  );
}
