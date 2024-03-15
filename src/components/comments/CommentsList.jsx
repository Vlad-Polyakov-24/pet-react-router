import CommentItem from './CommentItem';
import styles from './Comments.module.scss';

const CommentsList = (props) => {
  const comments = props.comments.map(comment => <CommentItem key={comment.id} text={comment.text} />);

  return (
    <ul className='mt-20'>{comments}</ul>
  );
};

export default CommentsList;
