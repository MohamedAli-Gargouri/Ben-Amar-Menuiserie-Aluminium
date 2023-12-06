import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Animations = {
  hidden: {
    opacity: 0.5,
    y: 0,
    x: -100,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};
const HPBHeader = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={styles.header}
      variants={Animations}
    >
      <h2
        className={`text-white font-lato text-6xl font-semibold leading-10 xl:leading-[77px] text-center ${styles.heading}`}
      >
        NOS PARTENAIRES

      </h2>
      <p
        className={` text-white text-center font-lato text- font-normal leading-10 px-32 mt-8 ${styles.paragraph}`}
      >
        Voici nos précieux associés et collaborateurs, dont les contributions et l'engagement constituent des piliers dans nos entreprises. Ces individus et entités de grande valeur font partie intégrante de notre réseau et sont reconnus comme nos partenaires précieux dans divers projets et initiatives.
      </p>
    </motion.div>
  );
};
export default HPBHeader;
