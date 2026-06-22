import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import profileImgBase from "../../assets/profile-sketch.jpg";
import profileImgHover from "../../assets/profile-sketch-hover-v3.png";

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
      &gt; Building intelligent systems from code to hardware.
    </span>
    <br />
    Passionate about robotics, embedded systems, autonomous platforms, and the technologies that bridge perception, decision-making, and real-world interaction.
  </p>
</Reveal>

<Reveal delay={0.1}>
  <p className="mb-6 text-gray-300">
    I am an Electronics and Communication Engineering graduate from MVGR College of Engineering with interests in robotics, embedded intelligence, autonomous navigation, and physical AI. I enjoy developing systems that integrate sensing, computation, communication, and control to solve real-world engineering challenges.
  </p>
</Reveal>

<Reveal delay={0.15}>
  <p className="mb-6 text-gray-300 border-l-4 border-[var(--color-industrial-blue)] pl-4 bg-[var(--color-industrial-white)]/5 py-3 pr-3">
    Through internships at Daloft Aerospace, NITK Surathkal, and IIT Tirupati Navavishkar I-Hub Foundation, I have worked on autonomous drones, ROS 2-based perception pipelines, Internet of Vehicles research, and modular CubeSat subsystems, gaining hands-on experience in building intelligent and scalable aerospace and robotic platforms.
  </p>
</Reveal>

<Reveal delay={0.2}>
  <p className="mb-8 text-gray-300 border-l-4 border-[var(--color-industrial-blue)] pl-4 bg-[var(--color-industrial-white)]/5 py-3 pr-3">
    Beyond academics, I actively contribute to open-source initiatives through SwechaAP, participate in hackathons and research projects, and continuously explore emerging technologies in autonomous systems, embedded AI, and space robotics.
  </p>
</Reveal>

            <Reveal delay={0.22}>
              <div className="mt-12 mb-8 w-full border border-[var(--color-industrial-gray)]/30 bg-[#050505] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-8 rounded-lg shadow-[8px_8px_0_0_var(--color-industrial-dark)] hover:shadow-[12px_12px_0_0_var(--color-industrial-dark)] hover:-translate-y-1 transition-all duration-300">

                <div className="flex flex-col items-center md:items-start group w-full md:w-auto">
                  <span className="font-display text-5xl md:text-6xl font-black text-white group-hover:text-[var(--color-industrial-cyan)] transition-colors">15<span className="text-[var(--color-industrial-cyan)]">+</span></span>
                  <span className="font-mono text-[10px] md:text-xs text-[var(--color-industrial-gray)] tracking-[0.2em] uppercase mt-2 group-hover:text-white transition-colors">Built Projects</span>
                </div>

                <div className="hidden md:block w-[2px] h-16 bg-[var(--color-industrial-gray)]/30"></div>
                <div className="md:hidden w-full h-[2px] bg-[var(--color-industrial-gray)]/30"></div>

                <div className="flex flex-col items-center md:items-start group w-full md:w-auto">
                  <span className="font-display text-5xl md:text-6xl font-black text-white group-hover:text-[var(--color-industrial-yellow)] transition-colors">4<span className="text-[var(--color-industrial-yellow)]">+</span></span>
                  <span className="font-mono text-[10px] md:text-xs text-[var(--color-industrial-gray)] tracking-[0.2em] uppercase mt-2 group-hover:text-white transition-colors">Tech Blogs</span>
                </div>

                <div className="hidden md:block w-[2px] h-16 bg-[var(--color-industrial-gray)]/30"></div>
                <div className="md:hidden w-full h-[2px] bg-[var(--color-industrial-gray)]/30"></div>

                <div className="flex flex-col items-center md:items-start group w-full md:w-auto">
                  <span className="font-display text-5xl md:text-6xl font-black text-white group-hover:text-[var(--color-industrial-green)] transition-colors">02</span>
                  <span className="font-mono text-[10px] md:text-xs text-[var(--color-industrial-gray)] tracking-[0.2em] uppercase mt-2 group-hover:text-white transition-colors">Publications</span>
                </div>

              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 pt-6">
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

                <div className="border-4 border-mech shadow-mech-lg bg-[var(--color-industrial-white)] p-6 md:p-8 clip-mech">

                  {/* Animated Profile Image */}
                  <motion.div
                    className="w-full aspect-square mb-8 border-[4px] border-[var(--color-industrial-dark)] shadow-[8px_8px_0_0_var(--color-industrial-dark)] overflow-hidden relative group cursor-crosshair bg-white"
                  >
                    {/* Red Tag on Image */}
                    <div className="absolute top-2.5 left-2.5 bg-red-500 text-white font-mono text-[0.72rem] font-bold px-2 py-[3px] border border-[var(--color-industrial-dark)] z-40 uppercase shadow-sm">
                      READY TO WORK
                    </div>

                    {/* Base Black & White Sketch */}
                    <img
                      src={profileImgBase}
                      alt="Mokshagna Anurag Kankati"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Colored Sketch on Hover */}
                    <img
                      src={profileImgHover}
                      alt="Mokshagna Anurag Kankati Colored"
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 z-10"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-black uppercase mb-1 font-display text-[var(--color-industrial-dark)]">MOKSHAGNA ANURAG KANKATI</h3>

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
