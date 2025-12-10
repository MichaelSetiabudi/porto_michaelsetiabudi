import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Book,
  Cloud,
  Palette,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TechnicalSkillsSliderProps, SkillCategory } from "../../lib/types";

const TechnicalSkillsSlider: React.FC<TechnicalSkillsSliderProps> = ({
  theme,
  getSectionBackgroundClass,
  getTextSecondaryClass,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const skillCategories: SkillCategory[] = useMemo(() => [
    {
      icon: <Code className={theme === "dark" ? "text-[#64ffda]" : "text-[#00b894]"} />,
      title: "Frontend Development",
      description: "Building modern and responsive user interfaces",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Vue.js",
        "TypeScript",
      ],
      gradient: theme === "dark" ? "from-[#64ffda]/20 via-[#80ffe4]/20 to-[#64ffda]/20" : "from-[#00b894]/20 via-[#1dd1a1]/20 to-[#00b894]/20",
      borderGradient: theme === "dark" ? "from-[#64ffda] to-[#80ffe4]" : "from-[#00b894] to-[#1dd1a1]",
    },
    {
      icon: <Database className={theme === "dark" ? "text-[#64ffda]" : "text-[#00b894]"} />,
      title: "Backend Development",
      description: "Server-side logic and database management",
      skills: [
        "PHP",
        "Laravel",
        "MySQL",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Firebase",
      ],
      gradient: theme === "dark" ? "from-[#64ffda]/20 via-[#80ffe4]/20 to-[#64ffda]/20" : "from-[#00b894]/20 via-[#1dd1a1]/20 to-[#00b894]/20",
      borderGradient: theme === "dark" ? "from-[#64ffda] to-[#80ffe4]" : "from-[#00b894] to-[#1dd1a1]",
    },
    {
      icon: <Palette className={theme === "dark" ? "text-[#64ffda]" : "text-[#00b894]"} />,
      title: "Other Technologies",
      description: "Additional programming languages and tools",
      skills: ["Kotlin", "C#", "Python", "Figma"],
      gradient: theme === "dark" ? "from-[#64ffda]/20 via-[#80ffe4]/20 to-[#64ffda]/20" : "from-[#00b894]/20 via-[#1dd1a1]/20 to-[#00b894]/20",
      borderGradient: theme === "dark" ? "from-[#64ffda] to-[#80ffe4]" : "from-[#00b894] to-[#1dd1a1]",
    },
    {
      icon: <Cloud className={theme === "dark" ? "text-[#64ffda]" : "text-[#00b894]"} />,
      title: "Cloud & DevOps",
      description: "Cloud services and development operations",
      skills: ["AWS", "Git", "GitHub Actions"],
      gradient: theme === "dark" ? "from-[#64ffda]/20 via-[#80ffe4]/20 to-[#64ffda]/20" : "from-[#00b894]/20 via-[#1dd1a1]/20 to-[#00b894]/20",
      borderGradient: theme === "dark" ? "from-[#64ffda] to-[#80ffe4]" : "from-[#00b894] to-[#1dd1a1]",
    },
    {
      icon: <Book className={theme === "dark" ? "text-[#64ffda]" : "text-[#00b894]"} />,
      title: "Currently Learning",
      description: "Expanding knowledge in emerging technologies",
      skills: ["GraphQL", "Microservices", "Flutter", "Docker"],
      gradient: theme === "dark" ? "from-[#64ffda]/20 via-[#80ffe4]/20 to-[#64ffda]/20" : "from-[#00b894]/20 via-[#1dd1a1]/20 to-[#00b894]/20",
      borderGradient: theme === "dark" ? "from-[#64ffda] to-[#80ffe4]" : "from-[#00b894] to-[#1dd1a1]",
    },
  ], [theme]);

  const getSkillCardBackgroundClass = () => {
    return theme === "dark"
      ? "from-[#112240] to-[#0a192f] border-[#1e2d3d]"
      : "from-white/95 to-[#f8f9fa]/95 border-[#e9ecef] shadow-2xl shadow-[#00b894]/10";
  };

  const getButtonClass = () => {
    return theme === "dark"
      ? "bg-[#112240]/80 hover:bg-[#112240] text-[#e6f1ff] border-[#1e2d3d] hover:border-[#64ffda]/60 backdrop-blur-sm"
      : "bg-white/90 hover:bg-white text-[#0a192f] border-[#dee2e6] hover:border-[#00b894]/60 shadow-lg hover:shadow-xl backdrop-blur-sm";
  };

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, skillCategories.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(
      (prev) => (prev - 1 + skillCategories.length) % skillCategories.length
    );
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, skillCategories.length]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, currentSlide]);

  React.useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating, isHovered, nextSlide]);

  const currentCategory = skillCategories[currentSlide];

  return (
    <section
      className={`py-12 md:py-20 ${getSectionBackgroundClass(
        "secondary"
      )} relative overflow-hidden`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r ${currentCategory.gradient} rounded-full blur-3xl opacity-30 transition-all duration-1000`}
        />
        <div
          className={`absolute bottom-20 right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-l ${currentCategory.gradient} rounded-full blur-3xl opacity-20 transition-all duration-1000`}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className={`text-4xl md:text-6xl font-bold mb-6 font-poppins bg-gradient-to-r ${
              theme === "dark"
                ? "from-[#64ffda] to-[#80ffe4]"
                : "from-[#00b894] to-[#1dd1a1]"
            } bg-clip-text text-transparent`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className={`text-xl md:text-2xl ${getTextSecondaryClass()} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore my expertise across different domains of software
            development
          </motion.p>
        </div>
        <motion.div
          className="relative max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Desktop Version */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-center space-x-6">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className={`p-4 rounded-full transition-all duration-300 border-2 ${getButtonClass()} ${
                  isAnimating
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-110 hover:rotate-12"
                } z-20`}
                aria-label="Previous skills"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <div className="flex items-stretch space-x-6 max-w-5xl h-[600px]">
                {[-1, 0, 1].map((offset) => {
                  const index =
                    (currentSlide + offset + skillCategories.length) %
                    skillCategories.length;
                  const category = skillCategories[index];
                  const isCenter = offset === 0;

                  return (
                    <motion.div
                      key={index}
                      className={`relative transition-all duration-600 cursor-pointer flex ${
                        isCenter
                          ? "scale-110 z-10 w-96"
                          : "scale-90 opacity-70 hover:opacity-90 hover:scale-95 w-80"
                      }`}
                      onClick={() => !isCenter && goToSlide(index)}
                      style={{
                        filter: isCenter ? "none" : "blur(1px)",
                      }}
                    >
                      {isCenter && (
                        <div
                          className={`absolute -inset-1 bg-gradient-to-r ${category.borderGradient} rounded-2xl blur-sm opacity-75`}
                        />
                      )}

                      <div
                        className={`relative p-8 bg-gradient-to-br ${getSkillCardBackgroundClass()} rounded-2xl border-2 transition-all duration-500 backdrop-blur-xl flex flex-col h-full w-full ${
                          isCenter
                            ? `border-transparent shadow-2xl ${
                                theme === "dark" ? "shadow-[#64ffda]/30" : "shadow-[#00b894]/30"
                              }`
                            : theme === "dark"
                            ? "border-[#1e2d3d]"
                            : "border-[#dee2e6]"
                        }`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-50`}
                        />

                        <div className="relative z-10 flex flex-col h-full">
                          {/* Icon */}
                          <motion.div
                            className={`w-20 h-20 ${
                              theme === "dark"
                                ? "bg-[#64ffda]/10 border border-[#64ffda]/20"
                                : "bg-white/90 shadow-lg border border-[#00b894]/30"
                            } rounded-2xl flex items-center justify-center mb-6 mx-auto flex-shrink-0`}
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            animate={isCenter ? { scale: [1, 1.05, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {React.cloneElement(category.icon, {
                              className: "w-10 h-10",
                            })}
                          </motion.div>
                          <h3
                            className={`text-2xl font-bold mb-3 font-poppins text-center flex-shrink-0 ${
                              isCenter
                                ? `bg-gradient-to-r ${category.borderGradient} bg-clip-text text-transparent`
                                : getTextSecondaryClass()
                            }`}
                          >
                            {category.title}
                          </h3>
                          <p
                            className={`text-sm ${getTextSecondaryClass()} text-center mb-6 leading-relaxed flex-shrink-0`}
                          >
                            {category.description}
                          </p>
                          <div className="flex-grow flex flex-col justify-start">
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              {category.skills
                                .slice(0, isCenter ? category.skills.length : 6)
                                .map((skill, skillIndex) => (
                                  <motion.div
                                    key={skillIndex}
                                    className={`${
                                      theme === "dark"
                                        ? "bg-[#64ffda]/10 hover:bg-[#64ffda]/20"
                                        : "bg-white/80 hover:bg-white"
                                    } px-3 py-2 rounded-lg text-center transition-all duration-300 border ${
                                      theme === "dark"
                                        ? "border-[#1e2d3d] hover:border-[#64ffda]/40"
                                        : "border-[#dee2e6] hover:border-[#00b894]/60"
                                    } min-h-[40px] flex items-center justify-center`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: skillIndex * 0.1,
                                    }}
                                  >
                                    <span
                                      className={`text-xs font-medium ${getTextSecondaryClass()}`}
                                    >
                                      {skill}
                                    </span>
                                  </motion.div>
                                ))}
                            </div>
                            <div className="h-6 flex items-center justify-center">
                              {!isCenter && category.skills.length > 6 && (
                                <span
                                  className={`text-xs ${getTextSecondaryClass()} opacity-70`}
                                >
                                  +{category.skills.length - 6} more...
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className={`p-4 rounded-full transition-all duration-300 border-2 ${getButtonClass()} ${
                  isAnimating
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-110 hover:-rotate-12"
                } z-20`}
                aria-label="Next skills"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden">
            <div className="relative">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 border ${getButtonClass()} ${
                  isAnimating
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-110"
                }`}
                aria-label="Previous skills"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 border ${getButtonClass()} ${
                  isAnimating
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-110"
                }`}
                aria-label="Next skills"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="px-16 md:px-20">
                <motion.div
                  key={currentSlide}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${currentCategory.borderGradient} rounded-2xl blur-sm opacity-75`}
                  />

                  <div
                    className={`relative p-6 md:p-8 bg-gradient-to-br ${getSkillCardBackgroundClass()} rounded-2xl border-2 border-transparent shadow-2xl backdrop-blur-xl`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${currentCategory.gradient} rounded-2xl opacity-50`}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className={`w-16 h-16 md:w-20 md:h-20 ${
                          theme === "dark"
                            ? "bg-[#64ffda]/10 border border-[#64ffda]/20"
                            : "bg-white/90 shadow-lg border border-[#00b894]/30"
                        } rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {React.cloneElement(currentCategory.icon, {
                          className: "w-8 h-8 md:w-10 md:h-10",
                        })}
                      </motion.div>
                      <h3
                        className={`text-2xl md:text-3xl font-bold mb-3 font-poppins text-center bg-gradient-to-r ${currentCategory.borderGradient} bg-clip-text text-transparent`}
                      >
                        {currentCategory.title}
                      </h3>
                      <p
                        className={`text-sm md:text-base ${getTextSecondaryClass()} text-center mb-6 leading-relaxed`}
                      >
                        {currentCategory.description}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {currentCategory.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            className={`${
                              theme === "dark"
                                ? "bg-[#64ffda]/10 hover:bg-[#64ffda]/20"
                                : "bg-white/80 hover:bg-white"
                            } px-3 py-2 rounded-lg text-center transition-all duration-300 border ${
                              theme === "dark"
                                ? "border-[#1e2d3d] hover:border-[#64ffda]/40"
                                : "border-[#dee2e6] hover:border-[#00b894]/60"
                            }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: skillIndex * 0.1,
                            }}
                          >
                            <span
                              className={`text-sm font-medium ${getTextSecondaryClass()}`}
                            >
                              {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center mt-8 md:mt-12 space-x-4">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`group relative transition-all duration-300 ${
                  isAnimating ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                aria-label={`Go to ${category.title}`}
              >
                <div
                  className={`rounded-full transition-all duration-500 ${
                    index === currentSlide
                      ? "w-16 h-4 bg-gradient-to-r " + category.borderGradient
                      : theme === "dark"
                      ? "w-4 h-4 bg-[#8892b0]/40 hover:bg-[#8892b0]/60 group-hover:scale-125"
                      : "w-4 h-4 bg-[#2d3e50]/40 hover:bg-[#2d3e50]/60 group-hover:scale-125"
                  }`}
                />
                {index === currentSlide && (
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.borderGradient} opacity-50`}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                <div
                  className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 ${
                    theme === "dark"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800 shadow-lg"
                  } rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border ${
                    theme === "dark" ? "border-gray-600" : "border-gray-200"
                  }`}
                >
                  {category.title}
                </div>
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div
              className={`h-2 ${
                theme === "dark" ? "bg-[#1e2d3d]" : "bg-[#dee2e6]"
              } rounded-full overflow-hidden`}
            >
              <motion.div
                className={`h-full bg-gradient-to-r ${currentCategory.borderGradient} rounded-full relative`}
                initial={{ width: 0 }}
                animate={{
                  width: `${
                    ((currentSlide + 1) / skillCategories.length) * 100
                  }%`,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
              </motion.div>
            </div>
            <div className="flex justify-between text-sm mt-3">
              <span className={`${getTextSecondaryClass()} font-medium`}>
                {currentSlide + 1} / {skillCategories.length}
              </span>
              <span className={`${getTextSecondaryClass()} font-medium`}>
                {currentCategory.title}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSlider;
