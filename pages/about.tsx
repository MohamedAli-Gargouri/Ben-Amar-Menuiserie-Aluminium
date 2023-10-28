import React from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import AboutBanner from "@/app/pageComponents/About/AboutBanner";
import AboutMissionBlock from "@/app/pageComponents/About/AboutMissionBlock";
import AboutTeamBlock from "@/app/pageComponents/About/AboutTeam"
import Head from "next/head";
const AboutPage = () => {
  return (
    <>
          <Head>
        <title>À Propos | Ben Amar Menuiserie Aluminium</title>
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
      <Navbar bgWhite={true} />

      <section>
        <AboutBanner />
        <AboutMissionBlock />
        <AboutTeamBlock/>
      </section>
      <Footer/>
    </>
  );
};
export default AboutPage;
