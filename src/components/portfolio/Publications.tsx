import React from "react";
import { ArrowUpRight, CheckCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const publications = [
  {
    title:
      "Correlating UV Index with Visible Light Intensity to Understand Solar Radiation Variation",
    authors: "Mokshagna Anurag Kankati",
    journal:
      "2026 4th IEEE International Conference on Industrial Electronics: Developments & Applications (ICIDeA) • Oct 2026",
    link: "https://cmt3.research.microsoft.com/ICIDeA2026",
    doi: "ICIDeA2026-349",
    abstract:
      "Urban environmental modeling, solar energy forecasting, and public health tracking all require dense, localized solar irradiance data. In this study, we address this issue by correlating broadband visible light and the ultraviolet (UV) index using the low-cost MANHA SatKit. We deployed the sensor platform in Vizianagaram, India, and collected a 60-day dataset spanning clear, hazy, and overcast skies. The data shows strong diurnal coupling between the two bands, yielding a Pearson correlation coefficient of 0.92.",
    tags: [
      "Solar Radiation",
      "UV Index",
      "Visible Light",
      "Environmental Sensing",
      "Low-Cost Sensors",
      "IEEE",
    ],
    accepted: true,
  },
  {
    title:
      "A Vision-Acoustic Teleoperated Robotic Framework for Secure Library Automation utilizing YOLOv8 Biometrics and MoveIt Kinematics",
    authors:
      "Mokshagna Anurag Kankati, Hari Chandra Hlada M. P. S S S, Sai Lalith P, P. Suryaprasad",
    journal: "SSRN Preprint • Elsevier SSRN • June 2026",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6872803#",
    doi: "ssrn.6872803",
    abstract:
      "Proposed a teleoperated robotic framework for secure library automation integrating YOLOv8-based biometric identification, voice interaction, MoveIt motion planning, and autonomous manipulation for intelligent book handling and access control.",
    tags: [
      "Robotics",
      "YOLOv8",
      "MoveIt",
      "Computer Vision",
      "ROS",
      "Biometrics",
    ],
  },
  {
    title: "Gait Recognition Using GaitFormer on the CASIA-B Dataset",
    doi: "10.22214/ijraset.2026.83339",
    link: "https://doi.org/10.22214/ijraset.2026.83339",
    date: "2026",
    journal:
      "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
    abstract:
      "This research presents a deep learning-based gait recognition framework using GaitFormer on the CASIA-B dataset. The study explores transformer-based architectures for biometric identification through human gait analysis, achieving robust recognition performance across varying viewpoints and walking conditions. The work highlights the effectiveness of attention mechanisms in extracting discriminative gait features for secure and non-invasive biometric authentication.",
    tags: [
      "Deep Learning",
      "Gait Recognition",
      "GaitFormer",
      "CASIA-B",
      "Computer Vision",
      "Biometrics",
      "Transformers",
      "AI",
    ],
  },
  {
    title:
      "Development of a Low-Cost Autonomous Mobile Robot Utilizing ROS 2 and LiDAR-Based Navigation",
    doi: "10.5281/zenodo.20484853",
    link: "https://zenodo.org/records/20484853",
    date: "2026",
    journal: "Zenodo",
    abstract:
      "This paper presents the design, development, and implementation of a compact, cost-effective autonomous mobile robot built around a Raspberry Pi 4 microcomputer and an RPLiDAR sensor for LiDAR-based navigation. The entire system architecture is built on ROS 2 Humble Hawksbill, integrating SLAM Toolbox for 2D occupancy grid mapping and the Nav2 stack for autonomous navigation with dynamic obstacle avoidance.",
    tags: ["ROS 2", "LiDAR", "Nav2", "SLAM", "Raspberry Pi 4", "PID Control"],
  },
];

/* ── Professional publication ticker ── */
function PublicationsTicker() {
  const scrollText = "Correlating UV Index with Visible Light Intensity to Understand Solar Radiation Variation  ·  IEEE ICIDeA 2026  ·  Bhubaneswar, India  ·  Oct 29, 2026";

  const marqueeItems = Array(6)
    .fill(null)
    .map((_, i) => (
      <span key={i} className="inline-flex items-center gap-6 mx-8 shrink-0 whitespace-nowrap">
        <span>{scrollText}</span>
        <span className="w-1 h-1 rounded-full bg-[var(--color-industrial-green)] inline-block shrink-0" />
      </span>
    ));

  return (
    <div className="relative w-full overflow-hidden border-mech bg-[var(--color-industrial-dark)] shadow-mech-md mb-14">
      <div className="flex items-stretch">
        {/* ── PAPER ACCEPTED badge ── */}
        <div className="relative z-10 flex items-center gap-2 bg-[var(--color-industrial-green)] text-[var(--color-industrial-dark)] font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.15em] px-4 md:px-5 py-2.5 border-r-[3px] border-[var(--color-industrial-dark)] shrink-0">
          <CheckCircle size={13} />
          <span>Paper Accepted</span>
        </div>

        {/* ── scrolling marquee ── */}
        <div className="flex-1 overflow-hidden flex items-center py-2.5">
          <motion.div
            className="flex text-[var(--color-industrial-white)] font-mono text-[11px] md:text-xs font-medium tracking-wider whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {marqueeItems}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Publications() {
  return (
    <section
      id="publications"
      className="relative py-24 bg-[var(--color-industrial-white)] border-b-4 border-mech"
    >
      {/* Blueprint Light Overlay */}
      <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none"></div>

      <div className="mx-auto max-w-[1000px] px-6 relative z-10">
        <Reveal>
          <div className="inline-flex items-center font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[var(--color-industrial-dark)] text-[var(--color-industrial-green)] px-4 py-1 border-mech-sm shadow-mech-green mb-12 relative">
            <span className="mr-2 opacity-70">[&gt;</span>
            PUBLICATIONS
            <span className="ml-2 opacity-70">]</span>
          </div>

          <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-black uppercase tracking-tighter mb-16 leading-[0.9] text-[var(--color-industrial-dark)]">
            Research <br />&{" "}
            <span className="text-[var(--color-industrial-orange)] text-stroke-mech-2">
              Findings
            </span>
            .
          </h2>
        </Reveal>

        {/* ── News Ticker ── */}
        <Reveal>
          <PublicationsTicker />
        </Reveal>

        <div className="mt-12">
          {publications.map((pub, i) => (
            <Reveal key={pub.doi} delay={i * 0.1}>
              <div className="mb-12 last:mb-0 relative">
                {/* Accepted badge for accepted papers */}
                {"accepted" in pub && pub.accepted && (
                  <div className="absolute -top-3 -right-2 z-20 flex items-center gap-1.5 bg-[var(--color-industrial-green)] text-[var(--color-industrial-dark)] font-mono text-[10px] font-black uppercase tracking-wider px-3 py-1 border-2 border-[var(--color-industrial-dark)] shadow-[3px_3px_0_var(--color-industrial-dark)]">
                    <Zap size={11} />
                    ACCEPTED
                  </div>
                )}

                <div
                  className={`flex flex-col border-mech shadow-mech-lg clip-mech bg-[var(--color-industrial-bg)] ${
                    "accepted" in pub && pub.accepted
                      ? "ring-2 ring-[var(--color-industrial-green)] ring-offset-2 ring-offset-[var(--color-industrial-white)]"
                      : ""
                  }`}
                >
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col md:flex-row gap-5 p-6 md:p-8 border-b-4 border-mech last:border-b-0 transition-colors hover:bg-[var(--color-industrial-white)] group"
                  >
                    <span className="font-mono text-4xl font-black opacity-30 pt-1 shrink-0 text-[var(--color-industrial-dark)]">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-black uppercase mb-1.5 leading-tight group-hover:text-[var(--color-industrial-blue)] transition-colors text-[var(--color-industrial-dark)]">
                        {pub.title}
                      </h4>
                      <p className="font-mono text-sm text-[var(--color-industrial-blue)] italic mb-2 font-bold">
                        {pub.journal}
                      </p>
                      {pub.authors && (
                        <p className="font-sans text-xs font-bold text-[var(--color-industrial-dark)] opacity-80 mb-3">
                          {pub.authors}
                        </p>
                      )}
                      <p className="font-mono text-[0.85rem] text-[var(--color-industrial-dark)] opacity-90 leading-[1.7] mb-4">
                        {pub.abstract}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-[var(--color-industrial-dark)] text-[var(--color-industrial-white)] font-mono text-[0.66rem] font-bold px-2.5 py-1 uppercase border border-[var(--color-industrial-dark)] shadow-sm group-hover:bg-[var(--color-industrial-blue)] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-start justify-end text-[var(--color-industrial-dark)]">
                      <div className="p-2 border-mech-sm bg-[var(--color-industrial-white)] group-hover:bg-[var(--color-industrial-dark)] group-hover:text-[var(--color-industrial-white)] transition-colors shadow-[2px_2px_0_rgba(10,10,10,1)]">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
