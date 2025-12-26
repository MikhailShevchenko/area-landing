import styles from './HeroImageComponent.module.css';
import image_desk from '../../../assets/heroImageDesk.webp';
import image_tablet from '../../../assets/heroImageTablet.webp';
import image_phone from '../../../assets/heroImagePhone.webp';

const HeroImageComponent = () => {
  return (
    <section className={styles.heroImageSection}>
      <picture>
        <source srcSet={image_phone} media="(max-width: 799px)" />
        <source srcSet={image_tablet} media="(max-width: 1279px)" />
        <img src={image_desk} alt="hero image for hero section" />
      </picture>
    </section>
  );
};

export default HeroImageComponent;
