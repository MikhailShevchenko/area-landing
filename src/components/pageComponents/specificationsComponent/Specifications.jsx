import styles from './Specifications.module.css';
import DiscoverMoreLink from '../../UI/discoverMoreLink/DiscoverMoreLink';
import CheckIcon from '../../../assets/check.svg?react';
import CloseIcon from '../../../assets/x.svg?react';

const Specifications = () => {
  return (
    <section className={styles.specifications}>
      <div className={styles.specsHeader}>
        <header>
          <h2>Specs</h2>
          <p className={styles.subtitle}>Why Choose Area?</p>
          <p className={styles.headerDiscription}>
            You need a solution that keeps up. That’s why we developed Area. A
            developer-friendly approach to streamline your business.{' '}
          </p>
          <DiscoverMoreLink />
        </header>
      </div>
      <section className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th scope="col">Area</th>
              <th scope="col">WebSurge</th>
              <th scope="col">HyperView</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.cellContent}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.tableIconCheck}
                  />
                  Ultra-fast browsing
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.tableIconCheck}
                  />
                  Fast browsing
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CloseIcon
                    aria-hidden="true"
                    className={styles.tableIconClose}
                  />
                  Moderate speeds
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.cellContent}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.tableIconCheck}
                  />
                  Advanced AI insights
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.tableIconCheck}
                  />
                  Basic AI recommendations
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CloseIcon
                    aria-hidden="true"
                    className={styles.tableIconClose}
                  />
                  No AI assistance
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.cellContent}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.tableIconCheck}
                  />
                  Seamless integration
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.tableIconCheck}
                  />
                  Restricts customization
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CloseIcon
                    aria-hidden="true"
                    className={styles.tableIconClose}
                  />
                  Steep learning curve
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.cellContent}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.tableIconCheck}
                  />
                  Advanced AI insights
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CloseIcon
                    aria-hidden="true"
                    className={styles.tableIconClose}
                  />
                  Basic AI insights
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CloseIcon
                    aria-hidden="true"
                    className={styles.tableIconClose}
                  />
                  No AI assistance
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.cellContent}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.tableIconCheck}
                  />
                  Ultra-fast browsing
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.tableIconCheck}
                  />
                  Fast browsing
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CloseIcon
                    aria-hidden="true"
                    className={styles.tableIconClose}
                  />
                  Moderate speeds
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.cellContent}>
                  <CheckIcon
                    aria-hidden="true"
                    className={styles.tableIconCheck}
                  />
                  Full UTF-8 support
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CloseIcon
                    aria-hidden="true"
                    className={styles.tableIconClose}
                  />
                  Potential display errors
                </div>
              </td>
              <td>
                <div className={styles.cellContent}>
                  <CloseIcon
                    aria-hidden="true"
                    className={styles.tableIconClose}
                  />
                  Partial UTF-8 support
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Specifications;
