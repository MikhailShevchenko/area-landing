import { useEffect, useState } from 'react';

import styles from './Navbar.module.css';
import arrow_icon from '../../../assets/Arrow.svg';
import burger_menu from '../../../assets/burger.svg';
import burger_close from '../../../assets/mobileClose.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    isMobileMenuOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');

    return () => {
      document.body.style.overflow = '';
    };
  });

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.mobileHeader}>
          <a href="#" className={styles.navLogo}>
            Area
          </a>
          <div
            className={styles.burgerMenu}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src={burger_menu}
              className={`${styles.burgerIcon} ${
                isMobileMenuOpen
                  ? styles.burgerIconClose
                  : styles.burgerIconOpen
              }`}
              alt="burger menu icon for mobile devices"
            />
            <img
              src={burger_close}
              className={`${styles.burgerIcon} ${
                isMobileMenuOpen
                  ? styles.burgerIconOpen
                  : styles.burgerIconClose
              }`}
              alt="close burger menu icon for mobile devices"
            />
          </div>
        </div>
        <div
          className={`${styles.mobileMenuContainer} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ''
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
          <div className={styles.learnMoreLink}>
            <a href="#">Learn More</a>
            <img src={arrow_icon} alt="learn more arrow icon" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
