import styles from "./style.module.css";

const HSBHeader = () => {
    return (
        <div className={styles.header}>
      <h2
        className={`text-white font-lato text-6xl font-semibold leading-5 xl:leading-[77px] text-center ${styles.heading}`}
      >
        NOTRE EQUIPE
      </h2>
      <p
        className={` text-white text-center font-lato text-xl font-normal leading-10 px-32 mt-8 ${styles.paragraph}`}
      >
        Découvrez les personnes dévouées qui portent notre vision et la concrétisent, le moteur de notre organisation.
      </p>
    </div>
    )
}
export default HSBHeader;