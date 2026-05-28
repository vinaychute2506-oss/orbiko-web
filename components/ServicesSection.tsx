"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui/Container";

type Service = {
  title: string;
  slug: string;
  description?: string;
  backgroundImage?: string | null;
  featuredImage?: {
    node?: {
      sourceUrl: string;
    };
  };
};

interface ServicesSectionProps {
  services?: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border/10">
      <Container>
        {/* Header - Styled like high-end architectural studio portfolios */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">
              Core Competencies
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-light text-foreground leading-[1.1] tracking-tight">
              Design & Fit-Out Services<span className="text-primary font-black">.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-foreground/50 hover:text-primary transition-colors duration-350"
          >
            <span>View All Expertises</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Dynamic Service Grid (Copied from minimalist high-contrast structures) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => {
            const imageUrl = service.backgroundImage || service.featuredImage?.node?.sourceUrl;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" as const }}
                className="group flex flex-col h-full"
              >
                {/* Visual Area */}
                <Link
                  href={`/services/${service.slug}`}
                  className="relative block aspect-[4/5] overflow-hidden bg-secondary border border-border/20 shadow-lg mb-6"
                >
                  {imageUrl ? (
                    <motion.img
                      src={imageUrl}
                      alt={service.title}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700 group-hover:opacity-75 grayscale group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-secondary opacity-30" />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 left-6 text-foreground/30 font-bold text-xs tracking-widest uppercase">
                    / 0{i + 1}
                  </div>
                </Link>

                {/* Text Area */}
                <div className="flex flex-col flex-grow justify-between pl-2">
                  <div>
                    <h3 className="text-foreground font-heading font-semibold text-xl md:text-2xl mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/60 text-xs leading-relaxed mb-6 font-light line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  
                  <div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-bold text-foreground hover:text-primary border-b border-border/10 pb-1 group-hover:border-primary transition-all duration-350"
                    >
                      <span>Explore Segment</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
