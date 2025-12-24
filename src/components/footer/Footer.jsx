import styles from './Footer.module.css';
import union_img from '../../assets/Union.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footerLine} />
      <div>
        <ul className={styles.footerMenu}>
          <li className={styles.footerMenuItem}>
            <a href="#">Benefits</a>
          </li>
          <li className={styles.footerMenuItem}>
            <a href="#">Specifications</a>
          </li>
          <li className={styles.footerMenuItem}>
            <a href="#">How-to</a>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.copyRight}>
          <div>
            <img src={union_img} alt="" />
            <span>
              <span>© Area.</span>
              <span>2025</span>
            </span>
          </div>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
