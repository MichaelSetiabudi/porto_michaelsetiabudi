import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import AnimatedProfileImage from "./AnimatedProfileImage";
import SocialLink from "./SocialLink";

interface HeroSectionProps {
  theme: string;
  getBackgroundClass: () => string;
  getTextSecondaryClass: () => string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  getBackgroundClass,
  getTextSecondaryClass,
}) => {
  const socialLinks = {
    github: "https://github.com/MichaelSetiabudi",
    linkedin: "https://www.linkedin.com/in/michael-setiabudi-032090297/",
  };

  return (
    <section className="relative min-h-[70vh] pt-8 md:pt-12 flex items-center">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className={`absolute top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 ${
            theme === "dark" ? "bg-[#64ffda]/20" : "bg-[#00b894]/15"
          } rounded-full blur-3xl`}
        />
        <div
          className={`absolute bottom-20 right-1/4 w-64 h-64 md:w-96 md:h-96 ${
            theme === "dark" ? "bg-[#112240]/30" : "bg-[#00b894]/10"
          } rounded-full blur-3xl`}
        />
        {theme === "light" && (
          <>
            <div className="absolute top-40 right-1/3 w-32 h-32 bg-[#00b894]/10 rounded-full blur-2xl" />
            <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-[#1dd1a1]/12 rounded-full blur-3xl" />
          </>
        )}
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 py-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            className="space-y-6 md:space-y-8 z-10 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className={`bg-gradient-to-r ${
                theme === "dark"
                  ? "from-[#64ffda] to-[#80ffe4]"
                  : "from-[#00b894] to-[#1dd1a1]"
              } bg-clip-text text-transparent`}>
                Michael Setiabudi
              </span>
            </motion.h1>
            <motion.p
              className={`text-xl md:text-2xl lg:text-3xl ${getTextSecondaryClass()} font-roboto`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Computer Science Student at ISTTS
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <SocialLink href={socialLinks.github} icon={<Github />} />
              <SocialLink href={socialLinks.linkedin} icon={<Linkedin />} />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 relative z-10">
              <AnimatedProfileImage />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
