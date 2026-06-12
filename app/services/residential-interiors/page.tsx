"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Layout, 
  Layers, 
  Users, 
  Hammer, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Award,
  CircleCheck,
  Calculator,
  Compass,
  Factory,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ConsultModal } from "@/components/ConsultModal";

// Local image arrays from copied assets
const livingRoomImages = [
  "/images/residential/living-room-3.jpg",
  "/images/residential/living-room-new-1.jpg",
  "/images/residential/living-room-new-2.jpg",
  "/images/residential/living-room-new-3.jpg",
];

const bedroomImages = [
  "/images/residential/bedroom-1.jpg",
  "/images/residential/bedroom-3.jpg",
  "/images/residential/bedroom-4.jpg",
  "/images/residential/bedroom-5.jpg",
  "/images/residential/bedroom-6.jpg",
  "/images/residential/bedroom-7.jpg",
  "/images/residential/bedroom-8.jpg",
  "/images/residential/bedroom-9.jpg",
  "/images/residential/bedroom-10.jpg",
  "/images/residential/bedroom-11.jpg",
  "/images/residential/bedroom-12.jpg",
  "/images/residential/bedroom-13.jpg",
  "/images/residential/bedroom-14.jpg",
];

const kitchenImages = [
  "/images/residential/kitchen-1.jpg",
  "/images/residential/kitchen-2.jpg",
  "/images/residential/kitchen-5.jpg",
  "/images/residential/kitchen-6.jpg",
  "/images/residential/kitchen-7.jpg",
  "/images/residential/kitchen-8.jpg",
  "/images/residential/kitchen-9.jpg",
  "/images/residential/kitchen-10.jpg",
  "/images/residential/kitchen-11.jpg",
  "/images/residential/kitchen-12.jpg",
];


interface SlideshowProps {
  title: string;
  images: string[];
}

function CategorySlideshow({ title, images }: SlideshowProps) {
  const [startIndex, setStartIndex] = useState(0);

  const showNav = images.length > 4;

  const handlePrev = () => {
    if (!showNav) return;
    setStartIndex((prev) => (prev === 0 ? images.length - 4 : prev - 1));
  };

  const handleNext = () => {
    if (!showNav) return;
    setStartIndex((prev) => (prev >= images.length - 4 ? 0 : prev + 1));
  };

  // Ensure we always have exactly 4 images to show
  const visibleImages = showNav ? images.slice(startIndex, startIndex + 4) : images;

  // Determine grid columns based on number of visible images
  const gridColsClass = 
    visibleImages.length === 1 
      ? "grid-cols-1 max-w-2xl mx-auto" 
      : visibleImages.length === 2 
        ? "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto" 
        : visibleImages.length === 3 
          ? "grid-cols-1 sm:grid-cols-3 max-w-6xl mx-auto" 
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";

  // Aspect ratio class: single image can be wide aspect-[16/9] for high-end look
  const aspectClass = visibleImages.length === 1 ? "aspect-[16/9]" : "aspect-[4/3]";

  return (
    <div className="space-y-6 pt-12">
      <div className="flex justify-between items-end">
        <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground tracking-tight">
          {title}
        </h3>
        <div className="flex items-center gap-6">
          <Link 
            href="/portfolio?type=residential"
            className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/50 hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <span>View All Projects</span>
            <ArrowRight size={10} className="text-primary" />
          </Link>
        </div>
      </div>

      <div className="relative group">
        {/* Navigation Buttons */}
        {showNav && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/90 text-foreground border border-border/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 z-10 shadow-md opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/90 text-foreground border border-border/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300 z-10 shadow-md opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Carousel Grid */}
        <div className={`grid gap-6 ${gridColsClass}`}>
          <AnimatePresence mode="popLayout">
            {visibleImages.map((imgUrl) => (
              <motion.div
                key={imgUrl}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className={`${aspectClass} bg-card overflow-hidden border border-border/10 rounded-sm shadow-sm relative group/item`}
              >
                <img
                  src={imgUrl}
                  alt={`${title} design example`}
                  className="w-full h-full object-cover group-hover/item:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover/item:bg-black/0 transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


export default function ResidentialInteriorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Hero Banner */}
      <div className="w-full h-[65vh] relative overflow-hidden bg-background border-b border-border/10">
        <img
          src="/images/residential/bedroom-1.jpg"
          alt="Premium luxury residential bedroom design"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
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
            <p className="text-foreground/60 text-xs md:text-sm font-light mt-4 tracking-wider max-w-md">
              Crafted for the way you live. Designed for the life you love.
            </p>
          </Container>
        </div>
      </div>

      {/* Main Section */}
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left: Overview details */}
          <div className="lg:col-span-8 space-y-12">
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

            {/* Quick Badges row */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/80">10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Clock size={16} />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/80">45-Day Delivery Assurance</span>
              </div>
            </div>
          </div>

          {/* Right: Beige Card */}
          <div className="lg:col-span-4 bg-[#FAF6F0] text-[#2A1B15] p-10 border border-[#C9BAAA]/40 rounded-sm shadow-xl space-y-8 sticky top-32">
            <div>
              <h3 className="text-xl font-heading font-semibold tracking-tight">Ready to transform your home?</h3>
              <p className="text-[#2A1B15]/70 text-xs leading-relaxed font-light mt-3">
                Let's create a space that reflects your personality and elevates your everyday living.
              </p>
            </div>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full inline-flex items-center justify-between bg-[#2A1B15] text-[#FAF6F0] px-6 py-4.5 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-[#DC2626] transition-colors duration-300 shadow-md"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={14} />
            </button>

            <div className="text-center pt-2">
              <Link
                href="/portfolio?type=residential"
                className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#2A1B15]/60 hover:text-[#2A1B15] transition-colors"
              >
                View Related Projects →
              </Link>
            </div>
          </div>

        </div>

        {/* What We Deliver Segment */}
        <div className="pt-32 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block">What We Deliver</span>
            <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-foreground">
              End-to-End Interior Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Detailed Design Concepts & 3D Visuals",
                desc: "Creative concepts and realistic 3D previews of your future space.",
                icon: <Layout className="text-primary" size={20} />
              },
              {
                title: "Smart Storage & Space Optimization",
                desc: "Intelligent layouts that maximize space and enhance functionality.",
                icon: <Sparkles className="text-primary" size={20} />
              },
              {
                title: "Premium Material Selection",
                desc: "Carefully curated materials for elegance, durability, and comfort.",
                icon: <Layers className="text-primary" size={20} />
              },
              {
                title: "End-to-end Project Management",
                desc: "Seamless coordination from planning to perfect execution.",
                icon: <Users className="text-primary" size={20} />
              },
              {
                title: "Factory-Finish Modular Solutions",
                desc: "Precision-manufactured modular interiors with factory-level quality.",
                icon: <Hammer className="text-primary" size={20} />
              },
              {
                title: "Precision Installation & Final Handover",
                desc: "Expert installation and flawless finishing for a perfect home.",
                icon: <ShieldCheck className="text-primary" size={20} />
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border/10 p-8 flex flex-col justify-between h-full rounded-sm hover:border-primary/20 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-background border border-border/10 flex items-center justify-center rounded-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-foreground font-heading font-semibold text-base tracking-tight">{item.title}</h4>
                  <p className="text-foreground/60 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Under-grid Badge Strip */}
          <div className="flex flex-wrap justify-center items-center gap-12 py-6 border-y border-border/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary" size={18} />
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-foreground/80">10-Year Warranty</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-primary" size={18} />
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-foreground/80">45-Day Delivery Assurance</span>
            </div>
          </div>
        </div>

        {/* Carousel Galleries */}
        <div className="pt-32 space-y-16">
          <CategorySlideshow title="Living Room Interiors" images={livingRoomImages} />
          <CategorySlideshow title="Bedroom Interiors" images={bedroomImages} />
          <CategorySlideshow title="Kitchen Interiors" images={kitchenImages} />
        </div>

      </Container>

      {/* Footer CTA Banner */}
      <section className="py-24 bg-[#1E130F] text-[#FAF6F0] border-t border-border/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(229,222,212,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,222,212,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30" />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left CTA Call */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-primary text-[9px] uppercase tracking-[0.4em] font-extrabold block">
                Let's Build Something Exceptional
              </span>
              <h2 className="text-3xl md:text-6xl font-heading font-light tracking-tight leading-none text-[#FAF6F0]">
                Your dream home is just one step away<span className="text-primary font-black">.</span>
              </h2>
              <p className="text-[#FAF6F0]/60 text-xs md:text-sm font-light leading-relaxed max-w-xl">
                Our team is ready to understand your needs and create a space you'll love for years to come.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-primary text-background border border-primary px-8 py-4 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-primary transition-all duration-350 shadow-lg"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={12} />
                </button>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 bg-transparent text-[#FAF6F0] border border-[#FAF6F0]/20 px-8 py-4 text-[9px] uppercase tracking-[0.2em] font-bold hover:border-[#FAF6F0] transition-colors"
                >
                  <span>View Our Portfolio</span>
                </Link>
              </div>
            </div>

            {/* Right Value Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 border-l border-[#FAF6F0]/10 pl-0 lg:pl-12">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Factory size={18} className="text-primary" />
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#FAF6F0]">In-House Manufacturing</h4>
                </div>
                <p className="text-[10px] text-[#FAF6F0]/50 font-light leading-relaxed">Complete control over quality & timelines.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Calculator size={18} className="text-primary" />
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#FAF6F0]">Transparent Pricing</h4>
                </div>
                <p className="text-[10px] text-[#FAF6F0]/50 font-light leading-relaxed">No hidden costs, complete clarity.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-primary" />
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#FAF6F0]">On-Time Delivery</h4>
                </div>
                <p className="text-[10px] text-[#FAF6F0]/50 font-light leading-relaxed">45-Day Delivery Assurance.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-primary" />
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#FAF6F0]">10-Year Warranty</h4>
                </div>
                <p className="text-[10px] text-[#FAF6F0]/50 font-light leading-relaxed">Long-term assurance for your peace of mind.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Consultation Modal */}
      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
