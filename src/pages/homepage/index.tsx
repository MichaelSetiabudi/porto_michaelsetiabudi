// pages/homepage/index.tsx (Homepage)
import Head from "next/head";
import Header from "@/pages/components/Header"; // Sesuaikan path import
import Footer from "@/pages/components/Footer"; // Sesuaikan path import
import Main from "@/pages/homepage/Main"; // Sesuaikan path import
import style from "@/styles/landingpage/global.module.css"; // Sesuaikan jika ada CSS khusus untuk homepage
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from 'js-cookie'; // Tambahkan ini untuk menangani cookie

const HomePage: React.FC = () => {
  const Router = useRouter();
  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    if (!isLoggedIn) {
      
      Router.push("/landingpage");
    }
  });
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Welcome to the homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={style.layoutContainer}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
