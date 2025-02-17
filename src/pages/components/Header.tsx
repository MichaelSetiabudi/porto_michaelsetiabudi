import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = Cookies.get("isLoggedIn") === "true";
    setLoggedIn(isUserLoggedIn);
  }, []);

  const handleLoginClick = () => setShowLoginModal(true);
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
    router.push(loggedIn ? "/homepage" : "/landingpage");
    setIsMenuOpen(false);
  };
  const handlemyProfileClick = () => {
    router.push("/aboutme");
    setIsMenuOpen(false);
  };
  const handleChatbotClick = () => {
    router.push("/chatbot");
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    router.push("/");
    setIsMenuOpen(false);
  };

  const navButtonClass = `
    text-gray-300 
    hover:text-indigo-400 
    px-3 md:px-6 py-2 md:py-3 
    transition-all 
    duration-300 
    relative 
    font-medium
    after:content-[''] 
    after:absolute 
    after:bottom-0 
    after:left-0 
    after:w-full 
    after:h-0.5 
    after:bg-indigo-500 
    after:scale-x-0 
    hover:after:scale-x-100 
    after:transition-transform 
    after:duration-300
    flex items-center
    space-x-2
    text-sm md:text-base
    whitespace-nowrap
  `;

  const mobileMenuClass = `
    fixed top-24 right-0 w-64 bg-gray-900/95 backdrop-blur-sm
    border-l border-indigo-500/10 h-[calc(100vh-6rem)]
    transform transition-transform duration-300 ease-in-out
    flex flex-col items-start p-4 space-y-4
    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  `;

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-indigo-500/10 fixed w-full top-0 z-50">
      <header className="w-full px-4 md:px-8 h-24 flex items-center justify-between backdrop-blur-sm">
        {/* Logo or Brand */}
        <div className="text-xl md:text-2xl font-bold tracking-wider flex items-center">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Michael-Dev
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <button onClick={handleHomeClick} className={navButtonClass}>
            Home
          </button>
          <button onClick={handleChatbotClick} className={navButtonClass}>
            Chatbot
          </button>
          <button onClick={handlemyProfileClick} className={navButtonClass}>
            My Profile
          </button>

          {loggedIn ? (
            <>
              <button className={navButtonClass}>Nilai</button>
              <button className={navButtonClass}>Profil</button>
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
            </>
          ) : (
            <button
              onClick={handleLoginClick}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg
                transition-all duration-300 ease-in-out
                hover:from-indigo-500 hover:to-purple-500
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900
                active:scale-95
                shadow-lg shadow-indigo-500/20
                text-sm font-medium"
            >
              Login
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

        {/* Mobile Navigation */}
        <div className={mobileMenuClass}>
          <button onClick={handleHomeClick} className={navButtonClass}>
            Home
          </button>
          <button onClick={handleChatbotClick} className={navButtonClass}>
            Chatbot
          </button>
          <button onClick={handlemyProfileClick} className={navButtonClass}>
            My Profile
          </button>
          {loggedIn ? (
            <>
              <button className={navButtonClass}>Nilai</button>
              <button className={navButtonClass}>Profil</button>
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
            </>
          ) : (
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
              Login
            </button>
          )}
        </div>
      </header>

      {/* Login Modal - Kept the same but with minor responsive adjustments */}
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