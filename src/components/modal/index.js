import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const Modal = ({
  className, title, withCloseIcon, text, onClose, children, titleStyle,
}) => (
  <div className={styles.wrapper}>
    <div className={cn(styles.modal, className)}>
      <div className={styles.content}>
        <div className={styles.corner}></div>
        <div className={styles.comment}></div>
        <img className={styles.background_img} src="/create_wallet.png"/>
        <div className={styles.wallets}>
        {(title || withCloseIcon) && (
          <div className={styles.modalHeader}>
            {title && <p className={cn(styles.title, titleStyle)}>{title}</p>}
            {withCloseIcon && (
              <button
                onClick={onClose}
                className={styles.closeIcon}
              >
                <img src="/images/icons/close-button.svg" alt="close-icon" />
              </button>
            )}
          </div>
        )}
        <div>
          {!!text && text.map((item) => <p key={item} className={styles.modalBodyText}>{item}</p>)}
        </div>
        {children}
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  className: PropTypes.any,
  title: PropTypes.string,
  withCloseIcon: PropTypes.bool,
  text: PropTypes.array,
  onClose: PropTypes.func,
  children: PropTypes.any,
  titleStyle: PropTypes.any,
};

Modal.defaultProps = {
  className: '',
  title: '',
  withCloseIcon: true,
  text: [],
  onClose: () => {},
  children: null,
  titleStyle: {},
};

export default Modal;
