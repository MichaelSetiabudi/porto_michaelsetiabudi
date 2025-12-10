/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();

  // Theme-based styles
  const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const cardBgClass = theme === 'dark' ? 'bg-gray-800/50' : 'bg-white';
  const cardBorderClass = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const cardTextClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const cardHoverClass = theme === 'dark' ? 'hover:shadow-2xl hover:border-gray-600' : 'hover:shadow-xl hover:border-gray-300';
  const previewBgClass = theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100';
  const techBadgeClass = theme === 'dark' ? 'bg-gray-700/50 border-gray-600 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-700';
  const buttonClass = theme === 'dark' ? 'bg-gray-800/80 hover:bg-gray-700 border-gray-600' : 'bg-white/80 hover:bg-gray-100 border-gray-300';
  const buttonTextClass = theme === 'dark' ? 'text-white' : 'text-gray-700';
  const dotClass = theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400';
  const dotActiveClass = theme === 'dark' ? 'bg-purple-500' : 'bg-purple-600';
  const comingSoonBgClass = theme === 'dark' ? 'bg-gray-800/30 border-gray-700' : 'bg-white border-gray-200';
  const comingSoonTextClass = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';

  // Data untuk GitHub projects (nanti bisa diupdate dengan link dan detail sebenarnya)
  const githubProjects = [
    {
      id: 1,
      title: "My Coral",
      description: "An innovative Android application dedicated to coral reef preservation. Features a multi-role system with Users purchasing coral seedlings, Admins managing coral species and cultivation sites, and Workers handling planting operations. Integrated with Midtrans payment gateway, Google Maps for location tracking, and MongoDB for scalable data management. Workers can upload planting progress photos with real-time status updates.",
      githubUrl: "https://github.com/YosuaChristian69/aplikasiadopsiterumbukarang", // Update dengan link sebenarnya
      technologies: ["Kotlin", "MongoDB", "Google Maps API", "Midtrans", "Express.js"],
      type: "mobile"
    },
    {
      id: 2,
      title: "Booking Lapangan Futsal",
      description: "A comprehensive futsal field booking system built with Laravel. Features include real-time field availability checking, time slot management, and dual confirmation system for both customers and administrators. Admins can manage multiple fields (add/edit), while users enjoy seamless booking experience with automated notifications. Currently uses manual verification process ensuring booking accuracy and customer satisfaction.",
      githubUrl: "https://github.com/MichaelSetiabudi/BookingLapanganFutsal",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind"],
      type: "web"
    },
    {
      id: 3,
      title: "Replikasi Sistem Informasi Mahasiswa(SIM) ISTTS",
      description: "A comprehensive replica of ISTTS Student Information System achieving 75% similarity with the original. Built as a final project for Web Programming course, featuring multi-role authentication for students and lecturers, course scheduling system, grade input and management, PDF grade reports generation, and student GPA calculation. Designed specifically for ISTTS internal academic operations with modern web technologies.",
      githubUrl: "https://github.com/Xrror404/Project_BWP", 
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "PDF Generation"],
      type: "web"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % githubProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + githubProjects.length) % githubProjects.length);
  };

  const getProjectIcon = (type: string) => {
    const iconColorClass = theme === 'dark' 
      ? { mobile: 'text-green-400', web: 'text-blue-400', default: 'text-purple-400' }
      : { mobile: 'text-green-600', web: 'text-blue-600', default: 'text-purple-600' };

    switch (type) {
      case 'mobile':
        return (
          <svg className={`w-6 h-6 ${iconColorClass.mobile} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM8 4h4v10H8V4z" clipRule="evenodd" />
          </svg>
        );
      case 'web':
        return (
          <svg className={`w-6 h-6 ${iconColorClass.web} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className={`w-6 h-6 ${iconColorClass.default} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className={`min-h-screen ${bgClass} ${textClass}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-1/4 w-64 h-64 ${theme === 'dark' ? 'bg-[#64ffda]/20' : 'bg-[#00b894]/15'} rounded-full blur-3xl`} />
        <div className={`absolute bottom-20 right-1/4 w-64 h-64 ${theme === 'dark' ? 'bg-[#112240]/30' : 'bg-[#00b894]/10'} rounded-full blur-3xl`} />
      </div>

      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fadeIn">
            <span className={`bg-gradient-to-r ${
              theme === 'dark'
                ? 'from-[#64ffda] to-[#80ffe4]'
                : 'from-[#00b894] to-[#1dd1a1]'
            } bg-clip-text text-transparent`}>
              My Projects
            </span>
          </h1>

          {/* Featured Project Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className={`bg-gradient-to-r ${
                theme === 'dark'
                  ? 'from-[#64ffda] to-[#80ffe4]'
                  : 'from-[#00b894] to-[#1dd1a1]'
              } bg-clip-text text-transparent`}>
                Featured Project (Live)
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className={`${cardBgClass} rounded-xl overflow-hidden shadow-xl border ${cardBorderClass} transform hover:-translate-y-2 transition-all duration-300`}>
                <a
                  href="https://macanmacananai-git-main-michaels-projects-958f3d39.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className={`relative h-64 ${previewBgClass}`}>
                    <div className="absolute inset-0 transform scale-[0.6] origin-top-left -translate-y-16 pointer-events-none">
                      <iframe
                        src="https://macanmacananai-git-main-michaels-projects-958f3d39.vercel.app/"
                        className="w-[170%] h-[210%]"
                        title="Macan-Macanan AI Preview"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 
                      group-hover:bg-opacity-20 transition-all duration-300 
                      flex items-center justify-center">
                      <span className={`opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 text-lg font-semibold
                        bg-gradient-to-r ${
                          theme === 'dark'
                            ? 'from-[#64ffda] to-[#80ffe4]'
                            : 'from-[#00b894] to-[#1dd1a1]'
                        } bg-clip-text text-transparent`}>
                        View Live Project →
                      </span>
                    </div>
                  </div>
                </a>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-[#64ffda]' : 'text-[#00b894]'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${
                      theme === 'dark'
                        ? 'from-[#64ffda] to-[#80ffe4]'
                        : 'from-[#00b894] to-[#1dd1a1]'
                    } bg-clip-text text-transparent`}>
                      Macan-Macanan AI Game
                    </h3>
                    <span className={`px-2 py-1 ${
                      theme === 'dark' ? 'bg-[#64ffda]' : 'bg-[#00b894]'
                    } rounded-full text-xs ${
                      theme === 'dark' ? 'text-[#0a192f]' : 'text-white'
                    }`}>
                      Live
                    </span>
                  </div>
                  <p className={`${cardTextClass} mb-4`}>
                    An innovative implementation of the Javanese traditional board
                    game "Tiger-Macanan" powered by AI using the Minimax
                    algorithm. Built with React.js and Tailwind CSS, this project
                    combines cultural heritage with modern web technology.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Tailwind", "AI/Minimax"].map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${
                          theme === 'dark'
                            ? 'bg-[#64ffda]/10 border border-[#64ffda]/20 text-[#64ffda]'
                            : 'bg-[#00b894]/10 border border-[#00b894]/30 text-[#00b894]'
                        } rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Projects Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className={`bg-gradient-to-r ${
                theme === 'dark'
                  ? 'from-[#64ffda] to-[#80ffe4]'
                  : 'from-[#00b894] to-[#1dd1a1]'
              } bg-clip-text text-transparent`}>
                GitHub Projects
              </span>
            </h2>
            
            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6 animate-fadeIn delay-100">
              {githubProjects.map((project) => (
                <div
                  key={project.id}
                  className={`${cardBgClass} rounded-xl p-6 border ${cardBorderClass} shadow-xl hover:shadow-2xl hover:border-opacity-80 transform hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      {getProjectIcon(project.type)}
                      <h3 className={`text-lg font-bold bg-gradient-to-r ${
                        theme === 'dark'
                          ? 'from-[#64ffda] to-[#80ffe4] group-hover:from-[#80ffe4] group-hover:to-[#64ffda]'
                          : 'from-[#00b894] to-[#1dd1a1] group-hover:from-[#1dd1a1] group-hover:to-[#00b894]'
                      } bg-clip-text text-transparent transition-all leading-tight`}>
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${cardTextClass} hover:text-opacity-100 transition-colors flex-shrink-0 ml-2`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                  
                  <p className={`${cardTextClass} text-sm mb-4 leading-relaxed flex-grow`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 ${theme === 'dark' ? 'bg-gray-700/50 text-gray-300 border-gray-600' : 'bg-gray-200 text-gray-700 border-gray-300'} rounded-full text-xs border`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${
                      theme === 'dark' ? 'text-[#64ffda] hover:text-[#80ffe4]' : 'text-[#00b894] hover:text-[#1dd1a1]'
                    } text-sm font-medium transition-colors group-hover:gap-3 mt-auto`}
                  >
                    View on GitHub
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Carousel Layout */}
            <div className="lg:hidden relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {githubProjects.map((project) => (
                    <div
                      key={project.id}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className={`${cardBgClass} rounded-xl p-6 border ${cardBorderClass} shadow-xl`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            {getProjectIcon(project.type)}
                            <h3 className={`text-lg font-bold bg-gradient-to-r ${
                              theme === 'dark'
                                ? 'from-[#64ffda] to-[#80ffe4]'
                                : 'from-[#00b894] to-[#1dd1a1]'
                            } bg-clip-text text-transparent leading-tight`}>
                              {project.title}
                            </h3>
                          </div>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${cardTextClass} hover:text-opacity-100 transition-colors flex-shrink-0 ml-2`}
                          >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        </div>
                        
                        <p className={`${cardTextClass} text-sm mb-4 leading-relaxed`}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className={`px-2 py-1 ${theme === 'dark' ? 'bg-gray-700/50 text-gray-300 border-gray-600' : 'bg-gray-200 text-gray-700 border-gray-300'} rounded-full text-xs border`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 ${
                            theme === 'dark' ? 'text-[#64ffda] hover:text-[#80ffe4]' : 'text-[#00b894] hover:text-[#1dd1a1]'
                          } text-sm font-medium transition-colors`}
                        >
                          View on GitHub
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className={`absolute left-0 top-1/2 -translate-y-1/2 ${buttonClass} border ${cardBorderClass} rounded-full p-2 transition-all duration-200 z-10`}
                disabled={currentSlide === 0}
              >
                <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className={`absolute right-0 top-1/2 -translate-y-1/2 ${buttonClass} border ${cardBorderClass} rounded-full p-2 transition-all duration-200 z-10`}
                disabled={currentSlide === githubProjects.length - 1}
              >
                <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {githubProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? theme === 'dark' ? 'bg-[#64ffda]' : 'bg-[#00b894]'
                        : theme === 'dark' ? 'bg-[#8892b0]/40 hover:bg-[#8892b0]/60' : 'bg-[#2d3e50]/40 hover:bg-[#2d3e50]/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Add More Projects Section */}
          <div className="text-center">
            <div className={`${cardBgClass} rounded-xl p-8 border ${cardBorderClass} border-dashed`}>
              <svg className={`w-12 h-12 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} mx-auto mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2 bg-gradient-to-r ${theme === 'dark' ? 'from-gray-400 to-gray-600' : 'from-gray-600 to-gray-800'} bg-clip-text text-transparent`}>
                More Projects Coming Soon
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>Stay tuned for more exciting projects!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;