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
      delay: 0.1 + index * 0.1,
    },
  }),
};
const HomeProductsList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [showMoreToggled, setshowMoreToggled] = useState(false);
  const openImageViewer = useCallback((index:number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const images:string[]=[]
  imageList.map((item: imageListType, index: number)=>{
    images.push(item.imageUrl)
  })
  return (
    <div
      className={`w-full flex flex-col justify-center items-center text-[aliceblue] pr-[1rem] pl-[1rem]  lg:pr-[6rem] lg:pl-[6rem] ${styles.container}`}
    >
      <div className={styles.boxContainer}>
        <div
          ref={ref}
          className="grid w-full grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 justify-center items-center"
        >
          {imageList.map((item: imageListType, index: number) => {

            return(<>
              {showMoreToggled?
                <motion.div
                key={'PRODUCT' + index}
                className={'hover:cursor-pointer'}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={ListAnimations}
                custom={index}
              >
                <Image
                  onClick={ () => openImageViewer(index) }
                  key={index}
                  loading="lazy"
                  src={item.imageUrl}
                  alt={item.title}
                  className={` rounded-md hover:scale-105 col-span-1 ${styles.image}`}
                  title={item.title}
                  width={170}
                  height={170}
                />
              </motion.div>
                :index<7?<motion.div
                key={'PRODUCT' + index}
                className={'hover:cursor-pointer'}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={ListAnimations}
                custom={index}
              >
                <Image
                  onClick={ () => openImageViewer(index) }
                  key={index}
                  loading="lazy"
                  src={item.imageUrl}
                  alt={item.title}
                  className={` rounded-md hover:scale-105 col-span-1 ${styles.image}`}
                  title={item.title}
                  width={170}
                  height={170}
                />
              </motion.div>:null
              }</>
            )
          }
            
            
          )}
        </div>
        {isViewerOpen && (
          <div className='relative' style={{ zIndex:"200"}}>
        <ImageViewer
          src={ images }
          
          currentIndex={ currentImage }
          disableScroll={ true }
          closeOnClickOutside={ true }
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          onClose={ closeImageViewer }
        /></div>
      )}
      
      </div>
      <Button variant='outlined' className=' mt-4' onClick={()=>{setshowMoreToggled(!showMoreToggled)}}> {showMoreToggled?"Montrer moins":"Montre plus"}</Button>
    </div>
  );
};
export default HomeProductsList;
