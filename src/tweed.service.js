const { TweedBackendSDK } = require("@paytweed/backend-sdk");
const nftService = require("./nft.service");

class TweedService {
  async initialize() {
    this._client = await TweedBackendSDK.setup({
      apiKey: "IcZ9nUMJKjolIpgKbc6OkkZdwHHJLJ6B",
      apiSecret: "Le_rjSWd3QR4PauOw4nbEkOZ_ZnnbBUl0fUjLcsC5oV7i4-COJhJ6dXL8Nud7_60",
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
