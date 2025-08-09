'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PremiumCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
  width?: string;
  height?: string;
  className?: string;
}

export const PremiumCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link = "#",
  width = "360px",
  height = "280px",
  className = ""
}: PremiumCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = -(y / rect.height) * 3;
      const rotateY = (x / rect.width) * 3;

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${className}`}
      style={{
        width,
        height,
        transformStyle: "preserve-3d",
        backgroundColor: "#0e131f",
        boxShadow: "0 -5px 50px 5px rgba(78, 99, 255, 0.15), 0 0 10px 0 rgba(0, 0, 0, 0.3)",
      }}
      initial={{ y: 0 }}
      animate={{
        y: isHovered ? -3 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glass reflection overlay */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.03) 100%)",
          backdropFilter: "blur(1px)",
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.6,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Dark background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)",
        }}
      />

      {/* Purple/blue glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 z-10"
        style={{
          background: `
            radial-gradient(ellipse at bottom right, rgba(172, 92, 255, 0.4) -10%, rgba(79, 70, 229, 0) 60%),
            radial-gradient(ellipse at bottom left, rgba(56, 189, 248, 0.4) -10%, rgba(79, 70, 229, 0) 60%)
          `,
          filter: "blur(25px)",
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.6,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Bottom border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] z-20"
        style={{
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.05) 100%)",
        }}
        animate={{
          boxShadow: isHovered
            ? "0 0 15px 2px rgba(172, 92, 255, 0.7), 0 0 20px 3px rgba(138, 58, 185, 0.5)"
            : "0 0 10px 1px rgba(172, 92, 255, 0.5), 0 0 15px 2px rgba(138, 58, 185, 0.3)",
          opacity: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card content */}
      <motion.div
        className="relative flex flex-col h-full p-6 z-40"
        animate={{
          rotateX: isHovered ? -rotation.x * 0.2 : 0,
          rotateY: isHovered ? -rotation.y * 0.2 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <motion.div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
          style={{
            background: "linear-gradient(225deg, #1a1f2e 0%, #151a26 100%)",
          }}
          animate={{
            boxShadow: isHovered
              ? "0 4px 8px -1px rgba(0, 0, 0, 0.2), inset 1px 1px 2px rgba(255, 255, 255, 0.1), inset -1px -1px 2px rgba(0, 0, 0, 0.5)"
              : "0 2px 4px -1px rgba(0, 0, 0, 0.15), inset 1px 1px 1px rgba(255, 255, 255, 0.08), inset -1px -1px 1px rgba(0, 0, 0, 0.3)",
            y: isHovered ? -1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={20} className="text-white" />
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <motion.h3
            className="text-lg font-semibold text-white mb-2"
            style={{
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
            animate={{
              textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.3)" : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-sm text-gray-300 mb-4"
            style={{
              lineHeight: 1.4,
            }}
            animate={{
              opacity: isHovered ? 0.9 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Learn More link */}
          <motion.a
            href={link}
            className="inline-flex items-center text-white text-sm font-medium"
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
            whileHover={{
              filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))"
            }}
          >
            Learn More
            <motion.svg
              className="ml-1 w-3 h-3"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                x: isHovered ? 2 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};