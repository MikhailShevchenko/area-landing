import styles from './Header.module.css';
import ipad_desktop from '../../assets/Ipad.webp';
import ipad_tablet from '../../assets/IpadTablet.webp';
import iphone from '../../assets/iPhone.webp';

const Header = () => {
  return (
    <section className={styles.headerSection}>
      <h1 className={styles.headerTitle}>Browse everything.</h1>
      <div className={styles.imageContainer}>
        <picture>
          <source srcSet={iphone} media="(max-width: 799px)" />
          <source srcSet={ipad_tablet} media="(max-width: 1279px)" />
          <img src={ipad_desktop} alt="" />
        </picture>
      </div>
    </section>
  );
};

export default Header;
