import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.scss';

export default function Button(props) {
  const { children, onClick } = props;
  const color = props.color || 'primary';
  const size = props.size || 'normal';

  return (
    <button
      style={{ color }}
      className={classNames(styles.button, styles[size], styles[color])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};
