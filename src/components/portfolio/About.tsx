import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import profileImgBase from "../../assets/profile-sketch.jpg";
import profileImgHover from "../../assets/profile-sketch-hover-v3.png";
import { NewsTicker } from "./NewsTicker";

const meta = [
  ["Education", "B.Tech - Electronics & Communication Engineering"],
  ["Based", "Andhra Pradesh, India"],
  ["Focus", "Embedded Systems • Robotics • UAVs"],
  ["Seeking", "Full-Time Robotics & Embedded Roles"],
];

const interests = [
  "Embedded Systems",
  "Autonomous Mobile Robots",
  "ROS 2 & Navigation",
  "UAV Systems (PX4 & ArduPilot)",
  "Computer Vision",
  "Space Systems & CubeSats",
];

const roles = [
  "Embedded Systems Engineer",
  "Robotics Engineer",
  "Autonomous Systems Engineer",
  "UAV Software Engineer",
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
    <section
      id="about"
      className="relative pt-24 pb-32 border-b-[8px] border-dashed border-yellow-400 bg-zinc-950"
    >
      <div className="absolute inset-0 bg-blueprint-dark opacity-20 pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="inline-flex items-center font-mono text-xs font-black tracking-[0.2em] uppercase bg-yellow-400 text-black px-6 py-2 border-[3px] border-black shadow-[6px_6px_0_#ff0000] mb-12 relative transform -skew-x-12">
            <span className="mr-2 text-red-600">🏁</span>
            ABOUT ME
            <span className="ml-2 text-red-600">🏁</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 font-mono text-[1.05rem] leading-[1.85] text-zinc-100">

            <Reveal>
              <p className="mb-6">
                <span className="bg-red-600 text-white font-mono font-black px-4 py-1 border-[3px] border-black shadow-[4px_4px_0_#ffd700] inline-block mb-4 leading-relaxed transform -skew-x-12">
                  <span className="transform skew-x-12 block text-sm">
                    &gt; Building reliable autonomous systems from hardware to software.
                  </span>
                </span>
                <br />
                I build embedded, robotic, and aerospace systems that combine
                reliable hardware with intelligent software to solve real-world
                engineering problems.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-6 text-zinc-300">
                I am an Electronics and Communication Engineering graduate from
                MVGR College of Engineering with a strong interest in Embedded
                Systems, Robotics, Autonomous Mobile Robots, UAV technologies,
                and Space Systems. My work focuses on building dependable
                robotics platforms using ROS 2, PX4, ArduPilot, and embedded
                hardware.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mb-6 text-zinc-300 border-l-4 border-red-600 pl-4 bg-red-900/10 py-3 pr-3">
                During my internships at <b>Zebu Intelligent Systems</b>,{" "}
                <b>Daloft Aerospace</b>, and{" "}
                <b>IIT Tirupati Navavishkar I-Hub Foundation</b>, I worked on
                UAV flight systems using ROS 2, PX4, and ArduPilot while also
                contributing to CubeSat development through onboard telemetry,
                communication, and power management subsystem design.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mb-8 text-zinc-300 border-l-4 border-yellow-400 pl-4 bg-yellow-900/10 py-3 pr-3">
                I enjoy building autonomous robots, embedded platforms, and
                simulation environments that bridge software with real hardware.
                Alongside robotics, I actively contribute to open-source
                communities through SwechaAP and continuously explore modern
                robotics technologies including Navigation2, SLAM, drone
                autonomy, and intelligent embedded systems.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-12 mb-8 w-full border-[3px] border-black bg-zinc-900 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-[8px_8px_0_0_#ff0000] hover:shadow-[12px_12px_0_0_#ffd700] hover:-translate-y-1 transition-all duration-300 transform -skew-x-3">

                {/* Projects */}
                <div className="flex flex-col items-center md:items-start group w-full md:w-auto transform skew-x-3">
                  <span className="font-display text-5xl md:text-6xl font-black text-white group-hover:text-red-500 transition-colors">
                    15<span className="text-red-500">+</span>
                  </span>
                  <span className="font-mono text-[10px] md:text-xs text-zinc-400 tracking-[0.2em] uppercase mt-2 group-hover:text-white transition-colors">
                    Engineering Projects
                  </span>
                </div>

                <div className="hidden md:block w-[3px] h-16 bg-red-600"></div>
                <div className="md:hidden w-full h-[3px] bg-red-600"></div>

                {/* Articles */}
                <div className="flex flex-col items-center md:items-start group w-full md:w-auto transform skew-x-3">
                  <span className="font-display text-5xl md:text-6xl font-black text-white group-hover:text-yellow-400 transition-colors">
                    4<span className="text-yellow-400">+</span>
                  </span>
                  <span className="font-mono text-[10px] md:text-xs text-zinc-400 tracking-[0.2em] uppercase mt-2 group-hover:text-white transition-colors">
                    Technical Articles
                  </span>
                </div>

                <div className="hidden md:block w-[3px] h-16 bg-yellow-400"></div>
                <div className="md:hidden w-full h-[3px] bg-yellow-400"></div>

                {/* Publications */}
                <div className="flex flex-col items-center md:items-start group w-full md:w-auto transform skew-x-3">
                  <span className="font-display text-5xl md:text-6xl font-black text-white group-hover:text-zinc-100 transition-colors">
                    03
                  </span>
                  <span className="font-mono text-[10px] md:text-xs text-zinc-400 tracking-[0.2em] uppercase mt-2 group-hover:text-white transition-colors">
                    Research Publications
                  </span>
                </div>

              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 pt-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-bold mb-4 flex items-center gap-2">
                  <span className="text-red-600 text-lg">⚙️</span>
                  CORE EXPERTISE
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {interests.map((interest, i) => (
                    <span
                      key={i}
                      className="bg-zinc-100 text-black border-[3px] border-black font-mono text-xs font-bold px-3 py-1.5 transition-colors hover:bg-yellow-400 cursor-default shadow-[3px_3px_0_#ff0000] transform -skew-x-6"
                    >
                      <span className="block transform skew-x-6">{interest}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

          {/* ================= PROFILE CARD ================= */}
          <div className="lg:col-span-5">
            <Reveal delay={0.3}>
              <div
                className="w-full relative group cursor-pointer mt-8 lg:mt-0 pt-4"
                tabIndex={0}
              >
                <div className="absolute top-0 left-6 bg-yellow-400 text-black font-mono text-[0.8rem] font-black px-4 py-1 border-[3px] border-black shadow-[4px_4px_0_#ff0000] tracking-widest z-20 transform -skew-x-12">
                  <span className="block transform skew-x-12">
                    &gt; ENGINEER_PROFILE
                  </span>
                </div>

                <div className="border-[4px] border-black shadow-[12px_12px_0_#ff0000] bg-zinc-100 p-6 md:p-8 relative mt-4">

                  {/* Profile Image */}
                  <motion.div
                    tabIndex={0}
                    className="w-full aspect-square mb-8 border-[4px] border-black shadow-[6px_6px_0_#000] overflow-hidden relative group cursor-crosshair bg-white focus:outline-none focus:ring-4 focus:ring-red-600"
                  >
                    <div className="absolute top-2.5 left-2.5 bg-red-600 text-white font-mono text-[0.75rem] font-black px-3 py-1 border-[2px] border-black z-40 uppercase shadow-[2px_2px_0_#ffd700] transform -skew-x-12">
                      <span className="block transform skew-x-12">
                        AVAILABLE FOR HIRING
                      </span>
                    </div>

                    <img
                      src={profileImgBase}
                      alt="Mokshagna Anurag"
                      className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-125 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                    />

                    <img
                      src={profileImgHover}
                      alt="Mokshagna Anurag"
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-black uppercase mb-1 font-display text-black">
                    MOKSHAGNA ANURAG KANKATI
                  </h3>

                  <div className="h-6 relative overflow-hidden mb-1 w-full flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={roleIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-mono text-sm text-red-600 font-bold absolute"
                      >
                        {roles[roleIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <p className="font-mono text-xs text-zinc-500 font-bold mb-6">
                    B.Tech • Electronics & Communication Engineering
                  </p>

                  <div className="w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIvPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJibGFjayIvPjxwb2x5Z29uIHBvaW50cz0iMTAgMCwgMjAgMCwgMjAgMTAsIDEwIDEwIiBmaWxsPSJ3aGl0ZSIvPjxwb2x5Z29uIHBvaW50cz0iMCAxMCwgMTAgMTAsIDEwIDIwLCAwIDIwIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==')] my-4 border-y border-black"></div>

                  <div className="font-mono text-sm leading-loose space-y-3">
                    {meta.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex flex-col sm:flex-row sm:justify-between border-b-2 border-dashed border-zinc-300 pb-1"
                      >
                        <span className="font-bold text-zinc-500 uppercase text-xs sm:mt-1">
                          {k}
                        </span>
                        <span className="font-bold text-black text-right">
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2 font-mono text-xs font-black uppercase border-[3px] border-black bg-red-600 text-white shadow-[4px_4px_0_#000] transition-all duration-200 hover:bg-yellow-400 hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transform -skew-x-12"
                    >
                      <span className="block transform skew-x-12">CONTACT ME</span>
                    </a>

                    <a
                      href="#work"
                      className="inline-flex items-center gap-2 px-5 py-2 font-mono text-xs font-black uppercase border-[3px] border-black bg-yellow-400 text-black shadow-[4px_4px_0_#000] transition-all duration-200 hover:bg-red-600 hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transform -skew-x-12"
                    >
                      <span className="block transform skew-x-12">VIEW PROJECTS</span>
                    </a>
                  </div>

                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <NewsTicker />
      </div>
    </section>
  );
}
