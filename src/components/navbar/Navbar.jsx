import { useState } from 'react';

import styles from './Navbar.module.css';
import arrow_icon from '../../assets/Arrow.svg';
import burger_menu from '../../assets/burger.svg';
import burger_close from '../../assets/mobileClose.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.mobileMenuContainer}>
          <a href="#" className={styles.navLogo}>
            Area
          </a>
          <div
            className={styles.burgerMenu}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img src={burger_menu} alt="burger menu icon for mobile devices" />
            <img
              src={burger_close}
              alt="close burger menu icon for mobile devices"
            />
          </div>
        </div>
        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenu
          }`}
        >
          <div className={styles.navMenuContainer}>
            <ul className={styles.navMenu}>
              <li className={styles.navMenuItem}>
                <a href="#">Benefits</a>
              </li>
              <li className={styles.navMenuItem}>
                <a href="#">Specifications</a>
              </li>
              <li className={styles.navMenuItem}>
                <a href="#">How-to</a>
              </li>
              <li className={styles.navMenuItem}>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={styles.learnMore}>
            <a href="#" className={styles.learnMoreLink}>
              Learn More
            </a>
            <img src={arrow_icon} alt="arrow icon for learn more link" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
