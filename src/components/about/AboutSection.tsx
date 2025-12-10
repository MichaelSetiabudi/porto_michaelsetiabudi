import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";

interface AboutSectionProps {
  getSectionBackgroundClass: (
    variant: "primary" | "secondary" | "tertiary"
  ) => string;
  getTextSecondaryClass: () => string;
  getCardBackgroundClass: () => string;
  theme?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  getSectionBackgroundClass,
  getTextSecondaryClass,
  getCardBackgroundClass,
  theme = "dark",
}) => {
  return (
    <section
      className={`py-8 md:py-12 ${getSectionBackgroundClass("primary")}`}
    >
      <motion.div
        className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="w-full max-w-[1400px] mx-auto">
          <motion.h2
            className={`text-3xl md:text-5xl font-bold text-center bg-gradient-to-r ${
              theme === "dark"
                ? "from-[#64ffda] to-[#80ffe4]"
                : "from-[#00b894] to-[#1dd1a1]"
            } bg-clip-text text-transparent font-poppins mb-8`}
            variants={fadeInUp}
          >
            About Me
          </motion.h2>

          <motion.div
            className={`text-lg md:text-xl ${getTextSecondaryClass()} leading-relaxed font-roboto p-6 md:p-8 ${getCardBackgroundClass()} backdrop-blur-sm rounded-xl shadow-lg`}
            variants={fadeInUp}
          >
            <p className="mb-4">
              Greetings! I&apos;m Michael Setiabudi, a Computer Science
              student at Institut Teknologi Sains Terpadu Surabaya (ISTTS).
            </p>
            <p className="mb-4">
              Born in Surabaya and raised in Probolinggo, where I spent my
              formative years with my grandparents, I&apos;ve developed a deep
              passion for technology and creative problem-solving.
            </p>
            <p className="mb-4">
              As a{" "}
              <span className="highlight">
                UI/UX Designer and Full Stack Developer
              </span>
              , I specialize in comprehensive digital solutions spanning
              <span className="tech-stack">
                web development, mobile application development, and cloud
                computing
              </span>
              . My expertise extends beyond traditional web technologies to
              encompass cross-platform mobile development and cloud
              architecture, enabling me to deliver end-to-end digital
              experiences.
            </p>
            <p className="mb-4">
              My journey in tech is driven by an insatiable curiosity for
              emerging technologies and innovative coding solutions. I&apos;m
              constantly expanding my skill set and have earned several
              professional certifications that validate my expertise across
              multiple technology domains.
            </p>
            <p>
              Currently pursuing my undergraduate degree at ISTTS Surabaya,
              I&apos;m dedicated to combining technical expertise with
              creative design thinking to craft exceptional digital
              experiences. For a comprehensive view of my certifications and
              professional achievements, please visit my LinkedIn profile.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
