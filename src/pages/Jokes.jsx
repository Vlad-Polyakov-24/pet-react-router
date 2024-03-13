import React from 'react';
import JokeList from "../components/jokes/JokeList";
import JokeForm from "../components/jokes/JokeForm/JokeForm";
import Section from "../components/layout/Section/Section";

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
];

const Jokes = () => {
  return (
    <Section className='section-padding'>
      <JokeList jokes={data}/>
    </Section>
  );
};

export default Jokes;
