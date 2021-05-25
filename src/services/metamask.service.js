export const isMetamaskInstalled = () => typeof window.ethereum !== 'undefined';

export const handleSignMessage = async ({ publicAddress, signMsg }) => {
  return new Promise((resolve, reject) => {
    window.web3.eth.personal.sign(signMsg, publicAddress, (err, signature) => {
      if (err) return reject(err);
      return resolve({ publicAddress, signature });
    });
  });
};
