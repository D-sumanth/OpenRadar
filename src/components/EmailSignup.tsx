"use client";

import { useState } from "react";

export function EmailSignup() {
  const [message, setMessage] = useState("");

  return (
    <form
      className="mt-6 grid gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage("Email signup is coming soon. Follow our social pages for now.");
      }}
    >
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="rounded border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-fuchsia-200"
      />
      <button
        type="submit"
        className="rounded bg-fuchsia-300 px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950 transition hover:bg-fuchsia-200"
      >
        Join the radar
      </button>
      {message && (
        <p className="rounded border border-fuchsia-300/20 bg-fuchsia-300/[0.08] px-3 py-2 text-sm font-semibold text-fuchsia-100">
          {message}
        </p>
      )}
    </form>
  );
}
