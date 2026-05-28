"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-background text-foreground px-6 pt-24 pb-12 border-t border-border/10 mt-auto relative overflow-hidden">
      {/* Structural wide Grid layout representing high-end firm footers */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        {/* Column 1: Studio Identity & Values */}
        <div className="space-y-6">
          <Link href="/" className="inline-block group">
            <h2 className="text-xl font-heading font-semibold tracking-[0.2em] uppercase transition-all duration-300">
              ORBIKO<span className="text-primary">.</span>
            </h2>
          </Link>
          <p className="text-foreground/60 text-xs leading-relaxed max-w-sm font-light">
            Crafting flawless spaces with factory-level precision. From premium luxury interior layouts to complex structural turnkeys, we integrate art into architecture.
          </p>
          <div className="flex gap-4 pt-2">
            {[
              { 
                icon: (
                  <svg className="w-4 h-4 fill-current text-foreground/50 hover:text-primary transition-colors" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                ), 
                href: "https://instagram.com" 
              },
              { 
                icon: (
                  <svg className="w-4 h-4 fill-current text-foreground/50 hover:text-primary transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                ), 
                href: "https://linkedin.com" 
              },
              { 
                icon: (
                  <svg className="w-4 h-4 fill-current text-foreground/50 hover:text-primary transition-colors" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ), 
                href: "https://facebook.com" 
              },
              { 
                icon: (
                  <svg className="w-4 h-4 fill-current text-foreground/50 hover:text-primary transition-colors" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ), 
                href: "https://twitter.com" 
              }
            ].map((soc, idx) => (
              <a 
                key={idx}
                href={soc.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full border border-border/20 flex items-center justify-center hover:border-primary transition-all duration-350"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Our Services / Expertise (Structured like Ichizel) */}
        <div className="space-y-6">
          <p className="text-[9px] tracking-[0.4em] text-foreground/40 font-bold uppercase">
            Our Expertise
          </p>
          <ul className="space-y-3.5 text-xs text-foreground/70 font-medium">
            <li>
              <Link href="/services/residential-interiors" className="hover:text-primary transition-all duration-300">
                Residential Fit-Outs
              </Link>
            </li>
            <li>
              <Link href="/services/commercial-interiors" className="hover:text-primary transition-all duration-300">
                Commercial Workspaces
              </Link>
            </li>
            <li>
              <Link href="/services/turnkey-renovations" className="hover:text-primary transition-all duration-300">
                Turnkey Project Executions
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-all duration-300">
                Architectural Space Layouts
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter & Journal Hub */}
        <div className="space-y-6">
          <p className="text-[9px] tracking-[0.4em] text-foreground/40 font-bold uppercase">
            Journal Newsletter
          </p>
          <p className="text-foreground/60 text-xs leading-relaxed font-light">
            Subscribe to our journal for design philosophies, material catalogs, and recent updates.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex items-center pt-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-foreground/5 border border-border/20 text-xs px-4 py-3 pr-10 focus:outline-none focus:border-primary uppercase tracking-widest font-bold placeholder:text-foreground/30 text-foreground"
            />
            <button 
              type="submit" 
              className="absolute right-2 text-foreground/60 hover:text-primary transition-colors duration-300"
              aria-label="Submit Email"
            >
              <ArrowRight size={16} />
            </button>
          </form>
          {subscribed && (
            <motion.p 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-[9px] text-primary uppercase font-bold tracking-widest"
            >
              Thank you for subscribing!
            </motion.p>
          )}
        </div>

        {/* Column 4: Contact Coordinates */}
        <div className="space-y-6">
          <p className="text-[9px] tracking-[0.4em] text-foreground/40 font-bold uppercase">
            Studio Coordinates
          </p>
          <div className="space-y-3.5 text-xs text-foreground/75 leading-relaxed font-medium">
            <p className="font-light">
              Orbiko Creative Studio, Kondhwa, Pune, MH 411048, India
            </p>
            <p>
              <a href="mailto:hello@orbiko.com" className="hover:text-primary transition-colors font-semibold">
                hello@orbiko.com
              </a>
            </p>
            <p className="text-foreground text-sm font-heading font-bold">
              <a href="tel:+919876543210" className="hover:text-primary transition-colors duration-300">
                +91 98765 43210
              </a>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-foreground/40 text-[9px] uppercase tracking-[0.2em] font-bold">
          © {new Date().getFullYear()} ORBIKO STUDIO. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] font-bold text-foreground/40">
          <Link href="/about" className="hover:text-primary transition-all duration-300">Our Philosophy</Link>
          <Link href="/portfolio" className="hover:text-primary transition-all duration-300">Works</Link>
          <Link href="/contact" className="hover:text-primary transition-all duration-300">Inquire</Link>
        </div>
      </div>
    </footer>
  );
}
