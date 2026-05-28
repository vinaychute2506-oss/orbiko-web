"use client";

import { HeroSection } from "@/components/HeroSection";
import { Quote } from "@/components/Quote";
import { ServicesSection } from "@/components/ServicesSection";
import { RecentProjectsSection } from "@/components/RecentProjectsSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { 
  ArrowRight, 
  Compass, 
  Calculator, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Gem, 
  Leaf, 
  Layers 
} from "lucide-react";
import { getSiteSettings, getServices, getRecentProjects, getSponsors } from "@/lib/api";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ConsultModal } from "@/components/ConsultModal";

export default function Home() {
  const [data, setData] = useState<{
    settings: any;
    services: any[];
    recentProjects: any[];
    sponsors: any[];
  }>({
    settings: null,
    services: [],
    recentProjects: [],
    sponsors: [],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const [settings, services, recentProjects, sponsors] = await Promise.all([
        getSiteSettings().catch(() => null),
        getServices().catch(() => []),
        getRecentProjects(4).catch(() => []),
        getSponsors().catch(() => []),
      ]);
      setData({ settings, services, recentProjects, sponsors });
    }
    fetchData();
  }, []);

  const reveal = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  // Structured client-centric steps copied from the reference site's business architecture
  const processSteps = [
    {
      num: "01",
      title: "Design Briefing & Site Consultation",
      description: "We host an in-depth creative session to assess site dimensions, functional needs, and establish custom project milestones.",
      cta: "Schedule Consultation",
      icon: <Compass size={24} className="text-primary" />
    },
    {
      num: "02",
      title: "Itemized Cost Estimation",
      description: "No hidden charges. We compile comprehensive CAD designs, material layouts, and a completely itemized budget before executing.",
      cta: "Learn Estimation Process",
      icon: <Calculator size={24} className="text-primary" />
    },
    {
      num: "03",
      title: "Dedicated Studio Supervisor",
      description: "Enjoy stress-free management. A single-point-of-contact project manager supervises every fit-out phase directly on site.",
      cta: "Meet Supervisors",
      icon: <Users size={24} className="text-primary" />
    },
    {
      num: "04",
      title: "State-of-the-Art Factory Execution",
      description: "Our modular production factories and expert in-house execution teams deliver flawless final fits and premium detailing.",
      cta: "Explore Our Production",
      icon: <Sparkles size={24} className="text-primary" />
    }
  ];

  return (
    <div className="bg-background">
      {/* ── 1. Dynamic Hero Visual Header Block ── */}
      <HeroSection settings={data.settings} />

      {/* ── 2. Integrated Quote Hook ── */}
      <motion.div {...reveal}>
        <Quote />
      </motion.div>

      {/* ── 3. Studio Philosophy & About Grid (Copied structural section from references) ── */}
      <motion.section 
        {...reveal}
        className="py-24 md:py-32 bg-background border-t border-border/10"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
            
            {/* Legacy Box */}
            <div className="flex items-start">
              <div className="border border-border/20 bg-card/45 p-12 text-center w-full shadow-md rounded-sm">
                <p className="text-6xl md:text-7xl font-heading font-light text-primary leading-none">18+</p>
                <p className="text-[10px] text-foreground/45 uppercase tracking-[0.25em] mt-8 leading-relaxed font-bold">
                  Years of Design<br />& Structural Execution
                </p>
                <div className="mt-8 text-foreground/35 text-[9px] uppercase tracking-[0.2em]">Established 2008</div>
              </div>
            </div>

            {/* Philosophy Header Block */}
            <div className="space-y-6">
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block">
                Integrating Art into Architecture
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-light leading-[1.1] text-foreground tracking-tight">
                Sustainable Building & Fine Craftsmanship
              </h2>
            </div>

            {/* Narrative Details */}
            <div className="space-y-8 lg:pt-2">
              <p className="text-foreground/75 text-sm md:text-base leading-relaxed font-light pl-6 border-l border-primary/20">
                At Orbiko, we build luxury spaces defined by architectural simplicity and smart layouts. Every fit-out is designed in-house, prioritizing climate-conscious systems, natural materials, and factory-level precision detailing to last generations.
              </p>
              <Link href="/about" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-foreground">
                <span className="border-b border-border/30 pb-1 group-hover:border-primary transition-all duration-350">
                  Discover Our Story
                </span>
                <ArrowRight size={14} className="text-primary group-hover:translate-x-1.5 transition-transform duration-350" />
              </Link>
            </div>

          </div>
        </Container>
      </motion.section>

      {/* ── 4. Core Services Segment Grid ── */}
      <motion.div {...reveal}>
        <ServicesSection services={data.services} />
      </motion.div>

      {/* ── 5. Interactive "How We Work" (Process Flow) Section ── */}
      <motion.section 
        {...reveal}
        className="py-24 md:py-32 bg-card/30 border-t border-border/10 relative overflow-hidden"
      >
        <Container>
          {/* Header */}
          <div className="mb-20 max-w-3xl">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">
              Seamless Project Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-light text-foreground leading-[1.1] tracking-tight">
              Our End-to-End Turnkey Process<span className="text-primary font-black">.</span>
            </h2>
            <p className="text-foreground/60 text-xs md:text-sm font-light mt-6 leading-relaxed max-w-xl">
              Discover how we coordinate every phase of design, custom production, and physical installation to guarantee factory-level perfection.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                className="bg-background border border-border/10 p-8 flex flex-col justify-between h-full hover:border-primary/20 hover:shadow-xl transition-all duration-350 rounded-sm relative"
              >
                <div className="space-y-6">
                  {/* Step Num & Icon */}
                  <div className="flex justify-between items-start">
                    <span className="text-2xl font-bold font-heading text-primary/20">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-card/85 flex items-center justify-center border border-border/10">
                      {step.icon}
                    </div>
                  </div>
                  {/* Title & Description */}
                  <h4 className="text-foreground font-heading font-semibold text-lg tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-foreground/60 text-xs leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Sub Action */}
                <div className="pt-6 mt-auto">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] font-bold text-primary hover:text-foreground transition-all duration-300"
                  >
                    <span>{step.cta}</span>
                    <ArrowRight size={10} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Value Badges strip below grid */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border/10">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-primary flex-shrink-0" size={20} />
              <div className="text-xs">
                <div className="font-bold text-foreground">10-Year Project Warranty</div>
                <div className="text-foreground/50 font-light mt-0.5">Completely backed custom craftsmanship.</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Gem className="text-primary flex-shrink-0" size={20} />
              <div className="text-xs">
                <div className="font-bold text-foreground">Premium Materials Only</div>
                <div className="text-foreground/50 font-light mt-0.5">Strict quality grading on all fit-outs.</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Layers className="text-primary flex-shrink-0" size={20} />
              <div className="text-xs">
                <div className="font-bold text-foreground">Integrated Turnkey Control</div>
                <div className="text-foreground/50 font-light mt-0.5">Zero contractors, 100% in-house teams.</div>
              </div>
            </div>
          </div>
        </Container>
      </motion.section>

      {/* ── 6. Masonry Work Showcases ── */}
      <motion.div {...reveal}>
        <RecentProjectsSection projects={data.recentProjects} />
      </motion.div>

      {/* ── 7. Infinite Logo Sponsors Carousel ── */}
      <motion.div {...reveal}>
        <SponsorsSection sponsors={data.sponsors} />
      </motion.div>

      {/* ── 8. Large Dynamic Consultation Call to Action Banner ── */}
      <motion.section 
        {...reveal}
        className="py-28 md:py-36 bg-foreground text-background border-t border-border/10 relative overflow-hidden"
      >
        {/* Visual Background grid representing building designs */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(229,222,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,222,212,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
        
        <Container className="text-center relative z-10 max-w-4xl">
          <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">
            Create Your Ideal Workspace or Home
          </span>
          <h2 className="text-4xl md:text-7xl font-heading font-light text-background mb-10 tracking-tight leading-[1.05]">
            Book a Free Site Audit & Consult Session<span className="text-primary font-black">.</span>
          </h2>
          <p className="text-background/60 mb-14 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-light">
            Collaborate directly with our studio planners. We will assess measurements, build preliminary layout concepts, and provide an initial itemized estimate.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-4 bg-primary text-background border border-primary px-12 py-5 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-transparent hover:text-primary transition-all duration-350 shadow-2xl"
          >
            <span>Book Free Space Consult</span>
            <ArrowRight size={14} />
          </motion.button>
        </Container>
      </motion.section>

      {/* Interactive Modal Form */}
      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
