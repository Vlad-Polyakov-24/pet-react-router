import React from 'react';
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const Button = ({children, className, ...props}) => {
  const classes = className ? `${styles.btn} ${className.split(' ').map(name => styles[name] ? styles[name] : name).join(' ')}` : styles.btn;

  if (props.type === 'link') return <Link className={classes} {...props}>{children}</Link>

  return <button className={classes} {...props}>{children}</button>
};

export default Button;
