import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.scss';

export default function Button(props) {
  const { color, size, children, onClick, ...rest } = props;

  return (
    <button
      style={{ color }}
      className={classNames(styles.button, styles[size], styles[color])}
      onClick={onClick}
      {...rest}
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
  color: 'primary',
  size: 'normal',
  onClick: () => {},
};
