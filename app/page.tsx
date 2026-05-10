"use client";

import { HeroSection } from "@/components/HeroSection";
import { Quote } from "@/components/Quote";
import { ServicesSection } from "@/components/ServicesSection";
import { RecentProjectsSection } from "@/components/RecentProjectsSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Lightbulb, BadgeDollarSign, Handshake, ShieldCheck } from "lucide-react";
import { getSiteSettings, getServices, getRecentProjects, getSponsors } from "@/lib/api";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  const features = [
    {
      icon: <Lightbulb size={32} strokeWidth={1} className="text-primary" />,
      title: "Smart Space Planning",
      description: "Every project is thoughtfully designed with modern aesthetics and intelligent layouts.",
    },
    {
      icon: <BadgeDollarSign size={32} strokeWidth={1} className="text-primary" />,
      title: "Premium Finishes",
      description: "We use only the highest quality materials to ensure a visually refined and lasting result.",
    },
    {
      icon: <Handshake size={32} strokeWidth={1} className="text-primary" />,
      title: "Transparent Process",
      description: "We maintain clear communication and visibility across every stage of the execution.",
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1} className="text-primary" />,
      title: "Precision Execution",
      description: "Factory-finish detailing and in-house support ensure the highest level of quality control.",
    },
  ];

  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <div className="bg-background">
      {/* ── Hero ── */}
      <HeroSection settings={data.settings} />

      {/* ── Quote ── */}
      <motion.div {...reveal}>
        <Quote />
      </motion.div>

      {/* ── About Section ── */}
      <motion.section 
        {...reveal}
        className="py-16 md:py-24 bg-background border-t border-border/5"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
            <div className="flex items-start">
              <div className="border border-border/10 p-10 text-center min-w-[140px]">
                <p className="text-5xl md:text-6xl font-heading font-bold text-primary leading-none">500+</p>
                <p className="text-[10px] text-foreground/40 uppercase tracking-[0.2em] mt-8 leading-relaxed font-medium">
                  Interior Design<br />Consultations
                </p>
              </div>
            </div>

            <div>
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">Precision. Design. Execution.</span>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold leading-[1.2] text-foreground tracking-tight">
                Premium Interior Solutions for Modern Living
              </h2>
            </div>

            <div className="pt-2">
              <p className="text-foreground/60 text-lg leading-relaxed mb-12 font-light italic border-l border-border/10 pl-8">
                At Orbiko, we provide tailored design solutions where interiors feel seamless, functional, and deeply personal. Every project is thoughtfully designed with modern aesthetics and factory-finish detailing for seamless functionality.
              </p>
              <Link href="/about" className="group">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-foreground"
                >
                  <span className="border-b border-border/20 pb-1 transition-all duration-300 group-hover:border-primary">
                    Our Story
                  </span>
                  <ArrowRight size={14} className="group-hover:text-primary transition-colors" />
                </motion.div>
              </Link>
            </div>
          </div>
        </Container>
      </motion.section>

      {/* ── Services Section ── */}
      <motion.div {...reveal}>
        <ServicesSection services={data.services} />
      </motion.div>

      {/* ── Recent Projects ── */}
      <motion.div {...reveal}>
        <RecentProjectsSection projects={data.recentProjects} />
      </motion.div>

      {/* ── Why Choose Us ── */}
      <motion.section 
        {...reveal}
        className="py-16 md:py-24 bg-background border-t border-border/5"
      >
        <Container>
          <div className="mb-20 text-center">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">Our Interior Expertise</span>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground max-w-3xl mx-auto leading-[1.2] tracking-tight">
              Factory-Level Precision in Every Detail
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full border border-border/10 flex items-center justify-center mb-8 group transition-colors hover:border-primary/30">
                  {f.icon}
                </div>
                <h4 className="text-foreground font-heading font-semibold text-lg mb-4 tracking-wide">{f.title}</h4>
                <p className="text-foreground/40 text-sm leading-relaxed max-w-[240px] font-light">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.section>

      {/* ── Sponsors Section ── */}
      <motion.div {...reveal}>
        <SponsorsSection sponsors={data.sponsors} />
      </motion.div>

      {/* ── CTA Strip ── */}
      <motion.section 
        {...reveal}
        className="py-24 md:py-32 bg-primary"
      >
        <Container className="text-center">
          <h2 className="text-4xl md:text-7xl font-heading font-bold text-background mb-10 tracking-tighter uppercase leading-none">
            Partner With Orbiko
          </h2>
          <p className="text-background/60 mb-14 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Orbiko collaborates with designers, contractors, and consultants by providing factory support, modular production, and precision-crafted execution solutions.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-6 bg-background text-foreground px-12 py-5 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-secondary transition-all duration-300 shadow-2xl"
            >
              Explore Factory Support <ArrowRight size={18} />
            </motion.button>
          </Link>
        </Container>
      </motion.section>
    </div>
  );
}
