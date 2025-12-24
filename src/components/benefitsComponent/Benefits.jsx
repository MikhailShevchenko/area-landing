import styles from './Benefits.module.css';
import cable_icon from '../../assets/cableIcon.svg';
import earth_icon from '../../assets/earthIcon.svg';
import account_icon from '../../assets/accountIcon.svg';
import chart_icon from '../../assets/chartIcon.svg';
import hero_image_desktop from '../../assets/Hero Image.webp';
import hero_image_tablet from '../../assets/Hero Image tablet.webp';
import hero_image_phone from '../../assets/Hero Image phone.webp';

const Benefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <header>
        <h2>Benefits</h2>
        <p className={styles.subtitle}>We’ve cracked the code.</p>
        <p className={styles.sectionDescription}>
          Area provides real insights, without the data overload.
        </p>
      </header>
      <ul className={styles.benefitsList}>
        <li>
          <article className={styles.benefitsListItem}>
            <img src={cable_icon} alt="" />
            <h3>Amplify Insights</h3>
            <p>
              Unlock data-driven decisions with comprehensive analytics,
              revealing key opportunities for strategic regional growth.
            </p>
          </article>
        </li>
        <li>
          <article className={styles.benefitsListItem}>
            <img src={earth_icon} alt="" />
            <h3>Control Your Global Presence</h3>
            <p>
              Manage and track satellite offices, ensuring consistent
              performance and streamlined operations everywhere.
            </p>
          </article>
        </li>
        <li>
          <article className={styles.benefitsListItem}>
            <img src={account_icon} alt="" />
            <h3>Remove Language Barriers</h3>
            <p>
              Adapt to diverse markets with built-in localization for clear
              communication and enhanced user experience.
            </p>
          </article>
        </li>
        <li>
          <article className={styles.benefitsListItem}>
            <img src={chart_icon} alt="" />
            <h3>Visualize Growth</h3>
            <p>
              Generate precise, visually compelling reports that illustrate your
              growth trajectories across all regions.
            </p>
          </article>
        </li>
      </ul>
      <figure className={styles.heroImage}>
        <picture>
          <source srcSet={hero_image_phone} media="(max-width: 799px)" />
          <source srcSet={hero_image_tablet} media="(max-width: 1279px)" />
          <img src={hero_image_desktop} alt="hero image for benefits section" />
        </picture>
      </figure>
    </section>
  );
};

export default Benefits;
