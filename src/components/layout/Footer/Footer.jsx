import React from 'react';
import styles from './Footer.module.scss';
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav>
          <ul className={styles['footer__nav-list']}>
            <li>
              <NavLink to='/jokes' activeClassName={styles['active']} className={styles['footer__nav-link']}>Jokes</NavLink>
            </li>
            <li>
              <NavLink to='/add-joke' activeClassName={styles['active']} className={styles['footer__nav-link']}>Add a Joke</NavLink>
            </li>
          </ul>
        </nav>
        <p className={styles.footer__copyright}>︎copyright &copy; 2024 Vladyslav Poliakov</p>
      </div>
    </footer>
  );
};

export default Footer;
