import React, {useEffect, useState} from 'react';
import { Route, useParams, useRouteMatch, useLocation } from "react-router-dom";
import styles from '../components/comments/Comments.module.scss';
import useHttp from "../assets/js/hooks/use-http";
import { getJoke } from "../assets/js/utils/firebase-api";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import Comments from "../components/comments/Comments";
import Section from "../components/layout/Section/Section";
import Button from "../components/UI/Button/Button";
import Loader from "../components/UI/Loader/Loader";

const JokeDetails = () => {
  const routMatch = useRouteMatch();
  const params = useParams();
  const location = useLocation();
  const [commentsVisibility, setCommentsVisibility] = useState(false);
  const {sendHttpRequest, status, data: joke, error} = useHttp(getJoke, true);

  useEffect(() => {
    sendHttpRequest(params.jokeID);
  }, [sendHttpRequest, params.jokeID]);

  useEffect(() => {
    if (location.pathname === `${routMatch.url}/comments`) setCommentsVisibility(true);
  }, []);

  if (status === 'pending') return (
    <Section className='grow-center section-padding'>
      <Loader className='centered'/>
    </Section>
  );
  if (error) return (
    <Section className='grow-center section-padding'>
      <h1 className='error-text mt-30'>{error}</h1>
    </Section>
  );
  if (!joke.text || !joke.topic) return (
    <Section className='grow-center section-padding'>
      <h1 className='error-text mt-30'>Joke not found!</h1>
    </Section>
  );

  const toggleCommentsVisibilityHandler = () => setCommentsVisibility(!commentsVisibility);

  return (
    <>
      <Section className={`section-padding ${commentsVisibility ? '' : 'grow-center'}`}>
        <HighlightedJoke text={joke.text} topic={joke.topic}/>
        <Button
          type='link'
          to={commentsVisibility ? `${routMatch.url}` : `${routMatch.url}/comments`}
          className='btn--empty centered mt-20'
          onClick={toggleCommentsVisibilityHandler}>{commentsVisibility ? 'Close Comments' : 'Leave a Comment'}</Button>
      </Section>
      <Route path={`${routMatch.path}/comments`}>
        <Section className={`${styles.comments} section-padding`}>
          <Comments/>
        </Section>
      </Route>
    </>
  );
};

export default JokeDetails;
