const { TweedBackendSDK } = require("@paytweed/backend-sdk");
const nftService = require("./nft.service");

class TweedService {
  async initialize() {
    this._client = await TweedBackendSDK.setup({
      apiKey: "15cVDEv7E9saty6TRjmVoel78ibLXmdc",
      apiSecret: "7NqjB6yVfULNDx-3Y06H5T51WQN7DSPvAA7c5pOIiU-oN9kxR1a5xpaOaM4PmYn1",
      defaultBlockchainIds: ["bnbTestnet"],
      callbacks: {
        getNftPurchaseData: async ({nftId}) => nftService.getNFTById(nftId),
        getTokenPurchaseData : async({tokenId}) => nftService.getTokenById(tokenId)
      },
    });
    return this._client;
  }
}

module.exports = new TweedService();
