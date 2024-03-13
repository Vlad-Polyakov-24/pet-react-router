import styles from './Jokes.module.scss';
import Button from "../UI/Button/Button";

const JokeItem = (props) => {
  return (
    <li className={styles.jokes__item}>
      <figure>
        <blockquote className={styles['jokes__item-inner']}>
          <p>{props.text}</p>
        </blockquote>
        <div className={styles['jokes__item-row']}>
          <figcaption className={styles.topic}>{props.topic}</figcaption>
          <Button type='link' to={`/jokes/${props.id}`}>Expand</Button>
        </div>
      </figure>
    </li>
  );
};

export default JokeItem;
