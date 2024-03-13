import React from 'react';
import { useHistory } from "react-router-dom";
import JokeForm from "../components/jokes/JokeForm/JokeForm";
import Section from "../components/layout/Section/Section";

const AddJoke = () => {
  const history = useHistory();

  const addJokeHandler = joke => {
    console.log(joke);

    history.push('/jokes');
  };

  return (
    <Section className='grow-center section-padding'>
      <JokeForm onAddJoke={addJokeHandler}/>
    </Section>
  );
};

export default AddJoke;
