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
    <div className="w-full invisible md:visible">
      <div className="bg-black z-50 px-4 xl:px-12 flex items-center text-xs text-white justify-between absolute w-full">
        <div className="flex items-center my-4">
          <Link href="/">
            <a>
              <img src="/logo.png" alt="logo" />
            </a>
          </Link>
          <Link href="/whoweare">
            <a className="mx-2 lg:mx-4 menu-link">WHO WE ARE</a>
          </Link>
          <Link href="/ecosystem">
            <a className="mx-5 menu-link">ECOSYSTEM</a>
          </Link>
          <Link href="/esports">
            <a className="mx-2 lg:mx-4 menu-link">CASUAL ESPORTS</a>
          </Link>
          <Link href="/">
            <a className="mx-2 lg:mx-4 menu-link">CLEAR CONDITIONS</a>
          </Link>
          <Link href="https://skins.digitalax.xyz">
            <a className="mx-2 lg:mx-4 menu-link" target="_blank">Get skinned</a>
          </Link>
          {/* <Link href="https://skins.digitalax.xyz">
            <a className="mx-2 lg:mx-5 menu-link text-red-600 text-xs" target="_blank">Get skinned</a>
          </Link> */}
          <Link href="/leaderboard">
            <a className="mx-4 menu-link leaderboard">
              Leaderboard
            </a>
          </Link>
          <Link href="/digitalid">
            <a className="mx-4 menu-link digi">
              Digi ID
            </a>
          </Link>
          <Link href="/">
            <a className="mx-4 menu-link text-red-600">
              $MONA
            </a>
          </Link>
          <Link href="/discover">
            <a className="mx-4 lg:mx-4 menu-link discover">DISCOVER</a>
          </Link>
          
          {/* <a
            href="https://espa4play.medium.com"
            target="_blank"
            className="mx-2 lg:mx-5 menu-link text-xs"
          >
            <span className="flex">
              NEWS
              <img width="18" src="/menu-arrow.svg" alt="arrow" />
            </span>
          </a>
          <Link href="/mustread">
            <a className="mx-2 lg:mx-5 menu-link text-red-600 text-xs">Must read</a>
          </Link> */}
          
        </div>
        <div className={styles.rightSideWrapper}>
        {user ? (
          <div className={styles.buttonWrapper}>
            <SmallPhotoWithText
              photo={user.get('avatar') ? user.get('avatar') : '/images/user-photo.svg'}
              address={user.get('username')}
              className={styles.hashAddress}
              onClick={() => setIsShowMenu(!isShowMenu)}
            >
              <button className={styles.arrowBottom} onClick={() => setIsShowMenu(!isShowMenu)}>
                <img
                  className={styles.arrowBottomImg}
                  src="/images/icons/arrow-bottom.svg"
                  alt="arrow-bottom"
                />
              </button>
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
          <Link href="/signin/">
            <a className="mr-10 right-menu">SIGN IN</a>
          </Link>
        )}
          <Link href="/">
            <button className="espa-bg-yellow py-3 px-8 right-menu">
              PLAY NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
