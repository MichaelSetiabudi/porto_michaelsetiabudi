import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-4 shadow-lg border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">©</span>
            <span className="font-light">{currentYear}</span>
            <span className="font-medium ml-2">Michael-Dev</span>
          </div>
          
          <div className="flex items-center mt-3 md:mt-0 space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;