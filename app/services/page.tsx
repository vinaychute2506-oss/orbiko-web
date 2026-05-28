import { getServices } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Sparkles, LayoutGrid, CheckSquare } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Services | Orbiko — Premium Interior Solutions",
  description: "Bespoke interior design, factory-finish detailing, and turnkey renovation solutions.",
};

const FALLBACK_IMAGES = [
  "/images/commercial_service.png",
  "/images/residential_service.png",
  "/images/turnkey_service.png",
];

export default async function ServicesPage() {
  const services = await getServices().catch(() => []);

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 border-b border-border/10">
      <Container>
        {/* Visual page header block */}
        <div className="max-w-4xl mb-20 md:mb-24">
          <span className="text-primary font-bold tracking-[0.25em] uppercase text-[10px] mb-6 block">
            Expertise & Execution
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-light text-foreground tracking-tight leading-none mb-10">
            Our Expertises<span className="text-primary font-black">.</span>
          </h1>
          <p className="text-foreground/75 text-sm md:text-base leading-relaxed font-light pl-6 border-l border-primary/20 max-w-2xl">
            From smart residential interior layouts to complex commercial fit-outs and turnkey executions, we coordinate every design and factory production process completely in-house.
          </p>
        </div>

        {services.length === 0 ? (
          <div className="text-center py-32 text-foreground/20">
            <p className="uppercase tracking-[0.2em] text-xs">No services listed yet.</p>
          </div>
        ) : (
          /* Staggered wide visual service blocks */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 mt-16">
            {services.map((service: any, i: number) => (
              <div key={service.slug} className="group flex flex-col h-full">
                
                {/* Aspect image frame with top right index number */}
                <Link 
                  href={`/services/${service.slug}`} 
                  className="block relative aspect-[4/5] overflow-hidden mb-8 bg-card border border-border/10 shadow-lg"
                >
                  <img
                    src={service.backgroundImage ?? FALLBACK_IMAGES[i % 3]}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:scale-103 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-750"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent opacity-95 group-hover:opacity-75 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 right-6 text-foreground/30 font-bold text-[11px] tracking-widest">
                    / 0{i + 1}
                  </div>
                </Link>
                
                {/* Description details */}
                <div className="flex flex-col flex-grow justify-between pl-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Sparkles size={12} className="text-primary" />
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/45">
                        TURNKEY FIT-OUT
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-foreground/60 text-xs leading-relaxed font-light line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-auto">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-bold text-foreground group"
                    >
                      <span className="border-b border-border/20 pb-1 group-hover:border-primary transition-all duration-300">
                        Explore Scope
                      </span>
                      <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300 text-primary" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
