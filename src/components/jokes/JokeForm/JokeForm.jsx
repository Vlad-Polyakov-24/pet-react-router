import { useRef, useState } from 'react';
import { Prompt } from "react-router-dom";
import styles from './JokeForm.module.scss';
import Card from '../../UI/Card/Card';
import Loader from '../../UI/Loader/Loader';
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const JokeForm = (props) => {
  const [formInFocus, setFormInFocus] = useState(false);
  const topicInputRef = useRef();
  const textInputRef = useRef();

  const submitFormHandler = e => {
    e.preventDefault();

    const enteredTopic = topicInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddJoke({ topic: enteredTopic, text: enteredText });
    e.target.reset();
  };

  const focusFormHandler = () => setFormInFocus(true);

  const onClickHandler = () => setFormInFocus(false);

  return (
    <>
      <Prompt when={formInFocus} message={location => 'Are you sure you want to leave the page? In this case, you will lose all data in the form!'}/>
      <Card>
        <form className={styles.form} onSubmit={submitFormHandler} onFocus={focusFormHandler}>
          {props.isLoading && (<div className={styles.form__loading}><Loader/></div>)}
          <Input label='Topic' type='text' id='topic' name='topic' ref={topicInputRef}/>
          <Input label='Text' tag='textarea' rows='5' id='text' name='text' ref={textInputRef}/>
          <div className={styles.form__actions}>
            <Button type='submit' onClick={onClickHandler}>Add Joke</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default JokeForm;
