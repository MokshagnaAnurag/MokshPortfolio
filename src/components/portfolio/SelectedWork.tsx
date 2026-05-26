import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Search } from "lucide-react";
import drone from "@/assets/project-drone.jpg";
import cubesat from "@/assets/project-cubesat.jpg";
import driving from "@/assets/project-driving.jpg";
import iov from "@/assets/project-iov.jpg";
import voice from "@/assets/project-voice.jpg";
import lunabot from "@/assets/project-lunabot.png";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

interface ProjectItem {
  no: string;
  title: string;
  summary: string;
  year: string;
  stack: string[];
  image: string;
  span: string;
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
    span: "lg:col-span-7",
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
    span: "lg:col-span-5",
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
    span: "lg:col-span-6",
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
    span: "lg:col-span-6",
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
    summary: "Developed intent recognition and sentiment analysis using Scikit-learn to classify user inputs and extract report insights. Launched a Gradio-based frontend to enhance accessibility and streamline crime reporting workflows.",
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
    <section id="work" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel index="02">Selected Work</SectionLabel>
              <h2 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
                A small archive of <span className="italic">considered</span> engineering.
              </h2>
            </div>
            <p className="max-w-sm text-base text-muted-foreground">
              Featured projects across robotics, aerospace and applied intelligence — each built
              with restraint, attention and clear intent.
            </p>
          </div>
        </Reveal>

        {/* Featured Projects Grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.05} className={p.span}>
              <article className="editorial-card editorial-card-hover group overflow-hidden p-6 md:p-8">
                <div className="overflow-hidden rounded-[1.25rem] bg-surface relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1600}
                    height={1200}
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground border border-hairline shadow-sm backdrop-blur transition hover:scale-105 hover:bg-foreground hover:text-background"
                      title="View GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="mt-7 flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      <span>{p.no}</span>
                      <span className="h-px w-6 bg-foreground/15" />
                      <span>{p.year}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <h3 className="mt-4 font-display text-2xl tracking-tight md:text-3xl">
                        {p.title}
                      </h3>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 md:hidden inline-flex h-7 w-7 items-center justify-center rounded-full border border-hairline bg-background text-muted-foreground transition hover:bg-foreground hover:text-background"
                        title="View GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {p.summary}
                    </p>
                  </div>
                  <div className="hidden shrink-0 flex-col items-end gap-1.5 md:flex">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
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
        <div className="mt-32 md:mt-48">
          <Reveal>
            <div className="border-t border-hairline pt-16">
              <div className="flex flex-col gap-8 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                    Open Source & Research Archive
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md">
                    Additional exploratory packages, system models, and application designs.
                  </p>
                </div>

                {/* Search Input */}
                <div className="relative w-full max-w-xs self-start md:self-end">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/50" />
                  <input
                    type="text"
                    placeholder="Search stack, text..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface/30 border border-hairline rounded-full py-2.5 pl-10 pr-4 text-xs font-mono placeholder:text-muted-foreground/45 focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="mt-10 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-5 py-2 text-[10px] font-mono uppercase tracking-[0.1em] transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-foreground text-background"
                        : "bg-surface/50 hover:bg-surface border border-hairline text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Table List of Archive Projects */}
              <div className="mt-12 border-t border-hairline">
                <AnimatePresence mode="popLayout">
                  {filteredArchive.length > 0 ? (
                    filteredArchive.map((p, idx) => (
                      <motion.div
                        key={p.title}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.02 }}
                        className="group grid grid-cols-12 items-baseline gap-4 border-b border-hairline py-6 transition-colors hover:bg-surface/30 px-2"
                      >
                        {/* Year */}
                        <div className="col-span-12 sm:col-span-1 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/60">
                          {p.year}
                        </div>

                        {/* Title and Summary */}
                        <div className="col-span-12 sm:col-span-6 pr-4">
                          <h4 className="font-display text-xl tracking-tight text-foreground group-hover:text-accent-violet transition-all duration-500 ease-out group-hover:translate-x-1.5">
                            {p.title}
                          </h4>
                          <p className="mt-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                            {p.summary}
                          </p>
                        </div>

                        {/* Stack Tags */}
                        <div className="col-span-10 sm:col-span-4 flex flex-wrap gap-1.5 self-center">
                          {p.stack.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/75 bg-surface border border-hairline/60 rounded px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Link (GitHub redirection) */}
                        <div className="col-span-2 sm:col-span-1 flex justify-end items-center self-center">
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-background text-muted-foreground transition-all hover:bg-foreground hover:text-background hover:scale-105"
                            title="View Repository on GitHub"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-16 text-center text-sm font-mono text-muted-foreground"
                    >
                      No archived projects found matching filters.
                    </motion.div>
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
