import { useRef } from 'react';
import styles from './DiscoverMoreLink.module.css';

const DiscoverMoreLink = () => {
  const discoverLinkRef = useRef(null);

  const handleLink = () => {
    if (discoverLinkRef.current) {
      discoverLinkRef.current.click();
    }
  };

  return (
    <>
      <div className={styles.discoverMoreLink} onClick={handleLink}>
        <a
          ref={discoverLinkRef}
          href="https://github.com/MykhailoShevchenko12/area-landing"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          Discover More
        </a>
      </div>
    </>
  );
};

export default DiscoverMoreLink;
