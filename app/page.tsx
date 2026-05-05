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
      icon: <Lightbulb size={32} strokeWidth={1} className="text-yellow-500" />,
      title: "Full Service",
      description: "From concept to completion, we handle every aspect of your project with precision.",
    },
    {
      icon: <BadgeDollarSign size={32} strokeWidth={1} className="text-yellow-500" />,
      title: "Deliver Value",
      description: "We provide optimal value for every client, ensuring no design compromises.",
    },
    {
      icon: <Handshake size={32} strokeWidth={1} className="text-yellow-500" />,
      title: "Partners",
      description: "We view our clients as partners in our mission to create beautiful spaces.",
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1} className="text-yellow-500" />,
      title: "Integrity",
      description: "Professional integrity forms the bedrock of our business and collaborations.",
    },
  ];

  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <div className="bg-black">
      {/* ── Hero ── */}
      <HeroSection settings={data.settings} />

      {/* ── Quote ── */}
      <motion.div {...reveal}>
        <Quote />
      </motion.div>

      {/* ── About Section ── */}
      <motion.section 
        {...reveal}
        className="py-16 md:py-24 bg-black border-t border-white/5"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
            <div className="flex items-start">
              <div className="border border-white/10 p-10 text-center min-w-[140px]">
                <p className="text-6xl md:text-7xl font-heading font-bold text-yellow-500 leading-none">25</p>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-8 leading-relaxed font-medium">
                  Years of<br />Excellence
                </p>
              </div>
            </div>

            <div>
              <span className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">Discovery</span>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold leading-[1.2] text-white tracking-tight">
                Creative solutions by professional designers
              </h2>
            </div>

            <div className="pt-2">
              <p className="text-white/60 text-lg leading-relaxed mb-12 font-light italic border-l border-white/10 pl-8">
                At Orbiko, we believe architecture is more than just structures — it’s about creating environments that inspire, function seamlessly, and stand the test of time.
              </p>
              <Link href="/about" className="group">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-white"
                >
                  <span className="border-b border-white/20 pb-1 transition-all duration-300 group-hover:border-yellow-500">
                    Our Story
                  </span>
                  <ArrowRight size={14} className="group-hover:text-yellow-500 transition-colors" />
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
        className="py-16 md:py-24 bg-black border-t border-white/5"
      >
        <Container>
          <div className="mb-20 text-center">
            <span className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">Our Promise</span>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-white max-w-3xl mx-auto leading-[1.2] tracking-tight">
              We work to an extremely high standard of satisfaction
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
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 group transition-colors hover:border-yellow-500/30">
                  {f.icon}
                </div>
                <h4 className="text-white font-heading font-semibold text-lg mb-4 tracking-wide">{f.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed max-w-[240px] font-light">{f.description}</p>
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
        className="py-24 md:py-32 bg-yellow-500"
      >
        <Container className="text-center">
          <h2 className="text-4xl md:text-7xl font-heading font-bold text-black mb-10 tracking-tighter uppercase leading-none">
            Let's build your vision.
          </h2>
          <p className="text-black/60 mb-14 max-w-xl mx-auto text-xl leading-relaxed font-medium">
            Collaborate with our team of elite designers to bring your project to life with precision and luxury.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-6 bg-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-zinc-900 transition-all duration-300 shadow-2xl"
            >
              Start a Conversation <ArrowRight size={18} />
            </motion.button>
          </Link>
        </Container>
      </motion.section>
    </div>
  );
}