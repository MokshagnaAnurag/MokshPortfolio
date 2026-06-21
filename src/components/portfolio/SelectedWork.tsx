import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Search, ShieldAlert, ArrowUpRight } from "lucide-react";
import drone from "@/assets/project-drone.jpg";
import cubesat from "@/assets/project-cubesat.jpg";
import driving from "@/assets/project-driving.jpg";
import lunabot from "@/assets/project-lunabot.png";
import { Reveal } from "./Reveal";

interface ProjectItem {
  no: string;
  title: string;
  summary: string;
  year: string;
  stack: string[];
  image: string;
  github: string;
}

const featuredProjects: ProjectItem[] = [
  {
    no: "01",
    title: "Autonomous Drone Systems",
    summary:
      "Flight stack and perception research on PX4-driven UAVs with onboard SLAM and obstacle reasoning.",
    year: "2025",
    stack: ["PX4", "ROS2", "SLAM", "Embedded C"],
    image: drone,
    github: "https://github.com/MokshagnaAnurag/ardupilot-gazebo-gimbal-simulation",
  },
  {
    no: "02",
    title: "CubeSat Prototype",
    summary:
      "Compact satellite subsystem prototyping — power, telemetry and command pipelines.",
    year: "2024",
    stack: ["STM32", "RTOS", "Telemetry"],
    image: cubesat,
    github: "https://github.com/MokshagnaAnurag",
  },
  {
    no: "03",
    title: "LEAD · Autonomous Driving",
    summary:
      "Closed-loop perception and planning experiments for an autonomous research platform.",
    year: "2024",
    stack: ["LiDAR", "ROS2", "Python"],
    image: driving,
    github: "https://github.com/MokshagnaAnurag/Self_driving_bot",
  },
  {
    no: "04",
    title: "Autonomous Lunabot",
    summary:
      "Engineered an autonomous robotic system (Lunabot) using ROS 2, integrating custom launch files for robot bringup and simulation environments. Configured and deployed Navigation2 (Nav2) stack for autonomous path planning and obstacle avoidance, visualized in real-time using Rviz.",
    year: "2025",
    stack: ["ROS2", "Python", "Nav2", "RViz"],
    image: lunabot,
    github: "https://github.com/MokshagnaAnurag/LUNA_BOT",
  },
];

interface ArchiveItem {
  title: string;
  summary: string;
  year: string;
  category: "Robotics" | "Autonomous Systems" | "AI & Vision" | "Cybersecurity";
  stack: string[];
  github: string;
}

const archiveProjects: ArchiveItem[] = [
  {
    title: "Self-Driving Robot with RPLIDAR C1",
    summary: "Engineered an autonomous navigation system leveraging ROS and Python. Integrated LiDAR-based SLAM for precise obstacle detection and implemented real-time path planning algorithms for seamless movement.",
    year: "2025",
    category: "Robotics",
    stack: ["ROS", "Python", "LiDAR", "SLAM"],
    github: "https://github.com/MokshagnaAnurag/Self_driving_bot",
  },
  {
    title: "Self-Balancing Robot",
    summary: "Built a two-wheeled self-balancing robot using the MPU6050 sensor for tilt detection and implemented PID control for stability. Tuned PID parameters for real-time response and smooth balancing on various surfaces.",
    year: "2024",
    category: "Robotics",
    stack: ["Arduino", "MPU6050", "PID Control"],
    github: "https://github.com/MokshagnaAnurag",
  },
  {
    title: "Line Following Robot",
    summary: "Designed and built an autonomous line-following robot leveraging infrared (IR) sensor arrays and PID algorithms for rapid, real-time path tracking.",
    year: "2024",
    category: "Robotics",
    stack: ["Arduino", "IR Sensors", "PID Control", "Robotics"],
    github: "https://github.com/MokshagnaAnurag/Line_following_robot",
  },
  {
    title: "Smart Traffic Management System",
    summary: "Developed an AI-powered traffic light system using Raspberry Pi and OpenCV to optimize real-time traffic flow. Implemented vehicle detection and priority-based traffic control, reducing congestion by 30%.",
    year: "2025",
    category: "AI & Vision",
    stack: ["IoT", "Raspberry Pi", "OpenCV"],
    github: "https://github.com/MokshagnaAnurag",
  },
  {
    title: "Cybercrime Reporting Chatbot",
    summary: "Developed intent recognition and sentiment analysis using Scikit-learn to classify user inputs and extract report insights. Launched a Gradio-based interface to enhance accessibility and streamline crime reporting workflows.",
    year: "2024",
    category: "AI & Vision",
    stack: ["Python", "AI", "Gradio", "NLP"],
    github: "https://github.com/MokshagnaAnurag",
  },
  {
    title: "Automatic Vehicle Number Plate Detection",
    summary: "Built a real-time license plate recognition system using OpenCV, achieving over 95% detection accuracy. Optimized image preprocessing for consistent performance in varying lighting and weather conditions.",
    year: "2024",
    category: "AI & Vision",
    stack: ["Python", "OpenCV"],
    github: "https://github.com/MokshagnaAnurag/anpr.raspberrypi",
  },
  {
    title: "Phishing Link Scanner",
    summary: "Developed a scanner analyzing 200+ URLs for phishing risks, integrating VirusTotal API for comprehensive security analysis. Incorporated user-friendly outputs with intuitive, color-coded feedback for enhanced usability.",
    year: "2024",
    category: "Cybersecurity",
    stack: ["Python", "VirusTotal API"],
    github: "https://github.com/MokshagnaAnurag/Phishing-Link-Scanner",
  },
  {
    title: "Voice Gender Recognition Using MATLAB",
    summary: "Designed a voice-based gender classification system using MATLAB. Extracted features like pitch, formants, and MFCCs to train and evaluate machine learning classifiers for accurate gender prediction.",
    year: "2024",
    category: "AI & Vision",
    stack: ["MATLAB", "MFCC", "Audio Processing", "Machine Learning"],
    github: "https://github.com/MokshagnaAnurag/Voice-Gender-Recognition-Using-Matlab",
  },
  {
    title: "Semantic Segmentation in Autonomous Vehicles",
    summary: "Implemented semantic segmentation models using deep learning to classify each pixel in driving scenes. Utilized datasets like Cityscapes and frameworks such as TensorFlow/Keras to enhance perception systems in self-driving applications.",
    year: "2024",
    category: "Autonomous Systems",
    stack: ["Deep Learning", "TensorFlow", "Semantic Segmentation", "Autonomous Driving"],
    github: "https://github.com/MokshagnaAnurag/SEMANTIC-SEGMENTATION-IN-AUTONOMOUS-VEHICLES",
  },
  {
    title: "Map Text Extractor (OCR)",
    summary: "A Python tool for extracting region numbers and place names from topographic maps using OCR. Features multi-stage image processing, CSV export, and visualizations for detected text.",
    year: "2025",
    category: "AI & Vision",
    stack: ["Python", "OpenCV", "EasyOCR", "Image Processing", "CSV"],
    github: "https://github.com/MokshagnaAnurag/OCR",
  },
  {
    title: "AMR (Autonomous Mobile Robot) Package",
    summary: "A professional-grade ROS2 package for an Autonomous Mobile Robot, designed in Fusion 360 & SolidWorks. Features 4WD, integrated LiDAR, full URDF, Gazebo simulation, and modular CAD design.",
    year: "2025",
    category: "Robotics",
    stack: ["ROS2", "Gazebo", "Fusion 360", "SolidWorks", "URDF", "LiDAR"],
    github: "https://github.com/MokshagnaAnurag/amr_robot",
  },
  {
    title: "IoV Navigation Systems",
    summary: "Connected-vehicle routing models that adapt to network conditions and shared telemetry.",
    year: "2023",
    category: "Autonomous Systems",
    stack: ["V2X", "Graph", "Edge AI"],
    github: "https://github.com/MokshagnaAnurag",
  },
  {
    title: "Voice AI · Telugu",
    summary: "Low-resource speech research building toward a natural Telugu voice interface.",
    year: "2023",
    category: "AI & Vision",
    stack: ["NLP", "ASR", "PyTorch"],
    github: "https://github.com/MokshagnaAnurag",
  },
  {
    title: "Steganography in Images (LSB)",
    summary: "Implemented Least Significant Bit (LSB) steganography in Python to encode and decode hidden messages within image pixels securely without visual distortion.",
    year: "2024",
    category: "Cybersecurity",
    stack: ["Python", "Image Processing", "Steganography", "Cryptography"],
    github: "https://github.com/MokshagnaAnurag/Steganography-in-Images-LSB",
  },
];

const getCategoryColor = (cat: string) => {
  switch (cat) {
    case "Robotics": return "#10b981"; // Emerald
    case "Autonomous Systems": return "#06b6d4"; // Cyan
    case "AI & Vision": return "#f59e0b"; // Amber Yellow
    case "Cybersecurity": return "#f97316"; // Crimson Orange
    default: return "#a1a1aa";
  }
};

const getSystemStatus = (idx: number) => {
  const statuses = ["STATUS: ACTIVE", "SYSTEM: OK", "FEED: NOMINAL", "LINK: SECURE"];
  return statuses[idx % statuses.length];
};

const categories = ["All", "Robotics", "Autonomous Systems", "AI & Vision", "Cybersecurity"];

export function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArchive = useMemo(() => {
    return archiveProjects.filter((proj) => {
      const matchesCategory =
        selectedCategory === "All" || proj.category === selectedCategory;
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="work" className="relative py-24 bg-[var(--color-industrial-dark)] border-b-4 border-mech text-[var(--color-industrial-white)]">
      
      {/* Blueprint Grid Lines Overlay */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-20 pointer-events-none"></div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="inline-flex items-center font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[var(--color-industrial-white)] text-[var(--color-industrial-dark)] px-4 py-1 border border-[var(--color-industrial-white)] shadow-[0_0_12px_rgba(255,255,255,0.2),4px_4px_0_rgba(255,255,255,1)] mb-12 relative">
            <span className="mr-2 opacity-70">[&gt;</span>
            DOSSIER
            <span className="ml-2 opacity-70">]</span>
          </div>

          <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            <span className="text-[var(--color-industrial-blue)] text-stroke-mech-white">ENGINEERED</span> SYSTEMS
          </h2>
        </Reveal>

        {/* Featured Projects Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {featuredProjects.map((p, idx) => {
            const cardColors = ["#10b981", "#06b6d4", "#f59e0b", "#f97316", "#3b82f6", "#ec4899", "#8b5cf6", "#ef4444"];
            const accentColor = cardColors[(idx + 4) % cardColors.length];

            return (
            <Reveal key={p.no} delay={idx * 0.1}>
              <article 
                className="group relative h-[450px] w-full overflow-hidden bg-[#050505] border border-zinc-800/50 hover:border-zinc-600 transition-colors duration-500 cursor-pointer"
                style={{ ["--card-accent" as any]: accentColor }}
              >
                
                {/* Background Image & Overlay */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
                
                {/* Diagonal striping subtle overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwaGF0aCBkPSJNMCA0MGw0MC00MEgwbzQwIDB2NDBMMCAwIi8+PC9nPjwvc3ZnPg==')] opacity-30 pointer-events-none mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>

                {/* Top Header */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                  <div className="flex gap-2">
                    <span className="font-mono text-[10px] bg-zinc-950/80 backdrop-blur-md text-zinc-300 px-2.5 py-1 uppercase tracking-widest border border-zinc-800/50">
                      {p.year}
                    </span>
                  </div>
                  
                  {/* Huge Number */}
                  <span className="font-mono text-6xl font-black text-white/5 group-hover:text-white/20 transition-colors duration-500 pointer-events-none select-none">
                    {p.no}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col justify-end">
                  
                  {/* Decorative Elements */}
                  <div className="flex items-center gap-4 mb-5 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="h-[1px] w-8 bg-zinc-500"></div>
                    <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-[0.3em]">SYSTEM SCHEMATIC</span>
                  </div>

                  <div className="flex justify-between items-end gap-6">
                    <div className="flex-1 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-3 text-shadow-sm">
                        {p.title}
                      </h3>
                      
                      <p className="font-mono text-[13px] leading-[1.6] text-zinc-400 mb-6 max-w-md group-hover:text-zinc-200 transition-colors duration-500 line-clamp-2 md:line-clamp-none">
                        {p.summary}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="bg-black/50 backdrop-blur-md text-zinc-300 font-mono text-[10px] px-3 py-1.5 uppercase tracking-wider border border-zinc-800/50 group-hover:border-zinc-600 group-hover:text-white transition-all duration-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-[var(--card-accent)] hover:border-[var(--card-accent)] hover:text-black hover:scale-110 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Hover Frame Corners */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-transparent group-hover:border-[var(--card-accent)] transition-all duration-500 z-20"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-transparent group-hover:border-[var(--card-accent)] transition-all duration-500 z-20"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-transparent group-hover:border-[var(--card-accent)] transition-all duration-500 z-20"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-transparent group-hover:border-[var(--card-accent)] transition-all duration-500 z-20"></div>
              </article>
            </Reveal>
            );
          })}
        </div>

        {/* Complete Project Archive */}
        <div className="mt-32">
          <Reveal>
            <div className="border-t-4 border-[var(--color-industrial-white)] pt-16">
              
              {/* Header section with Filter Buttons and Search Bar */}
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
                <div>
                  <h3 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight">
                    DATA <span className="text-[var(--color-industrial-orange)] text-stroke-mech-white">ARCHIVE</span>
                  </h3>
                </div>

                {/* Search Input */}
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Search systems by stack or title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0d0d11]/80 text-white border border-zinc-800 py-3 pl-12 pr-4 font-mono text-xs focus:outline-none focus:border-zinc-500 focus:bg-[#0d0d11] transition-all rounded-sm placeholder:text-zinc-655"
                  />
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="mb-12 flex flex-wrap gap-2.5">
                {categories.map((cat) => {
                  const catColor = getCategoryColor(cat);
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        borderColor: isActive ? catColor : "rgba(63, 63, 70, 0.4)",
                        color: isActive ? "black" : "#d4d4d8",
                        backgroundColor: isActive ? catColor : "transparent",
                      }}
                      className={`px-4 py-2 font-mono text-[10px] font-bold uppercase transition-all rounded-sm cursor-pointer border hover:border-zinc-500 hover:text-white ${
                        isActive ? "shadow-[0_0_12px_rgba(255,255,255,0.05)]" : ""
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Minimalist Systems Status Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredArchive.map((p, idx) => {
                    const cardColors = ["#10b981", "#06b6d4", "#f59e0b", "#f97316", "#3b82f6", "#ec4899", "#8b5cf6", "#ef4444"];
                    const accentColor = cardColors[idx % cardColors.length];
                    const statusText = getSystemStatus(idx);

                    return (
                      <motion.article
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        key={p.title}
                        className="group bg-[#0d0d11]/70 p-6 flex flex-col justify-between h-[340px] rounded-sm relative transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
                        style={{
                          border: `1px solid ${accentColor}`,
                          boxShadow: `0 0 10px ${accentColor}0f`,
                          // Pass accentColor as custom CSS property for dynamic Tailwind hover highlights
                          ["--accent-color" as any]: accentColor
                        }}
                        whileHover={{
                          boxShadow: `0 0 15px ${accentColor}2b`,
                          borderColor: accentColor
                        }}
                      >
                        <div>
                          {/* Card System Header */}
                          <div className="flex justify-between items-center mb-5 pb-3 border-b border-zinc-900">
                            <span 
                              className="font-mono text-[9px] font-bold uppercase flex items-center gap-1.5"
                              style={{ color: accentColor }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                              {p.category}
                            </span>
                            <span 
                              className="font-mono text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-zinc-900 border border-zinc-850"
                              style={{ color: accentColor }}
                            >
                              {statusText}
                            </span>
                          </div>

                          {/* Project Title */}
                          <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide group-hover:text-[var(--accent-color)] transition-colors mb-2 line-clamp-1">
                            {p.title}
                          </h4>

                          {/* Blockquote Description */}
                          <p className="font-mono text-[11px] leading-[1.6] text-zinc-400 line-clamp-4 pl-3 border-l border-zinc-800">
                            {p.summary}
                          </p>
                        </div>

                        {/* Card Footer Stack & Link */}
                        <div>
                          {/* Tech stack inline flow */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {p.stack.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-[9px] font-medium text-zinc-500 bg-zinc-900/40 border border-zinc-850 px-2 py-0.5 rounded-sm"
                              >
                                {tag}
                              </span>
                            ))}
                            {p.stack.length > 3 && (
                              <span className="font-mono text-[9px] text-zinc-550 self-center pl-1 font-bold">
                                +{p.stack.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Action inspect link */}
                          <div className="border-t border-zinc-900 pt-4 flex justify-between items-center">
                            <span className="font-mono text-[8px] text-zinc-550">
                              REF // 0{idx + 1}-{p.year}
                            </span>
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-zinc-450 group-hover:text-[var(--accent-color)] transition-colors"
                            >
                              <Github size={12} />
                              INSPECT CODE
                              <ArrowUpRight size={10} className="opacity-50" />
                            </a>
                          </div>
                        </div>

                        {/* Category colored bottom hover indicator bar */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                          style={{ backgroundColor: accentColor }}
                        />

                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* No Projects Found */}
              {filteredArchive.length === 0 && (
                <div className="py-20 text-center border border-dashed border-zinc-850 rounded-sm">
                  <p className="font-mono text-sm text-zinc-500">
                    [ NO ARCHIVE SYSTEMS FOUND MATCHING THE SCANNED FILTERS ]
                  </p>
                </div>
              )}

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
