import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const SmallPhotoWithText = ({
  id,
  name,
  photo,
  photoIsLink,
  address,
  className,
  addressLink,
  addressText,
  children,
  onClick
}) => (
  <div className={cn(styles.designerPhotoWrapper, className)} onClick={onClick}>
    {photo && !photoIsLink && (
      <>
        <img className={styles.designerPhoto} src={photo} alt="" />
        <p className={cn(styles.designerName, styles.designerNameLink)}>{name}</p>
      </>
    )}
    {name !== 'Digitalax' ? (
      <>
      </>
    ) : (
      <>
        {photo && photoIsLink && (
          <a className={styles.photoLinkWrapper}>
            <img
              className={cn(styles.designerPhoto, styles.designerPhotoLink)}
              src={photo}
              alt=""
            />
          </a>
        )}
        {id && <a className={cn(styles.designerName, styles.designerNameLink)}>{name}</a>}
      </>
    )}
    {address && (
      <p className={cn(styles.hashAddress, 'smallPhotoWithText__hashAddress')} title={address}>
        {address}
      </p>
    )}
    {addressLink && (
      <a
        className={styles.hashAddress}
        href={addressLink}
        target="_blank"
        rel="noreferrer"
        title={addressText}
      >
        {addressText}
      </a>
    )}
    {children}
  </div>
);

SmallPhotoWithText.propTypes = {
  className: PropTypes.string,
  photo: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  address: PropTypes.string,
  addressLink: PropTypes.string,
  addressText: PropTypes.string,
  photoIsLink: PropTypes.bool,
  children: PropTypes.any,
};

SmallPhotoWithText.defaultProps = {
  className: '',
  photo: '',
  name: '',
  id: '',
  address: '',
  addressLink: '',
  addressText: '',
  photoIsLink: false,
  children: null,
};

export default memo(SmallPhotoWithText);
