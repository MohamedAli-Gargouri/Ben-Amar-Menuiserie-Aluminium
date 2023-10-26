import { Button, Grid } from "@mui/material";
import styles from "./style.module.css";
import { imageList } from "./data";
import { imageListType } from "./types";
import Image from "next/image";
import Slider from "react-slick";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animations = {
    hidden: {
      opacity: 0,
      y: 0,
      x: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    
  };
  const ListAnimations = {
    hidden: { opacity: 0, y: -10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + index * 0.1,
      },
    }),
  };
const HomeProductsList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div
      className={`w-full flex flex-col justify-center items-center text-[aliceblue] h-auto mt-14 ${styles.container}`}
    >
      <div className={styles.boxContainer}>
        <div ref={ref} className="grid w-full grid-cols-1 lg:grid-cols-3 gap-3 justify-center items-center">
          {imageList.map((item: imageListType, index: number) => (
            <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={ListAnimations}
            custom={index}>
                <Image
                  key={index}
                  src={item.imageUrl}
                  alt={`Image ${item.id}`}
                  className={` col-span-1 ${styles.image}`}
                  title={`Image ${item.id}`}
                  width={372}
                  height={372}
                />
             </motion.div>
          ))}
        </div>
      </div>

      <Button
        variant="outlined"
        color="primary"
        className=" font-lato text-lg mt-16  leading-[77px] rounded-md  w-40 h-[50px]"
        href="products"
      >
        Voir tout
      </Button>
    </div>
  );
};
export default HomeProductsList;
