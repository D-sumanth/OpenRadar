import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Open World Radar",
  description:
    "Contact Open World Radar for GTA VI updates, open-world gaming corrections, launch guide tips, PS5 and Xbox console deals, and fan-made media questions.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-fuchsia-200">
        Contact
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">Contact the radar desk</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        Use this static form layout as a starting point. Wire it to your preferred form
        provider, email API, or CRM before launch.
      </p>
      <form className="mt-8 grid gap-4 rounded border border-white/10 bg-white/[0.04] p-6">
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Name
          <input className="rounded border border-white/10 bg-black/35 px-4 py-3 text-white outline-none focus:border-fuchsia-200" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Email
          <input
            type="email"
            className="rounded border border-white/10 bg-black/35 px-4 py-3 text-white outline-none focus:border-fuchsia-200"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-300">
          Message
          <textarea
            rows={6}
            className="rounded border border-white/10 bg-black/35 px-4 py-3 text-white outline-none focus:border-fuchsia-200"
          />
        </label>
        <button
          type="button"
          className="rounded bg-fuchsia-300 px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950"
        >
          Send placeholder message
        </button>
      </form>
    </section>
  );
}
