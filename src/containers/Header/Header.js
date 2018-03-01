import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/logo.svg';
import styles from './Header.scss';

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        <header
          className={styles.header}
          style={{ backgroundColor: this.props.color }}
        >
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

Header.defaultProps = {
  color: '#111111',
};

Header.propTypes = {
  color: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  return {
    color: state.header.color,
  };
};

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;
