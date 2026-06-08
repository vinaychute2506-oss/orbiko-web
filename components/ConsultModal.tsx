"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, User, ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import { useState } from "react";

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultModal({ isOpen, onClose }: ConsultModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Save to local storage for local hardcoded submissions
    const newSubmission = {
      id: Date.now().toString(),
      name,
      phone,
      date: new Date().toLocaleString(),
    };
    
    try {
      const existing = JSON.parse(localStorage.getItem("orbiko_callbacks") || "[]");
      localStorage.setItem("orbiko_callbacks", JSON.stringify([newSubmission, ...existing]));
    } catch (err) {
      console.error("Local storage error:", err);
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus("success");
    
    // Reset after success
    setTimeout(() => {
      onClose();
      setStatus("idle");
      setName("");
      setPhone("");
    }, 4000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Orbiko! My name is ${name || "Guest"}. I would like to book a free consultation.\n\nPhone: ${phone || "Not provided"}`
    );
    window.open(`https://wa.me/917259883558?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-secondary p-10 shadow-2xl z-[101] border border-border/10 rounded-sm"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-foreground/40 hover:text-primary transition-colors"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            {status === "success" ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary animate-bounce">
                  <CheckCircle size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-foreground">Request Received!</h3>
                  <p className="text-foreground/60 text-xs font-light leading-relaxed">
                    Thank you, {name || "Guest"}. We have saved your callback request. Our designer will call you at {phone} within 2 hours.
                  </p>
                </div>
                <div className="pt-4 border-t border-border/10">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-[10px] uppercase tracking-[0.25em] font-bold rounded-sm flex items-center justify-center gap-3 transition-colors shadow-md"
                  >
                    <MessageSquare size={14} />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Book Consultation</span>
                  <h3 className="text-3xl font-heading font-bold text-foreground leading-tight">
                    Get a Callback<br />From Our Expert.
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Your Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20" />
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full bg-background border border-border/5 px-12 py-4 text-foreground text-sm focus:border-primary focus:outline-none transition-all placeholder:text-foreground/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Phone Number</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20" />
                      <input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 72598 83558"
                        className="w-full bg-background border border-border/5 px-12 py-4 text-foreground text-sm focus:border-primary focus:outline-none transition-all placeholder:text-foreground/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-foreground text-background py-4.5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-primary hover:text-background transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                    >
                      {status === "submitting" ? "Processing..." : "Get Call Back"}
                      {status === "idle" && <ArrowRight size={12} />}
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4.5 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
                    >
                      <MessageSquare size={12} />
                      <span>WhatsApp Chat</span>
                    </button>
                  </div>
                </form>

                <p className="text-[9px] text-center text-foreground/30 uppercase tracking-[0.2em]">
                  No spam. Only professional consultations.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
