import Head from "next/head";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import Main from "@/pages/homepage/Main";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const HomePage: React.FC = () => {
  const Router = useRouter();

  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    if (!isLoggedIn) {
      Router.push("/landingpage");
    }
  }, []); // Added dependency array for useEffect

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Welcome to the homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen bg-[#2c2c2e]">
        <header className="">
          <Header />
        </header>

        <main className="flex-grow bg-[#2c2c2e] text-[#e5e5e5] pt-20 px-4 sm:px-6 lg:px-8">
          <Main />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
