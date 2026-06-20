"use client";

import { useMemo, useSyncExternalStore } from "react";

function getRemaining(target: string, now: number) {
  if (now === 0) {
    return null;
  }

  const total = Math.max(0, new Date(target).getTime() - now);
  const days = Math.floor(total / 86400000);
  const hours = Math.floor((total / 3600000) % 24);
  const minutes = Math.floor((total / 60000) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function subscribe(callback: () => void) {
  const id = window.setInterval(callback, 1000);
  return () => window.clearInterval(id);
}

export function CountdownTimer({ targetIso }: { targetIso: string }) {
  const now = useSyncExternalStore(
    subscribe,
    () => Date.now(),
    () => 0,
  );
  const remaining = getRemaining(targetIso, now);
  const targetLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(targetIso)),
    [targetIso],
  );

  const units = [
    ["Days", remaining?.days],
    ["Hours", remaining?.hours],
    ["Minutes", remaining?.minutes],
    ["Seconds", remaining?.seconds],
  ] as const;

  return (
    <section className="glass-panel animate-glow rounded-[2rem] p-5 shadow-[0_0_80px_rgba(34,211,238,0.08)] sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
            Countdown to launch
          </p>
          <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">{targetLabel}</h2>
        </div>
        <p className="text-sm font-semibold text-slate-400">PS5 and Xbox Series X|S target</p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {units.map(([label, value], index) => (
          <div
            key={label}
            className="animate-tick rounded-2xl border border-white/10 bg-black/35 p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="font-mono text-4xl font-black leading-none text-white sm:text-5xl">
              {value === undefined ? "--" : String(value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              {label}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-400">
        Dates can change. We track confirmed updates and keep guides refreshed.
      </p>
    </section>
  );
}
