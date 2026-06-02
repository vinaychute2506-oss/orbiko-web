"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { 
  Calendar, 
  Trash2, 
  Mail, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Download, 
  Plus, 
  Check, 
  AlertTriangle, 
  Copy, 
  FileDown, 
  FileText, 
  TrendingUp, 
  Clock 
} from "lucide-react";
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

interface ContentPlan {
  id: string;
  type: "Project" | "Page Text" | "Blog" | "Business Info";
  priority: "High" | "Medium" | "Low";
  targetRoute: string;
  title: string;
  description: string;
  imageNames: string; 
  imageUrl: string;
  mobileBannerUrl?: string; 
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  ogImageUrl: string;
  instaCaption?: string;
  reelScript?: string;
  reelCta?: string;
  reelHashtags?: string;
  reelCoverUrl?: string;
  status: "Draft" | "Client Approved" | "Uploaded";
  createdAt: string;
  updatedAt: string;
  uploadedAt?: string;
}

const CLIENT_TEMPLATE_TEXT = `# Client Content Collection Template

Please use this template to prepare all text, details, and media assets for your website updates. Once filled, organize your image and video files into the structured folders and submit them to your developer.

---

## 1. Image & Media Guidelines

### Image Requirements
* Minimum Resolution: 1920x1080 pixels (high-quality resolution)
* Preferred Formats: .jpg, .png, or .webp
* Orientation: Banners and hero images must be landscape. Gallery items can be a mix of landscape/portrait.
* Avoid: Compressed images (e.g., sent via WhatsApp), screenshots, or low-resolution cell phone photos. Always upload original, raw camera files or high-fidelity renders.

### File Naming Convention
Please rename your media files using lower-case letters, hyphens, and clear descriptions before uploading.

Examples:
* Banners: homepage-hero.jpg, about-hero.png
* Projects: project-hospital-bangalore-01.jpg, project-hospital-bangalore-before-02.jpg
* Services: service-residential-kitchen-01.jpg
* Branding: logo-primary-transparent.png, brand-color-swatches.jpg

---

## 2. Directory Folder Structure
Organize your files in your submission folder matching this hierarchy:
/client-content
  ├── /homepage        <-- Homepage slider banner & armchair section images
  ├── /services        <-- Bedroom, modular kitchen, commercial service graphics
  ├── /projects
  │     ├── /project-1 <-- Subfolder for Project 1 (Before/After & Final images)
  │     └── /project-2 <-- Subfolder for Project 2 (Before/After & Final images)
  ├── /blogs           <-- Images for article posts
  ├── /branding        <-- High-res logo variants (PNG transparent) & guidelines
  └── /testimonials    <-- Client headshots or dashboard screenshots

---

## 3. Website Content Plan

### A. Basic Business Information
* Company Name: 
* About Company: 
* Physical Address: 
* Contact Number: 
* WhatsApp Number: 
* Email Address: 
* Social Media Links:
* Google Maps Share URL: 
* Working Hours: 

### B. Homepage Content
* Hero Title: 
* Hero Subtitle: 
* Call To Action Button Text: 
* Introductory Paragraph: 
* Statistics: 
* Testimonials: 

### C. Services Content
* Service Name: 
* Short Description: 
* Detailed Description: 
* Deliverables: 
* Process Steps: 

### D. Portfolio / Project Updates
* Project Name: 
* Project Type: 
* Location: 
* Area Size: 
* Completion Year: 
* Project Description: 
* Client Brief: 
* Materials Used: 
* Before Image Filename: 
* After / Final Images Filenames: 
* Reels / Videos URL: 
* SEO Title: 
* Meta Description: 
* Keywords: 
* OpenGraph Image Link: 
* Instagram Caption: 
* Reel Video Script: 
* Reel CTA: 
* Hashtags: 
* Reel Cover Image Filename: 

### E. Blogs / Articles Section
* Post Title: 
* Publish Date: 
* Excerpt: 
* Detailed Content: 
* SEO Title: 
* Meta Description: 
`;

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"leads" | "planner">("leads");
  
  // Leads states
  const [callbacks, setCallbacks] = useState<Callback[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  // Content Planner states
  const [plans, setPlans] = useState<ContentPlan[]>([]);
  const [formType, setFormType] = useState<"Project" | "Page Text" | "Blog" | "Business Info">("Project");
  const [formPriority, setFormPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [formTargetRoute, setFormTargetRoute] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formImageNames, setFormImageNames] = useState("");
  const [formImageUrl, setFormImageUrl] = useState("");
  const [formMobileBannerUrl, setFormMobileBannerUrl] = useState("");
  const [formSeoTitle, setFormSeoTitle] = useState("");
  const [formSeoDescription, setFormSeoDescription] = useState("");
  const [formSeoKeywords, setFormSeoKeywords] = useState("");
  const [formOgImageUrl, setFormOgImageUrl] = useState("");
  
  // Marketing states
  const [formInstaCaption, setFormInstaCaption] = useState("");
  const [formReelScript, setFormReelScript] = useState("");
  const [formReelCta, setFormReelCta] = useState("");
  const [formReelHashtags, setFormReelHashtags] = useState("");
  const [formReelCoverUrl, setFormReelCoverUrl] = useState("");

  useEffect(() => {
    // Read from local storage
    const storedCallbacks = JSON.parse(localStorage.getItem("orbiko_callbacks") || "[]");
    const storedSubmissions = JSON.parse(localStorage.getItem("orbiko_submissions") || "[]");
    const storedPlans = JSON.parse(localStorage.getItem("orbiko_content_plans") || "[]");
    
    setCallbacks(storedCallbacks);
    setSubmissions(storedSubmissions);
    setPlans(storedPlans);
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

  // Content Planner Handlers
  const handleAddPlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    const timestamp = new Date().toLocaleString();
    const newPlan: ContentPlan = {
      id: Date.now().toString(),
      type: formType,
      priority: formPriority,
      targetRoute: formTargetRoute || "/",
      title: formTitle,
      description: formDescription,
      imageNames: formImageNames,
      imageUrl: formImageUrl,
      mobileBannerUrl: formMobileBannerUrl,
      seoTitle: formSeoTitle,
      seoDescription: formSeoDescription,
      seoKeywords: formSeoKeywords,
      ogImageUrl: formOgImageUrl,
      instaCaption: formInstaCaption,
      reelScript: formReelScript,
      reelCta: formReelCta,
      reelHashtags: formReelHashtags,
      reelCoverUrl: formReelCoverUrl,
      status: "Draft",
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    const updatedPlans = [newPlan, ...plans];
    setPlans(updatedPlans);
    localStorage.setItem("orbiko_content_plans", JSON.stringify(updatedPlans));

    // Reset Form fields
    setFormTitle("");
    setFormDescription("");
    setFormTargetRoute("");
    setFormImageNames("");
    setFormImageUrl("");
    setFormMobileBannerUrl("");
    setFormSeoTitle("");
    setFormSeoDescription("");
    setFormSeoKeywords("");
    setFormOgImageUrl("");
    setFormInstaCaption("");
    setFormReelScript("");
    setFormReelCta("");
    setFormReelHashtags("");
    setFormReelCoverUrl("");
  };

  const handleUpdateStatus = (id: string, newStatus: "Draft" | "Client Approved" | "Uploaded") => {
    const updated = plans.map(p => {
      if (p.id === id) {
        return {
          ...p,
          status: newStatus,
          updatedAt: new Date().toLocaleString(),
          uploadedAt: newStatus === "Uploaded" ? new Date().toLocaleString() : p.uploadedAt
        };
      }
      return p;
    });
    setPlans(updated);
    localStorage.setItem("orbiko_content_plans", JSON.stringify(updated));
  };

  const handleDeletePlan = (id: string) => {
    if (confirm("Are you sure you want to delete this content request?")) {
      const filtered = plans.filter(p => p.id !== id);
      setPlans(filtered);
      localStorage.setItem("orbiko_content_plans", JSON.stringify(filtered));
    }
  };

  const exportPlans = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(
      JSON.stringify(plans, null, 2)
    );
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `orbiko_content_plans_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const downloadTemplate = () => {
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", "/CLIENT_CONTENT_TEMPLATE.docx");
    downloadAnchor.setAttribute("download", "CLIENT_CONTENT_TEMPLATE.docx");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Missing content alerts validator
  const checkAlerts = (plan: ContentPlan) => {
    const alerts: string[] = [];
    if (!plan.imageUrl && !plan.imageNames) {
      alerts.push("Missing project/featured image files");
    }
    if (!plan.description || plan.description.length < 15) {
      alerts.push("Description details are missing or too brief (min 15 chars)");
    }
    if (!plan.seoTitle) {
      alerts.push("SEO Meta Title is missing");
    }
    if (!plan.mobileBannerUrl) {
      alerts.push("Mobile-friendly banner image is missing");
    }
    return alerts;
  };

  // Compile clipboard prompt for AI
  const copyPlanPrompt = (plan: ContentPlan) => {
    const prompt = `Please update the website with this client-approved content structure:

---
[SUBMISSION COORDINATES]
Type: ${plan.type}
Priority: ${plan.priority}
Status: ${plan.status}
Target Path: ${plan.targetRoute}
Subject / Title: ${plan.title}
Created At: ${plan.createdAt}
Updated At: ${plan.updatedAt}
${plan.uploadedAt ? `Uploaded At: ${plan.uploadedAt}` : ""}

[CONTENT DETAILS]
${plan.description}

[MEDIA ATTACHMENTS]
Naming Convention Checklist: ${plan.imageNames || "None provided"}
Featured Image URL: ${plan.imageUrl || "None"}
Mobile Banner URL: ${plan.mobileBannerUrl || "None"}

[SEO METADATA SETTINGS]
SEO Title: ${plan.seoTitle || "None"}
Meta Description: ${plan.seoDescription || "None"}
Keywords: ${plan.seoKeywords || "None"}
OpenGraph Image Link: ${plan.ogImageUrl || "None"}

[SOCIAL MEDIA MARKETING & REELS]
Instagram Caption: ${plan.instaCaption || "None"}
Reel Video Script: ${plan.reelScript || "None"}
CTA Hook: ${plan.reelCta || "None"}
Hashtags: ${plan.reelHashtags || "None"}
Reel Cover Image: ${plan.reelCoverUrl || "None"}
---`;

    navigator.clipboard.writeText(prompt);
    alert("Formatted intake prompt copied to clipboard! You can paste it directly to the AI agent in chat to update the website.");
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
              Admin Workspace<span className="text-primary font-black">.</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-4">
            {activeTab === "leads" ? (
              <button
                onClick={exportData}
                className="inline-flex items-center gap-2 border border-border/20 text-foreground bg-transparent px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:border-primary hover:text-primary transition-all duration-350 cursor-pointer"
              >
                <Download size={14} />
                <span>Export Leads JSON</span>
              </button>
            ) : (
              <>
                <button
                  onClick={downloadTemplate}
                  className="inline-flex items-center gap-2 border border-border/20 text-foreground bg-transparent px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:border-primary hover:text-primary transition-all duration-350 cursor-pointer"
                >
                  <FileDown size={14} />
                  <span>Download Doc Template</span>
                </button>
                <button
                  onClick={exportPlans}
                  className="inline-flex items-center gap-2 border border-border/20 text-foreground bg-transparent px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:border-primary hover:text-primary transition-all duration-350 cursor-pointer"
                >
                  <Download size={14} />
                  <span>Export Plans JSON</span>
                </button>
              </>
            )}
            
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-background border border-primary px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-primary transition-all duration-350"
            >
              <span>Back to Site</span>
            </Link>
          </div>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="flex border-b border-border/10 pb-6 mb-12 gap-8">
          <button
            onClick={() => setActiveTab("leads")}
            className={`pb-2 text-[10px] uppercase tracking-[0.25em] font-bold transition-all relative ${
              activeTab === "leads" ? "text-primary font-bold border-b-2 border-primary" : "text-foreground/50 hover:text-foreground"
            }`}
          >
            Leads Inbox ({callbacks.length + submissions.length})
          </button>
          <button
            onClick={() => setActiveTab("planner")}
            className={`pb-2 text-[10px] uppercase tracking-[0.25em] font-bold transition-all relative ${
              activeTab === "planner" ? "text-primary font-bold border-b-2 border-primary" : "text-foreground/50 hover:text-foreground"
            }`}
          >
            Client Content Planner ({plans.length})
          </button>
        </div>

        {/* ── Tab 1: Leads Inbox ── */}
        {activeTab === "leads" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 animate-fadeIn">
            {/* Left Column: Callbacks */}
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

            {/* Right Column: Detailed Submissions */}
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
        )}

        {/* ── Tab 2: Client Content Planner ── */}
        {activeTab === "planner" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 animate-fadeIn items-start">
            
            {/* Left Column: Intake submission form */}
            <form onSubmit={handleAddPlan} className="lg:col-span-5 bg-card border border-border/10 p-8 md:p-10 rounded-sm shadow-xl space-y-6">
              <div>
                <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-bold block mb-2">Content Intake Form</span>
                <h3 className="text-2xl font-heading font-semibold text-foreground tracking-tight">Draft New Update</h3>
                <p className="text-foreground/50 text-[10px] font-light leading-relaxed mt-1">
                  Structure your updates below. Save them as local drafts to track approvals and export JSON.
                </p>
              </div>

              {/* Basic Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Update Type</label>
                  <select 
                    value={formType}
                    onChange={(e) => setFormType(e.target.value as any)}
                    className="w-full bg-background border border-border/10 px-3 py-2 text-xs font-bold text-foreground cursor-pointer focus:outline-none focus:border-primary"
                  >
                    <option value="Project">Project Update</option>
                    <option value="Page Text">Page Text Edit</option>
                    <option value="Blog">Blog Entry</option>
                    <option value="Business Info">Business Info</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Priority</label>
                  <select 
                    value={formPriority}
                    onChange={(e) => setFormPriority(e.target.value as any)}
                    className="w-full bg-background border border-border/10 px-3 py-2 text-xs font-bold text-foreground cursor-pointer focus:outline-none focus:border-primary"
                  >
                    <option value="High">🔴 High</option>
                    <option value="Medium">🟡 Medium</option>
                    <option value="Low">🟢 Low</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Target Route/Section Path *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. /portfolio or /services/commercial-interiors"
                  value={formTargetRoute}
                  onChange={(e) => setFormTargetRoute(e.target.value)}
                  className="w-full bg-background border border-border/10 px-4 py-2.5 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Subject / Update Title *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Vihaan Heart Hospital addition"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full bg-background border border-border/10 px-4 py-2.5 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary font-bold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Description & Core Content *</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Provide all texts, project dimensions, materials, or change copy details here..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-background border border-border/10 px-4 py-2.5 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary resize-none leading-relaxed font-light"
                />
              </div>

              {/* Media Settings */}
              <div className="border-t border-border/10 pt-4 space-y-4">
                <span className="text-[9px] uppercase tracking-widest font-extrabold text-primary block">Media Settings</span>
                
                <div className="space-y-1.5">
                  <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Image File Naming Conventions</label>
                  <input 
                    type="text" 
                    placeholder="e.g. project-hospital-01.jpg, project-hospital-02.jpg"
                    value={formImageNames}
                    onChange={(e) => setFormImageNames(e.target.value)}
                    className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Featured Image URL</label>
                    <input 
                      type="text" 
                      placeholder="Swatches / Image Link"
                      value={formImageUrl}
                      onChange={(e) => setFormImageUrl(e.target.value)}
                      className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Mobile Banner URL</label>
                    <input 
                      type="text" 
                      placeholder="Mobile version Link"
                      value={formMobileBannerUrl}
                      onChange={(e) => setFormMobileBannerUrl(e.target.value)}
                      className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* SEO Settings */}
              <div className="border-t border-border/10 pt-4 space-y-4">
                <span className="text-[9px] uppercase tracking-widest font-extrabold text-primary block">SEO Metadata</span>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">SEO Title Tag</label>
                    <input 
                      type="text" 
                      placeholder="SEO Title"
                      value={formSeoTitle}
                      onChange={(e) => setFormSeoTitle(e.target.value)}
                      className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Keywords</label>
                    <input 
                      type="text" 
                      placeholder="comma-separated"
                      value={formSeoKeywords}
                      onChange={(e) => setFormSeoKeywords(e.target.value)}
                      className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Meta Description</label>
                  <textarea 
                    rows={2}
                    placeholder="Short SEO snippet for search results (max 155 chars)..."
                    value={formSeoDescription}
                    onChange={(e) => setFormSeoDescription(e.target.value)}
                    className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary resize-none leading-relaxed font-light"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">OpenGraph Share Image Link</label>
                  <input 
                    type="text" 
                    placeholder="OG Image URL"
                    value={formOgImageUrl}
                    onChange={(e) => setFormOgImageUrl(e.target.value)}
                    className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Marketing Swiped Media (Instagram / Reels script) */}
              <div className="border-t border-border/10 pt-4 space-y-4">
                <span className="text-[9px] uppercase tracking-widest font-extrabold text-primary block">Social Media & Reels Planner</span>
                
                <div className="space-y-1.5">
                  <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Instagram Caption Draft</label>
                  <textarea 
                    rows={2}
                    placeholder="E.g., Elevate your brand workspace! Behind the scenes..."
                    value={formInstaCaption}
                    onChange={(e) => setFormInstaCaption(e.target.value)}
                    className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground focus:outline-none focus:border-primary resize-none leading-relaxed font-light"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Reel Script & Audio Hook</label>
                  <textarea 
                    rows={2}
                    placeholder="Voiceover dialogue, visual transitions, audio hooks..."
                    value={formReelScript}
                    onChange={(e) => setFormReelScript(e.target.value)}
                    className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground focus:outline-none focus:border-primary resize-none leading-relaxed font-light"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Reel Call-To-Action</label>
                    <input 
                      type="text" 
                      placeholder="CTA hook (e.g. DM us)"
                      value={formReelCta}
                      onChange={(e) => setFormReelCta(e.target.value)}
                      className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Hashtags</label>
                    <input 
                      type="text" 
                      placeholder="#orbiko #interior"
                      value={formReelHashtags}
                      onChange={(e) => setFormReelHashtags(e.target.value)}
                      className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[8px] uppercase tracking-widest text-foreground/40 font-bold block">Reel Cover Image Filename</label>
                  <input 
                    type="text" 
                    placeholder="e.g. reel-cover-vihaan.jpg"
                    value={formReelCoverUrl}
                    onChange={(e) => setFormReelCoverUrl(e.target.value)}
                    className="w-full bg-background border border-border/10 px-4 py-2 text-xs text-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-background border border-primary py-4 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-transparent hover:text-primary transition-all duration-350 shadow-md"
              >
                <Plus size={14} />
                <span>Save Local Draft</span>
              </button>
            </form>

            {/* Right Column: Submitted plans backlog & status trackers */}
            <div className="lg:col-span-7 space-y-8">
              <div className="border-b border-border/15 pb-4">
                <h3 className="font-heading font-semibold text-lg tracking-tight">Content Pipeline Drafts ({plans.length})</h3>
                <p className="text-[10px] text-foreground/45 mt-1 font-light">Submit drafts to track client approvals. Copy formatted prompts directly to update your site layout.</p>
              </div>

              {plans.length === 0 ? (
                <div className="border border-dashed border-border/20 p-20 text-center rounded-sm bg-card/10">
                  <FileText size={32} className="mx-auto text-foreground/20 mb-4" />
                  <p className="text-foreground/30 text-xs uppercase tracking-wider font-bold">No Content Drafts Pending</p>
                  <p className="text-[10px] text-foreground/45 mt-2 font-light">Prepare structured templates using the form on the left to start collecting updates.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {plans.map((plan) => {
                    const planAlerts = checkAlerts(plan);
                    
                    return (
                      <div key={plan.id} className="bg-card border border-border/10 p-8 rounded-sm shadow-md space-y-6 hover:border-primary/20 transition-all relative">
                        {/* Title, Badge & Priority */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/10 pb-4">
                          <div>
                            <div className="flex items-center gap-3">
                              <span className={`text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-sm font-extrabold ${
                                plan.priority === "High" 
                                  ? "bg-red-500/10 text-red-500" 
                                  : plan.priority === "Medium" 
                                    ? "bg-yellow-500/10 text-yellow-500" 
                                    : "bg-green-500/10 text-green-500"
                              }`}>
                                {plan.priority} Priority
                              </span>
                              <span className="inline-block bg-foreground/5 text-foreground/60 text-[8px] uppercase tracking-widest font-extrabold px-2 py-0.5 rounded-sm">
                                {plan.type}
                              </span>
                            </div>
                            <h4 className="font-bold text-foreground text-lg uppercase tracking-wider mt-2">{plan.title}</h4>
                            <p className="text-foreground/45 text-[9px] uppercase tracking-wider font-medium mt-1">
                              Target Route: <span className="text-foreground/75 font-bold">{plan.targetRoute}</span>
                            </p>
                          </div>
                          
                          {/* Actions */}
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={() => handleDeletePlan(plan.id)}
                              className="text-foreground/30 hover:text-primary transition-colors"
                              title="Delete Plan"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Status tracker checklist */}
                        <div className="bg-background/20 p-4 border border-border/5 rounded-sm space-y-4">
                          <span className="text-[8px] uppercase tracking-widest font-bold text-foreground/40 block">Approval Workflow Tracker</span>
                          <div className="flex flex-wrap items-center gap-6">
                            {[
                              { label: "Draft Stage", val: "Draft" },
                              { label: "Client Approved", val: "Client Approved" },
                              { label: "Uploaded to Web", val: "Uploaded" }
                            ].map((step) => {
                              const isActive = plan.status === step.val;
                              return (
                                <button
                                  key={step.val}
                                  onClick={() => handleUpdateStatus(plan.id, step.val as any)}
                                  className={`flex items-center gap-2 text-[9px] uppercase tracking-wider font-bold transition-all px-3 py-1.5 rounded-sm border ${
                                    isActive 
                                      ? "bg-primary border-primary text-background shadow-sm" 
                                      : "bg-background border-border/10 text-foreground/60 hover:text-foreground"
                                  }`}
                                >
                                  {isActive && <Check size={10} />}
                                  <span>{step.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Missing Content Alerts */}
                        {planAlerts.length > 0 && (
                          <div className="bg-amber-500/10 border border-amber-500/25 p-4 rounded-sm space-y-2">
                            <div className="flex items-center gap-2 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
                              <AlertTriangle size={12} />
                              <span>Missing Content Alerts ({planAlerts.length})</span>
                            </div>
                            <ul className="list-disc pl-5 text-[9px] text-amber-500/80 space-y-1 font-medium">
                              {planAlerts.map((alert, index) => (
                                <li key={index}>{alert}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Timestamp logs */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[9px] uppercase tracking-widest text-foreground/45 border-t border-b border-border/5 py-3">
                          <div className="flex items-center gap-1.5">
                            <Clock size={10} />
                            <span>Created: {plan.createdAt.split(",")[0]}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <TrendingUp size={10} />
                            <span>Updated: {plan.updatedAt.split(",")[0]}</span>
                          </div>
                          {plan.uploadedAt && (
                            <div className="flex items-center gap-1.5 text-green-600 font-bold">
                              <Check size={10} />
                              <span>Live: {plan.uploadedAt.split(",")[0]}</span>
                            </div>
                          )}
                        </div>

                        {/* Short text snippet preview */}
                        <div>
                          <p className="text-[9px] uppercase tracking-wider font-bold text-foreground/40 mb-1">Content Preview</p>
                          <p className="text-foreground/75 text-xs font-light leading-relaxed line-clamp-3">{plan.description}</p>
                        </div>

                        {/* Action Buttons: Copy details for AI swapper */}
                        <div className="pt-2 border-t border-border/10 flex justify-end">
                          <button
                            onClick={() => copyPlanPrompt(plan)}
                            className="inline-flex items-center gap-2 bg-foreground text-background border border-foreground/10 px-5 py-2.5 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-primary hover:border-primary hover:text-background transition-all duration-350 shadow-sm"
                          >
                            <Copy size={12} />
                            <span>Copy for AI Update</span>
                          </button>
                        </div>

                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        )}

        {/* Local database security shield */}
        <div className="mt-20 border border-border/10 bg-card/25 p-6 flex items-center gap-4 rounded-sm">
          <ShieldCheck size={24} className="text-green-600 flex-shrink-0" />
          <div className="text-xs">
            <p className="font-bold text-foreground uppercase tracking-wider">Verification Standards Active</p>
            <p className="text-foreground/50 font-light mt-0.5">
              Draft configurations are stored locally inside the JSON pipeline database using `localStorage` schemas. Direct clipboard copy operations compile formatted Markdown ready for code swappings.
            </p>
          </div>
        </div>

      </Container>
    </div>
  );
}
