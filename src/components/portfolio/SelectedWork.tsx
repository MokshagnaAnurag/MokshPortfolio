import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Search, ExternalLink, ShieldAlert } from "lucide-react";
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
      
      {/* Dark Blueprint Background */}
      <div className="absolute inset-0 bg-blueprint-dark opacity-30 pointer-events-none"></div>

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
          {featuredProjects.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.1}>
              <article className="group bg-[var(--color-industrial-bg)] text-[var(--color-industrial-dark)] border-mech shadow-mech-md transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex flex-col h-full relative clip-mech">
                
                {/* Dossier Header */}
                <div className="border-b-4 border-[var(--color-industrial-dark)] p-4 flex justify-between items-center bg-warning-stripes relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--color-industrial-yellow)] opacity-80 mix-blend-multiply"></div>
                  <div className="relative z-10 flex gap-2 bg-[var(--color-industrial-dark)] text-[var(--color-industrial-yellow)] px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest border border-[var(--color-industrial-dark)]">
                    <ShieldAlert size={12} className="mr-1" />
                    CLASSIFIED: CONFIDENTIAL
                  </div>
                  <span className="relative z-10 font-mono text-[0.7rem] bg-[var(--color-industrial-white)] px-2 py-0.5 border border-[var(--color-industrial-dark)] font-bold uppercase tracking-widest">{p.year}</span>
                </div>
                
                {/* Image Section */}
                <div className="relative border-b-4 border-[var(--color-industrial-dark)] h-64 overflow-hidden bg-gray-900 p-2">
                  <div className="absolute top-4 left-4 z-10">
                     <span className="font-mono text-[3rem] font-black text-[var(--color-industrial-white)] leading-none drop-shadow-md">
                       {p.no}
                     </span>
                  </div>
                  
                  {/* Tech HUD overlay on image */}
                  <div className="absolute inset-2 border border-dashed border-white/30 z-10 pointer-events-none"></div>
                  
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover filter contrast-125 sepia-[0.3] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  <div className="absolute bottom-4 right-4 z-10">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 w-12 items-center justify-center bg-[var(--color-industrial-blue)] text-[var(--color-industrial-white)] border-mech-sm transition-all hover:bg-[var(--color-industrial-orange)] hover:text-black shadow-[4px_4px_0_rgba(10,10,10,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col bg-[var(--color-industrial-white)] relative">
                  
                  {/* Decorative barcode */}
                  <div className="absolute top-8 right-8 font-mono text-[0.5rem] tracking-[-0.1em] text-[var(--color-industrial-gray)] opacity-50 transform rotate-90 origin-top-right">
                    |||| || ||| || |||| | |||
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 pr-10">
                    {p.title}
                  </h3>
                  <p className="font-mono text-sm leading-[1.8] text-gray-800 flex-1 border-l-4 border-[var(--color-industrial-blue)] pl-4">
                    {p.summary}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t-2 border-dashed border-[var(--color-industrial-gray)]">
                    <span className="font-mono text-[0.6rem] uppercase tracking-widest text-gray-500 mr-2 self-center font-bold">
                      MODULES:
                    </span>
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="bg-[var(--color-industrial-dark)] text-[var(--color-industrial-green)] font-mono text-[0.65rem] font-bold px-2 py-1 uppercase"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Complete Project Archive */}
        <div className="mt-32">
          <Reveal>
            <div className="border-t-4 border-[var(--color-industrial-white)] pt-16">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
                <div>
                  <h3 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight">
                    DATA <span className="text-[var(--color-industrial-orange)] text-stroke-mech-white">ARCHIVE</span>
                  </h3>
                </div>

                {/* Search Input */}
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-industrial-dark)]" />
                  <input
                    type="text"
                    placeholder="SCAN ARCHIVES..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[var(--color-industrial-bg)] text-[var(--color-industrial-dark)] border-mech py-3 pl-12 pr-4 font-mono text-sm focus:outline-none focus:bg-[var(--color-industrial-white)] transition-colors shadow-mech-sm placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="mb-12 flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`border-mech-sm px-4 py-2 font-mono text-xs font-bold uppercase transition-all shadow-[2px_2px_0_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[var(--color-industrial-orange)] text-[var(--color-industrial-dark)] border-[var(--color-industrial-orange)] shadow-none translate-x-[2px] translate-y-[2px]"
                        : "bg-transparent text-[var(--color-industrial-white)] border-[var(--color-industrial-white)] hover:bg-[var(--color-industrial-blue)]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Grid List of Archive Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredArchive.length > 0 ? (
                    filteredArchive.map((p, idx) => (
                      <motion.div
                        key={p.title}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="group bg-[var(--color-industrial-bg)] text-[var(--color-industrial-dark)] border-mech p-6 flex flex-col transition-all hover:bg-[var(--color-industrial-white)] hover:-translate-y-1 shadow-mech-md clip-mech-alt"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <span className="font-mono text-xs font-bold px-2 py-1 bg-[var(--color-industrial-yellow)] border border-[var(--color-industrial-dark)]">
                            {p.year}
                          </span>
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 border-mech-sm bg-[var(--color-industrial-white)] hover:bg-[var(--color-industrial-orange)] hover:text-white transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                        
                        <h4 className="font-display text-xl font-black uppercase mb-3 leading-tight group-hover:text-[var(--color-industrial-blue)] transition-colors">
                          {p.title}
                        </h4>
                        
                        <p className="font-mono text-sm text-gray-700 leading-relaxed mb-6 flex-1">
                          {p.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-dashed border-gray-400">
                          {p.stack.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] font-bold uppercase px-2 py-1 bg-[var(--color-industrial-dark)] text-[var(--color-industrial-green)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center font-mono text-gray-400 font-bold tracking-widest border border-dashed border-gray-600">
                      [ NO DATA FOUND IN CURRENT QUERY ]
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
