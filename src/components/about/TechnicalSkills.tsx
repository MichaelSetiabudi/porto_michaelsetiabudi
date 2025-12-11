import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Palette,
  Cloud,
  Smartphone,
  Terminal,
} from "lucide-react";

interface TechnicalSkillsProps {
  theme: string;
  getSectionBackgroundClass: (variant: "primary" | "secondary" | "tertiary") => string;
  getTextSecondaryClass: () => string;
}

const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({
  theme,
  getSectionBackgroundClass,
  getTextSecondaryClass,
}) => {
  const skillGroups = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend",
      skills: [
        "PHP",
        "Laravel",
        "Node.js",
        "Express.js",
        "Python",
        "FastAPI",
        "MySQL",
        "MongoDB",
        "Firebase",
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile",
      skills: ["Flutter", "Kotlin", "React Native"],
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "AWS", "Docker", "GitHub Actions"],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design & Other",
      skills: ["Figma", "UI/UX Design", "C#", "GraphQL"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className={`py-16 md:py-20 ${getSectionBackgroundClass("secondary")}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-[#e6f1ff]" : "text-[#0a192f]"
            }`}
          >
            Technical Skills
          </h2>
          <p className={`${getTextSecondaryClass()} max-w-2xl mx-auto`}>
            Technologies and tools I work with to build modern applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className={`${
                theme === "dark"
                  ? "bg-[#112240]/70 border-[#1e2d3d] hover:border-[#64ffda]/40"
                  : "bg-white border-[#e9ecef] hover:border-[#00b894]/40"
              } border rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                theme === "dark" ? "hover:shadow-[#64ffda]/10" : "hover:shadow-[#00b894]/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`${
                    theme === "dark"
                      ? "bg-[#64ffda]/10 text-[#64ffda]"
                      : "bg-[#00b894]/10 text-[#00b894]"
                  } p-3 rounded-lg`}
                >
                  {group.icon}
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-[#e6f1ff]" : "text-[#0a192f]"
                  }`}
                >
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`${
                      theme === "dark"
                        ? "bg-[#0a192f] text-[#8892b0] border-[#1e2d3d]"
                        : "bg-[#f8f9fa] text-[#2d3e50] border-[#dee2e6]"
                    } px-3 py-1.5 rounded-md text-sm border transition-all duration-200`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Currently Learning Card - Spans 2 columns on large screens */}
          <motion.div
            variants={itemVariants}
            className={`${
              theme === "dark"
                ? "bg-gradient-to-br from-[#64ffda]/10 to-[#112240]/70 border-[#64ffda]/30"
                : "bg-gradient-to-br from-[#00b894]/10 to-white border-[#00b894]/30"
            } border-2 rounded-xl p-6 backdrop-blur-sm lg:col-span-3`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`${
                  theme === "dark"
                    ? "bg-[#64ffda]/20 text-[#64ffda]"
                    : "bg-[#00b894]/20 text-[#00b894]"
                } p-3 rounded-lg`}
              >
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    theme === "dark" ? "text-[#64ffda]" : "text-[#00b894]"
                  }`}
                >
                  Currently Exploring
                </h3>
                <p className={`text-sm ${getTextSecondaryClass()}`}>
                  Technologies I'm currently learning and experimenting with
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Microservices", "GraphQL Advanced", "Docker & Kubernetes", "AWS Advanced"].map(
                (skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`${
                      theme === "dark"
                        ? "bg-[#64ffda]/10 text-[#64ffda] border-[#64ffda]/30"
                        : "bg-[#00b894]/10 text-[#00b894] border-[#00b894]/30"
                    } px-3 py-1.5 rounded-md text-sm border-2 transition-all duration-200`}
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
