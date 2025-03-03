import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

const TypewriterText = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const phrases = useMemo(() => [
    "Full Stack Web Developer",
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
      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
        {text}
      </span>
      <span className="cursor" />
    </p>
  );
};

const Main = () => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 w-full">
      <section className="min-h-screen flex items-center justify-center px-4 py-8 md:py-0 relative overflow-hidden">
        {/* Responsive Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 md:bottom-20 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 md:space-y-8 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeIn leading-tight">
            Hi, Welcome to My Portofolio
          </h1>
          
          <TypewriterText />
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fadeIn delay-100 px-4">
            A passionate web developer focused on creating modern, user-centric applications 
            that combine exceptional design with robust functionality.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fadeIn delay-200 px-4">
            <button
              onClick={() => router.push('/projects')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all transform hover:-translate-y-1 text-sm md:text-base shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => router.push('/about')}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:-translate-y-1 text-sm md:text-base shadow-lg"
            >
              Learn More About Me
            </button>
          </div>
          
          <div className="mt-12 md:mt-16 animate-fadeIn delay-300 px-4">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {["React", "Next.js", "Laravel", "UI/UX Design"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 rounded-full text-xs md:text-sm border border-gray-700 shadow-md"
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