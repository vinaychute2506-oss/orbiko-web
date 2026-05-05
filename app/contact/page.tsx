"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Controlled inputs for the contact form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Architectural Design");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("http://orbiko-clean.local/wp-json/orbiko/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          service,
          message,
        }),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setStatus("success");
        // Reset form
        setName("");
        setEmail("");
        setMessage("");
        setService("Architectural Design");
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-yellow-500 font-bold tracking-[0.25em] uppercase text-[10px] mb-8 block">
            Start a Conversation
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-semibold text-white mb-10 tracking-tight leading-none">
            Contact Us.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to transform your vision into reality? We're here to help you build something exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 max-w-7xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h2 className="text-3xl font-heading font-medium text-white mb-12">Contact Info</h2>
              <div className="space-y-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold">Our Office</h4>
                    <p className="text-white text-base leading-relaxed">123 Luxury Avenue<br />Design District, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold">Email Us</h4>
                    <p className="text-white text-base font-medium">
                      <a href="mailto:hello@orbiko.com" className="hover:text-yellow-500 transition-colors">hello@orbiko.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold">Call Us</h4>
                    <p className="text-white text-base font-medium">
                      <a href="tel:+12345678900" className="hover:text-yellow-500 transition-colors">+1 (234) 567-890</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <h4 className="text-[10px] uppercase tracking-widest text-yellow-500 mb-8 font-bold">Follow Us</h4>
              <div className="flex gap-10 text-[10px] font-bold tracking-[0.2em] text-white/40">
                <a href="#" className="hover:text-white transition-colors uppercase">Instagram</a>
                <a href="#" className="hover:text-white transition-colors uppercase">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors uppercase">Twitter</a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-[#0a0a0a] p-12 border border-white/5 rounded-sm shadow-2xl">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-8 text-yellow-500">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-heading font-semibold text-white mb-6">Message Sent!</h3>
                    <p className="text-white/60 text-base leading-relaxed mb-10 font-light">
                      Message sent successfully. We'll get back to you within 24–48 hours to discuss your vision.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="bg-white text-black px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-yellow-500 transition-colors duration-300"
                    >
                      Send Another Message
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
                      <div className="bg-red-500/10 border border-red-500/20 p-5 flex gap-4 text-red-400 text-sm">
                        <AlertCircle size={20} className="flex-shrink-0" />
                        <p>{errorMsg}</p>
                      </div>
                    )}

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">Your Name *</label>
                      <input 
                        required 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full bg-[#111] border border-white/5 px-6 py-4 text-white text-base focus:border-yellow-500 focus:outline-none transition-all duration-300 placeholder:text-white/10" 
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">Email Address *</label>
                      <input 
                        required 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full bg-[#111] border border-white/5 px-6 py-4 text-white text-base focus:border-yellow-500 focus:outline-none transition-all duration-300 placeholder:text-white/10" 
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">Subject / Service</label>
                      <select 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-[#111] border border-white/5 px-6 py-4 text-white text-base focus:border-yellow-500 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option>Architectural Design</option>
                        <option>Interior Design</option>
                        <option>Turnover Renovation</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">Your Message *</label>
                      <textarea 
                        required 
                        rows={5} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your project..."
                        className="w-full bg-[#111] border border-white/5 px-6 py-4 text-white text-base focus:border-yellow-500 focus:outline-none transition-all duration-300 resize-none placeholder:text-white/10" 
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black py-5 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-yellow-500 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? "Processing..." : "Send Message"}
                      {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
