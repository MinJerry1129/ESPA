import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@components/Button';
import Modal from '@components/modal';
import { closeConnectMaticModal } from '@actions/modals.actions';
import styles from './styles.module.scss';

const ModalConnectMatic = ({ className, title, buttonText }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeConnectMaticModal());
  };

  return (
    <>
      {createPortal(
        <Modal
          onClose={() => handleClose()}
          title={title}
          titleStyle={styles.textCenter}
          className={className}
        >
          <p className={styles.description}>
            Please make sure your wallet is connected to Matic Network so that you can get skinned!
          </p>
          <Button background="black" className={styles.button} onClick={handleClose}>
            {buttonText}
          </Button>
        </Modal>,
        document.body
      )}
    </>
  );
};

ModalConnectMatic.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
};

ModalConnectMatic.defaultProps = {
  className: '',
  title: 'CONNECT TO MATIC!',
  buttonText: 'ACCEPT THE QUEST',
};

export default ModalConnectMatic;
