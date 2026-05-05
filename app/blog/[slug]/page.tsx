import { getPostBySlug } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  return {
    title: post ? `${post.title} | Orbiko Journal` : "Article | Orbiko",
    description: post?.excerpt?.replace(/<[^>]+>/g, "").slice(0, 155) ?? "Read our latest design insights.",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) notFound();

  const category = post.categories?.nodes?.[0]?.name || "Article";

  return (
    <article className="bg-black min-h-screen pb-32 pt-32 md:pt-40">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-white/40 hover:text-white transition-colors mb-12 text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            <ArrowLeft size={14} className="mr-2" /> Back to Journal
          </Link>

          {/* Header */}
          <div className="mb-16 md:mb-20">
            <span className="text-yellow-500 text-[10px] uppercase tracking-[0.25em] font-bold block mb-8">
              {category}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.1] mb-8">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/30 text-[10px] uppercase tracking-widest font-medium">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>5 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-16 md:mb-24 overflow-hidden rounded-sm bg-[#111]">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto object-cover opacity-90"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-invert prose-yellow max-w-none 
              prose-p:text-white/70 prose-p:text-xl prose-p:leading-relaxed prose-p:font-light
              prose-headings:text-white prose-headings:font-heading prose-headings:font-medium
              prose-strong:text-white prose-strong:font-semibold
              prose-blockquote:border-yellow-500 prose-blockquote:text-white/80 prose-blockquote:italic
              prose-img:rounded-sm space-y-8"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />

          {/* Footer CTA */}
          <div className="mt-24 pt-16 border-t border-white/5 flex flex-col items-center text-center">
            <h3 className="text-white text-2xl font-heading font-medium mb-10">Interested in more insights?</h3>
            <Link
              href="/blog"
              className="bg-white text-black px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-yellow-500 transition-colors duration-300"
            >
              Back to Journal
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}