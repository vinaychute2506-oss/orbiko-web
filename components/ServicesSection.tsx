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
    <section className="py-16 md:py-24 bg-black border-t border-white/5">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-[1.2] tracking-tight">
              Our Specialized<br />Architecture Services
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-white/40 hover:text-white transition-colors duration-300"
          >
            Explore All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {services.map((service, i) => {
            const imageUrl = service.backgroundImage || service.featuredImage?.node?.sourceUrl;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden bg-[#111] rounded-sm shadow-2xl"
                >
                  {imageUrl ? (
                    <motion.img
                      src={imageUrl}
                      alt={service.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-700 group-hover:opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-900 opacity-20" />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                    <span className="text-yellow-500/40 text-[10px] uppercase tracking-[0.3em] mb-4 font-black">
                      0{i + 1}
                    </span>
                    <h3 className="text-white font-heading font-medium text-2xl md:text-3xl mb-4 group-hover:text-yellow-500 transition-colors duration-500 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3 font-light italic">
                      {service.description}
                    </p>
                    <div className="mt-2">
                      <span className="inline-flex items-center gap-3 text-white text-[10px] uppercase tracking-[0.25em] font-bold border-b border-white/10 pb-1 group-hover:border-yellow-500 group-hover:text-yellow-500 transition-all duration-500">
                        Explore <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}