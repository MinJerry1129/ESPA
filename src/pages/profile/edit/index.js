import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { toast } from 'react-toastify';
import Button from '@components/Button';
import Loader from '@components/loader';
import userActions from '@actions/user.actions';

import { getUser, getIsLoading } from '@selectors/user.selectors';
import styles from './styles.module.scss';
import { useMyIP } from '@hooks/espa/user.hooks';

const EditProfile = ({ history }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const profile = useSelector(getUser);
  const isLoading = useSelector(getIsLoading);
  const myIP = useMyIP();

  if (!profile) {
    dispatch(userActions.checkStorageAuth());
  }

  useEffect(() => {
    if (!profile) {
      return;
    }
    setUser({
      wallet: profile.get('wallet'),
      email: profile.get('email'),
      username: profile.get('username'),
      randomString: profile.get('randomString'),
      avatar: profile.get('avatar'),
      gameTags: profile.get('gameTags'),
      ipAddrs: profile.get('ipAddrs'),
    });
  }, [profile]);

  if (!user || myIP === null) {
    return <Loader size="large" className={styles.loader} />;
  }

  const showBrowserForAvatar = () => {
    document.getElementById('avatar-upload').click();
  };

  const onChangeFile = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (files.length === 0) {
      return;
    }
    dispatch(userActions.uploadAvatar(files[0]));
  };

  const onChange = (e, key) => {
    setUser({
      ...user,
      [key]: e.target.value,
    });
  };

  const validateUserName = (username) => {
    const regEx = /^[A-Za-z0-9]*$/;
    return regEx.test(String(username));
  };

  const validateEmail = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
  };

  const validIp = (address) => {
    const regEx = /^(([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)\.){3}([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)$/;
    return regEx.test(address);
  };

  const saveProfile = () => {
    if (user.username.length > 10) {
      toast('Must not exceed 10 characters');
      return;
    }
    if (!validateUserName(user.username)) {
      toast('User ID must contains letters and numbers only!');
      return;
    }
    if (!validateEmail(user.email)) {
      toast('You have entered an invalid Email address!');
      return;
    }
    if (user.ipAddrs && !validIp(user.ipAddrs)) {
      toast('You have entered an invalid IP address!');
      return;
    }
    dispatch(userActions.updateProfile(user));
  };

  const onDetectIp = () => {
    if (!myIP) {
      toast('Cannot detect your IP');
      return;
    }
    setUser({
      ...user,
      ipAddrs: myIP,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileWrapper}>
        <div className={styles.avatarWrapper}>
          <img src={user.avatar ? user.avatar : '../../../images/user-photo.svg'} />
          <input
            id="avatar-upload"
            type="file"
            onChange={onChangeFile}
            hidden
            accept=".jpg, .png, .gif"
          />
          <Button className={styles.uploadButton} background="black" onClick={showBrowserForAvatar}>
            UPLOAD
          </Button>
          <span>JPG, PNG, GIF. NO BIGGER THAN 5MB.</span>
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.inputSection}>
            <span>CHANGE USER ID</span>
            <input value={user.username} onChange={(e) => onChange(e, 'username')} />
          </div>
          <div className={styles.inputSection}>
            <span>CHANGE EMAIL</span>
            <input value={user.email} onChange={(e) => onChange(e, 'email')} />
          </div>
          <div className={styles.inputSection}>
            <span>GAME TAGS</span>
            <p>LIST YOUR FAVOURITE GAMES. SEPARATE BY COMMAS.</p>
            <input value={user.gameTags} onChange={(e) => onChange(e, 'gameTags')} />
          </div>
          <div className={styles.inputSection}>
            <div className={styles.ipAddrLabel}>
              <span>IP ADDRESS</span>
              <span className={styles.questionMark}>?</span>
              <span className={styles.hint}>
                DIGITALAX uses your IP Address as an extra authentication for anonymous game
                environments. You must use the same IP Address in order to participate in certain
                games.
              </span>
            </div>
            <div className={styles.ipInput}>
              <input
                value={user.ipAddrs}
                placeholder="xxx.xxx.xxx.xxx"
                onChange={(e) => onChange(e, 'ipAddrs')}
              />
              <Button className={styles.detectIpButton} background="black" onClick={onDetectIp}>
                DETECT IP
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Button className={styles.saveButton} background="black" onClick={saveProfile}>
        SAVE
      </Button>
      <Button
        className={styles.backProfileButton}
        background="black"
        onClick={() => Router.push('/profile')}
      >
        BACK TO PROFILE
      </Button>
      {isLoading && <Loader size="large" className={styles.pageLoader} />}
    </div>
  );
};

export default EditProfile;
