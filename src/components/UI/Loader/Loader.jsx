import styles from './Loader.module.scss';

const Loader = () => {
  return <div className={styles['lds-hourglass']}></div>;
};

export default Loader;
