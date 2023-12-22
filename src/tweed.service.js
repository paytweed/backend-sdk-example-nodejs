const { TweedBackendSDK } = require("@paytweed/backend-sdk");
const nftService = require("./nft.service");

class TweedService {
  async initialize() {
    this._client = await TweedBackendSDK.setup({
      apiKey: "<YOUR_API_KEY>",
      apiSecret: "<YOUR_API_SECRET>",
      defaultBlockchainIds: ["ethereumSepolia"],
      callbacks: {
        getNftPurchaseData: async ({nftId}) => nftService.getNFTById(nftId),
        getTokenPurchaseData : async({tokenId}) => nftService.getTokenById(tokenId)
      },
    });
    return this._client;
  }
}

module.exports = new TweedService();
