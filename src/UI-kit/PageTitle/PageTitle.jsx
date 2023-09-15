import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const PageTitle = ({ title, subtitle, size }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={{ fontSize: size }}>
        {title}
      </h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  size: PropTypes.string,
}

export default PageTitle;
