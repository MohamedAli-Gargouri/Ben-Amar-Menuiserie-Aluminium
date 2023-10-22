import { useState } from "react";

import Image from "next/image";

import styles from "./style.module.css";
import HSBBodyRSControls from "./HSBBodyRSControls";

const HSBBodyRightSide = () => {
  return (
    <div className={styles.servicesCardContainer}>
      <h2 className={styles.servicesTitle}>Conception et construction</h2>
      <div className={styles.servicesDescription}>
      Chez Ben Amar Menuiserie Aluminium, notre passion est de créer des solutions en aluminium sur mesure pour répondre à vos besoins. Que ce soit pour améliorer l'efficacité énergétique de votre domicile grâce à nos fenêtres et portes en aluminium de haute qualité, ou pour apporter une touche moderne à votre espace avec nos rampes et balustrades élégantes, nous sommes votre partenaire de confiance. Notre équipe d'artisans qualifiés, tous certifiés dans le travail de l'aluminium, s'engage à vous offrir un niveau de détail inégalé, garantissant ainsi des produits de première classe. En plus de notre expertise en fabrication sur mesure, nous proposons des services complets de réparation et de maintenance pour assurer la longévité de vos installations en aluminium. Chez Ben Amar Menuiserie Aluminium, nous transformons le métal en véritables œuvres d'art et nous sommes fiers de créer des solutions durables et esthétiques pour chaque projet.
      </div>

    </div>
  );
};
export default HSBBodyRightSide;
