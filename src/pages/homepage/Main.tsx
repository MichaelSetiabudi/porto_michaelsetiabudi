import React from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Main: React.FC = () => {
  const router = useRouter();

 

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-100">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Projects Card */}
          <div className="bg-[#1e1e1e] rounded-xl p-6 border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
            <p className="text-gray-400">Your projects content goes here. Add relevant information about your portfolio.</p>
          </div>

          {/* Skills Card */}
          <div className="bg-[#1e1e1e] rounded-xl p-6 border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <p className="text-gray-400">Your skills content goes here. Add relevant information about your portfolio.</p>
          </div>

          {/* Experience Card */}
          <div className="bg-[#1e1e1e] rounded-xl p-6 border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <p className="text-gray-400">Your experience content goes here. Add relevant information about your portfolio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;