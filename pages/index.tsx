
import React from "react";
import Navbar from "@/app/Components/Navbar";
import HomeBanner from "@/app/pageComponents/Home/HomeBanner";
import HomeServicesBlock from "@/app/pageComponents/Home/HomeServicesBlock";
import HomeProjectsBlock from "@/app/pageComponents/Home/HomeProjectsBlock";
import HomePartnersBlock from "@/app/pageComponents/Home/HomePartnersBlock"
import Footer from "@/app/Components/Footer";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Presentation | Ben Amar Menuiserie Aluminium</title>
        <meta
          name="description"
          content="Ben Amar Menuiserie Aluminium"
        />
        <meta
          name="keywords"
          content="Ben Amar Menuiserie Aluminium,aluminiumtunisie,PorteAluminium,PorteTunisienne,DesignTunisien,Aluminium,PorteModerne,ArtisanatTunisien,DécoIntérieure,QualitéTunisienne,PorteDesign,FabricationLocale,StyleModerne,PorteEntrée,InnovationTunisienne,HomeDéco,voletroulant,voletroulantmotorisé,villatunisie,TPR,tpr,tpraluminium,gardecorpsescalier,gardecorpsescalierverre
          ,cabinededouchealuminium,cabinededouche,cabinededouchesurmesure,CabineDeDoucheTunisie,SalleDeBainTunisienne,VerreSécuritTunisie,ExpérienceDeDouche,InstallationFacileTunisie,OuvertureAbattante,EspaceOptimiséTunisie,ÉléganceTunisienne,ConfortModerneTunisie,InnovationSalleDeBains,SécuritéTunisie,EntretienFacileTunisie,DétenteAssurée,PolyvalenceEspaceTunisie,VerreBrillantTunisie,RobusteEtDurable,DesignContemporainTunisie,SalleDeBainsParfaite,ModernitéTunisie,OasisDeCalme,RésistanceOptimaleTunisie,QualitéTunisienne,SalleDeBainsChic,AccessoiresSalleDeBainsTunisie,portebasculantetunisienne,schücopvc,schüco"
        />
        <meta name="author" content="Mohamed Gargouri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />

      <section>
        <HomeBanner />
        <HomeServicesBlock />
        <HomePartnersBlock/>
        <HomeProjectsBlock />
      </section>
        <Footer />
    </>
  );
};
export default Home;
