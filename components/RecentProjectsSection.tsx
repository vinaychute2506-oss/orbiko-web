"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/api";
import { Container } from "./ui/Container";

interface RecentProjectsSectionProps {
  projects: Project[];
}

export function RecentProjectsSection({ projects }: RecentProjectsSectionProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-black border-t border-white/5">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <span className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white leading-[1.2] tracking-tight">
              Selected Architectural Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] font-bold text-white/40 hover:text-white transition-colors duration-300"
          >
            View Portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {projects.slice(0, 4).map((project, i) => {
            const imageUrl = project.featuredImage;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                className="group"
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="relative overflow-hidden aspect-[16/10] block bg-[#111] rounded-sm"
                >
                  {imageUrl ? (
                    <motion.img
                      src={imageUrl}
                      alt={project.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-neutral-900" />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-[1px] w-8 bg-yellow-500" />
                      <p className="text-yellow-500 text-[10px] uppercase tracking-[0.25em] font-bold">
                        {project.projectType || "Architecture"}
                      </p>
                    </div>
                    
                    <h3 className="text-white font-heading font-medium text-2xl md:text-3xl mb-2 tracking-tight group-hover:text-yellow-500 transition-colors duration-500 leading-tight">
                      {project.title}
                    </h3>
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