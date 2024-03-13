import React from 'react';
import styles from './Input.module.scss';

const Input = React.forwardRef(({label, tag = 'input', ...props}, ref) => {
  const field = tag === 'textarea'
    ? <textarea className={styles.input__field} {...props} ref={ref}></textarea>
    : <input className={styles.input__field} {...props} ref={ref}/>;

  return (
    <div className={styles.input}>
      <label htmlFor={props.id} className={styles.input__label}>{label}</label>
      {field}
    </div>
  );
});

export default Input;
