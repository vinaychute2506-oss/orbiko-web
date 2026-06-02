"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldAlert, Sparkles, RefreshCw, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ConsultModal } from "@/components/ConsultModal";

export default function TurnkeyRenovationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isResizing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Hero Banner */}
      <div className="w-full h-[65vh] relative overflow-hidden bg-background border-b border-border/10">
        <img
          src="/images/turnkey_hero_after.png"
          alt="Luxury wood and beige living room"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
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
              Turnkey Transformations
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-light text-foreground tracking-tight leading-none max-w-5xl">
              Turnkey Renovations<span className="text-primary font-black">.</span>
            </h1>
          </Container>
        </div>
      </div>

      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Transformation Comparison & Detail */}
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block">Service Overview</span>
              <h2 className="text-3xl md:text-5xl font-heading font-light text-foreground leading-[1.15] tracking-tight">
                Complete Overhauls. Guaranteed Zero Stress.
              </h2>
              <div className="space-y-4 text-foreground/75 text-sm md:text-base leading-relaxed font-light pl-6 border-l border-primary/20">
                <p>
                  Transform outdated homes, offices, and commercial spaces into modern, functional environments with Orbiko's complete turnkey renovation solutions. From design planning and 3D visualization to manufacturing, civil work, and final installation, we manage everything under one roof.
                </p>
              </div>
            </div>

            {/* Before/After Slide Showcase */}
            <div className="space-y-8 pt-8">
              <div>
                <span className="text-primary text-[9px] uppercase tracking-[0.25em] font-bold block">Interactive View</span>
                <h3 className="text-2xl font-heading font-semibold text-foreground mt-2 tracking-tight">Before / After Comparison</h3>
                <p className="text-foreground/60 text-xs font-light mt-2 leading-relaxed">
                  Drag the slider below or click to observe how outdated spaces transform into luxury residences with modular factory precision.
                </p>
              </div>

              {/* Slide Container */}
              <div 
                className="relative aspect-[16/10] w-full overflow-hidden border border-border/10 rounded-sm shadow-xl select-none cursor-ew-resize"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsResizing(true)}
                onMouseUp={() => setIsResizing(false)}
                onMouseLeave={() => setIsResizing(false)}
              >
                {/* BEFORE Image (Outdated masonry room) */}
                <div className="absolute inset-0 z-10 w-full h-full bg-secondary">
                  <img
                    src="/images/turnkey_hero_before.png"
                    alt="Outdated broken masonry room before renovation"
                    className="absolute inset-0 w-full h-full object-cover brightness-90"
                    draggable={false}
                  />
                  <div className="absolute top-6 left-6 bg-black/60 px-3.5 py-1.5 text-[9px] uppercase tracking-widest text-white font-bold backdrop-blur-sm rounded-sm">
                    Outdated Masonry
                  </div>
                </div>

                {/* AFTER Image (Luxury wood and beige living room) */}
                <div 
                  className="absolute inset-0 z-20 h-full overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  {/* Must enforce the full parent container width inside this clipped frame */}
                  <div className="absolute top-0 left-0 w-[100vw] h-full" style={{ width: "100%", height: "100%" }}>
                    <img
                      src="/images/turnkey_hero_after.png"
                      alt="Luxury wood and beige living room after renovation"
                      className="absolute inset-0 w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute top-6 right-6 bg-primary px-3.5 py-1.5 text-[9px] uppercase tracking-widest text-background font-bold rounded-sm">
                      Orbiko Finished Space
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 z-30 w-[2px] bg-primary cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-primary border-4 border-background shadow-2xl flex items-center justify-center text-background">
                    <RefreshCw size={12} className="animate-spin-slow" />
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Transformation Steps */}
            <div className="pt-12 border-t border-border/10 space-y-8">
              <div>
                <span className="text-primary text-[9px] uppercase tracking-[0.25em] font-bold block">Execution Breakdown</span>
                <h3 className="text-2xl font-heading font-semibold text-foreground mt-2 tracking-tight">Our Renovation Cycle</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { num: "01", title: "Civil & Masonry Audits", desc: "Evaluating load-bearing columns, re-routing conduits, and prepping walls for custom profiling." },
                  { num: "02", title: "Modular Production", desc: "Pre-fabricating all TV structures, kitchen carcasses, and wardrobes under factory conditions." },
                  { num: "03", title: "Structural Detailing", desc: "Executing micro-finishing, custom wood trims, and final lighting hookups by in-house teams." }
                ].map((step, idx) => (
                  <div key={idx} className="bg-card border border-border/10 p-8 rounded-sm shadow-sm space-y-4">
                    <span className="text-xl font-heading font-bold text-primary/30 block">{step.num}</span>
                    <h4 className="text-foreground font-heading font-semibold text-sm tracking-tight">{step.title}</h4>
                    <p className="text-foreground/60 text-xs leading-relaxed font-light">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right sticky sidebar CTA & Checklist */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
            
            {/* What We Deliver Card */}
            <div className="bg-card border border-border/10 p-10 rounded-sm shadow-xl space-y-8">
              <div>
                <span className="text-primary text-[9px] uppercase tracking-[0.2em] font-bold block mb-4">Value Checklist</span>
                <h3 className="text-xl font-heading font-semibold text-foreground tracking-tight">What We Deliver</h3>
              </div>
              
              <ul className="space-y-4 text-xs font-light text-foreground/80 leading-relaxed">
                {[
                  "Renovation Planning & Space Optimization",
                  "3D Visuals & Design Development",
                  "Civil, Electrical & Interior Works",
                  "Custom Furniture & Modular Solutions",
                  "End-to-End Project Management",
                  "Premium Finishing & Quality Assurance"
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
                  In-House Factory Production
                </p>
              </div>
            </div>

            {/* B2C/B2B Renovation consulting Card */}
            <div className="bg-foreground text-background p-10 rounded-sm shadow-xl space-y-6">
              <h3 className="text-lg font-heading font-medium text-background tracking-tight">Coordinate A Site Renovation</h3>
              <p className="text-background/60 text-xs leading-relaxed font-light">
                Our managers assess structural viability, calculate complete plumbing/electrical layouts, and present clear itemized costings.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-between bg-primary text-background border border-primary px-6 py-4.5 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-primary transition-all duration-300 shadow-lg"
              >
                <span>Inquire Transformation</span>
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
