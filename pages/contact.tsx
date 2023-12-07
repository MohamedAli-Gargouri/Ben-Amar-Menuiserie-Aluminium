import React from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { contact_data_list } from "@/app/data/Contacts";
import ContactForm from "@/app/pageComponents/Contact/ContactForm";
import ContactUsBanner from "@/app/pageComponents/Contact/ContactUsBanner";
import Image from "next/image";
import Head from "next/head";
const ContactUsPage = () => {
  return (
    <>
              <Head>
        <title>Contact | Ben Amar Menuiserie Aluminium</title>
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
      <Navbar />

      <section
        className="relative"
        // Yahan par border add karna hai
      >
        <div className="w-full h-full">

            <ContactUsBanner />
              <div className="w-full h-full bg-[url('/images/Contact/curved_lines.jxr')] bg-cover bg-no-repeat bg-center" />

                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 mt-2">
                  {contact_data_list.map((item, index) => {
                    return (
                      <div key={"CONTACT"+index} className=" col-span-1 block cursor-pointer overflow-hidden  h-96">
                        <div className="flex flex-col h-full justify-center items-center border rounded-lg shadow-md bg-gray-50 hover:bg-[#558b2f34] ">
                          <div className="bg-[#558B2F] rounded-md w-16 h-16 p-[10px]">
                            <Image
                              className="w-11 h-11"
                              src={item.icon}
                              width={44}
                              height={44}
                              alt={item.title}
                              title={item.title}
                            />
                          </div>
                          <h3 className="text-[#191919] font-lato font-bold text-2xl leading-7 tracking-[0.2px] mt-4">
                            {item.title}
                          </h3>
                          <p className="text-[#757575] text-center font-lato text-base font-normal leading-7">
                            {item.description}
                          </p>
                          <p className="text-[#191919] text-center font-lato text-base font-bold leading-7">
                            {item.contact}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="p-2 md:p-10 w-full mx-auto">
            <ContactForm />
          </div>

          <div className="w-full mx-auto p-4 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5760.014846868028!2d10.7132393!3d34.7924519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d3871d267fc7%3A0xcbe4f0e20530b95e!2sMenuiserie%20Aluminuim%20Ben%20Amor!5e0!3m2!1sen!2stt!4v1692753963018!5m2!1sen!2stt"
              width="100%"
              height="419"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
        <Footer />
    </>
  );
};
export default ContactUsPage;
