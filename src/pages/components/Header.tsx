import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useThemeHelpers } from "@/lib/themeHelpers";

const Header = () => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const helpers = useThemeHelpers(theme);

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-opacity-10 transition-all duration-200 group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className={`h-5 w-5 transition-colors ${helpers.getTextSecondaryClass()} ${helpers.getAccentTextClass()}`} />
      ) : (
        <Moon className={`h-5 w-5 transition-colors ${helpers.getTextSecondaryClass()} ${helpers.getAccentTextClass()}`} />
      )}
    </button>
  );

  useEffect(() => {
    const isUserLoggedIn = Cookies.get("isLoggedIn") === "true";
    setLoggedIn(isUserLoggedIn);
  }, []);

  const handleLoginClick = () => {
    setShowLoginModal(true);
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

  const handleChatbotClick = () => {
    router.push("/chatbot");
  };

  const handleLogout = () => {
    Cookies.remove("isLoggedIn");
    setLoggedIn(false);
    router.push("/");
  };

  const handleHomeClick = () => {
    router.push("/");
  };

  const navButtonClass = `
    ${helpers.getTextSecondaryClass()}
    hover:${helpers.getAccentTextClass().split(' ')[0]}
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
    before:bg-current
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
    after:bg-current
    after:opacity-50
    after:scale-x-0
    hover:after:scale-x-100
    after:transition-transform
    after:duration-300
    flex items-center
    space-x-2
    text-sm md:text-base
    whitespace-nowrap
  `;

  return (
    <div className={`${helpers.getBackgroundClass()} relative transition-colors duration-300`}>
      {/* Subtle background glow - teal tones */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-r from-[#64ffda]/5 via-transparent to-[#64ffda]/5' : 'bg-gradient-to-r from-[#00b894]/5 via-transparent to-[#00b894]/5'}`} />

      {/* Top and bottom accent lines */}
      <div className={`absolute top-0 left-0 w-full h-[1px] ${theme === 'dark' ? 'bg-gradient-to-r from-transparent via-[#64ffda]/30 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00b894]/30 to-transparent'}`} />
      <div className={`absolute bottom-0 left-0 w-full h-[1px] ${theme === 'dark' ? 'bg-gradient-to-r from-transparent via-[#64ffda]/20 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00b894]/20 to-transparent'}`} />

      {/* Ambient glows */}
      <div className={`absolute -top-20 left-1/4 w-40 h-40 rounded-full blur-3xl ${theme === 'dark' ? 'bg-[#64ffda]/10' : 'bg-[#00b894]/10'}`} />
      <div className={`absolute -top-20 right-1/4 w-40 h-40 rounded-full blur-3xl ${theme === 'dark' ? 'bg-[#52d4aa]/10' : 'bg-[#1dd1a1]/10'}`} />

      <header className="w-full px-4 md:px-8 h-24 flex items-center justify-between backdrop-blur-sm relative z-10">
        {/* Logo/Title */}
        <button
          onClick={handleHomeClick}
          className="text-xl md:text-2xl font-bold tracking-wider flex items-center hover:scale-105 transition-transform duration-300"
        >
          <span className={`bg-gradient-to-r ${theme === 'dark' ? 'from-[#64ffda] to-[#80ffe4]' : 'from-[#00b894] to-[#1dd1a1]'} bg-clip-text text-transparent relative`}>
            Michael-Dev
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <ThemeToggle />
        </nav>

        {/* Mobile Theme Toggle - directly visible */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
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
                <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl p-6 md:p-8 text-left align-middle shadow-xl transition-all ${helpers.getCardElevatedClass()} ${helpers.getAccentBorderClass()} border backdrop-blur-sm`}>
                  <div className="flex justify-between items-center mb-6 md:mb-8">
                    <Dialog.Title className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${theme === 'dark' ? 'from-[#64ffda] to-[#80ffe4]' : 'from-[#00b894] to-[#1dd1a1]'} bg-clip-text text-transparent`}>
                      Welcome Back
                    </Dialog.Title>
                    <button
                      onClick={handleClose}
                      className={`${helpers.getTextSecondaryClass()} hover:${helpers.getTextPrimaryClass()} transition-colors text-xl`}
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${helpers.getTextPrimaryClass()}`}>
                        Username
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={`w-full px-4 py-2 md:py-3 border rounded-lg transition-all ${helpers.getInputClass()}`}
                        placeholder="Enter username"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${helpers.getTextPrimaryClass()}`}>
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full px-4 py-2 md:py-3 border rounded-lg transition-all ${helpers.getInputClass()}`}
                        placeholder="Enter password"
                      />
                    </div>

                    {errorMessage && (
                      <div className={`${theme === 'dark' ? 'bg-[#ff6b6b]/20' : 'bg-[#e74c3c]/20'} border ${theme === 'dark' ? 'border-[#ff6b6b]' : 'border-[#e74c3c]'} ${helpers.getTextPrimaryClass()} px-4 py-2 md:py-3 rounded-lg flex items-center space-x-2`}>
                        <span>⚠️</span>
                        <span>{errorMessage}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 md:mt-8 flex justify-end space-x-4">
                    <button
                      onClick={handleClose}
                      className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm font-medium ${helpers.getSecondaryButtonClass()}`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleLogin}
                      className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm font-medium ${helpers.getAccentButtonClass()} ${theme === 'dark' ? 'shadow-dark-lg' : 'shadow-light-lg'}`}
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
