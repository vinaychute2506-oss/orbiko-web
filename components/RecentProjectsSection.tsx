"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/api";
import { Container } from "./ui/Container";

interface RecentProjectsSectionProps {
  projects: Project[];
}

export function RecentProjectsSection({ projects }: RecentProjectsSectionProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border/10">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-light text-foreground leading-[1.1] tracking-tight">
              Aesthetics & Execution<span className="text-primary font-black">.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-foreground/50 hover:text-primary transition-colors duration-350"
          >
            <span>Explore Entire Archive</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Masonry-style Grid (copied from minimalist luxury architect sites) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.slice(0, 4).map((project, i) => {
            const imageUrl = project.featuredImage;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" as const }}
                className={`group flex flex-col ${isEven ? "" : "md:translate-y-16"}`}
              >
                {/* Visual block */}
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="relative overflow-hidden aspect-[4/3] block bg-card border border-border/20 shadow-xl"
                >
                  {imageUrl ? (
                    <motion.img
                      src={imageUrl}
                      alt={project.title}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.9 }}
                      className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-secondary opacity-30" />
                  )}
                  
                  {/* Subtle clean bottom mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
                  
                  {/* Overlay location & tag */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 bg-background/80 backdrop-blur-md px-3 py-1.5 border border-border/10">
                    <MapPin size={10} className="text-primary" />
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/80">
                      {project.projectType || "Residential"}
                    </span>
                  </div>
                </Link>

                {/* Info block under image */}
                <div className="pt-6 pl-2 space-y-2">
                  <h3 className="text-foreground font-heading font-semibold text-xl md:text-2xl tracking-tight group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-foreground/50 text-[10px] uppercase tracking-[0.25em] font-bold">
                    <span>Explore Space Details</span>
                    <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform duration-300 text-primary" />
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
