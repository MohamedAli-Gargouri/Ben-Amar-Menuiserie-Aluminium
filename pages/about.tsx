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
          content="Ben Amar Menuiserie Aluminium,aluminiumtunisie,PorteAluminium,PorteTunisienne,DesignTunisien,Aluminium,PorteModerne,ArtisanatTunisien,DécoIntérieure,QualitéTunisienne,PorteDesign,FabricationLocale,StyleModerne,PorteEntrée,InnovationTunisienne,HomeDéco,voletroulant,voletroulantmotorisé,villatunisie,TPR,tpr,tpraluminium,gardecorpsescalier,gardecorpsescalierverre
          ,cabinededouchealuminium,cabinededouche,cabinededouchesurmesure,CabineDeDoucheTunisie,SalleDeBainTunisienne,VerreSécuritTunisie,ExpérienceDeDouche,InstallationFacileTunisie,OuvertureAbattante,EspaceOptimiséTunisie,ÉléganceTunisienne,ConfortModerneTunisie,InnovationSalleDeBains,SécuritéTunisie,EntretienFacileTunisie,DétenteAssurée,PolyvalenceEspaceTunisie,VerreBrillantTunisie,RobusteEtDurable,DesignContemporainTunisie,SalleDeBainsParfaite,ModernitéTunisie,OasisDeCalme,RésistanceOptimaleTunisie,QualitéTunisienne,SalleDeBainsChic,AccessoiresSalleDeBainsTunisie,portebasculantetunisienne,schücopvc,schüco"
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
