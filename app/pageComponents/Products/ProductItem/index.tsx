import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './style.module.css';
interface productItemProps {
  background: boolean;
  direction: string;
  title: string;
  descriptionList: any;
  image: string;
}

const ProductItem = ({
  background,
  direction,
  title,
  descriptionList,
  image,
}: productItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const randomAnimationVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      x: direction === 'left' ? -20 : 20,
      scale: 0.9,
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

  const staggeredListVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + index * 0.1,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={randomAnimationVariants}
      style={{
        background: background ? "url('/Images/Products/Union.png')" : '',
        overflow: 'hidden',
      }}
      className={`
      bg-cover bg-repeat w-full h-full
          flex ${
            direction === 'left'
              ? ' flex-col md:flex-row'
              : ' flex-col md:flex-row-reverse'
          }
      `}
    >
      <div className="w-full   md:w-3/6 flex flex-col  justify-center items-center ">
        <motion.h1
          className="text-5xl text-center font-lato text-black"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <ul className="text-2xl">
          {descriptionList.map((item: productItemProps, index: number) => {
            return (
              <motion.li
                className={`${styles.description} ml-[-5px] mb-2 font-lato`}
                key={'DESCRIPTION' + index}
                variants={staggeredListVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                {item.title}
              </motion.li>
            );
          })}
        </ul>
      </div>
      <motion.div
        className={`backdrop-filter p-0 w-full md:w-3/6 flex justify-center ${
          direction == 'left' ? 'md:justify-end' : 'md:justify-start'
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <img src={image} alt="Product Image" className=" w-full h-full" />
      </motion.div>
    </motion.div>
  );
};

export default ProductItem;
