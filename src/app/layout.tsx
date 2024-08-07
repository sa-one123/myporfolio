import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from "../components/Layout/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Sa-one",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth light" lang="en">
      <body className="mx-auto max-w-screen-xl bg-white px-5 font-mono text-black dark:text-white dark:bg-black xs:text-[16px] md:text-[18px]">
        <div className="mx-auto max-w-screen-xl bg-white px-5 font-sans text-black dark:text-white dark:bg-black xs:text-[16px] md:text-[18px]">
          <Head>
            <title>John Doe | Web developer</title>
          </Head>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
