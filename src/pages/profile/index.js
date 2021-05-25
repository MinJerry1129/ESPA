import React from 'react';
import cn from 'classnames';
import copy from 'copy-to-clipboard';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { toast } from 'react-toastify';
import NFTProduct from '@components/nft-product';
import Button from '@components/Button';
import { getUser, getAccount } from '@selectors/user.selectors';
import { useProfile, useNFTs } from '@hooks/espa/user.hooks';
import accountActions from '@actions/user.actions';
import Loader from '@components/loader';
import styles from './styles.module.scss';

const Profile = ({ history }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  if (!user) {
    dispatch(accountActions.checkStorageAuth());
    return;
  }
  const account = user.get('wallet');
  const nfts = useNFTs(account);

  const getGameTags = (str) => {
    if (!str) {
      return '';
    }
    let tags = str.replace(', ', ',').split(',');
    tags.sort();
    return tags.reduce((total, cur) => {
      let capitalize = cur.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
      return `${total}#${capitalize} `;
    }, '');
  };

  const onCopyWalletAddress = () => {
    copy(account);
    toast("Wallet Address is copied to the clipboard");
  };

  if (!user || !nfts) {
    return <Loader size="large" className={styles.loader} />;
  }

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.leftSideWrapper}>
        <div className={styles.avatarIDSection}>
          <img src={user.get('avatar') ? user.get('avatar') : '../../../images/user-photo.svg'} />
          <span>{user.get('username')}</span>
        </div>
        <span className={styles.email}>{user.get('email')}</span>
        <div className={styles.inputItemwrapper}>
          <span>Changing Room</span>
          <p>{nfts.length}</p>
        </div>
        <div className={styles.inputItemwrapper}>
          <span>Game Tags</span>
          <p>{getGameTags(user.get('gameTags'))}</p>
        </div>
        <div className={styles.inputItemwrapper}>
          <span>Whitelisted IP address</span>
          <p>{user.get('ipAddrs')}</p>
        </div>
        <div className={styles.walletAddress}>
          <span>Connected Wallet Address</span>
          <p>
            {account}
            <img src="/images/clipboard.png" onClick={onCopyWalletAddress} />
          </p>
        </div>
        <Button
          className={styles.modalButton}
          background="black"
          onClick={() => Router.push('/profile/edit')}
        >
          Edit Profile
        </Button>
      </div>
      <div className={styles.rightSideWrapper}>
        <p className={styles.titleWrapper}>CHANGING ROOM</p>
        <div className={styles.divider} />
        <ul className={cn(styles.list, 'animate__animated animate__fadeIn')}>
          {nfts.map((nft) => (
            <NFTProduct key={`nft_${nft.id}`} nft={nft} nftId={parseInt(nft.id)} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
