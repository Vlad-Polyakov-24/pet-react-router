import { useHistory, useLocation } from "react-router-dom";
import styles from './Jokes.module.scss';
import JokeItem from './JokeItem';
import Button from "../UI/Button/Button";

const sortJokes = (jokes, isAscending) =>
  jokes.sort((joke1, joke2) =>
    isAscending ? joke1.id > joke2.id ? 1 : -1 : joke1.id < joke2.id ? 1 : -1);

const JokeList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get('sort');
  const isAscending = sortingOrder === 'asc';
  const sortedJokes = sortJokes(props.jokes, isAscending);
  const jokes = sortedJokes.map(joke => <JokeItem
    key={joke.id}
    id={joke.id}
    topic={joke.topic}
    text={joke.text}
  />);

  const sortHandler = () => history.push({
    pathname: location.pathname,
    search: `?sort=${isAscending ? 'desc' : 'asc'}`,
  });

  return (
    <>
      <div className={styles.jokes__sort}>
        <Button type='button' onClick={sortHandler}>Sort Jokes {isAscending ? 'Descending' : 'Ascending'}</Button>
      </div>
      <ul className={styles.jokes__list}>{jokes}</ul>
    </>
  );
};

export default JokeList;
