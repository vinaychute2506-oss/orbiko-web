import { getSiteSettings } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Sparkles, Compass, HelpCircle, HardHat, CalendarRange } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us | Orbiko — Premium Architecture & Interior Design",
  description: "Learn about the Orbiko approach, our factory-level precision, and the team behind our premium interior design projects.",
};

export default async function AboutPage() {
  const settings = await getSiteSettings().catch(() => null);
  const yearsExperience = "18";
  const aboutText = "At Orbiko, we believe interiors should feel seamless, functional, and deeply personal. Every project is thoughtfully designed with modern aesthetics, smart space planning, and factory-finish detailing to create spaces that truly elevate everyday living.";

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Visual Header Banner Area */}
      <div className="w-full h-[60vh] relative overflow-hidden bg-background border-b border-border/10">
        <img
          src="/images/about_hero.png"
          alt="Orbiko Interiors Bookshelf Lounge"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <Container>
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">
              Precision. Design. Execution.
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-light text-foreground tracking-tight leading-none">
              Our Studio<span className="text-primary font-black">.</span>
            </h1>
          </Container>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-start">
            
            {/* Left Narrative Text */}
            <div className="space-y-12">
              <div>
                <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">
                  Design Standard
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-light text-foreground leading-[1.1] tracking-tight">
                  Flawless Execution In Every Corner
                </h2>
              </div>
              <div className="space-y-8 text-foreground/70 text-sm md:text-base leading-relaxed font-light pl-6 border-l border-primary/20">
                <p className="font-medium text-foreground text-lg italic">
                  {aboutText}
                </p>
                <p>
                  From residential interiors to corporate showrooms and full-scale renovations, our studio coordinates every phase in-house. We guarantee zero contractors, completely transparent estimations, and absolute scheduling control.
                </p>
                <p>
                  With state-of-the-art modular manufacturing and strict in-house quality control pipelines, Orbiko delivers high-end custom carpentry, structural detailing, and factory-level support across every single project.
                </p>
              </div>
            </div>

            {/* Right Visual Image & Custom Absolute Overlay Panel */}
            <div className="relative aspect-[4/5] bg-card border border-border/10 overflow-hidden shadow-2xl">
              <img
                src="/images/craftsmanship.png"
                alt="Factory-Finish Detailing"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-75"
              />
              <div className="absolute top-8 right-8 bg-background border border-border/10 p-8 text-center min-w-[150px] shadow-2xl">
                <p className="text-3xl font-heading font-bold text-primary leading-none">100%</p>
                <p className="text-[9px] uppercase tracking-[0.2em] mt-4 font-bold text-foreground/75 leading-relaxed">
                  In-House Execution<br />Turnkey Support
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Custom Key Pillars Section (Pillars modeled on the reference layout) */}
      <section className="py-24 md:py-32 bg-card/45 border-y border-border/10">
        <Container>
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">
              Our Foundations
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-light text-foreground tracking-tight leading-[1.1]">
              Pillars of Sustainable Space Planning
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { icon: <Sparkles className="text-primary" size={22} />, label: "State-of-the-Art Production", val: "Modular" },
              { icon: <Compass className="text-primary" size={22} />, label: "Tailored Space Layouts", val: "Precision" },
              { icon: <HelpCircle className="text-primary" size={22} />, label: "Completely Itemized Budgeting", val: "Transparent" },
              { icon: <HardHat className="text-primary" size={22} />, label: "Dedicated PM Support", val: "Supervised" },
            ].map((s, i) => (
              <div key={i} className="text-center group flex flex-col items-center">
                <div className="w-14 h-14 bg-background border border-border/10 flex items-center justify-center mb-8 rounded-sm group-hover:border-primary/30 group-hover:shadow-md transition-all duration-350">
                  {s.icon}
                </div>
                <p className="text-3xl font-heading font-semibold text-foreground mb-3 tracking-tight">{s.val}</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/45 font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Visual Call To Action Split Layout with Partner BLUEPRINTS */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center bg-foreground text-background p-8 md:p-16 rounded-sm border border-border/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(229,222,212,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,222,212,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block">
                Partner & Studio Support
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-light text-background tracking-tight leading-[1.1]">
                Collaborate With Orbiko Planners
              </h2>
              <p className="text-background/70 text-xs md:text-sm leading-relaxed font-light">
                Orbiko coordinates closely with architects, developers, and visual planners. We offer custom modular production and precision execution to ensure that design blueprints transition perfectly to physical spaces.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-primary text-background border border-primary px-8 py-4.5 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-transparent hover:text-primary transition-all duration-350 shadow-xl"
                >
                  <span>Explore Direct Support</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full bg-card/10 overflow-hidden border border-background/10 rounded-sm shadow-xl">
              <img
                src="/images/about_partner.png"
                alt="Wood carpentry factory workshop blueprints"
                className="absolute inset-0 w-full h-full object-cover opacity-85 hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
