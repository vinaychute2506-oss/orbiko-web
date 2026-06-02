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

  const category = post.category || "Article";

  return (
    <article className="bg-background min-h-screen pb-32 pt-32 md:pt-40">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-foreground/40 hover:text-foreground transition-colors mb-12 text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            <ArrowLeft size={14} className="mr-2" /> Back to Journal
          </Link>

          {/* Header */}
          <div className="mb-16 md:mb-20">
            <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-bold block mb-8">
              {category}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-semibold text-foreground tracking-tight leading-[1.1] mb-8">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-foreground/30 text-[10px] uppercase tracking-widest font-medium">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-foreground/20 rounded-full" />
              <span>5 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-16 md:mb-24 overflow-hidden rounded-sm bg-secondary">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto object-cover opacity-90"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-primary max-w-none 
              prose-p:text-foreground/70 prose-p:text-xl prose-p:leading-relaxed prose-p:font-light
              prose-headings:text-foreground prose-headings:font-heading prose-headings:font-medium
              prose-strong:text-foreground prose-strong:font-semibold
              prose-blockquote:border-primary prose-blockquote:text-foreground/80 prose-blockquote:italic
              prose-img:rounded-sm space-y-8"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />

          {/* Footer CTA */}
          <div className="mt-24 pt-16 border-t border-border/5 flex flex-col items-center text-center">
            <h3 className="text-foreground text-2xl font-heading font-medium mb-10">Interested in more insights?</h3>
            <Link
              href="/blog"
              className="bg-foreground text-background px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-primary transition-colors duration-300"
            >
              Back to Journal
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}