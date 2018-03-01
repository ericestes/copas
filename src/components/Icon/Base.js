import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames/bind';

import styles from './Icon.scss';

export default function Base(props) {
  const { height, width, children, ...rest } = props;

  return (
    <svg width={width} height={height} className={styles.container} {...rest}>
      {children}
    </svg>
  );
}

Base.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};
