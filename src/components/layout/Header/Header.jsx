import styles from './Header.module.scss';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <strong className={styles.header__logo}>
          <Link to='/' className={styles['header__logo-link']}>
            <span>LOGO</span>
          </Link>
        </strong>
        <nav>
          <ul className={styles['header__nav-list']}>
            <li className={styles['header__nav-item']}>
              <NavLink to='/jokes' exact activeClassName={styles['active']} className={styles['header__nav-link']}><span>Jokes</span></NavLink>
            </li>
            <li className={styles['header__nav-item']}>
              <NavLink to='/add-joke' exact activeClassName={styles['active']} className={styles['header__nav-link']}><span>Add a Joke</span></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
