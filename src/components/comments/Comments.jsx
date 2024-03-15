import { useState, useCallback, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useHttp from "../../assets/js/hooks/use-http";
import { getComments } from "../../assets/js/utils/firebase-api";
import NewCommentForm from './NewCommentForm';
import Button from "../UI/Button/Button";
import Loader from "../UI/Loader/Loader";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { jokeID } = params;
  const { sendHttpRequest, status, data: loadedComments } = useHttp(getComments);
  let comments;

  useEffect(() => {
    sendHttpRequest(jokeID);
  }, [jokeID, sendHttpRequest]);

  const showCommentFormHandler = () => setIsAddingComment(true);

  const commentAddedHandler = useCallback(() => {
    sendHttpRequest(jokeID);
  }, [jokeID, sendHttpRequest]);

  if (status === 'pending') comments = <Loader className='centered'/>;
  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments}/>
  }
  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='mt-20'>This joke doesn`t have comments yet</p>
  }

  return (
    <>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <Button type='button' className='centered mt-10' onClick={showCommentFormHandler}>Add a Comment</Button>
      )}
      {isAddingComment && <NewCommentForm className='mt-10' jokeID={params.jokeID} onCommentAdded={commentAddedHandler} showForm={setIsAddingComment}/>}
      {comments}
    </>
  );
};

export default Comments;
