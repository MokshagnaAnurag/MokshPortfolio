import React from "react";
import { Reveal } from "./Reveal";
import { Database, Cpu, Terminal } from "lucide-react";

const items = [
  {
    institution: "MVGR College of Engineering",
    degree: "B.Tech — Electronics & Communication",
    period: "Nov 2022 – May 2026",
    location: "Andhra Pradesh, India",
    color: "var(--color-industrial-orange)",
    icon: Cpu,
  },
  {
    institution: "Apex Junior College",
    degree: "Class 12 — PCM",
    period: "Jun 2020 – May 2022",
    location: "Andhra Pradesh, India",
    color: "var(--color-industrial-green)",
    icon: Database,
  },
  {
    institution: "Fort City School",
    degree: "Secondary School Education",
    period: "Jun 2014 – Mar 2020",
    location: "Andhra Pradesh, India",
    color: "var(--color-industrial-yellow)",
    icon: Terminal,
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32 bg-[#020202] border-b border-zinc-900 overflow-hidden">
      
      {/* Dark Tech Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        <Reveal>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-white/50"></div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">SYS.KNOWLEDGE_BASE</span>
              </div>
              <h2 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-black uppercase tracking-tighter leading-[0.85] text-white">
                Academic<br/>
                <span 
                  className="text-transparent" 
                  style={{ WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}
                >
                  Foundations
                </span>
              </h2>
            </div>
            
            <div className="md:w-1/3 text-left md:text-right flex md:justify-end">
              <p className="font-mono text-sm text-zinc-500 leading-[1.8] border-l-2 md:border-l-0 md:border-r-2 border-zinc-800 pl-4 md:pl-0 md:pr-4 max-w-md">
                Structured knowledge acquisition pathways and theoretical frameworks mapped into long-term memory banks.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Streamlined White Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
            <Reveal key={it.institution} delay={i * 0.1}>
              <div className="group relative flex flex-col lg:flex-row bg-white hover:bg-zinc-50 transition-colors duration-500 overflow-hidden rounded-xl border border-zinc-200">
                
                {/* Left vertical border accent on hover */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-2 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-20" 
                  style={{ backgroundColor: it.color }}
                ></div>

                {/* Number & Icon Column */}
                <div className="lg:w-[15%] p-8 flex lg:flex-col items-center justify-between lg:justify-center gap-6 border-b lg:border-b-0 lg:border-r border-zinc-100 transition-colors">
                  <span className="font-display text-5xl md:text-6xl font-black text-zinc-200 group-hover:text-zinc-900 transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <div className="text-zinc-400 group-hover:opacity-100 transition-colors duration-500" style={{ color: it.color }}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Main Content Column */}
                <div className="lg:w-[85%] p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 relative">
                  {/* Subtle radial glow on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${it.color} 0%, transparent 80%)` }}
                  ></div>

                  {/* Degree & Institution */}
                  <div className="flex-1 z-10 group-hover:translate-x-4 transition-transform duration-500 ease-out">
                    <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-black uppercase text-zinc-900 mb-4">
                      {it.degree}
                    </h3>
                    <span className="font-mono text-base md:text-lg text-zinc-600 font-bold">
                      {it.institution}
                    </span>
                  </div>
                  
                  {/* Period & Location */}
                  <div className="md:text-right z-10 flex flex-col gap-2 md:items-end group-hover:-translate-x-2 transition-transform duration-500 delay-75 ease-out">
                    <div className="font-mono text-sm uppercase tracking-widest text-zinc-500 font-bold">
                      {it.period}
                    </div>
                    <div className="font-mono text-xs uppercase text-zinc-400 flex items-center md:justify-end gap-2 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: it.color }}></span>
                      {it.location}
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

