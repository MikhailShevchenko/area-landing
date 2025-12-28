import styles from './HowTo.module.css';
import DiscoverMoreLink from '../../UI/discoverMoreLink/DiscoverMoreLink';

const HowTo = () => {
  return (
    <section className={styles.howTo}>
      <header className={styles.howToHeader}>
        <h2>How it works</h2>
        <p className={styles.title}>Map Your Success</p>
        <DiscoverMoreLink />
      </header>
      <ul className={styles.list}>
        <li>
          <article>
            <h3>Get Started</h3>
            <p>With our intuitive setup, you’re up and running in minutes.</p>
          </article>
        </li>
        <li>
          <article>
            <h3>Customize and Configure</h3>
            <p>Adapt Area to your specific requirements and preferences.</p>
          </article>
        </li>
        <li>
          <article>
            <h3>Grow Your Business</h3>
            <p>Make informed decisions to exceed your goals.</p>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default HowTo;
