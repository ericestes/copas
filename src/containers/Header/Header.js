import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import styles from './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
