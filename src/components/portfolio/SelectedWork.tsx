import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Search,
  Globe,
  FileText,
  BookOpen,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import drone from "@/assets/project-drone.jpg";
import cubesat from "@/assets/project-cubesat.jpg";
import driving from "@/assets/project-driving.jpg";
import lunabot from "@/assets/project-lunabot.png";
import { Reveal } from "./Reveal";

interface ProjectItem {
  no: string;
  title: string;
  category: string;
  status: "ACTIVE" | "COMPLETED" | "ONGOING" | "PUBLISHED";
  summary: string;
  year: string;
  stack: string[];
  image: string;
  problem: string;
  methodology: string[];
  challenges: string[];
  results: string[];
  architecture: string[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
    paper?: string;
  };
}

const featuredProjects: ProjectItem[] = [
  {
    no: "01",
    title: "Autonomous Drone Systems",
    category: "AEROSPACE & UAV",
    status: "ONGOING",
    summary:
      "Designed and validated autonomous UAV simulation workflows using PX4, ROS 2, and ArduPilot.",
    year: "2026",
    stack: ["PX4", "ROS 2", "ArduPilot", "Gazebo"],
    image: drone,
    problem:
      "Develop a UAV simulation platform capable of autonomous flight in GPS-denied environments.",
    methodology: [
      "Integrated PX4 with ROS 2 for autonomous flight control.",
      "Implemented Visual SLAM using RTAB-Map for localization.",
      "Built simulation environments in Gazebo for testing mission scenarios.",
    ],
    challenges: [
      "Flight controller configuration.",
      "Visual SLAM localization.",
      "Simulation parameter tuning.",
    ],
    results: [
      "✓ Stable waypoint navigation",
      "✓ Successful Gazebo integration",
      "✓ Real-time telemetry monitoring",
    ],
    architecture: [
      "Camera/IMU",
      "   │",
      "Visual SLAM",
      "   │",
      "ROS2 Nav",
      "   │",
      "PX4 Flight Ctl",
    ],
    links: { docs: "https://docs.px4.io" },
  },
  {
    no: "02",
    title: "CubeSat 1U",
    category: "SPACE SYSTEMS",
    status: "PUBLISHED",
    summary:
      "Designed and developed a modular 1U CubeSat platform with onboard computer, telemetry, and communication subsystems.",
    year: "2025-26",
    stack: ["RP2040", "LoRaWAN", "Embedded Systems", "Telemetry", "Python"],
    image: cubesat,
    problem:
      "Design a robust and modular 1U CubeSat architecture that handles real-time telemetry and power distribution under constrained resources.",
    methodology: [
      "Developed custom PCBs for the OBC.",
      "Programmed an RTOS on STM32 for task scheduling.",
      "Implemented LoRaWAN for ground station communication.",
    ],
    challenges: [
      "Strict power budgets.",
      "RTOS task starvation.",
      "Signal integrity in RF modules.",
    ],
    results: [
      "✓ Successful sensor data transmission over LoRa",
      "✓ Modular 1U hardware design",
      "✓ Reliable multi-tasking under 100ms deadlines",
    ],
    architecture: [
      "Sensors & Solar Panels",
      "       │",
      "Power Management Unit",
      "       │",
      "STM32 OBC (RTOS)",
      "       │",
      "LoRaWAN Transceiver",
    ],
    links: {},
  },
  {
    no: "03",
    title: "Low-Cost Autonomous Mobile Robot",
    category: "ROBOTICS & AMR",
    status: "COMPLETED",
    summary:
      "Developed a low-cost Autonomous Mobile Robot using ROS 2, Cartographer SLAM, Navigation2, Raspberry Pi 4B, and RP-LiDAR A1.",
    year: "2025",
    stack: ["ROS 2", "Cartographer", "Nav2", "RP-LiDAR", "Raspberry Pi"],
    image: driving,
    problem:
      "Develop an indoor autonomous mobile robot capable of mapping, localization, and autonomous navigation.",
    methodology: [
      "Built the robot using Raspberry Pi 4B and RP-LiDAR A1.",
      "Implemented LiDAR-based mapping using Cartographer SLAM.",
      "Integrated Navigation2 for autonomous waypoint navigation and obstacle avoidance.",
    ],
    challenges: [
      "LiDAR calibration.",
      "Map quality optimization.",
      "Navigation parameter tuning.",
    ],
    results: [
      "✓ Autonomous indoor navigation",
      "✓ Successful map generation",
      "✓ Reliable obstacle avoidance",
    ],
    architecture: [
      "2D LiDAR",
      "   │",
      "Perception Node",
      "   │",
      "Trajectory Planner",
      "   │",
      "Kinematic Controller",
    ],
    links: {
      github: "https://github.com/MokshagnaAnurag/Self_driving_bot",
    },
  },
  {
    no: "04",
    title: "Autonomous Lunabot",
    category: "ROBOTICS HARDWARE",
    status: "COMPLETED",
    summary:
      "Developed an autonomous lunar rover simulation using ROS 2 and Navigation2.",
    year: "2025-26",
    stack: ["ROS2", "Python", "Nav2", "RViz"],
    image: lunabot,
    problem:
      "Navigate a simulated complex lunar terrain autonomously to reach specific excavation zones while avoiding craters.",
    methodology: [
      "Integrated custom launch files for robot bringup.",
      "Configured Nav2 stack for challenging terrains.",
      "Visualized real-time costmaps in RViz.",
    ],
    challenges: [
      "Tuning costmap parameters for non-flat terrain.",
      "Recovery behaviors when stuck in craters.",
    ],
    results: [
      "✓ 90% success rate in waypoint navigation",
      "✓ Robust obstacle avoidance",
      "✓ Comprehensive RViz visualization setups",
    ],
    architecture: [
      "Depth Camera",
      "   │",
      "Terrain Costmap",
      "   │",
      "Nav2 BT Navigator",
      "   │",
      "Locomotion Drive",
    ],
    links: {
      github: "https://github.com/MokshagnaAnurag/LUNA_BOT",
    },
  },
];

interface ArchiveItem {
  title: string;
  summary: string;
  year: string;
  category: "Robotics" | "Autonomous Systems" | "AI & Vision" | "Cybersecurity";
  stack: string[];
  github?: string;
}

const archiveProjects: ArchiveItem[] = [
  {
    title: "Self-Driving Robot with RPLIDAR C1",
    summary:
      "Engineered an autonomous navigation system leveraging ROS and Python. Integrated LiDAR-based SLAM for precise obstacle detection and implemented real-time path planning algorithms for seamless movement.",
    year: "2025",
    category: "Robotics",
    stack: ["ROS", "Python", "LiDAR", "SLAM"],
    github: "https://github.com/MokshagnaAnurag/Self_driving_bot",
  },
  {
    title: "Self-Balancing Robot",
    summary:
      "Built a two-wheeled self-balancing robot using the MPU6050 sensor for tilt detection and implemented PID control for stability. Tuned PID parameters for real-time response and smooth balancing on various surfaces.",
    year: "2024",
    category: "Robotics",
    stack: ["Arduino", "MPU6050", "PID Control"],
  },
  {
    title: "Line Following Robot",
    summary:
      "Designed and built an autonomous line-following robot leveraging infrared (IR) sensor arrays and PID algorithms for rapid, real-time path tracking.",
    year: "2024",
    category: "Robotics",
    stack: ["Arduino", "IR Sensors", "PID Control", "Robotics"],
    github: "https://github.com/MokshagnaAnurag/Line_following_robot",
  },
  {
    title: "AeroMocap ROS",
    summary:
      "An inside-out multi-agent motion capture system for drones, built with OpenCV and React. Features real-time 3D triangulation, trajectory planning, and PID control via a serial-connected ESP32.",
    year: "2026",
    category: "Robotics",
    stack: ["Python", "OpenCV", "React", "ESP32", "Three.js"],
    github: "https://github.com/MokshagnaAnurag/AeroMocap-ROS",
  },
  {
    title: "Smart Traffic Management System",
    summary:
      "Developed an AI-powered traffic light system using Raspberry Pi and OpenCV to optimize real-time traffic flow. Implemented vehicle detection and priority-based traffic control, reducing congestion by 30%.",
    year: "2025",
    category: "AI & Vision",
    stack: ["IoT", "Raspberry Pi", "OpenCV"],
  },
  {
    title: "Cybercrime Reporting Chatbot",
    summary:
      "Developed intent recognition and sentiment analysis using Scikit-learn to classify user inputs and extract report insights. Launched a Gradio-based interface to enhance accessibility and streamline crime reporting workflows.",
    year: "2024",
    category: "AI & Vision",
    stack: ["Python", "AI", "Gradio", "NLP"],
  },
  {
    title: "Automatic Vehicle Number Plate Detection",
    summary:
      "Built a real-time license plate recognition system using OpenCV, achieving over 95% detection accuracy. Optimized image preprocessing for consistent performance in varying lighting and weather conditions.",
    year: "2024",
    category: "AI & Vision",
    stack: ["Python", "OpenCV"],
    github: "https://github.com/MokshagnaAnurag/anpr.raspberrypi",
  },
  {
    title: "Phishing Link Scanner",
    summary:
      "Developed a scanner analyzing 200+ URLs for phishing risks, integrating VirusTotal API for comprehensive security analysis. Incorporated user-friendly outputs with intuitive, color-coded feedback for enhanced usability.",
    year: "2024",
    category: "Cybersecurity",
    stack: ["Python", "VirusTotal API"],
    github: "https://github.com/MokshagnaAnurag/Phishing-Link-Scanner",
  },
  {
    title: "Voice Gender Recognition Using MATLAB",
    summary:
      "Designed a voice-based gender classification system using MATLAB. Extracted features like pitch, formants, and MFCCs to train and evaluate machine learning classifiers for accurate gender prediction.",
    year: "2024",
    category: "AI & Vision",
    stack: ["MATLAB", "MFCC", "Audio Processing", "Machine Learning"],
    github:
      "https://github.com/MokshagnaAnurag/Voice-Gender-Recognition-Using-Matlab",
  },
  {
    title: "Semantic Segmentation in Autonomous Vehicles",
    summary:
      "Implemented semantic segmentation models using deep learning to classify each pixel in driving scenes. Utilized datasets like Cityscapes and frameworks such as TensorFlow/Keras to enhance perception systems in self-driving applications.",
    year: "2024",
    category: "Autonomous Systems",
    stack: [
      "Deep Learning",
      "TensorFlow",
      "Semantic Segmentation",
      "Autonomous Driving",
    ],
    github:
      "https://github.com/MokshagnaAnurag/SEMANTIC-SEGMENTATION-IN-AUTONOMOUS-VEHICLES",
  },
  {
    title: "Map Text Extractor (OCR)",
    summary:
      "A Python tool for extracting region numbers and place names from topographic maps using OCR. Features multi-stage image processing, CSV export, and visualizations for detected text.",
    year: "2025",
    category: "AI & Vision",
    stack: ["Python", "OpenCV", "EasyOCR", "Image Processing", "CSV"],
    github: "https://github.com/MokshagnaAnurag/OCR",
  },
  {
    title: "AMR (Autonomous Mobile Robot) Package",
    summary:
      "A professional-grade ROS2 package for an Autonomous Mobile Robot, designed in Fusion 360 & SolidWorks. Features 4WD, integrated LiDAR, full URDF, Gazebo simulation, and modular CAD design.",
    year: "2025",
    category: "Robotics",
    stack: ["ROS2", "Gazebo", "Fusion 360", "SolidWorks", "URDF", "LiDAR"],
    github: "https://github.com/MokshagnaAnurag/amr_robot",
  },
  {
    title: "Voice AI · Telugu",
    summary:
      "Low-resource speech research building toward a natural Telugu voice interface.",
    year: "2023",
    category: "AI & Vision",
    stack: ["NLP", "ASR", "PyTorch"],
    github: "https://github.com/MokshagnaAnurag",
  },
  {
    title: "Steganography in Images (LSB)",
    summary:
      "Implemented Least Significant Bit (LSB) steganography in Python to encode and decode hidden messages within image pixels securely without visual distortion.",
    year: "2024",
    category: "Cybersecurity",
    stack: ["Python", "Image Processing", "Steganography", "Cryptography"],
    github:
      "https://github.com/MokshagnaAnurag/Steganography-in-Images-LSB",
  },
];

const getCategoryColor = (cat: string) => {
  switch (cat) {
    case "Robotics":
      return "#10b981";
    case "Autonomous Systems":
      return "#06b6d4";
    case "AI & Vision":
      return "#f59e0b";
    case "Cybersecurity":
      return "#f97316";
    default:
      return "#a1a1aa";
  }
};

const getSystemStatus = (idx: number) => {
  const statuses = [
    "STATUS: ACTIVE",
    "SYSTEM: OK",
    "FEED: NOMINAL",
    "LINK: SECURE",
  ];
  return statuses[idx % statuses.length];
};

const categories = [
  "All",
  "Robotics",
  "Autonomous Systems",
  "AI & Vision",
  "Cybersecurity",
];

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
        proj.stack.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "🟢";
      case "COMPLETED":
        return "✅";
      case "ONGOING":
        return "🚧";
      case "PUBLISHED":
        return "📝";
      default:
        return "🟢";
    }
  };

  return (
    <>
      {/* Engineered Systems Showcase - White Background */}
      <section
        id="work"
        className="relative py-24 bg-[var(--color-industrial-white)] border-b-4 border-mech text-[var(--color-industrial-dark)]"
      >
        {/* Blueprint Grid Lines Overlay */}
        <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none"></div>

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
          <Reveal>
            <div className="inline-flex items-center font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[var(--color-industrial-dark)] text-[var(--color-industrial-white)] px-4 py-1 border border-[var(--color-industrial-dark)] shadow-[0_0_12px_rgba(0,0,0,0.1),4px_4px_0_rgba(0,0,0,1)] mb-12 relative">
              <span className="mr-2 opacity-70">[&gt;</span>
              DOSSIER
              <span className="ml-2 opacity-70">]</span>
            </div>

            <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-black uppercase tracking-tighter mb-8 leading-[0.9] text-[var(--color-industrial-dark)]">
              <span className="text-[var(--color-industrial-blue)] text-stroke-mech-2">
                ENGINEERED
              </span>{" "}
              SYSTEMS
            </h2>
          </Reveal>

          {/* Featured Projects Grid with Detailed Layout */}
          <div className="mt-16 flex flex-col gap-12">
            {featuredProjects.map((p, idx) => {
              const cardColors = ["#10b981", "#06b6d4", "#f59e0b", "#f97316"];
              const accentColor = cardColors[idx % cardColors.length];

              return (
                <Reveal key={p.no} delay={idx * 0.1}>
                  <article
                    className="group relative w-full flex flex-col lg:flex-row overflow-hidden bg-white border border-black/10 hover:border-black transition-all duration-500 shadow-[8px_8px_0_rgba(0,0,0,0.15)] hover:shadow-[12px_12px_0_var(--card-accent)]"
                    style={{ ["--card-accent" as any]: accentColor }}
                  >
                    {/* Color Glow Effect */}
                    <div
                      className="absolute top-1/2 right-1/4 w-[30vw] h-[30vw] -translate-y-1/2 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                      style={{ backgroundColor: accentColor }}
                    ></div>

                    <div className="flex flex-col lg:flex-row h-full w-full relative z-10">

                      {/* Left Column: Image and Arch Diagram */}
                      <div className="w-full lg:w-[40%] flex flex-col border-b lg:border-b-0 lg:border-r border-black/10 relative">
                        {/* Image Box */}
                        <div className="relative aspect-video lg:aspect-auto lg:flex-1 overflow-hidden group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-[var(--card-accent)] group-hover:after:mix-blend-overlay group-hover:after:opacity-20">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"></div>
                          <span className="absolute bottom-4 left-6 font-display text-6xl font-black text-black/10 group-hover:text-[var(--card-accent)] group-hover:opacity-30 transition-colors duration-500 select-none">
                            {p.no}
                          </span>
                        </div>

                        {/* Arch Diagram Box */}
                        <div className="p-6 bg-gray-50 relative overflow-hidden group-hover:bg-gray-100 transition-colors duration-500">
                          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--card-accent)] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                          <h5 className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold mb-4 opacity-60 text-black flex items-center gap-2 group-hover:opacity-100 transition-opacity">
                            <ChevronRight
                              size={12}
                              className="text-[var(--card-accent)]"
                            />
                            Architecture
                          </h5>
                          <pre className="font-mono text-[10px] leading-tight text-gray-500 group-hover:text-black transition-colors">
                            {p.architecture.join("\n")}
                          </pre>
                        </div>
                      </div>

                      {/* Right Column: Content */}
                      <div className="w-full lg:w-[60%] p-6 md:p-8 flex flex-col justify-between bg-white">
                        <div>
                          {/* Category Tag */}
                          <div className="mb-3">
                            <span
                              className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 bg-gray-50 border border-gray-200 group-hover:border-[var(--card-accent)] transition-colors shadow-sm text-black"
                              style={{ color: accentColor }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: accentColor }}
                              ></span>
                              {p.category || "ENGINEERED SYSTEM"}
                            </span>
                          </div>

                          {/* Title & Badge */}
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                            <h3 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-black leading-none group-hover:text-[var(--card-accent)] transition-colors duration-300">
                              {p.title}
                            </h3>
                            <span className="inline-flex shrink-0 items-center gap-2 font-mono text-[10px] font-bold uppercase border border-gray-300 bg-gray-50 text-gray-700 px-3 py-1.5 shadow-[2px_2px_0_rgba(0,0,0,0.1)] group-hover:border-[var(--card-accent)] transition-colors">
                              <span style={{ color: accentColor }}>
                                {getStatusIcon(p.status)}
                              </span>
                              {p.status}
                            </span>
                          </div>

                          {/* Summary Blockquote */}
                          <blockquote
                            className="border-l-4 pl-4 mb-6 font-mono text-xs leading-relaxed text-gray-600 italic bg-gradient-to-r from-[var(--card-accent)]/10 to-transparent py-2 group-hover:text-black transition-colors"
                            style={{ borderColor: accentColor }}
                          >
                            &ldquo;{p.summary}&rdquo;
                          </blockquote>

                          {/* Tech Stack Chips */}
                          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-dashed border-gray-200">
                            {p.stack.map((s) => (
                              <span
                                key={s}
                                className="bg-gray-50 text-gray-700 font-mono text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider border border-gray-200 hover:bg-[var(--card-accent)] hover:text-white hover:border-[var(--card-accent)] transition-all duration-300 cursor-default shadow-sm"
                              >
                                {s}
                              </span>
                            ))}
                          </div>

                          {/* Details Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 relative">
                            {/* Problem */}
                            <div className="group/item">
                              <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-hover/item:text-[var(--card-accent)] transition-colors">
                                Problem Statement
                              </h4>
                              <p className="font-mono text-[11px] leading-relaxed text-gray-700">
                                {p.problem}
                              </p>
                            </div>

                            {/* Methodology */}
                            <div className="group/item">
                              <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-hover/item:text-[var(--card-accent)] transition-colors">
                                Methodology
                              </h4>
                              <ul className="space-y-1">
                                {p.methodology.map((m, i) => (
                                  <li
                                    key={i}
                                    className="font-mono text-[11px] leading-relaxed text-gray-700 flex items-start gap-2"
                                  >
                                    <span
                                      className="mt-0.5"
                                      style={{ color: accentColor }}
                                    >
                                      •
                                    </span>
                                    {m}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Challenges */}
                            <div className="group/item">
                              <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-hover/item:text-red-500 transition-colors">
                                Challenges
                              </h4>
                              <ul className="space-y-1">
                                {p.challenges.map((c, i) => (
                                  <li
                                    key={i}
                                    className="font-mono text-[11px] leading-relaxed text-gray-700 flex items-start gap-2"
                                  >
                                    <span className="text-red-500 mt-0.5">
                                      •
                                    </span>
                                    {c}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Results */}
                            <div className="group/item">
                              <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-hover/item:text-green-600 transition-colors">
                                Results
                              </h4>
                              <ul className="space-y-1">
                                {p.results.map((r, i) => (
                                  <li
                                    key={i}
                                    className="font-mono text-[11px] leading-relaxed font-bold text-black flex items-start gap-2"
                                  >
                                    <span className="text-green-600 mt-0.5">
                                      ✓
                                    </span>
                                    {r.replace("✓ ", "")}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Action Links */}
                        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-gray-200">
                          {p.links.github && (
                            <a
                              href={p.links.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase px-4 py-2 border border-black/20 text-black hover:bg-[var(--card-accent)] hover:text-white hover:border-[var(--card-accent)] transition-all duration-300 shadow-[2px_2px_0_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            >
                              <Github size={14} /> Source Code
                            </a>
                          )}
                          {p.links.demo && (
                            <a
                              href={p.links.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase px-4 py-2 border border-black/20 text-black hover:bg-[var(--card-accent)] hover:text-white hover:border-[var(--card-accent)] transition-all duration-300 shadow-[2px_2px_0_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            >
                              <Globe size={14} /> Demo
                            </a>
                          )}
                          {p.links.docs && (
                            <a
                              href={p.links.docs}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase px-4 py-2 border border-black/20 text-black hover:bg-[var(--card-accent)] hover:text-white hover:border-[var(--card-accent)] transition-all duration-300 shadow-[2px_2px_0_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            >
                              <FileText size={14} /> Documentation
                            </a>
                          )}
                          {p.links.paper && (
                            <a
                              href={p.links.paper}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase px-4 py-2 border border-black/20 text-black hover:bg-[var(--card-accent)] hover:text-white hover:border-[var(--card-accent)] transition-all duration-300 shadow-[2px_2px_0_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                            >
                              <BookOpen size={14} /> Research Paper
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete Project Archive Section (Black Background) */}
      <section
        id="archive"
        className="relative py-32 bg-[var(--color-industrial-dark)] text-[var(--color-industrial-white)] border-b-4 border-mech"
      >
        {/* Dark Blueprint Overlay */}
        <div className="absolute inset-0 bg-blueprint-dark opacity-20 pointer-events-none"></div>

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
          <Reveal>
            <div className="pt-16">
              {/* Header section with Filter Buttons and Search Bar */}
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
                <div>
                  <h3 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-[var(--color-industrial-white)]">
                    DATA{" "}
                    <span className="text-[var(--color-industrial-orange)] text-stroke-mech-white">
                      ARCHIVE
                    </span>
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
                    className="w-full bg-[#0d0d11]/80 text-[var(--color-industrial-white)] border-2 border-zinc-800 py-3 pl-12 pr-4 font-mono text-xs focus:outline-none focus:border-[var(--color-industrial-blue)] focus:shadow-[4px_4px_0_var(--color-industrial-blue)] transition-all rounded-none placeholder:text-gray-500"
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
                        borderColor: isActive
                          ? catColor
                          : "rgba(63, 63, 70, 0.4)",
                        color: isActive
                          ? "black"
                          : "var(--color-industrial-white)",
                        backgroundColor: isActive ? catColor : "transparent",
                      }}
                      className={`px-4 py-2 font-mono text-[10px] font-bold uppercase transition-all cursor-pointer border-2 hover:border-[var(--color-industrial-blue)] hover:text-[var(--color-industrial-blue)] ${
                        isActive
                          ? "shadow-[2px_2px_0_rgba(255,255,255,0.15)]"
                          : "shadow-[2px_2px_0_transparent] hover:shadow-[2px_2px_0_var(--color-industrial-blue)]"
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
                    const cardColors = [
                      "#10b981",
                      "#06b6d4",
                      "#f59e0b",
                      "#f97316",
                      "#3b82f6",
                      "#ec4899",
                      "#8b5cf6",
                      "#ef4444",
                    ];
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
                        className="group bg-[#0d0d11]/60 p-6 flex flex-col justify-between h-[340px] relative transition-all duration-300 overflow-hidden cursor-pointer shadow-[4px_4px_0_rgba(0,0,0,0.5)]"
                        style={{
                          border: `2px solid rgba(63, 63, 70, 0.4)`,
                          ["--accent-color" as any]: accentColor,
                        }}
                        whileHover={{
                          translateY: -4,
                          translateX: -4,
                          boxShadow: `8px 8px 0 rgba(0,0,0,0.5)`,
                          borderColor: accentColor,
                        }}
                      >
                        <div>
                          {/* Card System Header */}
                          <div className="flex justify-between items-center mb-5 pb-3 border-b-2 border-dashed border-zinc-800">
                            <span
                              className="font-mono text-[9px] font-bold uppercase flex items-center gap-1.5"
                              style={{ color: accentColor }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-none"
                                style={{ backgroundColor: accentColor }}
                              />
                              {p.category}
                            </span>
                            <span
                              className="font-mono text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 border border-zinc-800 text-zinc-300 bg-zinc-900/50"
                              style={{ color: accentColor }}
                            >
                              {statusText}
                            </span>
                          </div>

                          {/* Project Title */}
                          <h4 className="font-display text-lg font-black uppercase text-[var(--color-industrial-white)] tracking-wide group-hover:text-[var(--accent-color)] transition-colors mb-2 line-clamp-1">
                            {p.title}
                          </h4>

                          {/* Description */}
                          <p className="font-mono text-[11px] leading-[1.6] text-zinc-400 line-clamp-4 pl-3 border-l-2 border-zinc-700">
                            {p.summary}
                          </p>
                        </div>

                        {/* Card Footer Stack & Link */}
                        <div>
                          {/* Tech stack inline flow */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {p.stack.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-[9px] font-bold text-zinc-400 bg-zinc-900/60 border border-zinc-800 px-2 py-0.5"
                              >
                                {tag}
                              </span>
                            ))}
                            {p.stack.length > 3 && (
                              <span className="font-mono text-[9px] text-zinc-500 self-center pl-1 font-bold">
                                +{p.stack.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Action inspect link */}
                          <div className="border-t-2 border-dashed border-zinc-800 pt-4 flex justify-between items-center">
                            <span className="font-mono text-[8px] text-zinc-500 font-bold">
                              REF // 0{idx + 1}-{p.year}
                            </span>
                            {p.github ? (
                              <a
                                href={p.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-[var(--color-industrial-white)] group-hover:text-[var(--accent-color)] transition-colors"
                              >
                                <Github size={12} />
                                INSPECT CODE
                                <ArrowUpRight size={10} className="opacity-50" />
                              </a>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-zinc-600 cursor-not-allowed">
                                <Search size={12} />
                                PRIVATE SYSTEM
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Category colored bottom hover indicator bar */}
                        <div
                          className="absolute bottom-0 left-0 right-0 h-[4px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                          style={{ backgroundColor: accentColor }}
                        />
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* No Projects Found */}
              {filteredArchive.length === 0 && (
                <div className="py-20 text-center border-2 border-dashed border-zinc-800 bg-[#0d0d11]/40 mt-6">
                  <p className="font-mono text-sm text-zinc-500 font-bold">
                    [ NO ARCHIVE SYSTEMS FOUND MATCHING THE SCANNED FILTERS ]
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
