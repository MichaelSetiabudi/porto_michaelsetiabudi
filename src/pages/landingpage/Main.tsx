/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Image from "next/image";

const customAnimations = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .animate-fadeIn {
    animation: fadeIn 1s ease forwards;
  }
  .animate-slideInLeft {
    animation: slideInLeft 1s ease forwards;
  }
  .cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: currentColor;
    margin-left: 2px;
    animation: blink 1s step-end infinite;
  }
`;
const TypewriterText = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const phrases = [
    "Web Developer",
    "UI/UX Enthusiast",
  ];
  const typingSpeed = 70; 
  const deletingSpeed = 30; 
  const pauseTime = 1500;   

  useEffect(() => {
    const currentPhrase = phrases[loopNum % phrases.length];
    
    const tick = () => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
      }
    };

    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && text === currentPhrase) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    } else {
      timeoutId = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, loopNum, phrases]);

  return (
    <p className="text-xl md:text-2xl text-center h-8">
      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
        {text}
      </span>
      <span className="cursor" />
    </p>
  );
};
const Main = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx global>
        {customAnimations}
      </style>

      <div className="min-h-screen bg-gray-900 text-gray-100">
        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-center animate-slideInLeft">
              Hi, I'm Michael Setiabudi
            </h1>
            <TypewriterText />
            <div className="text-center">
              <button
                onClick={scrollToProjects}
                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 animate-fadeIn transform hover:-translate-y-1 hover:shadow-lg"
              >
                My Project
              </button>
            </div>
          </div>
        </section>
        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeIn">
              About Me
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-center leading-relaxed animate-fadeIn">
                I am a passionate student with a deep focus on web development,
                currently pursuing my studies at ISTTS. My expertise lies in
                creating modern web applications that perfectly balance
                exceptional UI/UX design with robust functionality.
              </p>
              <p className="text-lg text-center leading-relaxed animate-fadeIn delay-100">
                With a comprehensive understanding of both frontend and backend
                technologies, I strive to deliver seamless, user-centric
                solutions that not only look stunning but also perform
                flawlessly.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 animate-fadeIn delay-200">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  Full Stack Development
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  UI/UX Design
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                  Modern Web Technologies
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-700 rounded-xl overflow-hidden shadow-xl">
                <a
                  href="https://macanmacananai-git-main-michaels-projects-958f3d39.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative h-64 bg-gray-600 overflow-hidden">
                    <div className="absolute inset-0 transform scale-[0.6] origin-top-left -translate-y-16 pointer-events-none">
                      <iframe
                        src="https://macanmacananai-git-main-michaels-projects-958f3d39.vercel.app/"
                        className="w-[170%] h-[210%]"
                        title="Macan-Macanan AI Preview"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                        View Project →
                      </span>
                    </div>
                  </div>
                </a>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Macan-Macanan AI Game
                  </h3>
                  <p className="text-gray-300">
                    An innovative implementation of Javanese tradition board
                    game "Tiger-Macanan" is powered by AI using Minimax
                    algorithm. Built with React.js and Tailwind CSS, this the
                    project combines cultural heritage with the modern web
                    technology. This project was created to fulfill my final
                    assignment in the Artificial Intelligence course on iSTTS
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-600 rounded-full text-sm text-gray-200">
                      React.js
                    </span>
                    <span className="px-3 py-1 bg-gray-600 rounded-full text-sm text-gray-200">
                      Tailwind
                    </span>
                    <span className="px-3 py-1 bg-gray-600 rounded-full text-sm text-gray-200">
                      AI/Minimax
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 rounded-xl overflow-hidden shadow-xl animate-fadeIn">
                <div className="relative h-64">
                  <Image
                    src="/api/placeholder/800/600"
                    alt="Project 2 Preview"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Coming Soon</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
              Technical Expertise
            </h2>

            <div className="space-y-12">
              <div className="animate-fadeIn">
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-red-400">
                  Frontend Development
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { name: "React" },
                    { name: "Next.js" },
                    { name: "JavaScript" },
                    { name: "HTML5" },
                    { name: "CSS3" },
                    { name: "Tailwind" },
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700 group"
                    >
                      <div className="space-y-2">
                        <span className="text-lg font-medium block group-hover:text-red-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-fadeIn delay-100">
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-blue-400">
                  Backend Development
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { name: "PHP" },
                    { name: "Laravel"},
                    { name: "MySQL"},
                    { name: "MongoDB"},
                  ].map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-700 group"
                    >
                      <div className="space-y-2">
                        <span className="text-lg font-medium block group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-fadeIn delay-200">
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-purple-400">
                  Development Tools & Practices
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "Git & GitHub",
                    "REST APIs",
                    "Responsive Design",
                    "Performance Optimization",
                    "UI/UX Best Practices",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-gray-800/50 rounded-full text-sm border border-gray-700 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
