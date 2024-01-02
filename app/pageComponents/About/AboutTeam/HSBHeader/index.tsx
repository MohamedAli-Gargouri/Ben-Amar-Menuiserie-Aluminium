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

const HSBHeader = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={Animations}
      className={styles.header}
    >
      <h2
        className={` uppercase text-white font-lato text-6xl font-semibold leading-5 xl:leading-[77px] text-center ${styles.heading}`}
      >
        Notre équipe dirigeante
      </h2>
      <p
        className={` text-white text-center font-lato text-xl font-normal leading-10 px-32 mt-8 ${styles.paragraph}`}
      >
        Découvrez les personnes dévouées qui portent notre vision et la
        concrétisent, le moteur de notre organisation.
      </p>
    </motion.div>
  );
};
export default HSBHeader;
