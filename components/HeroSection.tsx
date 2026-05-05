"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { SiteSettings } from "@/lib/api";

const FALLBACK_SLIDES = [
  { headline: "Designing Spaces That\nDefine Modern Living", subheading: "Luxury Architecture & Interiors" },
  { headline: "Crafting Environments\nThat Inspire the Future", subheading: "Bespoke Design Excellence" },
  { headline: "Where Elegance Meets\nUnmatched Function", subheading: "25 Years of Award-Winning Design" },
];

interface HeroSectionProps {
  settings?: SiteSettings | null;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const slides = FALLBACK_SLIDES;
  const videoUrl = settings?.heroVideo ?? null;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen min-h-[650px] flex flex-col items-center justify-center bg-black">
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
          <div className="w-full h-full bg-neutral-900" />
        )}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 text-center text-white max-w-7xl mx-auto px-6 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <span className="text-yellow-500 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold block mb-10 md:mb-12">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-yellow-500 text-black px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors duration-300 shadow-2xl"
                >
                  View Projects <ArrowRight size={14} />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-4 border border-white/20 text-white px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Inquire Now
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
              i === current ? "bg-yellow-500 w-12" : "bg-white/20 w-6"
            }`}
          />
        ))}
      </div>
    </section>
  );
}