import styles from './DiscoverMoreLink.module.css';

const DiscoverMoreLink = () => {
  return (
    <>
      <a
        href="https://github.com/MykhailoShevchenko12/area-landing"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.discoverMoreLink}
      >
        Discover More
      </a>
    </>
  );
};

export default DiscoverMoreLink;
