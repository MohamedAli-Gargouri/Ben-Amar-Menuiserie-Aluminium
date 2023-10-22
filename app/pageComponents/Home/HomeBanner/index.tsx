import { Grid } from "@mui/material";

import LeftContainerHB from "./LeftContainerHB";
import RightContainerHB from "./RightContainerHB";

import styles from "./style.module.css";
import Certificate from "@/public/Images/Home/Banner/Certification.webp"
import Image from "next/image";
const HomeBanner = () => {
  return (
    <div className={styles.customContainer}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <LeftContainerHB />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <RightContainerHB />
        </Grid>
      </Grid>
      <div className=" md:hidden w-full h-full flex justify-center items-center">
      <Image width={300} height={300} className=" aspect-square" src={Certificate} alt={"SCHUCO Certification"}/>
      </div>
    </div>
  );
};
export default HomeBanner;
