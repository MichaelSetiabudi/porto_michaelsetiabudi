import Head from "next/head";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import Main from "@/pages/landingpage/Main";
import { useEffect } from "react";
import Cookies from 'js-cookie';

const Index: React.FC = () => {
  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    Cookies.remove("isLoggedIn");
  }, []);

  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="flex flex-col min-h-screen bg-[#2c2c2e]">
        <Header />
        
        <main className="flex-grow bg-[#2c2c2e] text-[#e5e5e5]">
          <Main />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;