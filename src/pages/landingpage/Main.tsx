/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const customAnimations = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 1s ease forwards;
  }
  .animate-slideInLeft {
    animation: slideInLeft 1s ease forwards;
  }
  .animate-slideInRight {
    animation: slideInRight 1s ease forwards;
  }
`;

const Main = () => {
  return (
    <>
      <style jsx global>{customAnimations}</style>
      
      <div className="min-h-screen bg-gray-900 text-gray-100">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-center animate-slideInLeft">
              Hi, I'm Michael Setiabudi
            </h1>
            <p className="text-xl md:text-2xl text-center animate-slideInRight">
              Web Developer | UI/UX Designer
            </p>
            <div className="text-center">
              <a
                href="#projects"
                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 animate-fadeIn"
              >
                Lihat Proyek Saya
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeIn">
              Tentang Saya
            </h2>
            <p className="text-lg text-center leading-relaxed animate-fadeIn">
              Saya seorang developer web dengan pengalaman dalam membangun aplikasi web modern 
              dan berfokus pada desain UI/UX yang elegan dan fungsional.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
              Proyek Saya
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((num) => (
                <div 
                  key={num}
                  className="bg-gray-700 rounded-xl overflow-hidden shadow-xl animate-fadeIn"
                >
                  <div className="relative h-64">
                    <Image
                      src={`/path-to-project-image${num}.jpg`}
                      alt={`Proyek ${num}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">Proyek {num}</h3>
                    <p className="text-gray-300">Deskripsi singkat tentang proyek.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fadeIn">
              Keterampilan
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'PHP'].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-800 p-4 rounded-lg animate-fadeIn"
                >
                  <span className="text-lg md:text-xl">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;