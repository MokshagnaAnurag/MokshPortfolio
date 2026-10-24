import React, { useState } from "react";
import { Reveal } from "./Reveal";
import {
  MapPin,
  Calendar,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
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
    id: "exp-1",
    orgShort: "Zebu Intelligent Systems",
    orgFull: "Zebu Intelligent Systems Pvt. Ltd.",
    role: "UAV Engineering Intern",
    year: "2026",
    period: "Jul 2026 – Sep 2026",
    location: "Hyderabad, Telangana, India",
    bullets: [
      "Integrated and validated CubeOrange flight controllers on S500 and FPV UAV platforms.",
      "Configured ArduPilot, Mission Planner, telemetry, GPS, and onboard avionics for autonomous flight operations.",
      "Performed sensor calibration, flight testing, and system validation for real-world UAV deployment.",
    ],
  },
  {
    id: "exp-2",
    orgShort: "Spaceborn",
    orgFull: "Spaceborn",
    role: "Robotics & Simulation Intern",
    year: "2026",
    period: "May 2026 – June 2026",
    location: "Remote",
    bullets: [
      "Worked on autonomous drone and robotic systems design, physics-based simulations, and control optimization.",
    ],
  },
  {
    id: "exp-3",
    orgShort: "IIT Tirupati NIF",
    orgFull: "IIT Tirupati Navavishkar I-Hub Foundation",
    role: "Project Intern",
    year: "2025",
    period: "Jun 2025 – Apr 2026",
    location: "Tirupati, Andhra Pradesh",
    bullets: [
      "Designed a modular 1U CubeSat architecture for subsystem integration and testing.",
      "Developed RP2040-based onboard computer, power management, and LoRaWAN communication modules.",
      "Built telemetry and ground-station software for monitoring spacecraft health and communication.",
    ],
  },
  {
    id: "exp-4",
    orgShort: "CES, MVGR",
    orgFull: "Center For Embedded Systems, MVGR",
    role: "Student Member",
    year: "2024",
    period: "Jul 2024 – May 2026",
    location: "Vizianagaram, AP",
    bullets: [
      "Designed PID-based control systems and wireless sensor networks using STM32 and Arduino.",
      "Built functional embedded prototypes for robotics and industrial automation applications.",
    ],
    skills: "PID Control, STM32, Arduino",
  },
  {
    id: "exp-5",
    orgShort: "Daloft Aerospace",
    orgFull: "Daloft Aerospace Pvt. Ltd.",
    role: "Intern",
    year: "2025",
    period: "Aug 2025 – Nov 2025",
    location: "Chennai / Remote",
    bullets: [
      "Developed autonomous drone simulation workflows using ROS 2, PX4, and ArduPilot.",
      "Built and validated simulation environments in Gazebo and RViz for mission planning and testing.",
      "Implemented Visual SLAM using RTAB-Map for localization and autonomous navigation in simulation environments.",
    ],
  },
  {
    id: "exp-6",
    orgShort: "NITK",
    orgFull: "National Institute of Technology Karnataka",
    role: "Summer Research Intern",
    year: "2025",
    period: "May 2025 – Jul 2025",
    location: "Mangaluru, Karnataka",
    bullets: [
      "Designed and developed a low-cost Autonomous Mobile Robot (AMR) using ROS 2 Humble, Raspberry Pi 4B, and RP-LiDAR A1.",
      "Implemented LiDAR-based mapping and localization using Cartographer SLAM for indoor autonomous navigation.",
      "Integrated Navigation2 (Nav2) for waypoint navigation, obstacle avoidance, and autonomous path execution.",
      "Explored Vehicle-to-Infrastructure (V2I) communication concepts within an Internet of Vehicles (IoV) research framework.",
    ],
    note: "Under Dr. Sourav Kanti Addya and Mr. Rajeev K. K.",
    skills: "ROS 2, Cartographer SLAM, Nav2, Raspberry Pi, RP-LiDAR A1",
  },
  {
    id: "exp-7",
    orgShort: "UnlockDiscounts",
    orgFull: "UnlockDiscounts",
    role: "Research Intern",
    year: "2025",
    period: "May 2025 – Aug 2025",
    location: "Bengaluru / Remote",
    bullets: [
      "Designed and developed research posters and technical presentations to visually communicate project findings.",
    ],
  },
  {
    id: "exp-8",
    orgShort: "Indux Solar",
    orgFull: "Indux Solar",
    role: "AI Intern",
    year: "2025",
    period: "May 2025 – Jun 2025",
    location: "Remote",
    bullets: [
      "Applied machine learning models to solar data and optimized edge-intelligence frameworks.",
    ],
  },
  {
    id: "exp-9",
    orgShort: "CCSR",
    orgFull: "Center for Cyber Security Studies & Research",
    role: "Intern",
    year: "2024",
    period: "Sep 2024 – Dec 2024",
    location: "Remote",
    bullets: [
      "Assisted in advanced research on emerging cyber threats and zero-day exploit detection.",
      "Contributed to educational content to bolster organizational security awareness.",
    ],
  },
  {
    id: "exp-10",
    orgShort: "ShadowFox",
    orgFull: "ShadowFox",
    role: "Cybersecurity Intern",
    year: "2024",
    period: "Sep 2024 – Oct 2024",
    location: "Remote",
    bullets: [
      "Conducted penetration testing using Metasploit, Nmap, Gobuster, Wireshark, Burp Suite, and VeraCrypt.",
      "Built custom exploits improving coverage by 15%, reducing client attack surface by 30%.",
      "Produced detailed vulnerability assessment reports informing remediation strategies.",
    ],
    skills: "Penetration Testing, Metasploit, Nmap, Wireshark",
  },
  {
    id: "exp-11",
    orgShort: "SwechaAP",
    orgFull: "SwechaAP",
    role: "Member",
    year: "2023",
    period: "Oct 2023 – Present",
    location: "Vijayawada, AP",
    bullets: [
      "Contributed to Voice AI Telugu and OpenStreetMap, supporting open-source development.",
      "Promoted open-source culture through technical community projects and collaborative development.",
    ],
  },
];

const accentColors = [
  "#EF4444", // McQueen Red
  "#3B82F6", // King Blue
  "#22C55E", // Chick Hicks Green
  "#F59E0B", // Cruz Ramirez Yellow
  "#6366F1", // Jackson Storm Blue
  "#1E3A8A", // Doc Hudson Navy
  "#0EA5E9", // Dinoco Light Blue
  "#EF4444",
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
];

export function Experience() {
  const [featuredIdx, setFeaturedIdx] = useState<number>(0);

  const featured = items[featuredIdx];

  // Always fall back to the first accent color if an index is somehow invalid.
  const featuredColor =
    accentColors[featuredIdx % accentColors.length] ?? "#EF4444";

  const goToPrevious = () => {
    setFeaturedIdx((prev) =>
      prev > 0 ? prev - 1 : items.length - 1
    );
  };

  const goToNext = () => {
    setFeaturedIdx((prev) =>
      prev < items.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b-[8px] border-yellow-400 bg-white py-24"
    >
      <div className="relative z-10 mx-auto max-w-[1300px] px-4 md:px-8">

        {/* =========================================================
            RACING HEADER
        ========================================================= */}
        <Reveal>
          <div className="mb-6 -skew-x-6 transform">

            {/* Top rule */}
            <div className="mb-3 flex items-center gap-3">
              <div className="h-[6px] flex-1 bg-black" />

              <div className="h-[6px] w-12 bg-red-600" />

              <div className="h-[6px] flex-1 bg-black" />
            </div>

            {/* Header row */}
            <div className="mb-2 flex items-end justify-between">

              <div className="flex items-end gap-6">
                <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.85] tracking-tighter text-black drop-shadow-[4px_4px_0_#ffd700]">
                  WORK
                  <br />
                  EXPERIENCE
                </h2>
              </div>

              {/* Desktop metadata */}
              <div className="hidden border-l-[4px] border-red-600 bg-zinc-100 p-2 text-right shadow-[4px_4px_0_#000] md:block">
                <p className="font-mono text-[0.6rem] font-black uppercase tracking-widest text-black">
                  VOL. IV, NO. {items.length} &nbsp;·&nbsp; WORK EDITION
                </p>

                <p className="font-mono text-[0.6rem] font-black uppercase tracking-widest text-black">
                  HARDWARE · ROBOTICS · SYSTEMS
                </p>

                <p className="mt-1 font-mono text-[0.6rem] font-black uppercase tracking-widest text-red-600">
                  EST. 2023 &nbsp;·&nbsp; ALL ENTRIES VERIFIED
                </p>
              </div>
            </div>

            {/* Bottom double rule */}
            <div className="mb-0.5 h-[4px] bg-yellow-400" />

            <div className="mb-4 h-[8px] bg-black" />
          </div>
        </Reveal>

        {/* =========================================================
            MOBILE EXPERIENCE CARDS
        ========================================================= */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-6 px-2 pb-8 lg:hidden">

            {items.map((item, index) => {
              const color =
                accentColors[index % accentColors.length];

              return (
                <article
                  key={item.id}
                  className="relative -skew-x-6 transform overflow-hidden border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_#000]"
                >

                  {/* Accent bar */}
                  <div
                    className="absolute bottom-0 left-0 top-0 w-2"
                    style={{ backgroundColor: color }}
                  />

                  {/* Giant year watermark */}
                  <span className="pointer-events-none absolute -bottom-2 -right-4 z-0 -skew-x-6 transform select-none font-display text-[7rem] font-black leading-none text-zinc-100">
                    {item.year}
                  </span>

                  {/* Card content */}
                  <div className="relative z-10 skew-x-6 transform">

                    {/* Period + location */}
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-2">

                      <span className="border-2 border-black bg-zinc-100 px-2 font-mono text-[10px] font-black uppercase tracking-widest text-zinc-600">
                        {item.period}
                      </span>

                      <span className="inline-flex items-center gap-1 border-2 border-black bg-zinc-100 px-2 font-mono text-[9px] font-black uppercase tracking-widest text-zinc-500">
                        <MapPin
                          size={10}
                          className="text-red-600"
                        />
                        {item.location}
                      </span>
                    </div>

                    {/* Organization */}
                    <h3 className="mb-1 font-display text-[1.8rem] font-black uppercase leading-[1.1] tracking-tighter text-black">
                      {item.orgShort}
                    </h3>

                    {/* Role */}
                    <p
                      className="mb-4 font-sans text-[13px] font-black uppercase tracking-widest"
                      style={{ color }}
                    >
                      {item.role}
                    </p>

                    {/* Bullets */}
                    {item.bullets && item.bullets.length > 0 && (
                      <div className="mb-5 space-y-2 border-l-4 border-dashed border-zinc-300 pl-3">

                        {item.bullets.map((bullet, bulletIndex) => (
                          <p
                            key={`${item.id}-bullet-${bulletIndex}`}
                            className="flex items-start gap-2 font-sans text-[12px] font-bold leading-relaxed text-zinc-700"
                          >
                            <span
                              className="mt-[0.35rem] h-2 w-2 shrink-0 border border-black"
                              style={{ backgroundColor: color }}
                            />

                            <span>{bullet}</span>
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Skills */}
                    {item.skills && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.skills
                          .split(",")
                          .map((skill, skillIndex) => (
                            <span
                              key={`${item.id}-skill-${skillIndex}`}
                              className="border-2 border-black bg-yellow-400 px-2 py-1 font-mono text-[9px] font-black uppercase tracking-widest text-black"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        {/* =========================================================
            DESKTOP RACING GRID
        ========================================================= */}
        <Reveal delay={0.1}>
          <div className="hidden overflow-hidden border-[4px] border-black bg-zinc-50 shadow-[12px_12px_0_#000] lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:-skew-x-6">

            {/* =====================================================
                LEFT — FEATURED EXPERIENCE
            ===================================================== */}
            <div className="relative overflow-hidden border-r-[4px] border-black bg-white">

              <AnimatePresence mode="wait">
                <motion.article
                  key={featured.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.22 }}
                  className="flex h-full flex-col skew-x-6 transform"
                >

                  {/* Colored header */}
                  <div
                    className="h-3 w-full shrink-0 border-b-[4px] border-black"
                    style={{ backgroundColor: featuredColor }}
                  />

                  {/* =================================================
                      FEATURE HEADLINE
                  ================================================= */}
                  <div className="border-b-[4px] border-dashed border-black bg-zinc-50 p-6 md:p-8">

                    {/* Kicker + navigation */}
                    <div className="mb-3 flex items-center justify-between gap-4">

                      <div className="flex items-center gap-3">

                        <span
                          className="border-[2px] border-black px-3 py-1 font-mono text-[0.62rem] font-black uppercase tracking-[0.25em] text-white shadow-[3px_3px_0_#000]"
                          style={{
                            backgroundColor: featuredColor,
                          }}
                        >
                          LEAD DRIVER
                        </span>

                        <span className="border-[2px] border-black bg-yellow-400 px-2 py-1 font-mono text-[0.62rem] font-black uppercase tracking-widest text-black">
                          {featured.year}
                        </span>
                      </div>

                      {/* Navigation */}
                      <div className="hidden items-center gap-2 md:flex">

                        <button
                          type="button"
                          onClick={goToPrevious}
                          aria-label="Previous experience"
                          className="flex h-8 w-8 items-center justify-center border-[3px] border-black bg-white text-black shadow-[2px_2px_0_#000] transition-colors hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-yellow-400 hover:shadow-none"
                        >
                          <ChevronLeft
                            size={16}
                            strokeWidth={4}
                          />
                        </button>

                        <button
                          type="button"
                          onClick={goToNext}
                          aria-label="Next experience"
                          className="flex h-8 w-8 items-center justify-center border-[3px] border-black bg-white text-black shadow-[2px_2px_0_#000] transition-colors hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-yellow-400 hover:shadow-none"
                        >
                          <ChevronRight
                            size={16}
                            strokeWidth={4}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Organization */}
                    <h3
                      className="mb-3 font-display font-black uppercase leading-[0.88] tracking-tighter text-black drop-shadow-[2px_2px_0_#ffd700]"
                      style={{
                        fontSize: "clamp(2rem, 5vw, 3.5rem)",
                      }}
                    >
                      {featured.orgFull}
                    </h3>

                    {/* Role */}
                    <p
                      className="mb-4 font-display text-[1rem] font-black uppercase tracking-widest"
                      style={{ color: featuredColor }}
                    >
                      {featured.role}
                    </p>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-3">

                      <span className="inline-flex items-center gap-1.5 bg-black px-3 py-1.5 font-mono text-[0.68rem] font-black text-white shadow-[2px_2px_0_#ffd700]">
                        <Calendar
                          size={12}
                          className="text-yellow-400"
                        />
                        {featured.period}
                      </span>

                      <span className="inline-flex items-center gap-1.5 border-[3px] border-black bg-white px-3 py-1.5 font-mono text-[0.68rem] font-black text-black shadow-[2px_2px_0_#ff0000]">
                        <MapPin
                          size={12}
                          className="text-red-600"
                        />
                        {featured.location}
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      BODY
                  ================================================= */}
                  <div className="grid flex-1 gap-8 bg-white p-6 md:grid-cols-[minmax(0,1fr)_auto] md:p-8">

                    {/* Experience details */}
                    <div>

                      {featured.bullets &&
                        featured.bullets.length > 0 && (
                          <div className="mb-4">

                            {featured.bullets.map(
                              (bullet, bulletIndex) => (
                                <p
                                  key={`${featured.id}-bullet-${bulletIndex}`}
                                  className="mb-3 flex items-start gap-3 border-l-[4px] border-black bg-zinc-50 p-2 font-mono text-[0.84rem] font-bold leading-[1.85] text-zinc-800"
                                >
                                  <span className="mt-[0.5em] h-3 w-3 shrink-0 border-[2px] border-black bg-yellow-400" />

                                  <span>{bullet}</span>
                                </p>
                              )
                            )}
                          </div>
                        )}

                      {/* Note */}
                      {featured.note && (
                        <p className="mt-4 border-l-4 border-black bg-yellow-400 p-2 font-mono text-[0.72rem] font-black uppercase text-black shadow-[2px_2px_0_#ff0000]">
                          {featured.note}
                        </p>
                      )}
                    </div>

                    {/* Skills */}
                    {featured.skills && (
                      <div className="shrink-0 border-l-[4px] border-dashed border-zinc-300 pl-6">

                        <p className="mb-3 font-mono text-[0.65rem] font-black uppercase tracking-[0.25em] text-red-600">
                          PIT STOP SPECS
                        </p>

                        <div className="flex flex-col gap-2">

                          {featured.skills
                            .split(",")
                            .map((skill, skillIndex) => (
                              <span
                                key={`${featured.id}-skill-${skillIndex}`}
                                className="border-[3px] border-black bg-black px-2.5 py-1.5 text-center font-mono text-[0.65rem] font-black uppercase tracking-widest text-white shadow-[2px_2px_0_#ffd700]"
                              >
                                {skill.trim()}
                              </span>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* =====================================================
                RIGHT — ALL EXPERIENCE
            ===================================================== */}
            <aside className="flex flex-col bg-zinc-100">

              {/* Column header */}
              <div className="flex items-center gap-2 border-b-[4px] border-black bg-yellow-400 px-5 py-4">

                <div className="h-3 w-3 border-[2px] border-black bg-red-600" />

                <span className="font-mono text-[0.65rem] font-black uppercase tracking-[0.2em] text-black">
                  ALL LAPS ({items.length})
                </span>
              </div>

              {/* Experience list */}
              <div className="max-h-[600px] flex-1 divide-y-[4px] divide-black overflow-y-auto">

                {items.map((item, index) => {
                  const color =
                    accentColors[index % accentColors.length];

                  const isActive =
                    index === featuredIdx;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFeaturedIdx(index)}
                      aria-current={
                        isActive ? "true" : undefined
                      }
                      className={`group flex w-full transform skew-x-6 items-start gap-3 px-5 py-4 text-left transition-colors duration-150 ${
                        isActive
                          ? "bg-black text-white"
                          : "text-black hover:bg-yellow-400"
                      }`}
                    >

                      {/* Accent bar */}
                      <div
                        className="mt-0.5 w-2 shrink-0 self-stretch border-[2px] border-black"
                        style={{
                          backgroundColor: color,
                        }}
                      />

                      {/* Content */}
                      <div className="min-w-0 flex-1">

                        {/* Year + active state */}
                        <div className="mb-1 flex items-center justify-between gap-2">

                          <span
                            className="font-mono text-[0.57rem] font-black uppercase tracking-widest"
                            style={{
                              color: isActive
                                ? "#EAB308"
                                : "#71717A",
                            }}
                          >
                            [{item.year}]
                          </span>

                          {isActive && (
                            <span className="border border-black bg-white px-1 font-mono text-[0.52rem] font-black uppercase tracking-widest text-red-600">
                              RACING
                            </span>
                          )}
                        </div>

                        {/* Organization */}
                        <p
                          className="mb-0.5 font-display text-[0.82rem] font-black uppercase leading-tight tracking-tight"
                          style={{
                            color: isActive
                              ? "#FFFFFF"
                              : "#000000",
                          }}
                        >
                          {item.orgShort}
                        </p>

                        {/* Role */}
                        <p
                          className="font-mono text-[0.6rem] font-bold uppercase leading-tight tracking-wider"
                          style={{
                            color: isActive
                              ? "#A1A1AA"
                              : "#52525B",
                          }}
                        >
                          {item.role}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ChevronRight
                        size={16}
                        strokeWidth={4}
                        className="mt-1 shrink-0 transition-transform duration-150 group-hover:translate-x-1"
                        style={{
                          color: isActive
                            ? "#EAB308"
                            : "#000000",
                          opacity: isActive ? 1 : 0.4,
                        }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-auto border-t-[4px] border-black bg-black px-5 py-3">

                <p className="text-center font-mono text-[0.55rem] font-black uppercase tracking-widest text-white">
                  SELECT ANY LAP TO REVIEW
                </p>
              </div>
            </aside>
          </div>
        </Reveal>

        {/* =========================================================
            FINISH LINE
        ========================================================= */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex -skew-x-6 transform items-center gap-2">

            <div className="h-[4px] flex-1 bg-black" />

            <span className="border-[2px] border-black bg-zinc-100 px-3 font-mono text-[0.65rem] font-black uppercase tracking-[0.3em] text-red-600">
              FINISH LINE
            </span>

            <div className="h-[4px] flex-1 bg-black" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
