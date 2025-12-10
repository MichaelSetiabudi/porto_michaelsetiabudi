import React from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Main: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#e6f1ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#112240] rounded-xl overflow-hidden shadow-xl border border-[#1e2d3d]">
            <a
              href="https://macanmacananai-git-main-michaels-projects-958f3d39.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative h-64 bg-[#0a192f] overflow-hidden">
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
              <h3 className="text-xl font-bold mb-3 text-[#64ffda]">
                Macan-Macanan AI Game
              </h3>
              <p className="text-[#8892b0]">
                An innovative implementation of Javanese tradition board game
                &ldquo;Tiger-Macanan&rdquo; is powered by AI using Minimax
                algorithm. Built with React.js and Tailwind CSS, this the
                project combines cultural heritage with the modern web
                technology. This project was created to fulfill my final
                assignment in the Artificial Intelligence course
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#64ffda]/10 border border-[#64ffda]/20 rounded-full text-sm text-[#64ffda]">
                  React.js
                </span>
                <span className="px-3 py-1 bg-[#64ffda]/10 border border-[#64ffda]/20 rounded-full text-sm text-[#64ffda]">
                  Tailwind
                </span>
                <span className="px-3 py-1 bg-[#64ffda]/10 border border-[#64ffda]/20 rounded-full text-sm text-[#64ffda]">
                  AI/Minimax
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#112240] rounded-xl p-6 border border-[#1e2d3d] shadow-xl hover:shadow-2xl hover:border-[#64ffda]/40 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#e6f1ff]">Experience</h3>
            <p className="text-[#8892b0]">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
