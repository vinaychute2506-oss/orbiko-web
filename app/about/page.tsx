import { getSiteSettings } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Trophy, Users, Globe2, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us | Orbiko — Premium Interior Solutions",
  description: "Learn about the Orbiko approach, our factory-level precision, and the team behind our premium interior design projects.",
};

export default async function AboutPage() {
  const settings = await getSiteSettings().catch(() => null);
  const yearsExperience = "25";
  const aboutText = "At Orbiko, we believe interiors should feel seamless, functional, and deeply personal. Every project is thoughtfully designed with modern aesthetics, smart space planning, and factory-finish detailing to create spaces that truly elevate everyday living.";

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* ── Banner ── */}
      <div className="w-full h-[65vh] relative overflow-hidden bg-background">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop"
          alt="Orbiko Interiors"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-24">
          <Container>
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">Precision. Design. Execution.</span>
            <h1 className="text-6xl md:text-8xl font-heading font-semibold text-foreground tracking-tight leading-none">
              About Us.
            </h1>
          </Container>
        </div>
      </div>

      {/* ── Philosophy ── */}
      <section className="py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="max-w-xl">
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-12">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-12 leading-[1.1] tracking-tight">
                Smart Design. Precision Execution. Timeless Results.
              </h2>
              <div className="space-y-10 text-foreground/60 text-lg leading-relaxed font-light italic border-l border-border/10 pl-10">
                <p>{aboutText}</p>
                <p>
                  From residential interiors to commercial spaces and renovations, our team focuses on delivering premium interior solutions with transparent execution, modern functionality, and attention to every detail.
                </p>
                <p>
                  With in-house factory support and skilled execution teams, Orbiko ensures better quality control, smoother workflow, and precision-crafted finishes across every project.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-secondary rounded-sm overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Factory-Finish Detailing"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute top-12 right-12 bg-primary text-background p-10 text-center min-w-[160px] shadow-2xl">
                <p className="text-4xl font-heading font-bold leading-none">Precision</p>
                <p className="text-[10px] uppercase tracking-widest mt-4 font-bold">Factory-Level<br />Execution</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats ── */}
      <section className="py-32 bg-secondary border-y border-border/5">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20">
            {[
              { icon: <Sparkles className="text-primary" size={24} />, label: "Factory-Level Precision", val: "Elite" },
              { icon: <Globe2 className="text-primary" size={24} />, label: "Interior Consultations", val: "500+" },
              { icon: <Trophy className="text-primary" size={24} />, label: "Transparent Process", val: "Verified" },
              { icon: <Users className="text-primary" size={24} />, label: "Design & Execution Experts", val: "12+" },
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-full border border-border/10 flex items-center justify-center mx-auto mb-10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                  {s.icon}
                </div>
                <p className="text-4xl font-heading font-bold text-foreground mb-4 tracking-tighter">{s.val}</p>
                <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-32">
        <Container>
          <div className="bg-primary p-16 md:p-32 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-heading font-bold text-background mb-12 tracking-tighter uppercase leading-none">
                Partner With Orbiko
              </h2>
              <p className="text-background/60 max-w-3xl mx-auto mb-16 text-xl leading-relaxed font-medium">
                Orbiko also collaborates with interior designers, decorators, contractors, and project consultants by providing factory support, modular production, and precision-crafted execution solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-6 bg-background text-foreground px-12 py-5 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-secondary transition-all duration-300 shadow-xl"
              >
                Explore Factory Support <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
