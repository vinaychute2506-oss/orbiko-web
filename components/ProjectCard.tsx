"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  location?: string | null;
  featuredImage?: string | null;
}

export function ProjectCard({ slug, title, location, featuredImage }: ProjectCardProps) {
  // Fallback image placeholder if WordPress doesn't return an image
  const imageSrcRaw = featuredImage || "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop";
  const imageSrc = encodeURI(imageSrcRaw);

  if (!imageSrc) return null;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden bg-secondary/20"
    >
      <Link href={`/projects/${slug}`} className="block">
        <div className="aspect-[4/5] overflow-hidden relative">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
          {location && (
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-2">{location}</p>
          )}
          <h3 className="text-foreground text-2xl font-heading font-medium mb-4">{title}</h3>
          <div className="flex items-center text-foreground/80 text-sm gap-2">
            View Project <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
