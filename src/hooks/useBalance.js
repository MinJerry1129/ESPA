import { useWallet } from "use-wallet";
import { providers as EthersProviders } from "ethers";
import { useMemo } from "react";

export function useBalance() {
  const { ethereum, account } = useWallet();
  const ethers = useMemo(
    () => (ethereum ? new EthersProviders.Web3Provider(ethereum) : null),
    [ethereum]
  );

  const getETHBalance = () => ethers.getBalance(account);

  return {
    ethers,
    getETHBalance,
  };
}
