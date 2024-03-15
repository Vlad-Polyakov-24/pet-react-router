import { useEffect, useRef } from 'react';
import useHttp from "../../assets/js/hooks/use-http";
import { addComment } from "../../assets/js/utils/firebase-api";
import styles from "../UI/Form/Form.module.scss";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Loader from "../UI/Loader/Loader";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendHttpRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === 'completed' && !error) {
      props.onCommentAdded();
      props.showForm(false);
    }
  }, [status, error, props.onCommentAdded]);

  const submitFormHandler = e => {
    e.preventDefault();

    sendHttpRequest({
      jokeID: props.jokeID,
      commentData: {
        text: commentTextRef.current.value,
      },
    }).then(() => {
      e.target.reset();
    });
  };

  return (
    <Form className={props.className} onSubmit={submitFormHandler}>
      {status === 'pending' && (<div className={styles.form__loading}><Loader/></div>)}
      <Input label='Your Comment' tag='textarea' rows='5' id='comment' name='comment' ref={commentTextRef}/>
      <Button type='submit' className='centered mt-20'>Add Comment</Button>
    </Form>
  );
};

export default NewCommentForm;
