import { getProjects } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Portfolio | Orbiko — Premium Architecture & Interior Design",
  description: "Explore our diverse portfolio of residential, commercial, and architectural projects.",
  openGraph: {
    title: "Portfolio | Orbiko",
    description: "Explore our diverse portfolio of residential, commercial, and architectural projects.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://orbiko.com"}/portfolio`,
  },
};

const FILTERS = [
  { label: "ALL", slug: null },
  { label: "COMMERCIAL", slug: "commercial" },
  { label: "RESIDENTIAL", slug: "residential" },
  { label: "TURNOVER", slug: "turnover" },
];

interface Props {
  searchParams: Promise<{ type?: string }>;
}

export default async function PortfolioPage({ searchParams }: Props) {
  const { type: selected } = await searchParams;
  
  // Fetch raw GraphQL data structure
  const data = await getProjects().catch(() => ({ projects: { nodes: [] } }));
  const allProjects = data?.projects?.nodes || [];
  
  // Filtering logic
  const filteredProjects = selected
    ? allProjects.filter((p: any) => 
        p.serviceTypes?.nodes?.some((t: any) => t.slug === selected)
      )
    : allProjects;

  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <Container>
        <div className="max-w-4xl mb-16">
          <span className="text-yellow-500 font-bold tracking-[0.25em] uppercase text-[10px] mb-8 block">
            Selected Works
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-semibold text-white mb-10 tracking-tight">
            Portfolio.
          </h1>
          
          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-8 md:gap-12 mt-12 border-b border-white/5 pb-8">
            {FILTERS.map((f) => {
              const isActive = selected === f.slug || (!f.slug && !selected);
              const href = f.slug ? `/portfolio?type=${f.slug}` : "/portfolio";
              
              return (
                <Link
                  key={f.label}
                  href={href}
                  className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300 relative pb-4 ${
                    isActive ? "text-yellow-500" : "text-white/40 hover:text-white"
                  }`}
                >
                  {f.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Passing filtered projects list with the current filter key */}
        <PortfolioGrid projects={filteredProjects} selectedFilter={selected} />
      </Container>
    </div>
  );
}