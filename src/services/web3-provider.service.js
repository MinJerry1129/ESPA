import Web3 from 'web3';
import { isMetamaskInstalled } from '@services/metamask.service';
import config from '@utils/config';
import { WALLET_METAMASK, WALLET_ARKANE } from '@constants/global.constants';
import { STORAGE_WALLET } from '@constants/storage.constants';

const options = {
  clientId: 'DIGITALAX',
  // rpcUrl: 'https://kovan.infura.io/v3/YOUR-PROJECT-ID', //optional
  environment: 'production', //optional, production by default
  signMethod: 'POPUP', //optional, REDIRECT by default
  // bearerTokenProvider: () => 'obtained_bearer_token', //optional, default undefined
  //optional: you can set an identity provider to be used when authenticating
  // authenticationOptions: {
  //   idpHint: 'google'
  // },
  secretType: 'MATIC', //optional, ETHEREUM by default
};

export const setWeb3Provider = async () => {
  const WALLET = localStorage.getItem(STORAGE_WALLET);
  if (WALLET === WALLET_METAMASK) {
    const provider = isMetamaskInstalled() ? window.ethereum : config.DEFAULT_WEB3_URL;
    window.web3 = new Web3(provider);
    return;
  }
  if (WALLET === WALLET_ARKANE) {
    const provider = await Arkane.createArkaneProviderEngine(options);
    window.web3 = new Web3(provider);
    return;
  }
};
