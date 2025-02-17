import Head from "next/head";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import Main from "@/pages/aboutme/Main";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const HomePage: React.FC = () => {

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Welcome to the homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#2c2c2e]">
        <header className="">
          <Header />
        </header>

        <main className="flex-grow bg-[#2c2c2e] text-[#e5e5e5] pt-20 ">
          <Main />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;