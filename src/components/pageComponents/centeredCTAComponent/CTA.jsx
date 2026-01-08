import styles from './CTA.module.css';
import arrow_icon from '../../../assets/Arrow.svg';
import { useRef } from 'react';

const CTA = () => {
  const learnMoreLinkRef = useRef(null);

  const handleLink = () => {
    if (learnMoreLinkRef.current) {
      learnMoreLinkRef.current.click();
    }
  };

  return (
    <section id="cta" className={styles.ctaSection}>
      <header className={styles.header}>
        <h2 className={styles.title}>Connect with us</h2>
        <p className={styles.description}>
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </p>
        <div className={styles.learnMoreLink} onClick={handleLink}>
          <a
            ref={learnMoreLinkRef}
            href="https://github.com/MykhailoShevchenko12/area-landing"
            onClick={(e) => e.stopPropagation()}
            target="_blank"
          >
            Learn More
          </a>
          <img src={arrow_icon} alt="arrow icon for learn more link" />
        </div>
      </header>
    </section>
  );
};

export default CTA;
