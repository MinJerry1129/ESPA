export const onDaysChange = `
  subscription onAuctionsChangeByIds($date: String!) {
    days(first: 1000, where: {id_gt: $date }) {
      id
      totalBidValue
      totalWithdrawalValue
      totalNetBidActivity
      totalMarketplaceVolumeInETH
      totalMarketplaceVolumeInMona
    }
  }`;

export const onAuctionsChange = `
  subscription onAuctionsChange {
    digitalaxGarmentAuctions(first: 1000, where:{resulted_not_in:[true]}) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
      garment {
        id
        designer
        primarySalePrice
        tokenUri
        children {
          amount
          tokenUri
          id
        }
      }
      designer {
        id
      }
      contract {
        id
        minBidIncrement
        bidWithdrawalLockTime
      }
    }
  }`;

export const onAllAuctionsChange = `
  subscription onAuctionsChange {
    digitalaxGarmentAuctions(first: 1000) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
      garment {
        id
        designer
        primarySalePrice
        tokenUri
        children {
          amount
          tokenUri
          id
        }
      }
      designer {
        id
      }
      contract {
        id
        minBidIncrement
        bidWithdrawalLockTime
      }
    }
  }`;

export const onPreviousAuctionsChange = `
  subscription onPreviousAuctionsChange {
    digitalaxGarmentAuctions(first: 1000, where: {resulted_in: [true]}) {
      id
      resulted
      reservePrice
      startTime
      endTime
      resulted
      resultedTime
      topBidder {
        id
      }
      topBid
      lastBidTime
      garment {
        id
        designer
        primarySalePrice
        tokenUri
        children {
          amount
          tokenUri
          id
        }
      }
      designer {
        id
      }
      contract {
        id
        minBidIncrement
        bidWithdrawalLockTime
      }
    }
  }`;

export const onAuctionsChangeByIds = `
  subscription onAuctionsChangeByIds($ids: [ID!]) {
    digitalaxGarmentAuctions(first: 1000, where: {id_in: $ids}) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`;

export const onDesignerByIds = `
  subscription onDesignerGarments($ids: [ID!]) {
    digitalaxGarmentDesigners(first: 1000, where: { id_in: $ids }) {
      id
      listings {
        id
        reservePrice
        startTime
        endTime
        resulted
        topBidder {
          id
        }
        topBid
        lastBidTime
      }
      garments(first:1000) {
        id
        tokenUri
      }
    }
  }
`;

export const onMarketplaceHistoryByIds = `
  subscription onMarketplaceHistoryByIds($ids: [ID!]) {
    digitalaxMarketplacePurchaseHistories(first: 1000, where: {garmentAuctionId_in: $ids}) {
      garmentAuctionId
      eventName
      timestamp
      rarity
      transactionHash
      buyer
      isPaidWithMona
      monaTransferredAmount
      platformFee
      value
      token {
        id
        owner
        primarySalePrice
        tokenUri
        children {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;

export const onAuctionsHistoryByIds = `
  subscription onAuctionsHistoryByIds($ids: [ID!]) {
    digitalaxGarmentAuctionHistories(first: 1000, where: {eventName_in: ["BidPlaced", "BidWithdrawn"], token_in: $ids}) {
      id
      eventName
      timestamp
      transactionHash
      bidder {
        id
      }
      value
      token {
        id
        owner
        primarySalePrice
        tokenUri
        children {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;

export const onResultedAuctionsByEndTimeGtAndIds = `
  subscription getAuctionsHistoryByTimestampGt($ids: [ID!], $endTime: BigInt!) {
    digitalaxGarmentAuctions(where: {id_in: $ids, resulted_not_in:[false], endTime_gt: $endTime }) {
      id
      reservePrice
      endTime
      startTime
      resulted
      topBidder {
        id
      }
      topBid
      lastBidTime
    }
  }
`;

export const onDigitalaxGarmentsCollectionChange = `
  subscription onDigitalaxGarmentsCollectionChange($garmentAuctionNFTId: BigInt!)
  {
    digitalaxGarmentCollections(first: 1000, where: { garmentAuctionID: $garmentAuctionNFTId }) {
      id
      garmentAuctionID
      rarity
      garments(first:1000) {
        id
        designer
        owner
        primarySalePrice
        tokenUri
        children {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;

export const onDigitalaxGarmentsCollectionChangeByIds = `
  subscription onDigitalaxGarmentsCollectionChange($ids: [BigInt!])
  {
    digitalaxGarmentCollections(first: 1000, where: { garmentAuctionID_in: $ids }) {
      id
      garmentAuctionID
      rarity
      garments(first: 1000) {
        id
        designer
        owner
        primarySalePrice
        tokenUri
        children {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;

export const getAllDigitalaxGarmentsCollections = `
  subscription getAllDigitalaxGarmentsCollections
  {
    digitalaxGarmentCollections(first: 1000) {
      id
      garmentAuctionID
      rarity
      garments(first: 1000) {
        id
        designer
        owner
        primarySalePrice
        tokenUri
        children {
          id
          amount
          tokenUri
        }
      }
    }
  }
`;

export const onDigitalaxMarketplaceOffers = `
  subscription onDigitalaxMarketplaceOffers($ids: [ID!])
  {
    digitalaxMarketplaceOffers(first: 1000, where: { id_in: $ids }) {
      id
      primarySalePrice
      garmentCollection {
        id
        garmentAuctionID
        rarity
      }
      startTime
      amountSold
    }
  }
`;

export const allDigitalaxMarketplaceOffers = `
  subscription onDigitalaxMarketplaceOffers
  {
    digitalaxMarketplaceOffers(first: 1000) {
      id
      primarySalePrice
      garmentCollection {
        id
        garmentAuctionID
        rarity
        garments(first: 1000) {
          id
          tokenUri
        }
      }
      startTime
      amountSold
    }
  }
`;

export const onNFTGlobalStats = `
  subscription onNFTGlobalStats {
    digitalaxGarmentNFTGlobalStats {
      id
      totalSalesValue
      totalActiveBidsValue
      totalMarketplaceSalesInETH
      totalMarketplaceSalesInMona
      marketplacePlatformFee
    }
  }
`;
