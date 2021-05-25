import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const Loader = ({ className, size }) => (
  <div className={cn(styles.wrapper, className)}>
    <img
      className={cn(styles.loader, {
        [styles.default]: size === 'default',
        [styles.large]: size === 'large',
      })}
      src="/images/icons/loader.svg"
      alt="loader"
    />
  </div>
);

Loader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large']),
};

Loader.defaultProps = {
  className: '',
  size: 'default',
};

export default Loader;
