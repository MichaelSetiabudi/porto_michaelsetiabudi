import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../about/Main";
import { useTheme } from '../../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <Head>
        <title>About - Michael Setiabudi</title>
        <meta name="description" content="About Michael Setiabudi - Web Developer" />
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

export default About;