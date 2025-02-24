import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className={`${navButtonClass} group`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-gray-300 group-hover:text-indigo-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600 group-hover:text-indigo-600" />
      )}
    </button>
  );

  useEffect(() => {
    const isUserLoggedIn = Cookies.get("isLoggedIn") === "true";
    setLoggedIn(isUserLoggedIn);

    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setIsMenuOpen(false);
    setShowFeatures(false);
  };

  const handleClose = () => {
    setShowLoginModal(false);
    setErrorMessage("");
  };

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      Cookies.set("isLoggedIn", "true", { path: "/" });
      setShowLoginModal(false);
      setLoggedIn(true);
      router.push("/homepage");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const handleHomeClick = () => {
    router.push("/");
    setIsMenuOpen(false);
    setShowFeatures(false);
  };

  const handleChatbotClick = () => {
    router.push("/chatbot");
    setIsMenuOpen(false);
    setShowFeatures(false);
  };

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    setLoggedIn(false);
    router.push("/");
    setIsMenuOpen(false);
    setShowFeatures(false);
  };

  const navButtonClass = `
    text-gray-300 
    hover:text-indigo-400 
    px-3 md:px-6 py-2 md:py-3 
    transition-all 
    duration-300 
    relative 
    font-medium
    before:content-['']
    before:absolute
    before:-bottom-1
    before:left-1/2
    before:-translate-x-1/2
    before:w-2
    before:h-2
    before:bg-gradient-to-r
    before:from-indigo-500
    before:to-purple-500
    before:rounded-full
    before:scale-0
    hover:before:scale-100
    before:transition-transform
    before:duration-300
    after:content-['']
    after:absolute
    after:-bottom-1
    after:left-1/2
    after:-translate-x-1/2
    after:w-8
    after:h-[1px]
    after:bg-gradient-to-r
    after:from-transparent
    after:via-indigo-500
    after:to-transparent
    after:scale-x-0
    hover:after:scale-x-100
    after:transition-transform
    after:duration-300
    flex items-center
    space-x-2
    text-sm md:text-base
    whitespace-nowrap
  `;

  const dropdownClass = `
    absolute top-full right-0 mt-2
    w-48 bg-gray-900/95 backdrop-blur-sm
    rounded-2xl shadow-xl
    border border-indigo-500/20
    py-2
    transform transition-all duration-200 ease-in-out
    ${
      showFeatures
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }
  `;

  return (
    <div className="bg-[#0A0A0A] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-purple-900/5 to-indigo-900/5" />

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="absolute -top-20 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute -top-20 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

      <header className="w-full px-4 md:px-8 h-24 flex items-center justify-between backdrop-blur-sm relative z-10">
        <div className="text-xl md:text-2xl font-bold tracking-wider flex items-center">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent relative">
            Michael-Dev
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <ThemeToggle />
          <button onClick={handleHomeClick} className={navButtonClass}>
            Home
          </button>

          {/* Features Dropdown */}
          <div className="relative">
            <button
              className={`${navButtonClass} inline-flex items-center`}
              onClick={() => setShowFeatures(!showFeatures)}
              onBlur={() => setTimeout(() => setShowFeatures(false), 200)}
            >
              <span>Features</span>
              <ChevronDown
                className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                  showFeatures ? "rotate-180" : ""
                }`}
              />
            </button>

            <div className={dropdownClass}>
              <button
                onClick={handleChatbotClick}
                className="w-full text-left px-4 py-2 text-gray-300 hover:text-indigo-400 hover:bg-gray-800/50 transition-colors"
              >
                AI Chatbot
              </button>
              {!loggedIn && (
                <button
                  onClick={handleLoginClick}
                  className="w-full text-left px-4 py-2 text-gray-300 hover:text-indigo-400 hover:bg-gray-800/50 transition-colors"
                >
                  Login Demo
                </button>
              )}
            </div>
          </div>

          {loggedIn && (
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg
                transition-all duration-300 ease-in-out
                hover:from-indigo-500 hover:to-purple-500 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900
                active:scale-95
                shadow-lg shadow-indigo-500/20
                text-sm font-medium"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-indigo-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        {/* {isMobile && (
        <>
          <div
            className={`
              fixed top-24 right-0 w-64 
              bg-gray-900/95 backdrop-blur-sm
              border-l border-indigo-500/10 
              h-[calc(100vh-6rem)]
              transform transition-transform duration-300 ease-in-out
              flex flex-col items-start p-4 space-y-4
              ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
              md:hidden
              z-40
            `}
          >
            <ThemeToggle />
            <button onClick={handleHomeClick} className={navButtonClass}>
              About
            </button>
            <button onClick={handleChatbotClick} className={navButtonClass}>
              AI Chatbot
            </button>
            {!loggedIn ? (
              <button
                onClick={handleLoginClick}
                className="w-full px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg
                transition-all duration-300 ease-in-out
                hover:from-indigo-500 hover:to-purple-500
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                active:scale-95
                shadow-lg shadow-indigo-500/20
                text-sm font-medium"
              >
                Login Demo
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg
                transition-all duration-300 ease-in-out
                hover:from-indigo-500 hover:to-purple-500 
                focus:outline-none focus:ring-2 focus:ring-indigo-500
                active:scale-95
                shadow-lg shadow-indigo-500/20
                text-sm font-medium"
              >
                Logout
              </button>
            )}
          </div>
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-30"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </>
      )
      } */}
      </header>

      {/* Login Modal */}
      <Transition show={showLoginModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900/95 backdrop-blur-sm p-6 md:p-8 text-left align-middle shadow-xl transition-all border border-indigo-500/20">
                  <div className="flex justify-between items-center mb-6 md:mb-8">
                    <Dialog.Title className="text-xl md:text-2xl font-bold text-indigo-400 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      Welcome Back
                    </Dialog.Title>
                    <button
                      onClick={handleClose}
                      className="text-gray-400 hover:text-white transition-colors text-xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                          focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                          text-white placeholder-gray-400"
                        placeholder="Enter username"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                          focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                          text-white placeholder-gray-400"
                        placeholder="Enter password"
                      />
                    </div>

                    {errorMessage && (
                      <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-2 md:py-3 rounded-lg flex items-center space-x-2">
                        <span>⚠️</span>
                        <span>{errorMessage}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 md:mt-8 flex justify-end space-x-4">
                    <button
                      onClick={handleClose}
                      className="px-4 md:px-6 py-2 md:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleLogin}
                      className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg transition-colors
                        shadow-lg shadow-indigo-500/20 text-sm font-medium"
                    >
                      Login
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Header;
