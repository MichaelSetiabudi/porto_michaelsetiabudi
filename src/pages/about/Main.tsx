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

interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  skills: string[];
  delay: number;
}

interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
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
    <div className="relative w-full bg-[#1a1a1c] font-inter">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-8 md:pt-12 flex items-center">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl" />
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
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Michael Setiabudi
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-roboto"
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

      {/* Biography Section - Wider for desktop */}
<section className="py-8 md:py-12 bg-gradient-to-b from-[#232325] to-[#1a1a1c]">
  <motion.div
    className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <motion.div className="w-full max-w-[1400px] mx-auto">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-poppins mb-8"
        variants={fadeInUp}
      >
        About Me
      </motion.h2>
      
      <motion.div 
        className="text-lg md:text-xl text-gray-300 leading-relaxed font-roboto p-6 md:p-8 bg-[#232325]/70 backdrop-blur-sm rounded-xl border border-gray-800 shadow-lg"
        variants={fadeInUp}
      >
        <p className="mb-4">
          Greetings! I&apos;m Michael Setiabudi, a Computer Science student at Institut Teknologi Sains Terpadu Surabaya (ISTTS).
        </p>
        <p className="mb-4">
          Born in Surabaya and raised in Probolinggo, where I spent my formative years with my grandparents, I&apos;ve developed a deep passion for technology and creative problem-solving.
        </p>
        <p className="mb-4">
          As a UI/UX Designer and Full Stack Web Development enthusiast, I&apos;m constantly pushing the boundaries of my knowledge in website development. My journey in tech is driven by an insatiable curiosity for emerging technologies and creative coding solutions.
        </p>
        <p>
          Currently pursuing my undergraduate degree in iSTTS Surabaya, I&apos;m dedicated to combining technical expertise with creative design thinking to craft exceptional digital experiences.
        </p>
      </motion.div>
    </motion.div>
  </motion.div>
</section>

      {/* Skills Section */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-[#1a1a1c] via-[#232325] to-[#1a1a1c]">
        <motion.div
          className="container mx-auto px-6 lg:px-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center font-poppins bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            <SkillCard
              icon={<Code className="text-blue-400" />}
              title="Frontend Development"
              skills={[
                "React",
                "Next.js",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind",
              ]}
              delay={0}
            />
            <SkillCard
              icon={<Database className="text-purple-400" />}
              title="Backend Development"
              skills={["PHP", "Laravel", "MySQL", "MongoDB"]}
              delay={0.2}
            />
            <SkillCard
              icon={<Layout className="text-pink-400" />}
              title="UI/UX Design"
              skills={["Responsive Design", "User Interface", "Wireframing"]}
              delay={0.4}
            />
            <SkillCard
              icon={<Book className="text-indigo-400" />}
              title="Currently Learning"
              skills={["TypeScript", "GraphQL", "AWS"]}
              delay={0.6}
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section - FIXED */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-[#1a1a1c] to-[#232325]">
        <motion.div
          className="container mx-auto px-4 md:px-6 lg:px-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-md"></div>
            <div className="relative bg-[#1f1f23]/80 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-sm">
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-6 font-poppins bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                Let&apos;s Connect
              </motion.h2>
              <motion.p
                className="text-gray-300 mb-6 text-lg md:text-xl font-roboto"
                variants={fadeInUp}
              >
                I&apos;m always open to new opportunities and collaborations.
              </motion.p>
              <motion.div
                className="inline-flex items-center justify-center space-x-3 text-gray-300 bg-white/5 px-5 py-3 rounded-full hover:bg-white/10 transition-all duration-300 border border-gray-700"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="font-roboto text-base md:text-lg truncate">
                  michaelsetiabudi@gmail.com
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {React.cloneElement(icon, { className: "w-7 h-7" })}
  </motion.a>
);

const AnimatedProfileImage = () => (
  <>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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
  </>
);

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  skills,
  delay,
}) => (
  <motion.div
    className="p-6 bg-gradient-to-br from-[#2c2c2e] to-[#1f1f21] rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 font-roboto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.03 }}
  >
    <motion.div
      className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mb-4 font-poppins bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {title}
    </h3>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <motion.li
          key={skill}
          className="text-gray-300 text-lg"
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

export default Main;
