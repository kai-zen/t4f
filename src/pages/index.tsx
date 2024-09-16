import { Carousel } from "@/components";
import { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home of cats!</title>
      </Head>
      <div>
        <Carousel />
      </div>
    </>
  );
};

export default HomePage;
