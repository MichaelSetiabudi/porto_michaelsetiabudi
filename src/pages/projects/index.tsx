import Head from "next/head";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import Main from "@/pages/projects/Main";
import { useTheme } from '@/context/ThemeContext';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <Head>
        <title>Projects - Michael Setiabudi</title>
        <meta name="description" content="Projects by Michael Setiabudi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className={`flex flex-col min-h-screen scroll-smooth ${
        theme === 'dark'
          ? 'bg-[#2c2c2e]'
          : 'bg-gray-50'
      }`}>
        <Header />
        <main className={`flex-grow overflow-x-hidden ${
          theme === 'dark'
            ? 'bg-[#2c2c2e] text-[#e5e5e5]'
            : 'bg-gray-50 text-gray-900'
        }`}>
          <Main />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;