import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RadarGraphic } from "@/components/RadarGraphic";
import { getPost, posts } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
        {post.category}
      </p>
      <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">
        {post.title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <div className="mt-8 overflow-hidden rounded border border-white/10">
        <RadarGraphic tone={post.heroTone} />
      </div>
      <div className="prose-radar mt-8 text-lg">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
