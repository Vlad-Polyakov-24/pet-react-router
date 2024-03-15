import React, {useEffect} from 'react';
import useHttp from "../assets/js/hooks/use-http";
import { getJokes } from "../assets/js/utils/firebase-api";
import JokeList from "../components/jokes/JokeList";
import Section from "../components/layout/Section/Section";
import Loader from "../components/UI/Loader/Loader";
import NoJokesFound from "../components/jokes/NoJokesFound";

const Jokes = () => {
  const { sendHttpRequest, status, data: jokes, error } = useHttp(getJokes, true);
  let content = <Section className='section-padding'><JokeList jokes={jokes}/></Section>;

  useEffect(() => {
    sendHttpRequest();
  }, [sendHttpRequest]);

  if (status === 'pending') content = (
    <Section className='grow-center section-padding'>
      <Loader className='centered'/>
    </Section>
  );
  if (error) content = (
    <Section className='grow-center section-padding'>
      <h1 className='error-text mt-30'>{error}</h1>
    </Section>
  );
  if (status === 'completed' && (!jokes || jokes.length === 0)) content = <NoJokesFound/>;

  return (
    <>
      {content}
    </>
  );
};

export default Jokes;
