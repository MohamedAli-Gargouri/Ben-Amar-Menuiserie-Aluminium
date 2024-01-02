import Navbar from "@/app/Components/Navbar";
import ProductsBanner from "@/app/pageComponents/Products/ProductsBanner";
import ProductItem from "@/app/pageComponents/Products/ProductItem";
import { productsList } from "@/app/data/Products";
import Footer from "@/app/Components/Footer";
import Head from "next/head";
import React from "react";
const ProductsPage = () => {
  return (
    <>
     <Head>
        <title>Nos Produits | Ben Amar Menuiserie Aluminium</title>
        <meta
          name="description"
          content="Ben Amar Menuiserie Aluminium, Glazing solutions are our passion"
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
        <ProductsBanner />
        <div className="overflow-hidden">
          {productsList.map((item, index) => {
            return (
              <div key={"PRODUCT"+index}>
                <ProductItem
                  background={item.background}
                  direction={item.direction}
                  title={item.title}
                  descriptionList={item.descriptionList}
                  image={item.image}
                />
              </div>
            );
          })}
        </div>
      </section>
      <Footer/>
    </>
  );
};
export default ProductsPage;
