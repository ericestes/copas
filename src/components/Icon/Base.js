import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames/bind';

import styles from './Icon.scss';

export default function Base(props) {
  const { height, width, children, ...rest } = props;

  const trueWidth = props.width || props.height ? props.width : '100%';
  const trueHeight = props.width || props.height ? props.height : null;

  return (
    <svg
      width={trueWidth}
      height={trueHeight}
      className={styles.container}
      {...rest}
    >
      {children}
    </svg>
  );
}

Base.defaultProps = {
  height: null,
  width: null,
};

Base.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};
