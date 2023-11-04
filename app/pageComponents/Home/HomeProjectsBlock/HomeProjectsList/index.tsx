import { Button, Grid } from "@mui/material";
import styles from "./style.module.css";
import { imageList } from "./data";
import { imageListType } from "./types";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <div ref={ref} className="grid w-full grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-center items-center">
          {imageList.map((item: imageListType, index: number) => (
            <motion.div
            key={"PRODUCT"+index}
            className={"hover:cursor-pointer"}
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
    </div>
  );
};
export default HomeProductsList;
