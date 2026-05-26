import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

interface ExperienceItem {
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
    org: "Spaceborn",
    role: "Robotics & Simulation Intern",
    year: "2026",
    period: "May 2026 – Present",
    location: "Remote",
    bullets: [
      "Working on autonomous drone and robotic systems design, physics-based simulations, and control optimization.",
    ],
  },
  {
    org: "IIT Tirupati Navavishkar I-Hub Foundation",
    role: "Project Intern",
    year: "2025 – 2026",
    period: "Jun 2025 – May 2026 · 1 yr",
    location: "Tirupati, AP · Hybrid · Internship",
    bullets: [
      "Design and develop a CubeSat prototype with a modular 1U architecture and system integration.",
      "Implement and validate onboard subsystems including an RP2040-based OBC, power management (battery shield), and LoRaWAN communication modules.",
      "Integrate multi-sensor arrays (UV, IMU, gas, pressure, humidity, temperature) with a ground station interface for real-time telemetry and control.",
    ],
  },
  {
    org: "Center For Embedded Systems, MVGR",
    role: "Student Member",
    year: "2024 – 2026",
    period: "Jul 2024 – May 2026 · 1 yr 11 mos",
    location: "Vizianagaram, AP · On-site",
    bullets: [
      "Designed PID-based control systems and wireless sensor networks using STM32 and Arduino, integrating real-time sensor data.",
      "Built functional embedded prototypes for robotics and industrial automation applications.",
    ],
    skills: "Proportional-Integral-Derivative (PID) and STM32",
  },
  {
    org: "Daloft Aerospace Private Limited",
    role: "Intern",
    year: "2025",
    period: "Aug 2025 – Nov 2025 · 4 mos",
    location: "Chennai, TN · Remote · Internship",
    bullets: [
      "Working on autonomous drone systems using ROS 2, PX4, and ArduPilot for real-time simulation and control.",
    ],
  },
  {
    org: "CS³: Cloud & Smart System Services Lab",
    role: "Project Intern",
    year: "2025",
    period: "Jul 2025 – Sep 2025 · 3 mos",
    location: "Mangaluru, KA · Remote · Internship",
    bullets: [
      "Advanced the prototype autonomous vehicle system within an IoV (Internet of Vehicles) framework as an extension of the LEAD (Learning-Enabled Autonomous Driving) project.",
      "Enhanced intelligent lane detection and obstacle handling capabilities through onboard learning algorithms.",
      "Implemented real-time trajectory mapping using sensor fusion (RP LIDAR, camera) and localization techniques in ROS 2.",
      "Integrated V2I (Vehicle-to-Infrastructure) communication for dynamic route updates and cooperative driving scenarios.",
      "Worked with NAV2, SLAM Toolbox, and custom planning strategies to ensure robust navigation in diverse environments.",
    ],
    note: "Under the guidance of Dr. Sourav Kanti Addya (Supervisor) and Mr. Rajeev K K (PhD Scholar).",
  },
  {
    org: "UnlockDiscounts",
    role: "Academic Research Intern",
    year: "2025",
    period: "May 2025 – Aug 2025 · 4 mos",
    location: "Bengaluru, KA · Remote",
    bullets: [
      "Designed and developed research posters and technical presentations to visually communicate project findings.",
    ],
  },
  {
    org: "National Institute of Technology Karnataka",
    role: "Summer Intern",
    year: "2025",
    period: "May 2025 – Jul 2025 · 3 mos",
    location: "Mangaluru, KA · On-site · Internship",
    bullets: [
      "Contributed to the development of LEAD: A Prototype for Learning-Enabled Autonomous Driving, focusing on intelligent lane detection and obstacle handling within the Internet of Vehicles (IoV) framework.",
      "Implemented and tested autonomous navigation algorithms in ROS 2, enabling real-time trajectory planning and vehicle-to-infrastructure (V2I) communication.",
      "Assisted in scholarly research, integrating simulation environments and sensor data for performance evaluation.",
    ],
    note: "Worked under the guidance of Dr. Sourav Kanti Addya (Supervisor) and Mr. Rajeev K K (PhD Scholar).",
    skills: "Autonomous Systems (Internet) and Scholarly Research",
  },
  {
    org: "Indux Solar",
    role: "AI Intern",
    year: "2025",
    period: "May 2025 – Jun 2025 · 2 mos",
    location: "Remote",
    bullets: [
      "Applied machine learning models to solar data and optimized edge-intelligence frameworks.",
    ],
  },
  {
    org: "Center for Cyber Security Studies & Research",
    role: "Intern",
    year: "2024",
    period: "Sep 2024 – Dec 2024 · 4 mos",
    location: "Remote",
    bullets: [
      "Assisted in advanced research on emerging cyber threats and zero-day exploit detection.",
      "Contributed to educational content and training materials aimed at bolstering organizational security awareness.",
    ],
  },
  {
    org: "ShadowFox",
    role: "Cybersecurity Intern",
    year: "2024",
    period: "Sep 2024 – Oct 2024 · 2 mos",
    location: "Remote · Internship",
    bullets: [
      "Conducted penetration testing using Metasploit, Nmap, Gobuster, Wireshark, Burp Suite, and VeraCrypt, simulating real-world attack scenarios.",
      "Built custom exploits, improving penetration testing coverage by 15%, and contributed to a 30% reduction in client attack surface.",
      "Produced detailed vulnerability assessment reports that informed remediation strategies.",
    ],
  },
  {
    org: "SwechaAP",
    role: "Member",
    year: "2023 – Present",
    period: "Oct 2023 – Present · 2 yrs 8 mos",
    location: "Vijayawada, AP · Hybrid",
    bullets: [
      "Contributed to Voice AI Telugu and OpenStreetMap, supporting open-source development in regional language and mapping tech.",
      "Promoted open-source culture through technical community projects and collaborative development.",
    ],
  },
];

export function Experience() {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0]);

  const toggleExpand = (idx: number) => {
    if (expandedIndices.includes(idx)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== idx));
    } else {
      setExpandedIndices([...expandedIndices, idx]);
    }
  };

  const expandAll = () => setExpandedIndices(items.map((_, i) => i));
  const collapseAll = () => setExpandedIndices([]);

  return (
    <section id="experience" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <SectionLabel index="03">Experience</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-8">
            <h2 className="max-w-3xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Work at the edge of <span className="italic">hardware</span> and intelligence.
            </h2>
            <div className="flex gap-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground pb-2 self-start md:self-end">
              <button
                onClick={expandAll}
                className="cursor-pointer hover:text-foreground transition-colors focus-visible:outline-none"
              >
                [ Expand All ]
              </button>
              <button
                onClick={collapseAll}
                className="cursor-pointer hover:text-foreground transition-colors focus-visible:outline-none"
              >
                [ Collapse All ]
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 border-t border-hairline">
          {items.map((it, i) => {
            const isExpanded = expandedIndices.includes(i);
            return (
              <Reveal key={it.org + it.role} delay={i * 0.03}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleExpand(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleExpand(i);
                    }
                  }}
                  className="group w-full text-left cursor-pointer border-b border-hairline py-6 transition-colors hover:bg-surface/40 md:py-8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <div className="grid grid-cols-12 items-baseline gap-4 px-2">
                    {/* Year/Timeline */}
                    <div className="col-span-12 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:col-span-2">
                      {it.year}
                    </div>

                    {/* Org & Role */}
                    <div className="col-span-10 md:col-span-8">
                      <h3 className="font-display text-2xl tracking-tight md:text-3xl">
                        {it.org}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                        {it.role}
                      </p>
                    </div>

                    {/* Chevron / Toggle Indicator */}
                    <div className="col-span-2 flex justify-end text-muted-foreground/40 group-hover:text-foreground transition-colors self-center">
                      <div className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                        <span className="hidden md:inline text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">
                          {isExpanded ? "Close" : "View"}
                        </span>
                        <div className="relative h-4 w-4 flex items-center justify-center">
                          {isExpanded ? (
                            <Minus className="h-3.5 w-3.5 transition-transform duration-300 rotate-90" />
                          ) : (
                            <Plus className="h-3.5 w-3.5 transition-transform duration-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content with Framer Motion */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-12 gap-4 mt-6 px-2 text-base leading-relaxed text-muted-foreground">
                          {/* Empty spacer for medium screens to align with org name */}
                          <div className="hidden md:block md:col-span-2" />

                          <div className="col-span-12 md:col-span-10 space-y-4">
                            {/* Meta details: Period and Location */}
                            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-wide text-muted-foreground/70 border-b border-hairline/40 pb-3">
                              <span className="flex items-center gap-1.5">
                                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                                {it.period}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                                {it.location}
                              </span>
                            </div>

                            {/* Bullets or notes */}
                            {it.bullets && it.bullets.length > 0 ? (
                              <ul className="space-y-2.5 text-[15px] leading-relaxed">
                                {it.bullets.map((bullet, idx) => (
                                  <li
                                    key={idx}
                                    className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent-violet/60 text-foreground/80"
                                  >
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            ) : null}

                            {/* Guidance note */}
                            {it.note && (
                              <p className="text-[14px] italic text-muted-foreground/80 pl-5 border-l border-l-hairline pl-4">
                                {it.note}
                              </p>
                            )}

                            {/* Skills tags */}
                            {it.skills && (
                              <div className="pt-2 flex items-baseline gap-2">
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                                  Focus:
                                </span>
                                <span className="font-mono text-[11px] text-muted-foreground">
                                  {it.skills}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
