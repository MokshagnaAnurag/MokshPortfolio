import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldAlert } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const allProjects = [
  {
    title: "Map Text Extractor (OCR)",
    summary: "Extracted alphanumeric data from cadastral maps using OpenCV and EasyOCR, achieving 93%+ accuracy and reducing manual effort by 70%. Exported structured results to CSV.",
    year: "2025",
    stack: ["Python", "OpenCV", "EasyOCR", "GUI"],
    github: "https://github.com/MokshagnaAnurag"
  },
  {
    title: "Self-Balancing Robot",
    summary: "Two-wheeled self-balancing robot using Arduino Nano, MPU6050 IMU, and adaptive PID control with Kalman filtering. Includes Bluetooth-based Android remote control.",
    year: "2024",
    stack: ["Arduino", "C++", "PID Control", "IMU"],
    github: "https://github.com/MokshagnaAnurag"
  },
  {
    title: "Auto Vehicle Number Plate Detection",
    summary: "Real-time number plate detection using YOLO and OpenCV at 20+ FPS. Integrated Tesseract OCR for text extraction and onboard logging.",
    year: "2025",
    stack: ["Python", "OpenCV", "Deep Learning", "YOLO"],
    github: "https://github.com/MokshagnaAnurag"
  },
  {
    title: "Semantic Segmentation in Autonomous Vehicles",
    summary: "DeepLabV3+ with ResNet-50 backbone for road scene understanding. Converted to ONNX and deployed on NVIDIA Jetson Nano with 30 FPS inference.",
    year: "2025",
    stack: ["Python", "PyTorch", "Computer Vision"],
    github: "https://github.com/MokshagnaAnurag"
  },
  {
    title: "Self-Driving Robot with RPLIDAR A1",
    summary: "ROS-based mobile robot with LiDAR SLAM, loop closure, and A*/RRT* path planning. Validated in Gazebo simulation before physical deployment with sensor fusion.",
    year: "2024",
    stack: ["ROS", "Python", "LiDAR", "Gazebo"],
    github: "https://github.com/MokshagnaAnurag/Self_driving_bot"
  },
  {
    title: "Autonomous Lunabot",
    summary: "Engineered an autonomous robotic platform using ROS 2, Nav2, and RViz. Developed web-based robot control interface using ros2 bridge and JavaScript.",
    year: "2025",
    stack: ["ROS 2", "Python", "JavaScript", "Nav2"],
    github: "https://github.com/MokshagnaAnurag/LUNA_BOT"
  },
  {
    title: "Autonomous Drone Systems",
    summary: "Designed flight stack and perception research on PX4-driven UAVs. Simulated in Gazebo with LiDAR-camera sensor fusion for obstacle avoidance.",
    year: "2025",
    stack: ["PX4", "ROS2", "SLAM", "ArduPilot"],
    github: "https://github.com/MokshagnaAnurag/ardupilot-gazebo-gimbal-simulation"
  },
  {
    title: "CubeSat Prototype",
    summary: "Architected 1U CubeSat platform with RP2040 OBC, LoRaWAN telemetry, and multi-sensor arrays. Built ground station monitoring interfaces.",
    year: "2025",
    stack: ["STM32", "RP2040", "Telemetry", "LoRaWAN"],
    github: "https://github.com/MokshagnaAnurag"
  }
];

export function ProjectDrawer({ isOpen, onClose }: DrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-industrial-dark)] border-l-4 border-mech z-[101] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex flex-col clip-mech-alt"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b-4 border-mech bg-[var(--color-industrial-bg)] text-[var(--color-industrial-dark)] bg-warning-stripes relative overflow-hidden">
              <div className="absolute inset-0 bg-[var(--color-industrial-orange)] opacity-90 mix-blend-multiply"></div>
              
              <div className="relative z-10 flex items-center gap-2">
                <ShieldAlert size={20} className="text-[var(--color-industrial-dark)]" />
                <h2 className="font-display text-xl font-black uppercase tracking-tight">
                  PROJECT DIRECTORY
                </h2>
              </div>
              
              <button
                onClick={onClose}
                className="relative z-10 p-2 bg-[var(--color-industrial-dark)] text-[var(--color-industrial-white)] hover:bg-[var(--color-industrial-white)] hover:text-[var(--color-industrial-dark)] border-2 border-[var(--color-industrial-dark)] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-blueprint-dark relative">
              <div className="absolute top-4 right-4 font-mono text-[0.6rem] font-bold text-[var(--color-industrial-gray)] opacity-50 tracking-widest">
                // SECURE ACCESS GRANTED
              </div>
              
              {allProjects.map((p, i) => (
                <div 
                  key={i} 
                  className="bg-[var(--color-industrial-white)] border-mech p-5 shadow-[4px_4px_0_rgba(10,10,10,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group relative clip-mech"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-[0.65rem] font-bold px-2 py-0.5 bg-[var(--color-industrial-yellow)] border border-[var(--color-industrial-dark)] text-[var(--color-industrial-dark)]">
                      {p.year}
                    </span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--color-industrial-blue)] hover:text-[var(--color-industrial-orange)] transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  
                  <h3 className="font-display text-lg font-black uppercase leading-tight mb-2 text-[var(--color-industrial-dark)]">
                    {p.title}
                  </h3>
                  
                  <p className="font-mono text-xs text-gray-700 leading-relaxed mb-4 border-l-2 border-[var(--color-industrial-orange)] pl-2">
                    {p.summary}
                  </p>

                  <div className="flex flex-wrap gap-1 border-t border-dashed border-gray-400 pt-3">
                    {p.stack.map(s => (
                      <span key={s} className="font-mono text-[9px] font-bold uppercase bg-[var(--color-industrial-dark)] text-[var(--color-industrial-green)] px-1.5 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t-4 border-[var(--color-industrial-dark)] bg-[var(--color-industrial-bg)] font-mono text-[0.6rem] uppercase tracking-widest text-center font-bold text-[var(--color-industrial-dark)]">
              END OF DIRECTORY // TOTAL ENTRIES: {allProjects.length}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
