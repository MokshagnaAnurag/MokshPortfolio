import { useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBorder } from "@/components/ui/animated-border";

const AboutMe = () => {
  // Scroll animation for elements entering viewport
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

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/kankati-mokshagna-anurag/",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/MokshagnaAnurag",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:kankati.mokshagnaanurag@gmail.com",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden pt-24">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--muted)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-purple-950/30" />
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="mx-auto mb-6 h-24 w-24 rounded-full overflow-hidden border-4 border-primary shadow-md">
                <img
                  src="/pictures/Image.jpeg"
                  alt="Kankati Mokshagna Anurag"
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-200 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                
              </p>
              {/* Social Links */}
              <div className="flex justify-center mt-6 space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted rounded-full hover:bg-primary/20 transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Profile Card Section */}
            <AnimatedBorder
              className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 mb-12"
              speed={0.1}
              colors={{
                primary: "rgb(59 130 246 / 0.3)",
                secondary: "rgb(168 85 247 / 0.3)"
              }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center p-8">
                {/* Left: Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-64 h-64 rounded-xl overflow-hidden border shadow-md">
                    <img
                      src="/pictures/Image.jpeg"
                      alt="Kankati Mokshagna Anurag"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                {/* Right: Bio */}
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">Kankati Mokshagna Anurag</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      I'm <strong>Kankati Mokshagna Anurag</strong>, passionate about building secure, intelligent, and autonomous systems. I love working at the intersection of <strong>cybersecurity</strong>, <strong>embedded IoT</strong>, <strong>robotics</strong>, and <strong>AI/ML</strong> to solve real-world problems.
                    </p>
                    <p>
                      Currently, I'm a <strong>Summer Research Intern at NIT Karnataka</strong>, where I’ve enhanced <strong>Internet of Vehicles (IoV)</strong> performance by optimizing V2I communication and improving edge data processing efficiency by <strong>22%</strong>. I also developed lightweight modules using <strong>MQTT</strong> and <strong>CAN protocols</strong>.
                    </p>
                    <p>
                      In cybersecurity, I’ve performed advanced <strong>penetration testing</strong>, improving test coverage by <strong>15%</strong> and reducing attack surfaces by <strong>30%</strong> using tools like <strong>Metasploit</strong> and <strong>Burp Suite</strong>.
                    </p>
                    <p>
                      At the <strong>Center for Embedded Systems, MVGR</strong>, I worked on wireless sensor networks and <strong>PID control systems</strong> using <strong>STM32</strong> and <strong>Arduino</strong>, improving robotics precision through real-time data integration.
                    </p>
                    <p>
                      I actively contribute to open-source projects like <strong>Voice AI Telugu</strong> and <strong>OpenStreetMap</strong>. I'm also a volunteer at <strong>SwechaAP</strong>, <strong>MVGR GLUG</strong>, and the <strong>National Service Scheme (NSS)</strong>, promoting community-driven technology through workshops and awareness programs.
                    </p>
                  
                    <p>
                      I’m currently pursuing a <strong>B.Tech in Electronics and Communication Engineering</strong> at <strong>MVGR College of Engineering</strong> and completed my Class 12 (PCM) at <strong>Apex Junior College</strong>.
                    </p>
                    <p>
                      I enjoy creating solutions where innovation, impact, and security come together. If you're working on the future of tech, <strong>let’s connect</strong>!
                      <br /><br />
                      🔗 <a href="https://www.linkedin.com/in/kankati-mokshagna-anurag/" target="_blank"><strong>Connect with me on LinkedIn</strong></a>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedBorder>
            {/* Navigation Buttons */}
            <div className="flex justify-center gap-6 mt-8 mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border-none">
                <Link to="/experience">View Experience</Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border-none">
                <Link to="/education">View Education</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;