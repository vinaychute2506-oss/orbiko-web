"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Mail, MapPin, Phone, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Controlled inputs for the contact form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Architectural Design");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const newSubmission = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      service,
      message,
      date: new Date().toLocaleString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("orbiko_submissions") || "[]");
      localStorage.setItem("orbiko_submissions", JSON.stringify([newSubmission, ...existing]));
    } catch (err) {
      console.error("Local storage error:", err);
    }

    // Fallback success for beautiful client demo experience
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setService("Architectural Design");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hi Orbiko! I'd like to inquire about a project.\n\nName: ${name || "Guest"}\nEmail: ${email || "Not provided"}\nPhone: ${phone || "Not provided"}\nService: ${service}\nMessage: ${message || "No message provided"}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 border-b border-border/10">
      <Container>
        {/* Page Header */}
        <div className="max-w-4xl mb-20 md:mb-24">
          <span className="text-primary font-bold tracking-[0.25em] uppercase text-[10px] mb-6 block">
            Start a Conversation
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-light text-foreground tracking-tight leading-none mb-10">
            Let's Create Extraordinary Spaces<span className="text-primary font-black">.</span>
          </h1>
          <p className="text-foreground/75 text-sm md:text-base leading-relaxed font-light pl-6 border-l border-primary/20 max-w-2xl">
            Have a design vision, site layout plan, or custom carpentry request? Drop us a brief note. Our expert planning studio will respond with initial layouts and estimations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 max-w-7xl mx-auto mb-24">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Direct contact coordinates */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-10 tracking-tight">Studio Coordinates</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-11 h-11 bg-card border border-border/15 flex items-center justify-center text-primary rounded-sm transition-all duration-350">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[9px] uppercase tracking-widest text-foreground/45 mb-2 font-bold">Physical Address</h4>
                    <p className="text-foreground text-sm leading-relaxed font-medium">Begur Road,<br />Bangalore, India</p>
                    <p className="text-xs text-primary font-semibold mt-2 break-all">
                      <a href="https://share.google/qC4149g75jRanDlgX" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        View on Google Maps
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-11 h-11 bg-card border border-border/15 flex items-center justify-center text-primary rounded-sm transition-all duration-350">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[9px] uppercase tracking-widest text-foreground/45 mb-2 font-bold">Mail Support</h4>
                    <p className="text-foreground text-sm font-semibold">
                      <a href="mailto:orbikointerior@gmail.com" className="hover:text-primary transition-colors">orbikointerior@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-11 h-11 bg-card border border-border/15 flex items-center justify-center text-primary rounded-sm transition-all duration-350">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[9px] uppercase tracking-widest text-foreground/45 mb-2 font-bold">Hotline Inquiry</h4>
                    <p className="text-foreground text-lg font-heading font-bold">
                      <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
                    </p>
                    <p className="text-[9px] text-foreground/40 uppercase tracking-widest mt-1 font-bold">Available 10 AM — 7 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick studio FAQs */}
            <div className="pt-12 border-t border-border/10">
              <div className="flex items-center gap-2 mb-8">
                <HelpCircle size={14} className="text-primary" />
                <h4 className="text-[9px] uppercase tracking-widest text-foreground/45 font-bold">Quick Studio FAQ</h4>
              </div>
              <div className="space-y-6">
                {[
                  { q: "Do you offer free space consultation?", a: "Yes, we host free site measurement audits and deliver initial itemized CAD estimates." },
                  { q: "What is the typical project handover time?", a: "Most premium residential interiors take between 4 to 8 weeks from layout approval." },
                  { q: "Where are modular furnitures manufactured?", a: "All custom fit-outs are built in our high-end dedicated partner production factories." },
                ].map((faq, idx) => (
                  <div key={idx} className="space-y-1.5 pl-2 border-l-2 border-border/20">
                    <p className="text-foreground text-[10px] font-bold uppercase tracking-wider">{faq.q}</p>
                    <p className="text-foreground/60 text-xs font-light leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border/10 p-10 md:p-12 rounded-sm shadow-xl relative">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Inquiry Received!</h3>
                    <p className="text-foreground/75 text-sm leading-relaxed mb-8 font-light max-w-sm mx-auto">
                      Thank you. Our studio supervisors will evaluate your site dimensions and connect within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="bg-primary text-background border border-primary px-8 py-3.5 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-primary transition-all duration-350 shadow-md"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {status === "error" && (
                      <div className="bg-red-500/10 border border-red-500/25 p-4 flex gap-3 text-red-400 text-xs rounded-sm">
                        <AlertCircle size={16} className="flex-shrink-0" />
                        <p>{errorMsg}</p>
                      </div>
                    )}

                    {/* Form Fields styled as luxurious minimal elements */}
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.25em] text-foreground/45 font-bold block">Your Name *</label>
                      <input 
                        required 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="E.g. JOHN DOE"
                        className="w-full bg-background border border-border/15 px-5 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-all duration-350 placeholder:text-foreground/20 font-bold tracking-wider" 
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.25em] text-foreground/45 font-bold block">Email Address *</label>
                        <input 
                          required 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="NAME@COMPANY.COM"
                          className="w-full bg-background border border-border/15 px-5 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-all duration-350 placeholder:text-foreground/20 font-bold tracking-wider" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.25em] text-foreground/45 font-bold block">Phone Number *</label>
                        <input 
                          required 
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full bg-background border border-border/15 px-5 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-all duration-350 placeholder:text-foreground/20 font-bold tracking-wider" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.25em] text-foreground/45 font-bold block">Subject / Service Scope</label>
                      <select 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-background border border-border/15 px-5 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-all duration-350 appearance-none cursor-pointer font-bold tracking-wider"
                      >
                        <option>Architectural Design</option>
                        <option>Interior Design</option>
                        <option>Turnover Renovation</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.25em] text-foreground/45 font-bold block">Tell Us About Your Space *</label>
                      <textarea 
                        required 
                        rows={4} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="TELL US ABOUT TIMELINES, BUDGETS AND DESIGN SCOPE..."
                        className="w-full bg-background border border-border/15 px-5 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-all duration-350 resize-none placeholder:text-foreground/20 font-medium leading-relaxed" 
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-background border border-primary py-4.5 text-[9px] uppercase tracking-[0.25em] font-bold hover:bg-transparent hover:text-primary transition-all duration-350 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3 shadow-md"
                      >
                        {isSubmitting ? "TRANSMITTING..." : "Send Message Inquiry"}
                        {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppInquiry}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-4.5 text-[9px] uppercase tracking-[0.25em] font-bold flex items-center justify-center gap-3 transition-colors shadow-md"
                      >
                        Inquire on WhatsApp
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* ── Bottom 5-Feature Premium Strip ── */}
        <div className="pt-16 border-t border-border/10 grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { num: "01", title: "10-Year Warranty", desc: "Completely backed craftsmanship" },
            { num: "02", title: "Premium Materials", desc: "Strict quality-graded fit-outs" },
            { num: "03", title: "In-House Execution", desc: "Zero external contractor delays" },
            { num: "04", title: "Itemized Costing", desc: "Zero hidden charges" },
            { num: "05", title: "Dedicated PM Support", desc: "Single-point coordinate control" }
          ].map((feat) => (
            <div key={feat.num} className="space-y-2">
              <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{feat.num}</span>
              <h4 className="text-foreground font-heading font-semibold text-xs uppercase tracking-wider">{feat.title}</h4>
              <p className="text-foreground/50 text-[10px] font-light leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

      </Container>
    </div>
  );
}
