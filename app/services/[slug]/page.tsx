import { getServiceBySlug } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug).catch(() => null);

  return {
    title: service ? `${service.title} | Orbiko Services` : "Service | Orbiko",
    description: service?.description ?? "A premium architecture and design service by Orbiko.",
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug).catch(() => null);

  if (!service) notFound();

  return (
    <div className="bg-black min-h-screen pb-32">
      {/* ── Banner ── */}
      <div className="w-full h-[65vh] relative overflow-hidden bg-black">
        {service.backgroundImage ? (
          <img
            src={service.backgroundImage}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-900" />
        )}
        <div className="absolute inset-0 flex flex-col justify-end pb-24">
          <Container>
            <Link
              href="/services"
              className="inline-flex items-center text-white/40 hover:text-white transition-colors mb-12 text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              <ArrowLeft size={14} className="mr-2" /> All Services
            </Link>
            <h1 className="text-5xl md:text-8xl font-heading font-semibold text-white tracking-tight leading-none max-w-4xl">
              {service.title}
            </h1>
          </Container>
        </div>
      </div>

      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8">
            <span className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-12">Service Overview</span>
            <div className="text-white/60 text-xl md:text-2xl leading-relaxed space-y-10 font-light italic border-l border-white/10 pl-10">
              <p>{service.description}</p>
              <p>
                Our approach to {service.title.toLowerCase()} is rooted in architectural excellence and a deep understanding of our clients' needs. We utilize state-of-the-art materials and sustainable practices to ensure every project is not only beautiful but enduring.
              </p>
            </div>

            <div className="mt-24 pt-24 border-t border-white/5">
              <h3 className="text-2xl font-heading font-medium text-white mb-12 tracking-wide uppercase text-sm">What we deliver:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  "Detailed Concept Development",
                  "Architectural Drawings & 3D Visuals",
                  "Material Sourcing & Selection",
                  "Project Management & Oversight",
                  "Precision Execution & Construction",
                  "Final Finishing & Handover"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <div className="bg-[#0a0a0a] p-10 border border-white/5 rounded-sm">
              <h3 className="text-xl font-heading font-medium text-white mb-8">Ready to collaborate?</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-12 font-medium">
                Let's discuss how our {service.title.toLowerCase()} expertise can elevate your next project with precision and luxury.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-between bg-white text-black px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-yellow-500 transition-all duration-300 shadow-xl"
              >
                Book a Consultation <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12">
              <Link
                href={`/portfolio?type=${service.slug.includes('residential') ? 'residential' : service.slug.includes('commercial') ? 'commercial' : 'turnover'}`}
                className="group flex items-center justify-between border border-white/5 p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 hover:text-white hover:border-white/20 transition-all duration-500"
              >
                View Related Projects
                <ArrowRight size={18} className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}