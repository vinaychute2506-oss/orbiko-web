import { getProjectBySlug, getProjects } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Gallery from "@/components/project/Gallery";
import type { Metadata } from "next";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug).catch(() => null);

  return {
    title: project ? `${project.title} | Orbiko Portfolio` : "Project | Orbiko",
    description: project?.content?.replace(/<[^>]+>/g, "").slice(0, 155) ?? "A premium project by Orbiko.",
    openGraph: {
      title: project?.title ?? "Project | Orbiko",
      description: project?.content?.replace(/<[^>]+>/g, "").slice(0, 155) ?? "",
      images: project?.featuredImage?.node?.sourceUrl ? [{ url: project.featuredImage.node.sourceUrl }] : [],
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const data = await getProjects().catch(() => ({ projects: { nodes: [] } }));
  const nodes = data?.projects?.nodes || [];
  return nodes.map((p: any) => ({ slug: p.slug }));
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug).catch(() => null);

  if (!project) notFound();

  // Extract up to 5 gallery images from ACF fields (matching current WordPress schema)
  const acfImages = [
    project.projectFields?.image1?.node?.sourceUrl,
    project.projectFields?.image2?.node?.sourceUrl,
    project.projectFields?.image3?.node?.sourceUrl,
    project.projectFields?.image4?.node?.sourceUrl,
    project.projectFields?.image5?.node?.sourceUrl
  ].filter(Boolean).map(url => ({
    image: { node: { sourceUrl: url } },
    title: project.title
  }));

  const imageSrc = project.featuredImage?.node?.sourceUrl ?? null;
  const projectType = project.projectFields?.projecttype || "Architecture";

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* ── Hero image ── */}
      <div className="w-full h-[70vh] md:h-[85vh] relative overflow-hidden bg-secondary">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-secondary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
          <Container>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-foreground/40 hover:text-foreground transition-colors mb-12 text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              <ArrowLeft size={14} className="mr-2" /> Back to Portfolio
            </Link>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary border border-primary/30 px-4 py-1.5 font-bold">
                {projectType}
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-heading font-semibold text-foreground tracking-tight leading-none">
              {project.title}
            </h1>
          </Container>
        </div>
      </div>

      <Container>
        <div className="py-24 md:py-32">
          {project.content && (
            <div className="max-w-4xl mb-32">
              <div
                className="text-foreground/60 text-xl md:text-2xl leading-relaxed font-light prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            </div>
          )}

          {/* Render the Gallery with up to 5 ACF images */}
          {acfImages.length > 0 && (
            <div className="pt-12 border-t border-border/5">
              <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-bold block mb-12">
                Project Gallery
              </span>
              <Gallery images={acfImages} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
