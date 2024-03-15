import styles from './Loader.module.scss';

const Loader = (props) => {
  const classes = props.className ? `${styles['lds-hourglass']} ${props.className}` : styles['lds-hourglass'];

  return <div className={classes}></div>;
};

export default Loader;
