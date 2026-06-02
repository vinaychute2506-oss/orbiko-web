"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Shield, Sparkles, Paintbrush, Hammer } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ConsultModal } from "@/components/ConsultModal";

const solutions = [
  {
    title: "Modular Kitchens",
    desc: "Ergonomic designs featuring soft-close Tandem boxes, profile handles, high-end quartz countertops, and water-resistant materials.",
    image: "/images/turnkey_hero_after.png",
    icon: <Sparkles className="text-primary" size={20} />
  },
  {
    title: "Master Bedroom Suites",
    desc: "Luxury floor-to-ceiling wardrobes, custom upholstered headboards, hidden storage solutions, and integrated ambient lighting grids.",
    image: "/images/residential_hero.png",
    icon: <Home className="text-primary" size={20} />
  },
  {
    title: "Aesthetic Living Rooms",
    desc: "Sleek wall-mounted TV consoles with wood fluted panels, marble textures, bespoke sofas, and architectural display cases.",
    image: "/images/home_hero.png",
    icon: <Paintbrush className="text-primary" size={20} />
  },
  {
    title: "Kids & Study Rooms",
    desc: "Multi-functional layouts featuring study desks, book shelves, magnetic pinboards, and vibrant space optimization panels.",
    image: "/images/about_hero.png",
    icon: <Hammer className="text-primary" size={20} />
  }
];

export default function ResidentialInteriorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Hero Banner */}
      <div className="w-full h-[65vh] relative overflow-hidden bg-background border-b border-border/10">
        <img
          src="/images/residential_hero.png"
          alt="Premium organic linen bedroom suite"
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
              Premium Homes
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-light text-foreground tracking-tight leading-none max-w-5xl">
              Residential Interiors<span className="text-primary font-black">.</span>
            </h1>
          </Container>
        </div>
      </div>

      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left: Overview details */}
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block">Service Overview</span>
              <h2 className="text-3xl md:text-5xl font-heading font-light text-foreground leading-[1.15] tracking-tight">
                Designed For Comfort. Engineered For Perfection.
              </h2>
              <div className="space-y-4 text-foreground/75 text-sm md:text-base leading-relaxed font-light pl-6 border-l border-primary/20">
                <p>
                  Transform your home with thoughtfully designed interiors that combine modern aesthetics, smart space planning, premium materials, and factory-finish craftsmanship.
                </p>
                <p>
                  From concept design and realistic 3D visualizations to manufacturing and installation, Orbiko manages every stage in-house to ensure superior quality, complete transparency, and flawless execution.
                </p>
              </div>
            </div>

            {/* Slider showcase block representing horizontal sliders */}
            <div className="space-y-8 pt-8">
              <div className="flex justify-between items-end border-b border-border/10 pb-6">
                <div>
                  <span className="text-primary text-[9px] uppercase tracking-[0.25em] font-bold">Solutions Catalog</span>
                  <h3 className="text-2xl font-heading font-semibold text-foreground mt-2 tracking-tight">Home Solutions</h3>
                </div>
                <div className="flex gap-2">
                  {solutions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-10 h-1 transition-all duration-300 ${
                        i === activeIndex ? "bg-primary" : "bg-foreground/25"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Slider View */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-card border border-border/10 rounded-sm shadow-xl">
                <img
                  src={solutions[activeIndex].image}
                  alt={solutions[activeIndex].title}
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="max-w-md">
                    <span className="text-primary text-[9px] uppercase tracking-widest font-bold">0{activeIndex + 1} / SOLUTIONS</span>
                    <h4 className="text-lg font-bold font-heading text-foreground mt-1">{solutions[activeIndex].title}</h4>
                    <p className="text-[11px] text-foreground/70 font-light mt-2 leading-relaxed">{solutions[activeIndex].desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {solutions.map((sol, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border/10 p-8 flex flex-col justify-between h-full rounded-sm hover:border-primary/20 transition-all duration-300 shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 bg-background border border-border/10 flex items-center justify-center rounded-sm">
                        {sol.icon}
                      </div>
                      <span className="text-[9px] font-bold text-foreground/25">0{index + 1}</span>
                    </div>
                    <h4 className="text-foreground font-heading font-semibold text-lg tracking-tight">{sol.title}</h4>
                    <p className="text-foreground/60 text-xs leading-relaxed font-light">{sol.desc}</p>
                  </div>
                  <div className="pt-6">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] font-bold text-primary hover:text-foreground transition-colors"
                    >
                      Inquire Details <ArrowRight size={10} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right sticky sidebar CTA and What We Deliver */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
            
            {/* What We Deliver Card */}
            <div className="bg-card border border-border/10 p-10 rounded-sm shadow-xl space-y-8">
              <div>
                <span className="text-primary text-[9px] uppercase tracking-[0.2em] font-bold block mb-4">Value Checklist</span>
                <h3 className="text-xl font-heading font-semibold text-foreground tracking-tight">What We Deliver</h3>
              </div>
              
              <ul className="space-y-4 text-xs font-light text-foreground/80 leading-relaxed">
                {[
                  "Detailed Design Concepts & 3D Visuals",
                  "Smart Storage & Space Optimization",
                  "Premium Material Selection",
                  "End-to-End Project Management",
                  "Factory-Finish Modular Solutions",
                  "Precision Installation & Final Handover"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-border/10 text-center">
                <p className="text-[10px] uppercase tracking-widest font-extrabold text-primary">
                  10-Year Warranty
                </p>
                <p className="text-[9px] uppercase tracking-widest font-bold text-foreground/45 mt-1">
                  45-Day Delivery Assurance
                </p>
              </div>
            </div>

            {/* Callback Card */}
            <div className="bg-foreground text-background p-10 rounded-sm shadow-xl space-y-6">
              <h3 className="text-lg font-heading font-medium text-background tracking-tight">Schedule A Consultation</h3>
              <p className="text-background/60 text-xs leading-relaxed font-light">
                Assess site dimensions with our supervisors, map out layouts, and get a completely itemized budget estimation.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-between bg-primary text-background border border-primary px-6 py-4 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-primary transition-all duration-300"
              >
                <span>Book Free Site Audit</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </Container>

      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
