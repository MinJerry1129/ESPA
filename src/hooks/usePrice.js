import CoinGecko from "coingecko-api";
import { useEffect, useState } from "react";

export function usePrice() {
  const client = new CoinGecko();
  const [ethUSD, setEthUsd] = useState(0);
  const [linkUSD, setLinkUsd] = useState(0);
  const [btcUSD, setBtcUsd] = useState(0);

  useEffect(() => {
    client.simple
      .price({ ids: ["ethereum"], vs_currencies: "usd" })
      .then(({ data, success }) => {
        if (success) {
          setEthUsd(data.ethereum.usd);
        }
      });

    client.simple
      .price({ ids: ["link"], vs_currencies: "usd" })
      .then(({ data, success }) => {
        if (success) {
          setLinkUsd(data.link.usd);
        }
      });

    client.simple
      .price({ ids: ["bitcoin"], vs_currencies: "usd" })
      .then(({ data, success }) => {
        if (success) {
          setBtcUsd(data.bitcoin.usd);
        }
      });
  }, []);

  return { ethUSD, linkUSD, btcUSD };
}
