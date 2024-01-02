import HPBHeader from './HPBHeader';
import HomePartnersList from './HomePartnersList';
import styles from './style.module.css';
const HomeProjectsBlock = () => {
  return (
    <div className={styles.container}>
      <HPBHeader />
      <HomePartnersList />
    </div>
  );
};
export default HomeProjectsBlock;
