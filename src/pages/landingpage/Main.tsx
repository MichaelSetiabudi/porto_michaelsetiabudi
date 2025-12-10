import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@/context/ThemeContext";

const TypewriterText = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const { theme } = useTheme();
  
  const phrases = useMemo(() => [
    "Full Stack Developer",
    "UI/UX Enthusiast",
  ], []);
  
  useEffect(() => {
    const currentPhrase = phrases[loopNum % phrases.length];
    const typingSpeed = 70;
    const deletingSpeed = 30;
    const pauseTime = 1500;
    
    const tick = () => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
      }
    };

    let timeoutId: NodeJS.Timeout | undefined;

    if (!isDeleting && text === currentPhrase) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    } else {
      timeoutId = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, isDeleting, loopNum, phrases]);

  return (
    <p className="text-lg sm:text-xl md:text-2xl text-center min-h-[2rem] md:h-8">
      <span className={`bg-gradient-to-r ${
        theme === "dark"
          ? "from-[#64ffda] to-[#80ffe4]"
          : "from-[#00b894] to-[#1dd1a1]"
      } bg-clip-text text-transparent font-semibold`}>
        {text}
      </span>
      <span className="cursor" />
    </p>
  );
};

const Main = () => {
  const router = useRouter();
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a192f] text-[#e6f1ff]' : 'bg-white text-[#0a192f]'}`}>
      <section className="min-h-screen flex items-center justify-center px-4 py-8 md:py-0 relative overflow-hidden">
        {/* Responsive Background Effects */}
        <div className="absolute inset-0">
          <div className={`absolute top-10 md:top-20 left-1/4 w-32 md:w-64 h-32 md:h-64 ${theme === 'dark' ? 'bg-[#64ffda]/20' : 'bg-[#00b894]/15'} rounded-full blur-3xl`} />
          <div className={`absolute bottom-10 md:bottom-20 right-1/4 w-32 md:w-64 h-32 md:h-64 ${theme === 'dark' ? 'bg-[#112240]/30' : 'bg-[#00b894]/10'} rounded-full blur-3xl`} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 md:space-y-8 px-4">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeIn leading-tight ${theme === 'dark' ? 'text-[#e6f1ff]' : 'text-[#0a192f]'}`}>
            Hi, Welcome to My Portfolio
          </h1>

          <TypewriterText />

          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn delay-100 px-4 ${theme === 'dark' ? 'text-[#8892b0]' : 'text-[#2d3e50]'}`}>
            A passionate web developer focused on creating modern, user-centric applications
            that combine exceptional design with robust functionality.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeIn delay-200 px-4">
            <button
              onClick={() => router.push('/projects')}
              className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r ${
                theme === 'dark'
                  ? 'from-[#64ffda] to-[#80ffe4] text-[#0a192f] hover:from-[#52d4aa] hover:to-[#64ffda]'
                  : 'from-[#00b894] to-[#1dd1a1] text-white hover:from-[#00a080] hover:to-[#00b894]'
              } rounded-lg transition-all transform hover:-translate-y-1 text-sm md:text-base shadow-lg font-medium`}
            >
              View My Work
            </button>
            <button
              onClick={() => router.push('/about')}
              className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all transform hover:-translate-y-1 text-sm md:text-base shadow-lg border-2 ${
                theme === 'dark'
                  ? 'bg-transparent border-[#1e2d3d] hover:border-[#64ffda]/60 hover:bg-[#112240] text-[#e6f1ff]'
                  : 'bg-transparent border-[#dee2e6] hover:border-[#00b894]/60 hover:bg-[#f8f9fa] text-[#0a192f]'
              }`}
            >
              Learn More About Me
            </button>
          </div>
          
          <div className="mt-12 md:mt-16 animate-fadeIn delay-300 px-4">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {["React", "Next.js", "Laravel", "UI/UX Design"].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm shadow-md border ${
                    theme === 'dark'
                      ? 'bg-[#112240]/70 border-[#1e2d3d] text-[#8892b0]'
                      : 'bg-[#f8f9fa] border-[#e9ecef] text-[#2d3e50]'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;