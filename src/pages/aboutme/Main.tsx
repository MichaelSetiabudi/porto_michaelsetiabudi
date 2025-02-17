import React from "react";
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
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const Main = () => {
  const socialLinks = {
    github: "https://github.com/MichaelSetiabudi",
    linkedin: "https://www.linkedin.com/in/michael-setiabudi-032090297/",
  };
  return (
    <div className="min-h-screen bg-[#2c2c2e] text-[#e5e5e5] w-full">
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
              <h1 className="text-5xl font-bold text-white">
                Michael Setiabudi
              </h1>
              <p className="text-xl text-gray-300">
                Computer Science Student at ISTTS passionate about Web
                Development &amp; UI/UX Design
              </p>
              <div className="flex space-x-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-64 mx-auto relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden">
                  <Image
                    src="/MichaelSetiabudi.jpg"
                    alt="Michael Setiabudi"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#232325]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Code />}
              title="Frontend Development"
              skills={[
                "HTML/CSS",
                "JavaScript",
                "React Basics",
                "Tailwind CSS",
              ]}
            />
            <SkillCard
              icon={<Database />}
              title="Backend Knowledge"
              skills={["Node.js", "Express", "MySQL","MongoDB","PHP","Laravel"]}
            />
            <SkillCard
              icon={<Layout />}
              title="UI/UX Fundamentals"
              skills={[
                "Responsive Design",
                "User Interface",
                "Wireframing",
              ]}
            />
            <SkillCard
              icon={<Book />}
              title="Currently Learning"
              skills={["React", "Next.js", "TypeScript", "Advanced JavaScript"]}
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#2c2c2e] rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-semibold">
                Institut Sains dan Teknologi Terpadu Surabaya (ISTTS)
              </h3>
              <p className="text-gray-400 mt-2">Computer Science</p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300">Relevant Coursework:</p>
                <ul className="grid grid-cols-2 gap-2 text-gray-400">
                  <li>• Web Programming</li>
                  <li>• Data Structures</li>
                  <li>• Database Systems</li>
                  <li>• Object-Oriented Programming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-[#232325]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Academic Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Macan-Macanan Master"
              description="Tradisional Javanese Macan-Macanan Game Made by React.js and Tailwind CSS with Artificial Intelligence implementation"
              tags={["React", "Tailwind CSS", "JavaScript"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
            <p className="text-gray-300 mb-4">
              I&apos;m always eager to learn and collaborate on new projects.
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg text-gray-300">
              <Mail className="w-5 h-5" />
              <span>michaelsetiabudi@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Skill Card Component
const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => (
  <div className="p-6 bg-[#2c2c2e] rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-400">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

// Project Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
}) => (
  <div className="p-6 bg-[#2c2c2e] rounded-xl border border-gray-700 hover:border-blue-500 transition-all">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Main;
