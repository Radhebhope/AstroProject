import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "components/Header";
import Hero from "components/Hero";
import Services from "components/Services";
import Contact from "components/Contact";
import About from "components/About";
import Testimonials from "components/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohit Bhope</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Header */}
        <Header />

        {/* Hero */}
        <Hero />

        {/* Our Services */}
        <Services />
        {/* About US */}
        <About />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Us */}
        <Contact />
      </main>
    </>
  );
}
