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
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-[#64ffda]/10 p-2 rounded-lg">
                <svg className="w-5 h-5 text-[#64ffda]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#e6f1ff]">Current Experience</h3>
                <span className="inline-block mt-1 px-2 py-1 bg-[#64ffda]/10 border border-[#64ffda]/30 text-[#64ffda] text-xs rounded-full">
                  Internship
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="text-lg font-semibold text-[#64ffda] mb-1">Four Points By Sheraton Surabaya</h4>
                <p className="text-sm text-[#8892b0]">Full Stack Developer | IT Division</p>
                <p className="text-xs text-[#8892b0] mt-1">Aug 2025 - Present</p>
              </div>
              <div className="border-t border-[#1e2d3d] pt-3">
                <p className="text-sm text-[#8892b0] mb-2">Key Projects:</p>
                <ul className="space-y-1 text-sm text-[#8892b0]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#64ffda] mt-1">•</span>
                    <span>Hotel Booking System (Flutter, FastAPI)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#64ffda] mt-1">•</span>
                    <span>Canteen Attendance System (PHP, MySQL)</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => router.push('/aboutme')}
                className="mt-4 w-full px-4 py-2 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 border border-[#64ffda]/30 text-[#64ffda] rounded-lg transition-all duration-300 text-sm font-medium"
              >
                View Full Experience →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
