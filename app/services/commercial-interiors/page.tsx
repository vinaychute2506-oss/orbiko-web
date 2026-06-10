"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Factory, 
  Layout, 
  Sparkles, 
  Layers, 
  Users, 
  Clock, 
  Calculator, 
  Eye 
} from "lucide-react";
import { useState } from "react";
import { ConsultModal } from "@/components/ConsultModal";

export default function CommercialInteriorsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const commercialProjects = [
    {
      num: 1,
      title: "Vihaan Heart & Super Specialty Hospital",
      area: "42,000 Sq. ft.",
      category: "Healthcare",
      location: "Bangalore",
      img: "/images/vihaan-hospital-featured.jpg",
      slug: "vihaan-heart-super-specialty-hospital"
    },
    {
      num: 2,
      title: "Indiabulls, Delhi",
      area: "25,000+ Sq. ft.",
      category: "Corporate Office",
      location: "Delhi",
      img: "/images/indiabulls-office-featured.jpg",
      slug: "indiabulls-corporate-office"
    },
    {
      num: 3,
      title: "SDM Ayurveda College, Bangalore",
      area: "30,000+ Sq. ft.",
      category: "Educational",
      location: "Bangalore",
      img: "/images/sdm-ayurveda-featured.jpg",
      slug: "sdm-ayurveda-college-bangalore"
    },
    {
      num: 4,
      title: "Amoeba Game Zone",
      area: "20,000+ Sq. ft.",
      location: "Pune, Gurgaon, Noida & Kolkata",
      category: "Entertainment",
      img: "/images/amoeba-game-zone-featured.jpg",
      slug: "amoeba-game-zone-multi-city"
    },
    {
      num: 5,
      title: "Corporate Office – Work Lounge",
      area: "12,000 Sq. ft.",
      category: "Corporate Office",
      location: "Bangalore",
      img: "/images/office-lounge-featured.jpg",
      slug: "corporate-office-work-lounge"
    },
    {
      num: 6,
      title: "Urban Brew Café Interior",
      area: "3,500 Sq. ft.",
      category: "Café & Restaurant",
      location: "Bangalore",
      img: "/images/cafe-interior-featured.jpg",
      slug: "urban-brew-cafe-interior"
    },
    {
      num: 7,
      title: "Lifestyle Retail Store Interior",
      area: "4,800 Sq. ft.",
      category: "Retail & Showroom",
      location: "Bangalore",
      img: "/images/retail-store-featured.jpg",
      slug: "lifestyle-retail-store-interior"
    },
    {
      num: 8,
      title: "Hotel Corporate Lobby",
      area: "8,000 Sq. ft.",
      category: "Hospitality",
      location: "Bangalore",
      img: "/images/hotel-lobby-featured.jpg",
      slug: "hotel-corporate-lobby"
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Hero Banner */}
      <div className="w-full h-[65vh] relative overflow-hidden bg-background border-b border-border/10">
        <img
          src="/images/commercial_hero.png"
          alt="Premium office interior environment"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-24">
          <Container>
            <Link
              href="/services"
              className="inline-flex items-center text-foreground/45 hover:text-foreground transition-colors mb-12 text-[10px] uppercase tracking-[0.22em] font-bold"
            >
              <ArrowLeft size={14} className="mr-2" /> All Services
            </Link>
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">
              Commercial Spaces
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-light text-foreground tracking-tight leading-none max-w-5xl">
              Commercial Interiors<span className="text-primary font-black">.</span>
            </h1>
            <p className="text-foreground/60 text-xs md:text-sm font-light mt-4 tracking-wider max-w-2xl leading-relaxed">
              Designing workspaces that inspire productivity, reflect your brand, and create lasting impressions.
            </p>
          </Container>
        </div>
      </div>

      {/* Main Section */}
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Service Overview */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block">Service Overview</span>
              <h2 className="text-3xl md:text-5xl font-heading font-light text-[#DC2626] leading-[1.15] tracking-tight">
                Elevate Spaces. Elevate Business.
              </h2>
              <div className="space-y-4 text-foreground/75 text-sm md:text-base leading-relaxed font-light pl-6 border-l border-primary/20">
                <p>
                  Elevate your office, showroom, café, retail store, or commercial space with interiors designed to strengthen your brand identity, enhance customer experience, and maximize operational efficiency.
                </p>
                <p>
                  From concept planning and realistic 3D visualizations to in-house manufacturing and precision execution, Orbiko delivers end-to-end commercial interior solutions with factory-finish quality, transparent pricing, and assured timelines.
                </p>
              </div>
            </div>

            {/* Quick Badges Row */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/80">10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Factory size={16} />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/80">In-House Factory Production</span>
              </div>
            </div>
          </div>

          {/* Right Column: Beige Card */}
          <div className="lg:col-span-4 bg-[#FAF6F0] text-[#2A1B15] p-10 border border-[#C9BAAA]/40 rounded-sm shadow-xl space-y-8 sticky top-32">
            <div>
              <h3 className="text-xl font-heading font-semibold tracking-tight">Ready to elevate your commercial space?</h3>
              <p className="text-[#2A1B15]/70 text-xs leading-relaxed font-light mt-3">
                Let's create a workspace that drives success and leaves a lasting impression.
              </p>
            </div>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full inline-flex items-center justify-between bg-[#2A1B15] text-[#FAF6F0] px-6 py-4.5 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-[#DC2626] transition-colors duration-300 shadow-md"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={14} />
            </button>

            <div className="text-center pt-2">
              <Link
                href="/portfolio?type=commercial"
                className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#2A1B15]/60 hover:text-[#2A1B15] transition-colors"
              >
                View Our Work →
              </Link>
            </div>
          </div>

        </div>

        {/* What We Deliver Section */}
        <div className="pt-32 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block">What We Deliver</span>
            <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-foreground">
              End-to-End Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Space Planning & Brand-Focused Design",
                desc: "Strategic layouts that align with your brand and business goals.",
                icon: <Layout className="text-primary" size={20} />
              },
              {
                title: "3D Visuals & Design Development",
                desc: "Realistic 3D renderings to visualize your space before execution.",
                icon: <Sparkles className="text-primary" size={20} />
              },
              {
                title: "Custom Furniture & Modular Solutions",
                desc: "Tailored furniture and modular solutions built for durability and style.",
                icon: <Layers className="text-primary" size={20} />
              },
              {
                title: "End-to-End Project Management",
                desc: "Single-point accountability for a seamless project experience.",
                icon: <Users className="text-primary" size={20} />
              },
              {
                title: "Factory-Finish Manufacturing & Installation",
                desc: "In-house manufacturing with precision installation for consistent quality.",
                icon: <Factory className="text-primary" size={20} />
              },
              {
                title: "Premium Materials & Quality Assurance",
                desc: "Carefully selected materials and strict quality checks for long-term performance.",
                icon: <ShieldCheck className="text-primary" size={20} />
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border/10 p-8 flex flex-col justify-between h-full rounded-sm hover:border-primary/20 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-background border border-border/10 flex items-center justify-center rounded-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-foreground font-heading font-semibold text-base tracking-tight">{item.title}</h4>
                  <p className="text-foreground/60 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Under-grid Badge Strip */}
          <div className="flex flex-wrap justify-center items-center gap-12 py-6 border-y border-border/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary" size={18} />
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-foreground/80">10-Year Warranty</span>
            </div>
            <div className="flex items-center gap-3">
              <Factory className="text-primary" size={18} />
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-foreground/80">In-House Factory Production</span>
            </div>
          </div>
        </div>

        {/* Notable Commercial Projects Grid */}
        <div className="pt-32 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-foreground uppercase">
              Our Notable Commercial Projects
            </h2>
            <div className="w-24 h-0.5 bg-primary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commercialProjects.map((proj) => (
              <div 
                key={proj.num} 
                className="bg-card border border-border/10 rounded-sm overflow-hidden flex flex-col h-full shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
              >
                {/* Number bubble */}
                <div className="absolute top-4 left-4 z-10 w-7 h-7 rounded-sm bg-[#FAF6F0] text-[#2A1B15] flex items-center justify-center font-bold text-xs shadow-sm">
                  {proj.num}
                </div>

                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <h4 className="text-sm font-bold text-foreground font-heading line-clamp-2 leading-snug">
                    {proj.title}
                  </h4>
                  
                  <div className="space-y-1 text-[11px] text-foreground/50 font-light">
                    <p>📏 <span className="font-semibold text-foreground/75">Area:</span> {proj.area}</p>
                    <p>📁 <span className="font-semibold text-foreground/75">Category:</span> {proj.category}</p>
                    <p>📍 <span className="font-semibold text-foreground/75">Location:</span> {proj.location}</p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/portfolio/${proj.slug}`}
                      className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-wider font-extrabold text-primary hover:text-foreground transition-colors group/link"
                    >
                      <span>View Project</span>
                      <ArrowRight size={10} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </Container>

      {/* Footer CTA Banner */}
      <section className="py-24 bg-[#FAF6F0] text-[#2A1B15] border-t border-[#C9BAAA]/40 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(42,27,21,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,27,21,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left CTA Call */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-[#DC2626] text-[9px] uppercase tracking-[0.4em] font-extrabold block">
                Why Choose Orbiko
              </span>
              <h2 className="text-3xl md:text-6xl font-heading font-light tracking-tight leading-none text-[#2A1B15]">
                Great design drives business forward<span className="text-[#DC2626] font-black">.</span>
              </h2>
              <p className="text-[#2A1B15]/75 text-xs md:text-sm font-light leading-relaxed max-w-xl">
                Partner with Orbiko to create commercial interiors that inspire, perform, and grow with your business.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-3 bg-[#DC2626] text-[#FAF6F0] border border-[#DC2626] px-8 py-4 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-[#DC2626] transition-all duration-350 shadow-lg"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>

            {/* Right Value Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 border-l border-[#C9BAAA]/30 pl-0 lg:pl-12">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Factory size={18} className="text-[#DC2626]" />
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#2A1B15]">In-House Manufacturing</h4>
                </div>
                <p className="text-[10px] text-[#2A1B15]/60 font-light leading-relaxed">Complete control over quality & timelines.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Calculator size={18} className="text-[#DC2626]" />
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#2A1B15]">Transparent Pricing</h4>
                </div>
                <p className="text-[10px] text-[#2A1B15]/60 font-light leading-relaxed">No hidden costs, complete clarity.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-[#DC2626]" />
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#2A1B15]">On-Time Delivery</h4>
                </div>
                <p className="text-[10px] text-[#2A1B15]/60 font-light leading-relaxed">Assured timelines you can rely on.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-[#DC2626]" />
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-[#2A1B15]">10-Year Warranty</h4>
                </div>
                <p className="text-[10px] text-[#2A1B15]/60 font-light leading-relaxed">Long-term assurance for your peace of mind.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Consultation Modal */}
      <ConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
