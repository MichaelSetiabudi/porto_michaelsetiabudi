/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fadeIn">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 animate-fadeIn delay-100">
            {/* Macan-Macanan AI Game */}
            <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-xl border border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
              <a
                href="https://macanmacananai-git-main-michaels-projects-958f3d39.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative h-64 bg-gray-700/50">
                  <div className="absolute inset-0 bg-black bg-opacity-0 
                    group-hover:bg-opacity-20 transition-all duration-300 
                    flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 text-lg font-semibold 
                      bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      View Project →
                    </span>
                  </div>
                </div>
              </a>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Macan-Macanan AI Game
                </h3>
                <p className="text-gray-300">
                  An innovative implementation of the Javanese traditional board
                  game "Tiger-Macanan" powered by AI using the Minimax
                  algorithm. Built with React.js and Tailwind CSS.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React.js", "Tailwind", "AI/Minimax"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Placeholder */}
            <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-xl border border-gray-700 transform hover:-translate-y-2 transition-all duration-300">
              <div className="relative h-64 bg-gray-700/50 flex items-center justify-center">
                <span className="text-gray-400 text-lg bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future Project
                </h3>
                <p className="text-gray-300">
                  More exciting projects are in development. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;