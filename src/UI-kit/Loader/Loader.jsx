import styles from './styles.module.scss';
import { Circles } from 'react-loader-spinner';
import Overlay from './Overlay/Overlay';

const Loader = () => {
  return (
    <>
      <Overlay />
      <div className={styles.loaderContainer}>
        <Circles
          height='80'
          width='80'
          color='#674EAE'
          ariaLabel='circles-loading'
          visible={true}
        />
      </div>
    </>
  );
};

export default Loader;
