import BigNumber from 'bignumber.js';
import moment from 'moment';
import { convertToEth } from '@helpers/price.helpers';
import {
  HISTORY_BID_PLACED_EVENT,
  HISTORY_BID_WITHDRAWN_EVENT,
} from '@constants/history.constants';

export const prepareGraphHistory = (history) => {
  const sortedHistory = history.sort((a, b) => {
    if (a.timestamp === b.timestamp) {
      return new BigNumber(a.value, 10).comparedTo(new BigNumber(b.value));
    }

    return a.timestamp - b.timestamp;
  });

  let lastBidPlaced = null;

  const data = sortedHistory.map((item, index) => {
    const value = item.value ? item.value : 0;

    if (item.eventName === HISTORY_BID_PLACED_EVENT) {
      lastBidPlaced = item;
    }

    if (index !== 0 && item.eventName === HISTORY_BID_WITHDRAWN_EVENT) {
      const prevValue = lastBidPlaced && lastBidPlaced.value ? lastBidPlaced.value : 0;
      const prevValueBN = new BigNumber(prevValue);
      const valueBN = new BigNumber(value);
      const currentValue = prevValueBN.minus(valueBN);
      return [item.timestamp * 1000, Number(convertToEth(currentValue.toString(10)))];
    }

    return [item.timestamp * 1000, Number(convertToEth(item.value ? item.value : 0))];
  });

  return data;
};

export const prepareGraphAuctions = (auctions) => {
  const sortedAuctions = auctions
    .filter((item) => item.topBid !== null)
    .sort((a, b) => a.endTime - b.endTime);

  const data = sortedAuctions.map((item) => [
    item.endTime * 1000,
    Number(convertToEth(item.topBid)),
  ]);

  return data;
};

export const prepareMainGraphStats = (items, monaPerEth) => {
  const monaPerEthBN = new BigNumber(monaPerEth ? monaPerEth : 0);
  const sortedAuctions = items
    .filter((item) => item.totalBidValue !== null)
    .sort((a, b) => moment(a.id).unix() - moment(b.id).unix());

  const data = sortedAuctions.map((item) => [
    moment(item.id).valueOf(),
    Number(
      convertToEth(
        new BigNumber(item.totalBidValue)
          .plus(new BigNumber(item.totalMarketplaceVolumeInETH))
          .plus(new BigNumber(item.totalMarketplaceVolumeInMona).times(monaPerEthBN))
      )
    ),
  ]);

  return data;
};
