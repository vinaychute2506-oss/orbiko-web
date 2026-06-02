"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarRange, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ConsultModal } from "./ConsultModal";
import { SiteSettings } from "@/lib/api";

const HERO_SLIDES = [
  { 
    tagline: "FLAWLESS LIVING STARTS AT HOME", 
    headline: (
      <>
        Interiors that<br />reflect <span className="font-serif italic font-light text-primary">you.</span>
      </>
    ), 
    description: "Designing seamless spaces with factory-level precision, customized layouts, and end-to-end turnkey support." 
  },
  { 
    tagline: "PRECISION EXECUTION & CRAFTSMANSHIP", 
    headline: (
      <>
        In-House Factory<br />Finish <span className="font-serif italic font-light text-primary">Detailing.</span>
      </>
    ), 
    description: "Providing high-end modular production, structural engineering, and direct supervisor support for modern homes." 
  },
  { 
    tagline: "INTEGRATING ART INTO ARCHITECTURE", 
    headline: (
      <>
        Minimal Design.<br />Timeless <span className="font-serif italic font-light text-primary">Living.</span>
      </>
    ), 
    description: "Creating functional, elegant residential and commercial spaces that adapt perfectly to your modern lifestyle." 
  },
];

interface HeroSectionProps {
  settings?: SiteSettings | null;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const slides = HERO_SLIDES;
  // Use settings video if available, else standard elegant loop
  const videoUrl = settings?.heroVideo ?? "/videos/hero_video.mp4";
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[100dvh] flex flex-col items-center justify-center bg-background overflow-hidden border-b border-border/10">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-[0.4]"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-secondary opacity-30" />
        )}
        {/* Soft background grid overlay representing architecture plans */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(42,27,21,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,27,21,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        {/* Gradient shield */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Main High-Impact Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 w-full flex flex-col items-center pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.9, ease: "easeOut" as const }}
            className="w-full space-y-8"
          >
            {/* Tagline */}
            <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold block mb-4">
              {slides[current].tagline}
            </span>
            
            {/* Headline */}
            <h1 className="text-[44px] sm:text-6xl md:text-8xl font-heading font-semibold leading-[1.08] text-foreground tracking-tight whitespace-pre-line">
              {slides[current].headline}
            </h1>
            
            {/* Sub-description */}
            <p className="text-foreground/70 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              {slides[current].description}
            </p>

            {/* Premium Dual CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 bg-primary text-background border border-primary px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-primary transition-all duration-350 shadow-2xl"
              >
                <CalendarRange size={14} />
                <span>Book Free Consultation</span>
              </motion.button>
              
              <Link href="/portfolio" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 border border-foreground/20 text-foreground bg-transparent px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:border-primary hover:text-primary transition-all duration-350 cursor-pointer"
                >
                  <span>Explore Selected Works</span>
                  <ArrowRight size={14} />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Slideshow Indicators */}
      <div className="absolute bottom-16 left-6 md:left-12 z-20 flex flex-col gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1 transition-all duration-700 ${
              i === current ? "bg-primary h-10" : "bg-foreground/20 h-5 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Visual Down Scroll Pointer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-foreground/45 flex flex-col items-center gap-1.5 cursor-pointer text-[9px] uppercase tracking-[0.2em] font-bold"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span>SCROLL TO DESIGN</span>
          <ChevronDown size={14} className="text-primary" />
        </motion.div>
      </div>

      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
