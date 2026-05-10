"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background text-foreground px-6 py-20 border-t border-border/5 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
        
        {/* ── Brand ── */}
        <div className="space-y-6">
          <Link href="/" className="inline-block group">
            <h2 className="text-2xl font-heading font-light tracking-tight transition-all duration-300 group-hover:text-primary">
              Orbiko<span className="text-primary group-hover:text-foreground transition-colors duration-300">.</span>
            </h2>
          </Link>
          <p className="text-foreground/40 text-sm leading-relaxed max-w-xs font-light italic">
            Smart Interior Design and Precision Execution. Factory-finish detailing for modern luxury living.
          </p>
        </div>

        {/* ── Navigation ── */}
        <div className="space-y-8">
          <p className="text-[10px] tracking-[0.4em] text-primary/60 font-bold uppercase">
            Navigation
          </p>
          <ul className="grid grid-cols-2 gap-4 text-xs tracking-widest font-bold text-foreground/40">
            <li><Link href="/" className="hover:text-primary transition-colors duration-300 uppercase">Home</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary transition-colors duration-300 uppercase">Projects</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors duration-300 uppercase">Services</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors duration-300 uppercase">Journal</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors duration-300 uppercase">Contact</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors duration-300 uppercase">About</Link></li>
          </ul>
        </div>

        {/* ── Contact ── */}
        <div className="space-y-8">
          <p className="text-[10px] tracking-[0.4em] text-primary/60 font-bold uppercase">
            Consult Now
          </p>
          <div className="space-y-4">
            <p className="text-foreground/60 text-sm font-light">
              Kondhwa, Pune, India
            </p>
            <p className="text-foreground/60 text-sm font-medium">
              <a href="mailto:hello@orbiko.com" className="hover:text-primary transition-colors duration-300">hello@orbiko.com</a>
            </p>
            <p className="text-foreground text-lg font-heading font-bold">
              <a href="tel:+919876543210" className="hover:text-primary transition-colors duration-300">+91 98765 43210</a>
            </p>
          </div>

          {/* ── Minimal Map ── */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            whileHover={{ opacity: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 rounded-xl overflow-hidden grayscale transition-all duration-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4720.888657687084!2d73.88717707605011!3d18.456666182624506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb4df232468b%3A0xe7573835ab1af4ba!2sStanza%20Living%20Austin%20House%20%7C%20Coliving%20PG%20in%20Kondhwa!5e1!3m2!1sen!2sin!4v1777186192542!5m2!1sen!2sin"
              width="100%"
              height="160"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Strip ── */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-24 pt-8 border-t border-border/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-foreground/20 text-[10px] uppercase tracking-[0.2em] font-bold">
          © {new Date().getFullYear()} Orbiko Studio. All rights reserved.
        </p>
        <div className="flex gap-8">
          <p className="text-foreground/20 text-[10px] uppercase tracking-[0.2em] font-bold">
            Designed by <span className="text-foreground/40">Orbiko Creative</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
