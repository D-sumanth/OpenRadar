import Link from "next/link";
import type { Post } from "@/lib/posts";
import { RadarGraphic } from "./RadarGraphic";

export function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="group overflow-hidden rounded border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]">
      <RadarGraphic tone={post.heroTone} compact />
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
          <span>{post.category}</span>
          <span className="text-slate-500">{post.readTime}</span>
        </div>
        <h2 className="mt-3 text-xl font-black leading-tight text-white">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">{post.excerpt}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {post.date}
        </p>
      </div>
    </article>
  );
}
