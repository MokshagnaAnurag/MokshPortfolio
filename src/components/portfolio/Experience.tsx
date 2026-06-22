import React, { useState } from "react";
import { Reveal } from "./Reveal";
import { MapPin, Calendar, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  id: string;
  orgFull: string;
  orgShort: string;
  role: string;
  year: string;
  period: string;
  location: string;
  bullets?: string[];
  note?: string;
  skills?: string;
}

const items: ExperienceItem[] = [
  {
    id: "exp-1", orgShort: "Spaceborn", orgFull: "Spaceborn",
    role: "Robotics & Simulation Intern", year: "2026",
    period: "May 2026 – Present", location: "Remote",
    bullets: ["Working on autonomous drone and robotic systems design, physics-based simulations, and control optimization."]
  },
  {
    id: "exp-2", orgShort: "IIT Tirupati NIF", orgFull: "IIT Tirupati Navavishkar I-Hub Foundation",
    role: "Project Intern", year: "2025",
    period: "Jun 2025 – May 2026", location: "Tirupati, AP",
    bullets: [
      "Design and develop a CubeSat prototype with a modular 1U architecture.",
      "Implement and validate onboard subsystems: RP2040-based OBC, power management, LoRaWAN modules.",
      "Integrate multi-sensor arrays with a ground station interface for real-time telemetry.",
    ]
  },
  {
    id: "exp-3", orgShort: "CES, MVGR", orgFull: "Center For Embedded Systems, MVGR",
    role: "Student Member", year: "2024",
    period: "Jul 2024 – May 2026", location: "Vizianagaram, AP",
    bullets: [
      "Designed PID-based control systems and wireless sensor networks using STM32 and Arduino.",
      "Built functional embedded prototypes for robotics and industrial automation applications.",
    ],
    skills: "PID Control, STM32, Arduino"
  },
  {
    id: "exp-4", orgShort: "Daloft Aerospace", orgFull: "Daloft Aerospace Pvt. Ltd.",
    role: "Intern", year: "2025",
    period: "Aug 2025 – Nov 2025", location: "Chennai / Remote",
    bullets: ["Working on autonomous drone systems using ROS 2, PX4, and ArduPilot for real-time simulation and control."]
  },
  {
    id: "exp-5", orgShort: "CS³ Lab", orgFull: "CS³: Cloud & Smart System Services Lab",
    role: "Project Intern", year: "2025",
    period: "Jul 2025 – Sep 2025", location: "Mangaluru / Remote",
    bullets: [
      "Advanced the prototype autonomous vehicle system within an IoV framework.",
      "Implemented real-time trajectory mapping using sensor fusion in ROS 2.",
      "Integrated V2I communication for dynamic route updates and cooperative driving.",
      "Worked with NAV2 and SLAM Toolbox for robust navigation in diverse environments.",
    ],
    note: "Under Dr. Sourav Kanti Addya and Mr. Rajeev K K."
  },
  {
    id: "exp-6", orgShort: "UnlockDiscounts", orgFull: "UnlockDiscounts",
    role: "Research Intern", year: "2025",
    period: "May 2025 – Aug 2025", location: "Bengaluru / Remote",
    bullets: ["Designed and developed research posters and technical presentations to visually communicate project findings."]
  },
  {
    id: "exp-7", orgShort: "NITK", orgFull: "National Institute of Technology Karnataka",
    role: "Summer Intern", year: "2025",
    period: "May 2025 – Jul 2025", location: "Mangaluru, KA",
    bullets: [
      "Contributed to LEAD: A Prototype for Learning-Enabled Autonomous Driving.",
      "Implemented autonomous navigation algorithms in ROS 2 for real-time trajectory planning.",
      "Integrated simulation environments and sensor data for performance evaluation.",
    ],
    note: "Under Dr. Sourav Kanti Addya and Mr. Rajeev K K.",
    skills: "ROS 2, Autonomous Systems, Sensor Fusion"
  },
  {
    id: "exp-8", orgShort: "Indux Solar", orgFull: "Indux Solar",
    role: "AI Intern", year: "2025",
    period: "May 2025 – Jun 2025", location: "Remote",
    bullets: ["Applied machine learning models to solar data and optimized edge-intelligence frameworks."]
  },
  {
    id: "exp-9", orgShort: "CCSR", orgFull: "Center for Cyber Security Studies & Research",
    role: "Intern", year: "2024",
    period: "Sep 2024 – Dec 2024", location: "Remote",
    bullets: [
      "Assisted in advanced research on emerging cyber threats and zero-day exploit detection.",
      "Contributed to educational content to bolster organizational security awareness.",
    ]
  },
  {
    id: "exp-10", orgShort: "ShadowFox", orgFull: "ShadowFox",
    role: "Cybersecurity Intern", year: "2024",
    period: "Sep 2024 – Oct 2024", location: "Remote",
    bullets: [
      "Conducted penetration testing using Metasploit, Nmap, Gobuster, Wireshark, Burp Suite, and VeraCrypt.",
      "Built custom exploits improving coverage by 15%, reducing client attack surface by 30%.",
      "Produced detailed vulnerability assessment reports informing remediation strategies.",
    ],
    skills: "Penetration Testing, Metasploit, Nmap, Wireshark"
  },
  {
    id: "exp-11", orgShort: "SwechaAP", orgFull: "SwechaAP",
    role: "Member", year: "2023",
    period: "Oct 2023 – Present", location: "Vijayawada, AP",
    bullets: [
      "Contributed to Voice AI Telugu and OpenStreetMap, supporting open-source development.",
      "Promoted open-source culture through technical community projects and collaborative development.",
    ]
  }
];

const accentColors = [
  "#F97316","#3B82F6","#22C55E","#EAB308","#EF4444",
  "#A855F7","#F97316","#3B82F6","#22C55E","#EAB308","#EF4444"
];

export function Experience() {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const featured = items[featuredIdx];
  const featuredColor = accentColors[featuredIdx];
  const sideItems = items.filter((_, i) => i !== featuredIdx);

  return (
    <section id="experience" className="relative py-24 bg-[var(--color-industrial-bg)] border-b-4 border-mech overflow-hidden">

      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(var(--color-industrial-dark) 1.5px, transparent 1.5px)`, backgroundSize: `22px 22px` }} />

      <div className="mx-auto max-w-[1300px] px-4 md:px-8 relative z-10">

        {/* ── NEWSPAPER MASTHEAD ── */}
        <Reveal>
          <div className="mb-0">
            {/* Top rule */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 h-[4px] bg-[var(--color-industrial-dark)]" />
              <div className="h-[4px] w-4 bg-[var(--color-industrial-orange)]" />
              <div className="flex-1 h-[4px] bg-[var(--color-industrial-dark)]" />
            </div>

            {/* Masthead row */}
            <div className="flex items-end justify-between mb-2">
              <div className="flex items-end gap-6">
                <h2 className="font-display font-black uppercase tracking-tighter text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] text-[var(--color-industrial-dark)]">
                  Work<br/>Chronicle
                </h2>
              </div>
              <div className="text-right hidden md:block">
                <p className="font-mono text-[0.6rem] font-bold tracking-widest uppercase text-[var(--color-industrial-gray)] opacity-60">
                  VOL. IV, NO. {items.length} &nbsp;·&nbsp; MVGR EDITION
                </p>
                <p className="font-mono text-[0.6rem] font-bold tracking-widest uppercase text-[var(--color-industrial-gray)] opacity-60">
                  HARDWARE · ROBOTICS · SYSTEMS
                </p>
                <p className="font-mono text-[0.6rem] font-bold tracking-widest uppercase text-[var(--color-industrial-orange)] mt-1">
                  EST. 2023 &nbsp;·&nbsp; ALL ENTRIES VERIFIED
                </p>
              </div>
            </div>

            {/* Bottom double rule */}
            <div className="h-[3px] bg-[var(--color-industrial-dark)] mb-0.5" />
            <div className="h-[8px] bg-[var(--color-industrial-dark)] mb-4" />
          </div>
        </Reveal>

        {/* ── MOBILE UNIQUE DESIGN (GIANT TYPOGRAPHY WATERMARK) ── */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6 lg:hidden mt-8 px-2 pb-8">
            {items.map((it, i) => {
              const c = accentColors[i % accentColors.length];
              return (
                <div key={it.id} className="relative bg-white border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden p-6">
                  
                  {/* Left Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: c }} />

                  {/* Giant Year Watermark */}
                  <span className="absolute -bottom-4 -right-4 font-display text-[7rem] font-black leading-none text-zinc-50 select-none pointer-events-none z-0">
                    {it.year}
                  </span>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                        {it.period}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                        <MapPin size={10} /> {it.location}
                      </span>
                    </div>

                    <h3 className="font-display text-[1.8rem] font-black uppercase tracking-tighter text-zinc-900 leading-[1.1] mb-1">
                      {it.orgShort}
                    </h3>
                    <p className="font-sans text-[13px] font-bold uppercase tracking-widest mb-4" style={{ color: c }}>
                      {it.role}
                    </p>

                    {it.bullets && (
                      <div className="space-y-2 mb-5">
                        {it.bullets.map((b, idx) => (
                          <p key={idx} className="font-sans text-[12px] leading-relaxed text-zinc-600 flex items-start gap-2">
                            <span className="mt-[0.35rem] w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: c }} />
                            {b}
                          </p>
                        ))}
                      </div>
                    )}

                    {it.skills && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {it.skills.split(",").map((s, si) => (
                          <span key={si} className="font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-100 text-zinc-600 rounded-sm">
                            {s.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* ── DESKTOP EDITORIAL GRID ── */}
        <Reveal delay={0.1}>
          <div className="hidden lg:grid grid-cols-[1fr_320px] gap-0 border-[3px] border-[var(--color-industrial-dark)] shadow-[8px_8px_0_var(--color-industrial-dark)]">

            {/* LEFT — FEATURED STORY */}
            <div className="border-r-[3px] border-b-0 border-[var(--color-industrial-dark)] relative overflow-hidden">

              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredIdx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.22 }}
                  className="h-full flex flex-col"
                >
                  {/* Feature colored header bar */}
                  <div className="h-2 w-full shrink-0" style={{ backgroundColor: featuredColor }} />

                  {/* HEADLINE section */}
                  <div className="p-6 md:p-8 border-b-[3px] border-dashed border-[var(--color-industrial-dark)]">

                    {/* Kicker label and Nav */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="font-mono text-[0.62rem] font-black tracking-[0.25em] uppercase px-2.5 py-1 text-white"
                          style={{ backgroundColor: featuredColor }}
                        >
                          LEAD STORY
                        </span>
                        <span className="font-mono text-[0.62rem] text-[var(--color-industrial-gray)] tracking-widest uppercase opacity-50">
                          {featured.year}
                        </span>
                      </div>
                      
                      {/* Navigation Buttons (Desktop) */}
                      <div className="hidden md:flex items-center gap-2">
                        <button 
                          onClick={() => setFeaturedIdx(prev => prev > 0 ? prev - 1 : items.length - 1)}
                          className="w-7 h-7 flex items-center justify-center border-[2px] border-[var(--color-industrial-dark)] text-[var(--color-industrial-dark)] hover:bg-[var(--color-industrial-dark)] hover:text-white transition-colors"
                          aria-label="Previous Experience"
                        >
                          <ChevronLeft size={14} strokeWidth={3} />
                        </button>
                        <button 
                          onClick={() => setFeaturedIdx(prev => prev < items.length - 1 ? prev + 1 : 0)}
                          className="w-7 h-7 flex items-center justify-center border-[2px] border-[var(--color-industrial-dark)] text-[var(--color-industrial-dark)] hover:bg-[var(--color-industrial-dark)] hover:text-white transition-colors"
                          aria-label="Next Experience"
                        >
                          <ChevronRight size={14} strokeWidth={3} />
                        </button>
                      </div>
                    </div>

                    {/* Headline org */}
                    <h3
                      className="font-display font-black uppercase tracking-tighter leading-[0.88] mb-3"
                      style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-industrial-dark)" }}
                    >
                      {featured.orgFull}
                    </h3>

                    {/* Deck (sub-headline) */}
                    <p className="font-display font-black uppercase tracking-widest text-[1rem] mb-4" style={{ color: featuredColor }}>
                      {featured.role}
                    </p>

                    {/* Byline */}
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-bold bg-[var(--color-industrial-dark)] text-white px-3 py-1.5">
                        <Calendar size={11} />{featured.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-bold border-[2px] border-[var(--color-industrial-dark)] px-3 py-1.5">
                        <MapPin size={11} />{featured.location}
                      </span>
                    </div>
                  </div>

                  {/* BODY COPY */}
                  <div className="p-6 md:p-8 flex-1 grid md:grid-cols-[1fr_auto] gap-8">

                    {/* Article body columns */}
                    <div>
                      {/* Drop cap style first bullet */}
                      {featured.bullets && featured.bullets.length > 0 && (
                        <div className="mb-4">
                          {featured.bullets.map((b, i) => (
                            <p key={i} className="font-mono text-[0.84rem] text-[var(--color-industrial-dark)] leading-[1.85] mb-3 flex gap-3 items-start">
                              <span className="mt-[0.5em] w-2 h-2 shrink-0" style={{ backgroundColor: featuredColor }} />
                              {b}
                            </p>
                          ))}
                        </div>
                      )}

                      {featured.note && (
                        <p className="font-mono text-[0.72rem] italic border-l-4 pl-3 opacity-50 mt-4"
                          style={{ borderColor: featuredColor }}>
                          {featured.note}
                        </p>
                      )}
                    </div>

                    {/* Sidebar: skill tags */}
                    {featured.skills && (
                      <div className="shrink-0 border-l-[2px] border-dashed pl-6 border-[var(--color-industrial-dark)] opacity-70">
                        <p className="font-mono text-[0.58rem] font-black tracking-[0.25em] uppercase mb-3 opacity-50">TECH STACK</p>
                        <div className="flex flex-col gap-2">
                          {featured.skills.split(",").map((s, si) => (
                            <span
                              key={si}
                              className="font-mono text-[0.62rem] font-black uppercase tracking-widest px-2.5 py-1.5 border-[2px] text-center"
                              style={{ borderColor: featuredColor, color: featuredColor }}
                            >
                              {s.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT — BRIEFS COLUMN */}
            <div className="bg-[var(--color-industrial-white)] flex flex-col">

              {/* Column header */}
              <div className="px-5 py-4 border-b-[3px] border-[var(--color-industrial-dark)] flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--color-industrial-orange)]" />
                <span className="font-mono text-[0.65rem] font-black tracking-[0.2em] uppercase">
                  ALL ENTRIES ({items.length})
                </span>
              </div>

              {/* Brief items list */}
              <div className="flex-1 overflow-y-auto max-h-[600px] divide-y-[2px] divide-[var(--color-industrial-dark)] divide-dashed">
                {items.map((it, i) => {
                  const c = accentColors[i];
                  const isActive = i === featuredIdx;
                  return (
                    <button
                      key={it.id}
                      onClick={() => setFeaturedIdx(i)}
                      className={`w-full text-left px-5 py-4 group transition-colors duration-150 flex gap-3 items-start ${
                        isActive
                          ? "bg-[var(--color-industrial-dark)]"
                          : "hover:bg-[var(--color-industrial-yellow)]/30"
                      }`}
                    >
                      {/* Accent bar */}
                      <div
                        className="shrink-0 w-1 self-stretch mt-0.5"
                        style={{ backgroundColor: c }}
                      />

                      <div className="flex-1 min-w-0">
                        {/* Year + active indicator */}
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className="font-mono text-[0.57rem] font-black tracking-widest uppercase"
                            style={{ color: isActive ? c : "var(--color-industrial-gray)", opacity: isActive ? 1 : 0.5 }}
                          >
                            [{it.year}]
                          </span>
                          {isActive && (
                            <span className="font-mono text-[0.52rem] font-black uppercase tracking-widest text-[var(--color-industrial-white)] opacity-60">
                              FEATURED
                            </span>
                          )}
                        </div>

                        <p
                          className="font-display font-black uppercase tracking-tight text-[0.82rem] leading-tight mb-0.5"
                          style={{ color: isActive ? "#fff" : "var(--color-industrial-dark)" }}
                        >
                          {it.orgShort}
                        </p>

                        <p
                          className="font-mono text-[0.6rem] uppercase tracking-wider leading-tight"
                          style={{ color: isActive ? "rgba(255,255,255,0.55)" : "var(--color-industrial-gray)", opacity: isActive ? 1 : 0.65 }}
                        >
                          {it.role}
                        </p>
                      </div>

                      <ChevronRight
                        size={14}
                        className="shrink-0 mt-1 transition-transform duration-150 group-hover:translate-x-0.5"
                        style={{ color: isActive ? c : "var(--color-industrial-dark)", opacity: isActive ? 1 : 0.2 }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Column footer */}
              <div className="px-5 py-3 border-t-[3px] border-[var(--color-industrial-dark)] mt-auto">
                <p className="font-mono text-[0.55rem] tracking-widest uppercase opacity-30 text-center">
                  SELECT ANY ENTRY TO FEATURE
                </p>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Bottom rule */}
        <Reveal delay={0.15}>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex-1 h-[3px] bg-[var(--color-industrial-dark)] opacity-20" />
            <span className="font-mono text-[0.55rem] tracking-[0.3em] uppercase opacity-30">END OF EDITION</span>
            <div className="flex-1 h-[3px] bg-[var(--color-industrial-dark)] opacity-20" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
