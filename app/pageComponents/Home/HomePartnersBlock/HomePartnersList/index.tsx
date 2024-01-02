import { Button, Grid } from '@mui/material';
import styles from './style.module.css';
import { imageList } from './data';
import { imageListType } from './types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageViewer from 'react-simple-image-viewer';
import React, { useState, useCallback } from 'react';
import zIndex from '@mui/material/styles/zIndex';
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
      className={`w-full flex flex-col justify-center items-center text-[aliceblue] pr-[1rem] pl-[1rem]  lg:pr-[6rem] lg:pl-[6rem] ${styles.container}`}
    >
      <div className={styles.boxContainer}>
        <div
          ref={ref}
          className="grid w-full grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-center items-center"
        >
          {imageList.map((item: imageListType, index: number) => (
            <motion.div
              key={'PRODUCT' + index}
              className={`col-span-1  hover:cursor-pointer `}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={ListAnimations}
              custom={index}
            >
              <img
                key={index}
                src={item.imageUrl}
                alt={item.title}
                className={` inset-10 w-full h-full rounded-md p-1 hover:scale-105 `}
                title={item.title}
              />
            </motion.div>
          ))}
        </div>

  
      </div>
      
    </div>
  );
};
export default HomeProductsList;
