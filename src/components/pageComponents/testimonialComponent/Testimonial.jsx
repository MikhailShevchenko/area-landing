import styles from './Testimonial.module.css';
import image_desk from '../../../assets/testimDesktop.webp';
import image_tablet from '../../../assets/testimTablet.webp';
import image_phone from '../../../assets/testimPhone.webp';

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <h2>Testimonial</h2>
      <div className={styles.imageContainer}>
        <picture>
          <source srcSet={image_phone} media="(max-width: 799px)" />
          <source srcSet={image_tablet} media="(max-width: 1279px)" />
          <img src={image_desk} alt="testimonial section image" />
        </picture>
      </div>
      <div className={styles.quoteContainer}>
        <blockquote className={styles.quote}>
          <p className={styles.quoteText}>
            “I was skeptical, but Area has completely transformed the way I
            manage my business. The data visualizations are so clear and
            intuitive, and the platform is so easy to use. I can't imagine
            running my company without it.”
          </p>
          <footer>
            <p>John Smith</p>
            <p>Head of data</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonial;
