import { useState, useEffect } from "react";

import Navbar from "@/app/Components/Navbar";
import HomeBanner from "@/app/pageComponents/Home/HomeBanner";
import HomeServicesBlock from "@/app/pageComponents/Home/HomeServicesBlock";
import HomeProjectsBlock from "@/app/pageComponents/Home/HomeProjectsBlock";
import HomeBlogsBlock from "@/app/pageComponents/Home/HomeBlogsBlock";
import Footer from "@/app/Components/Footer";
import HomeTestimonialsBlock from "@/app/pageComponents/Home/HomeTestimonialsBlock";
import GetInTouchContactForm from "@/app/Components/GetInTouchContactForm";

import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Presentation | Ben Amar Menuiserie Aluminium</title>
        <meta
          name="description"
          content="AlumTec, Glazing solutions are our passion"
        />
        <meta
          name="keywords"
          content="Ben Amar Menuiserie Aluminium,Fenêtres aluminium,Portes aluminium,Portes et fenêtres Coulissante,Portes et fenêtres Battante,Volet Roulant,Facade Vitré,Facade Alucobond,Cabine Douche,Mur rideau,Pergola aluminium,Tables aluminium,Chaises aluminium,Canapé aluminium"
        />
        <meta name="author" content="Mohamed Gargouri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />

      <section>
        <HomeBanner />
        <HomeServicesBlock />
        <HomeProjectsBlock />
      </section>
        <Footer />
    </>
  );
};
export default Home;
