"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, User, ArrowRight, CheckCircle } from "lucide-react";
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus("success");
    
    // Reset after success
    setTimeout(() => {
      onClose();
      setStatus("idle");
      setName("");
      setPhone("");
    }, 3000);
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
            >
              <X size={20} />
            </button>

            {status === "success" ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Request Received!</h3>
                <p className="text-foreground/40 text-sm font-light leading-relaxed">
                  Thank you, {name}. Our design expert will call you back on {phone} within 2 hours.
                </p>
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
                        placeholder="+91 98765 43210"
                        className="w-full bg-background border border-border/5 px-12 py-4 text-foreground text-sm focus:border-primary focus:outline-none transition-all placeholder:text-foreground/10"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-foreground text-background py-5 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-primary transition-all duration-500 flex items-center justify-center gap-3 shadow-xl"
                  >
                    {status === "submitting" ? "Processing..." : "Get Call Back"}
                    {status === "idle" && <ArrowRight size={14} />}
                  </button>
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
