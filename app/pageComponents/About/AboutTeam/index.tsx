import { useState, useEffect } from "react";

import { Box, Typography, Button, Grid } from "@mui/material";

import Image from "next/image";

// Importing components
import HSBBody from "./HSBBody";
import HSBHeader from "./HSBHeader"
// Importing styles
import styles from "./style.module.css";

const AboutMissionBlock = () => {
  return (
    <div className={styles.container}>
      <section>

        <HSBHeader />

        <HSBBody />
      </section>
    </div>
  );
};
export default AboutMissionBlock;
