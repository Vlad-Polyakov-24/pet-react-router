import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { addJoke } from "../assets/js/utils/firebase-api";
import useHttp from "../assets/js/hooks/use-http";
import JokeForm from "../components/jokes/JokeForm";
import Section from "../components/layout/Section/Section";

const AddJoke = () => {
  const history = useHistory();
  const { sendHttpRequest, status } = useHttp(addJoke);

  useEffect(() => {
    if (status === 'completed') history.push('/jokes');
  }, [status, history]);

  const addJokeHandler = joke => sendHttpRequest(joke);

  return (
    <Section className='grow-center section-padding'>
      <JokeForm isLoading={status === 'pending'} onAddJoke={addJokeHandler}/>
    </Section>
  );
};

export default AddJoke;
