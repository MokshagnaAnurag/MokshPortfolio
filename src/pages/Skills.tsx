import { useState, useEffect } from "react";
import SkillCard from "../components/SkillCard";
import { skills, Skill } from "../data/skills";

type Category = Skill["category"] | "all" | "programming" | "signal_processing";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (selectedCategory === "all") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories: Array<{ value: Category; label: string }> = [
    { value: "all", label: "All Skills" },
    { value: "iot", label: "Internet of Things" },
    { value: "embedded", label: "Embedded Systems" },
    { value: "robotics", label: "Robotics" },
    { value: "ai_ml", label: "AI & Machine Learning" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "signal_processing", label: "Signal Processing" }
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
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 dark:from-blue-400 dark:via-indigo-300 dark:to-blue-200 bg-clip-text text-transparent animate-fade-in`}>
              My Skills & Expertise
            </h1>
            <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
              I've developed expertise across various technologies and tools.
              Here's a breakdown of my technical capabilities.
            </p>
          </div>
          {/* Skill filter tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                  selectedCategory === category.value
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none"
                    : "border border-blue-500 text-blue-600 bg-transparent"
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? "translateY(0)" 
                    : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${index * 100 + 300}ms, transform 0.5s ease-out ${index * 100 + 300}ms`
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden">
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  delay={index * 100 + 500}
                />
              </div>
            ))}
          </div>
          {/* Empty state */}
          {filteredSkills.length === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No skills found in this category.</p>
            </div>
          )}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "1000ms" }}>
              Constantly Learning & Growing
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "1200ms" }}>
              Technology evolves quickly, and I'm committed to staying current with the latest advancements.
              I'm always expanding my skillset through continuous learning and practical application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
