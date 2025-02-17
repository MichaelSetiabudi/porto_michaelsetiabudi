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
  const socialLinks = {
    github: "https://github.com/MichaelSetiabudi",
    linkedin: "https://www.linkedin.com/in/michael-setiabudi-032090297/",
  };

  return (
    <div className="min-h-screen bg-[#2c2c2e] text-[#e5e5e5] w-full">
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Michael Setiabudi
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Computer Science Student at ISTTS passionate about Web
                Development &amp; UI/UX Design
              </motion.p>
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-64 h-64 mx-auto relative z-10">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5] 
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden"
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

      <section className="py-20 bg-[#232325]">
        <motion.div 
          className="container mx-auto px-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Code />}
              title="Frontend Development"
              skills={["HTML/CSS", "JavaScript", "React Basics", "Tailwind CSS"]}
              delay={0}
            />
            <SkillCard
              icon={<Database />}
              title="Backend Knowledge"
              skills={["Node.js", "Express", "MySQL", "MongoDB", "PHP", "Laravel"]}
              delay={0.2}
            />
            <SkillCard
              icon={<Layout />}
              title="UI/UX Fundamentals"
              skills={["Responsive Design", "User Interface", "Wireframing"]}
              delay={0.4}
            />
            <SkillCard
              icon={<Book />}
              title="Currently Learning"
              skills={["React", "Next.js", "TypeScript", "Advanced JavaScript"]}
              delay={0.6}
            />
          </div>
        </motion.div>
      </section>
      <section className="py-20">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Education
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-[#2c2c2e] rounded-xl border border-gray-700 p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold">
                Institut Sains dan Teknologi Terpadu Surabaya (ISTTS)
              </h3>
              <p className="text-gray-400 mt-2">Computer Science</p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">Relevant Coursework:</p>
                <ul className="grid grid-cols-2 gap-2 text-gray-400">
                  <motion.li variants={fadeInUp}>• Web Programming</motion.li>
                  <motion.li variants={fadeInUp}>• Data Structures</motion.li>
                  <motion.li variants={fadeInUp}>• Database Systems</motion.li>
                  <motion.li variants={fadeInUp}>• Object-Oriented Programming</motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-[#232325]">
        <motion.div 
          className="container mx-auto px-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            Academic Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Macan-Macanan Master"
              description="Tradisional Javanese Macan-Macanan Game Made by React.js and Tailwind CSS with Artificial Intelligence implementation"
              tags={["React", "Tailwind CSS", "JavaScript"]}
              delay={0}
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              variants={fadeInUp}
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-4"
              variants={fadeInUp}
            >
              I&apos;m always eager to learn and collaborate on new projects.
            </motion.p>
            <motion.div 
              className="flex items-center justify-center space-x-2 text-lg text-gray-300"
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

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills, delay }) => (
  <motion.div
    className="p-6 bg-[#2c2c2e] rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.03 }}
  >
    <motion.div 
      className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <motion.li 
          key={skill} 
          className="text-gray-400"
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

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  delay,
}) => (
  <motion.div
    className="p-6 bg-[#2c2c2e] rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.03 }}
  >
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <motion.span
          key={tag}
          className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400"
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

export default Main;