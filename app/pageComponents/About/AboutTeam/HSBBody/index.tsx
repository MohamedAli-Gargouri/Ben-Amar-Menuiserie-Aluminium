import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './style.module.css';
import { Team_data_list } from '@/app/data/Team';
import EmployeeCard from '../Employee';
const ListAnimations = {
  hidden: { opacity: 0, y: -10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + index * 0.1,
    },
  }),
};
const HSBBody = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={` w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-3 pr-[1rem] pl-[1rem]  lg:pr-[6rem] lg:pl-[6rem] justify-center items-center ${styles.container}`}
    >
      {Team_data_list.map((Employee, index) => {
        return (
          <motion.div
            key={'TEAM' + index}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={ListAnimations}
            custom={index}
            className="col-span-1 flex justify-center items-center"
          >
            <EmployeeCard
              firstName={Employee.firstName}
              lastName={Employee.lastName}
              imgUrl={Employee.imgUrl}
              position={Employee.position}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
export default HSBBody;
