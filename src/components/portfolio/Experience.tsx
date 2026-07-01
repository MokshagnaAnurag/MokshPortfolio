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
    id: "exp-1", orgShort: "Zebu Intelligent Systems", orgFull: "Zebu Intelligent Systems",
    role: "UAV Intern", year: "2026",
    period: "July 2026 – Prsent", location: "Hyderabad, Telangana, India",
    bullets: ["Working on Defense Drones."]
  },
  {
    id: "exp-2", orgShort: "Spaceborn", orgFull: "Spaceborn",
    role: "Robotics & Simulation Intern", year: "2026",
    period: "May 2026 – June 2026", location: "Remote",
    bullets: ["Working on autonomous drone and robotic systems design, physics-based simulations, and control optimization."]
  },
  {
    id: "exp-3", orgShort: "IIT Tirupati NIF", orgFull: "IIT Tirupati Navavishkar I-Hub Foundation",
    role: "Project Intern", year: "2025",
    period: "Jun 2025 – May 2026", location: "Tirupati, AP",
    bullets: [
      "Design and develop a CubeSat prototype with a modular 1U architecture.",
      "Implement and validate onboard subsystems: RP2040-based OBC, power management, LoRaWAN modules.",
      "Integrate multi-sensor arrays with a ground station interface for real-time telemetry.",
    ]
  },
  {
    id: "exp-4", orgShort: "CES, MVGR", orgFull: "Center For Embedded Systems, MVGR",
    role: "Student Member", year: "2024",
    period: "Jul 2024 – May 2026", location: "Vizianagaram, AP",
    bullets: [
      "Designed PID-based control systems and wireless sensor networks using STM32 and Arduino.",
      "Built functional embedded prototypes for robotics and industrial automation applications.",
    ],
    skills: "PID Control, STM32, Arduino"
  },
  {
    id: "exp-5", orgShort: "Daloft Aerospace", orgFull: "Daloft Aerospace Pvt. Ltd.",
    role: "Intern", year: "2025",
    period: "Aug 2025 – Nov 2025", location: "Chennai / Remote",
    bullets: ["Working on autonomous drone systems using ROS 2, PX4, and ArduPilot for real-time simulation and control."]
  },
  {
    id: "exp-6", orgShort: "CS³ Lab", orgFull: "CS³: Cloud & Smart System Services Lab",
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
    id: "exp-7", orgShort: "UnlockDiscounts", orgFull: "UnlockDiscounts",
    role: "Research Intern", year: "2025",
    period: "May 2025 – Aug 2025", location: "Bengaluru / Remote",
    bullets: ["Designed and developed research posters and technical presentations to visually communicate project findings."]
  },
  {
    id: "exp-8", orgShort: "NITK", orgFull: "National Institute of Technology Karnataka",
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
    id: "exp-9", orgShort: "Indux Solar", orgFull: "Indux Solar",
    role: "AI Intern", year: "2025",
    period: "May 2025 – Jun 2025", location: "Remote",
    bullets: ["Applied machine learning models to solar data and optimized edge-intelligence frameworks."]
  },
  {
    id: "exp-10", orgShort: "CCSR", orgFull: "Center for Cyber Security Studies & Research",
    role: "Intern", year: "2024",
    period: "Sep 2024 – Dec 2024", location: "Remote",
    bullets: [
      "Assisted in advanced research on emerging cyber threats and zero-day exploit detection.",
      "Contributed to educational content to bolster organizational security awareness.",
    ]
  },
  {
    id: "exp-11", orgShort: "ShadowFox", orgFull: "ShadowFox",
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
    id: "exp-12", orgShort: "SwechaAP", orgFull: "SwechaAP",
    role: "Member", year: "2023",
    period: "Oct 2023 – Present", location: "Vijayawada, AP",
    bullets: [
      "Contributed to Voice AI Telugu and OpenStreetMap, supporting open-source development.",
      "Promoted open-source culture through technical community projects and collaborative development.",
    ]
  }
];

const accentColors = [
  "#EF4444", // McQueen Red
  "#3B82F6", // The King Blue
  "#22C55E", // Chick Hicks Green
  "#F59E0B", // Cruz Ramirez Yellow/Orange
  "#6366F1", // Jackson Storm Neon Blue
  "#1E3A8A", // Doc Hudson Navy
  "#0EA5E9", // Dinoco Light Blue
  "#EF4444", 
  "#3B82F6", 
  "#22C55E", 
  "#F59E0B"
];

export function Experience() {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const featured = items[featuredIdx];
  const featuredColor = accentColors[featuredIdx];
  const sideItems = items.filter((_, i) => i !== featuredIdx);

  return (
    <section id="experience" className="relative py-24 bg-white border-b-[8px] border-yellow-400 overflow-hidden">

      <div className="mx-auto max-w-[1300px] px-4 md:px-8 relative z-10">

        {/* ── RACING HEADER ── */}
        <Reveal>
          <div className="mb-6 transform -skew-x-6">
            {/* Top rule */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 h-[6px] bg-black" />
              <div className="h-[6px] w-12 bg-red-600" />
              <div className="flex-1 h-[6px] bg-black" />
            </div>

            {/* Header row */}
            <div className="flex items-end justify-between mb-2">
              <div className="flex items-end gap-6">
                <h2 className="font-display font-black uppercase tracking-tighter text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] text-black drop-shadow-[4px_4px_0_#ffd700]">
                  WORK<br/>EXPERIENCE
                </h2>
              </div>
              <div className="text-right hidden md:block border-l-[4px] border-red-600 pl-4 bg-zinc-100 p-2 shadow-[4px_4px_0_#000]">
                <p className="font-mono text-[0.6rem] font-black tracking-widest uppercase text-black">
                  VOL. IV, NO. {items.length} &nbsp;·&nbsp; WORK EDITION
                </p>
                <p className="font-mono text-[0.6rem] font-black tracking-widest uppercase text-black">
                  HARDWARE · ROBOTICS · SYSTEMS
                </p>
                <p className="font-mono text-[0.6rem] font-black tracking-widest uppercase text-red-600 mt-1">
                  EST. 2023 &nbsp;·&nbsp; ALL ENTRIES VERIFIED
                </p>
              </div>
            </div>

            {/* Bottom double rule */}
            <div className="h-[4px] bg-yellow-400 mb-0.5" />
            <div className="h-[8px] bg-black mb-4" />
          </div>
        </Reveal>

        {/* ── MOBILE UNIQUE DESIGN (GIANT TYPOGRAPHY WATERMARK) ── */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6 lg:hidden mt-8 px-2 pb-8">
            {items.map((it, i) => {
              const c = accentColors[i % accentColors.length];
              return (
                <div key={it.id} className="relative bg-white border-[3px] border-black shadow-[6px_6px_0_#000] p-6 transform -skew-x-6">
                  
                  {/* Left Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: c }} />

                  {/* Giant Year Watermark */}
                  <span className="absolute -bottom-2 -right-4 font-display text-[7rem] font-black leading-none text-zinc-100 select-none pointer-events-none z-0 transform skew-x-6">
                    {it.year}
                  </span>

                  <div className="relative z-10 transform skew-x-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-600 bg-zinc-100 px-2 border-2 border-black">
                        {it.period}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-[9px] font-black uppercase tracking-widest text-zinc-500 bg-zinc-100 px-2 border-2 border-black">
                        <MapPin size={10} className="text-red-600" /> {it.location}
                      </span>
                    </div>

                    <h3 className="font-display text-[1.8rem] font-black uppercase tracking-tighter text-black leading-[1.1] mb-1">
                      {it.orgShort}
                    </h3>
                    <p className="font-sans text-[13px] font-black uppercase tracking-widest mb-4" style={{ color: c }}>
                      {it.role}
                    </p>

                    {it.bullets && (
                      <div className="space-y-2 mb-5 border-l-4 border-dashed pl-3 border-zinc-300">
                        {it.bullets.map((b, idx) => (
                          <p key={idx} className="font-sans text-[12px] font-bold leading-relaxed text-zinc-700 flex items-start gap-2">
                            <span className="mt-[0.35rem] w-2 h-2 shrink-0 border border-black" style={{ backgroundColor: c }} />
                            {b}
                          </p>
                        ))}
                      </div>
                    )}

                    {it.skills && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {it.skills.split(",").map((s, si) => (
                          <span key={si} className="font-mono text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-yellow-400 text-black border-2 border-black">
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

        {/* ── DESKTOP RACING GRID ── */}
        <Reveal delay={0.1}>
          <div className="hidden lg:grid grid-cols-[1fr_320px] gap-0 border-[4px] border-black shadow-[12px_12px_0_#000] bg-zinc-50 transform -skew-x-6">

            {/* LEFT — FEATURED STORY */}
            <div className="border-r-[4px] border-b-0 border-black relative overflow-hidden bg-white">

              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredIdx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.22 }}
                  className="h-full flex flex-col transform skew-x-6"
                >
                  {/* Feature colored header bar */}
                  <div className="h-3 w-full shrink-0 border-b-[4px] border-black" style={{ backgroundColor: featuredColor }} />

                  {/* HEADLINE section */}
                  <div className="p-6 md:p-8 border-b-[4px] border-dashed border-black bg-zinc-50">

                    {/* Kicker label and Nav */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="font-mono text-[0.62rem] font-black tracking-[0.25em] uppercase px-3 py-1 text-white border-[2px] border-black shadow-[3px_3px_0_#000]"
                          style={{ backgroundColor: featuredColor }}
                        >
                          LEAD DRIVER
                        </span>
                        <span className="font-mono text-[0.62rem] font-black text-black tracking-widest uppercase bg-yellow-400 px-2 py-1 border-[2px] border-black">
                          {featured.year}
                        </span>
                      </div>
                      
                      {/* Navigation Buttons (Desktop) */}
                      <div className="hidden md:flex items-center gap-2">
                        <button 
                          onClick={() => setFeaturedIdx(prev => prev > 0 ? prev - 1 : items.length - 1)}
                          className="w-8 h-8 flex items-center justify-center border-[3px] border-black text-black bg-white hover:bg-yellow-400 transition-colors shadow-[2px_2px_0_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                          aria-label="Previous Experience"
                        >
                          <ChevronLeft size={16} strokeWidth={4} />
                        </button>
                        <button 
                          onClick={() => setFeaturedIdx(prev => prev < items.length - 1 ? prev + 1 : 0)}
                          className="w-8 h-8 flex items-center justify-center border-[3px] border-black text-black bg-white hover:bg-yellow-400 transition-colors shadow-[2px_2px_0_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                          aria-label="Next Experience"
                        >
                          <ChevronRight size={16} strokeWidth={4} />
                        </button>
                      </div>
                    </div>

                    {/* Headline org */}
                    <h3
                      className="font-display font-black uppercase tracking-tighter leading-[0.88] mb-3 text-black drop-shadow-[2px_2px_0_#ffd700]"
                      style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                    >
                      {featured.orgFull}
                    </h3>

                    {/* Deck (sub-headline) */}
                    <p className="font-display font-black uppercase tracking-widest text-[1rem] mb-4" style={{ color: featuredColor === '#18181B' ? '#EF4444' : featuredColor }}>
                      {featured.role}
                    </p>

                    {/* Byline */}
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-black bg-black text-white px-3 py-1.5 shadow-[2px_2px_0_#ffd700]">
                        <Calendar size={12} className="text-yellow-400" />{featured.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-black bg-white text-black border-[3px] border-black px-3 py-1.5 shadow-[2px_2px_0_#ff0000]">
                        <MapPin size={12} className="text-red-600" />{featured.location}
                      </span>
                    </div>
                  </div>

                  {/* BODY COPY */}
                  <div className="p-6 md:p-8 flex-1 grid md:grid-cols-[1fr_auto] gap-8 bg-white">

                    {/* Article body columns */}
                    <div>
                      {/* Drop cap style first bullet */}
                      {featured.bullets && featured.bullets.length > 0 && (
                        <div className="mb-4">
                          {featured.bullets.map((b, i) => (
                            <p key={i} className="font-mono text-[0.84rem] text-zinc-800 font-bold leading-[1.85] mb-3 flex gap-3 items-start bg-zinc-50 p-2 border-l-[4px] border-black">
                              <span className="mt-[0.5em] w-3 h-3 shrink-0 border-[2px] border-black bg-yellow-400" />
                              {b}
                            </p>
                          ))}
                        </div>
                      )}

                      {featured.note && (
                        <p className="font-mono text-[0.72rem] font-black uppercase border-l-4 pl-3 mt-4 bg-yellow-400 text-black border-black p-2 shadow-[2px_2px_0_#ff0000]">
                          {featured.note}
                        </p>
                      )}
                    </div>

                    {/* Sidebar: skill tags */}
                    {featured.skills && (
                      <div className="shrink-0 border-l-[4px] border-dashed pl-6 border-zinc-300">
                        <p className="font-mono text-[0.65rem] font-black tracking-[0.25em] uppercase mb-3 text-red-600">PIT STOP SPECS</p>
                        <div className="flex flex-col gap-2">
                          {featured.skills.split(",").map((s, si) => (
                            <span
                              key={si}
                              className="font-mono text-[0.65rem] font-black uppercase tracking-widest px-2.5 py-1.5 border-[3px] text-center bg-black text-white shadow-[2px_2px_0_#ffd700]"
                              style={{ borderColor: "black" }}
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
            <div className="bg-zinc-100 flex flex-col">

              {/* Column header */}
              <div className="px-5 py-4 border-b-[4px] border-black flex items-center gap-2 bg-yellow-400">
                <div className="w-3 h-3 bg-red-600 border-[2px] border-black" />
                <span className="font-mono text-[0.65rem] font-black tracking-[0.2em] uppercase text-black">
                  ALL LAPS ({items.length})
                </span>
              </div>

              {/* Brief items list */}
              <div className="flex-1 overflow-y-auto max-h-[600px] divide-y-[4px] divide-black">
                {items.map((it, i) => {
                  const c = accentColors[i];
                  const isActive = i === featuredIdx;
                  return (
                    <button
                      key={it.id}
                      onClick={() => setFeaturedIdx(i)}
                      className={`w-full text-left px-5 py-4 group transition-colors duration-150 flex gap-3 items-start transform skew-x-6 ${
                        isActive
                          ? "bg-black text-white"
                          : "hover:bg-yellow-400 text-black"
                      }`}
                    >
                      {/* Accent bar */}
                      <div
                        className="shrink-0 w-2 self-stretch mt-0.5 border-[2px] border-black"
                        style={{ backgroundColor: c }}
                      />

                      <div className="flex-1 min-w-0">
                        {/* Year + active indicator */}
                        <div className="flex items-center justify-between mb-1">
                          <span
                            className="font-mono text-[0.57rem] font-black tracking-widest uppercase"
                            style={{ color: isActive ? "#EAB308" : "var(--color-industrial-gray)" }}
                          >
                            [{it.year}]
                          </span>
                          {isActive && (
                            <span className="font-mono text-[0.52rem] font-black uppercase tracking-widest text-red-600 bg-white px-1 border border-black">
                              RACING
                            </span>
                          )}
                        </div>

                        <p
                          className="font-display font-black uppercase tracking-tight text-[0.82rem] leading-tight mb-0.5"
                          style={{ color: isActive ? "#fff" : "#000" }}
                        >
                          {it.orgShort}
                        </p>

                        <p
                          className="font-mono text-[0.6rem] font-bold uppercase tracking-wider leading-tight"
                          style={{ color: isActive ? "#a1a1aa" : "#52525b" }}
                        >
                          {it.role}
                        </p>
                      </div>

                      <ChevronRight
                        size={16}
                        strokeWidth={4}
                        className="shrink-0 mt-1 transition-transform duration-150 group-hover:translate-x-1"
                        style={{ color: isActive ? "#EAB308" : "#000", opacity: isActive ? 1 : 0.4 }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Column footer */}
              <div className="px-5 py-3 border-t-[4px] border-black mt-auto bg-black">
                <p className="font-mono text-[0.55rem] font-black tracking-widest uppercase text-white text-center">
                  SELECT ANY LAP TO REVIEW
                </p>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Bottom rule */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex items-center gap-2 transform -skew-x-6">
            <div className="flex-1 h-[4px] bg-black" />
            <span className="font-mono text-[0.65rem] font-black tracking-[0.3em] uppercase text-red-600 bg-zinc-100 px-3 border-[2px] border-black">FINISH LINE</span>
            <div className="flex-1 h-[4px] bg-black" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
