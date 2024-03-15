import styles from './Comments.module.scss';

const CommentItem = (props) => {
  return (
    <li className={styles['comments__list-item']}>
      {props.text}
    </li>
  );
};

export default CommentItem;
