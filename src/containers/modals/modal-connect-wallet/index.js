import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@components/modal';
import Notification from '@components/notification';

import { closeConnectMetamaskModal, closeNotInstalledMetamask } from '@actions/modals.actions';
import userActions from '@actions/user.actions';
import { WALLET_METAMASK, WALLET_ARKANE } from '@constants/global.constants';

import styles from './styles.module.scss';

const ModalConnectWallet = ({ className, title }) => {
  const dispatch = useDispatch();
  const isShowNotificationConnectMetamask = useSelector((state) =>
    state.modals.get('isShowNotificationConnectMetamask')
  );

  const handleClose = () => {
    dispatch(closeConnectMetamaskModal());
    dispatch(closeNotInstalledMetamask());
  };

  const handleClick = (source) => {
    dispatch(userActions.tryToLogin(source));
  };

  return (
    <>
      {createPortal(
        <Modal onClose={() => handleClose()} title={title} className={styles.connectwallet}>
          <div className={styles.modalItem} onClick={() => handleClick(WALLET_ARKANE)}>
            <span className={styles.modalsTextForIcon}>Arkane Wallet</span>
            <img
              className={styles.modalIcon}
              src="https://raw.githubusercontent.com/ArkaneNetwork/content-management/master/ads/icons/arkane-network.png"
              alt="arkane"
            />
          </div>
          <div className={styles.modalItem} onClick={() => handleClick(WALLET_METAMASK)}>
            <span className={styles.modalsTextForIcon}>Metamask</span>
            <img className={styles.modalIcon} src="/images/icons/metamask.svg" alt="metamask" />
            {isShowNotificationConnectMetamask && (
              <Notification
                text={['You have to install the metamask extension.']}
                className={styles.notificationBox}
              />
            )}
          </div>
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalConnectWallet.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

ModalConnectWallet.defaultProps = {
  className: '',
  title: 'Connect Wallet',
};

export default ModalConnectWallet;
