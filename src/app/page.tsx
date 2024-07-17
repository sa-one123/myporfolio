// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl bg-white px-5 font-sans text-black dark:text-white dark:bg-black xs:text-[16px] md:text-[18px]">
      <Head>
        <title>John Doe | Web developer</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
