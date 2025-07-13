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
      icon: <Code className="text-blue-400" />,
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
      gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      borderGradient: "from-blue-400 to-indigo-400",
    },
    {
      icon: <Database className="text-purple-400" />,
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
      gradient: "from-purple-500/20 via-pink-500/20 to-red-500/20",
      borderGradient: "from-purple-400 to-pink-400",
    },
    {
      icon: <Palette className="text-orange-400" />,
      title: "Other Technologies",
      description: "Additional programming languages and tools",
      skills: ["Kotlin", "C#", "Python", "Figma"],
      gradient: "from-orange-500/20 via-yellow-500/20 to-amber-500/20",
      borderGradient: "from-orange-400 to-yellow-400",
    },
    {
      icon: <Cloud className="text-cyan-400" />,
      title: "Cloud & DevOps",
      description: "Cloud services and development operations",
      skills: ["AWS", "Git", "GitHub Actions"],
      gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
      borderGradient: "from-cyan-400 to-blue-400",
    },
    {
      icon: <Book className="text-yellow-400" />,
      title: "Currently Learning",
      description: "Expanding knowledge in emerging technologies",
      skills: ["GraphQL", "Microservices", "Flutter", "Docker"],
      gradient: "from-yellow-500/20 via-green-500/20 to-emerald-500/20",
      borderGradient: "from-yellow-400 to-green-400",
    },
  ], []);

  const getSkillCardBackgroundClass = () => {
    return theme === "dark"
      ? "from-[#2c2c2e] to-[#1f1f21] border-gray-700"
      : "from-white/95 to-slate-50/95 border-slate-200/80 shadow-2xl shadow-blue-100/50";
  };

  const getButtonClass = () => {
    return theme === "dark"
      ? "bg-[#2c2c2e]/80 hover:bg-[#2c2c2e] text-white border-gray-600 hover:border-blue-500 backdrop-blur-sm"
      : "bg-white/90 hover:bg-white text-slate-700 border-slate-300 hover:border-blue-400 shadow-lg hover:shadow-xl backdrop-blur-sm";
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
            className="text-4xl md:text-6xl font-bold mb-6 font-poppins bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
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
                            ? `border-transparent shadow-2xl shadow-${
                                category.borderGradient.split(" ")[1]
                              }/30`
                            : theme === "dark"
                            ? "border-gray-600"
                            : "border-slate-300"
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
                                ? "bg-white/10"
                                : "bg-white/90 shadow-lg border border-slate-200/50"
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
                                        ? "bg-white/10 hover:bg-white/20"
                                        : "bg-white/80 hover:bg-white"
                                    } px-3 py-2 rounded-lg text-center transition-all duration-300 border ${
                                      theme === "dark"
                                        ? "border-gray-600 hover:border-blue-400"
                                        : "border-slate-200 hover:border-blue-300"
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
                            ? "bg-white/10"
                            : "bg-white/90 shadow-lg border border-slate-200/50"
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
                                ? "bg-white/10 hover:bg-white/20"
                                : "bg-white/80 hover:bg-white"
                            } px-3 py-2 rounded-lg text-center transition-all duration-300 border ${
                              theme === "dark"
                                ? "border-gray-600 hover:border-blue-400"
                                : "border-slate-200 hover:border-blue-300"
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
                      : "w-4 h-4 bg-gray-400 hover:bg-gray-300 group-hover:scale-125"
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
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
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
