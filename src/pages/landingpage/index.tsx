import Head from "next/head";
import Header from "@/pages/components/Header"
import Footer from "@/pages/components/Footer"
import Main from "@/pages/landingpage/Main"
const index: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default index;
