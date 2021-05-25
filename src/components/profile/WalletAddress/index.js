import React from 'react'
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import styles from './styles.module.scss'
import TextFrame from '../TextFrame'

const WalletAddress = props => {
  const { address } = props

  const onCopyWalletAddress = () => {
    copy(address)
    toast("Wallet Address is copied to the clipboard")
  };


  return (
    <TextFrame
      className={styles.wrapper}
      caption="CONNECTED WALLET"
      captionWidth="28%"
    >
      <div className={styles.walletAddress}>
        { address }
      </div>
      <button className={styles.copyButton}>
        <img src="/images/clipboard.png" onClick={onCopyWalletAddress} />
      </button>
    </TextFrame>
  )
}

export default WalletAddress