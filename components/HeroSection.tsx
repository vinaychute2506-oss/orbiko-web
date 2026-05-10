"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ConsultModal } from "./ConsultModal";

const FALLBACK_SLIDES = [
  { headline: "ORBIKO INTERIORS", subheading: "Premium Interior Solutions" },
  { headline: "Smart Space Planning.\nPrecision Execution.", subheading: "Factory-Level Precision" },
  { headline: "Modern Luxury.\nTimeless Interiors.", subheading: "Factory-Finish Detailing" },
];

interface HeroSectionProps {
  settings?: SiteSettings | null;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const slides = FALLBACK_SLIDES;
  const videoUrl = settings?.heroVideo ?? null;
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[650px] flex flex-col items-center justify-center bg-background">
      {/* ── Background (Pointer events disabled to allow scroll) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-secondary" />
        )}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 text-center text-foreground max-w-7xl mx-auto px-6 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <span className="text-primary text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold block mb-10 md:mb-12">
              {slides[current].subheading}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[90px] font-heading font-semibold leading-[1.05] mb-14 md:mb-16 whitespace-pre-line tracking-tight">
              {slides[current].headline}
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-primary text-background px-12 py-6 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-foreground transition-colors duration-300 shadow-2xl"
                >
                  View Our Portfolio <ArrowRight size={14} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Indicators ── */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-700 ${
              i === current ? "bg-primary w-12" : "bg-foreground/20 w-6"
            }`}
          />
        ))}
      </div>

      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
