import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cpu,
  ChevronRight,
  Database,
  Lock,
  Smartphone,
  Bot,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import TechDomain from "@/components/TechDomain";
import { useTheme } from "@/components/ThemeProvider";

// Custom hook for typing effect
const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const typedName = useTypingEffect("Hello, I'm Kankati Mokshagna Anurag", 100);

  // Scroll animation for "animate-on-scroll" elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const techDomains = [
    {
      title: "Internet of Things",
      icon: <Smartphone size={20} className="text-tech-iot" />,
      color: "bg-tech-iot",
      description:
        "Built real-time IoT systems using STM32 and sensor modules; experienced in wireless communication and data fusion for smart environments.",
    },
    {
      title: "Embedded Systems",
      icon: <Cpu size={20} className="text-tech-embedded" />,
      color: "bg-tech-embedded",
      description:
        "Designed and implemented embedded solutions with STM32 boards, focusing on low-level programming and hardware integration for automation.",
    },
    {
      title: "Robotics",
      icon: <Bot size={20} className="text-tech-robotics" />,
      color: "bg-tech-robotics",
      description:
        "Specialized in autonomous navigation using ROS2, RPLIDAR, and sensor fusion; developed and simulated robotic behaviors using Gazebo and RViz.",
    },
    {
      title: "AI & Machine Learning",
      icon: <Database size={20} className="text-tech-ai" />,
      color: "bg-tech-ai",
      description:
        "Applied machine learning for intelligent decision-making in robotics and IoT; participated in NLP and predictive modeling challenges.",
    },
    {
      title: "Cybersecurity",
      icon: <Lock size={20} className="text-tech-cybersec" />,
      color: "bg-tech-cybersec",
      description:
        "Experienced in web application pentesting, exploit development, and network analysis using Metasploit, Nmap, Wireshark, and more.",
    },
  ];

  return (
    <div className="relative overflow-x-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={theme === 'dark' ? {
          background: 'linear-gradient(to bottom right, #0A0A0F, #1B1026)',
        } : {
          background: 'linear-gradient(to bottom right, #F8FAFF, #E6E9F5)',
        }}
      >
        {/* Star particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticleBackground />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight"
              style={{
                background: 'linear-gradient(to right, #3A5EFF, #AA5EFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {typedName}
            </h1>
            <p className="text-xl font-sans" style={{ color: theme === 'dark' ? '#D1D1D1' : '#333' }}>
              Web Application Pentester | Robotics | Embedded Systems & IoT Developer | ROS2 & Sensor Fusion Specialist | AI/ML | Simulation Expert (Gazebo/RViz) 🚀
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                size="lg"
                className={theme === 'dark' ? "font-medium" : "font-medium bg-white text-blue-700 border border-blue-200 shadow"}
                style={theme === 'dark' ? {
                  background: '#3A5EFF',
                  color: '#fff',
                  borderRadius: '6px',
                  boxShadow: '0 0 12px 2px #3A5EFF55',
                } : {
                  borderRadius: '6px',
                }}
                onClick={() => window.location.href='/projects'}
              >
                View Projects <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={theme === 'dark' ? "font-medium border border-[#AAAAAA] text-white bg-transparent hover:bg-[#222]" : "font-medium border border-[#888] text-blue-700 bg-transparent hover:bg-blue-50"}
                onClick={scrollToAbout}
              >
                About My Expertise <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section ref={aboutRef} className="py-20 md:py-32 relative overflow-hidden" style={theme === 'dark' ? {
        backgroundColor: '#0B0C1A',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
          radial-gradient(circle at 30% 40%, rgba(255,255,255,0.08) 1px, transparent 2px),
          radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08) 1px, transparent 2px)
        `,
        backgroundSize: '40px 40px, 40px 40px, 100vw 100vh, 100vw 100vh',
        backgroundPosition: '0 0, 0 0, 0 0, 0 0',
      } : {
        backgroundColor: '#F8FAFF',
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px),
          radial-gradient(circle at 30% 40%, rgba(0,0,0,0.06) 1px, transparent 2px),
          radial-gradient(circle at 70% 60%, rgba(0,0,0,0.06) 1px, transparent 2px)
        `,
        backgroundSize: '40px 40px, 40px 40px, 100vw 100vh, 100vw 100vh',
        backgroundPosition: '0 0, 0 0, 0 0, 0 0',
      }}>
        {/* Particle movement layer */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <ParticleBackground />
        </div>
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              My Technical Expertise
            </h2>
            <p className="text-lg text-white">
              Driven by a passion for intelligent automation and cybersecurity, I leverage a broad spectrum of technologies to build secure, efficient, and innovative solutions that address real-world challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechDomain
              title="Internet of Things"
              icon={<Smartphone size={28} className="text-blue-400" />}
              color="bg-gradient-to-r from-[#3A7BD5] to-[#00d2ff]"
              description="Built real-time IoT systems using STM32 and sensor modules; experienced in wireless communication and data fusion for smart environments."
            />
            <TechDomain
              title="Embedded Systems"
              icon={<Cpu size={28} className="text-pink-400" />}
              color="bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"
              description="Designed and implemented embedded solutions with STM32 boards, focusing on low-level programming and hardware integration for automation."
            />
            <TechDomain
              title="Robotics"
              icon={<Bot size={28} className="text-green-400" />}
              color="bg-gradient-to-r from-[#00c853] to-[#00e676]"
              description="Specialized in autonomous navigation using ROS2, RPLIDAR, and sensor fusion; developed and simulated robotic behaviors using Gazebo and RViz."
            />
            <TechDomain
              title="AI & Machine Learning"
              icon={<Database size={28} className="text-purple-400" />}
              color="bg-gradient-to-r from-[#9D50BB] to-[#6E48AA]"
              description="Applied machine learning for intelligent decision-making in robotics and IoT; participated in NLP and predictive modeling challenges."
            />
            <TechDomain
              title="Cybersecurity"
              icon={<Lock size={28} className="text-fuchsia-400" />}
              color="bg-gradient-to-r from-[#ff0080] to-[#e100ff]"
              description="Experienced in web application pentesting, exploit development, and network analysis using Metasploit, Nmap, Wireshark, and more."
            />
          </div>

          <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border-none">
              Explore My Projects <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
