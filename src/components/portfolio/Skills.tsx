import { motion } from "framer-motion";
import {
  Cpu,
  Radio,
  Bot,
  Satellite,
  Activity,
  BrainCircuit,
  Award,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Firmware & Logic Frameworks",
    items: ["C/C++", "Python", "MATLAB", "JavaScript", "HTML/CSS", "ROS/ROS2", "OpenCV", "TensorFlow", "PyTorch"],
    color: "var(--color-industrial-yellow)"
  },
  {
    title: "Embedded & Microcontrollers",
    items: ["STM32", "ESP32", "Arduino", "Raspberry Pi", "PIC", "ARM Cortex-M", "FreeRTOS"],
    color: "var(--color-industrial-green)"
  },
  {
    title: "Hardware Design",
    items: ["PCB Design (KiCad, Eagle)", "Circuit Analysis", "Oscilloscope", "3D Printing", "SolidWorks", "Fusion 360"],
    color: "var(--color-industrial-orange)"
  },
  {
    title: "Robotics & Automation",
    items: ["RPLIDAR", "IMU/Gyro", "Motor Control", "URDF", "RViz", "Gazebo", "SLAM", "Nav2", "MoveIt", "PID Control"],
    color: "var(--color-industrial-cyan)"
  },
  {
    title: "Communication Protocols & IoT",
    items: ["UART", "SPI", "I2C", "CAN Bus", "LoRaWAN", "Zigbee", "Wi-Fi", "BLE", "RFID", "MQTT", "WebSocket"],
    color: "var(--color-industrial-blue)"
  },
  {
    title: "Telemetry & Edge Infrastructure",
    items: ["AWS IoT Core", "Google Firebase", "ThingSpeak", "Supabase", "MySQL", "Docker", "Linux"],
    color: "var(--color-industrial-magenta)"
  },
];

const achievements = [
  {
    no: "01",
    award: "Top 100 National Finalist",
    host: "Odoo Hackathon 2025",
    detail: "Selected from 15,000+ participating teams nationwide.",
  },
  {
    no: "02",
    award: "2nd Place & ₹1 Lakh Prize",
    host: "AVISHKAR Season-2 Hackathon",
    detail: "Awarded for an innovative IoT-based agricultural solution.",
  },
  {
    no: "03",
    award: "Rank 6 Nationwide",
    host: "SENSE Academia Scholarship",
    detail: "Awarded high national merit standing in the Embedded Systems Scholarship Examination.",
  },
  {
    no: "04",
    award: "Presented Drone Solutions",
    host: "AP State Hackathon on Drones",
    detail: "Proposed cutting-edge drone-based disaster management solutions.",
  },
  {
    no: "05",
    award: "Top 10 National Finalist",
    host: "Serve Smart Hackathon (IIT BHU)",
    detail: "Recognized for developing a smart city infrastructure project.",
  },
  {
    no: "06",
    award: "Finalist",
    host: "Hack IITK (C3i Hub, IIT Kanpur)",
    detail: "Advanced to finals for a cybersecurity-driven IoT prototype.",
  },
];

const certifications = [
  {
    name: "Tata Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "Aug 2025",
    id: "yAKtKExm65kpwQiMb",
  },
  {
    name: "Introduction To Industry 4.0 And Industrial IoT",
    issuer: "NPTEL",
    date: "May 2025",
    id: "NPTEL25CS43S660400772",
  },
  {
    name: "Natural Language Processing (NLP)",
    issuer: "IIT Kharagpur",
    date: "Jan 2025",
    id: "-",
  },
  {
    name: "Practical Ethical Hacking",
    issuer: "TCM Security",
    date: "Oct 2024",
    id: "196z74v0",
  },
  {
    name: "Introduction to MATLAB & Simulink",
    issuer: "NIELIT",
    date: "Aug 2024",
    id: "OLC 21145",
  },
];

const capabilityFeatures = [
  {
    title: "Embedded Intelligence",
    icon: Cpu,
    description: "Designing firmware and hardware integration for STM32, ESP32, and Cortex-M systems with real-time constraints (FreeRTOS).",
    model: "MDL-01"
  },
  {
    title: "Autonomous Navigation",
    icon: Bot,
    description: "End-to-end robotics using ROS 2, Nav2, SLAM and sensor fusion — from LIDAR mapping to autonomous path planning.",
    model: "MDL-02"
  },
  {
    title: "Wireless & IoT",
    icon: Radio,
    description: "End-to-end IoT solutions over LoRa, Zigbee, MQTT and edge-to-server telemetry with AWS IoT Core and Firebase.",
    model: "MDL-03"
  },
  {
    title: "Space & CubeSats",
    icon: Satellite,
    description: "OBC design and integration for a 1U CubeSat — LoRaWAN telemetry, multi-sensor arrays, and RP2040-based control systems.",
    model: "MDL-04"
  },
  {
    title: "Hardware Design",
    icon: Activity,
    description: "PCB design (KiCad), circuit analysis, soldering (SMD/THT), and rapid prototyping using SolidWorks and 3D printing.",
    model: "MDL-05"
  },
  {
    title: "AI / ML Applications",
    icon: BrainCircuit,
    description: "Applying computer vision and deep learning (YOLO, PyTorch) to real-world robotics and edge-inference devices.",
    model: "MDL-06"
  },
];

export function Skills() {
  return (
    <>
      {/* 1. Capability Modules Section (White Background) */}
      <section id="capabilities" className="relative py-24 bg-[var(--color-industrial-white)] border-b-4 border-mech overflow-hidden">
        
        {/* Blueprint Light Overlay */}
        <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none"></div>

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
          
          <Reveal>
            <div className="inline-flex items-center font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[var(--color-industrial-dark)] text-[var(--color-industrial-green)] px-4 py-1 border-mech-sm shadow-mech-green mb-12 relative">
              <span className="mr-2 opacity-70">[&gt;</span>
              HARDWARE PROFILES
              <span className="ml-2 opacity-70">]</span>
            </div>

            <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-black uppercase tracking-tighter mb-16 leading-[0.9] text-[var(--color-industrial-dark)]">
              CAPABILITY <br />
              <span className="text-[var(--color-industrial-orange)] text-stroke-mech-2">MODULES</span>
            </h2>
          </Reveal>

          {/* Capabilities Grid */}
          <div className="mb-8">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilityFeatures.map((feature, i) => (
                  <div 
                    key={i} 
                    className="bg-[#111] border-mech p-8 flex flex-col transition-colors duration-200 group relative z-0 shadow-mech-md hover:-translate-y-1 hover:shadow-mech-lg hover:border-[var(--color-industrial-dark)] clip-mech"
                  >
                    <div className="absolute top-4 right-4 font-mono text-[0.6rem] font-bold text-[var(--color-industrial-gray)] opacity-50 tracking-widest border border-dashed border-gray-600 px-2 py-0.5">
                      {feature.model}
                    </div>
                    
                    <div className="text-[var(--color-industrial-white)] group-hover:text-[var(--color-industrial-green)] mb-6 transition-colors shadow-[0_0_20px_rgba(0,255,65,0)] group-hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] w-fit rounded-full">
                      <feature.icon size={42} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-display text-2xl font-black uppercase mb-3 text-[var(--color-industrial-white)]">
                      {feature.title}
                    </h3>
                    
                    <p className="font-mono text-sm leading-[1.7] text-[var(--color-industrial-green)] opacity-80 group-hover:opacity-100 transition-opacity flex-1 border-l-2 border-[var(--color-industrial-green)] pl-3">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Technical Skills Section (Dark Background) */}
      <section id="skills" className="relative py-24 bg-[var(--color-industrial-dark)] border-b-4 border-mech overflow-hidden">
        
        {/* Blueprint Dark Overlay */}
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none"></div>

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
          {/* Technical Skills */}
          <div className="mb-8">
            <Reveal>
              <div className="flex items-center gap-4 mb-10">
                <h3 className="font-display text-3xl md:text-5xl font-black uppercase text-[var(--color-industrial-white)]">
                  TECHNICAL <span className="text-[var(--color-industrial-yellow)]">SKILLS</span>
                </h3>
                <div className="h-2 flex-1 bg-warning-stripes opacity-40"></div>
              </div>
            </Reveal>
            
            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groups.map((g, i) => (
                  <div 
                    key={g.title} 
                    className="skill-card-dynamic group p-6 border-mech transition-all duration-300 hover:-translate-y-1 shadow-mech-sm"
                    style={{ '--dynamic-hover': g.color } as React.CSSProperties}
                  >
                    <div className="font-mono text-[0.65rem] font-bold uppercase px-3 py-1 bg-[var(--color-industrial-dark)] text-[var(--color-industrial-white)] inline-block mb-6 shadow-[2px_2px_0_rgba(10,10,10,0.5)]">
                      {String(i + 1).padStart(2, "0")} / {g.title}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((it) => (
                        <span
                          key={it}
                          className="font-mono text-[0.75rem] font-bold text-[var(--color-industrial-dark)] bg-gray-200 px-2 py-1 uppercase"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Honors and Certifications Section (White Background) */}
      <section id="honors" className="relative py-24 bg-[var(--color-industrial-white)] border-b-4 border-mech overflow-hidden">
        
        {/* Blueprint Light Overlay */}
        <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none"></div>

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Achievements */}
            <div>
              <Reveal>
                <h3 className="font-display text-3xl md:text-4xl font-black uppercase text-[var(--color-industrial-dark)] mb-10 text-left">
                  HONORS & <span className="text-[var(--color-industrial-orange)] text-stroke-mech-2">AWARDS</span>
                </h3>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-col border-mech shadow-mech-md bg-[var(--color-industrial-white)] clip-mech-alt relative z-10">
                  {achievements.map((a, i) => (
                    <div 
                      key={a.no} 
                      className="group flex flex-col md:flex-row items-start md:items-center gap-4 p-6 border-b-2 border-dashed border-[var(--color-industrial-gray)] last:border-b-0 hover:bg-[var(--color-industrial-bg)] transition-colors"
                    >
                      <div className="font-mono text-2xl font-black text-gray-400 group-hover:text-[var(--color-industrial-orange)] transition-colors shrink-0 w-12">
                        {a.no}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-display text-lg font-black text-[var(--color-industrial-dark)] uppercase mb-1 leading-tight transition-colors">
                          {a.award}
                        </h4>
                        {a.detail && (
                          <p className="font-mono text-xs text-gray-600 group-hover:text-[var(--color-industrial-dark)] transition-colors">
                            {a.detail}
                          </p>
                        )}
                      </div>
                      
                      <div className="shrink-0 mt-2 md:mt-0">
                        <span 
                          className="font-mono text-[0.6rem] font-bold uppercase px-2 py-1 border border-[var(--color-industrial-dark)] text-[var(--color-industrial-white)] bg-[var(--color-industrial-dark)] group-hover:bg-[var(--color-industrial-blue)] group-hover:border-[var(--color-industrial-blue)] transition-colors inline-block"
                        >
                          {a.host}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Certifications */}
            <div>
              <Reveal>
                <h3 className="font-display text-3xl md:text-4xl font-black uppercase text-[var(--color-industrial-dark)] mb-10 text-left">
                  <span className="text-[var(--color-industrial-green)] text-stroke-mech-2">CERTIFICATIONS</span>
                </h3>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-col border-mech shadow-mech-md bg-[var(--color-industrial-white)] relative z-10">
                  {certifications.map((c, i) => (
                    <div 
                      key={i} 
                      className="group flex flex-col gap-2 p-6 border-b-2 border-dashed border-[var(--color-industrial-gray)] last:border-b-0 hover:bg-[var(--color-industrial-bg)] transition-colors relative"
                    >
                      <div className="absolute top-6 right-6 text-gray-400 group-hover:text-[var(--color-industrial-green)] transition-colors">
                        <ShieldCheck size={20} />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[0.65rem] font-bold uppercase bg-[var(--color-industrial-dark)] text-[var(--color-industrial-yellow)] px-2 py-0.5">
                          {c.date}
                        </span>
                        <span className="font-mono text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest group-hover:text-[var(--color-industrial-dark)]">
                          {c.issuer}
                        </span>
                      </div>
                      <h4 className="font-display text-lg font-black text-[var(--color-industrial-dark)] uppercase leading-tight pr-8">
                        {c.name}
                      </h4>
                      {c.id !== "-" && (
                        <p className="font-mono text-xs text-gray-500 mt-1 group-hover:text-[var(--color-industrial-dark)]">
                          CREDENTIAL_ID: {c.id}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
