import Head from "next/head";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import Main from "@/pages/landingpage/Main";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useTheme } from '@/context/ThemeContext';

const Index: React.FC = () => {
  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    Cookies.remove("isLoggedIn");
  }, []);

  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Michael Setiabudi - Portfolio</title>
        <meta name="description" content="Full Stack Developer & UI/UX Enthusiast" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
        <Header />
        <main className="flex-grow">
          <Main />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;