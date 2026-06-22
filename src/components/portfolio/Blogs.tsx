import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const blogs = [
  {
    title: "OSM : GuruBakthulaKonda - MVGR SLC",
    link: "https://mvgrglug.com/slc/blog/osm-gurubakthulakonda/",
    date: "2024",
    platform: "MVGR GLUG SLC",
    abstract: "Mapping activities at GuruBakthulaKonda using OpenStreetMap to contribute valuable geospatial data for local regions and open-source communities.",
    tags: ["OpenStreetMap", "GIS", "Community Mapping"],
  },
  {
    title: "Volunteers Camp - MVGR SLC",
    link: "https://mvgrglug.com/slc/blog/volunteers-camp/",
    date: "2024",
    platform: "MVGR GLUG SLC",
    abstract: "Participated in the Volunteers Camp, fostering progressive mindsets and collaborating on open-source initiatives to empower the student community.",
    tags: ["Volunteering", "Open Source", "Community"],
  },
  {
    title: "AI for Telugu - MVGR SLC",
    link: "https://mvgrglug.com/slc/blog/ai-for-telugu/",
    date: "2024",
    platform: "MVGR GLUG SLC",
    abstract: "Contributing to the 'Voice AI Telugu' initiative, focusing on building datasets and models to bring native language support to modern AI systems.",
    tags: ["AI", "Telugu", "Voice AI", "Localization"],
  },
  {
    title: "OSM : MappingVizag - MVGR SLC",
    link: "https://mvgrglug.com/slc/blog/osm-mappingvizag/",
    date: "2024",
    platform: "MVGR GLUG SLC",
    abstract: "A dedicated mapping drive for Visakhapatnam (MappingVizag) aimed at improving spatial data accuracy for better urban planning and open access.",
    tags: ["OpenStreetMap", "Vizag", "Mapping Drive"],
  },
];

const hoverColors = [
  "hover:bg-[var(--color-industrial-yellow)] active:bg-[var(--color-industrial-yellow)]",
  "hover:bg-[var(--color-industrial-cyan)] active:bg-[var(--color-industrial-cyan)]",
  "hover:bg-[var(--color-industrial-orange)] active:bg-[var(--color-industrial-orange)]",
  "hover:bg-[var(--color-industrial-green)] active:bg-[var(--color-industrial-green)]"
];

export function Blogs() {
  return (
    <section id="blogs" className="relative py-24 bg-[var(--color-industrial-white)] border-b-4 border-mech">
      {/* Blueprint Light Overlay */}
      <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none"></div>

      <div className="mx-auto max-w-[1000px] px-6 relative z-10">
        <Reveal>
          <div className="inline-flex items-center font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[var(--color-industrial-dark)] text-[var(--color-industrial-green)] px-4 py-1 border-mech-sm shadow-mech-green mb-12 relative">
            <span className="mr-2 opacity-70">[&gt;</span>
            BLOG & WRITINGS
            <span className="ml-2 opacity-70">]</span>
          </div>

          {/* Intro Text */}
          <p className="font-mono text-sm leading-relaxed text-[var(--color-industrial-dark)] mb-12 max-w-2xl border-l-4 border-[var(--color-industrial-green)] pl-4">
            A collection of my thoughts, project logs, and technical writings covering open-source contributions, AI localization, and community mapping.
          </p>
        </Reveal>

        <div className="space-y-0 border-[3px] border-[var(--color-industrial-dark)] shadow-[8px_8px_0_var(--color-industrial-dark)] bg-white relative">
          
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-[var(--color-industrial-yellow)] border-2 border-[var(--color-industrial-dark)] z-10"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[var(--color-industrial-cyan)] border-2 border-[var(--color-industrial-dark)] z-10"></div>

          {blogs.map((blog, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 md:p-8 border-b-[3px] border-[var(--color-industrial-dark)] last:border-b-0 transition-colors duration-300 relative overflow-hidden ${hoverColors[idx % hoverColors.length]}`}
              >
                {/* Hover overlay pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-industrial-dark) 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 relative z-10">
                  {/* Number / Date Column */}
                  <div className="flex flex-row md:flex-col justify-between items-baseline md:w-32 shrink-0 border-b-2 md:border-b-0 border-dotted border-[var(--color-industrial-dark)]/30 pb-2 md:pb-0">
                    <span className="font-mono text-3xl font-black text-[var(--color-industrial-dark)] opacity-20 group-hover:opacity-100 transition-opacity">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[0.7rem] font-bold text-[var(--color-industrial-dark)] opacity-60">
                      {blog.date}
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-display font-black uppercase text-xl leading-tight text-[var(--color-industrial-dark)] group-hover:underline decoration-[3px] underline-offset-4">
                        {blog.title}
                      </h3>
                      <ArrowUpRight
                        size={24}
                        strokeWidth={2.5}
                        className="text-[var(--color-industrial-dark)] opacity-40 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0"
                      />
                    </div>
                    
                    <div className="font-mono text-[0.75rem] font-bold tracking-widest uppercase text-[var(--color-industrial-blue)] mb-4">
                      {blog.platform}
                    </div>

                    <p className="font-sans text-[0.95rem] leading-relaxed text-gray-700 font-medium mb-6">
                      {blog.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {blog.tags.map((t, i) => (
                        <span
                          key={i}
                          className="font-mono text-[0.65rem] font-black uppercase tracking-wider bg-[var(--color-industrial-dark)] text-white px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        
        {/* Author link */}
        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <a 
              href="https://mvgrglug.com/slc/blog/author/mokshagna/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[0.85rem] font-black uppercase tracking-widest text-[var(--color-industrial-dark)] bg-white hover:bg-[var(--color-industrial-yellow)] hover:text-[var(--color-industrial-dark)] px-6 py-3 border-[3px] border-[var(--color-industrial-dark)] shadow-[4px_4px_0_var(--color-industrial-green)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              READ FULL AUTHOR PROFILE <ArrowUpRight size={18} strokeWidth={3} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
