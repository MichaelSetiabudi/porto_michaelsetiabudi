// pages/homepage/index.tsx (Homepage)
import Head from "next/head";
import Header from "@/pages/components/Header"; // Perbaiki path import
import Footer from "@/pages/components/Footer"; // Perbaiki path import
import Main from "@/pages/homepage/Main"; // Asumsi Anda memiliki Main di folder homepage
import style from "@/styles/landingpage/global.module.css"; // Atur sesuai kebutuhan
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Welcome to the homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={style.layoutContainer}>
        <Header isLoggedIn={isLoggedIn} />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
