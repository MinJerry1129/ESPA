import { Token, WETH, Fetcher, Route } from '@uniswap/sdk';

export const create = (tokenAddress, provider) => {
  const token = new Token(provider._network.chainId, tokenAddress, 18); // ChainId.MAINNET

  const fetchPairData = () => Fetcher.fetchPairData(token, WETH[token.chainId], provider);

  const getPrice = async () => {
    const pair = await fetchPairData().catch(console.error);
    const route = new Route([pair], token);
    return route.midPrice.toSignificant(6);
  };

  return { getPrice };
};
