import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Layout,
  Database,
  Book,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

// Define types for component props
interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  delay: number;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Main = () => {
  const { theme } = useTheme();
  
  const socialLinks = {
    github: "https://github.com/MichaelSetiabudi",
    linkedin: "https://www.linkedin.com/in/michael-setiabudi-032090297/",
  };

  return (
    <div className="relative w-full transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-16 md:pt-20 flex items-center bg-[var(--bg-primary)] transition-colors duration-300">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-6 z-10 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-[var(--text-primary)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Michael Setiabudi
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-[var(--text-secondary)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Computer Science Student at ISTTS passionate about Web
                Development &amp; UI/UX Design
              </motion.p>
              <motion.div
                className="flex justify-center md:justify-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[var(--accent-primary)]/10 hover:bg-[var(--accent-primary)]/20 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6 text-[var(--accent-primary)]" />
                </motion.a>
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[var(--accent-primary)]/10 hover:bg-[var(--accent-primary)]/20 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6 text-[var(--accent-primary)]" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-48 h-48 md:w-64 md:h-64 relative z-10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="relative w-full h-full rounded-full border-4 border-[var(--border-color)] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/MichaelSetiabudi.jpg"
                    alt="Michael Setiabudi"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)] transition-colors duration-300">
        <motion.div
          className="container mx-auto px-4 sm:px-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-[var(--text-primary)]"
            variants={fadeInUp}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <SkillCard
              icon={<Code className="text-[var(--accent-primary)]" />}
              title="Frontend Development"
              skills={[
                "HTML/CSS",
                "JavaScript",
                "React Basics",
                "Tailwind CSS",
                "React",
              ]}
              delay={0}
            />
            <SkillCard
              icon={<Database className="text-[var(--accent-primary)]" />}
              title="Backend Knowledge"
              skills={[
                "Node.js",
                "Express",
                "MySQL",
                "MongoDB",
                "PHP",
                "Laravel",
              ]}
              delay={0.2}
            />
            <SkillCard
              icon={<Layout className="text-[var(--accent-primary)]" />}
              title="UI/UX Fundamentals"
              skills={["Responsive Design", "User Interface", "Wireframing"]}
              delay={0.4}
            />
            <SkillCard
              icon={<Book className="text-[var(--accent-primary)]" />}
              title="Currently Learning"
              skills={["Next.js", "TypeScript", "Advanced JavaScript"]}
              delay={0.6}
            />
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-20 bg-[var(--bg-primary)] transition-colors duration-300">
        <motion.div
          className="container mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-[var(--text-primary)]"
            variants={fadeInUp}
          >
            Education
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div
              className="bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-primary)] p-4 md:p-6 h-full flex flex-col transition-all duration-300 shadow-md backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-[var(--text-primary)]">
                Institut Sains dan Teknologi Terpadu Surabaya (ISTTS)
              </h3>
              <p className="text-[var(--text-secondary)]">Computer Science</p>
              <div className="mt-4 flex-grow">
                <p className="text-[var(--text-primary)]">Relevant Coursework:</p>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <motion.li variants={fadeInUp} className="text-[var(--text-secondary)]">• Web Programming</motion.li>
                  <motion.li variants={fadeInUp} className="text-[var(--text-secondary)]">• Data Structures</motion.li>
                  <motion.li variants={fadeInUp} className="text-[var(--text-secondary)]">• Database Systems</motion.li>
                  <motion.li variants={fadeInUp} className="text-[var(--text-secondary)]">
                    • Object-Oriented Programming
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20 bg-[var(--bg-secondary)] transition-colors duration-300">
        <motion.div
          className="container mx-auto px-4 sm:px-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-[var(--text-primary)]"
            variants={fadeInUp}
          >
            Academic Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard
              title="Macan-Macanan Master"
              description="Traditional Javanese Macan-Macanan Game Made by React.js and Tailwind CSS with Artificial Intelligence implementation"
              tags={["React", "Tailwind CSS", "JavaScript"]}
              delay={0}
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-[var(--bg-primary)] transition-colors duration-300">
        <motion.div
          className="container mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[var(--text-primary)]"
              variants={fadeInUp}
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.p className="text-[var(--text-secondary)] mb-4" variants={fadeInUp}>
              I&apos;m always eager to learn and collaborate on new projects.
            </motion.p>
            <motion.div
              className="flex items-center justify-center space-x-2 text-base md:text-lg text-[var(--text-secondary)]"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-5 h-5" />
              <span>michaelsetiabudi@gmail.com</span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// SkillCard Component
const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  skills,
  delay,
}) => {
  return (
    <motion.div
      className="p-4 md:p-6 bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all duration-300 shadow-md backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="w-10 h-10 md:w-12 md:h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg md:text-xl font-semibold mb-4 text-[var(--text-primary)]">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            className="text-[var(--text-secondary)]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

// ProjectCard Component
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  delay,
}) => {
  return (
    <motion.div
      className="p-4 md:p-6 bg-[var(--card-bg)] rounded-xl border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all duration-300 shadow-md backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
    >
      <h3 className="text-lg md:text-xl font-semibold mb-3 text-[var(--text-primary)]">{title}</h3>
      <p className="text-[var(--text-secondary)] mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <motion.span
            key={tag}
            className="px-3 py-1 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] rounded-full text-sm transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.1 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Main;