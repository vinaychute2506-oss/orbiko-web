"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Sparkles, Compass, HelpCircle, HardHat, CalendarRange, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export default function AboutPage() {
  const reasonsToChoose = [
    "45-Day Delivery Assurance for Home Interiors",
    "Dedicated In-House Manufacturing Facility",
    "Premium Factory-Finish Modular Solutions",
    "Experienced Interior Designers & Skilled Artisans",
    "Realistic 3D Design Previews & Visualizations",
    "Transparent Pricing with No Hidden Costs",
    "No Third-Party Contractors",
    "Projects Delivered Across Bangalore, Kolkata, Pune & Delhi",
    "4.6/5 Customer Satisfaction Rating",
    "End-to-End Design, Manufacturing & Installation"
  ];

  const collaborateChecklist = [
    "In-House Manufacturing Facility",
    "Factory-Finish Modular Production",
    "Custom Furniture & Carpentry Solutions",
    "Quality-Assured Production & Timely Delivery"
  ];

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Visual Header Banner Area */}
      <div className="w-full h-[60vh] relative overflow-hidden bg-background border-b border-border/10">
        <img
          src="/images/about_hero.png"
          alt="Orbiko Interiors Bookshelf Lounge"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-20">
          <Container>
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">
              Design Standard
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-light text-foreground tracking-tight leading-none">
              About Us<span className="text-primary font-black">.</span>
            </h1>
          </Container>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-start">
            
            {/* Left Narrative Text */}
            <div className="space-y-12">
              <div>
                <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">
                  Design Standard
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-light text-foreground leading-[1.1] tracking-tight">
                  Flawless Execution In Every Corner
                </h2>
              </div>
              <div className="space-y-6 text-foreground/75 text-sm md:text-base leading-relaxed font-light pl-6 border-l border-primary/20">
                <p className="font-medium text-foreground text-lg italic">
                  At Orbiko, we believe exceptional interiors are more than beautiful spaces. They are thoughtfully crafted environments that blend aesthetics, functionality, and individuality. Every project is designed with modern sensibilities, intelligent space planning, and precision-engineered detailing to create spaces that elevate the way people live and work.
                </p>
                <p>
                  For years, Orbiko has successfully delivered interior solutions for leading organizations and premium clients across major cities including Bangalore, Kolkata, Pune, and Delhi. Our commitment to quality, transparency, and execution excellence has earned us a strong client satisfaction rating of 4.6 out of 5.
                </p>
                <p>
                  From luxury residences and modular kitchens to corporate offices, showrooms, and complete renovation projects, every stage is managed entirely in-house. We eliminate dependency on third-party contractors, ensuring complete transparency in costing, tighter quality control, and predictable project timelines.
                </p>
                <p>
                  What sets Orbiko apart is our dedicated manufacturing facility, where factory-finished modular furniture, custom carpentry, and precision-crafted interior elements are produced under strict quality standards. Alongside advanced manufacturing capabilities, our team of experienced designers and skilled artisans brings handcrafted detailing and personalized design solutions to every project.
                </p>
                <p>
                  Before execution begins, clients receive highly realistic 3D visualizations and walkthrough concepts, allowing them to experience their future space and make informed decisions with complete confidence.
                </p>
                <p>
                  For residential interior projects, Orbiko proudly offers a 45-Day Delivery Assurance, ensuring timely handover without compromising on craftsmanship, quality, or attention to detail.
                </p>
                <p className="font-semibold text-foreground">
                  With cutting-edge manufacturing, creative design expertise, handcrafted excellence, and end-to-end project management, Orbiko delivers interiors that are sophisticated, durable, and built to exceed expectations.
                </p>
              </div>
            </div>

            {/* Right Side: Why Choose Orbiko Checklist */}
            <div className="bg-card border border-border/10 p-10 md:p-12 shadow-2xl space-y-10 rounded-sm lg:sticky lg:top-32">
              <div>
                <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Value Proposition</span>
                <h3 className="text-3xl font-heading font-semibold text-foreground tracking-tight">Why Choose Orbiko?</h3>
              </div>
              
              <ul className="space-y-4">
                {reasonsToChoose.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm font-light leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </section>

      {/* Custom Key Pillars Section */}
      <section className="py-24 md:py-32 bg-card/45 border-y border-border/10">
        <Container>
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">
              Our Foundations
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-light text-foreground tracking-tight leading-[1.1]">
              Pillars of Sustainable Space Planning
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { icon: <Sparkles className="text-primary" size={22} />, label: "State-of-the-Art Production", val: "Modular" },
              { icon: <Compass className="text-primary" size={22} />, label: "Tailored Space Layouts", val: "Precision" },
              { icon: <HelpCircle className="text-primary" size={22} />, label: "Completely Itemized Budgeting", val: "Transparent" },
              { icon: <HardHat className="text-primary" size={22} />, label: "Dedicated PM Support", val: "Supervised" },
            ].map((s, i) => (
              <div key={i} className="text-center group flex flex-col items-center">
                <div className="w-14 h-14 bg-background border border-border/10 flex items-center justify-center mb-8 rounded-sm group-hover:border-primary/30 group-hover:shadow-md transition-all duration-350">
                  {s.icon}
                </div>
                <p className="text-3xl font-heading font-semibold text-foreground mb-3 tracking-tight">{s.val}</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/45 font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Visual Call To Action Split Layout with Partner BLUEPRINTS */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center bg-foreground text-background p-8 md:p-16 rounded-sm border border-border/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(229,222,212,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,222,212,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold block">
                Partner & Studio Support
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-light text-background tracking-tight leading-[1.1]">
                Collaborate With Orbiko Planners
              </h2>
              <div className="space-y-4 text-background/70 text-xs md:text-sm leading-relaxed font-light">
                <p className="font-semibold text-background">Get your interior job work done with Orbiko.</p>
                <p>We partner with interior designers, architects, contractors, and design studios to bring their ideas to life with factory-level precision.</p>
                <p>Orbiko helps local interior designers manufacture their products through our dedicated in-house production facility, eliminating the need for their own manufacturing setup.</p>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 pt-2">
                {collaborateChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-background/95 text-[11px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[#E5DED4] font-serif italic text-sm pt-2">
                "You design it. Orbiko manufactures it."
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-primary text-background border border-primary px-8 py-4.5 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-transparent hover:text-primary transition-all duration-350 shadow-xl"
                >
                  <span>Explore Direct Support</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full bg-card/10 overflow-hidden border border-background/10 rounded-sm shadow-xl">
              <img
                src="/images/about_partner.png"
                alt="Wood carpentry factory workshop blueprints"
                className="absolute inset-0 w-full h-full object-cover opacity-85 hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
