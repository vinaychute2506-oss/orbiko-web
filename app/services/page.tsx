import { getServices } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Services | Orbiko — Premium Architecture & Design",
  description: "Bespoke architectural solutions, interior design, and turnkey renovations.",
};

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
];

export default async function ServicesPage() {
  const services = await getServices().catch(() => []);

  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <Container>
        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="text-yellow-500 font-bold tracking-[0.25em] uppercase text-[10px] mb-8 block">
            Our Expertise
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-semibold text-white tracking-tight leading-none mb-10">
            Services.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed font-light italic border-l border-white/10 pl-8">
            Comprehensive design and build solutions, from initial vision and architectural planning to the final turnkey finishing touch.
          </p>
        </div>

        {services.length === 0 ? (
          <div className="text-center py-32 text-white/20">
            <p className="uppercase tracking-[0.2em] text-xs">No services listed yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 mt-16">
            {services.map((service: any, i: number) => (
              <div key={service.slug} className="group flex flex-col">
                <Link href={`/services/${service.slug}`} className="block relative aspect-[3/4] overflow-hidden mb-10 bg-[#111] rounded-sm">
                  <img
                    src={service.backgroundImage ?? FALLBACK_IMAGES[i % 3]}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </Link>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-white/20 text-[10px] font-bold tracking-widest">0{i + 1}</span>
                  <span className="w-8 h-px bg-white/10" />
                  <span className="text-yellow-500 text-[10px] uppercase tracking-[0.25em] font-bold">
                    Expertise
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-medium text-white mb-6 group-hover:text-yellow-500 transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-10 font-light line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-white group"
                  >
                    <span className="border-b border-white/20 pb-1 transition-all duration-300 group-hover:border-yellow-500">
                      Learn More
                    </span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 group-hover:text-yellow-500" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}