import JokeItem from './JokeItem';
import styles from './Jokes.module.scss';

const JokeList = (props) => {
  const items = props.jokes.map(joke => <JokeItem
    key={joke.id}
    id={joke.id}
    topic={joke.topic}
    text={joke.text}
  />);

  return (
    <ul className={styles.jokes__list}>{items}</ul>
  );
};

export default JokeList;
