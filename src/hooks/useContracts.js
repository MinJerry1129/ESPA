import { providers as EthersProviders } from "ethers";
import Web3 from "web3";
/**
 * Switch between the two for testing / production.
 */

export function useContracts() {
  const provider = new Web3.providers.HttpProvider(
    "https://eth-mainnet.alchemyapi.io/v2/cVQWBBi-SmHIeEpek2OmH5xgevUvElob"
  );

  const web3Provider = new EthersProviders.AlchemyProvider(
    "homestead",
    "cVQWBBi-SmHIeEpek2OmH5xgevUvElob"
  );

  const signer = web3Provider ? web3Provider : null;

  return {
    web3Provider,
  };
}
