import styles from "./style.module.css";

const HSBHeader = () => {
    return (
        <div className={styles.header}>
      <h2
        className={`text-white font-lato text-6xl font-semibold leading-5 xl:leading-[77px] text-center ${styles.heading}`}
      >
        NOS SERVICES
      </h2>
      <p
        className={` text-white text-center font-lato text-xl font-normal leading-10 px-32 mt-8 ${styles.paragraph}`}
      >
        Découvrez nos services chez Ben Amar Menuiserie Aluminium: volets roulants, portes extérieures, façades vitrées, Alucobond, et plus encore. Transformez votre espace avec notre expertise.
      </p>
    </div>
    )
}
export default HSBHeader;