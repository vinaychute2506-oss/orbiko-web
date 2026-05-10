// Cleaned up button text
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "./ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { ConsultModal } from "./ConsultModal";

const services = [
  { name: "Residential Interiors", href: "/services/residential-interiors" },
  { name: "Commercial Interiors", href: "/services/commercial-interiors" },
  { name: "Turnkey Renovation Solutions", href: "/services/turnkey-renovations" },
  { name: "View All Services", href: "/services", highlighted: true },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const navItemClasses = "flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] transition font-bold leading-none px-4 py-3 hover:text-primary";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-20 flex items-center ${
        mounted && isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 relative">
        <nav className="flex items-center justify-between w-full">

          {/* LEFT → LOGO */}
          <div className="flex items-center z-10 min-w-[150px]">
            <Link href="/" className="text-xl font-bold tracking-[0.2em] uppercase flex items-center leading-none hover:opacity-80 transition-opacity">
              <span className="text-primary dark:text-foreground">ORBIKO</span>
              <span className="text-foreground dark:text-primary">.</span>
            </Link>
          </div>

          {/* CENTER → DESKTOP NAV (Using flexible layout to prevent overlap) */}
          <div className="hidden md:flex flex-grow justify-center items-center px-4">
            <ul className="flex items-center gap-1 lg:gap-4">
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <li 
                    key={item.name} 
                    className="relative flex items-center"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`${navItemClasses} ${
                        pathname.startsWith("/services") ? "text-primary" : "text-foreground/70"
                      }`}
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center"
                      >
                        <ChevronDown size={12} className="text-primary translate-y-[0.5px]" />
                      </motion.div>
                    </Link>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          ref={dropdownRef}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-background/98 backdrop-blur-xl border border-border/5 shadow-2xl py-6 rounded-sm"
                        >
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={`block px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] transition ${
                                s.highlighted 
                                  ? "text-primary font-black border-t border-border/5 mt-4 pt-6" 
                                  : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
                              }`}
                            >
                              {s.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.name} className="flex items-center">
                    <Link
                      href={item.href}
                      className={`${navItemClasses} ${
                        pathname === item.href
                          ? "text-primary"
                          : "text-foreground/70"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* RIGHT → CTA & Toggle */}
          <div className="hidden md:flex items-center gap-6 z-10 min-w-[200px] justify-end">
            <ThemeToggle />
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-background px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] font-black hover:bg-foreground transition-all duration-300 rounded-sm leading-none inline-block shadow-xl"
            >
              Consult Now
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center gap-4 z-10">
            <ThemeToggle />
            <button
              className="text-foreground p-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </nav>

        {/* Modal */}
        <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-xl border-t border-border/5 shadow-2xl"
            >
              <div className="p-10 flex flex-col space-y-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-sm uppercase tracking-[0.25em] font-bold block ${
                        pathname === item.href ? "text-primary" : "text-foreground/70"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="mt-6 pl-6 border-l border-primary/20 flex flex-col space-y-6">
                        {services.map(s => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="bg-primary text-background p-5 text-center text-[10px] uppercase tracking-[0.25em] font-black shadow-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
