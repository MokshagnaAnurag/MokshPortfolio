import React from "react";
import { Reveal } from "./Reveal";

const items = [
  {
    institution: "MVGR College of Engineering",
    degree: "B.Tech — Electronics & Communication",
    period: "Nov 2022 – May 2026",
    location: "Andhra Pradesh, India",
    courses: [
      "Embedded Systems & RTOS",
      "Digital Image Processing",
      "Electronic Design & Circuits",
      "Artificial Intelligence & IT",
      "Machine Learning",
      "Control Systems",
    ],
    hoverClass: "hover:border-[var(--color-industrial-orange)] hover:-translate-y-2",
    color: "var(--color-industrial-orange)",
    icon: "MAIN_BOARD"
  },
  {
    institution: "Apex Junior College",
    degree: "Class 12 — PCM",
    period: "Jun 2020 – May 2022",
    location: "India",
    hoverClass: "hover:border-[var(--color-industrial-green)] hover:-translate-y-2",
    color: "var(--color-industrial-green)",
    icon: "LOGIC_GATE"
  },
  {
    institution: "Fort City School",
    degree: "Secondary School Education",
    period: "Jun 2014 – Mar 2020",
    location: "India",
    grade: "Grade: A",
    hoverClass: "hover:border-[var(--color-industrial-cyan)] hover:-translate-y-2",
    color: "var(--color-industrial-cyan)",
    icon: "BASE_OS"
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32 bg-[var(--color-industrial-dark)] border-b-4 border-mech overflow-hidden">
      
      {/* Blueprint Dark Overlay */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="inline-flex items-center font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[var(--color-industrial-bg)] text-[var(--color-industrial-dark)] px-4 py-1 border border-transparent shadow-[0_0_12px_rgba(255,255,255,0.2)] mb-12 relative">
            <span className="mr-2 opacity-70">[&gt;</span>
            ACADEMIC PROFILE
            <span className="ml-2 opacity-70">]</span>
          </div>
          <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-black uppercase tracking-tighter mb-16 leading-[0.9] text-[var(--color-industrial-white)]">
            Academic <br/>
            <span className="text-[var(--color-industrial-blue)] text-stroke-mech-white">Foundations</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 mt-16">
            {items.map((it, i) => (
              <div 
                key={it.institution}
                className={`group flex-1 bg-[var(--color-industrial-white)] border-4 border-mech shadow-[8px_8px_0_rgba(10,10,10,1)] p-8 md:p-10 transition-all duration-300 ${it.hoverClass} relative flex flex-col clip-mech`}
              >
                {/* Decorative header */}
                <div className="absolute top-0 left-0 w-full h-2 bg-warning-stripes opacity-30"></div>
                
                <div className="flex justify-between items-start mb-6 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-none shadow-sm" style={{ backgroundColor: it.color }}></div>
                    <span className="font-mono text-[0.65rem] font-bold text-[var(--color-industrial-gray)] tracking-widest uppercase">
                      {it.period}
                    </span>
                  </div>
                  <div className="font-mono text-[0.6rem] font-bold px-2 py-0.5 border border-dashed border-[var(--color-industrial-dark)] text-[var(--color-industrial-dark)] bg-gray-100 uppercase tracking-widest">
                    {it.icon}
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-black uppercase mb-4 leading-tight text-[var(--color-industrial-dark)] pr-8">
                  {it.degree}
                </h3>
                
                <div className="font-mono text-sm leading-[1.7] text-gray-800 border-l-4 pl-4 mb-6 flex-1" style={{ borderColor: it.color }}>
                  <strong className="text-[var(--color-industrial-dark)] text-base block mb-1">{it.institution}</strong>
                  <span className="opacity-70 text-xs font-bold tracking-wider">// LOC: {it.location}</span>
                </div>

                {it.courses && (
                  <div className="mt-auto pt-6 border-t-2 border-dashed border-gray-400">
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest block mb-3 text-gray-500">
                      // Core Subsystems
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {it.courses.map((course, idx) => (
                        <span key={idx} className="font-mono text-[0.6rem] uppercase font-bold px-2 py-1 bg-[var(--color-industrial-dark)] text-[var(--color-industrial-white)] group-hover:bg-[var(--color-industrial-blue)] group-hover:text-[var(--color-industrial-white)] transition-colors shadow-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {it.grade && (
                  <div className="mt-auto pt-6 border-t-2 border-dashed border-gray-400">
                    <span className="inline-block px-3 py-1.5 bg-[var(--color-industrial-bg)] border border-[var(--color-industrial-dark)] font-mono text-[0.7rem] font-bold uppercase text-[var(--color-industrial-dark)] shadow-[2px_2px_0_rgba(10,10,10,1)]">
                      {`OUTPUT: ${it.grade}`}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
