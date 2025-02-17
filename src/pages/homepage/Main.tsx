import React from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Main: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                An innovative implementation of Javanese tradition board game
                &ldquo;Tiger-Macanan&rdquo; is powered by AI using Minimax
                algorithm. Built with React.js and Tailwind CSS, this the
                project combines cultural heritage with the modern web
                technology. This project was created to fulfill my final
                assignment in the Artificial Intelligence course
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
          <div className="bg-[#1e1e1e] rounded-xl p-6 border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <p className="text-gray-400">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
