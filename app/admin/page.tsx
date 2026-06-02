"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Calendar, Trash2, Mail, Phone, MessageSquare, ShieldCheck, Download } from "lucide-react";
import Link from "next/link";

interface Callback {
  id: string;
  name: string;
  phone: string;
  date: string;
}

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
}

export default function AdminDashboard() {
  const [callbacks, setCallbacks] = useState<Callback[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    // Read from local storage
    const storedCallbacks = JSON.parse(localStorage.getItem("orbiko_callbacks") || "[]");
    const storedSubmissions = JSON.parse(localStorage.getItem("orbiko_submissions") || "[]");
    setCallbacks(storedCallbacks);
    setSubmissions(storedSubmissions);
  }, []);

  const clearCallbacks = () => {
    if (confirm("Are you sure you want to clear all callback requests?")) {
      localStorage.removeItem("orbiko_callbacks");
      setCallbacks([]);
    }
  };

  const clearSubmissions = () => {
    if (confirm("Are you sure you want to clear all contact submissions?")) {
      localStorage.removeItem("orbiko_submissions");
      setSubmissions([]);
    }
  };

  const exportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(
      JSON.stringify({ callbacks, submissions }, null, 2)
    );
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `orbiko_leads_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-border/10 pb-8 gap-6">
          <div>
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">
              Studio Workspace
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-light text-foreground tracking-tight">
              Inquiries Inbox<span className="text-primary font-black">.</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={exportData}
              className="inline-flex items-center gap-2 border border-border/20 text-foreground bg-transparent px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:border-primary hover:text-primary transition-all duration-350 cursor-pointer"
            >
              <Download size={14} />
              <span>Export Leads JSON</span>
            </button>
            
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-background border border-primary px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-primary transition-all duration-350"
            >
              <span>Back to Site</span>
            </Link>
          </div>
        </div>

        {/* Dashboard Split Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Callback Requests (Consultation Modal) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex justify-between items-center border-b border-border/15 pb-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <h3 className="font-heading font-semibold text-lg tracking-tight">Callback Leads ({callbacks.length})</h3>
              </div>
              {callbacks.length > 0 && (
                <button 
                  onClick={clearCallbacks} 
                  className="text-foreground/40 hover:text-primary transition-colors"
                  title="Clear callback logs"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>

            {callbacks.length === 0 ? (
              <div className="border border-dashed border-border/20 p-12 text-center rounded-sm bg-card/20">
                <p className="text-foreground/30 text-xs uppercase tracking-wider font-bold">No requests received</p>
                <p className="text-[10px] text-foreground/45 mt-2 font-light">Callback requests submitted in the free consultation modal appear here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {callbacks.map((cb) => (
                  <div key={cb.id} className="bg-card border border-border/10 p-6 rounded-sm space-y-3 shadow-sm hover:border-primary/20 transition-all">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-foreground text-sm uppercase tracking-wide">{cb.name}</h4>
                      <div className="flex items-center gap-1.5 text-foreground/30 text-[9px]">
                        <Calendar size={10} />
                        <span>{cb.date.split(",")[0]}</span>
                      </div>
                    </div>
                    <p className="text-primary font-heading font-semibold text-sm">
                      <a href={`tel:${cb.phone}`} className="hover:underline">{cb.phone}</a>
                    </p>
                    <div className="flex justify-end pt-2">
                      <a
                        href={`https://wa.me/${cb.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[8px] uppercase tracking-widest font-bold text-green-600 hover:text-green-700 transition-colors"
                      >
                        Reply on WhatsApp →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Detailed Messages Submissions */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex justify-between items-center border-b border-border/15 pb-4">
              <div className="flex items-center gap-3">
                <MessageSquare size={18} className="text-primary" />
                <h3 className="font-heading font-semibold text-lg tracking-tight">Form Inquiries ({submissions.length})</h3>
              </div>
              {submissions.length > 0 && (
                <button 
                  onClick={clearSubmissions} 
                  className="text-foreground/40 hover:text-primary transition-colors"
                  title="Clear submissions logs"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>

            {submissions.length === 0 ? (
              <div className="border border-dashed border-border/20 p-12 text-center rounded-sm bg-card/20">
                <p className="text-foreground/30 text-xs uppercase tracking-wider font-bold">No message inquiries</p>
                <p className="text-[10px] text-foreground/45 mt-2 font-light">Submissions made via the Contact page form will appear here.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {submissions.map((sub) => (
                  <div key={sub.id} className="bg-card border border-border/10 p-8 rounded-sm space-y-4 shadow-sm hover:border-primary/20 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/10 pb-3">
                      <div>
                        <h4 className="font-bold text-foreground text-base uppercase tracking-wider">{sub.name}</h4>
                        <span className="inline-block bg-primary/10 text-primary text-[8px] uppercase tracking-widest font-extrabold px-2 py-0.5 rounded-sm mt-1">
                          {sub.service}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-foreground/30 text-[9px]">
                        <Calendar size={10} />
                        <span>{sub.date}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Mail size={12} className="text-primary/60" />
                        <a href={`mailto:${sub.email}`} className="hover:underline font-medium">{sub.email}</a>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Phone size={12} className="text-primary/60" />
                        <a href={`tel:${sub.phone}`} className="hover:underline font-medium">{sub.phone}</a>
                      </div>
                    </div>

                    <div className="bg-background/40 p-4 border border-border/5 rounded-sm">
                      <p className="text-foreground/45 text-[9px] uppercase tracking-wider font-bold mb-1">Message Brief</p>
                      <p className="text-foreground/80 text-xs leading-relaxed font-light whitespace-pre-wrap">{sub.message}</p>
                    </div>

                    <div className="flex justify-end gap-6 pt-2 text-[9px] uppercase tracking-widest font-bold">
                      <a
                        href={`mailto:${sub.email}?subject=Orbiko Studio Consultation - ${sub.service}`}
                        className="text-primary hover:underline"
                      >
                        Email Client
                      </a>
                      <a
                        href={`https://wa.me/${sub.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hi ${sub.name}, thank you for reaching out to Orbiko Studio regarding ${sub.service}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Local Sync Notice */}
        <div className="mt-20 border border-border/10 bg-card/25 p-6 flex items-center gap-4 rounded-sm">
          <ShieldCheck size={24} className="text-green-600 flex-shrink-0" />
          <div className="text-xs">
            <p className="font-bold text-foreground uppercase tracking-wider">Local storage Database Active</p>
            <p className="text-foreground/50 font-light mt-0.5">Submissions are saved entirely in your local browser sandbox. No backend network requests are made, ensuring complete offline robustness.</p>
          </div>
        </div>

      </Container>
    </div>
  );
}
