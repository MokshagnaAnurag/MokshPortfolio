import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const publications = [
  {
    title: "A Vision-Acoustic Teleoperated Robotic Framework for Secure Library Automation utilizing YOLOv8 Biometrics and MoveIt Kinematics",
    authors: "Mokshagna Anurag Kankati, Hari Chandra Hlada M. P. S S S, Sai Lalith P, P. Suryaprasad",
    journal: "SSRN Preprint • Elsevier SSRN • June 2026",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6872803#",
    doi: "ssrn.6872803",
    abstract:
      "Proposed a teleoperated robotic framework for secure library automation integrating YOLOv8-based biometric identification, voice interaction, MoveIt motion planning, and autonomous manipulation for intelligent book handling and access control.",
    tags: ["Robotics", "YOLOv8", "MoveIt", "Computer Vision", "ROS", "Biometrics"],
  },
  {
    title: "Gait Recognition Using GaitFormer on the CASIA-B Dataset",
    doi: "10.22214/ijraset.2026.83339",
    link: "https://doi.org/10.22214/ijraset.2026.83339",
    date: "2026",
    journal: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
    abstract: "This research presents a deep learning-based gait recognition framework using GaitFormer on the CASIA-B dataset. The study explores transformer-based architectures for biometric identification through human gait analysis, achieving robust recognition performance across varying viewpoints and walking conditions. The work highlights the effectiveness of attention mechanisms in extracting discriminative gait features for secure and non-invasive biometric authentication.",
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
    title: "Development of a Low-Cost Autonomous Mobile Robot Utilizing ROS 2 and LiDAR-Based Navigation",
    doi: "10.5281/zenodo.20484853",
    link: "https://zenodo.org/records/20484853",
    date: "2026",
    journal: "Zenodo",
    abstract:
      "This paper presents the design, development, and implementation of a compact, cost-effective autonomous mobile robot built around a Raspberry Pi 4 microcomputer and an RPLiDAR sensor for LiDAR-based navigation. The entire system architecture is built on ROS 2 Humble Hawksbill, integrating SLAM Toolbox for 2D occupancy grid mapping and the Nav2 stack for autonomous navigation with dynamic obstacle avoidance.",
    tags: ["ROS 2", "LiDAR", "Nav2", "SLAM", "Raspberry Pi 4", "PID Control"],
  },
];

export function Publications() {
  // Group by year if needed, for now we have just one year
  return (
    <section id="publications" className="relative py-24 bg-[var(--color-industrial-white)] border-b-4 border-mech">
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
            Research <br />& <span className="text-[var(--color-industrial-orange)] text-stroke-mech-2">Findings</span>.
          </h2>
        </Reveal>

        <div className="mt-12">
          {publications.map((pub, i) => (
            <Reveal key={pub.doi} delay={i * 0.1}>
              <div className="mb-12 last:mb-0">

                <div className="flex flex-col border-mech shadow-mech-lg clip-mech bg-[var(--color-industrial-bg)]">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col md:flex-row gap-5 p-6 md:p-8 border-b-4 border-mech last:border-b-0 transition-colors hover:bg-[var(--color-industrial-white)] group"
                  >
                    <span className="font-mono text-4xl font-black opacity-30 pt-1 shrink-0 text-[var(--color-industrial-dark)]">
                      {(i + 1).toString().padStart(2, '0')}
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
