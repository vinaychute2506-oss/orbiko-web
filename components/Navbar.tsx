"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, CalendarRange } from "lucide-react";
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
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        mounted && isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/10 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 relative">
        <nav className="flex items-center justify-between w-full">

          {/* LEFT → LOGO */}
          <div className="flex items-center z-10 min-w-[150px]">
            <Link href="/" className="text-xl font-bold tracking-[0.25em] uppercase flex items-center leading-none hover:opacity-85 transition-opacity">
              <span className="text-foreground">ORBIKO</span>
              <span className="text-primary font-black">.</span>
            </Link>
          </div>

          {/* CENTER → DESKTOP NAV */}
          <div className="hidden md:flex flex-grow justify-center items-center px-4">
            <ul className="flex items-center gap-1 lg:gap-3">
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
                        <ChevronDown size={11} className="text-primary translate-y-[0.5px]" />
                      </motion.div>
                    </Link>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          ref={dropdownRef}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-background/98 backdrop-blur-xl border border-border shadow-2xl py-5 rounded-sm"
                        >
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={`block px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition ${
                                s.highlighted 
                                  ? "text-primary font-bold border-t border-border mt-3 pt-4" 
                                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
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

          {/* RIGHT → CTA ACTION BUTTON */}
          <div className="hidden md:flex items-center gap-4 z-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-primary text-background border border-primary px-5 py-2.5 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-primary transition-all duration-300 shadow-md"
            >
              <CalendarRange size={12} />
              <span>Book Consultation</span>
            </motion.button>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="md:hidden flex items-center gap-4 z-10">
            <button
              className="text-foreground p-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </nav>

        {/* Modal */}
        <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-2xl z-40"
            >
              <div className="p-8 flex flex-col space-y-6">
                {navigation.map((item) => (
                  <div key={item.name} className="border-b border-border/10 pb-4">
                    <Link
                      href={item.href}
                      className={`text-xs uppercase tracking-[0.25em] font-bold block ${
                        pathname === item.href ? "text-primary" : "text-foreground/80"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="mt-4 pl-4 border-l border-primary/20 flex flex-col space-y-4">
                        {services.map(s => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="text-[9px] uppercase tracking-[0.2em] text-foreground/50 hover:text-primary transition-colors block py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full text-center bg-primary text-background border border-primary py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-primary transition-all duration-300"
                  >
                    Book Free Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      
      {/* Theme Toggle */}
      <div className="fixed top-[18px] right-20 md:top-[18px] md:right-48 z-[60]">
        <ThemeToggle />
      </div>
    </header>
  );
}
