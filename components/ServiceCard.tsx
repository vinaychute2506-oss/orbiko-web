"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group p-8 border border-secondary bg-foreground hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
    >
      <div className="w-12 h-12 bg-secondary/50 flex items-center justify-center text-primary mb-6 rounded-sm group-hover:bg-accent group-hover:text-foreground transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6">
        {description}
      </p>
      <Link href={link} className="inline-flex items-center text-sm font-medium text-accent group-hover:text-primary transition-colors">
        Learn more <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
