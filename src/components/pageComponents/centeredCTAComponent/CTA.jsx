import styles from './CTA.module.css';
import arrow_icon from '../../../assets/Arrow.svg';

const CTA = () => {
  return (
    <section id="cta" className={styles.ctaSection}>
      <header className={styles.header}>
        <h2 className={styles.title}>Connect with us</h2>
        <p className={styles.description}>
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </p>
        <a
          href="https://github.com/MykhailoShevchenko12/area-landing"
          target="_blank"
          className={styles.learnMoreLink}
        >
          Learn More
          <img src={arrow_icon} alt="arrow icon for learn more link" />
        </a>
      </header>
    </section>
  );
};

export default CTA;
