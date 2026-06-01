import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const publications = [
  {
    title: "Development of a Low-Cost Autonomous Mobile Robot Utilizing ROS 2 and LiDAR-Based Navigation",
    doi: "10.5281/zenodo.20484853",
    link: "https://zenodo.org/records/20484853",
    date: "2026",
    journal: "Zenodo",
    abstract:
      "This paper presents the design, development, and implementation of a compact, cost-effective autonomous mobile robot built around a Raspberry Pi 4 microcomputer and an RPLiDAR sensor for LiDAR-based navigation. The entire software architecture is built on ROS 2 Humble Hawksbill, integrating SLAM Toolbox for 2D occupancy grid mapping and the Nav2 stack for autonomous navigation with dynamic obstacle avoidance.",
    tags: ["ROS 2", "LiDAR", "Nav2", "SLAM", "Raspberry Pi 4", "PID Control"],
  },
];

export function Publications() {
  return (
    <section id="publications" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <SectionLabel index="05">Publications</SectionLabel>
          <h2 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Research & <span className="italic">findings</span>.
          </h2>
        </Reveal>

        <div className="mt-20 border-t border-hairline">
          {publications.map((pub, i) => (
            <Reveal key={pub.doi} delay={i * 0.05}>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-12 items-start gap-6 border-b border-hairline py-8 transition-colors hover:bg-surface/30 md:py-10"
              >
                {/* Year & Journal */}
                <div className="col-span-12 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:col-span-3">
                  <span className="block">{pub.date}</span>
                  <span className="mt-2 block text-muted-foreground/50">{pub.journal}</span>
                </div>

                {/* Title & Abstract */}
                <div className="col-span-12 md:col-span-7 pr-4">
                  <h3 className="font-display text-2xl tracking-tight text-foreground transition-colors group-hover:text-accent-violet md:text-3xl">
                    {pub.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {pub.abstract}
                  </p>
                  
                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-hairline/60 bg-surface/20 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Icon */}
                <div className="col-span-12 md:col-span-2 flex justify-start md:justify-end text-muted-foreground/40 transition-colors group-hover:text-foreground">
                  <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
