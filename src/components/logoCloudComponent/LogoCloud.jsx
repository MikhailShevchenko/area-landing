import styles from './LogoCloud.module.css';
import logo_1 from '../../assets/Logo1.svg';
import logo_2 from '../../assets/Logo2.svg';
import logo_3 from '../../assets/Logo3.svg';
import logo_4 from '../../assets/Logo4.svg';
import logo_5 from '../../assets/Logo5.svg';
import logo_6 from '../../assets/Logo6.svg';

const LogoCloud = () => {
  return (
    <section className={styles.logoCloudContainer}>
      <h2 className={styles.logoCloudTitle}>Trusted by:</h2>
      <div className={styles.logoContainer}>
        <img src={logo_1} alt="" />
        <img src={logo_2} alt="" />
        <img src={logo_3} alt="" />
        <img src={logo_4} alt="" />
        <img src={logo_5} alt="" />
        <img src={logo_6} alt="" />
      </div>
    </section>
  );
};

export default LogoCloud;
