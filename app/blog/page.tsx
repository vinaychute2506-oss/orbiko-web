import { getPosts } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Journal | Orbiko — Architecture, Design & Insights",
  description: "Read our latest insights on modern architecture, luxury interior design, and construction trends.",
};

export default async function BlogPage() {
  const posts = await getPosts().catch(() => []);

  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <Container>
        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="text-yellow-500 font-bold tracking-[0.25em] uppercase text-[10px] mb-8 block">
            The Journal
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-semibold text-white tracking-tight leading-none mb-10">
            Journal.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed font-light">
            Insights on architectural philosophy, material innovation, and the evolution of luxury living spaces.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-24 text-white/20">
            <p className="uppercase tracking-[0.2em] text-xs">No entries found yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {posts.map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="flex flex-col">
                  {/* Image wrapper */}
                  <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-[#111] rounded-sm">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-neutral-900" />
                    )}
                  </div>

                  {/* Category label */}
                  <div className="mb-4">
                    <span className="text-yellow-500 text-[10px] uppercase tracking-[0.25em] font-bold">
                      {post.category || "Article"}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-heading font-medium text-white group-hover:text-yellow-500 transition-colors duration-500 leading-snug mb-4">
                    {post.title}
                  </h2>
                  
                  {/* Date/Meta */}
                  <span className="text-white/30 text-[10px] uppercase tracking-widest font-medium">
                    {post.date}
                  </span>
                </article>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}