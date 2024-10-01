// pages/index.tsx (Landing Page)
import Head from "next/head";
import Header from "@/pages/components/Header"; // Perbaiki path import
import Footer from "@/pages/components/Footer"; // Perbaiki path import
import Main from "@/pages/landingpage/Main";
import style from "@/styles/landingpage/global.module.css";
import { useState } from "react";
import { useRouter } from 'next/router'; // Import useRouter

const Index: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Inisialisasi useRouter

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // Simpan status login
    router.push('/homepage'); // Redirect ke homepage setelah login
  };

  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={style.layoutContainer}>
        <Header isLoggedIn={isLoggedIn} />
        <Main />
        <Footer />
        {!isLoggedIn && <button onClick={handleLogin}>Login</button>}
      </div>
    </>
  );
};

export default Index;
