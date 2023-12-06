import Button from '@mui/material/Button';

import styles from './style.module.css';
import Certificate from '@/public/Images/Home/Banner/Certification.webp';
import TPRCertificate from '@/public/Images/Home/Banner/TPR.webp';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Animations = {
  hidden: {
    opacity: 0,
    y: 0,
    x: -200,
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

const LeftContainerHB = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      className={styles.leftContainer}
      variants={Animations}
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className={styles.insideLeftContainer}>
        <div className={styles.dash_line}></div>
        <h4 className={styles.heading}>
          Libérer l’excellence dans les systèmes de murs-rideaux, les fenêtres
          et les portes en aluminium.
        </h4>
        <h3 className={styles.subHeading}>
          Nous sommes des artisans diplômés, dévoués à l'excellence dans notre
          métier
        </h3>
      </div>
      <div className=' flex flex-row justify-center gap-2 flex-wrap items-center w-full'>
      <Image
          width={150}
          height={150}
          className=" p-3 aspect-square"
          src={TPRCertificate}
          alt={'TPR Certification'}
        />
      <Image
          width={150}
          height={150}
          className=" aspect-square"
          src={Certificate}
          alt={'SCHUCO Certification'}
        />

        
      </div>
      
    </motion.div>
  );
};
export default LeftContainerHB;
