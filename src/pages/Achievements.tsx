
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, GraduationCap, ExternalLink, Calendar, Tag, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    id: 1,
    title: "Cyber Secured Champion",
    date: "July 2023",
    description:
      "Won the Cyber Secured Champion Competition hosted by Cyber Intelligence Global LLP among 500+ participants.",
    icon: <Award className="h-6 w-6 text-green-500" />,
    driveLink: "https://drive.google.com/file/d/1N1XWaoUaqoBECPDg6XV9sdhnWVatWH1V/view?usp=sharing",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D562DAQF_y8DX0rfq4A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1724253109368?e=1746878400&v=beta&t=uMsJGK0QXil3s7gPZRH4u6eyQMxdMLsvVrH-0iG5lYc')",
    tag: "Cybersecurity",
    tags: ["CTF", "Python", "Networking"],
    category: "competition",
    status: "completed"
  },
  {
    id: 2,
    title: "2nd Place - AVISHKAR Season-2",
    date: "August 2023",
    description:
      "Secured 2nd place in AVISHKAR Season-2 Hackathon with a prize of ₹1,00,000.",
    icon: <Award className="h-6 w-6 text-yellow-500" />,
    driveLink: "https://www.linkedin.com/posts/kankati-mokshagna-anurag_a-few-months-ago-my-team-team-four-bytes-activity-7304902751681949696-AIT0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7mEe8BAQsk9Bq9baAJiuA4aUL6TlD-Jfs",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5622AQEvawsLhVnoNQ/feedshare-shrink_2048_1536/B56ZWA6QxyGUAs-/0/1741624512246?e=1749081600&v=beta&t=my0UOzYIpeXxzm0Yr4zRsgWL3QwrgvOFp4L-5TP7sz8')",
    tag: "Hackathon",
    tags: ["Innovation", "Problem Solving", "Teamwork"],
    category: "hackathon",
    status: "completed"
  },
  {
    id: 3,
    title: "Top 6 - Embedded Systems Exam",
    date: "October 2023",
    description:
      "Ranked in the Top 6 nationally in the Embedded Systems Scholarship Exam by SENSE Academia.",
    icon: <Award className="h-6 w-6 text-red-500" />,
    driveLink: "https://www.linkedin.com/posts/senseacademia_senseacademia-scholarshipexam-results-ugcPost-7262801188801122304-ni-X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7mEe8BAQsk9Bq9baAJiuA4aUL6TlD-Jfs",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5622AQGjsR5laW2FWQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731586735832?e=1749081600&v=beta&t=2FwLJiql33PJWpl8aBFxGIfQhyVEwzGH2KRE9OXXZoY')",
    tag: "Embedded Systems",
    tags: ["STM32", "Microcontrollers", "IoT"],
    category: "scholarship",
    status: "completed"
  },
  {
    id: 4,
    title: "Drone Hackathon - AP",
    date: "November 2023",
    description:
      "Proposed drone-based solutions and delivered impactful presentations at the Andhra Pradesh Drone Hackathon.",
    icon: <Award className="h-6 w-6 text-purple-500" />,
    driveLink: "https://drive.google.com/file/d/18j4-OSqKCFlrUx9Mxl1Agnbu25uOdDYG/view?usp=sharing",
    backgroundImage: "url('https://i.pinimg.com/originals/95/33/eb/9533eb7ed05a5de4ccaef103e8f3415d.jpg')",
    tag: "Aerospace",
    tags: ["Drones", "Innovation", "Presentations"],
    category: "hackathon",
    status: "completed"
  },
  {
    id: 5,
    title: "Volunteer & IoT Speaker - Freedom Fest 2025",
    date: "April 2025",
    description:
      "Served as a Volunteer and IoT Speaker at Freedom Fest 2025 organized by Swecha. Trained 25 students in IoT using Arduino UNO, NodeMCU (ESP8266), real-time sensors, LIDAR, and Tinkercad simulations. Facilitated cloud-based IoT integration and hands-on learning for embedded systems and automation.",
    icon: <Award className="h-6 w-6 text-pink-500" />,
    driveLink: "https://www.linkedin.com/posts/kankati-mokshagna-anurag_freedomfest2025-iot-swecha-activity-7313936884324282372-syAo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7mEe8BAQsk9Bq9baAJiuA4aUL6TlD-Jfs",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5622AQFJTdn0lseLOg/feedshare-shrink_2048_1536/B56ZYBSztnHQAo-/0/1743778432398?e=1749081600&v=beta&t=FwhcBwdfJuHq9AMhAJX6hgWnVGf-V1N1Q1qttN_JKkM')",
    tag: "IoT & Education",
    tags: ["IoT", "Arduino", "NodeMCU", "LIDAR", "Cloud", "Open Source"],
    category: "teaching",
    status: "completed"
  }
];

const certifications = [
  {
    id: 1,
    title: "Practical Ethical Hacking - TCM Security",
    date: "October 2024",
    description:
      "Successfully completed Practical Ethical Hacking from TCM Security. Gained hands-on experience in penetration testing, vulnerability assessment, and ethical hacking methodologies. Credential ID: 196z74v0.",
    icon: <GraduationCap className="h-6 w-6 text-red-600" />,
    driveLink: "https://drive.google.com/file/d/1kdsOZyErVJECMUDYf6qOco5fzTSd2_x9/view?usp=sharing",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D562DAQFYPmQFN93dKg/profile-treasury-image-shrink_800_800/B56ZaWF6G4GkAY-/0/1746274854565?e=1746882000&v=beta&t=qPUSY1rxKLQow2mjmvPY7_dtA5mJO4ZP3UhMApMejEU')",
    tag: "Cybersecurity",
    tags: ["Ethical Hacking", "Pentesting", "TCM Security"],
    category: "certification",
    status: "completed"
  },
  {
    id: 2,
    title: "NLP Challenge Participation - IIT Kharagpur",
    date: "January 2025",
    description:
      "Participated in the NLP Challenge hosted by IIT Kharagpur. Worked on real-world NLP problems, collaborated with top minds, and explored transformative AI applications.",
    icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
    driveLink: "https://drive.google.com/file/d/19zoCsqkPZzLSQChxGIOCoY_e_RGXkU8H/view?usp=sharing",
    backgroundImage: "url('https://media.licdn.com/dms/image/v2/D562DAQE_0CuZdU0nhg/profile-treasury-image-shrink_800_800/B56ZaWFpHPGoAY-/0/1746274784642?e=1746882000&v=beta&t=VMtrlrfuFr2chgYPeqmB46OniXvoQKkH3Ngg7338Woc')",
    tag: "AI & NLP",
    tags: ["NLP", "AI", "Hackathon", "IIT Kharagpur"],
    category: "participation",
    status: "completed"
  },
  {
    id: 3,
    title: "Embedded For Beginners - NIELIT",
    date: "August 2024",
    description:
      "Completed the Embedded For Beginners course from NIELIT, covering fundamentals of embedded systems, microcontrollers, and interfacing. Credential ID: OLC 20958.",
    icon: <GraduationCap className="h-6 w-6 text-green-500" />,
    driveLink: "https://drive.google.com/file/d/10wrOmLbETQkml0__fOLIg-LwJJz62M36/view?usp=sharing",
    backgroundImage: "url('https://media.licdn.com/dms/image/D4D22AQHq9u6G0Nhyfw/feedshare-shrink_800/0/1685079401784?e=2147483647&v=beta&t=xnFXgoAqAnuLX8SkZOMMbIBdOs_7TYk6aeyL7ZldYo4')",
    tag: "Embedded Systems",
    tags: ["Embedded", "NIELIT", "IoT", "Microcontrollers"],
    category: "certification",
    status: "completed"
  },
  {
  id: 4,
  title: "Introduction To Industry 4.0 and Industrial Internet Of Things - NPTEL",
  date: "April 2025",
  description:
    "Completed the NPTEL course on Introduction to Industry 4.0 and Industrial Internet of Things offered by IIT Kharagpur, covering smart manufacturing, cyber-physical systems, IIoT architecture, and use cases in modern industries.",
  icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
  driveLink: "https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing", // <-- replace with actual link
  backgroundImage: "url('https://media.licdn.com/dms/image/D4D22AQHq9u6G0Nhyfw/feedshare-shrink_800/0/1685079401784?e=2147483647&v=beta&t=xnFXgoAqAnuLX8SkZOMMbIBdOs_7TYk6aeyL7ZldYo4')",
  tag: "Industry 4.0",
  tags: ["Industry 4.0", "IIoT", "Smart Manufacturing", "Cyber-Physical Systems"],
  category: "certification",
  status: "completed"
}

];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("achievements");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
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
  }, [activeTab]);

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "competition":
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-600 shadow-sm shadow-green-500/20";
      case "hackathon":
        return "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-600 shadow-sm shadow-blue-500/20";
      case "certification":
        return "bg-gradient-to-r from-purple-500 to-violet-600 text-white border-purple-600 shadow-sm shadow-purple-500/20";
      case "scholarship":
        return "bg-gradient-to-r from-orange-500 to-amber-600 text-white border-orange-600 shadow-sm shadow-orange-500/20";
      case "teaching":
        return "bg-gradient-to-r from-pink-500 to-rose-600 text-white border-pink-600 shadow-sm shadow-pink-500/20";
      case "participation":
        return "bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/20";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-600 text-white border-gray-600 shadow-sm shadow-gray-500/20";
    }
  };

  const renderCards = (items: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => {
        const isExpanded = expandedItems.includes(item.id);
        
        return (
          <div
            key={item.id}
            className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 group"
            style={{ transitionDelay: `${100 * index}ms` }}
          >
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 overflow-hidden group-hover:-translate-y-2 h-full flex flex-col">
              {/* Background Image Header */}
              <div
                className="h-48 relative bg-gradient-to-br from-emerald-500/30 to-teal-500/30"
                style={{
                  backgroundImage: item.backgroundImage || "url('https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(item.category)}`}>
                    {item.tag}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg">
                    {item.icon}
                  </div>
                  <div className="text-white">
                    <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {item.description}
                </p>

                {/* Skills Tags */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center">
                    <Tag className="w-3 h-3 mr-1" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {item.tags?.slice(0, isExpanded ? undefined : 3).map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium border border-emerald-200 dark:border-emerald-800 hover:shadow-md transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-emerald-200 hover:to-teal-200 dark:hover:from-emerald-800/50 dark:hover:to-teal-800/50"
                      >
                        {tag}
                      </span>
                    ))}
                    {!isExpanded && item.tags && item.tags.length > 3 && (
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="px-2 py-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                      >
                        +{item.tags.length - 3} more
                      </button>
                    )}
                  </div>
                  {isExpanded && item.tags && item.tags.length > 3 && (
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="mt-2 flex items-center text-xs text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      <ChevronUp className="w-3 h-3 mr-1" />
                      Show less
                    </button>
                  )}
                </div>

                {/* View Button */}
                <div className="mt-auto">
                  <a
                    href={item.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group/btn border-none"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
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
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8 shadow-lg shadow-blue-500/25">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-200 bg-clip-text text-transparent mb-6">
                Achievements & Certifications
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A showcase of my accomplishments, certifications, and recognitions in technology, cybersecurity, and innovation.
              </p>
            </div>
            {/* Enhanced Tabs */}
            <div className="flex justify-center my-4">
              <div className="inline-flex gap-2 bg-transparent p-0 shadow-none border-none">
                <Button
                  variant={activeTab === "achievements" ? "default" : "outline"}
                  onClick={() => setActiveTab("achievements")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 ${
                    activeTab === "achievements" 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none" 
                      : "border border-blue-500 text-blue-600 bg-transparent" 
                  }`}
                >
                  <Award className="w-4 h-4 mr-2" />
                  Achievements
                </Button>
                <Button
                  variant={activeTab === "certifications" ? "default" : "outline"}
                  onClick={() => setActiveTab("certifications")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 ${
                    activeTab === "certifications" 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none" 
                      : "border border-blue-500 text-blue-600 bg-transparent" 
                  }`}
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Certifications
                </Button>
              </div>
            </div>
            {/* Content */}
            <div key={activeTab}>
              {activeTab === "achievements" && renderCards(achievements)}
              {activeTab === "certifications" && renderCards(certifications)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
