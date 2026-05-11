"use client";

interface Sponsor {
  title: string;
  featuredImage?: {
    node?: {
      sourceUrl: string;
    };
  };
}

interface SponsorsSectionProps {
  sponsors: Sponsor[];
}

export function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  // 1. Initial data check
  if (!sponsors || !sponsors.length) return null;

  // 2. Extract only valid image URLs
  const logos = sponsors
    .map(s => s.featuredImage?.node?.sourceUrl)
    .filter(Boolean) as string[];

  // 3. If no valid images found, don't render the section
  if (!logos.length) return null;

  // 4. Duplicate for seamless infinite scroll
  const looped = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-background overflow-hidden border-t border-b border-border/5">
      <div className="flex gap-20 animate-scroll">
        {looped.map((src, i) => (
          <div key={i} className="flex-shrink-0 flex items-center justify-center min-w-[200px]">
            <img
              src={src}
              alt="Partner Logo"
              className="h-16 md:h-20 object-contain"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
