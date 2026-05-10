"use client";

import { Container } from "./ui/Container";
import { motion } from "framer-motion";

export function Quote() {
  return (
    <section className="py-16 md:py-24 bg-background border-y border-border/5">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-light leading-[1.6] tracking-tight text-foreground italic">
            “We create spaces that feel <span className="text-primary font-medium">seamless</span>, functional, and deeply personal to your lifestyle.”
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-12 h-[1px] w-24 bg-primary/30 mx-auto origin-center" 
          />
        </motion.div>
      </Container>
    </section>
  );
}
