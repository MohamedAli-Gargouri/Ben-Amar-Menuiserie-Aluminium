import styles from "./style.module.css";

const HPBHeader = () => {
  return (

    <div className={styles.header}>
      <h2
        className={`text-white font-lato text-6xl font-semibold leading-5 xl:leading-[77px] text-center ${styles.heading}`}
      >
        NOS PRODUITS
      </h2>
      <p
        className={` text-white text-center font-lato text- font-normal leading-10 px-32 mt-8 ${styles.paragraph}`}
      >
       Chez Ben Amar Menuiserie Aluminium, nous proposons une large gamme de produits et services en aluminium. Tous nos produits sont conformes aux réglementations fixées par la Tunisie et la conformité est au coeur de notre engagement.
      </p>
    </div>
  );
};
export default HPBHeader;
