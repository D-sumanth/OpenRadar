import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog for GTA VI Updates and Open-World Gaming",
  description:
    "Open World Radar blog for fan-made GTA VI updates, open-world gaming news, launch guide notes, PS5 and Xbox console deals, and buying advice.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
        Blog
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">Open-world briefings</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        Sample article data powers this index and the individual article template.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
