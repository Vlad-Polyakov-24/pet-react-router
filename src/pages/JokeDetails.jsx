import React from 'react';
import { Route, useParams } from "react-router-dom";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import Comments from "../components/comments/Comments";
import Section from "../components/layout/Section/Section";
import NoJokesFound from "../components/jokes/NoJokesFound";

const data = [
  {
    id: 'j1',
    topic: 'Programming',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, labore.',
  },
  {
    id: 'j2',
    topic: 'General',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, labore.',
  },
]

const JokeDetails = () => {
  const params = useParams();

  const joke = data.find(joke => joke.id === params.jokeID);

  if (!joke) return <NoJokesFound/>;

  return (
    <Section className='grow-center section-padding'>
      <HighlightedJoke text={joke.text} topic={joke.topic}/>

      <Route path={`/jokes/${params.jokeID}/comments`}>
        <Comments/>
      </Route>
    </Section>
  );
};

export default JokeDetails;
