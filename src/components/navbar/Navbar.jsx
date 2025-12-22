import styles from './Navbar.module.css';
import arrow_icon from '../../assets/Arrow.svg';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navLogo}>Area</li>
          <li className={styles.navItems}>
            <a href="#">Benefits</a>
            <a href="#">Specifications</a>
            <a href="#">How-to</a>
            <a href="#">Contact Us</a>
          </li>
          <li className={styles.learnMoreBtn}>
            <a href="#" className={styles.learnMoreLink}>
              Learn More
            </a>
            <img src={arrow_icon} alt="arrow icon for learn more button" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
