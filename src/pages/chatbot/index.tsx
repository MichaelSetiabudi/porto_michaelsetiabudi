import Head from "next/head";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";
import Main from "@/pages/chatbot/Main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const Index = () => {

  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
        <div className="flex flex-col min-h-screen">
          <div className="sticky top-0 z-50 pb-20">
            <Header />
          </div>

          <main className="flex-grow container mx-auto px-4 py-9 relative pt-20 pb-20">
            <div className="backdrop-blur-sm bg-gray-900/50 rounded-xl shadow-2xl border border-gray-800">
              <Main />
            </div>
          </main>

          <div className="relative z-40 ">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;