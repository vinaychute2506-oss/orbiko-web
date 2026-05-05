import { getSiteSettings } from "@/lib/api";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight, Trophy, Users, Globe2, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us | Orbiko — Architects & Designers",
  description: "Learn about the Orbiko philosophy, our history of award-winning design, and the team behind our luxury architectural projects.",
};

export default async function AboutPage() {
  const settings = await getSiteSettings().catch(() => null);
  const yearsExperience = "25";
  const aboutText = "At Orbiko, we believe architecture is more than just structures — it’s about creating environments that inspire, function seamlessly, and stand the test of time. Our approach blends modern aesthetics with thoughtful design, ensuring every space reflects both purpose and personality.";

  return (
    <div className="bg-black min-h-screen pb-32">
      {/* ── Banner ── */}
      <div className="w-full h-[65vh] relative overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Orbiko Architecture"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-24">
          <Container>
            <span className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">Our Legacy</span>
            <h1 className="text-6xl md:text-8xl font-heading font-semibold text-white tracking-tight leading-none">
              About Us.
            </h1>
          </Container>
        </div>
      </div>

      {/* ── Philosophy ── */}
      <section className="py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="max-w-xl">
              <span className="text-yellow-500 text-[10px] uppercase tracking-[0.4em] font-bold block mb-12">Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-12 leading-[1.1] tracking-tight">
                Designing for the future, respecting the past.
              </h2>
              <div className="space-y-10 text-white/60 text-lg leading-relaxed font-light italic border-l border-white/10 pl-10">
                <p>{aboutText}</p>
                <p>
                  Founded on the principles of precision and creativity, we have spent over {yearsExperience} years redefining the architectural landscape. Our work is characterized by a commitment to quality materials, sustainable practices, and a relentless pursuit of design innovation.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-[#111] rounded-sm overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Architecture detail"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute top-12 right-12 bg-yellow-500 text-black p-10 text-center min-w-[160px] shadow-2xl">
                <p className="text-5xl font-heading font-bold leading-none">{yearsExperience}</p>
                <p className="text-[10px] uppercase tracking-widest mt-4 font-bold">Years of<br />Excellence</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats ── */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20">
            {[
              { icon: <Globe2 className="text-yellow-500" size={24} />, label: "Global Projects", val: "150+" },
              { icon: <Trophy className="text-yellow-500" size={24} />, label: "Design Awards", val: "42" },
              { icon: <Users className="text-yellow-500" size={24} />, label: "Creative Minds", val: "28" },
              { icon: <Sparkles className="text-yellow-500" size={24} />, label: "Client Love", val: "99%" },
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-10 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/20 transition-all duration-500">
                  {s.icon}
                </div>
                <p className="text-4xl font-heading font-bold text-white mb-4 tracking-tighter">{s.val}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-32">
        <Container>
          <div className="bg-yellow-500 p-16 md:p-32 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-heading font-bold text-black mb-12 tracking-tighter uppercase leading-none">
                Want to work with us?
              </h2>
              <p className="text-black/60 max-w-2xl mx-auto mb-16 text-xl leading-relaxed font-medium">
                We are always looking for exceptional talent and visionary clients. Whether you have a project or want to join our team, we'd love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-6 bg-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-zinc-900 transition-all duration-300 shadow-xl"
              >
                Get in Touch <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
