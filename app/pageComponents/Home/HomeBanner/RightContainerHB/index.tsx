import { useState, useEffect } from "react";
import Image from "next/image";

import { getNextImageIndex } from "../methods";
import { sliderImages } from "../data";

import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animations = {
    hidden: {
      opacity: 0,
      y: 0,
      x: 200,
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
  function generateRandomString(length:number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
  }
const RightContainerHB = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  // The following code is for the slider arrows
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentMiddleImage, setCurrentMiddleImage] = useState(1);
  const [currentRightImage, setCurrentRightImage] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextLeftImageIndex = getNextImageIndex(currentLeftImage, -1);
      const nextMiddleImageIndex = getNextImageIndex(currentMiddleImage, -1);
      const nextRightImageIndex = getNextImageIndex(currentRightImage, -1);

      setCurrentLeftImage(nextLeftImageIndex);
      setCurrentMiddleImage(nextMiddleImageIndex);
      setCurrentRightImage(nextRightImageIndex);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [currentLeftImage, currentMiddleImage, currentRightImage]);

  const leftImage = sliderImages[currentLeftImage].src;
  const middleImage = sliderImages[currentMiddleImage].src;
  const rightImage = sliderImages[currentRightImage].src;
  // The following code is for the slider arrows

  return (
    <motion.div
    ref={ref}
    variants={Animations}
    animate={inView ? "visible" : "hidden"}
     className={styles.rightContainer}>
      <div className={styles.spaceUpPattern} />
      <div className={styles.sliderOuterContainer}>
        <div className={styles.box}>
          <Image
            className={`${styles.frameImageDesktop}`}
            src="/Images/Home/Slider/Frame.png"
            alt="FRAMING"
            width={822.07}
            height={638.66}
            loading="eager"
            title="Ben Amar Menuiserie Aluminium"
          />
          <div className={styles.frameImageMobile} title="Ben Amar Menuiserie Aluminium" />
        </div>
        <div className={`${styles.box} ${styles.overlay}`}>
          <div className={styles.sliderOuterContainer}>
            <div className={styles.box}>
              <Image
                key={generateRandomString(100)}
                className={`${styles.middleImage} ${styles.active} shadow-2xl animate-fade`}
                src={middleImage}
                alt="2"
                width={618}
                height={552}
                loading="eager"
                title="2"
              />
            </div>
            <div className={`${styles.box} ${styles.overlay}`}>
              <Image
                key={generateRandomString(100)}
                className={`${styles.leftImage} ${styles.active} shadow-2xl animate-fade`}
                src={leftImage}
                alt="1"
                width={201}
                height={212}
                loading="eager"
                title="1"
              />
            </div>
            <div className={`${styles.box} ${styles.overlay}`}>
              <Image
                key={generateRandomString(100)}
                className={`${styles.rightImage} ${styles.active} shadow-2xl  animate-fade`}
                src={rightImage}
                alt="3"
                width={201}
                height={212}
                loading="eager"
                title="3"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default RightContainerHB;
