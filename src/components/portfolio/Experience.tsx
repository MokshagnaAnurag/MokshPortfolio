import React, { useState, useCallback } from "react";
import { Reveal } from "./Reveal";
import { Cpu, Plus, Minus, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  id: string;
  org: string;
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
    id: "exp-1",
    org: "Spaceborn",
    role: "Robotics & Simulation Intern",
    year: "2026",
    period: "May 2026 – Present",
    location: "Remote",
    bullets: [
      "Working on autonomous drone and robotic systems design, physics-based simulations, and control optimization.",
    ]
  },
  {
    id: "exp-2",
    org: "IIT Tirupati Navavishkar I-Hub Foundation",
    role: "Project Intern",
    year: "2025",
    period: "Jun 2025 – May 2026",
    location: "Tirupati, AP",
    bullets: [
      "Design and develop a CubeSat prototype with a modular 1U architecture and system integration.",
      "Implement and validate onboard subsystems including an RP2040-based OBC, power management (battery shield), and LoRaWAN communication modules.",
      "Integrate multi-sensor arrays (UV, IMU, gas, pressure, humidity, temperature) with a ground station interface for real-time telemetry and control.",
    ]
  },
  {
    id: "exp-3",
    org: "Center For Embedded Systems, MVGR",
    role: "Student Member",
    year: "2024",
    period: "Jul 2024 – May 2026",
    location: "Vizianagaram, AP",
    bullets: [
      "Designed PID-based control systems and wireless sensor networks using STM32 and Arduino, integrating real-time sensor data.",
      "Built functional embedded prototypes for robotics and industrial automation applications.",
    ],
    skills: "PID Control, STM32, Arduino"
  },
  {
    id: "exp-4",
    org: "Daloft Aerospace Private Limited",
    role: "Intern",
    year: "2025",
    period: "Aug 2025 – Nov 2025",
    location: "Chennai / Remote",
    bullets: [
      "Working on autonomous drone systems using ROS 2, PX4, and ArduPilot for real-time simulation and control.",
    ]
  },
  {
    id: "exp-5",
    org: "CS³: Cloud & Smart System Services Lab",
    role: "Project Intern",
    year: "2025",
    period: "Jul 2025 – Sep 2025",
    location: "Mangaluru / Remote",
    bullets: [
      "Advanced the prototype autonomous vehicle system within an IoV (Internet of Vehicles) framework as an extension of the LEAD project.",
      "Enhanced intelligent lane detection and obstacle handling capabilities through onboard learning algorithms.",
      "Implemented real-time trajectory mapping using sensor fusion (RP LIDAR, camera) and localization techniques in ROS 2.",
      "Integrated V2I communication for dynamic route updates and cooperative driving scenarios.",
      "Worked with NAV2, SLAM Toolbox, and custom planning strategies to ensure robust navigation in diverse environments.",
    ],
    note: "Under the guidance of Dr. Sourav Kanti Addya and Mr. Rajeev K K."
  },
  {
    id: "exp-6",
    org: "UnlockDiscounts",
    role: "Academic Research Intern",
    year: "2025",
    period: "May 2025 – Aug 2025",
    location: "Bengaluru / Remote",
    bullets: [
      "Designed and developed research posters and technical presentations to visually communicate project findings.",
    ]
  },
  {
    id: "exp-7",
    org: "National Institute of Technology Karnataka (NITK)",
    role: "Summer Intern",
    year: "2025",
    period: "May 2025 – Jul 2025",
    location: "Mangaluru, KA",
    bullets: [
      "Contributed to the development of LEAD: A Prototype for Learning-Enabled Autonomous Driving, focusing on intelligent lane detection and obstacle handling.",
      "Implemented and tested autonomous navigation algorithms in ROS 2, enabling real-time trajectory planning and vehicle-to-infrastructure (V2I) communication.",
      "Assisted in scholarly research, integrating simulation environments and sensor data for performance evaluation.",
    ],
    note: "Worked under the guidance of Dr. Sourav Kanti Addya and Mr. Rajeev K K.",
    skills: "ROS 2, Autonomous Systems, Sensor Fusion"
  },
  {
    id: "exp-8",
    org: "Indux Solar",
    role: "AI Intern",
    year: "2025",
    period: "May 2025 – Jun 2025",
    location: "Remote",
    bullets: [
      "Applied machine learning models to solar data and optimized edge-intelligence frameworks.",
    ]
  },
  {
    id: "exp-9",
    org: "Center for Cyber Security Studies & Research",
    role: "Intern",
    year: "2024",
    period: "Sep 2024 – Dec 2024",
    location: "Remote",
    bullets: [
      "Assisted in advanced research on emerging cyber threats and zero-day exploit detection.",
      "Contributed to educational content and training materials aimed at bolstering organizational security awareness.",
    ]
  },
  {
    id: "exp-10",
    org: "ShadowFox",
    role: "Cybersecurity Intern",
    year: "2024",
    period: "Sep 2024 – Oct 2024",
    location: "Remote",
    bullets: [
      "Conducted penetration testing using Metasploit, Nmap, Gobuster, Wireshark, Burp Suite, and VeraCrypt.",
      "Built custom exploits, improving penetration testing coverage by 15%, and contributed to a 30% reduction in client attack surface.",
      "Produced detailed vulnerability assessment reports that informed remediation strategies.",
    ],
    skills: "Penetration Testing, Metasploit, Nmap, Wireshark"
  },
  {
    id: "exp-11",
    org: "SwechaAP",
    role: "Member",
    year: "2023",
    period: "Oct 2023 – Present",
    location: "Vijayawada, AP",
    bullets: [
      "Contributed to Voice AI Telugu and OpenStreetMap, supporting open-source development in regional language and mapping tech.",
      "Promoted open-source culture through technical community projects and collaborative development.",
    ]
  }
];

const colors = ["var(--color-industrial-orange)", "var(--color-industrial-blue)", "var(--color-industrial-green)", "var(--color-industrial-yellow)"];

export function Experience() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const allExpanded = Object.keys(expandedItems).length === items.length && Object.values(expandedItems).every(Boolean);

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedItems({});
    } else {
      const all: Record<string, boolean> = {};
      items.forEach(it => { all[it.id] = true; });
      setExpandedItems(all);
    }
  };

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="experience" className="relative py-24 bg-[var(--color-industrial-bg)] border-b-4 border-mech">
      
      {/* PCB Trace decorative background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(var(--color-industrial-dark) 2px, transparent 2px)`,
             backgroundSize: `30px 30px`
           }}>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[var(--color-industrial-dark)] text-[var(--color-industrial-orange)] px-4 py-1 border border-[var(--color-industrial-orange)] shadow-mech-orange mb-8 relative">
                <Cpu size={14} className="mr-2" />
                TRACE_LOG
              </div>
              
              <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-black uppercase tracking-tighter leading-[0.9]">
                Work at the <br/>
                <span className="text-[var(--color-industrial-orange)] text-stroke-mech-2">edge</span> of hardware.
              </h2>
            </div>
            
            <button 
              onClick={toggleAll}
              className="flex items-center gap-2 bg-[var(--color-industrial-dark)] text-[var(--color-industrial-white)] px-4 py-2 font-mono text-[0.7rem] font-bold uppercase tracking-widest border border-transparent shadow-[4px_4px_0_rgba(10,10,10,0.5)] hover:bg-[var(--color-industrial-blue)] hover:-translate-y-1 hover:shadow-mech-sm transition-all clip-mech-alt w-fit"
            >
              {allExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              {allExpanded ? "COLLAPSE ALL" : "EXPAND ALL"}
            </button>
          </div>
        </Reveal>

        <div className="relative pl-10 md:pl-16 max-w-4xl mx-auto">
          {/* Main PCB Trunk Line */}
          <div className="absolute left-[1.15rem] md:left-[2.15rem] top-0 bottom-0 w-2 bg-[var(--color-industrial-dark)]" />

          {items.map((it, i) => {
            const color = colors[i % colors.length];
            const isExpanded = !!expandedItems[it.id];
            
            return (
              <Reveal key={it.id} delay={0.1}>
                <div className="relative pb-16 last:pb-0 group">
                  {/* PCB Node / Joint */}
                  <div 
                    className="absolute -left-[3.4rem] md:-left-[4.4rem] top-6 w-8 h-8 rounded-full border-4 border-mech bg-[var(--color-industrial-white)] z-10 flex items-center justify-center transition-transform group-hover:scale-125"
                    style={{ borderColor: "var(--color-industrial-dark)" }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                  </div>
                  
                  {/* PCB Horizontal Routing Trace */}
                  <div className="absolute -left-[1.85rem] md:-left-[2.85rem] top-[2rem] w-8 h-2 bg-[var(--color-industrial-dark)]"></div>

                  {/* Card */}
                  <div className="bg-[var(--color-industrial-white)] border-mech p-6 md:p-8 shadow-mech-md transition-all duration-200 hover:-translate-y-1 relative clip-mech">
                    
                    {/* Top warning stripe bar */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-warning-stripes opacity-20"></div>

                    {/* Expand/Collapse Toggle */}
                    <button 
                      onClick={() => toggleItem(it.id)}
                      className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-[var(--color-industrial-bg)] border border-[var(--color-industrial-dark)] text-[var(--color-industrial-dark)] hover:bg-[var(--color-industrial-yellow)] transition-colors shadow-[2px_2px_0_rgba(10,10,10,1)]"
                    >
                      {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                    </button>

                    <div className="mt-2 flex items-center gap-3 mb-4 flex-wrap pr-12">
                      <span className="inline-block bg-[var(--color-industrial-dark)] text-[var(--color-industrial-white)] font-mono text-[0.74rem] font-bold px-3 py-1.5 border border-transparent">
                        {it.period}
                      </span>
                      <span className="font-mono text-xs text-[var(--color-industrial-gray)] font-bold tracking-widest hidden sm:inline-block">
                        // LOC: {it.location}
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-[1.7rem] font-black uppercase mb-1 leading-tight text-[var(--color-industrial-dark)] pr-12">
                      {it.role}
                    </h3>
                    
                    <div className="font-mono text-sm font-bold mb-4 cursor-pointer" onClick={() => toggleItem(it.id)}>
                      <span 
                        className="text-stroke-mech uppercase"
                        style={{ color: color }}
                      >
                        {it.org}
                      </span> 
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2">
                            <ul className="font-mono text-[0.86rem] text-gray-800 leading-[1.8] space-y-2">
                              {it.bullets?.map((b, idx) => (
                                <li key={idx} className="relative pl-5">
                                  <span className="absolute left-0 top-[0.6em] w-2 h-2 bg-[var(--color-industrial-dark)] clip-mech" />
                                  {b}
                                </li>
                              ))}
                            </ul>

                            {it.skills && (
                              <div className="mt-6 pt-4 border-t-2 border-dashed border-[var(--color-industrial-gray)] flex flex-wrap gap-2">
                                <span className="bg-[var(--color-industrial-gray)] text-[var(--color-industrial-dark)] font-mono text-[0.68rem] font-bold px-2.5 py-1 uppercase">
                                  SYS_REQ: {it.skills}
                                </span>
                              </div>
                            )}
                            {it.note && (
                              <div className="mt-4 font-mono text-xs text-gray-500 italic border-l-4 border-[var(--color-industrial-gray)] pl-3">
                                {it.note}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

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
