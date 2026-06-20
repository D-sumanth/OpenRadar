import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Fan-made GTA VI and open-world gaming articles, guides, launch prep notes, and buying advice.",
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
