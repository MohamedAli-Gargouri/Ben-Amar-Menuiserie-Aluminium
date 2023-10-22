import HPBHeader from "./HPBHeader";
import HomeProductsList from "./HomeProductsList";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Slider from "react-slick";

import Carousel from 'react-material-ui-carousel'

import styles from "./style.module.css";
import { Box, Button } from "@mui/material";

const HomeProjectsBlock = () => {

  return (
    <div className={styles.container}>
      <HPBHeader />
      <HomeProductsList />

    </div>
  );
};
export default HomeProjectsBlock;
