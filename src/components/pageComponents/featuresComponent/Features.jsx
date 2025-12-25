import styles from './Features.module.css';
import image_desk from '../../../assets/featureSectionDesktop.webp';
import image_tablet from '../../../assets/featureSectionTablet.webp';
import image_phone from '../../../assets/featureSectionPhone.webp';

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.info}>
        <header>
          <h2 className={styles.title}>See the Big Picture</h2>
          <p>
            Area turns your data into clear, vibrant visuals that show you
            exactly what's happening in each region.
          </p>
        </header>
        <ul className={styles.featuresList}>
          <li className={styles.listItem}>
            Spot Trends in Seconds: No more digging through numbers.
          </li>
          <li className={styles.listItem}>
            Get Everyone on the Same Page: Share easy-to-understand reports with
            your team.{' '}
          </li>
          <li className={styles.listItem}>
            Make Presentations Pop: Interactive maps and dashboards keep your
            audience engaged.
          </li>
          <li className={styles.listItem}>
            Your Global Snapshot: Get a quick, clear overview of your entire
            operation.
          </li>
        </ul>
        <div className={styles.discoverMoreLink}>
          <a href="#">Discover More</a>
        </div>
      </div>
      <figure className={styles.imageContainer}>
        <picture>
          <source srcSet={image_phone} media="(max-width: 799px)" />
          <source srcSet={image_tablet} media="(max-width: 1279px)" />
          <img src={image_desk} alt="features section image" />
        </picture>
      </figure>
    </section>
  );
};

export default Features;
