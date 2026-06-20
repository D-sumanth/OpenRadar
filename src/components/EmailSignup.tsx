"use client";

import { useState } from "react";

export function EmailSignup() {
  const [message, setMessage] = useState("");

  return (
    <form
      className="mt-6 grid gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage("Signup coming soon.");
      }}
    >
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        type="email"
        placeholder="Email address"
        className="rounded-full border border-white/10 bg-black/35 px-5 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200"
      />
      <button
        type="submit"
        className="rounded-full bg-cyan-200 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-white"
      >
        Notify me
      </button>
      {message && (
        <p className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-sm font-semibold text-cyan-100">
          {message}
        </p>
      )}
    </form>
  );
}
