"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "./ui/Container";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Residential Design", href: "/services/residential-design" },
  { name: "Commercial Architecture", href: "/services/commercial-architecture" },
  { name: "Interior Design", href: "/services/interior-design" },
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

  const navItemClasses = "flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] transition font-bold leading-none px-4 py-3 hover:text-yellow-500";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-20 flex items-center ${
        mounted && isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 relative">
        <nav className="flex items-center justify-between w-full">

          {/* LEFT → LOGO */}
          <div className="flex items-center z-10">
            <Link href="/" className="text-xl font-bold tracking-[0.2em] uppercase text-white flex items-center leading-none hover:opacity-80 transition-opacity">
              ORBIKO<span className="text-yellow-500">.</span>
            </Link>
          </div>

          {/* CENTER → DESKTOP NAV (Absolute positioned for perfect center) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center">
            <ul className="flex items-center gap-2 lg:gap-4">
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
                        pathname.startsWith("/services") ? "text-yellow-500" : "text-white/70"
                      }`}
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center"
                      >
                        <ChevronDown size={12} className="text-yellow-500 translate-y-[0.5px]" />
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
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-black/98 backdrop-blur-xl border border-white/5 shadow-2xl py-6 rounded-sm"
                        >
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={`block px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] transition ${
                                s.highlighted 
                                  ? "text-yellow-500 font-black border-t border-white/5 mt-4 pt-6" 
                                  : "text-white/40 hover:text-white hover:bg-white/5"
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
                          ? "text-yellow-500"
                          : "text-white/70"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* RIGHT → CTA */}
          <div className="hidden md:flex items-center z-10">
            <Link
              href="/contact"
              className="bg-yellow-500 text-black px-8 py-3.5 text-[10px] uppercase tracking-[0.25em] font-black hover:bg-white transition-all duration-300 rounded-sm leading-none inline-block shadow-xl"
            >
              Consult Now
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white p-2 hover:text-yellow-500 transition-colors z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-xl border-t border-white/5 shadow-2xl"
            >
              <div className="p-10 flex flex-col space-y-8">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-sm uppercase tracking-[0.25em] font-bold block ${
                        pathname === item.href ? "text-yellow-500" : "text-white/70"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="mt-6 pl-6 border-l border-yellow-500/20 flex flex-col space-y-6">
                        {services.map(s => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-yellow-500 transition-colors"
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
                  className="bg-yellow-500 text-black p-5 text-center text-[10px] uppercase tracking-[0.25em] font-black shadow-2xl"
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