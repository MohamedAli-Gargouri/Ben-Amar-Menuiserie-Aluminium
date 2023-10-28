import { useState } from "react";

import Image from "next/image";
import styles from "./style.module.css";
import HSBHeader from "../../HSBHeader";

const HSBBodyRightSide = () => {
  return (
    <div className={styles.servicesCardContainer}>

      <div className="mt-0">
        <HSBHeader />
      </div>
      <div className={styles.servicesDescription}>
      Chez Ben Amar Menuiserie Aluminium, notre mission est de dépasser les attentes en matière de fenêtres et de portes en aluminium. Notre objectif est de transformer votre maison, tant sur le plan esthétique que fonctionnel. Nous croyons en l'importance des détails et nous nous efforçons de les rendre exceptionnels. Que ce soit avec nos fenêtres écoénergétiques certifiées Schuco qui illuminent votre espace de lumière naturelle ou nos portes en aluminium sur mesure qui relient harmonieusement vos espaces intérieurs et extérieurs, nous faisons de votre maison le reflet de vos rêves. Notre mission englobe également un service de haute qualité, de la première consultation à l'installation professionnelle. Nous sommes déterminés à faire de votre expérience avec nous une expérience exceptionnelle, à l'image du résultat final.
      </div>

      <div className={styles.desktopControls}>
        {/* <HSBBodyRSControls /> */}
      </div>
    </div>
  );
};
export default HSBBodyRightSide;
