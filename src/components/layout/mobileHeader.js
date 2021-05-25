import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';
import Link from "next/link";
import { getUser } from '@selectors/user.selectors';
import accountActions from '@actions/user.actions';
import SmallPhotoWithText from '@components/small-photo-with-text';
import styles from './header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [isShowMenu, setIsShowMenu] = useState(false);

  if (!user) {
    dispatch(accountActions.checkStorageAuth());
  }

  const handleProfileClick = () => {
    setIsShowMenu(false);
    Router.push('/profile');
  };
  const handleLogoutClick = () => {
    setIsShowMenu(false);
    dispatch(accountActions.logout());
  };

  return (
    <div className="w-full visible md:invisible">
      <div className="bg-black px-4 flex flex-col items-center text-xs text-white justify-between absolute w-full">
        <div className="flex items-center justify-between w-full mt-4">
          <Link href="/">
            <a className="block w-40">
              <img src="/logo.png" alt="logo" />
            </a>
          </Link>
          <div className="flex items-center">
            <Link href="/leaderboard">
              <a className="mx-2 menu-link text-xs leaderboard">
                Leaderboard
              </a>
            </Link>
            <Link href="/mustread">
              <a className="mx-2 menu-link text-red-600 text-xs text-center">Must read</a>
            </Link>
            {user ? (
              <div className={styles.buttonWrapper}>
                <SmallPhotoWithText
                  photo={user.get('avatar') ? user.get('avatar') : '/images/user-photo.svg'}
                  address={user.get('username')}
                  className={styles.hashAddress}
                  onClick={() => setIsShowMenu(!isShowMenu)}
                >
                  <img
                    className={styles.arrowBottomImg}
                    src="/images/icons/arrow-bottom.svg"
                    alt="arrow-bottom"
                  />
                </SmallPhotoWithText>
                {isShowMenu && (
                  <div className={styles.menuWrapper}>
                    <button onClick={() => handleProfileClick()} className={styles.menuButton}>
                      Profile
                    </button>
                    <button onClick={() => handleLogoutClick()} className={styles.menuButton}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/signin">
                <a className="mx-4 text-xs">SIGN IN</a>
              </Link>
            )}
            <Link href="/">
            <button className="espa-bg-yellow py-3 px-2 text-xs">
              PLAY NOW
            </button>
          </Link>
          </div>
        </div>
        <div className="flex items-center my-4 w-100 w-full justify-between items-center">
          <Link href="/whoweare">
            <a className="mx-2 menu-link text-xs">WHO WE ARE</a>
          </Link>
          <Link href="/discover">
            <a className="mx-2 menu-link text-xs">DISCOVER</a>
          </Link>
          <Link href="/esports">
            <a className="mx-2 menu-link text-xs">ESPORTS</a>
          </Link>
          <a
            href="https://espa4play.medium.com"
            target="_blank"
            className="mx-2 menu-link text-xs"
          >
            <span className="flex">
              NEWS
              <img width="11" src="/menu-arrow.svg" alt="arrow" />
            </span>
          </a>
          <a
            href="https://skins.digitalax.xyz"
            target="_blank"
            className="mx-2 menu-link text-xs"
          >
            <span className="flex">
              Get skinned
              <img width="11" src="/menu-arrow.svg" alt="arrow" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
