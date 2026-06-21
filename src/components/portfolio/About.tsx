import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const meta = [
  ["Credentials", "ECE Graduate"],
  ["Based", "Andhra Pradesh, IN"],
  ["Focus", "Robotics / IoT / Autonomy"],
  ["Seeking", "Full-time Roles & Internships"],
];

const interests = [
  "IoT & Embedded Systems",
  "Robotics & Autonomous Navigation",
  "ROS 2, PX4 & Drone Tech",
  "AI/ML Applications",
  "Physical AI",
  "Space Tech & CubeSats",
];

const roles = [
  "Embedded Systems Engineer",
  "Robotics & Autonomy",
  "Firmware Developer",
  "IoT Systems Architect",
];

export function About() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative py-24 border-b-4 border-mech bg-[var(--color-industrial-dark)]">
      
      {/* Blueprint Overlay */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="inline-flex items-center font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[#0d0d0d] text-[var(--color-industrial-green)] px-4 py-1 border border-[var(--color-industrial-green)] shadow-[0_0_12px_rgba(0,255,65,0.2),4px_4px_0_var(--color-industrial-green)] mb-12 relative">
            <span className="mr-2 text-[var(--color-industrial-green)] opacity-70">[&gt;</span>
            ABOUT
            <span className="ml-2 text-[var(--color-industrial-green)] opacity-70">]</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 font-mono text-[1.05rem] leading-[1.85] text-[var(--color-industrial-white)]">
            <Reveal>
              <p className="mb-6">
                <span className="bg-[#0d0d0d] text-[var(--color-industrial-green)] font-mono font-bold px-3 py-1 border border-[var(--color-industrial-green)] border-l-4 shadow-[0_0_10px_rgba(0,255,65,0.18)] inline-block mb-4 leading-relaxed">
                  &gt; I build systems that think quietly.
                </span>
                <br />
                Robotics, aerospace platforms and embedded intelligence designed with the same restraint as fine instruments.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-6 text-gray-300">
                I am an Electronics and Communication Engineering graduate from MVGR College of Engineering specializing in embedded intelligence, autonomous robotics, and physical AI hardware integration.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mb-6 text-gray-300 border-l-4 border-[var(--color-industrial-blue)] pl-4 bg-[var(--color-industrial-white)]/5 py-3 pr-3">
                During my roles at Daloft Aerospace and the IIT Tirupati Navavishkar I-Hub Foundation, I engineered advanced perception pipelines for UAVs using ROS 2 and PX4, and architected modular 1U CubeSat prototypes focusing on onboard telemetry and power management systems.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="mb-8 text-gray-300 border-l-4 border-[var(--color-industrial-blue)] pl-4 bg-[var(--color-industrial-white)]/5 py-3 pr-3">
                Beyond academic hardware development, I contribute to open-source systems through SwechaAP. I am driven by the engineering of robust, scalable physical intelligence and deterministic control architectures.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 pt-6 border-t-[3px] border-dashed border-[var(--color-industrial-gray)]">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--color-industrial-gray)] font-bold mb-4">// CORE COMPETENCIES & MODULES</h4>
                <div className="flex flex-wrap gap-2.5">
                  {interests.map((interest, i) => (
                    <span key={i} className="bg-[var(--color-industrial-white)] text-[var(--color-industrial-dark)] border border-mech font-mono text-xs font-bold px-3 py-1.5 transition-colors hover:bg-[var(--color-industrial-green)] hover:text-[var(--color-industrial-dark)] cursor-default shadow-mech-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative mt-8 lg:mt-0 pt-4">
                <div className="absolute top-0 left-8 bg-[#0d0d0d] text-[var(--color-industrial-cyan)] font-mono text-[0.7rem] font-bold px-3 py-1 border border-[var(--color-industrial-cyan)] shadow-[0_0_8px_rgba(0,229,255,0.25)] tracking-widest z-10">
                  &gt; ID_CARD.EXE
                </div>
                
                <div className="border-4 border-mech shadow-mech-lg bg-[var(--color-industrial-white)] p-8 clip-mech">
                  <h3 className="text-2xl font-black uppercase mb-1 font-display mt-2 text-[var(--color-industrial-dark)]">MOKSHAGNA ANURAG KANKATI</h3>
                  
                  <div className="h-6 relative overflow-hidden mb-1 w-full flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={roleIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-mono text-sm text-[var(--color-industrial-blue)] font-bold absolute"
                      >
                        {roles[roleIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  
                <p className="font-mono text-xs text-[var(--color-industrial-gray)] font-bold mb-6">// MVGR College of Engineering</p>

                <hr className="border-none border-t-2 border-dashed border-[var(--color-industrial-gray)] my-4" />

                <div className="font-mono text-sm leading-loose space-y-3">
                  {meta.map(([k, v]) => (
                    <div key={k} className="flex flex-col sm:flex-row sm:justify-between border-b border-black/10 pb-1">
                      <span className="font-bold text-gray-500 uppercase text-xs sm:mt-1">{k}</span>
                      <span className="font-bold text-[var(--color-industrial-dark)] text-right">{v}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold border-2 border-[var(--color-industrial-dark)] bg-[var(--color-industrial-white)] text-[var(--color-industrial-dark)] shadow-mech-sm transition-all duration-200 hover:bg-[var(--color-industrial-dark)] hover:text-[var(--color-industrial-white)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none clip-mech-alt">
                    CONTACT ME
                  </a>
                  <a href="#work" className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold border-2 border-[var(--color-industrial-dark)] bg-[var(--color-industrial-yellow)] text-[var(--color-industrial-dark)] shadow-mech-sm transition-all duration-200 hover:bg-[var(--color-industrial-blue)] hover:text-[var(--color-industrial-white)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none clip-mech">
                    VIEW WORK
                  </a>
                </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
