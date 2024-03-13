import styles from './Jokes.module.scss';

const HighlightedJoke = (props) => {
  return (
    <figure className={styles.jokes__highlight}>
      <p className={styles.text}>{props.text}</p>
      <figcaption className={styles.topic}>{props.topic}</figcaption>
    </figure>
  );
};

export default HighlightedJoke;
