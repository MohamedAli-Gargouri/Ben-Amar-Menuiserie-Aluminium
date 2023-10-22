import Button from "@mui/material/Button";

import styles from "./style.module.css";
import Certificate from "@/public/Images/Home/Banner/Certification.webp"
import Image from "next/image";
const LeftContainerHB = () => {
    return (
        <div className={styles.leftContainer}>
            <div className={styles.insideLeftContainer}>
                <div className={styles.dash_line}></div>
                <h4
                    className={styles.heading}
                >
                    Libérer l’excellence dans les systèmes de murs-rideaux, les fenêtres et les portes en aluminium.
                </h4>
                <h3
                    className={styles.subHeading}
                >
                   Nous sommes des artisans diplômés, dévoués à l'excellence dans notre métier
                </h3>
                
                
            </div>
            <div className="hidden md:flex w-full h-full  justify-center items-center">
                <Image width={300} height={300} className=" aspect-square" src={Certificate} alt={"SCHUCO Certification"}/>
                </div>
        </div>
    )
}
export default LeftContainerHB;