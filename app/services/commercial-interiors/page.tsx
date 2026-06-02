"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, Award, Layout, Briefcase, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ConsultModal } from "@/components/ConsultModal";

const categories = [
  {
    id: "offices",
    name: "Corporate Offices",
    headline: "Optimized Workspaces Driving Collaboration & Efficiency",
    desc: "From acoustic meeting pods to ergonomic desk layouts and custom lighting panels, we build modern office spaces customized to your operational scale.",
    image: "/images/commercial_hero.png",
    specs: ["Ergonomic Desking Systems", "Acoustic Insulation & Pods", "Smart Conference Rooms", "Integrated IT Cabinets"]
  },
  {
    id: "retail",
    name: "Retail & Cafés",
    headline: "Aesthetic Commercial Spaces Boosting Brand Identity",
    desc: "Creating high-impact experience centers, cafés, and retail showrooms designed to elevate footfall, encourage visual engagement, and reflect brand values.",
    image: "/images/about_partner.png",
    specs: ["Premium Glass Display Cabinets", "Thematic Accent Lighting", "Durable Commercial Countertops", "Sleek Lounge Frameworks"]
  },
  {
    id: "showrooms",
    name: "Experience Showrooms",
    headline: "Visual Hubs Displaying Premium Products Luxuriously",
    desc: "Engineered display galleries with custom structures, premium wood accents, and modular configurations built in our manufacturing factories.",
    image: "/images/home_hero.png",
    specs: ["Dynamic Modular Shelving", "High-End Wood Detailing", "Integrated Product Pedestals", "Ambient Backdrop Grids"]
  }
];

export default function CommercialInteriorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("offices");

  const currentCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Hero Banner */}
      <div className="w-full h-[65vh] relative overflow-hidden bg-background border-b border-border/10">
        <img
          src="/images/commercial_hero.png"
          alt="Sleek modern minimalist office"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-24">
          <Container>
            <Link
              href="/services"
              className="inline-flex items-center text-foreground/45 hover:text-foreground transition-colors mb-12 text-[10px] uppercase tracking-[0.22em] font-bold"
            >
              <ArrowLeft size={14} className="mr-2" /> All Services
            </Link>
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">
              Premium Workspaces
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-light text-foreground tracking-tight leading-none max-w-5xl">
              Commercial Interiors<span className="text-primary font-black">.</span>
            </h1>
          </Container>
        </div>
      </div>

      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Tab Controls and Tab Detail */}
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block">Overview</span>
              <h2 className="text-3xl md:text-5xl font-heading font-light text-foreground leading-[1.15] tracking-tight">
                High-Performance Spaces For Growing Brands
              </h2>
              <p className="text-foreground/75 text-sm md:text-base leading-relaxed font-light pl-6 border-l border-primary/20">
                Orbiko designs and delivers premium commercial spaces including offices, cafés, and retail showrooms. We optimize spatial layouts to align with workflow paths, brand aesthetics, and absolute structural durability.
              </p>
            </div>

            {/* Tab selection grid */}
            <div className="space-y-10 pt-8">
              <div className="flex border-b border-border/10 pb-4 overflow-x-auto gap-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`pb-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative flex-shrink-0 ${
                      activeTab === cat.id ? "text-primary border-b-2 border-primary" : "text-foreground/50 hover:text-foreground"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Tab Display Area */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                >
                  {/* Category Details */}
                  <div className="md:col-span-7 space-y-6">
                    <span className="text-primary text-[8px] uppercase tracking-widest font-bold">Category Feature</span>
                    <h3 className="text-xl font-heading font-semibold text-foreground tracking-tight leading-relaxed">
                      {currentCategory.headline}
                    </h3>
                    <p className="text-foreground/60 text-xs leading-relaxed font-light">
                      {currentCategory.desc}
                    </p>

                    {/* Bullet specs */}
                    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentCategory.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-foreground/75 font-semibold">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Image */}
                  <div className="md:col-span-5 aspect-[4/3] border border-border/10 bg-card rounded-sm overflow-hidden shadow-lg relative">
                    <img
                      src={currentCategory.image}
                      alt={currentCategory.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Commercial Project Grid Grid */}
            <div className="pt-12 border-t border-border/10 space-y-8">
              <div>
                <span className="text-primary text-[9px] uppercase tracking-[0.25em] font-bold block">Selected Portfolio</span>
                <h3 className="text-2xl font-heading font-semibold text-foreground mt-2 tracking-tight">Recent Workspaces</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Corporate Oasis Offices", loc: "Whitefield, Bangalore", img: "/images/commercial_hero.png" },
                  { title: "Bespoke Design Gallery", loc: "Indiranagar, Bangalore", img: "/images/about_partner.png" }
                ].map((proj, idx) => (
                  <div key={idx} className="group relative aspect-[4/3] bg-card overflow-hidden border border-border/10 rounded-sm shadow-md">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700 opacity-60 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div>
                        <span className="text-primary text-[8px] uppercase tracking-wider font-bold">{proj.loc}</span>
                        <h4 className="text-sm font-bold text-foreground mt-1">{proj.title}</h4>
                      </div>
                      <Link 
                        href="/portfolio"
                        className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background border border-foreground/10 group-hover:bg-primary group-hover:border-primary transition-all"
                        aria-label="View Project"
                      >
                        <Eye size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right sticky sidebar CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit space-y-8">
            <div className="bg-card border border-border/10 p-10 rounded-sm shadow-xl space-y-8">
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-primary" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground">B2B Standards</span>
              </div>
              <h3 className="text-xl font-heading font-medium text-foreground tracking-tight">Request Project Estimate</h3>
              <p className="text-foreground/60 text-xs leading-relaxed font-light">
                Orbiko partners with workspace managers, building developers, and designers. We offer completely custom estimations and modular carpentry.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-between bg-primary text-background border border-primary px-8 py-4.5 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-primary transition-all duration-300 shadow-lg"
              >
                Request Site Consult <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </Container>

      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
